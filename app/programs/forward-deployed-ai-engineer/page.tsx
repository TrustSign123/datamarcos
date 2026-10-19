import Image from "next/image";
import type { Metadata } from "next";
import { ArrowDownToLine, ArrowRight, Bot, BrainCircuit, Check, ChartNoAxesCombined, Clock3, Cloud, Code2, Database, GitBranch, Hand, MessageSquareText, ShieldCheck, UsersRound, Workflow, type LucideIcon } from "lucide-react";
import { FDECallRequestForm } from "@/components/program/FDECallRequestForm";
import {
  siAnthropic,
  siApachekafka,
  siAuth0,
  siDatabricks,
  siDocker,
  siCrewai,
  siElasticsearch,
  siFastapi,
  siGithub,
  siGithubactions,
  siGooglegemini,
  siGooglecloud,
  siGraphql,
  siGrafana,
  siHuggingface,
  siJira,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siLinux,
  siMlflow,
  siMongodb,
  siNeo4j,
  siNvidia,
  siOllama,
  siOkta,
  siOpentelemetry,
  siOwasp,
  siPostgresql,
  siPydantic,
  siPytest,
  siPython,
  siRedis,
  siSap,
  siSnowflake,
  siStripe,
  siTerraform
} from "simple-icons";

const brochureUrl = "/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineer Program | Datamarcos",
  description: "A 5-month, 22-week executive program for engineers to scope, build, secure, deploy and own production AI systems inside real enterprise environments.",
  alternates: { canonical: "/programs/forward-deployed-ai-engineer" },
  openGraph: {
    title: "Forward Deployed AI Engineer Program | Datamarcos",
    description: "Build it. Deploy it. Own it inside the customer's world.",
    images: [{ url: "/images/forward-deployed-ai-engineer/brochure-cover.png", width: 1400, height: 1980 }]
  }
};

const phases = [
  {
    number: "01",
    title: "Foundation: think like an FDE, ship like an engineer",
    weeks: "Weeks 1-4",
    summary: "FDE craft, customer discovery, APIs, cloud, networking, containers and CI/CD.",
    topics: ["Engagement lifecycle, discovery notes and stakeholder maps", "Python APIs with FastAPI, Pydantic, REST and GraphQL", "AWS networking, IAM, secrets and private environments", "Docker, deployment pipelines, tests and observability"],
    ship: "A tested integration service, deployed cloud environment and discovery pack."
  },
  {
    number: "02",
    title: "GenAI systems: build AI that survives real data",
    weeks: "Weeks 5-9",
    summary: "LLM engineering, measured retrieval, knowledge graphs, multimodal documents and cost control.",
    topics: ["Model selection, structured outputs and evaluation harnesses", "Hybrid RAG, vector stores, reranking and messy enterprise data", "Knowledge graphs, GraphRAG and failure analysis", "Document intelligence, secure text-to-SQL and model routing"],
    ship: "Project Sentinel: a secure BFSI knowledge copilot with hybrid RAG, RBAC and guardrails."
  },
  {
    number: "03",
    title: "Agents and enterprise integration",
    weeks: "Weeks 10-14",
    summary: "Stateful agents, governed tools and integrations with systems enterprises already run.",
    topics: ["LangGraph state, memory, checkpointing and tool design", "Multi-agent orchestration and human approval gates", "MCP servers, tool scopes, A2A and audit logs", "Legacy databases, Jira, ServiceNow, Kafka and cloud AI platforms"],
    ship: "Project Atlas: an operations copilot integrated with enterprise tools and approval flows."
  },
  {
    number: "04",
    title: "Production, security and governance",
    weeks: "Weeks 15-19",
    summary: "Secure, operate and hand over AI systems that regulated enterprises can approve.",
    topics: ["Identity, RBAC, prompt injection defense and PII controls", "DPDP, GDPR, HIPAA, EU AI Act and model risk essentials", "LLMOps, traces, evaluation gates, SLOs and incident response", "UAT, adoption, client handoff, ROI and executive communication"],
    ship: "Project Helix: production hardening, compliance pack, red-team report and client handoff."
  },
  {
    number: "05",
    title: "Capstone engagement and career launch",
    weeks: "Weeks 20-22",
    summary: "Run a complete client engagement, defend the system and prepare for FDE interview loops.",
    topics: ["Discover, scope and design a BFSI, healthcare or operations solution", "Build, secure, evaluate, deploy and document the capstone", "Demo Day with an industry-style review panel", "System design, live debugging, customer scenarios and job-search strategy"],
    ship: "A deployed capstone, defended architecture, portfolio and interview plan."
  }
];

