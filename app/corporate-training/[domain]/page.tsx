import { notFound } from "next/navigation";
import Link from "next/link";
import { CorporateInquiryForm } from "@/components/Forms";

const domains: Record<string, { title: string; copy: string }> = {
  ai: { title: "Corporate AI Training", copy: "AI, GenAI, agentic systems and AI engineering learning paths for enterprise teams." },
  data: { title: "Corporate Data Training", copy: "Data engineering, analytics, lakehouse and modern data platform capability programs." },
  cloud: { title: "Corporate Cloud Training", copy: "Cloud architecture, cloud-native delivery and platform capability development." },
  devops: { title: "Corporate DevOps Training", copy: "DevOps, DevSecOps, platform engineering, SRE and delivery automation programs." },
  "custom-programs": { title: "Custom Corporate Programs", copy: "Role-based academies, workshops and bootcamps designed for your stack and business goals." }
};

export function generateStaticParams() {
  return Object.keys(domains).map((domain) => ({ domain }));
}

export default async function CorporateDomainPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const item = domains[domain];
  if (!item) notFound();

  return (
    <>
      <section className="hero-simple">
        <div className="container">
          <p className="eyebrow">Corporate training</p>
          <h1 className="section-title">{item.title}</h1>
          <p className="section-copy">{item.copy}</p>
          <div className="hero-actions"><Link className="button secondary" href="/corporate-training">Corporate Training</Link><a className="button primary" href="#inquiry">Request Training</a></div>
        </div>
      </section>
      <section className="section" id="inquiry"><div className="container grid two"><div><h2>Design the right learning intervention.</h2><p className="section-copy">Share your roles, technologies, learners and timeline. Datamarcos can shape the solution around your needs.</p></div><CorporateInquiryForm /></div></section>
    </>
  );
}
