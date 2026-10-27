"use client";

import { useEffect } from "react";
import { gaEvent, type GaEvent } from "@/lib/analytics";
import { homePrograms } from "@/config/home";

/**
 * One delegated click listener for contact links → GA4:
 *   wa.me / api.whatsapp.com → whatsapp_click, tel: → phone_click, mailto: → email_click.
 * Params: link_location (data-cta, or the header/footer/floating button/section the link is in), course
 * (data-course, or the program page being viewed), page_path. The link URL itself (it holds the business phone
 * number or email) and anything the visitor typed are never sent.
 * composedPath() is used so links inside the shadow-DOM lead modal are caught too.
 */
const COURSE_BY_SLUG: Record<string, string> = Object.fromEntries(homePrograms.map((program) => [program.slug, program.leadCourse]));

function kindOf(href: string): GaEvent | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith("tel:")) return "phone_click";
  if (h.startsWith("mailto:")) return "email_click";
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|(www\.)?whatsapp\.com\/send)/.test(h)) return "whatsapp_click";
  return null;
}

function locationOf(anchor: HTMLAnchorElement, path: EventTarget[]) {
  const cta = anchor.getAttribute("data-cta");
  if (cta) return cta;
  if (anchor.classList.contains("whatsapp") && anchor.classList.contains("button")) return "floating_button";
  for (const node of path) {
    if (!(node instanceof Element) || node === anchor) continue;
    const tag = node.tagName.toLowerCase();
    if (tag === "header") return "header";
    if (tag === "footer") return "footer";
    if (tag === "nav") return "nav";
    if (node.classList.contains("lf")) return "lead_form_success";
    if (tag === "section" && node.id) return `section_${node.id}`;
  }
  return "page";
}

export function AnalyticsListeners() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const path = event.composedPath();
      const anchor = path.find((node): node is HTMLAnchorElement => node instanceof HTMLAnchorElement && node.hasAttribute("href"));
      if (!anchor) return;
      const kind = kindOf(anchor.getAttribute("href") || "");
      if (!kind) return;
      const slug = window.location.pathname.match(/^\/programs\/([^/]+)/)?.[1] || "";
      gaEvent(kind, {
        link_location: locationOf(anchor, path),
        course: anchor.getAttribute("data-course") || COURSE_BY_SLUG[slug] || ""
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
