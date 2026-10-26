import { pageMetadata } from "@/lib/seo";
import { LeadCaptureForm } from "@/components/Forms";
import { resourceCategories, resources } from "@/config/resources";

// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources",
  title: "Free Learning Resources and Guides | Datamarcos Resources",
  description: "Datamarcos resources hub for upcoming learning roadmaps, technology guides and checklists on AI, data engineering and DevOps. Request a resource by form.",
  noindex: true
});

export default function ResourcesPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Resources ecosystem</h1><p className="section-copy">Articles, technology guides, webinars, events, reports, case studies, learning roadmaps and free resources.</p></div></section>
      <section className="section"><div className="container grid three">{resourceCategories.map((category) => <div className="card" key={category}><h2>{category}</h2></div>)}</div></section>
      <section className="section alt"><div className="container grid two"><div>{resources.map((resource) => <div className="card" key={resource.id}><h3>{resource.title}</h3><p>{resource.category} · {resource.type}</p></div>)}</div><LeadCaptureForm /></div></section>
    </>
  );
}
