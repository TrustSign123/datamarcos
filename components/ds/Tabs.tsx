"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type DsTab = { id: string; label: string; icon?: ReactNode; content: ReactNode; aliases?: string[] };

/**
 * Accessible tabs: roving tabindex, arrow/Home/End keys, swipe between panels on touch, and URL-hash support
 * (a link to #placement opens that tab). Every panel stays in the HTML so search engines read all content.
 */
export function DsTabs({ tabs, label }: { tabs: DsTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const select = useCallback((index: number, focus = false) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    const btn = btns.current[next];
    if (focus) btn?.focus();
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [tabs.length]);

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const index = tabs.findIndex((tab) => tab.id === hash || tab.aliases?.includes(hash));
      if (index < 0) return;
      setActive(index);
      requestAnimationFrame(() => listRef.current?.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };
    // Same-page links (e.g. the header's /#placement) use pushState, which fires no hashchange: catch the click.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      const hash = url.hash.replace("#", "");
      if (!tabs.some((tab) => tab.id === hash || tab.aliases?.includes(hash))) return;
      event.preventDefault();
      history.pushState(null, "", `#${hash}`);
      fromHash();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick, true);
    return () => { window.removeEventListener("hashchange", fromHash); document.removeEventListener("click", onClick, true); };
  }, [tabs]);

  const onKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: tabs.length - 1 };
    if (event.key in keys) { event.preventDefault(); select(keys[event.key], true); }
  };

  return (
    <div className="ds-tabs">
      <div className="ds-tablist" role="tablist" aria-label={label} ref={listRef}>
        {tabs.map((tab, index) => (
          <button key={tab.id} ref={(el) => { btns.current[index] = el; }} type="button" role="tab" id={`tab-${tab.id}`} aria-controls={tab.id} aria-selected={index === active} tabIndex={index === active ? 0 : -1} onClick={() => select(index)} onKeyDown={onKey}>
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          id={tab.id}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          hidden={index !== active}
          className="ds-tabpanel"
          onTouchStart={(e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            const start = touch.current; touch.current = null;
            if (!start) return;
            const dx = e.changedTouches[0].clientX - start.x; const dy = e.changedTouches[0].clientY - start.y;
            if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.8 && !(e.target as HTMLElement).closest(".ds-reels, .ds-marquee, .ds-show-tabs")) select(active + (dx < 0 ? 1 : -1));
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
