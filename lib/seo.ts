import type { Metadata } from "next";
import { site } from "@/config/site";

const DEFAULT_OG = "/og/datamarcos-home.jpg";

/**
 * Per-page metadata with a self-referencing canonical on https://www.datamarcos.com.
 * `noindex` keeps the page live (and its links followed) but out of search results.
 * `canonical` overrides the self canonical (used for exact duplicates only).
 */
export function pageMetadata({ path, title, description, noindex = false, canonical, image = DEFAULT_OG }: {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  canonical?: string;
  image?: string;
}): Metadata {
  const target = canonical || path;
  return {
    title,
    description,
    alternates: { canonical: target },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title, description, url: `${site.url}${target === "/" ? "" : target}`, siteName: site.name, type: "website", images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

/** Course JSON-LD for the four current course pages. Deliberately has no `offers`/price. */
export function courseJsonLd({ name, description, path, duration, workloadHours, credential }: {
  name: string;
  description: string;
  path: string;
  /** ISO 8601 program length, e.g. P18W. Omit when the length is open-ended (e.g. "4+ months"). */
  duration?: string;
  /** Total live hours when the page states them, e.g. 130 */
  workloadHours?: number;
  credential?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${site.url}${path}`,
    inLanguage: "en",
    ...(duration ? { timeRequired: duration } : {}),
    provider: { "@type": "Organization", name: "Datamarcos", url: site.url },
    ...(credential ? { educationalCredentialAwarded: credential } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      ...(workloadHours ? { courseWorkload: `PT${workloadHours}H` } : {}),
      instructor: { "@type": "Person", name: site.founder.name }
    }
  };
}
