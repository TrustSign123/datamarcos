import type React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BadgeCheck, Bot, CalendarClock, Check, Cloud, Compass, FileCheck2,
  Hammer, Handshake, Linkedin, MessageSquareText, Minus, Presentation, Rocket, ShieldCheck, UsersRound, X
} from "lucide-react";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { AlumniOutcomes } from "@/components/home/AlumniOutcomes";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeRoleExplainer } from "@/components/program/fde/FdeRoleExplainer";
import { FdeCurriculum } from "@/components/program/fde/FdeCurriculum";
import { FdeHeroVisual } from "@/components/program/fde/FdeHeroVisual";
import { DEEPESH_LINKEDIN } from "@/config/home";
import {
  FDE_BROCHURE, FDE_COURSE, fdeCompare, fdeEngagements, fdeFaqs, fdeHirers, fdeJourneys, fdeMarketFacts, fdePhases, fdeRoleRows, fdeToolkit
} from "@/config/fde";
import {
  siAnthropic, siApachekafka, siAuth0, siDatabricks, siDocker, siCrewai, siElasticsearch, siFastapi, siGithub, siGithubactions,
  siGooglegemini, siGooglecloud, siGraphql, siGrafana, siHuggingface, siJira, siKubernetes, siLangchain, siLanggraph, siLinux,
  siMlflow, siMongodb, siNeo4j, siNvidia, siOllama, siOkta, siOpentelemetry, siOwasp, siPostgresql, siPydantic, siPytest,
  siPython, siRedis, siSap, siSnowflake, siStripe, siTerraform
} from "simple-icons";
import type { LucideIcon } from "lucide-react";
import { courseJsonLd } from "@/lib/seo";

const PATH = "/programs/forward-deployed-ai-engineer";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineer Program, Live 22 Weeks | Datamarcos",
  description: "Live, mentor-led 22-week program to become a Forward Deployed AI Engineer: scope, build, secure and deploy production AI (RAG, agents, MCP, LLMOps) for clients.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Forward Deployed AI Engineer Program | Datamarcos",
    description: "Ship AI into real enterprises. 22 weeks, 170+ live hours, 4 client-style engagements, mentor-led.",
    images: [{ url: "/images/forward-deployed-ai-engineer/brochure-cover.png", width: 1400, height: 1980 }]
  }
};

