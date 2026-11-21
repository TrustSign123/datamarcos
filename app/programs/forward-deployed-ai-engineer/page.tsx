import type React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CareerJourney } from "@/components/ds/CareerJourney";
import { journeyFromPhases } from "@/lib/journey";
import {
  ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BadgeCheck, Bot, Check, Cloud, Compass, FileCheck2,
  Hammer, Handshake, Linkedin, MessageSquareText, PhoneCall, Rocket, ShieldCheck, UsersRound, X, RotateCcw } from "lucide-react";
import { FeesEnrolment } from "@/components/program/FeesEnrolment";
import { ViewFeesLink } from "@/components/program/ViewFeesLink";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeRoleExplainer } from "@/components/program/fde/FdeRoleExplainer";
import { FdeCurriculum } from "@/components/program/fde/FdeCurriculum";
import { DEEPESH_LINKEDIN } from "@/config/home";
import {
  FDE_BROCHURE, FDE_COURSE, fdeAudience, fdeCareerTimeline, fdeCompare, fdeEngagements, fdeFaqs, fdeHirers, fdeHiringPaths, fdeJourneys, fdeMarketFacts,
  fdePhases, fdeReadyRoles, fdeRoleRows, fdeToolkit, type FdeFaq
} from "@/config/fde";
import { FdeReadinessCheck } from "@/components/program/fde/FdeReadinessCheck";
import { FdeEngagementShowcase } from "@/components/program/fde/FdeEngagementShowcase";
import { StoryCard } from "@/components/ds/StoryCard";
import { Placeholder } from "@/components/ds/Placeholder";
import { WhyDatamarcos } from "@/components/ds/WhyDatamarcos";
import { CareerOSJourney } from "@/components/ds/CareerOSJourney";
import { LearnersNow } from "@/components/ds/LearnersNow";
import { LearnerVideoCard } from "@/components/home/LearnerVideoCard";
import { learnerStories, learnerVideos } from "@/config/home";
import { PLACEMENT_DISCLAIMER, PLACEMENT_LABEL, PLACEMENT_URL } from "@/config/placement";
import {
  siAnthropic, siApachekafka, siAuth0, siDatabricks, siDocker, siCrewai, siElasticsearch, siFastapi, siGithub, siGithubactions,
  siGooglegemini, siGooglecloud, siGraphql, siGrafana, siHuggingface, siJira, siKubernetes, siLangchain, siLanggraph, siLinux,
  siMlflow, siMongodb, siNeo4j, siNvidia, siOllama, siOkta, siOpentelemetry, siOwasp, siPostgresql, siPydantic, siPytest,
  siPython, siRedis, siSap, siSnowflake, siStripe, siTerraform
} from "simple-icons";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import { NEXT_COHORT_ISO, NEXT_COHORT_LONG, NEXT_COHORT_STARTS } from "@/config/cohort";
import { APPLY_FEE_INTRO, faqsWithProgramFees } from "@/config/fees";
import { faqsForJsonLd, faqsForMarket, faqsPointingToFees, isIndiaMarket } from "@/lib/geo";
import { brochureHrefForMarket } from "@/config/lead";
import { getMarket } from "@/lib/geo-server";
import { RelatedGuides } from "@/components/guides/RelatedGuides";

const PATH = "/programs/forward-deployed-ai-engineer";

const URL = `${site.url}${PATH}`;
const OG_IMAGE = { url: "/og/forward-deployed-ai-engineer.jpg", width: 1200, height: 630, alt: "Datamarcos Forward Deployed AI Engineer program: 22 weeks live online, 4 client-style engagements" };
const OG_TITLE = "Forward Deployed Engineer (FDE) Course, Live Online | Datamarcos";
const OG_DESCRIPTION = "Ship AI into real enterprises. 22 weeks, 170+ live hours, 4 client-style engagements, mentor-led.";

const FDE_DESCRIPTION = "Live 22-week Forward Deployed Engineer (FDE) course for working engineers. Ship 4 client-style AI deployments: RAG, agents, MCP, security and LLMOps. Live online, learn from anywhere.";

export const metadata: Metadata = {
  title: "Forward Deployed Engineer (FDE) Course Online | Datamarcos",
  description: FDE_DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: URL, siteName: site.name, type: "website", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE.url] }
};

