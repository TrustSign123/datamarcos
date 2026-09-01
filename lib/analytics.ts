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
