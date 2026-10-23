"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { courseForPath } from "@/config/lead";
import { readAttribution, trackEvent } from "@/lib/analytics";
import { LeadForm, matchCourse } from "./LeadForm";
import { ShadowPortal } from "./ShadowPortal";
import { leadFormStyles, leadModalStyles } from "./leadStyles";

/**
 * Site-wide lead-capture popup.
 *
 * Any element with the `data-dm-lead` attribute (or class `dm-apply`) opens it:
 *   <a href="#apply" data-dm-lead data-cta="Request a seat" data-course="Applied Agentic AI">…</a>
 * - data-course preselects a course (otherwise inferred from /programs/<slug>)
 * - data-cta is saved as "Source Button/CTA" (defaults to the element's text)
 * The original href is kept as a no-JS fallback.
 */

type OpenOptions = { course?: string; cta?: string; title?: string };

const LOGO = (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path fill="#245b83" d="M12 41c0-8.8 5.6-14.6 13.5-14.6h7.1v8.1h-6.9c-3.5 0-5.7 2.4-5.7 6.2s2.2 6.2 5.7 6.2h5.8V14.5c0-6.2 4.1-10.5 10.3-10.5 6.1 0 10.1 3.8 11 9.2l-7.6 2.2c-.4-2.2-1.8-3.4-3.5-3.4-1.9 0-3.1 1.4-3.1 3.8v29.4c0 6.2-4.1 10-10.3 10h-3.2C17.4 55.2 12 49.6 12 41Z" />
    <path fill="#d44545" d="M34 31.8c0-8.6 6.8-15.2 16-15.2 1.9 0 3.8.3 5.5.9v8.2c-1.6-.8-3.4-1.2-5.4-1.2-4.7 0-8.2 3.2-8.2 7.5 0 4.2 3.4 7.4 8.2 7.4 2 0 3.8-.4 5.4-1.2v8.2c-1.8.6-3.6.9-5.5.9-9.2 0-16-6.7-16-15.5Z" />
    <path fill="#d44545" d="M52 9h7v46h-7V9Zm7 15h5v4h-5v-4Zm0 11h5v4h-5v-4Zm0 11h5v4h-5v-4Z" />
  </svg>
);

export function LeadModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState({ key: 0, course: "", cta: "Popup", title: "" });
  const [succeeded, setSucceeded] = useState(false);
  const prevOverflow = useRef("");

  // Remember UTMs from the landing URL for the whole session.
  useEffect(() => { readAttribution(); }, []);

  const openModal = useCallback((options: OpenOptions = {}) => {
    const course = matchCourse(options.course || courseForPath(window.location.pathname));
    const cta = options.cta || "Popup";
    setSession((prev) => ({ key: prev.key + 1, course, cta, title: options.title || "" }));
    setSucceeded(false);
    prevOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
    trackEvent("program_apply", { cta, course });
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.documentElement.style.overflow = prevOverflow.current;
  }, []);

  // Close on route change.
  useEffect(() => { if (open) closeModal(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Delegate clicks from any [data-dm-lead] / .dm-apply element anywhere on the site.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = (event.target as Element | null)?.closest?.("[data-dm-lead], .dm-apply");
      if (!target) return;
      event.preventDefault(); // stops next/link navigation and #anchor jumps
      openModal({
        course: target.getAttribute("data-course") || undefined,
        cta: target.getAttribute("data-cta") || target.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || "Button",
        title: target.getAttribute("data-title") || undefined
      });
    }
    function onKey(event: KeyboardEvent) { if (event.key === "Escape") closeModal(); }
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    (window as Window & { DMLead?: unknown }).DMLead = { open: openModal, close: closeModal };
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [openModal, closeModal]);

  const isApply = /apply|application|seat|enrol/i.test(session.cta);
  const heading = session.title || (isApply ? "Apply for the program" : "Talk to a program advisor");

  return (
    <ShadowPortal mount="body" id="dm-lead-modal" css={leadFormStyles + leadModalStyles}>
      <div className={`overlay${open ? " open" : ""}`} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }} aria-hidden={!open}>
        <div className="card" role="dialog" aria-modal="true" aria-labelledby="dml-title">
          <div className="head">
            <button className="close" type="button" aria-label="Close" onClick={closeModal}>&times;</button>
            <div className="brand"><span className="mark">{LOGO}</span><span className="bname"><b>DATAMARCOS</b><small>Technology Learning</small></span></div>
            <p className="eyebrow">Live online · Mentor-led</p>
            <h2 className="title" id="dml-title">{heading}</h2>
            {!succeeded && <p className="sub">Share your details and our team will call you to help you pick the right program, batch and fee plan.</p>}
          </div>
          <div className="body">
            {open && (
              <LeadForm
                key={session.key}
                course={session.course}
                cta={session.cta}
                submitLabel={isApply ? "Submit Application" : "Request a Call Back"}
                autoFocus
                onSuccess={() => setSucceeded(true)}
              />
            )}
          </div>
        </div>
      </div>
    </ShadowPortal>
  );
}
