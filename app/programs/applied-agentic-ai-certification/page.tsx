import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BadgeCheck, Bot, CalendarClock, Check, Linkedin, Minus, PlayCircle, Rocket, ShieldCheck, Sparkles, UsersRound, Wrench, X, Zap, RotateCcw } from "lucide-react";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { AlumniOutcomes } from "@/components/home/AlumniOutcomes";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeCurriculum } from "@/components/program/fde/FdeCurriculum";
import { ToolWall } from "@/components/program/ToolWall";
import { DEEPESH_LINKEDIN } from "@/config/home";
import {
  APPLIED_BROCHURE, APPLIED_COURSE, APPLIED_TITLE, APPLIED_VIDEO_ID, appliedChooser, appliedFaqs, appliedFor, appliedNotFor, appliedPhases,
  appliedPrereqs, appliedProjects, appliedRoles, appliedShifts, appliedToolGroups, appliedWhy, type AppliedFaq
} from "@/config/applied";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

const PATH = "/programs/applied-agentic-ai-certification";
const URL = `${site.url}${PATH}`;
const TITLE = "Applied Agentic AI Certification, 8 Weeks Live | Datamarcos";
const DESCRIPTION = "An eight-week, mentor-led certification to build production-ready AI workflows, RAG systems, tool-using agents and automation, ending in a portfolio capstone.";

export const metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const nav: FdeNavItem[] = [
  { id: "why", label: "Why now" },
  { id: "outcomes", label: "Outcomes" },
  { id: "fit", label: "Who it's for" },
  { id: "curriculum", label: "Curriculum" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
  { id: "mentor", label: "Mentor" },
  { id: "learners", label: "Learners" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" }
];

const whyIcons = [Zap, Wrench, Rocket];
const accents = ["#f4511e", "#2f6bff", "#0e9f84", "#b04cff"];
const successLinks = [{ label: "Download the brochure", href: APPLIED_BROCHURE, download: true }];
const successBody = "A Datamarcos counsellor will call you about program fit, the next batch date and EMI options. Meanwhile, the brochure has the full 8-week curriculum.";

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course + mentor + breadcrumb + FAQ. Deliberately NO offers / price. */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${URL}#course`,
    name: APPLIED_TITLE,
    description: DESCRIPTION,
    url: URL,
    image: `${site.url}/images/applied-agentic-ai/hero-video-poster.webp`,
    inLanguage: "en-IN",
    educationalLevel: "Beginner",
    timeRequired: "P8W",
    coursePrerequisites: ["No prior AI experience required; beginner-friendly refreshers are provided", "Openness to learning basic Python programming"],
    teaches: ["LLM foundations and prompt engineering", "Production RAG systems", "AI agents and tool calling", "Multi-agent orchestration with CrewAI and LangGraph", "Model Context Protocol (MCP) and enterprise integration", "Voice, multimodal agents and n8n automation", "Agent evaluation and reliability"],
    syllabusSections: appliedPhases.flatMap((phase) => phase.items.map((w) => ({ "@type": "Syllabus", name: `Week ${w.week}: ${w.title}`, description: w.topics.join("; ") }))),
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
    educationalCredentialAwarded: { "@type": "EducationalOccupationalCredential", name: "Datamarcos Applied Agentic AI Certification", credentialCategory: "certificate" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: 8 },
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
      { "@type": "ListItem", position: 3, name: APPLIED_TITLE, item: URL }
    ]
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: appliedFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
];

function FaqAnswer({ faq }: { faq: AppliedFaq }) {
  if (!faq.link || !faq.a.includes(faq.link.label)) return <p>{faq.a}</p>;
  const [before, after] = faq.a.split(faq.link.label);
  return <p>{before}<Link href={faq.link.href}>{faq.link.label}</Link>{after}</p>;
}

function Cta({ label = "Talk to a counsellor", cta, variant = "primary" }: { label?: string; cta: string; variant?: "primary" | "ghost" | "dark" }) {
  return <a className={`fx-btn fx-btn-${variant}`} href="#apply" data-dm-lead data-cta={cta} data-course={APPLIED_COURSE}>{label} <ArrowRight size={17} aria-hidden="true" /></a>;
}

