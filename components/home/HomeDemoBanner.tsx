"use client";

import { FREE_DEMO_WHATSAPP_URL } from "@/config/offers";

function trackMetaClick() {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", "WhatsAppClick", { label: "home_free_demo_banner" });
}

/** Homepage promo near the top: Book Your Free Demo poster → WhatsApp. */
export function HomeDemoBanner() {
  return (
    <section className="dm-demo-banner" aria-label="Book a free demo">
      <div className="ds-wrap">
        <a
          className="dm-demo-banner-link"
          href={FREE_DEMO_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="home_free_demo_banner"
          onClick={trackMetaClick}
        >
          <picture>
            <source srcSet="/images/offers/book-free-demo.webp" type="image/webp" />
            <img
              src="/images/offers/book-free-demo.jpg"
              alt="Book your free Datamarcos demo. Learn GenAI, Agentic AI and FDE careers. Click to book your demo on WhatsApp."
              width={1024}
              height={683}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </a>
      </div>
    </section>
  );
}
