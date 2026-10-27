"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export type FdeNavItem = { id: string; label: string };

/**
 * Sticky in-page section nav with scroll-spy, plus the mobile bottom CTA bar.
 * Both CTAs open the site-wide lead form (data-dm-lead), so leads land in the same Sheet.
 */
export function FdeSectionNav({ items, course, brand, ctaPrefix = "FDE" }: {
  items: FdeNavItem[];
  course: string;
  /** Short label at the left of the sticky nav. Defaults to "FDE·Program". */
  brand?: ReactNode;
  /** Prefix for data-cta values, so leads show which program page they came from. */
  ctaPrefix?: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [showBar, setShowBar] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let spy: IntersectionObserver | undefined;
    let bar: IntersectionObserver | undefined;
    // Defer observers until the browser is idle so they never compete with first paint.
    const start = () => {
    const sections = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => Boolean(el));
    spy = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((section) => spy!.observe(section));

    const hero = document.getElementById("top");
    const apply = document.getElementById("apply");
    let heroGone = false;
    let applyVisible = false;
    bar = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroGone = !entry.isIntersecting;
        if (entry.target === apply) applyVisible = entry.isIntersecting;
      });
      setShowBar(heroGone && !applyVisible);
    });
    if (hero) bar.observe(hero);
    if (apply) bar.observe(apply);
    };
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const handle = idle ? idle(start) : window.setTimeout(start, 300);
    return () => {
      if (!idle) window.clearTimeout(handle);
      spy?.disconnect();
      bar?.disconnect();
    };
  }, [items]);

  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (list && link) {
      const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
      list.scrollTo({ left, behavior: "smooth" });
    }
  }, [active]);

  return (
    <>
      <nav className="fx-nav" aria-label="On this page">
        <div className="fx-wrap fx-nav-inner">
          <span className="fx-nav-brand" aria-hidden="true">{brand ?? <>FDE<b>·</b>Program</>}</span>
          <ul ref={listRef}>
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} data-target={item.id} aria-current={active === item.id ? "true" : undefined} className={active === item.id ? "is-active" : undefined}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a className="fx-nav-cta" href="#apply" data-dm-lead data-cta={`${ctaPrefix} section nav (apply)`} data-course={course}>Apply <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </nav>
      <div className={`fx-mbar${showBar ? " is-on" : ""}`} aria-hidden={!showBar}>
        <a href="#brochure" data-dm-download data-course={course} data-cta={`${ctaPrefix} mobile bar (syllabus)`} tabIndex={showBar ? 0 : -1}>Syllabus</a>
        <a className="fx-mbar-main" href="#apply" data-dm-lead data-cta={`${ctaPrefix} mobile bar (counsellor)`} data-course={course} tabIndex={showBar ? 0 : -1}>Talk to a counsellor <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </>
  );
}
