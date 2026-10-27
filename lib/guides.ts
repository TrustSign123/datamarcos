import { allGuides } from "@/content/guides";
import type { Guide, GuideCluster } from "@/content/guides/types";

/** Publish gate: only `status: "approved"` guides get a route, an index card and a sitemap entry. */
export const approvedGuides: Guide[] = allGuides.filter((g) => g.status === "approved");

export function getApprovedGuide(slug: string): Guide | undefined {
  return approvedGuides.find((g) => g.slug === slug);
}

export const GUIDE_CLUSTERS: GuideCluster[] = ["Agentic AI", "Generative AI", "Data Engineering", "Forward Deployed Engineering"];

export function formatGuideDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