const engagements = [
  { number: "E1", name: "Project Sentinel", domain: "BFSI · secure knowledge copilot", description: "Hybrid RAG, secure text-to-SQL, RBAC, PII masking and a stakeholder-ready demo." },
  { number: "E2", name: "Project Atlas", domain: "Enterprise operations · multi-agent copilot", description: "LangGraph supervisor, MCP tools, Jira and ServiceNow integration, approvals and cost traces." },
  { number: "E3", name: "Project Helix", domain: "Regulated enterprise · production hardening", description: "Security review, compliance pack, red-team, UAT, runbooks and client handoff." },
  { number: "CAPSTONE", name: "Your client engagement", domain: "BFSI · healthcare · enterprise operations", description: "A complete engagement from discovery through deployment, handoff and Demo Day defense." }
];

const outcomes = [
  "Scope an ambiguous customer request into a costed, measurable engagement.",
  "Build and evaluate secure RAG, graph and multimodal AI systems.",
  "Connect governed agents to legacy databases, APIs and enterprise tools.",
  "Deploy on cloud infrastructure with CI/CD, monitoring and rollback paths.",
  "Defend systems against prompt injection, data leakage and excessive agency.",
  "Run discovery, UAT, executive updates and a professional handoff."
];

const hiringSignals = [
  { number: "01", title: "Shipped, deployed work", body: "A live system with security, tests and monitoring is stronger evidence than a certificate alone." },
  { number: "02", title: "Integration depth", body: "Databases, legacy APIs, identity, networking and odd data are part of the job." },
  { number: "03", title: "Evaluation discipline", body: "Measure quality, cost and latency, then show that the system works." },
  { number: "04", title: "Customer communication", body: "Discover, scope, push back thoughtfully and keep executives aligned." },
  { number: "05", title: "Security judgement", body: "Know where agents fail and how to contain the blast radius." },
  { number: "06", title: "Ownership mindset", body: "Take a vague ask through build, adoption and handoff." }
];

const dayInLife = [
  { time: "Morning", title: "Clarify the problem", body: "Align with stakeholders on the real problem and what success means this week." },
  { time: "Midday", title: "Build the connection", body: "Connect client data, tune retrieval and wire an agent into the tools people use." },
  { time: "Afternoon", title: "Solve the edge cases", body: "Debug in secured environments: networking, permissions, legacy systems and messy data." },
  { time: "Evening", title: "Own the next step", body: "Share the update, record decisions, harden the system and prepare the next demo." }
];

const orbitTools: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "AI models", icon: BrainCircuit, color: "#ff7340" },
  { label: "Enterprise data", icon: Database, color: "#4ab7f5" },
  { label: "Agent workflows", icon: Workflow, color: "#80d9c4" },
  { label: "Cloud platforms", icon: Cloud, color: "#72b9ff" },
  { label: "Security", icon: ShieldCheck, color: "#ff9b47" },
  { label: "Integrations", icon: GitBranch, color: "#71d6ca" },
  { label: "Software delivery", icon: Code2, color: "#53b6f4" },
  { label: "Evaluation", icon: ChartNoAxesCombined, color: "#ff7743" }
];

type ToolIcon = { title: string; hex: string; path: string };
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

