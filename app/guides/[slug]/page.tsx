import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { GuideBody, Inline } from "@/components/guides/GuideBody";
import { approvedGuides, formatGuideDate, getApprovedGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

// Publish gate: only approved guides are pre-rendered; any other slug (including drafts) is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return approvedGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getApprovedGuide(slug);
  if (!guide) return {};
  const meta = pageMetadata({ path: `/guides/${guide.slug}`, title: guide.title, description: guide.description });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: guide.datePublished, modifiedTime: guide.dateModified }
  };
}

const ORG_ID = `${site.url}/#organization`;

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getApprovedGuide(slug);
  if (!guide) notFound();
  const url = `${site.url}/guides/${guide.slug}`;
  const org = { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url };

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: guide.h1,
      description: guide.description,
      url,
      mainEntityOfPage: url,
      image: `${site.url}/og/datamarcos-home.jpg`,
      inLanguage: "en-IN",
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: org,
      publisher: org,
      articleSection: guide.cluster
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
        { "@type": "ListItem", position: 3, name: guide.h1, item: url }
      ]
    }
  ];
  if (guide.faqs.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    });
  }

  return (
    <article className="guide guide-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="guide-hero">
        <div className="container guide-narrow">
          <nav className="guide-crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li aria-current="page">{guide.h1}</li>
            </ol>
          </nav>
          <p className="eyebrow">{guide.cluster}</p>
          <h1>{guide.h1}</h1>
          <p className="guide-lede">{guide.description}</p>
          <p className="guide-byline">By <strong>{guide.author}</strong> · Last reviewed <time dateTime={guide.lastReviewed}>{formatGuideDate(guide.lastReviewed)}</time></p>
        </div>
      </header>

      <div className="container guide-narrow guide-content">
        {guide.disclosure && <aside className="guide-disclosure" aria-label="Disclosure"><strong>Disclosure:</strong> <Inline text={guide.disclosure} /></aside>}
        <GuideBody blocks={guide.body} />

        {guide.faqs.length > 0 && (
          <section className="guide-faq" aria-labelledby="faq">
            <h2 id="faq">FAQ</h2>
            {guide.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        )}

        <section className="guide-program" aria-label="Related program">
          <p className="eyebrow">Related program</p>
          <h2>{guide.relatedProgram.title}</h2>
          <p>{guide.relatedProgram.summary}</p>
          <div className="guide-program-actions">
            <Link className="button primary" href={guide.relatedProgram.href}>{guide.relatedProgram.cta} <ArrowRight size={17} aria-hidden="true" /></Link>
            <button type="button" className="button secondary" data-dm-lead data-cta={`Guide ${guide.slug} - Talk to a counsellor`}>Talk to a counsellor</button>
          </div>
        </section>

        <section className="guide-sources" aria-labelledby="sources">
          <h2 id="sources">Sources</h2>
          <p>Accessed {formatGuideDate(guide.lastReviewed)}.</p>
          <ul>{guide.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
        </section>
      </div>
    </article>
  );
}
