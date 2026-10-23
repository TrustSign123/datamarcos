"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { LEAD_COURSES, LEAD_NOT_SURE, courseForPath, leadEndpoint } from "@/config/lead";
import { site, env } from "@/config/site";
import { readAttribution, trackEvent } from "@/lib/analytics";
import { leadModalStyles } from "./leadModalStyles";

/**
 * Site-wide lead-capture popup.
 *
 * Any element with the `data-dm-lead` attribute (or class `dm-apply`) opens it:
 *   <a href="#apply" data-dm-lead data-cta="Request a seat" data-course="Applied Agentic AI">…</a>
 * - data-course preselects a course (otherwise inferred from /programs/<slug>)
 * - data-cta is saved as "Source Button/CTA" (defaults to the element's text)
 * The original href is kept as a no-JS fallback.
 */

type Status = "idle" | "loading" | "success";
type FieldErrors = Partial<Record<"name" | "email" | "phone" | "course" | "consent", boolean>>;
type OpenOptions = { course?: string; cta?: string; title?: string };

const COUNTRY_CODES = [
  ["+91", "🇮🇳 +91"], ["+1", "🇺🇸 +1"], ["+44", "🇬🇧 +44"], ["+971", "🇦🇪 +971"],
  ["+65", "🇸🇬 +65"], ["+61", "🇦🇺 +61"], ["+966", "🇸🇦 +966"], ["+49", "🇩🇪 +49"]
] as const;

const NOT_CONNECTED = `Our enquiry form is being set up. Please WhatsApp us at ${site.phone} or email ${site.email} and we'll call you back.`;
const GENERIC_ERROR = `We couldn't submit right now. Please try again, or WhatsApp us at ${site.phone}.`;

const LOGO = (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path fill="#245b83" d="M12 41c0-8.8 5.6-14.6 13.5-14.6h7.1v8.1h-6.9c-3.5 0-5.7 2.4-5.7 6.2s2.2 6.2 5.7 6.2h5.8V14.5c0-6.2 4.1-10.5 10.3-10.5 6.1 0 10.1 3.8 11 9.2l-7.6 2.2c-.4-2.2-1.8-3.4-3.5-3.4-1.9 0-3.1 1.4-3.1 3.8v29.4c0 6.2-4.1 10-10.3 10h-3.2C17.4 55.2 12 49.6 12 41Z" />
    <path fill="#d44545" d="M34 31.8c0-8.6 6.8-15.2 16-15.2 1.9 0 3.8.3 5.5.9v8.2c-1.6-.8-3.4-1.2-5.4-1.2-4.7 0-8.2 3.2-8.2 7.5 0 4.2 3.4 7.4 8.2 7.4 2 0 3.8-.4 5.4-1.2v8.2c-1.8.6-3.6.9-5.5.9-9.2 0-16-6.7-16-15.5Z" />
    <path fill="#d44545" d="M52 9h7v46h-7V9Zm7 15h5v4h-5v-4Zm0 11h5v4h-5v-4Zm0 11h5v4h-5v-4Z" />
  </svg>
);