export default function ForwardDeployedAIEngineerPage() {
  return (
    <article className="fde-page">
      <section className="fde-hero" id="top">
        <div className="container fde-hero-grid">
          <div className="fde-hero-copy">
            <p className="fde-kicker"><span>5-Month Executive Program</span><span>Built for Working Engineers</span></p>
            <h1 aria-label="Become a Forward Deployed AI Engineer"><span className="fde-title-line fde-title-line-one" aria-hidden="true">Become a</span><span className="fde-title-line fde-title-line-two" aria-hidden="true">Forward</span><span className="fde-title-line fde-title-line-three" aria-hidden="true">Deployed</span><span className="fde-title-line fde-title-line-four" aria-hidden="true"><em>AI Engineer.</em></span></h1>
            <p className="fde-deck">Ship AI into businesses. Own the result.</p>
            <p className="fde-intro">Learn to scope ambiguous problems, build secure AI systems, integrate with enterprise tools, and take deployments from discovery to handoff.</p>
            <div className="fde-hero-facts"><span><strong>22</strong> weeks · live online</span><span><strong>170+</strong> live hours</span><span><strong>4</strong> engagements</span></div>
            <div className="fde-actions">
              <a className="fde-button fde-button-orange" href="#apply">Check your fit <ArrowRight size={17} /></a>
              <a className="fde-button fde-button-light" href={brochureUrl} download><ArrowDownToLine size={17} /> Get the syllabus</a>
            </div>
            <p className="fde-note"><UsersRound size={15} /> Application-based · Small cohorts · Weekend-friendly</p>
          </div>
          <div className="fde-hero-form" id="apply">
            <div className="fde-hero-form-banner">Small cohorts · Rolling admissions</div>
            <div className="fde-hero-form-body"><p className="fde-eyebrow">Start a conversation</p><h2>See if the FDE path fits you.</h2><p>Ask about cohort dates, fees and scholarships.</p><FDECallRequestForm programId="forward-deployed-ai-engineer" programSlug="forward-deployed-ai-engineer" programName="Forward Deployed AI Engineer - GenAI & Agentic AI Program" /></div>
          </div>
        </div>
        <a className="fde-hero-scroll" href="#market"><span /> See why FDEs are in demand</a>
      </section>

      <section className="fde-proof" aria-label="Program facts">
        <div className="container fde-proof-row">
          <div><strong>5</strong><span>months</span></div><div><strong>22</strong><span>weeks</span></div><div><strong>4</strong><span>client-style engagements</span></div><div><strong>170+</strong><span>live hours and studio</span></div><p>Discovery to deployment.<br />One engineer owns the outcome.</p>
        </div>
      </section>

      <section className="fde-orbit-showcase" aria-labelledby="fde-orbit-title">
        <div className="container fde-orbit-layout">
          <div className="fde-orbit-copy"><p className="fde-eyebrow">The FDE advantage</p><h2 id="fde-orbit-title">One engineer.<br /><em>The whole system.</em></h2><p>Forward deployed engineers connect the model to the messy reality around it: real users, real data, real security and real business outcomes.</p><div className="fde-orbit-caption"><span /> From customer problem to production ownership</div></div>
          <div className="fde-orbit-scene" aria-hidden="true">
            <div className="fde-orbit-halo fde-orbit-halo-one" />
            <div className="fde-orbit-halo fde-orbit-halo-two" />
            <div className="fde-orbit-path fde-orbit-path-one" />
            <div className="fde-orbit-path fde-orbit-path-two" />
            <div className="fde-orbit-wheel">
              {orbitTools.map((tool, index) => <span className="fde-orbit-node" key={tool.label} style={{ "--orbit-angle": `${index * 45}deg`, "--orbit-counter": `${index * -45}deg`, "--orbit-color": tool.color } as React.CSSProperties}>
                <span className="fde-orbit-chip"><tool.icon size={22} strokeWidth={1.8} /><small>{tool.label}</small></span>
              </span>)}
            </div>
            <div className="fde-orbit-core"><span className="fde-orbit-core-icon"><Hand size={54} strokeWidth={1.45} /></span><span className="fde-orbit-core-label">FDE</span><span className="fde-orbit-core-sub">owns the outcome</span></div>
            <span className="fde-orbit-spark fde-orbit-spark-one" />
            <span className="fde-orbit-spark fde-orbit-spark-two" />
          </div>
        </div>
      </section>

      <section className="fde-market" id="market" aria-labelledby="fde-market-title">
        <div className="container fde-market-topline"><p className="fde-eyebrow">Why this role, why now</p><span>Public listing data · directional only</span></div>
        <div className="container fde-market-grid"><div><h2 id="fde-market-title">AI pilots are common.<br /><em>Production is the gap.</em></h2><p>FDEs bridge the customer problem and the production system. Public job-listing data points to a fast-growing role, while hiring remains selective and referral-led.</p></div><div className="fde-market-stat"><span>Indeed FDE listings</span><strong>643 <i>to</i> 5,330</strong><p>Apr 2025 to Apr 2026</p><b>+729% reported year-over-year growth</b></div><p className="fde-market-disclaimer">Source: Indeed listings as reported by Times of India, June 2026. Geography and methodology vary across public sources; treat as directional. Hiring outcomes and compensation are not guaranteed by this program.</p></div>
      </section>

      <section className="fde-toolkit" aria-labelledby="fde-toolkit-title">
        <div className="container">
          <div className="fde-toolkit-heading">
            <div><p className="fde-eyebrow">The technology</p><h2 id="fde-toolkit-title">The stack production FDE teams use.</h2></div>
            <p>Build across models, agents, data, infrastructure and enterprise systems. Learn the tools that make real deployments work.</p>
          </div>
          <div className="fde-tool-ribbons">
            {toolGroups.map((group) => <div className="fde-tool-lane" key={group.category}>
              <p className="fde-tool-category">{group.category}</p>
              <div className={`fde-tool-window fde-tool-window-${group.direction}`}>
                <div className="fde-tool-track">
                  {[0, 1].map((copy) => <div className="fde-tool-run" key={copy} aria-hidden={copy === 1}>
                    {group.tools.map((tool) => <span className="fde-tool-chip" key={tool.name}>
                      <span className="fde-tool-mark" style={{ color: tool.icon ? `#${tool.icon.hex}` : undefined }}>
                        {tool.icon ? <svg viewBox="0 0 24 24" focusable="false"><path d={tool.icon.path} /></svg> : tool.fallback && <tool.fallback size={21} strokeWidth={1.8} />}
                      </span>
                      <span>{tool.name}</span>
                    </span>)}
                  </div>)}
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="fde-section fde-role">
        <div className="container fde-role-grid">
          <div><p className="fde-eyebrow">The role</p><h2>Close the distance between an AI idea and a system people rely on.</h2></div>
          <div className="fde-role-copy"><p>A Forward Deployed Engineer works where product, engineering and customer context meet. You listen closely, make the problem concrete, then build and integrate the system in the environment where it has to work.</p><p>This program develops both sides of that job: production engineering depth and the customer-facing craft to get useful systems adopted.</p></div>
        </div>
        <div className="container fde-lifecycle" aria-label="Forward deployed engineering lifecycle">
          {["Discover", "Design", "Build", "Secure", "Deploy", "Hand over", "Own the outcome"].map((step, index) => <div className="fde-lifecycle-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 6 && <ArrowRight size={16} />}</div>)}
        </div>
      </section>

      <section className="fde-day-section" aria-labelledby="fde-day-title">
        <div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">The work, for real</p><h2 id="fde-day-title">A day in the life of an FDE.</h2></div><p>Customer context in the morning. Production-grade systems by the end of the day. The craft is technical and human, all at once.</p></div>
          <div className="fde-day-rail">{dayInLife.map((item, index) => <article className="fde-day-stop" key={item.time} style={{ "--fde-delay": `${index * 110}ms` } as React.CSSProperties}><span className="fde-day-time">{item.time}</span><span className="fde-day-dot" /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>

      <section className="fde-engagements">
        <div className="container">
          <div className="fde-section-heading"><div><p className="fde-eyebrow">Engagement studio</p><h2>Four client-style engagements.<br />No toy projects.</h2></div><p>Each one has a client brief, stakeholders, constraints, security requirements and a panel review. Everything is deployed, documented and portfolio-ready.</p></div>
          <div className="fde-engagement-list">
            {engagements.map((engagement) => <article className="fde-engagement" key={engagement.number}><span className="fde-engagement-number">{engagement.number}</span><div><p>{engagement.domain}</p><h3>{engagement.name}</h3></div><p className="fde-engagement-description">{engagement.description}</p><ArrowRight className="fde-engagement-arrow" size={19} /></article>)}
          </div>
        </div>
      </section>

      <section className="fde-section fde-curriculum" id="curriculum">
        <div className="container">
          <div className="fde-section-heading"><div><p className="fde-eyebrow">The roadmap · 22 weeks</p><h2>Five phases, one<br />end-to-end capability.</h2></div><p>Live architecture sessions, hands-on delivery labs, engagement studio and career preparation run through the program.</p></div>
          <div className="fde-phase-list">
            {phases.map((phase, index) => <details className="fde-phase" key={phase.number} open={index === 0}>
              <summary><span className="fde-phase-number">{phase.number}</span><span className="fde-phase-title"><small>{phase.weeks}</small><strong>{phase.title}</strong></span><span className="fde-phase-summary">{phase.summary}</span><span className="fde-phase-toggle" aria-hidden="true">+</span></summary>
              <div className="fde-phase-content"><ul>{phase.topics.map((topic) => <li key={topic}><Check size={15} />{topic}</li>)}</ul><p><strong>You ship</strong>{phase.ship}</p></div>
            </details>)}
          </div>
          <div className="fde-career-track"><span>Career track runs every week</span><p>Portfolio · Resume · LinkedIn · Interview loops · Referrals</p><Clock3 size={19} /></div>
        </div>
      </section>

      <section className="fde-outcomes">
        <div className="container fde-outcome-grid">
          <div><p className="fde-eyebrow">When you finish</p><h2>Ready for the messy, real-world part of AI.</h2><p>Leave with deployed systems, professional delivery artifacts and the ability to explain every design decision like an FDE.</p><a className="fde-text-link" href="#apply">Start an application <ArrowRight size={16} /></a></div>
          <ul>{outcomes.map((outcome) => <li key={outcome}><Check size={17} />{outcome}</li>)}</ul>
        </div>
      </section>

      <section className="fde-hiring-signals fde-section" aria-labelledby="fde-hiring-title"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">What hiring teams screen for</p><h2 id="fde-hiring-title">Six signals behind a strong FDE profile.</h2></div><p>Build evidence you can explain: what you shipped, how you measured it, and how you handled the messy parts.</p></div><div className="fde-hiring-grid">{hiringSignals.map((signal) => <article className="fde-hiring-card" key={signal.number}><span>{signal.number}</span><h3>{signal.title}</h3><p>{signal.body}</p></article>)}</div></div></section>

      <section className="fde-section fde-fit">
        <div className="container fde-fit-grid">
          <div><p className="fde-eyebrow">Who this is for</p><h2>Built for engineers who want to own the outcome.</h2><p>Backend and full-stack engineers, IT-services engineers, data and ML engineers, solutions architects, QA/SDET and DevOps engineers, tech leads and architects.</p></div>
          <div className="fde-fit-checks"><h3>A strong fit if you</h3><p><Check size={16} /> Code comfortably in Python and have 2+ years of experience, or strong shipped projects.</p><p><Check size={16} /> Enjoy customer problems as much as technical ones.</p><p><Check size={16} /> Can commit around 10-14 hours per week.</p><p><Check size={16} /> Want to build, deploy and defend real systems.</p><div className="fde-admission"><strong>Admission</strong><span>Apply online → technical and fit diagnostic → short mentor interview → cohort allocation</span></div></div>
        </div>
      </section>

      <section className="fde-mentor">
        <div className="container fde-mentor-grid">
          <Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={600} height={720} />
          <div><p className="fde-eyebrow">Your lead mentor</p><h2>Deepesh Mishra</h2><p className="fde-mentor-role">Founder, Datamarcos · Solution Architect · Corporate Trainer</p><p>18+ years of industry experience, 25,000+ professionals trained across 200+ organisations. Deepesh has delivered GenAI Forward Deployed Engineer programs for enterprise teams and teaches the work in its real sequence: scope first, then build, secure, deploy and hand over.</p><div className="fde-mentor-stats"><span><strong>25,000+</strong> trained</span><span><strong>200+</strong> organisations</span><span><strong>18+</strong> years</span></div></div>
        </div>
      </section>

      <section className="fde-brochure" id="brochure">
        <div className="container fde-brochure-head"><div><p className="fde-eyebrow">The full program guide</p><h2>Get the brochure.</h2></div><a className="fde-button fde-button-dark" href={brochureUrl} download><ArrowDownToLine size={17} /> Download PDF</a></div>
        <div className="container fde-pdf-frame"><iframe src={brochureUrl} title="Forward Deployed AI Engineer program brochure" loading="lazy" /></div>
      </section>

      <section className="fde-apply" id="apply">
        <div className="container fde-apply-grid">
          <div><p className="fde-eyebrow">Application-based admission</p><h2>Build for the field.</h2><p>Share a few details and our admissions team will discuss program fit, cohort dates, fees and scholarship options.</p><a className="fde-apply-brochure" href={brochureUrl} download><ArrowDownToLine size={16} /> Prefer to review first? Download the full brochure</a></div>
          <FDECallRequestForm programId="forward-deployed-ai-engineer" programSlug="forward-deployed-ai-engineer" programName="Forward Deployed AI Engineer - GenAI & Agentic AI Program" />
        </div>
      </section>
    </article>
  );
}
