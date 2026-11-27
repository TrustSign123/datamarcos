"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { BLACK_FRIDAY_WHATSAPP_URL } from "@/config/offers";

const STORAGE_KEY = "dm_offer_popup_v2_seen";
const DELAY_MS = 1000;
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

function trackMetaClick() {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", "WhatsAppClick", { label: "black_friday_popup" });
}

/** Site-wide Black Friday offer modal. Shown once per tab session, ~1s after load. */
export function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const hidden = HIDDEN_PATHS.some((pattern) => pattern.test(pathname || ""));

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
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
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = previousOverflow.current;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="bf-popup">
      <div className="bf-popup-backdrop" onClick={close} />
      <div
        className="bf-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
      >
        <h2 id="bf-popup-title" className="dmf-sr">Datamarcos Black Friday sale</h2>
        <button
          ref={closeRef}
          type="button"
          className="bf-popup-close"
          aria-label="Close Black Friday offer"
          onClick={close}
        >
          <X size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>
        <a
          className="bf-popup-banner"
          href={BLACK_FRIDAY_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="black_friday_popup"
          onClick={() => {
            trackMetaClick();
            markSeen();
          }}
        >
          <picture>
            <source srcSet="/images/offers/black-friday-2026.webp" type="image/webp" />
            <img
              src="/images/offers/black-friday-2026.jpg"
              alt="Datamarcos Black Friday sale: get 25% off on all AI and FDE programs. Level up your skills and accelerate your career. Limited time offer — click to claim your discount on WhatsApp."
              width={1024}
              height={683}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </a>
      </div>
    </div>
  );
}