const nav: FdeNavItem[] = [
  { id: "role", label: "The role" },
  { id: "fit", label: "Who it's for" },
  { id: "readiness", label: "Readiness" },
  { id: "mentor", label: "Mentor" },
  { id: "learners", label: "Learners" },
  { id: "curriculum", label: "Curriculum" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Placement" },
  { id: "fees", label: "Fees" },
  { id: "faq", label: "FAQ" }
];


const successTitle = "Thanks{first}! Request received.";
const successBodyIn = `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG}, EMI options and scholarships. Meanwhile, the brochure has the full 22-week roadmap.`;
const successBodyIntl = `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG}, fees and scholarships. Meanwhile, the brochure has the full 22-week roadmap.`;

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

/** Last real change to the FDE brochure PDF (git history: 19 Oct 2026). Update only when the syllabus actually changes. */
const SYLLABUS_UPDATED = "Oct 2026";

const HINDU_BL = "https://www.thehindubusinessline.com/info-tech/gccs-outpace-indian-it-services-firms-in-hiring-forward-deployed-engineers/article71336534.ece";

/** FAQ answer with an optional inline link; JSON-LD gets the identical plain text. */
function FaqAnswer({ faq }: { faq: FdeFaq }) {
  if (!faq.link || !faq.a.includes(faq.link.label)) return <p>{faq.a}</p>;
  const [before, after] = faq.a.split(faq.link.label);
  return <p>{before}<Link href={faq.link.href}>{faq.link.label}</Link>{after}</p>;
}

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

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course + mentor + breadcrumb + FAQ. Deliberately NO offers / price (no-fee rule), no AggregateRating / Review. */
function jsonLdFor(faqs: typeof fdeFaqs) {
  return [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${URL}#course`,
    name: "Forward Deployed AI Engineer Program",
    alternateName: ["Forward Deployed Engineer (FDE) Course", "AI FDE course"],
    description: "Live, mentor-led 22-week Forward Deployed Engineer (FDE) course for working engineers: scope, build, secure and deploy production AI (RAG, agents, MCP, LLMOps) through four client-style engagements.",
    url: URL,
    image: `${site.url}/images/program-cards/forward-deployed-ai-engineer.webp`,
    inLanguage: "en-IN",
    educationalLevel: "Intermediate",
    about: ["Forward deployed engineering", "Production AI deployment", "Retrieval-augmented generation", "AI agents"],
    audience: { "@type": "EducationalAudience", educationalRole: "working software, data and ML engineers" },
    timeRequired: "P22W",
    coursePrerequisites: ["Comfortable Python with about 2+ years of engineering experience, or strong shipped projects", "Git, Linux and SQL basics (a bridge pre-work track is provided)"],
    teaches: ["Customer discovery and scoping (SOW, ROI, UAT)", "Production RAG and evaluation", "Agents, LangGraph and Model Context Protocol (MCP)", "Enterprise and data-platform integration (Databricks, Snowflake)", "AI security and governance (OWASP LLM Top 10, PII, DPDP)", "LLMOps, CI/CD and observability", "Deployment and handover"],
    syllabusSections: [
      { "@type": "Syllabus", name: "Foundation (Weeks 1-4)", description: "FDE craft, APIs, cloud networking, containers and CI/CD." },
      { "@type": "Syllabus", name: "GenAI Systems (Weeks 5-9)", description: "LLM engineering, retrieval, knowledge graphs, multimodal documents and cost control. Engagement 1: Project Sentinel." },
      { "@type": "Syllabus", name: "Agents & Integration (Weeks 10-14)", description: "Agent design, multi-agent orchestration, MCP, legacy and data-platform integration. Engagement 2: Project Atlas." },
      { "@type": "Syllabus", name: "Production & Security (Weeks 15-19)", description: "AI security, governance and compliance, LLMOps and handover. Engagement 3: Project Helix." },
      { "@type": "Syllabus", name: "Capstone & Launch (Weeks 20-22)", description: "Your capstone engagement, Demo Day and FDE interview loops." }
    ],
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
    educationalCredentialAwarded: { "@type": "EducationalOccupationalCredential", name: "Datamarcos Executive Certificate in Forward Deployed AI Engineering", credentialCategory: "certificate" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: NEXT_COHORT_ISO,
      location: { "@type": "VirtualLocation", url: URL },
      courseWorkload: "PT170H",
      courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: 22 },
      instructor: { "@id": MENTOR_ID }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": MENTOR_ID,
    name: site.founder.name,
    jobTitle: "Founder and Lead Mentor",
    image: `${site.url}${site.founder.image}`,
    worksFor: { "@id": ORG_ID },
    sameAs: [DEEPESH_LINKEDIN]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${site.url}/programs` },
      { "@type": "ListItem", position: 3, name: "Forward Deployed AI Engineer", item: URL }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } }))
  }
];
}

function Cta({ label = "Talk to a counsellor", cta, variant = "primary" }: { label?: string; cta: string; variant?: "primary" | "ghost" | "navy" | "white" }) {
  return <a className={`ds-btn ds-btn-${variant}`} href="#apply" data-dm-lead data-cta={cta} data-course={FDE_COURSE}>{label} <ArrowRight size={17} aria-hidden="true" /></a>;
}

async function Syllabus({ cta, variant = "ghost", label = "Download syllabus" }: { cta: string; variant?: "ghost" | "white" | "navy" | "outline-light"; label?: string }) {
  const href = brochureHrefForMarket(FDE_BROCHURE, await getMarket());
  return <a className={`ds-btn ds-btn-${variant}`} href={href} data-dm-download data-file={href} data-course={FDE_COURSE} data-cta={cta}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>;
}

function Head({ eyebrow, title, body, id, align = "center" }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; id: string; align?: "center" | "left" }) {
  return (
    <header className={`ds-head ds-head-${align}`}>
      <div>
        <p className="ds-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {body && <p className="ds-sub">{body}</p>}
      </div>
    </header>
  );
}

/** Readiness levels: the same outcomes the readiness check gives (components/program/fde/FdeReadinessCheck.tsx). */
const fdeReadinessLevels = [
  { level: "Ready now", who: "2+ years shipping code in Java, JavaScript, Python, backend, data or DevOps.", next: "Apply. A short diagnostic and mentor call confirm your seat." },
  { level: "Ready with bridge pre-work", who: "You code, but Python, Linux, Git or SQL are rusty.", next: "Bridge pre-work covers them before Day 1." },
  { level: "Start one step earlier", who: "No hands-on coding experience yet.", next: "Begin with GenAI & Agentic AI Engineer, then move to FDE." }
];

export default async function ForwardDeployedAIEngineerPage() {
  const market = await getMarket();
  const india = isIndiaMarket(market);
  const faqs = faqsPointingToFees(faqsForMarket(market, faqsWithProgramFees(market, fdeFaqs, "forward-deployed-ai-engineer")));
  const successLinks = [{ label: "Download the brochure", href: brochureHrefForMarket(FDE_BROCHURE, market), download: true }];
  const stories = learnerStories.filter((story) => story.kind !== "peer").slice(0, 3);
  const objections = [
    { q: "“I have a full-time job.”", a: "Two live weekend sessions plus a weekday evening lab. Plan for 10–14 hours a week." },
    { q: "“I don’t have AI experience.”", a: "You don’t need it. Solid Python and engineering basics are enough; AI starts in Week 5." },
    { q: "“I code in Java or JavaScript, not Python.”", a: "Bridge pre-work covers Python, Linux, Git and SQL before Day 1." },
    { q: "“Is it worth it?”", a: `Four deployed, client-style engagements for your portfolio, live mentoring and FDE interview prep. ${india ? "EMI options" : "Flexible instalments"} and a 7-day refund policy.` }
  ];
  return (
    <article className="ds-fde">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(faqsForJsonLd(faqsWithProgramFees("in", fdeFaqs, "forward-deployed-ai-engineer")))) }} />

      {/* 1. HERO: sell the career first */}
      <section className="ds-hero ds-fde-hero" id="top" aria-labelledby="fx-title">
        <div className="ds-wrap ds-hero-grid">
          <div className="ds-hero-copy">
            <nav className="ds-crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li aria-current="page">Forward Deployed AI Engineer</li>
              </ol>
            </nav>
            <p className="ds-kicker"><span className="ds-dot" aria-hidden="true" /> FDE course · Live online · {NEXT_COHORT_STARTS}</p>
            <h1 id="fx-title">Forward Deployed Engineer Course: <span>become the AI engineer companies send in.</span></h1>
            <p className="ds-lead"><span className="ds-lead-long">Don’t fear AI. Learn to deploy it. Turn your Java, backend, data, DevOps or Python experience into one of AI’s fastest-growing roles: scope a real customer problem, ship a secure AI system and own the result.</span><span className="ds-lead-short">Don’t fear AI. Learn to deploy it, from your Java, backend, data, DevOps or Python base.</span></p>
            <div className="ds-actions">
              <a className="ds-btn ds-btn-primary ds-btn-lg" href="#readiness">Check your readiness <ArrowRight size={18} aria-hidden="true" /></a>
              <Syllabus cta="FDE hero (syllabus)" />
            </div>
            <div className="ds-hero-links"><Cta label="Talk to a counsellor" cta="FDE hero (counsellor)" variant="ghost" /> <ViewFeesLink />  <a className="ds-link" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">{PLACEMENT_LABEL} <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="ds-fde-card">
            <p className="ds-fde-card-title">The FDE engagement, end to end</p>
            <ol>
              {lifecycle.map((item, index) => (
                <li key={item.step}>
                  <span className="ds-fde-card-n">{index + 1}</span>
                  <item.icon size={18} aria-hidden="true" />
                  <span><b>{item.step}</b><small>{item.body}</small></span>
                </li>
              ))}
            </ol>
            <p className="ds-fde-card-foot"><BadgeCheck size={15} aria-hidden="true" /> You practise every step in 4 client-style engagements.</p>
          </div>
        </div>
        <div className="ds-wrap">
          <dl className="ds-facts">
            <div><dt>Duration</dt><dd>22 weeks</dd></div>
            <div><dt>Live learning</dt><dd>170+ hours</dd></div>
            <div><dt>Client-style engagements</dt><dd>4</dd></div>
            <div><dt>Weekly time</dt><dd>10–14 hrs</dd></div>
            <div><dt>Next cohort</dt><dd>{NEXT_COHORT_LONG}</dd></div>
          </dl>
        </div>
      </section>

      <FdeSectionNav items={nav} course={FDE_COURSE} />

      {/* 2. DEMAND: why now, with sources */}
      <section className="ds-section ds-section-tight" id="why" aria-labelledby="fx-why-title">
        <div className="ds-wrap">
          <Head id="fx-why-title" eyebrow="Industry demand" title={<>AI pilots are everywhere. <em>Production is the gap.</em></>} body="Companies need engineers who can take AI from demo to deployed. That engineer is the FDE." />
          <ul className="ds-market">
            {fdeMarketFacts.map((fact) => (
              <li key={fact.value}>
                <strong>{fact.value}</strong>
                <p>{fact.label}</p>
                <a href={fact.href} target="_blank" rel="noreferrer">{fact.source}, {fact.date} <ArrowUpRight size={12} aria-hidden="true" /></a>
              </li>
            ))}
          </ul>
          <div className="ds-hirers">
            <p>Companies publicly building FDE teams</p>
            <ul>{fdeHirers.map((name) => <li key={name}>{name}</li>)}</ul>
          </div>
          <p className="ds-fine ds-center">From public job postings and announcements; not Datamarcos hiring partners. Figures are directional. India hiring: <a href={HINDU_BL} target="_blank" rel="noreferrer">The Hindu BusinessLine, 12 Aug 2026</a>. No placement, salary or hike is guaranteed.</p>
        </div>
      </section>

      {/* 3. THE ROLE: what FDEs do + career opportunities */}
      <section className="ds-section ds-soft" id="role" aria-labelledby="fx-role-title">
        <div className="ds-wrap">
          <Head id="fx-role-title" eyebrow="The role" title={<>Part engineer, part consultant. <em>Owns the outcome.</em></>} body="FDEs write production code and work with models, embedded with one customer." />
          <FdeRoleExplainer rows={fdeRoleRows} />
          <div className="ds-roles">
            <div>
              <h3>Roles you become ready for</h3>
              <ul className="ds-chips">{fdeReadyRoles.map((r) => <li key={r}>{r}</li>)}</ul>
              <p className="ds-fine">Role readiness, not a placement guarantee.</p>
            </div>
            <div>
              <h3>Where graduates aim</h3>
              <ul className="ds-paths">{fdeHiringPaths.map((p) => <li key={p.title}><b>{p.title}</b><span>{p.body}</span></li>)}</ul>
            </div>
          </div>
          <p className="ds-center"><Link className="ds-link" href="/guides/what-is-a-forward-deployed-engineer">What does an FDE do day to day? Read the free guide <ArrowRight size={14} aria-hidden="true" /></Link></p>
          <p className="ds-soft-cta"><a className="ds-link" href="#readiness">Could this be your next role? Check your readiness <ArrowRight size={14} aria-hidden="true" /></a></p>
        </div>
      </section>

      {/* 4. AUDIENCE + TRANSITIONS */}
      <section className="ds-section" id="fit" aria-labelledby="fx-fit-title">
        <div className="ds-wrap">
          <Head id="fx-fit-title" eyebrow="Is this for you?" title={<>Is this for you? <em>Start from your stack.</em></>} body="Built for working Java, JavaScript, Python, backend, data and DevOps engineers. The program fills the gaps." />
          <ul className="ds-stacks">{fdeAudience.map((a) => <li key={a.stack}><b>{a.stack}</b><small>{a.note}</small></li>)}</ul>
          <ol className="ds-levels" aria-label="Readiness levels">
            {fdeReadinessLevels.map((level, index) => (
              <li key={level.level} className={`ds-level ds-level-${index + 1}`}>
                <span className="ds-level-n">{index + 1}</span>
                <b>{level.level}</b>
                <small>{level.who}</small>
                <span>{level.next}</span>
              </li>
            ))}
          </ol>
          <p className="ds-center"><a className="ds-btn ds-btn-primary" href="#readiness" data-cta="FDE fit - Check my readiness">Check your readiness in 30 seconds <ArrowRight size={16} aria-hidden="true" /></a></p>
          <ul className="ds-transitions">
            {fdeJourneys.map((j) => (
              <li key={j.from}>
                <p className="ds-tr-from"><small>From</small><b>{j.from}</b></p>
                <ArrowRight size={18} aria-hidden="true" />
                <p className="ds-tr-to"><small>To</small><b>{j.to}</b></p>
                <p className="ds-tr-why">{j.why}</p>
              </li>
            ))}
          </ul>
          <p className="ds-soft-cta"><a className="ds-link" href="#apply" data-dm-lead data-course={FDE_COURSE} data-cta="FDE fit - Map my transition">Map your transition with a counsellor <ArrowRight size={14} aria-hidden="true" /></a></p>
        </div>
      </section>

      {/* 5. ELIGIBILITY + READINESS CHECK (conversion) */}
      <section className="ds-section ds-soft" id="readiness" aria-labelledby="fx-ready-title">
        <div className="ds-wrap">
          <Head id="fx-ready-title" eyebrow="Eligibility" title={<>Are you ready for FDE? <em>Find out in 30 seconds.</em></>} />
          <FdeReadinessCheck course={FDE_COURSE} />
          <div className="ds-fitgrid">
            <div className="ds-card">
              <h3>A strong fit if</h3>
              <ul className="ds-checks">{fitFor.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div className="ds-card">
              <h3>Not the right fit if</h3>
              <ul className="ds-crosses">{notFor.map((f) => <li key={f}><X size={15} aria-hidden="true" />{f}</li>)}</ul>
            </div>
            <div className="ds-card">
              <h3>How admission works</h3>
              <ol className="ds-steps">{admission.map((a) => <li key={a.step}><b>{a.step}</b><small>{a.body}</small></li>)}</ol>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MENTOR */}
      <section className="ds-section" id="mentor" aria-labelledby="fx-mentor-title">
        <div className="ds-wrap">
          <Head id="fx-mentor-title" eyebrow="Your mentor" title={<>Learn from <em>a practitioner.</em></>} />
          <div className="ds-mentors ds-mentors-fde">
            <article className="ds-mentor ds-mentor-lead">
              <div className="ds-mentor-photo"><Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={600} height={720} sizes="(max-width: 760px) 80vw, 340px" /></div>
              <div className="ds-mentor-copy">
                <span className="ds-tag">Founder &amp; lead mentor</span>
                <h3 id="fx-mentor-name">Deepesh Mishra</h3>
                <p className="ds-mentor-role">Solution Architect · Corporate Trainer · BITS Pilani alumnus</p>
                {/* 31 Oct 2026 (brief 0.1): this page keeps only the 200+ organizations figure for the mentor. */}
                <p>Has trained teams at 200+ organizations. Teaches the work in its real order: scope, build, secure, deploy, hand over.</p>
                <div className="ds-row">
                  <a className="ds-btn ds-btn-ghost" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> Recommendations on LinkedIn</a>
                </div>
              </div>
            </article>
            <Placeholder className="ds-mentor" label="Mentor intro video" need="a 60–90 s video of Deepesh introducing the FDE program" />
          </div>
        </div>
      </section>

      {/* 9. LEARNERS */}
      <section className="ds-section ds-soft" id="learners" aria-labelledby="fx-learn-title">
        <div className="ds-wrap">
          <Head id="fx-learn-title" eyebrow="Learner experiences" title={<>Learners who trained <em>with Deepesh.</em></>} body="In their own words. Every story links to its source." />
          <div className="ds-stories">{stories.map((story) => <StoryCard key={story.id} story={story} />)}</div>
          <LearnersNow />
          <div className="ds-reels ds-reels-3">{learnerVideos.slice(0, 3).map((video) => <LearnerVideoCard key={video.id} video={video} />)}</div>
          <p className="ds-soft-cta"><a className="ds-link" href="#apply" data-dm-lead data-course={FDE_COURSE} data-cta="FDE learners - Talk to a counsellor">Ask a counsellor about learner journeys <ArrowRight size={14} aria-hidden="true" /></a></p>
          <Placeholder label="FDE cohort career journeys" need="stories from FDE program learners (none published yet; the stories above are from other Datamarcos training)" />
        </div>
      </section>

      {/* Why Datamarcos sits with the proof: mentor, learners, then why us */}
      <WhyDatamarcos variant="fde" />

      {/* 6. CURRICULUM: visual phase journey */}
      <section className="ds-section" id="curriculum" aria-labelledby="fx-curr-title">
        <div className="ds-wrap">
          <Head id="fx-curr-title" eyebrow="Curriculum · 22 weeks · 5 phases" title={<>From first discovery call <em>to Demo Day.</em></>} />
          <ol className="ds-phases">
            {fdePhases.map((phase) => (
              <li key={phase.id}>
                <span className="ds-phase-n">{phase.number}</span>
                <small>{phase.weeks}</small>
                <b>{phase.title}</b>
                <p>{phase.summary.split(":")[0]}.</p>
              </li>
            ))}
          </ol>
          <ul className="ds-rhythm" aria-label="Weekly rhythm">{rhythm.map((r) => <li key={r.k}><b>{r.k}</b><span>{r.v}</span></li>)}</ul>
          <details className="ds-weekly">
            <summary>See the week-by-week plan <ChevronIcon /></summary>
            <FdeCurriculum phases={fdePhases} />
          </details>
          <div className="ds-center ds-row ds-row-center"><Syllabus cta="FDE curriculum (full syllabus)" variant="navy" label="Get the full syllabus PDF" /></div>
        </div>
      </section>

      {/* CAREER JOURNEY SIMULATION: month by month to job-ready */}
      <CareerJourney course={FDE_COURSE} ctaPrefix="FDE" duration="22 weeks · ~6 months" title={<>Month by month, <em>to FDE-ready.</em></>} objective="Become the engineer companies send in: scope a real customer problem, build and secure the AI system, deploy it and own the outcome." steps={journeyFromPhases(fdePhases, { milestones: fdeCareerTimeline })} careerPrep="FDE interview loops and 1:1 mocks, plus resume and LinkedIn rewrites in the weekly career track" />

      {/* 7. PROJECTS: interactive showcase */}
      <section className="ds-section ds-navy" id="projects" aria-labelledby="fx-proj-title">
        <div className="ds-wrap">
          <Head id="fx-proj-title" eyebrow="Engagement studio" title={<>Four client engagements. <em>No toy projects.</em></>} body="Each comes with a client brief, constraints, security requirements and a panel review." />
          <FdeEngagementShowcase engagements={fdeEngagements} demoSlot={<Placeholder className="ds-show-demo" label="Project demo video / live demo" need="a recorded walkthrough or hosted demo of each engagement (e.g. Project Sentinel)" />} />
          <div className="ds-kit">
            <p className="ds-eyebrow ds-eyebrow-light">You keep the FDE toolkit</p>
            <ul>{fdeToolkit.map((k) => <li key={k.name}><b>{k.name}</b><span>{k.items}</span></li>)}</ul>
          </div>
        </div>
      </section>

      {/* TOOLS (compact) */}
      <section className="ds-section ds-section-tight" id="tools" aria-labelledby="fx-tools-title">
        <div className="ds-wrap">
          <Head id="fx-tools-title" eyebrow="The technology" title={<>The stack production <em>FDE teams use.</em></>} />
          <div className="ds-tools">
            {toolGroups.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool.name} style={tool.icon ? { color: `#${tool.icon.hex}` } as React.CSSProperties : undefined}>
                      {tool.icon ? <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href={`${TOOL_SPRITE}#si-${tool.icon.slug}`} /></svg> : tool.fallback && <tool.fallback size={18} strokeWidth={1.8} aria-hidden="true" />}
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PLACEMENT: career prep + support */}
      <section className="ds-section ds-soft" id="career" aria-labelledby="fx-career-title">
        <div className="ds-wrap">
          <Head id="fx-career-title" eyebrow="Career launch & placement support" title={<>Built around how <em>FDEs actually get hired.</em></>} body="FDE roles are often filled through targeted applications and referrals. The career track prepares you for that from Week 1." />
          <ol className="ds-timeline">
            {fdeCareerTimeline.map((row) => <li key={row.weeks}><small>{row.weeks}</small><b>{row.milestone}</b><span>{row.output}</span></li>)}
          </ol>
          <div className="ds-career-grid">
            <div className="ds-card">
              <h3>Career support you get</h3>
              <ul className="ds-checks">{careerSupport.map((c) => <li key={c}>{c}</li>)}</ul>
              <Link className="ds-link" href="/resources/interview-prep">FDE interview prep resources <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>
            <div className="ds-card ds-card-blue">
              <span className="ds-tag">CareerOS by Datamarcos</span>
              <h3>After your capstone is verified</h3>
              <p>Match live AI and data openings, practise mock interviews and track every application.</p>
              <a className="ds-btn ds-btn-white" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">Open the placement portal <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="ds-card ds-cert">
              <Award size={34} aria-hidden="true" />
              <h3>Executive Certificate in Forward Deployed AI Engineering</h3>
              <p>Awarded on completion and capstone defence at Demo Day. Issued by Datamarcos.</p>
            </div>
          </div>
          <Placeholder label="Verified FDE outcomes" need="real, verifiable outcome data from completed FDE cohorts (none exists yet, so no numbers are shown)" />
          <p className="ds-fine ds-center">{PLACEMENT_DISCLAIMER}</p>
        </div>
      </section>

      <CareerOSJourney id="placement" course={FDE_COURSE} ctaPrefix="FDE CareerOS" />

      {/* 11. COMPARE */}
      <section className="ds-section" id="compare" aria-labelledby="fx-cmp-title">
        <div className="ds-wrap">
          <Head id="fx-cmp-title" eyebrow="Compare before you choose" title={<>Why engineers choose <em>Datamarcos FDE.</em></>} />
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead><tr><th scope="col"><span className="fx-sr">Feature</span></th><th scope="col" className="ds-table-dm">Datamarcos FDE</th><th scope="col">Typical self-paced course</th><th scope="col">Generic AI bootcamp</th></tr></thead>
              <tbody>
                {fdeCompare.map((row) => (
                  <tr key={row.label}><th scope="row">{row.label}</th><td className="ds-table-dm"><Check size={15} aria-hidden="true" /> {row.dm}</td><td>{row.selfPaced}</td><td>{row.bootcamp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ds-fine">“Typical” and “generic” describe common formats, not any specific provider. See <Link href="/guides/forward-deployed-engineer-courses-india-compared-2026">how FDE courses in India compare</Link>.</p>
          <div className="ds-callbar">
            <p><PhoneCall size={18} aria-hidden="true" /> Still comparing? Get the syllabus, start date and {india ? "EMI options" : "fees"} in a 15-minute call.</p>
            <Cta cta="FDE compare (counsellor)" variant="navy" />
          </div>
        </div>
      </section>

      {/* Risk reducers sit right next to the price */}
      <div className="ds-risk" role="note" aria-label="Before you pay">
        <div className="ds-wrap">
          <span><RotateCcw size={17} aria-hidden="true" /> <Link href="/refund-policy">7-day refund policy</Link></span>
          <span><ShieldCheck size={17} aria-hidden="true" /> {india ? "EMI options, subject to approval" : "Flexible instalments, subject to approval"}</span>
          <span><PhoneCall size={17} aria-hidden="true" /> <a href="#apply" data-dm-lead data-course={FDE_COURSE} data-cta="FDE fees - Free counselling call">Free counselling call first</a></span>
        </div>
      </div>
      <FeesEnrolment slug="forward-deployed-ai-engineer" />

      {/* 12. OBJECTIONS + FAQ */}
      <section className="ds-section ds-soft" id="faq" aria-labelledby="fx-faq-title">
        <div className="ds-wrap ds-faq-grid">
          <div>
            <Head id="fx-faq-title" eyebrow="FAQ" title={<>Questions, <em>answered.</em></>} align="left" />
            <ul className="ds-worries">{objections.map((o) => <li key={o.q}><b>{o.q}</b><span>{o.a}</span></li>)}</ul>
            <Cta cta="FDE FAQ (counsellor)" variant="navy" label="Ask a counsellor" />
          </div>
          <div className="ds-faq">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary><span>{faq.q}</span><ChevronIcon /></summary>
                <FaqAnswer faq={faq} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. GATED BROCHURE */}
      <section className="ds-section ds-section-tight" id="brochure" aria-labelledby="fx-bro-title">
        <div className="ds-wrap">
          <Head id="fx-bro-title" eyebrow="The full program guide" title={<>Read the 22-week <em>syllabus.</em></>} body={<>Topics, labs, tools and admission details in one PDF. Updated {SYLLABUS_UPDATED}.</>} />
          <div className="ds-pdf"><GatedBrochureFrame src={FDE_BROCHURE} title="Forward Deployed AI Engineer program brochure" course={FDE_COURSE} cover="/images/forward-deployed-ai-engineer/brochure-cover-preview.webp" /></div>
        </div>
      </section>
      <RelatedGuides slugs={["forward-deployed-engineer-courses-india-compared-2026", "what-is-a-forward-deployed-engineer", "forward-deployed-engineer-interview-questions"]} wrapClassName="ds-wrap" />

      {/* 14. APPLY: counselling call, risk reversal */}
      <section className="ds-apply" id="apply" aria-labelledby="fx-apply-title">
        <div className="ds-wrap ds-apply-grid">
          <div>
            <p className="ds-eyebrow ds-eyebrow-light">Application-based · small cohorts</p>
            <h2 id="fx-apply-title">Be the engineer <em>they send in.</em></h2>
            <p>Share a few details. A counsellor will talk through your fit, the {NEXT_COHORT_LONG} cohort, {india ? "EMI options" : "fees"} and scholarships. No pressure, no spam.</p>
            <ul className="ds-apply-list">
              <li><Rocket size={17} aria-hidden="true" /> 4 client-style engagements, deployed and portfolio-ready</li>
              <li><UsersRound size={17} aria-hidden="true" /> 170+ live hours with mentor Deepesh Mishra</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Honest outcomes: no placement or salary guarantees</li>
              <li><RotateCcw size={17} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: ask within 7 days for a refund.</span></li>
            </ul>
            <Syllabus cta="FDE apply (syllabus)" variant="outline-light" label="Prefer to read first? Get the syllabus" />
          </div>
          <InlineLeadForm
            idPrefix="fde-apply"
            course={FDE_COURSE}
            lockCourse
            cta="FDE inline form (apply section)"
            eyebrow="Forward Deployed AI Engineer"
            title="Request your FDE fit call."
            intro={APPLY_FEE_INTRO}
            submitLabel="Request my fit call"
            trust={["Application-based", "Small cohorts", "Weekend-friendly"]}
            successTitle={successTitle}
            successBody={india ? successBodyIn : successBodyIntl}
            successLinks={successLinks}
            minHeight={560}
          />
        </div>
      </section>
    </article>
  );
}

function ChevronIcon() {
  return <span className="ds-chev" aria-hidden="true" />;
}
