"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { FDE_COURSE } from "@/config/fde";

export function FdeAdApplyNow({ cta }: { cta: string }) {
  return (
    <p className="fde-ad-section-cta">
      <button
        type="button"
        className="fde-ad-btn fde-ad-btn-light fde-ad-apply-now"
        data-dm-lead
        data-course={FDE_COURSE}
        data-cta={cta}
      >
        Apply Now
      </button>
    </p>
  );
}

export function FdeAdStickyBar({ brochure }: { brochure: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero_sec");
    const apply = document.getElementById("apply");

    const modalOpen = () => {
      const host = document.getElementById("dm-lead-modal");
      const root = host?.shadowRoot;
      if (root?.querySelector(".overlay.open")) return true;
      return document.documentElement.style.overflow === "hidden";
    };

    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOn(false);
        document.documentElement.classList.remove("fde-ad-sticky-on");
        return;
      }
      const heroPast = hero ? hero.getBoundingClientRect().bottom < 64 : window.scrollY > 420;
      const applyBox = apply?.getBoundingClientRect();
      const applyInView = applyBox ? applyBox.top < window.innerHeight - 80 && applyBox.bottom > 80 : false;
      const drawer = document.querySelector(".fde-ad-drawer.is-open");
      const show = heroPast && !applyInView && !drawer && !modalOpen();
      setOn(show);
      document.documentElement.classList.toggle("fde-ad-sticky-on", show);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const timer = window.setInterval(update, 400);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearInterval(timer);
      document.documentElement.classList.remove("fde-ad-sticky-on");
    };
  }, []);

  return (
    <div className={`fde-ad-sticky${on ? " is-on" : ""}`} hidden={!on} aria-hidden={!on}>
      <a
        className="fde-ad-btn fde-ad-btn-ghost"
        href={brochure}
        data-cta="FDE ad LP mobile sticky - Download brochure"
        tabIndex={on ? 0 : -1}
      >
        <Download size={16} aria-hidden="true" />
        Brochure
      </a>
      <button
        type="button"
        className="fde-ad-btn fde-ad-btn-light fde-ad-apply-now"
        data-dm-lead
        data-course={FDE_COURSE}
        data-cta="FDE ad LP mobile sticky - Apply Now"
        tabIndex={on ? 0 : -1}
      >
        Apply Now
      </button>
    </div>
  );
}
