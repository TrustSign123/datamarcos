"use client";

import { FormEvent, type ReactNode, useRef, useState } from "react";
import { LEAD_COURSES, LEAD_NOT_SURE, courseLabel, leadEndpoint } from "@/config/lead";
import { env, site } from "@/config/site";
import { readAttribution, trackEvent } from "@/lib/analytics";
import { rememberLeadUnlock } from "./leadUnlock";

/**
 * Shared lead form: fields, validation, submit to the Google Apps Script endpoint and
 * success state. Used by the site-wide popup (LeadModal) and inline forms (InlineLeadForm).
 * Must be rendered inside a ShadowPortal that includes leadFormStyles.
 */

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "course" | "consent", boolean>>;

export type LeadFormProps = {
  /** Preselected course (must match LEAD_COURSES or "Not sure yet"). */
  course?: string;
  /** Hide the course dropdown and always submit `course` (e.g. on a single-program page). */
  lockCourse?: boolean;
  /** Saved in the sheet's "Source Button/CTA" column (a function gets the chosen course). */
  cta: string | ((course: string) => string);
  submitLabel: string;
  trust?: string[];
  /** "{first}" is replaced by ", <first name>" (or nothing). */
  successTitle?: string;
  successBody?: string;
  /** Extra links shown next to WhatsApp on the success screen. */
  successLinks?: SuccessLink[];
  /** Per-submission success content (e.g. the syllabus for the chosen course). Overrides the static props. */
  successFor?: (info: LeadSuccess) => { title?: string; body?: string; links?: SuccessLink[] };
  /** Prefix for element ids, so several forms can live on one page. */
  idPrefix?: string;
  autoFocus?: boolean;
  onSuccess?: (info: LeadSuccess) => void;
};

export type LeadSuccess = { name: string; course: string };
export type SuccessLink = { label: string; href: string; download?: boolean; primary?: boolean };

const COUNTRY_CODES = [
  ["+91", "🇮🇳 +91"], ["+1", "🇺🇸 +1"], ["+44", "🇬🇧 +44"], ["+971", "🇦🇪 +971"],
  ["+65", "🇸🇬 +65"], ["+61", "🇦🇺 +61"], ["+966", "🇸🇦 +966"], ["+49", "🇩🇪 +49"]
] as const;

const NOT_CONNECTED = `Our enquiry form is being set up. Please WhatsApp us at ${site.phone} or email ${site.email} and we'll call you back.`;
const GENERIC_ERROR = `We couldn't submit right now. Please try again, or WhatsApp us at ${site.phone}.`;
const DEFAULT_TRUST = ["18+ years experience", "25,000+ professionals trained", "200+ clients"];

export function matchCourse(value?: string) {
  if (!value) return "";
  return [...LEAD_COURSES, LEAD_NOT_SURE].find((item) => item.toLowerCase() === value.toLowerCase()) || "";
}

export function LeadForm({
  course: initialCourse, lockCourse = false, cta, submitLabel, trust = DEFAULT_TRUST,
  successTitle = "Thanks{first}! You’re all set.", successBody,
  successLinks = [], successFor, idPrefix = "dml", autoFocus = false, onSuccess
}: LeadFormProps) {
  const [course, setCourse] = useState(matchCourse(initialCourse));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ name: string; course: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const id = (field: string) => `${idPrefix}-${field}`;
  const clear = (field: keyof FieldErrors) => errors[field] && setErrors({ ...errors, [field]: false });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBanner("");
    const data = new FormData(event.currentTarget);
    if (String(data.get("website") || "")) { setDone({ name: "", course: "" }); return; } // honeypot

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

    const ctaLabel = typeof cta === "function" ? cta(course) : cta;
    const attribution = readAttribution() as Record<string, string>;
    setLoading(true);
    try {
      // text/plain keeps this a "simple" CORS request (no preflight), which Apps Script requires.
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name, email, phone: cc + phone, course, cta: ctaLabel,
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
      formRef.current?.reset();
      rememberLeadUnlock(course);
      setDone({ name, course });
      onSuccess?.({ name, course });
      trackEvent("application_submit", { cta: ctaLabel, course });
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead", { content_name: course });
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      setBanner(message && !/fetch|network|json|unexpected/i.test(message) ? message : GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    const first = done.name.split(" ")[0];
    const custom = done.course ? successFor?.(done) : undefined;
    const title = custom?.title ?? successTitle;
    const links = custom?.links ?? successLinks;
    return (
      <div className="lf done" aria-live="polite">
        <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></div>
        <h3>{title.replace("{first}", first ? `, ${first}` : "")}</h3>
        <p>{custom?.body || successBody || `Our program advisor will call you shortly${done.course && done.course !== LEAD_NOT_SURE ? ` about ${courseLabel(done.course)}` : ""}. Want a faster reply? Message us on WhatsApp.`}</p>
        <div className="links">
          {links.map((link) => <a key={link.href} className={link.primary ? "dl" : "ghost"} href={link.href} download={link.download || undefined}>{link.label}</a>)}
          <a className="ghost" target="_blank" rel="noopener noreferrer" href={env.whatsappUrl}>
            <svg viewBox="0 0 24 24" fill="#25d366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const field = (key: keyof FieldErrors, label: string, input: ReactNode, error: string) => (
    <div className={`f${errors[key] ? " bad" : ""}`}>
      <label htmlFor={id(key)}>{label} <span className="req">*</span></label>
      {input}
      <span className="err">{error}</span>
    </div>
  );

  return (
    <div className="lf">
      <form ref={formRef} noValidate onSubmit={onSubmit}>
        <div className="row">
          {field("name", "Full name", <input id={id("name")} name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} autoFocus={autoFocus} onInput={() => clear("name")} />, "Please enter your full name.")}
          {field("email", "Email", <input id={id("email")} name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} onInput={() => clear("email")} />, "Please enter a valid email address.")}
        </div>
        <div className="row">
          {field("phone", "Phone number", (
            <div className="phone">
              <select name="cc" aria-label="Country code" defaultValue="+91">
                {COUNTRY_CODES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
              <input id={id("phone")} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile" maxLength={14}
                onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 14); clear("phone"); }} />
            </div>
          ), "Please enter a valid 10-digit mobile number.")}
          {lockCourse && course ? (
            <div className="f"><label>Program</label><div className="program"><b>{courseLabel(course)}</b></div></div>
          ) : field("course", "Course interested in", (
            <select id={id("course")} name="course" value={course} onChange={(event) => { setCourse(event.target.value); clear("course"); }}>
              <option value="" disabled>Select a program</option>
              {LEAD_COURSES.map((item) => <option key={item} value={item}>{courseLabel(item)}</option>)}
              <option value={LEAD_NOT_SURE}>{LEAD_NOT_SURE}</option>
            </select>
          ), "Please choose a program (or “Not sure yet”).")}
        </div>
        <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label className={`consent${errors.consent ? " bad" : ""}`}>
          <input type="checkbox" name="consent" onChange={() => clear("consent")} />
          <span>I agree to be contacted by Datamarcos via call, WhatsApp or email about programs. We never share your details.</span>
        </label>
        <div className={`banner${banner ? " show" : ""}`} role="alert">{banner}</div>
        <button className={`btn${loading ? " loading" : ""}`} type="submit" disabled={loading}>
          <span className="spin" /><span className="lbl">{submitLabel}</span><span className="arrow">→</span>
        </button>
        {trust.length > 0 && <div className="trust">{trust.map((item) => <span key={item}>{item}</span>)}</div>}
      </form>
    </div>
  );
}
