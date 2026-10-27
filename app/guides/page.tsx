import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { approvedGuides, formatGuideDate, GUIDE_CLUSTERS } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  path: "/guides",
  title: "Guides: Agentic AI, GenAI, Data Engineering & FDE | Datamarcos",
  description: "Practical, sourced guides from Datamarcos on agentic AI, generative AI, data engineering and forward deployed engineering careers in India."
});

export default function GuidesIndex() {
  // The index only exists while at least one guide is approved.
  if (approvedGuides.length === 0) notFound();
  const groups = GUIDE_CLUSTERS.map((c) => ({ cluster: c, guides: approvedGuides.filter((g) => g.cluster === c) })).filter((g) => g.guides.length);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` }
    ]
  };

  return (
    <div className="guide-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="guide-hero">
        <div className="container">
          <nav className="guide-crumbs" aria-label="Breadcrumb">
            <ol><li><Link href="/">Home</Link></li><li aria-current="page">Guides</li></ol>
          </nav>
          <h1>Guides</h1>
          <p className="guide-lede">Practical, sourced guides on agentic AI, generative AI, data engineering and forward deployed engineering, written for working engineers in India.</p>
        </div>
      </section>
      <div className="container guide-index">
        {groups.map(({ cluster, guides }) => (
          <section key={cluster} aria-labelledby={`cluster-${cluster}`}>
            <h2 id={`cluster-${cluster}`}>{cluster}</h2>
            <div className="guide-cards">
              {guides.map((g) => (
                <Link key={g.slug} className="guide-card" href={`/guides/${g.slug}`}>
                  <strong>{g.h1}</strong>
                  <span>{g.description}</span>
                  <small>Last reviewed {formatGuideDate(g.lastReviewed)} <ArrowRight size={14} aria-hidden="true" /></small>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