const nav: FdeNavItem[] = [
  { id: "why", label: "Why FDE" },
  { id: "role", label: "The role" },
  { id: "fit", label: "Who it's for" },
  { id: "curriculum", label: "Curriculum" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
  { id: "mentor", label: "Mentor" },
  { id: "learners", label: "Learners" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" }
];

const successLinks = [{ label: "Download the brochure", href: FDE_BROCHURE, download: true }];
const successTitle = "Thanks{first}! Request received.";
const successBody = "A Datamarcos counsellor will call you about program fit, the next cohort date, EMI options and scholarships. Meanwhile, the brochure has the full 22-week roadmap.";

const lifecycle: { icon: LucideIcon; step: string; body: string }[] = [
  { icon: Compass, step: "Discover", body: "Sit with stakeholders, map the real problem and define success." },
  { icon: FileCheck2, step: "Scope", body: "Turn a vague ask into an architecture, SOW and ROI case." },
  { icon: Hammer, step: "Build", body: "Ship RAG, agents and integrations on the customer's data." },
  { icon: ShieldCheck, step: "Secure & deploy", body: "Pass security review, add evals, CI/CD and observability." },
  { icon: Handshake, step: "Own & hand over", body: "Drive adoption, measure value, train the client team." }
];

const rhythm = [
  { k: "2×", v: "live weekend sessions every week" },
  { k: "Lab", v: "weekday evening build lab" },
  { k: "Clinic", v: "weekly FDE clinic for blockers" },
  { k: "1:1", v: "architecture & career mentoring" },
  { k: "Demo", v: "panel reviews + Demo Day" }
];

const notFor = ["You want a watch-only, self-paced video course", "You have never written code", "You expect a guaranteed job or salary"];
const fitFor = ["You code comfortably in Python with ~2+ years of experience (or strong shipped projects)", "You enjoy customer problems as much as technical ones", "You can commit 10-14 hours a week for 22 weeks", "You want to build, deploy and defend real systems"];
const admission = [
  { step: "Apply", body: "Short online application" },
  { step: "Diagnostic", body: "Technical & fit check" },
  { step: "Interview", body: "Brief mentor conversation" },
  { step: "Offer", body: "Cohort seat + bridge pre-work" }
];

const careerSupport = [
  "Weekly career track from Week 1",
  "FDE-specific mock interview loops: ambiguous system design, live debugging, customer scenarios",
  "Resume, LinkedIn and portfolio teardowns",
  "Referral and outreach playbook",
  "Offer evaluation and negotiation"
];

type ToolIcon = { title: string; slug: string; hex: string; path: string };
type Tool = { name: string; icon?: ToolIcon; fallback?: LucideIcon };
type ToolGroup = { category: string; direction: "left" | "right"; tools: Tool[] };

const toolGroups: ToolGroup[] = [
  { category: "Models & AI platforms", direction: "left", tools: [
    { name: "OpenAI", fallback: Bot }, { name: "Claude", icon: siAnthropic }, { name: "Gemini", icon: siGooglegemini },
    { name: "Hugging Face", icon: siHuggingface }, { name: "Ollama", icon: siOllama }, { name: "Databricks", icon: siDatabricks },
    { name: "Snowflake", icon: siSnowflake }, { name: "Google Cloud", icon: siGooglecloud }, { name: "NVIDIA", icon: siNvidia }
  ] },
  { category: "Agents & orchestration", direction: "right", tools: [
    { name: "LangChain", icon: siLangchain }, { name: "LangGraph", icon: siLanggraph }, { name: "CrewAI", icon: siCrewai },
    { name: "Pydantic", icon: siPydantic }, { name: "Python", icon: siPython }
  ] },
  { category: "Retrieval, data & events", direction: "left", tools: [
    { name: "Neo4j", icon: siNeo4j }, { name: "PostgreSQL", icon: siPostgresql }, { name: "Elasticsearch", icon: siElasticsearch },
    { name: "Redis", icon: siRedis }, { name: "MongoDB", icon: siMongodb }, { name: "Kafka", icon: siApachekafka }
  ] },
  { category: "Build & deploy", direction: "right", tools: [
    { name: "FastAPI", icon: siFastapi }, { name: "GraphQL", icon: siGraphql }, { name: "Docker", icon: siDocker },
    { name: "Kubernetes", icon: siKubernetes }, { name: "Terraform", icon: siTerraform }, { name: "GitHub Actions", icon: siGithubactions },
    { name: "pytest", icon: siPytest }, { name: "Linux", icon: siLinux }, { name: "GitHub", icon: siGithub }
  ] },
  { category: "Security, observability & integrations", direction: "left", tools: [
    { name: "Okta", icon: siOkta }, { name: "Auth0", icon: siAuth0 }, { name: "OWASP", icon: siOwasp },
    { name: "OpenTelemetry", icon: siOpentelemetry }, { name: "Grafana", icon: siGrafana }, { name: "MLflow", icon: siMlflow },
    { name: "Slack", fallback: MessageSquareText }, { name: "Jira", icon: siJira }, { name: "SAP", icon: siSap }, { name: "Stripe", icon: siStripe },
    { name: "Salesforce", fallback: Cloud }
  ] }
];

/** Static sprite (public/images/forward-deployed-ai-engineer/tool-icons.svg, generated from simple-icons) keeps ~100 KB of SVG paths out of the HTML. */
const TOOL_SPRITE = "/images/forward-deployed-ai-engineer/tool-icons.svg";
const accents = ["#f4511e", "#2f6bff", "#0e9f84", "#b04cff"];

const jsonLd = [
  courseJsonLd({
    name: "Forward Deployed AI Engineer Program",
    description: metadata.description as string,
    path: PATH,
    duration: "P22W",
    workloadHours: 170,
    credential: "Datamarcos Executive Certificate in Forward Deployed AI Engineering"
  }),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fdeFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } }))
  }
];

