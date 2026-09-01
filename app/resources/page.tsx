import { LeadCaptureForm } from "@/components/Forms";
import { resourceCategories, resources } from "@/config/resources";

export default function ResourcesPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Resources ecosystem</h1><p className="section-copy">Articles, technology guides, webinars, events, reports, case studies, learning roadmaps and free resources.</p></div></section>
      <section className="section"><div className="container grid three">{resourceCategories.map((category) => <div className="card" key={category}><h2>{category}</h2></div>)}</div></section>
      <section className="section alt"><div className="container grid two"><div>{resources.map((resource) => <div className="card" key={resource.id}><h3>{resource.title}</h3><p>{resource.category} · {resource.type}</p></div>)}</div><LeadCaptureForm /></div></section>
    </>
  );
}
