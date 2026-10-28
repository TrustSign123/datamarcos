import type React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BadgeCheck, Bot, Boxes, Check, Hammer, Linkedin, Presentation, Rocket, ShieldCheck,
  Sparkles, UsersRound, Workflow, X, RotateCcw } from "lucide-react";
import { ProgramFee } from "@/components/program/ProgramFee";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { AlumniOutcomes } from "@/components/home/AlumniOutcomes";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeCurriculum } from "@/components/program/fde/FdeCurriculum";
import { ToolWall } from "@/components/program/ToolWall";
import { DEEPESH_LINKEDIN } from "@/config/home";
import {
  GENAI_BROCHURE, GENAI_COURSE, genaiAdmission, genaiCareer, genaiFaqs, genaiFitFor, genaiJourneys, genaiNotFor, genaiOpportunity,
  genaiPhases, genaiProjects, genaiQuestions, genaiRhythm, genaiRoles, genaiSignals, genaiToolGroups, genaiToolkit,
  type GenaiFaq
} from "@/config/genai";
import { site } from "@/config/site";

const PATH = "/programs/genai-agentic-ai-engineer";
const URL = `${site.url}${PATH}`;
const brochureUrl = GENAI_BROCHURE;
const videoId = "4eGgJmad5lY";

export const metadata: Metadata = {
  title: "GenAI & Agentic AI Engineer Course, Live 18 Weeks | Datamarcos",
  description: "An 18-week, mentor-led live program to build, evaluate, secure and deploy GenAI and Agentic AI systems: 130+ hours, three client-style projects and a capstone.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Generative AI & Agentic AI Engineer | Datamarcos",
    description: "Build it. Ship it. Own the outcome. Learn GenAI and Agentic AI engineering with Deepesh Mishra.",
    images: [{ url: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg", width: 841, height: 512 }]
  }
};

const nav: FdeNavItem[] = [
  { id: "why", label: "Why now" },
  { id: "roles", label: "Roles" },
  { id: "fit", label: "Who it's for" },
  { id: "curriculum", label: "Curriculum" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
  { id: "mentor", label: "Mentor" },
  { id: "learners", label: "Learners" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" }
];

const opportunityIcons = [Hammer, Workflow, ShieldCheck];
const accents = ["#f4511e", "#2f6bff", "#0e9f84", "#b04cff"];
const successLinks = [{ label: "Download the brochure", href: GENAI_BROCHURE, download: true }];
const successBody = "A Datamarcos counsellor will call you about program fit, the next cohort date, EMI options and scholarships. Meanwhile, the brochure has the full 18-week roadmap.";

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course + mentor + breadcrumb + FAQ. Deliberately NO offers / price. */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${URL}#course`,
    name: "Generative AI & Agentic AI Engineer",
    description: metadata.description,
    url: URL,
    image: `${site.url}/images/program-thumbnails/genai-agentic-ai-engineer.webp`,
    inLanguage: "en-IN",
    timeRequired: "P18W",
    coursePrerequisites: ["Python basics and working engineering fundamentals, or strong shipped projects", "Bridge pre-work in Python, Linux, Git and SQL is provided before Day 1"],
    teaches: ["LLM fundamentals, prompting and structured outputs", "RAG, knowledge graphs and multimodal document intelligence", "Agents, LangGraph, MCP and multi-agent orchestration", "AI security, guardrails and governance", "LLMOps, evaluation and observability", "Cloud deployment with Docker, Terraform and CI/CD"],
    syllabusSections: genaiPhases.map((phase) => ({ "@type": "Syllabus", name: `${phase.title} (${phase.weeks})`, description: phase.summary })),
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
    educationalCredentialAwarded: { "@type": "EducationalOccupationalCredential", name: "Datamarcos Executive Certificate in Generative AI and Agentic AI Engineering", credentialCategory: "certificate" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT130H",
      courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: 18 },
      instructor: { "@id": MENTOR_ID }
    }
  },
  { "@context": "https://schema.org", "@type": "Person", "@id": MENTOR_ID, name: site.founder.name, jobTitle: "Founder and Lead Mentor", image: `${site.url}${site.founder.image}`, worksFor: { "@id": ORG_ID }, sameAs: [DEEPESH_LINKEDIN] },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${site.url}/programs` },
      { "@type": "ListItem", position: 3, name: "Generative AI & Agentic AI Engineer", item: URL }
    ]
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: genaiFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
];

function FaqAnswer({ faq }: { faq: GenaiFaq }) {
  if (!faq.link || !faq.a.includes(faq.link.label)) return <p>{faq.a}</p>;
  const [before, after] = faq.a.split(faq.link.label);
  return <p>{before}<Link href={faq.link.href}>{faq.link.label}</Link>{after}</p>;
}

function Cta({ label = "Talk to a counsellor", cta, variant = "primary" }: { label?: string; cta: string; variant?: "primary" | "ghost" | "dark" }) {
  return <a className={`fx-btn fx-btn-${variant}`} href="#apply" data-dm-lead data-cta={cta} data-course={GENAI_COURSE}>{label} <ArrowRight size={17} aria-hidden="true" /></a>;
}

function Syllabus({ cta, variant = "ghost", label = "Download syllabus" }: { cta: string; variant?: "ghost" | "light" | "dark"; label?: string }) {
  return <a className={`fx-btn fx-btn-${variant}`} href={GENAI_BROCHURE} data-dm-download data-file={GENAI_BROCHURE} data-course={GENAI_COURSE} data-cta={cta}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>;
}

function Head({ eyebrow, title, body, id }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; id: string }) {
  return (
    <header className="fx-head">
      <p className="fx-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {body && <p className="fx-head-body">{body}</p>}
    </header>
  );
}

export default function GenAIAgenticEngineerPage() {
  return (
    <article className="fde-page fde-ga-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HERO: unchanged from the previous page (kept exactly, including the YouTube facade). */}
      <section className="fde-hero fde-ga-hero" id="top">
        <div className="container fde-hero-grid">
          <div className="fde-hero-copy">
            <p className="fde-kicker"><span>18-Week Executive Program</span><span>Application-Based Cohorts</span></p>
            <h1 aria-label="Generative AI and Agentic AI Engineer."><span className="fde-title-line fde-title-reveal" data-title="Generative AI &amp;">Generative AI &amp;</span><span className="fde-title-line fde-title-reveal fde-title-reveal-accent" data-title="Agentic AI Engineer">Agentic AI Engineer</span></h1>
            <p className="fde-deck">Build it. Ship it. Own the outcome.</p>
            <p className="fde-intro">Build LLM applications, RAG systems and multi-agent workflows, then secure, evaluate and deploy them on real enterprise stacks—with Deepesh Mishra.</p>
            <div className="fde-actions"><a className="fde-button fde-button-orange" href="#apply" data-dm-lead>Request a seat <ArrowRight size={17} /></a><a className="fde-button fde-button-light" href={brochureUrl} download><ArrowDownToLine size={17} /> Download brochure</a></div>
            <p className="fde-note"><Check size={15} /> Two live sessions weekly · Hands-on projects · 1:1 mentorship</p>
            <ProgramFee slug="genai-agentic-ai-engineer" />
          </div>
          <div className="fde-ga-hero-media">
            <div className="fde-ga-hero-video-frame"><YouTubeFacade id={videoId} title="Generative AI and Agentic AI Engineer program overview" poster="/images/genai-agentic-ai-engineer/hero-video-poster.webp" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1240px) 46vw, 570px" priority /></div>
            <div className="fde-ga-hero-mentor"><Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={160} height={160} sizes="58px" loading="eager" fetchPriority="low" /><div><span>YOUR LEAD MENTOR</span><strong>Deepesh Mishra</strong><small>Founder · Solution Architect · 18+ years</small></div><Sparkles size={19} /></div>
          </div>
        </div>
        <a className="fde-hero-scroll" href="#program-proof"><span /> Explore the program</a>
      </section>

      <section className="fde-ga-proof" id="program-proof" aria-label="Program facts"><div className="container fde-proof-row"><div><strong>18</strong><span>weeks</span></div><div><strong>130+</strong><span>live hours, labs and studio</span></div><div><strong>4</strong><span>projects including capstone</span></div><div><strong>1:1</strong><span>scheduled mentorship</span></div><p>Live architecture sessions.<br />Weekly labs. Demo Day.</p></div></section>

      <div className="fx">
        <nav className="fx-crumbs fx-crumbs-bar fx-wrap" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li aria-current="page">Generative AI &amp; Agentic AI Engineer</li>
          </ol>
        </nav>

        <FdeSectionNav items={nav} course={GENAI_COURSE} brand={<>GenAI<b>·</b>Agentic</>} ctaPrefix="GenAI" />

        {/* WHY NOW */}
        <section className="fx-section fx-why" id="why" aria-labelledby="fx-why-title">
          <div className="fx-wrap">
            <div className="fx-split">
              <Head id="fx-why-title" eyebrow="The opportunity" title={<>From AI demos <em>to AI in production.</em></>} />
              <div className="fx-why-copy">
                <p>Companies have moved from AI demos to AI in production. They now need people who can build LLM apps and agents, and the secure, measured systems around them.</p>
                <p>This program trains all three halves of that job, from the first model call to a system an enterprise will approve.</p>
              </div>
            </div>
            <ol className="fx-life fx-life-3" aria-label="The three halves of a GenAI engineer's job">
              {genaiOpportunity.map((item, index) => {
                const Icon = opportunityIcons[index];
                return (
                  <li key={item.step} style={{ "--d": `${index * 90}ms` } as React.CSSProperties}>
                    <span className="fx-life-n">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={22} aria-hidden="true" />
                    <h3>{item.step}</h3>
                    <p>{item.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ROLES + SIGNALS */}
        <section className="fx-section fx-paper" id="roles" aria-labelledby="fx-roles-title">
          <div className="fx-wrap">
            <Head id="fx-roles-title" eyebrow="Roles you can target" title={<>Six roles. <em>One skill stack.</em></>} body="The program is built around the roles AI teams hire for, and around what their hiring managers actually check." />
            <ul className="fx-journeys">
              {genaiRoles.map((r, index) => (
                <li key={r.role}>
                  <span className="fx-journey-n">{String(index + 1).padStart(2, "0")}</span>
                  <p className="fx-journey-from"><b>{r.role}</b></p>
                  <p className="fx-journey-why">{r.body}</p>
                </li>
              ))}
            </ul>
            <h3 className="fx-subhead">The six signals hiring managers screen for</h3>
            <ul className="fx-stats fx-stats-3 fx-stats-num">
              {genaiSignals.map((s, index) => (
                <li key={s.k}><strong>{String(index + 1).padStart(2, "0")}</strong><p><b>{s.k}</b>{s.v}</p></li>
              ))}
            </ul>
            <p className="fx-fine">Titles vary by company. We don&apos;t guarantee placement, salary or hikes.</p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="fx-section" id="fit" aria-labelledby="fx-fit-title">
          <div className="fx-wrap">
            <Head id="fx-fit-title" eyebrow="Who it's for" title={<>Six career journeys, <em>one destination.</em></>} body="Application-based admission keeps every cohort focused, practical and peer-strong." />
            <ul className="fx-journeys">
              {genaiJourneys.map((j, index) => (
                <li key={j.from}>
                  <span className="fx-journey-n">{String(index + 1).padStart(2, "0")}</span>
                  <p className="fx-journey-from"><b>{j.from}</b><small>{j.detail}</small></p>
                  <p className="fx-journey-to"><ArrowRight size={15} aria-hidden="true" /> {j.to}</p>
                  <p className="fx-journey-why">{j.why}</p>
                </li>
              ))}
            </ul>
            <div className="fx-fitgrid">
              <div className="fx-fitbox fx-fit-yes">
                <h3>You will thrive if</h3>
                <ul>{genaiFitFor.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}</ul>
              </div>
              <div className="fx-fitbox fx-fit-no">
                <h3>Probably not for you if</h3>
                <ul>{genaiNotFor.map((f) => <li key={f}><X size={16} aria-hidden="true" />{f}</li>)}</ul>
              </div>
              <div className="fx-fitbox fx-admit">
                <h3>How admission works</h3>
                <ol>{genaiAdmission.map((a, i) => <li key={a.step}><span>{i + 1}</span><b>{a.step}</b><small>{a.body}</small></li>)}</ol>
                <p>Bridge pre-work in Python, Linux, Git and SQL is provided before Day 1.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="fx-section fx-paper" id="curriculum" aria-labelledby="fx-curr-title">
          <div className="fx-wrap">
            <div className="fx-split fx-split-end">
              <Head id="fx-curr-title" eyebrow="Curriculum · 18 weeks · 5 phases" title={<>From your first model call <em>to Demo Day.</em></>} body="Every week combines live architecture sessions, a hands-on lab, a shipped deliverable and the tools used. Pick a phase, then open any week." />
              <Syllabus cta="GenAI curriculum (full syllabus)" variant="dark" label="Get the full syllabus PDF" />
            </div>
            <ul className="fx-rhythm" aria-label="Weekly rhythm">{genaiRhythm.map((r) => <li key={r.k}><b>{r.k}</b><span>{r.v}</span></li>)}</ul>
            <FdeCurriculum phases={genaiPhases} />
            <p className="fx-career-strip"><Presentation size={18} aria-hidden="true" /> <b>Career track runs every week:</b> portfolio · resume · LinkedIn · interview loops · referrals</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="fx-section fx-ink" id="projects" aria-labelledby="fx-proj-title">
          <div className="fx-wrap">
            <Head id="fx-proj-title" eyebrow="Project studio" title={<>Four client-style projects. <em>Not toy apps.</em></>} body="Each project comes with a client brief, stakeholders, constraints, security requirements and a panel review. Everything is deployed, documented and portfolio-ready." />
            <ul className="fx-projects">
              {genaiProjects.map((p, index) => (
                <li key={p.code} className="fx-project" style={{ "--acc": accents[index % accents.length] } as React.CSSProperties}>
                  <div className="fx-project-art" aria-hidden="true"><span>{p.code}</span><i /><i /><i /></div>
                  <div className="fx-project-body">
                    <p className="fx-project-meta">{p.weeks} · {p.client}</p>
                    <h3>{p.name}</h3>
                    <p className="fx-project-brief">{p.brief}</p>
                    <ul className="fx-tags" aria-label="Stack">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                    <p className="fx-project-deliv"><b>You deliver</b>{p.deliverables.join(" · ")}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="fx-kit">
              <div>
                <p className="fx-eyebrow">The AI toolkit</p>
                <h3>Professional artifacts you will produce.</h3>
                <p>Templates, runbooks and packs you build once and keep using.</p>
              </div>
              <ul>{genaiToolkit.map((k) => <li key={k.name}><b>{k.name}</b><span>{k.items}</span></li>)}</ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="fde-toolkit fx-tools" id="tools" aria-labelledby="fx-tools-title">
          <div className="container">
            <div className="fde-toolkit-heading">
              <div><p className="fde-eyebrow">The technology</p><h2 id="fx-tools-title">The stack production AI teams use.</h2></div>
              <p>Learn the trade-offs, not just the tool names: models, orchestration, retrieval, security, evals and the enterprise systems agents connect to.</p>
            </div>
            <ToolWall groups={genaiToolGroups} />
            <p className="fx-fine fx-fine-dark">Product and company names are trademarks of their respective owners and are shown for identification only; no affiliation is implied.</p>
          </div>
        </section>

        {/* MENTOR */}
        <section className="fx-section" id="mentor" aria-labelledby="fx-mentor-title">
          <div className="fx-wrap fx-mentor">
            <div className="fx-mentor-photo">
              <Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={600} height={720} sizes="(max-width: 760px) 90vw, 420px" />
              <span className="fx-mentor-badge"><BadgeCheck size={15} aria-hidden="true" /> Lead mentor</span>
            </div>
            <div>
              <p className="fx-eyebrow">Learn from a practitioner</p>
              <h2 id="fx-mentor-title">Deepesh Mishra</h2>
              <p className="fx-mentor-role">Founder, Datamarcos · Solution Architect · Corporate Trainer · BITS Pilani alumnus</p>
              <p>Deepesh has spent 18+ years building and teaching data and AI systems, and has delivered GenAI and Forward Deployed Engineer programs for enterprise teams. He has trained 25,000+ professionals across 200+ organizations. He teaches the way engineers work: scope first, then build, secure, deploy and hand over.</p>
              <dl className="fx-mentor-stats">
                <div><dt>Professionals trained</dt><dd>25,000+</dd></div>
                <div><dt>Organizations</dt><dd>200+</dd></div>
                <div><dt>Years in industry</dt><dd>18+</dd></div>
                <div><dt>Countries</dt><dd>10+</dd></div>
              </dl>
              <div className="fx-mentor-actions">
                <a className="fx-link" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> Recommendations on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
                <Link className="fx-link" href="/corporate-training">Teams he has trained <ArrowRight size={14} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNERS */}
        <section className="fx-section fx-learners" id="learners" aria-labelledby="fx-learn-title">
          <div className="fx-wrap">
            <Head id="fx-learn-title" eyebrow="Learner proof" title={<>Where our learners <em>are now.</em></>} body="Real learners and teams who trained with Deepesh Mishra, in their own words. Every story links to its source." />
            <AlumniOutcomes />
          </div>
        </section>

        {/* COMPARE */}
        <section className="fx-section fx-paper" id="compare" aria-labelledby="fx-cmp-title">
          <div className="fx-wrap">
            <Head id="fx-cmp-title" eyebrow="Compare before you choose" title={<>Eight questions to ask <em>any GenAI program.</em></>} body="And how this one answers. Use the same list on every program you shortlist." />
            <div className="fx-cmp" role="table" aria-label="Eight questions to ask any GenAI program, with this program's answers">
              <div className="fx-cmp-row fx-cmp-2 fx-cmp-head" role="row">
                <span role="columnheader">Question</span>
                <span role="columnheader" className="fx-cmp-dm">Datamarcos GenAI &amp; Agentic AI Engineer</span>
              </div>
              {genaiQuestions.map((row) => (
                <div className="fx-cmp-row fx-cmp-2" role="row" key={row.q}>
                  <span role="rowheader">{row.q}</span>
                  <span role="cell" className="fx-cmp-dm"><Check size={16} aria-hidden="true" />{row.a}</span>
                </div>
              ))}
            </div>
            <div className="fx-cta-band">
              <p><b>Still comparing?</b> A counsellor can walk you through the syllabus, cohort dates and EMI options in 15 minutes.</p>
              <Cta cta="GenAI compare (counsellor)" />
            </div>
          </div>
        </section>

        {/* CERTIFICATE + CAREER */}
        <section className="fx-section" id="certificate" aria-labelledby="fx-cert-title">
          <div className="fx-wrap fx-cert">
            <div className="fx-cert-card" aria-hidden="true">
              <div className="fx-cert-inner">
                <span className="fx-cert-logo">DATAMARCOS</span>
                <small>Executive Certificate in</small>
                <strong>Generative AI and Agentic AI Engineering</strong>
                <span className="fx-cert-line" />
                <small>Awarded on completion and capstone defence</small>
                <Award className="fx-cert-seal" size={44} />
              </div>
            </div>
            <div>
              <Head id="fx-cert-title" eyebrow="Certificate & career launch" title={<>A certificate backed by <em>work you can show.</em></>} body="The Datamarcos Executive Certificate in Generative AI and Agentic AI Engineering is awarded on completing the program and defending your capstone. Career support runs in parallel with the technical modules, so your profile is ready when your skills are." />
              <ul className="fx-jobmap fx-jobmap-4" aria-label="Career launch milestones">
                {genaiCareer.map((c) => <li key={c.weeks}><b>{c.milestone}</b><span>{c.weeks}</span></li>)}
              </ul>
              <p className="fx-fine">We do not promise placements, salaries or hikes. Hiring outcomes depend on your effort and the market.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="fx-section fx-paper" id="faq" aria-labelledby="fx-faq-title">
          <div className="fx-wrap fx-faq">
            <div>
              <Head id="fx-faq-title" eyebrow="FAQ" title={<>Before you <em>apply.</em></>} body="Can't find yours? A counsellor will answer it on a short call." />
              <Cta cta="GenAI FAQ (counsellor)" variant="dark" label="Ask a counsellor" />
            </div>
            <div className="fx-faq-list">
              {genaiFaqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}<span aria-hidden="true" /></summary>
                  <FaqAnswer faq={faq} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BROCHURE */}
        <section className="fx-section fx-brochure" id="brochure" aria-labelledby="fx-bro-title">
          <div className="fx-wrap">
            <div className="fx-split fx-split-end">
              <Head id="fx-bro-title" eyebrow="The full program guide" title={<>Read the 18-week <em>syllabus.</em></>} body="Week-by-week topics, labs, tools, projects and admission details in one PDF." />
              <Syllabus cta="GenAI brochure section" variant="dark" label="Download PDF" />
            </div>
            <div className="fx-pdf"><GatedBrochureFrame src={GENAI_BROCHURE} title="Generative AI and Agentic AI Engineer program brochure" course={GENAI_COURSE} cover="/images/program-thumbnails/genai-agentic-ai-engineer.webp" /></div>
          </div>
        </section>

        {/* APPLY */}
        <section className="fx-apply" id="apply" aria-labelledby="fx-apply-title">
          <div className="fx-hero-glow" aria-hidden="true" />
          <div className="fx-wrap fx-apply-grid">
            <div>
              <p className="fx-eyebrow">Application-based admission · small cohorts</p>
              <h2 id="fx-apply-title">Become the engineer <em>every AI team wants.</em></h2>
              <p>Share a few details. A counsellor will talk through your background, program fit, the next cohort date, EMI options and scholarships.</p>
              <ul className="fx-apply-list">
                <li><Rocket size={17} aria-hidden="true" /> 3 client-style projects + a capstone, deployed and portfolio-ready</li>
                <li><UsersRound size={17} aria-hidden="true" /> 130+ hours of live sessions, labs and studio with Deepesh Mishra</li>
                <li><Bot size={17} aria-hidden="true" /> LLMs, RAG, agents, MCP, security and LLMOps</li>
                <li><ShieldCheck size={17} aria-hidden="true" /> Honest outcomes: no placement or salary guarantees</li>
                <li className="fx-apply-refund"><RotateCcw size={17} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: not right for you? Ask within 7 days for a refund.</span></li>
              </ul>
              <Syllabus cta="GenAI apply (syllabus)" variant="light" label="Prefer to read first? Get the syllabus" />
            </div>
            <InlineLeadForm
              idPrefix="genai-apply"
              course={GENAI_COURSE}
              lockCourse
              cta="GenAI inline form (apply section)"
              eyebrow="Generative AI & Agentic AI Engineer"
              title="Request your fit call."
              intro="EMI options available, talk to a counsellor."
              submitLabel="Request my fit call"
              trust={["Application-based", "Small cohorts", "Live online"]}
              successTitle="Thanks{first}! Request received."
              successBody={successBody}
              successLinks={successLinks}
              minHeight={560}
            />
          </div>
        </section>
      </div>
    </article>
  );
}
