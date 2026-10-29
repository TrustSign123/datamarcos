/**
 * Guide content model. A guide renders as a page ONLY when `status` is "approved".
 * Drafts can live in this folder with status "draft": they get no route (dynamicParams = false), no sitemap entry
 * and no links. Inline text supports **bold** and [label](href) links only.
 * Rules: no fees/prices, no placement/salary/hike numbers, no ratings or reviews, and every claim about another
 * provider must be backed by a source in `sources`.
 */
export type GuideStatus = "draft" | "approved";

export type GuideCluster = "Agentic AI" | "Generative AI" | "Data Engineering" | "Forward Deployed Engineering";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export type Guide = {
  status: GuideStatus;
  slug: string;
  /** <title> (without the brand suffix is fine; we add nothing). */
  title: string;
  /** Visible H1. */
  h1: string;
  description: string;
  /** ISO dates (YYYY-MM-DD). `dateModified` drives the sitemap lastmod. */
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
  /** Byline. "Datamarcos Team" is published as the Organization in JSON-LD. */
  author: string;
  /** When set, Article JSON-LD publishes this Person (worksFor the Datamarcos Organization) as the author instead of the Organization. */
  authorPerson?: { name: string; jobTitle: string };
  cluster: GuideCluster;
  relatedProgram: { href: string; title: string; summary: string; cta: string };
  /** Shown in a box at the top (comparison guides must disclose that Datamarcos runs one of the programs). */
  disclosure?: string;
  body: GuideBlock[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};
