"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { OFFER_SLIDES } from "@/config/offers";

const STORAGE_KEY = "dm_offer_popup_v2_seen";
const DELAY_MS = 1000;
const AUTO_MS = 6000;
const HIDDEN_PATHS = [/^\/lms(?:\/|$)/];

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private mode */
  }
}

function trackMetaClick(label: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", "WhatsAppClick", { label });
}

/** Site-wide offer modal (Black Friday, then free demo). Shown once per tab session, ~1s after load. */
export function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const touchX = useRef<number | null>(null);
  const hidden = HIDDEN_PATHS.some((pattern) => pattern.test(pathname || ""));

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
  }, []);

  const go = useCallback((next: number) => {
    const total = OFFER_SLIDES.length;
    setIndex(((next % total) + total) % total);
  }, []);

  useEffect(() => {
    if (hidden || alreadySeen()) return;
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [hidden, pathname]);

  useEffect(() => {
    if (!open) return;
    previousOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = previousOverflow.current;
    };
  }, [open, close, go, index]);

  useEffect(() => {
    if (!open) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => go(index + 1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [open, index, go]);

  if (!open) return null;

  const slide = OFFER_SLIDES[index];

  return (
    <div className="bf-popup">
      <div className="bf-popup-backdrop" onClick={close} />
      <div
        className="bf-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-roledescription="carousel"
      >
        <h2 id="bf-popup-title" className="dmf-sr">Datamarcos offers</h2>
        <button
          ref={closeRef}
          type="button"
          className="bf-popup-close"
          aria-label="Close offer"
          onClick={close}
        >
          <X size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <div
          className="bf-popup-stage"
          onTouchStart={(event) => { touchX.current = event.changedTouches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const start = touchX.current;
            touchX.current = null;
            if (start == null) return;
            const delta = event.changedTouches[0].clientX - start;
            if (delta < -40) go(index + 1);
            if (delta > 40) go(index - 1);
          }}
        >
          <a
            className="bf-popup-banner"
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={slide.cta}
            onClick={() => {
              trackMetaClick(slide.cta);
              markSeen();
            }}
          >
            <picture>
              <source srcSet={slide.webp} type="image/webp" />
              <img
                src={slide.jpg}
                alt={slide.alt}
                width={1024}
                height={683}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </a>

          <button type="button" className="bf-popup-nav bf-popup-nav-prev" aria-label="Previous offer" onClick={() => go(index - 1)}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" className="bf-popup-nav bf-popup-nav-next" aria-label="Next offer" onClick={() => go(index + 1)}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="bf-popup-dots" role="tablist" aria-label="Offer posters">
          {OFFER_SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={item.label}
              className={`bf-popup-dot${i === index ? " is-on" : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
