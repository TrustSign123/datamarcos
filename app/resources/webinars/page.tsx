import { pageMetadata } from "@/lib/seo";
// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources/webinars",
  title: "Webinars on AI and Data Engineering | Datamarcos Resources",
  description: "Datamarcos webinars on AI, GenAI and data engineering. This index is being prepared and upcoming sessions will be listed here once they are scheduled.",
  noindex: true
});

export default function WebinarsPage() { return <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Webinars</h1><p className="section-copy">Editable webinar index placeholder.</p></div></section>; }
