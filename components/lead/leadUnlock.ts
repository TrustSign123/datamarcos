/**
 * Remembers that this browser already submitted the lead form, so brochure / syllabus
 * downloads are not gated again for 30 days. Purely client-side (localStorage).
 */
const KEY = "datamarcos_lead_unlock";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;
export const UNLOCK_EVENT = "datamarcos:lead-unlocked";

export function isLeadUnlocked() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return false;
    const { ts } = JSON.parse(raw) as { ts?: number };
    return typeof ts === "number" && Date.now() - ts < TTL_MS;
  } catch {
    return false;
  }
}

export function rememberLeadUnlock(course?: string) {
  try { window.localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), course: course || "" })); } catch { /* storage blocked */ }
  window.dispatchEvent(new CustomEvent(UNLOCK_EVENT));
}

/** Starts a same-origin file download without navigating away. */
export function startDownload(href: string) {
  const link = document.createElement("a");
  link.href = href;
  link.download = "";
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