function Syllabus({ cta, variant = "ghost", label = "Download syllabus" }: { cta: string; variant?: "ghost" | "light" | "dark"; label?: string }) {
  return <a className={`fx-btn fx-btn-${variant}`} href={APPLIED_BROCHURE} data-dm-download data-file={APPLIED_BROCHURE} data-course={APPLIED_COURSE} data-cta={cta}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>;
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

export default function AppliedAgenticAICertificationPage() {
  return (
    <article className="fde-page fx fx-applied">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="fx-hero" id="top" aria-labelledby="fx-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-hero-grid">
          <div className="fx-hero-copy">
            <nav className="fx-crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li aria-current="page">{APPLIED_TITLE}</li>
              </ol>
            </nav>
            <p className="fx-hero-kicker"><span className="fx-dot" /> Applied Agentic AI Certification · Live online · 8 weeks · Mentor-led</p>
            <h1 id="fx-title"><span>Applied Agentic AI</span> <em>Certification.</em></h1>
            <p className="fx-hero-deck">Build agentic AI systems that actually work in the real world. An eight-week, mentor-led Datamarcos certification for professionals who want to move beyond prompts and build production-ready AI workflows, RAG systems, tool-using agents and automation.</p>
            <ul className="fx-hero-promise">
              <li><Check size={16} aria-hidden="true" /><span>Go beyond using ChatGPT, Claude or Copilot: <b>agent architecture, tool calling, APIs and agentic workflows</b></span></li>
              <li><Check size={16} aria-hidden="true" /><span>Build a <b>project in every module</b>, ending in an integrated multi-agent capstone</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Hands-on with <b>n8n, LangChain, LangGraph, CrewAI and MCP</b>. No prior AI experience required</span></li>
            </ul>
            <div className="fx-hero-actions">
              <Cta label="Talk to a counsellor" cta="Applied hero (counsellor)" />
              <Syllabus cta="Applied hero (syllabus)" variant="light" />
            </div>
            <p className="fx-hero-note"><CalendarClock size={15} aria-hidden="true" /> Small-batch live cohorts · EMI options available, talk to a counsellor</p>
          </div>
          <figure className="fx-hero-media">
            <div className="fx-hero-video">
              <YouTubeFacade id={APPLIED_VIDEO_ID} title="Applied Agentic AI Certification overview" poster="/images/applied-agentic-ai/hero-video-poster.webp" posterSmall="/images/applied-agentic-ai/hero-video-poster-640.webp" priority />
            </div>
            <figcaption>
              <Image src="/images/deepesh-mishra-founder.jpeg" alt="" width={88} height={88} />
              <span><b>Watch: Build. Automate. Deploy.</b>Program overview with mentor Deepesh Mishra <PlayCircle size={13} aria-hidden="true" /></span>
            </figcaption>
          </figure>
        </div>
        <div className="fx-wrap">
          <dl className="fx-facts fx-facts-4">
            <div><dt>Duration</dt><dd>8 <small>weeks</small></dd></div>
            <div><dt>Modules, one per week</dt><dd>8</dd></div>
            <div><dt>Mentorship</dt><dd>1:1 <small>+ live Q&amp;A</small></dd></div>
            <div><dt>Prior AI experience</dt><dd>None <small>needed</small></dd></div>
          </dl>
        </div>
      </section>

      <FdeSectionNav items={nav} course={APPLIED_COURSE} brand={<>Applied<b>·</b>Agentic</>} ctaPrefix="Applied" />

      {/* WHY NOW */}
      <section className="fx-section fx-why" id="why" aria-labelledby="fx-why-title">
        <div className="fx-wrap">
          <div className="fx-split">
            <Head id="fx-why-title" eyebrow="Why this, why now" title={<>The gap between using AI <em>and building with it.</em></>} />
            <div className="fx-why-copy">
              <p>Most professionals use ChatGPT, Claude or Copilot. Far fewer know how agentic systems are designed and built: agents that reason, call tools, work with software and take action.</p>
              <p>This certification closes that gap in eight weeks, with a working project at every step.</p>
            </div>
          </div>
          <ol className="fx-life fx-life-3" aria-label="Why agentic AI now">
            {appliedWhy.map((item, index) => {
              const Icon = whyIcons[index];
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

      {/* OUTCOMES / ROLE SHIFT */}
      <section className="fx-section fx-paper" id="outcomes" aria-labelledby="fx-out-title">
        <div className="fx-wrap">
          <Head id="fx-out-title" eyebrow="Career outcomes" title={<>Where Applied Agentic AI <em>takes you.</em></>} body="Whether you're in QA automation, backend development or product management, agentic AI skills change what you can build and own." />
          <div className="fx-cmp" role="table" aria-label="Your starting point and what changes after this program">
            <div className="fx-cmp-row fx-cmp-2 fx-cmp-head" role="row">
              <span role="columnheader">Starting point</span>
              <span role="columnheader" className="fx-cmp-dm">What changes after this program</span>
            </div>
            {appliedShifts.map((row) => (
              <div className="fx-cmp-row fx-cmp-2" role="row" key={row.from}>
                <span role="rowheader">{row.from}</span>
                <span role="cell" className="fx-cmp-dm"><Check size={16} aria-hidden="true" />{row.to}</span>
              </div>
            ))}
          </div>
          <h3 className="fx-subhead">Roles you become ready for</h3>
          <ul className="fx-tags fx-tags-roles" aria-label="Roles">{appliedRoles.map((r) => <li key={r}>{r}</li>)}</ul>
          <p className="fx-fine">Titles vary by company. We don&apos;t guarantee placement, salary or hikes.</p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="fx-section" id="fit" aria-labelledby="fx-fit-title">
        <div className="fx-wrap">
          <Head id="fx-fit-title" eyebrow="Who it's for" title={<>Built for professionals <em>ready to build.</em></>} body="You don't need to be an AI expert. You do need curiosity and the willingness to code along." />
          <div className="fx-fitgrid">
            <div className="fx-fitbox fx-fit-yes">
              <h3>Who this course is for</h3>
              <ul>{appliedFor.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-fit-yes">
              <h3>Prerequisites &amp; eligibility</h3>
              <ul>{appliedPrereqs.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-fit-no">
              <h3>Not the right fit if</h3>
              <ul>{appliedNotFor.map((f) => <li key={f}><X size={16} aria-hidden="true" />{f}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="fx-section fx-paper" id="curriculum" aria-labelledby="fx-curr-title">
        <div className="fx-wrap">
          <div className="fx-split fx-split-end">
            <Head id="fx-curr-title" eyebrow="Curriculum · 8 weeks · 2 months" title={<>From LLM foundations <em>to a multi-agent capstone.</em></>} body="One module a week, each with a hands-on project. Pick a month, then open any week for topics, the project and tools." />
            <Syllabus cta="Applied curriculum (full syllabus)" variant="dark" label="Get the full syllabus PDF" />
          </div>
          <FdeCurriculum phases={appliedPhases} />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="fx-section fx-ink" id="projects" aria-labelledby="fx-proj-title">
        <div className="fx-wrap">
          <Head id="fx-proj-title" eyebrow="What you'll build" title={<>Live projects, <em>not theory slides.</em></>} body="Every module ends in something that runs. By Week 8 they come together in one integrated agentic AI application." />
          <ul className="fx-projects">
            {appliedProjects.map((p, index) => (
              <li key={p.code} className="fx-project" style={{ "--acc": accents[index % accents.length] } as React.CSSProperties}>
                <div className="fx-project-art" aria-hidden="true"><span>{p.code}</span><i /><i /><i /></div>
                <div className="fx-project-body">
                  <p className="fx-project-meta">{p.client}</p>
                  <h3>{p.name}</h3>
                  <p className="fx-project-brief">{p.brief}</p>
                  <ul className="fx-tags" aria-label="Stack">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLS */}
      <section className="fde-toolkit fx-tools" id="tools" aria-labelledby="fx-tools-title">
        <div className="container">
          <div className="fde-toolkit-heading">
            <div><p className="fde-eyebrow">Every tool you will learn and use</p><h2 id="fx-tools-title">The SDKs and frameworks agentic AI teams use.</h2></div>
            <p>Hands-on with the exact SDKs, frameworks and platforms, not just theory slides.</p>
          </div>
          <ToolWall groups={appliedToolGroups} />
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
            <p className="fx-eyebrow">Know your mentor</p>
            <h2 id="fx-mentor-title">Deepesh Mishra</h2>
            <p className="fx-mentor-role">Founder, Datamarcos · Solution Architect · Corporate Trainer · BITS Pilani alumnus</p>
            <p>Deepesh is a Solution Architect and Corporate Trainer with 18+ years of industry experience who has trained 25,000+ professionals across 200+ organizations. In this certification he goes beyond using AI tools to how agentic systems are designed and built, with practical work on agent architecture, tool calling, APIs and agentic workflows.</p>
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
          <Head id="fx-cmp-title" eyebrow="Choose your course" title={<>Applied Agentic AI <em>or a longer program?</em></>} body="How the three Datamarcos AI courses compare, so you can start at the right depth." />
          <div className="fx-cmp" role="table" aria-label="Applied Agentic AI compared with the GenAI & Agentic AI Engineer and Forward Deployed AI Engineer programs">
            <div className="fx-cmp-row fx-cmp-3 fx-cmp-head" role="row">
              <span role="columnheader"><span className="fx-sr">Feature</span></span>
              <span role="columnheader" className="fx-cmp-dm">Applied Agentic AI</span>
              <span role="columnheader">GenAI &amp; Agentic AI Engineer</span>
              <span role="columnheader">Forward Deployed AI Engineer</span>
            </div>
            {appliedChooser.map((row) => (
              <div className="fx-cmp-row fx-cmp-3" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell" className="fx-cmp-dm"><Check size={16} aria-hidden="true" />{row.applied}</span>
                <span role="cell" data-label="GenAI & Agentic AI"><Minus size={14} aria-hidden="true" />{row.genai}</span>
                <span role="cell" data-label="FDE"><Minus size={14} aria-hidden="true" />{row.fde}</span>
              </div>
            ))}
          </div>
          <p className="fx-fine">Explore the <Link href="/programs/genai-agentic-ai-engineer">GenAI &amp; Agentic AI Engineer</Link> and <Link href="/programs/forward-deployed-ai-engineer">Forward Deployed AI Engineer</Link> programs.</p>
          <div className="fx-cta-band">
            <p><b>Not sure which fits?</b> A counsellor can walk you through the syllabus, batch dates and EMI options in 15 minutes.</p>
            <Cta cta="Applied compare (counsellor)" />
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="fx-section" id="certificate" aria-labelledby="fx-cert-title">
        <div className="fx-wrap fx-cert">
          <div className="fx-cert-card" aria-hidden="true">
            <div className="fx-cert-inner">
              <span className="fx-cert-logo">DATAMARCOS</span>
              <small>Certificate of completion</small>
              <strong>Applied Agentic AI Certification</strong>
              <span className="fx-cert-line" />
              <small>LLMs · RAG · agents · multi-agent · MCP</small>
              <Award className="fx-cert-seal" size={44} />
            </div>
          </div>
          <div>
            <Head id="fx-cert-title" eyebrow="Certificate & support" title={<>A certificate backed by <em>projects you can show.</em></>} body="Every learner who completes the program receives the Datamarcos Applied Agentic AI Certification, validating hands-on proficiency across LLMs, RAG, agents, multi-agent orchestration and MCP." />
            <ul className="fx-career">
              <li><Check size={16} aria-hidden="true" />Small-batch, interactive live sessions led directly by Deepesh Mishra</li>
              <li><Check size={16} aria-hidden="true" />Real-time Q&amp;A and doubt resolution</li>
              <li><Check size={16} aria-hidden="true" />1:1 mentorship and career support</li>
              <li><Check size={16} aria-hidden="true" />Continued mentorship as you apply these skills at work</li>
            </ul>
            <p className="fx-fine">We do not guarantee placement, salary or hikes. Outcomes depend on each learner.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fx-section fx-paper" id="faq" aria-labelledby="fx-faq-title">
        <div className="fx-wrap fx-faq">
          <div>
            <Head id="fx-faq-title" eyebrow="FAQ" title={<>Questions, <em>answered.</em></>} body="Can't find yours? A counsellor will answer it on a short call." />
            <Cta cta="Applied FAQ (counsellor)" variant="dark" label="Ask a counsellor" />
          </div>
          <div className="fx-faq-list">
            {appliedFaqs.map((faq, index) => (
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
            <Head id="fx-bro-title" eyebrow="The full program guide" title={<>Read the 8-week <em>curriculum.</em></>} body="Modules, projects, tools and mentor details in one PDF." />
            <Syllabus cta="Applied brochure section" variant="dark" label="Download PDF" />
          </div>
          <div className="fx-pdf"><GatedBrochureFrame src={APPLIED_BROCHURE} title="Applied Agentic AI Certification brochure" course={APPLIED_COURSE} cover="/images/applied-agentic-ai/hero-video-poster.webp" /></div>
        </div>
      </section>

      {/* APPLY */}
      <section className="fx-apply" id="apply" aria-labelledby="fx-apply-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-apply-grid">
          <div>
            <p className="fx-eyebrow">Small-batch live cohorts</p>
            <h2 id="fx-apply-title">Six months from now, <em>you could be shipping agents.</em></h2>
            <p>Share a few details. A counsellor will talk through your background, the next batch date, EMI options and enrollment steps.</p>
            <ul className="fx-apply-list">
              <li><Rocket size={17} aria-hidden="true" /> A project every module + an integrated multi-agent capstone</li>
              <li><UsersRound size={17} aria-hidden="true" /> Live, mentor-led sessions with Deepesh Mishra</li>
              <li><Bot size={17} aria-hidden="true" /> RAG, agents, multi-agent, MCP, voice and n8n automation</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Honest outcomes: no placement or salary guarantees</li>
              <li className="fx-apply-refund"><RotateCcw size={17} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: not right for you? Ask within 7 days for a refund.</span></li>
            </ul>
            <Syllabus cta="Applied apply (syllabus)" variant="light" label="Prefer to read first? Get the syllabus" />
          </div>
          <InlineLeadForm
            idPrefix="applied-apply"
            course={APPLIED_COURSE}
            lockCourse
            cta="Applied inline form (apply section)"
            eyebrow={APPLIED_TITLE}
            title="Request a call back."
            intro="EMI options available, talk to a counsellor."
            submitLabel="Request my call"
            trust={["8 weeks", "Live & mentor-led", "No prior AI needed"]}
            successTitle="Thanks{first}! Request received."
            successBody={successBody}
            successLinks={successLinks}
            minHeight={560}
          />
        </div>
      </section>
    </article>
  );
}
