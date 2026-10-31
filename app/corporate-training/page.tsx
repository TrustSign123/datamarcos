import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { corporateProgrammes, corporateStack, founderCredentials, programmeLabel } from "@/config/corporate";

const PATH = "/corporate-training";

export const metadata = pageMetadata({
  path: PATH,
  title: "Corporate AI & Data Engineering Training | Datamarcos",
  description: "Founder-led corporate training in GenAI, agentic AI and data engineering on Azure, Databricks and Snowflake. Programmes delivered for teams at Novartis, HCL Technologies, PwC and more."
});

const ORG_ID = `${site.url}/#organization`;

const steps = [
  ["Share your goals", "Tell us the roles, the tech stack your team uses and what they need to be able to do afterwards."],
  ["Shape the format", "We match the format to the goal, from a 2-day hands-on workshop to a multi-week programme, several batches or certification preparation, like the programmes listed below."],
  ["Hands-on, founder-led delivery", "Sessions are led by Deepesh Mishra's team and built around hands-on work in your stack, for example building a deployable agentic AI solution from scratch in a 2-day workshop."]
];

export default function CorporateTrainingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${site.url}${PATH}#service`,
      name: "Corporate AI and data engineering training",
      serviceType: "Corporate technology training",
      description: "Founder-led corporate and institutional training in Generative AI, agentic AI and data engineering on Azure, Databricks and Snowflake.",
      url: `${site.url}${PATH}`,
      provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Corporate training", item: `${site.url}${PATH}` }
      ]
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero-simple">
        <div className="container">
          <p className="eyebrow">For teams · Corporate training</p>
          <h1 className="section-title">Founder-led AI and data engineering training for teams.</h1>
          <p className="section-copy">Alongside our four live courses for individual learners, Datamarcos&apos;s founder-led training team, led by <Link href="/about">Deepesh Mishra</Link>, delivers corporate and institutional programmes in Generative AI, agentic AI and data engineering. Deepesh has trained teams across 200+ organizations.</p>
          <div className="hero-actions">
            <button type="button" className="button primary" data-dm-lead data-cta="Corporate training - Plan training for your team" data-title="Plan training for your team">Plan training for your team <ArrowRight size={18} /></button>
            <a className="button secondary" href="#programmes">See programmes delivered</a>
          </div>
        </div>
      </section>

      <section className="section" id="programmes" aria-labelledby="programmes-title">
        <div className="container">
          <p className="eyebrow">Programmes delivered</p>
          <h2 className="section-title" id="programmes-title">Recent corporate and institutional programmes</h2>
          <p className="section-copy">Delivered by Datamarcos&apos;s founder-led training team. Where a programme was delivered through a training partner, we say so. Each entry links to the public LinkedIn post about it.</p>
          <div className="ct-grid">
            {corporateProgrammes.map((p) => (
              <article className="card ct-card" key={p.source + p.org}>
                <h3>{programmeLabel(p)}</h3>
                {p.when && <p className="ct-when">{p.when}</p>}
                <p>{p.what}</p>
                <a className="ct-source" href={p.source} target="_blank" rel="noopener noreferrer">Source: LinkedIn post <ExternalLink size={13} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <p className="ct-fine">Organisation names are shown as text only, to describe programmes delivered. They are trademarks of their owners; no endorsement is implied.</p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="stack-title">
        <div className="container">
          <p className="eyebrow">Tech stack</p>
          <h2 className="section-title" id="stack-title">What we teach teams</h2>
          <div className="tech-list">{corporateStack.map((t) => <span className="tech-chip" key={t}>{t}</span>)}</div>
          <p className="section-copy ct-fde-link">Forward deployed engineering for teams: discovery, secure RAG and agent deployment, and handover. See the <Link href="/programs/forward-deployed-ai-engineer">Forward Deployed AI Engineer program</Link>; admissions can discuss team cohorts and company sponsorship.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <p className="eyebrow">How engagements work</p>
          <h2 className="section-title" id="how-title">From your goals to hands-on delivery</h2>
          <ol className="ct-steps">
            {steps.map(([t, c], i) => <li key={t}><span aria-hidden="true">{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section alt" aria-labelledby="founder-title">
        <div className="container grid two">
          <div>
            <p className="eyebrow">Who delivers</p>
            <h2 className="section-title" id="founder-title">{site.founder.name}, founder and lead trainer</h2>
            <p className="section-copy">CEO of Datamarcos since February 2022 and a corporate trainer since 2019, with more than 100 workshops and trainings delivered. <Link href="/about">More about Deepesh</Link>.</p>
          </div>
          <div className="card">
            <h3>Credentials</h3>
            <ul className="ct-creds">{founderCredentials.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" id="inquiry" aria-labelledby="inquiry-title">
        <div className="container ct-cta">
          <h2 className="section-title" id="inquiry-title">Planning training for your team?</h2>
          <p className="section-copy">Tell us your team&apos;s roles, stack and goals, and we&apos;ll get back to you about a format that fits.</p>
          <div className="hero-actions">
            <button type="button" className="button primary" data-dm-lead data-cta="Corporate training - Talk to us" data-title="Plan training for your team">Talk to us <ArrowRight size={18} /></button>
            <a className="button secondary" href={`mailto:${site.email}?subject=Corporate%20training`}>Email {site.email}</a>
          </div>
          <p className="ct-fine">Looking to learn as an individual? See our <Link href="/programs">four live online courses</Link>.</p>
        </div>
      </section>
    </>
  );
}
