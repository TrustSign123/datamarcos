import { pageMetadata } from "@/lib/seo";
// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources/case-studies",
  title: "Case Studies | Datamarcos Training and Learner Outcomes",
  description: "Datamarcos case studies. Verified case studies will be published here after review; until then this page is a placeholder and is excluded from search results.",
  noindex: true
});

export default function CaseStudiesPage() { return <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Case Studies</h1><p className="section-copy">Verified case studies can be published here as written, PDF or video assets.</p></div></section>; }