export function LeadModal() {
  const pathname = usePathname();
  const [shadow, setShadow] = useState<ShadowRoot | null>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState("");
  const [course, setCourse] = useState("");
  const [cta, setCta] = useState("Popup");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState({ name: "", course: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const prevOverflow = useRef("");

  // Mount an isolated shadow root so site CSS and popup CSS never collide.
  useEffect(() => {
    const host = document.createElement("div");
    host.id = "dm-lead-modal";
    document.body.appendChild(host);
    setShadow(host.attachShadow({ mode: "open" }));
    readAttribution(); // remember UTMs from the landing URL for this session
    return () => host.remove();
  }, []);

  const openModal = useCallback((options: OpenOptions = {}) => {
    const preset = options.course || courseForPath(window.location.pathname) || "";
    const known = [...LEAD_COURSES, LEAD_NOT_SURE].find((item) => item.toLowerCase() === preset.toLowerCase());
    setCourse(known || "");
    setCta(options.cta || "Popup");
    setTitle(options.title || "");
    setErrors({});
    setBanner("");
    setStatus("idle");
    prevOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
    trackEvent("program_apply", { cta: options.cta || "Popup", course: known || "" });
    window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 60);
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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBanner("");
    const data = new FormData(event.currentTarget);
    if (String(data.get("website") || "")) { setStatus("success"); return; } // honeypot

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const cc = String(data.get("cc") || "+91");
    let phone = String(data.get("phone") || "").replace(/\D/g, "");
    if (cc === "+91" && phone.length === 11 && phone.startsWith("0")) phone = phone.slice(1);
    const next: FieldErrors = {
      name: !(name.length >= 2 && /[a-zA-Z\u0900-\u097F]/.test(name)),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
      phone: cc === "+91" ? !/^[6-9]\d{9}$/.test(phone) : phone.length < 6 || phone.length > 13,
      course: !course,
      consent: data.get("consent") !== "on"
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    if (!leadEndpoint) { setBanner(NOT_CONNECTED); return; }

    const attribution = readAttribution() as Record<string, string>;
    setStatus("loading");
    try {
      // text/plain keeps this a "simple" CORS request (no preflight), which Apps Script requires.
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name, email, phone: cc + phone, course, cta,
          page: window.location.href,
          utm_source: attribution.utm_source || "",
          utm_medium: attribution.utm_medium || "",
          utm_campaign: attribution.utm_campaign || "",
          referrer: document.referrer || ""
        }),
        redirect: "follow"
      });
      const result = (await response.json()) as { ok?: boolean; errors?: string[] };
      if (!result.ok) throw new Error(result.errors?.join(" ") || GENERIC_ERROR);
      setSubmitted({ name, course });
      setStatus("success");
      formRef.current?.reset();
      trackEvent("application_submit", { cta, course });
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead", { content_name: course });
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      setBanner(message && !/fetch|network|json|unexpected/i.test(message) ? message : GENERIC_ERROR);
      setStatus("idle");
    }
  }

  if (!shadow) return null;

  const isApply = /apply|application|seat|enrol/i.test(cta);
  const heading = title || (isApply ? "Apply for the program" : "Talk to a program advisor");
  const buttonLabel = isApply ? "Submit Application" : "Request a Call Back";
  const clear = (field: keyof FieldErrors) => errors[field] && setErrors({ ...errors, [field]: false });
  const firstName = submitted.name.split(" ")[0];

  return createPortal(
    <>
      <style>{leadModalStyles}</style>
      <div className={`overlay${open ? " open" : ""}${status === "success" ? " ok" : ""}`} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }} aria-hidden={!open}>
        <div className="card" role="dialog" aria-modal="true" aria-labelledby="dml-title">
          <div className="head">
            <button className="close" type="button" aria-label="Close" onClick={closeModal}>&times;</button>
            <div className="brand"><span className="mark">{LOGO}</span><span className="bname"><b>DATAMARCOS</b><small>Technology Learning</small></span></div>
            <p className="eyebrow">Live online · Mentor-led</p>
            <h2 className="title" id="dml-title">{heading}</h2>
            <p className="sub">Share your details and our team will call you to help you pick the right program, batch and fee plan.</p>
          </div>

          <form ref={formRef} noValidate onSubmit={onSubmit}>
            <div className={`f${errors.name ? " bad" : ""}`}>
              <label htmlFor="dml-name">Full name <span className="req">*</span></label>
              <input ref={nameRef} id="dml-name" name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} onInput={() => clear("name")} />
              <span className="err">Please enter your full name.</span>
            </div>
            <div className={`f${errors.email ? " bad" : ""}`}>
              <label htmlFor="dml-email">Email <span className="req">*</span></label>
              <input id="dml-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} onInput={() => clear("email")} />
              <span className="err">Please enter a valid email address.</span>
            </div>
            <div className={`f${errors.phone ? " bad" : ""}`}>
              <label htmlFor="dml-phone">Phone number <span className="req">*</span></label>
              <div className="phone">
                <select name="cc" aria-label="Country code" defaultValue="+91">
                  {COUNTRY_CODES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
                <input id="dml-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile number" maxLength={14}
                  onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 14); clear("phone"); }} />
              </div>
              <span className="err">Please enter a valid 10-digit mobile number.</span>
            </div>
            <div className={`f${errors.course ? " bad" : ""}`}>
              <label htmlFor="dml-course">Course interested in <span className="req">*</span></label>
              <select id="dml-course" name="course" value={course} onChange={(event) => { setCourse(event.target.value); clear("course"); }}>
                <option value="" disabled>Select a program</option>
                {LEAD_COURSES.map((item) => <option key={item} value={item}>{item}</option>)}
                <option value={LEAD_NOT_SURE}>{LEAD_NOT_SURE}</option>
              </select>
              <span className="err">Please choose a program (or “Not sure yet”).</span>
            </div>
            <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label className={`consent${errors.consent ? " bad" : ""}`}>
              <input type="checkbox" name="consent" onChange={() => clear("consent")} />
              <span>I agree to be contacted by Datamarcos via call, WhatsApp or email about programs. We never share your details.</span>
            </label>
            <div className={`banner${banner ? " show" : ""}`} role="alert">{banner}</div>
            <button className={`btn${status === "loading" ? " loading" : ""}`} type="submit" disabled={status === "loading"}>
              <span className="spin" /><span className="lbl">{buttonLabel}</span><span className="arrow">→</span>
            </button>
            <div className="trust"><span>18+ years experience</span><span>25,000+ professionals trained</span><span>200+ clients</span></div>
          </form>

          <div className="done" aria-live="polite">
            <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></div>
            <h3>Thanks{firstName ? `, ${firstName}` : ""}! You’re all set.</h3>
            <p>Our program advisor will call you shortly{submitted.course && submitted.course !== LEAD_NOT_SURE ? ` about ${submitted.course}` : ""}. Want a faster reply? Message us on WhatsApp.</p>
            <a className="ghost" target="_blank" rel="noopener noreferrer" href={env.whatsappUrl}>
              <svg viewBox="0 0 24 24" fill="#25d366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z" /></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>,
    shadow
  );
}
