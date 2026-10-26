import { pageMetadata } from "@/lib/seo";
// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources/articles",
  title: "Articles on AI and Data Engineering | Datamarcos Resources",
  description: "Datamarcos articles on AI, GenAI and data engineering. This index is still being prepared, and new articles will be listed here once published.",
  noindex: true
});

export default function ArticlesPage() { return <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Articles</h1><p className="section-copy">Editable article index placeholder.</p></div></section>; }
