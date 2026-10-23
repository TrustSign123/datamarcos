"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LEAD_COURSES, LEAD_NOT_SURE, brochureForCourse, courseForBrochure, courseForPath } from "@/config/lead";
import { env } from "@/config/site";
import { readAttribution, trackEvent } from "@/lib/analytics";
import { LeadForm, matchCourse, type LeadSuccess } from "./LeadForm";
import { isLeadUnlocked, startDownload } from "./leadUnlock";
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
 *
 * Gated downloads: every link to a brochure PDF (a[href*="/brochures/"], a[href$=".pdf"]) and any
 * [data-dm-download] element opens the same form in "download" mode. The file is released only after
 * the endpoint returns ok (auto-download + a "Download now" button). A visitor who submitted in the
 * last 30 days (localStorage) downloads straight away. data-course / data-file override the defaults.
 */

type Mode = "lead" | "download";
type OpenOptions = { course?: string; cta?: string; title?: string; mode?: Mode; file?: string };

const DOWNLOAD_SELECTOR = "[data-dm-download], a[href*='/brochures/'], a[href$='.pdf' i]";

function downloadSuccess({ course }: LeadSuccess, file?: string) {
  const href = file || brochureForCourse(course);
  if (!href) {
    return {
      title: "Thanks{first}! We’ll send it over.",
      body: course && course !== LEAD_NOT_SURE
        ? `The ${course} syllabus is shared personally right now. Our team will WhatsApp or email it to you shortly.`
        : "Our program advisor will WhatsApp or email you the syllabus for the program that fits you best.",
      links: []
    };
  }
  return {
    title: "Thanks{first}! Your syllabus is downloading.",
    body: `If the ${course} syllabus didn’t start downloading, use the button below. Our team will also reach out to answer your questions.`,
    links: [{ label: "Download now ↓", href, download: true, primary: true }]
  };
}

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
  const [session, setSession] = useState({ key: 0, course: "", cta: "Popup", title: "", mode: "lead" as Mode, file: "", unlocked: false });
  const [succeeded, setSucceeded] = useState(false);
  const prevOverflow = useRef("");

  // Remember UTMs from the landing URL for the whole session.
  useEffect(() => { readAttribution(); }, []);

  const openModal = useCallback((options: OpenOptions = {}) => {
    const mode: Mode = options.mode || "lead";
    const course = matchCourse(options.course || courseForBrochure(options.file) || courseForPath(window.location.pathname));
    const cta = options.cta || (mode === "download" ? "Download Syllabus" : "Popup");
    const file = options.file || "";
    const unlocked = mode === "download" && isLeadUnlocked();
    // Already submitted recently and we know the file: just download, no popup.
    if (unlocked && (file || brochureForCourse(course))) {
      startDownload(file || brochureForCourse(course)!);
      trackEvent("resource_download", { course, cta, gated: "remembered" });
      return;
    }
    setSession((prev) => ({ key: prev.key + 1, course, cta, title: options.title || "", mode, file, unlocked }));
    setSucceeded(false);
    prevOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
    trackEvent(mode === "download" ? "brochure_click" : "program_apply", { cta, course });
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
      const element = event.target as Element | null;
      const download = element?.closest?.(DOWNLOAD_SELECTOR);
      if (download && !download.closest("[data-dm-ungated]")) {
        const file = download.getAttribute("data-file") || (download.tagName === "A" ? download.getAttribute("href") : "") || "";
        const isFile = /\.pdf($|[?#])/i.test(file) || file.includes("/brochures/");
        if (isLeadUnlocked() && isFile) return; // remembered visitor: let the link work normally
        event.preventDefault();
        openModal({
          mode: "download",
          file: isFile ? file : undefined,
          course: download.getAttribute("data-course") || undefined,
          cta: download.getAttribute("data-cta") || undefined,
          title: download.getAttribute("data-title") || undefined
        });
        return;
      }
      const target = element?.closest?.("[data-dm-lead], .dm-apply");
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

  const isDownload = session.mode === "download";
  const isApply = !isDownload && /apply|application|seat|enrol/i.test(session.cta);
  const heading = session.title || (isDownload ? "Get the syllabus" : isApply ? "Apply for the program" : "Talk to a program advisor");
  const subtitle = isDownload
    ? session.unlocked ? "Welcome back. Pick a program to download its syllabus." : "Share your details and the syllabus downloads instantly. Our team can also help with fees and batch dates."
    : "Share your details and our team will call you to help you pick the right program, batch and fee plan.";
  // A specific file (or a course on a program page) locks the course; otherwise show the picker.
  const lockCourse = isDownload && Boolean(session.file && session.course);
  const downloadCta = (course: string) => `Download Syllabus - ${course || "Not selected"}`;
  const onDownloadSuccess = (info: LeadSuccess) => {
    setSucceeded(true);
    const href = session.file || brochureForCourse(info.course);
    if (href) {
      startDownload(href);
      trackEvent("resource_download", { course: info.course, cta: downloadCta(info.course), gated: "form" });
    }
  };

  return (
    <ShadowPortal mount="body" id="dm-lead-modal" css={leadFormStyles + leadModalStyles}>
      <div className={`overlay${open ? " open" : ""}`} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }} aria-hidden={!open}>
        <div className="card" role="dialog" aria-modal="true" aria-labelledby="dml-title">
          <div className="head">
            <button className="close" type="button" aria-label="Close" onClick={closeModal}>&times;</button>
            <div className="brand"><span className="mark">{LOGO}</span><span className="bname"><b>DATAMARCOS</b><small>Technology Learning</small></span></div>
            <p className="eyebrow">Live online · Mentor-led</p>
            <h2 className="title" id="dml-title">{heading}</h2>
            {!succeeded && <p className="sub">{subtitle}</p>}
          </div>
          <div className="body">
            {open && isDownload && session.unlocked && (
              <div className="picks">
                {LEAD_COURSES.filter((course) => brochureForCourse(course)).map((course) => (
                  <a key={course} href={brochureForCourse(course)} download onClick={() => trackEvent("resource_download", { course, cta: downloadCta(course), gated: "remembered" })}>
                    {course}<span>Download ↓</span>
                  </a>
                ))}
                <p>Not sure which one fits? <a className="inline" href={env.whatsappUrl} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a></p>
              </div>
            )}
            {open && isDownload && !session.unlocked && (
              <LeadForm
                key={session.key}
                course={session.course}
                lockCourse={lockCourse}
                cta={downloadCta}
                submitLabel="Download Syllabus"
                trust={["Instant download", "Live online", "Mentor-led"]}
                successFor={(info) => downloadSuccess(info, session.file)}
                autoFocus
                onSuccess={onDownloadSuccess}
              />
            )}
            {open && !isDownload && (
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
