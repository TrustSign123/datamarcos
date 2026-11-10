import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { LeadCaptureForm } from "@/components/Forms";

// Placeholder / not-for-search page: kept live, noindex, out of nav and sitemap (SEO pass 2026-10-26).
export const metadata = pageMetadata({
  path: "/resources",
  title: "Free Learning Resources and Guides | Datamarcos Resources",
  description: "Datamarcos resources hub for technology guides and interview prep on AI, data engineering and careers. Request a resource by form.",
  noindex: true
});

const liveResources = [
  { title: "Guides", href: "/guides", copy: "Sourced guides on AI, data and Forward Deployed Engineer careers and courses." },
  { title: "Interview Prep", href: "/resources/interview-prep", copy: "Scenario questions and answers for data, GenAI and agentic AI roles." }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Resources</p><h1 className="section-title">Resources ecosystem</h1><p className="section-copy">Guides and interview prep for AI and data careers. Articles, webinars, roadmaps and case-study indexes now redirect to the guides library.</p></div></section>
      <section className="section"><div className="container grid two">{liveResources.map((item) => (
        <Link className="card" key={item.href} href={item.href}>
          <h2>{item.title}</h2>
          <p>{item.copy}</p>
        </Link>
      ))}</div></section>
      <section className="section alt"><div className="container"><LeadCaptureForm /></div></section>
    </>
  );
}
