import type { Metadata } from "next";
import { site } from "@/config/site";
import { NEXT_COHORT_ISO } from "@/config/cohort";
import { DEEPESH_LINKEDIN } from "@/config/home";

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
    provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: "Datamarcos", url: site.url },
    ...(credential ? { educationalCredentialAwarded: credential } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      startDate: NEXT_COHORT_ISO,
      courseMode: "online",
      ...(workloadHours ? { courseWorkload: `PT${workloadHours}H` } : {}),
      instructor: { "@type": "Person", "@id": `${site.url}/#deepesh-mishra`, name: site.founder.name }
    }
  };
}

/** Founder Person entity, shared by / and /about. Same @id the course pages use as `instructor`; facts are the ones published on /about. */
export function founderPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#deepesh-mishra`,
    name: "Deepesh Kumar Mishra",
    alternateName: site.founder.name,
    jobTitle: "Founder & CEO",
    image: `${site.url}${site.founder.image}`,
    url: `${site.url}/about`,
    worksFor: { "@id": `${site.url}/#organization` },
    alumniOf: { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
    knowsAbout: site.founder.teaches,
    sameAs: [DEEPESH_LINKEDIN]
  };
}

/** /about: AboutPage that points at the homepage Organization by @id instead of repeating it. */
export function aboutPageJsonLd() {
  const org = { "@id": `${site.url}/#organization` };
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.url}/about#webpage`,
    url: `${site.url}/about`,
    name: "About Datamarcos",
    about: org,
    mainEntity: org,
    isPartOf: { "@type": "WebSite", url: site.url, name: site.name }
  };
}