function Cta({ label = "Talk to a counsellor", cta, variant = "primary" }: { label?: string; cta: string; variant?: "primary" | "ghost" | "dark" }) {
  return <a className={`fx-btn fx-btn-${variant}`} href="#apply" data-dm-lead data-cta={cta} data-course={FDE_COURSE}>{label} <ArrowRight size={17} aria-hidden="true" /></a>;
}

function Syllabus({ cta, variant = "ghost", label = "Download syllabus" }: { cta: string; variant?: "ghost" | "light" | "dark"; label?: string }) {
  return <a className={`fx-btn fx-btn-${variant}`} href={FDE_BROCHURE} data-dm-download data-file={FDE_BROCHURE} data-course={FDE_COURSE} data-cta={cta}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>;
}

function Head({ eyebrow, title, body, id, align }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; id: string; align?: "center" }) {
  return (
    <header className={`fx-head${align ? " fx-head-center" : ""}`}>
      <p className="fx-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {body && <p className="fx-head-body">{body}</p>}
    </header>
  );
}

export default function ForwardDeployedAIEngineerPage() {
  return (
    <article className="fde-page fx">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="fx-hero" id="top" aria-labelledby="fx-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-hero-grid">
          <div className="fx-hero-copy">
            <p className="fx-hero-kicker"><span className="fx-dot" /> Live online · 22-week executive program · Application-based</p>
            <h1 id="fx-title">Become a <span>Forward Deployed</span> <em>AI Engineer.</em></h1>
            <p className="fx-hero-deck">The engineer companies send in to make AI actually work. Learn to scope a messy customer problem, ship a secure AI system into their real environment, and own the result.</p>
            <ul className="fx-hero-promise">
              <li><Check size={16} aria-hidden="true" /><span>Ship <b>4 client-style deployments</b>: BFSI copilot, multi-agent ops, production hardening, your capstone</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Go deep on what most AI courses skip: <b>security, governance, integration, LLMOps</b></span></li>
              <li><Check size={16} aria-hidden="true" /><span>Learn the <b>consulting craft</b>: discovery, SOWs, UAT, ROI and executive demos</span></li>
            </ul>
            <div className="fx-hero-actions">
              <Cta label="Talk to a counsellor" cta="FDE hero (counsellor)" />
              <Syllabus cta="FDE hero (syllabus)" variant="light" />
            </div>
            <p className="fx-hero-note"><CalendarClock size={15} aria-hidden="true" /> Small cohorts · rolling admissions · EMI options available, talk to a counsellor</p>
          </div>
          <FdeHeroVisual />
        </div>
        <div className="fx-wrap">
          <dl className="fx-facts">
            <div><dt>Duration</dt><dd>22 <small>weeks</small></dd></div>
            <div><dt>Live learning</dt><dd>170+ <small>hours</small></dd></div>
            <div><dt>Client-style engagements</dt><dd>4</dd></div>
            <div><dt>Weekly commitment</dt><dd>10-14 <small>hrs</small></dd></div>
            <div><dt>Format</dt><dd>Weekend <small>friendly</small></dd></div>
          </dl>
        </div>
      </section>

      <FdeSectionNav items={nav} course={FDE_COURSE} />

      {/* HIRERS STRIP */}
      <section className="fx-hirers" aria-label="Companies building FDE teams">
        <div className="fx-wrap fx-hirers-inner">
          <p>Companies publicly building FDE teams</p>
          <ul>{fdeHirers.map((name) => <li key={name}>{name}</li>)}</ul>
          <small>From public job postings and company announcements (sources below). Not Datamarcos hiring partners.</small>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="fx-section fx-why" id="why" aria-labelledby="fx-why-title">
        <div className="fx-wrap">
          <div className="fx-split">
            <Head id="fx-why-title" eyebrow="What is an FDE & why now" title={<>AI pilots are everywhere.<br /><em>Production is the gap.</em></>} />
            <div className="fx-why-copy">
              <p>A <b>Forward Deployed Engineer</b> works inside the customer&apos;s world. Palantir pioneered the role; OpenAI, Anthropic, Salesforce and Databricks now build FDE teams because a model on its own does not change a business. Someone has to connect it to legacy systems, messy data, security reviews and real users, then stay until it creates value.</p>
              <p>That someone is part engineer, part consultant, and increasingly one of the most in-demand roles in AI.</p>
            </div>
          </div>
          <ul className="fx-stats">
            {fdeMarketFacts.map((fact) => (
              <li key={fact.value}>
                <strong>{fact.value}</strong>
                <p>{fact.label}</p>
                <a href={fact.href} target="_blank" rel="noreferrer">{fact.source} · {fact.date} <ArrowUpRight size={13} aria-hidden="true" /></a>
              </li>
            ))}
          </ul>
          <p className="fx-fine">Public sources, linked for verification. Job-market figures are directional and vary by source and geography. Datamarcos does not guarantee placement, salary or hikes.</p>
          <ol className="fx-life" aria-label="The FDE engagement lifecycle">
            {lifecycle.map((item, index) => (
              <li key={item.step} style={{ "--d": `${index * 90}ms` } as React.CSSProperties}>
                <span className="fx-life-n">{String(index + 1).padStart(2, "0")}</span>
                <item.icon size={22} aria-hidden="true" />
                <h3>{item.step}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ROLE EXPLAINER */}
      <section className="fx-section fx-paper" id="role" aria-labelledby="fx-role-title">
        <div className="fx-wrap">
          <Head id="fx-role-title" eyebrow="FDE vs ML engineer vs software engineer" title={<>Same code. <em>Very different job.</em></>} body="FDEs write production code like software engineers and work with models like ML engineers, but they do it embedded with one customer, and they own the outcome." />
          <FdeRoleExplainer rows={fdeRoleRows} />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="fx-section" id="fit" aria-labelledby="fx-fit-title">
        <div className="fx-wrap">
          <Head id="fx-fit-title" eyebrow="Who it's for" title={<>Six ways engineers <em>become FDEs.</em></>} body="Built for working engineers. Your background becomes your edge; the program fills the gaps." />
          <ul className="fx-journeys">
            {fdeJourneys.map((j, index) => (
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
              <h3>A strong fit if</h3>
              <ul>{fitFor.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-fit-no">
              <h3>Not the right fit if</h3>
              <ul>{notFor.map((f) => <li key={f}><X size={16} aria-hidden="true" />{f}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-admit">
              <h3>How admission works</h3>
              <ol>{admission.map((a, i) => <li key={a.step}><span>{i + 1}</span><b>{a.step}</b><small>{a.body}</small></li>)}</ol>
              <p>New to some basics? A bridge pre-work track covers Python, Linux, Git and SQL before Day 1.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="fx-section fx-paper" id="curriculum" aria-labelledby="fx-curr-title">
        <div className="fx-wrap">
          <div className="fx-split fx-split-end">
            <Head id="fx-curr-title" eyebrow="Curriculum · 22 weeks · 5 phases" title={<>From first discovery call <em>to Demo Day.</em></>} body="Every week has live sessions, a hands-on lab and something you ship. Pick a phase, then open any week for topics, labs and what you ship." />
            <Syllabus cta="FDE curriculum (full syllabus)" variant="dark" label="Get the full syllabus PDF" />
          </div>
          <ul className="fx-rhythm" aria-label="Weekly rhythm">{rhythm.map((r) => <li key={r.k}><b>{r.k}</b><span>{r.v}</span></li>)}</ul>
          <FdeCurriculum phases={fdePhases} />
          <p className="fx-career-strip"><Presentation size={18} aria-hidden="true" /> <b>Career track runs every week:</b> portfolio · resume · LinkedIn · FDE interview loops · referrals</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="fx-section fx-ink" id="projects" aria-labelledby="fx-proj-title">
        <div className="fx-wrap">
          <Head id="fx-proj-title" eyebrow="Engagement studio" title={<>Four client engagements. <em>No toy projects.</em></>} body="Each engagement comes with a client brief, stakeholders, constraints, security requirements and a panel review. Everything you build is deployed, documented and portfolio-ready." />
          <ul className="fx-projects">
            {fdeEngagements.map((p, index) => (
              <li key={p.code} className="fx-project" style={{ "--acc": accents[index] } as React.CSSProperties}>
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
              <p className="fx-eyebrow">The FDE toolkit</p>
              <h3>Leave with the artifacts real FDE teams use.</h3>
              <p>Reusable templates you build and keep across every engagement.</p>
            </div>
            <ul>{fdeToolkit.map((k) => <li key={k.name}><b>{k.name}</b><span>{k.items}</span></li>)}</ul>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="fde-toolkit fx-tools" id="tools" aria-labelledby="fx-tools-title">
        <div className="container">
          <div className="fde-toolkit-heading">
            <div><p className="fde-eyebrow">The technology</p><h2 id="fx-tools-title">The 40-tool stack production FDE teams use.</h2></div>
            <p>Models, agents, retrieval, cloud, security and the enterprise systems you integrate with, including Databricks and Snowflake.</p>
          </div>
          <div className="fx-toolwall">
            {toolGroups.map((group) => <div className="fx-toolrow" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.tools.map((tool) => <li key={tool.name} style={tool.icon ? { color: `#${tool.icon.hex}` } as React.CSSProperties : undefined}>
                  {tool.icon ? <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href={`${TOOL_SPRITE}#si-${tool.icon.slug}`} /></svg> : tool.fallback && <tool.fallback size={20} strokeWidth={1.8} aria-hidden="true" />}
                  <span>{tool.name}</span>
                </li>)}
              </ul>
            </div>)}
          </div>
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
            <p>Deepesh has spent 18+ years building and teaching data and AI systems, and has delivered GenAI Forward Deployed Engineer programs for enterprise teams. He teaches the work in its real order: scope first, then build, secure, deploy and hand over.</p>
            <dl className="fx-mentor-stats">
              <div><dt>Professionals trained</dt><dd>25,000+</dd></div>
              <div><dt>Organisations</dt><dd>200+</dd></div>
              <div><dt>Years in industry</dt><dd>18+</dd></div>
              <div><dt>Countries</dt><dd>10+</dd></div>
            </dl>
            <div className="fx-mentor-actions">
              <a className="fx-link" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> Recommendations on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
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
          <Head id="fx-cmp-title" eyebrow="Compare before you choose" title={<>Why engineers choose <em>Datamarcos FDE.</em></>} body="How this program compares with the two most common alternatives." />
          <div className="fx-cmp" role="table" aria-label="Datamarcos FDE program compared with a typical self-paced course and a generic bootcamp">
            <div className="fx-cmp-row fx-cmp-head" role="row">
              <span role="columnheader"><span className="fx-sr">Feature</span></span>
              <span role="columnheader" className="fx-cmp-dm">Datamarcos FDE</span>
              <span role="columnheader">Typical self-paced course</span>
              <span role="columnheader">Generic AI bootcamp</span>
            </div>
            {fdeCompare.map((row) => (
              <div className="fx-cmp-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell" className="fx-cmp-dm"><Check size={16} aria-hidden="true" />{row.dm}</span>
                <span role="cell" data-label="Self-paced"><Minus size={14} aria-hidden="true" />{row.selfPaced}</span>
                <span role="cell" data-label="Bootcamp"><Minus size={14} aria-hidden="true" />{row.bootcamp}</span>
              </div>
            ))}
          </div>
          <p className="fx-fine">“Typical” and “generic” describe common formats in the market, not any specific provider.</p>
          <div className="fx-cta-band">
            <p><b>Still comparing?</b> A counsellor can walk you through the syllabus, cohort dates and EMI options in 15 minutes.</p>
            <Cta cta="FDE compare (counsellor)" />
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
              <strong>Forward Deployed AI Engineering</strong>
              <span className="fx-cert-line" />
              <small>Awarded on completion and capstone defence</small>
              <Award className="fx-cert-seal" size={44} />
            </div>
          </div>
          <div>
            <Head id="fx-cert-title" eyebrow="Certificate & career support" title={<>A certificate backed by <em>work you can show.</em></>} body="The Datamarcos Executive Certificate in Forward Deployed AI Engineering is awarded after you complete the program and defend your capstone at Demo Day. Your strongest credential is the portfolio: four deployed engagements and the artifacts behind them." />
            <ul className="fx-career">{careerSupport.map((c) => <li key={c}><Check size={16} aria-hidden="true" />{c}</li>)}</ul>
            <p className="fx-fine">We do not guarantee placement, salary or hikes. Outcomes depend on each learner.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fx-section fx-paper" id="faq" aria-labelledby="fx-faq-title">
        <div className="fx-wrap fx-faq">
          <div>
            <Head id="fx-faq-title" eyebrow="FAQ" title={<>Questions, <em>answered.</em></>} body="Can't find yours? A counsellor will answer it on a short call." />
            <Cta cta="FDE FAQ (counsellor)" variant="dark" label="Ask a counsellor" />
          </div>
          <div className="fx-faq-list">
            {fdeFaqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}<span aria-hidden="true" /></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE */}
      <section className="fx-section fx-brochure" id="brochure" aria-labelledby="fx-bro-title">
        <div className="fx-wrap">
          <div className="fx-split fx-split-end">
            <Head id="fx-bro-title" eyebrow="The full program guide" title={<>Read the 22-week <em>syllabus.</em></>} body="Week-by-week topics, labs, tools, engagements and admission details in one PDF." />
            <Syllabus cta="FDE brochure section" variant="dark" label="Download PDF" />
          </div>
          <div className="fx-pdf"><GatedBrochureFrame src={FDE_BROCHURE} title="Forward Deployed AI Engineer program brochure" course={FDE_COURSE} cover="/images/forward-deployed-ai-engineer/brochure-cover-preview.webp" /></div>
        </div>
      </section>

      {/* APPLY */}
      <section className="fx-apply" id="apply" aria-labelledby="fx-apply-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-apply-grid">
          <div>
            <p className="fx-eyebrow">Application-based admission · small cohorts</p>
            <h2 id="fx-apply-title">Be the engineer <em>they send in.</em></h2>
            <p>Share a few details. A counsellor will talk through your background, program fit, the next cohort date, EMI options and scholarships. No pressure, no spam.</p>
            <ul className="fx-apply-list">
              <li><Rocket size={17} aria-hidden="true" /> 4 client-style engagements, deployed and portfolio-ready</li>
              <li><UsersRound size={17} aria-hidden="true" /> 170+ live hours with mentor Deepesh Mishra</li>
              <li><Bot size={17} aria-hidden="true" /> RAG, agents, MCP, security, governance and LLMOps</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Honest outcomes: no placement or salary guarantees</li>
            </ul>
            <Syllabus cta="FDE apply (syllabus)" variant="light" label="Prefer to read first? Get the syllabus" />
          </div>
          <InlineLeadForm
            idPrefix="fde-apply"
            course={FDE_COURSE}
            lockCourse
            cta="FDE inline form (apply section)"
            eyebrow="Forward Deployed AI Engineer"
            title="Request your FDE fit call."
            intro="EMI options available, talk to a counsellor."
            submitLabel="Request my fit call"
            trust={["Application-based", "Small cohorts", "Weekend-friendly"]}
            successTitle={successTitle}
            successBody={successBody}
            successLinks={successLinks}
            minHeight={560}
          />
        </div>
      </section>
    </article>
  );
}
