import { MetadataRoute } from "next";
import { site } from "@/config/site";

// Only live pages that should be indexed. Placeholder, noindex, duplicate and redirected URLs are left out on
// purpose (SEO pass 2026-10-26): /corporate-training/* sub-pages (301 to /corporate-training since 2026-10-27), /resources (hub + placeholders), /payment-refund-policy
// (canonical -> /refund-policy), legacy /programs/<slug> pages (301 in next.config.ts), /lp/*, /academy-preview.
const LAST_UPDATED = new Date("2026-10-26");

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/programs/genai-agentic-ai-engineer", priority: 0.9 },
  { path: "/programs/advance-data-engineering-genai", priority: 0.9 },
  { path: "/programs/applied-agentic-ai-certification", priority: 0.9 },
  { path: "/programs/forward-deployed-ai-engineer", priority: 0.9 },
  { path: "/programs", priority: 0.7 },
  { path: "/resources/interview-prep", priority: 0.6 },
  { path: "/corporate-training", priority: 0.5 },
  { path: "/about", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/become-a-trainer", priority: 0.3 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/refund-policy", priority: 0.2 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({ url: `${site.url}${path}`, lastModified: LAST_UPDATED, priority }));
}
