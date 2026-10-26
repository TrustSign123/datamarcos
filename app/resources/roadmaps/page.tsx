import { pageMetadata } from "@/lib/seo";
// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources/roadmaps",
  title: "Learning Roadmaps for AI and Data Careers | Datamarcos",
  description: "Datamarcos learning roadmaps for AI, data engineering and DevOps careers. This page is being prepared; the roadmaps will be published here when ready.",
  noindex: true
});

export default function RoadmapsPage() { return <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Roadmaps</h1><p className="section-copy">Editable learning roadmaps and lead-generation resources.</p></div></section>; }
