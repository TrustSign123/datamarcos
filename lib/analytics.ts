export type AnalyticsEvent =
  | "page_view"
  | "corporate_cta_click"
  | "program_view"
  | "program_apply"
  | "hero_cta_click"
  | "curriculum_expand"
  | "project_view"
  | "capstone_view"
  | "testimonial_play"
  | "brochure_click"
  | "skill_assessment_start"
  | "skill_assessment_complete"
  | "application_start"
  | "application_submit"
  | "lead_magnet_submit"
  | "calendly_open"
  | "corporate_form_start"
  | "corporate_form_submit"
  | "video_play"
  | "resource_download"
  | "whatsapp_click"
  | "trainer_application"
  | "payment_click";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("datamarcos:analytics", { detail: { event, payload } }));
  // Mirror site events to GA4 (page_view is sent by gtag itself).
  if (event !== "page_view") gaEvent(event, payload);
}

/** GA4 measurement ID. NEXT_PUBLIC_GA_ID overrides the default. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-Z6BPM8S2JK";

/** GA4-only events (not part of the internal AnalyticsEvent stream). */
export type GaEvent = AnalyticsEvent | "generate_lead" | "phone_click" | "email_click";

// Never send personal data to GA: drop personal-looking keys and any value that looks like an email or phone number.
const PII_KEY = /name|mail|phone|mobile|tel|whatsapp_number|address|message|comment|company|designation|linkedin/i;
const SAFE_KEY = /^(course|course_name|program_?name|program_?slug|program_?id|form_id|cta|link_location|page_path|gated|id|landing_?page|method)$/i;
const PII_VALUE = /[^\s@]+@[^\s@]+\.[^\s@]+|\+?\d[\d\s().-]{6,}\d/;

export function gaParams(params?: Record<string, string | undefined>) {
  const out: Record<string, string> = {};
  if (!params) return out;
  for (const [key, raw] of Object.entries(params)) {
    if (raw === undefined || raw === null) continue;
    const value = String(raw).slice(0, 100);
    if (!value) continue;
    if (PII_KEY.test(key) && !SAFE_KEY.test(key)) continue;
    if (PII_VALUE.test(value)) continue;
    out[key] = value;
  }
  return out;
}

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

/** Send a GA4 event. Queues in dataLayer if gtag.js has not loaded yet; no-op on the server. */
export function gaEvent(name: GaEvent, params?: Record<string, string | undefined>) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  const payload = { ...gaParams(params), page_path: window.location.pathname };
  if (typeof w.gtag === "function") { w.gtag("event", name, payload); return; }
  w.dataLayer = w.dataLayer || [];
  // gtag() pushes the arguments object, not an array.
  (function gtag(..._args: unknown[]) { w.dataLayer!.push(arguments); })("event", name, payload);
}

export function readAttribution() {
  if (typeof window === "undefined") return {};
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "li_fat_id"];
  const params = new URLSearchParams(window.location.search);
  const saved = sessionStorage.getItem("datamarcos_attribution");
  const attribution = saved ? JSON.parse(saved) as Record<string, string> : {};
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) attribution[key] = value;
  });
  sessionStorage.setItem("datamarcos_attribution", JSON.stringify(attribution));
  return attribution;
}
