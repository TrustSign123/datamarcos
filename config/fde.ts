/**
 * Forward Deployed AI Engineer page content.
 * Source of truth: /public/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf (2026 edition).
 * Rules: no fees on this page (counsellors share them), no placement %, CTC or hike claims, and every
 * market figure carries its source + date.
 */

export const FDE_COURSE = "Forward Deployed AI Engineer";
export const FDE_BROCHURE = "/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf";

export type MarketFact = { value: string; label: string; source: string; href: string; date: string };

export const fdeMarketFacts: MarketFact[] = [
  {
    value: "+729%",
    label: "Year-over-year growth in Forward Deployed Engineer postings on Indeed (643 in Apr 2025 → 5,330 in Apr 2026).",
    source: "Indeed data via Business Insider",
    href: "https://www.businessinsider.com/forward-deployed-engineer-jobs-in-demand-2026-5",
    date: "May 2026"
  },
  {
    value: "1,000",
    label: "Forward deployed engineers Salesforce has committed to hiring for its Agentforce deployments.",
    source: "Salesforce",
    href: "https://www.salesforce.com/ap/blog/forward-deployed-engineer/",
    date: "2025"
  },
  {
    value: "678",
    label: "Companies with active FDE openings in one tracked dataset (1,256 postings), from AI labs to consulting firms.",
    source: "FDE Pulse",
    href: "https://fdepulse.com/insights/fde-hiring-trends-2026/",
    date: "30 Apr 2026"
  },
  {
    value: "2 → 10+",
    label: "OpenAI's forward deployed engineering team, started in early 2025, across the US, Europe and Asia.",
    source: "The Pragmatic Engineer",
    href: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers",
    date: "2025"
  }
];

export const fdeHirers = ["OpenAI", "Anthropic", "Palantir", "Salesforce", "Databricks", "Google", "Deloitte", "Accenture"];

export type RoleRow = { label: string; swe: string; mle: string; sa: string; fde: string };

/** Role explainer. SWE / SA / FDE columns follow the brochure; ML engineer column is a general description. */
export const fdeRoleRows: RoleRow[] = [
  { label: "Main focus", swe: "Product features for many users", mle: "Models, training and ML pipelines", sa: "Designing solutions before the sale", fde: "One customer's problem, solved in production" },
  { label: "Customer proximity", swe: "Indirect, via the product team", mle: "Low, via data and product teams", sa: "High, mostly pre-sales", fde: "Embedded with the customer" },
  { label: "Writes production code", swe: "Yes", mle: "Yes, mostly model code", sa: "Rarely", fde: "Yes, in the customer's environment" },
  { label: "Owns deployment & results", swe: "Shared", mle: "Model quality", sa: "No", fde: "Yes, end to end" },
  { label: "Handles ambiguity", swe: "Defined tickets", mle: "Defined metrics", sa: "Medium", fde: "Core of the job" },
  { label: "Security & compliance", swe: "Team standards", mle: "Data governance", sa: "Advisory", fde: "Hands-on, per customer" }
];

export type Journey = { from: string; detail: string; to: string; why: string };

export const fdeJourneys: Journey[] = [
  { from: "Backend & full-stack engineer", detail: "3-10 years", to: "AI FDE at a product company", why: "Add LLM, RAG, agent and deployment depth to strong software foundations." },
  { from: "IT-services engineer or consultant", detail: "Delivery or integration background", to: "Product-company deployment role", why: "Move from project delivery to owning AI outcomes at the customer." },
  { from: "Data or ML engineer", detail: "Pipelines, warehouses, models", to: "Platform FDE (Databricks, Snowflake, cloud AI)", why: "Turn data skills into agentic, governed enterprise solutions." },
  { from: "Solutions architect or pre-sales", detail: "Strong with customers", to: "Hands-on FDE with code ownership", why: "Back customer skills with production engineering credibility." },
  { from: "QA, SDET or DevOps engineer", detail: "Automation and reliability", to: "AI deployment & reliability engineer", why: "Bring testing and ops rigour to LLM systems: evals, gates, observability." },
  { from: "Tech lead or architect", detail: "Leads teams and designs", to: "AI delivery lead or founding FDE", why: "Lead enterprise AI engagements with architecture, security and ROI." }
];

export type Week = { week: number; title: string; topics: string[]; lab: string; ship: string; tools: string };
export type Phase = { id: string; number: string; title: string; weeks: string; summary: string; checkpoint: string; after: string; items: Week[] };

export const fdePhases: Phase[] = [
  {
    id: "foundation", number: "01", title: "Foundation", weeks: "Weeks 1-4",
    summary: "Think like an FDE, ship like an engineer: FDE craft, APIs, cloud networking, containers and CI/CD.",
    checkpoint: "Phase 1 review: demo your deployed service and discovery pack to a mentor panel.",
    after: "Run a discovery conversation, build and test a secured API, and deploy it with CI/CD and monitoring on a private cloud network.",
    items: [
      { week: 1, title: "The FDE role and engagement lifecycle", topics: ["What FDEs do: embed, scope, build, deploy, own the outcome", "Discovery craft: stakeholder maps, problem framing, MECE and BLUF", "Artifact toolkit: discovery notes, ADRs, SOW outline, ROI model", "Fluency check: Python, Linux, Git and SQL bridge track"], lab: "Run a mock discovery call and draft a one-page problem brief.", ship: "Discovery pack for Engagement 1", tools: "Notion or Docs, Python, Git, SQL" },
      { week: 2, title: "Backend and API engineering for integration", topics: ["Async Python, FastAPI, Pydantic, REST and GraphQL, versioning", "Authentication basics, error contracts, pagination, rate limits", "Testing with pytest, contract tests, API design reviews", "Reading and extending systems you did not build"], lab: "Build and test a secured integration API.", ship: "Tested FastAPI service with OpenAPI docs", tools: "FastAPI, Pydantic, GraphQL, pytest, Postman" },
      { week: 3, title: "Cloud, networking and security foundations", topics: ["AWS core: VPC, subnets, IAM, KMS, RDS, S3; Azure and GCP mapping", "Private networking, firewalled on-prem access, VPN and bastions", "Secrets management and least privilege", "Linux operations: processes, permissions, shell, logs"], lab: "Stand up a private VPC with RDS and IAM roles.", ship: "Reference cloud environment as Terraform code", tools: "AWS, Terraform, Linux, PostgreSQL" },
      { week: 4, title: "Containers, CI/CD and deployment", topics: ["Docker and Compose; hardened images", "GitHub Actions: tests, scans, build, deploy, rollback", "ECS Fargate, Azure Container Apps and Cloud Run compared", "Observability basics: logs, metrics, traces"], lab: "Pipeline to production on a managed container service.", ship: "Live service with CI/CD and monitoring", tools: "Docker, GitHub Actions, ECS Fargate, Grafana" }
    ]
  },
  {
    id: "genai", number: "02", title: "GenAI Systems", weeks: "Weeks 5-9",
    summary: "Build AI that survives real data: LLM engineering, retrieval, graphs, multimodal documents and cost control, all measured.",
    checkpoint: "Engagement 1 · Project Sentinel: a secure knowledge copilot for a BFSI client.",
    after: "Build, evaluate and cost-optimise RAG, graph and multimodal systems that hold up on messy enterprise data.",
    items: [
      { week: 5, title: "LLM engineering", topics: ["Model landscape (OpenAI, Anthropic, Gemini, open models); selection and cost", "Prompting, structured outputs, tool and function calling", "Context windows, caching, latency and cost budgets", "Eval-first mindset: golden sets and regression tests"], lab: "Build a multi-provider gateway with structured outputs.", ship: "LLM service with an evaluation harness", tools: "OpenAI, Claude, Gemini, Ollama, Pydantic" },
      { week: 6, title: "Retrieval and core RAG", topics: ["Embeddings, chunking strategies and metadata design", "Vector stores: Qdrant, Pinecone, pgvector, Elasticsearch", "Hybrid search, reciprocal rank fusion and reranking", "Ingesting messy enterprise documents"], lab: "Hybrid RAG over a messy document corpus.", ship: "Retrieval pipeline with measured recall", tools: "Qdrant, Pinecone, pgvector, LangChain" },
      { week: 7, title: "Advanced RAG, knowledge graphs and evaluation", topics: ["Query rewriting, multi-hop, parent-document and agentic retrieval", "Knowledge graphs with Neo4j and Cypher; GraphRAG patterns", "RAGAS and DeepEval: faithfulness, relevance, regression gates", "Failure analysis and error taxonomies"], lab: "Add graph retrieval and run an evaluation study.", ship: "RAG system with an evaluation report", tools: "Neo4j, RAGAS, DeepEval, LangChain" },
      { week: 8, title: "Multimodal and document intelligence", topics: ["Vision language models; ColPali and OCR-free parsing", "PDFs, tables, charts, scanned forms and handwriting", "Secure text-to-SQL with read-only access and guardrails", "Speech and voice pipelines"], lab: "Parse invoices and reports into structured data.", ship: "Document-intelligence service", tools: "VLMs, ColPali, Whisper, PostgreSQL" },
      { week: 9, title: "Fine-tuning, small models and cost", topics: ["Fine-tune vs prompt vs RAG; LoRA and PEFT overview", "Small and open models; VPC and on-prem deployment", "Cost engineering: caching, batching, model routing"], lab: "Route requests across models by cost and quality.", ship: "Cost-quality report and routing policy", tools: "Hugging Face, Ollama, vLLM concepts" }
    ]
  },
  {
    id: "agents", number: "03", title: "Agents & Integration", weeks: "Weeks 10-14",
    summary: "Agentic systems that connect safely to the systems enterprises actually run, including Databricks and Snowflake.",
    checkpoint: "Engagement 2 · Project Atlas: a multi-agent operations copilot with MCP tools and approvals.",
    after: "Design governed multi-agent systems and integrate them with legacy systems, Jira, Slack and data platforms.",
    items: [
      { week: 10, title: "Agent design and LangGraph", topics: ["Patterns: ReAct, plan-and-execute, reflection, routers", "LangGraph: state, nodes, edges, memory, checkpointing", "Tool design: idempotency, permissions, failure handling"], lab: "Build a stateful, tool-using agent.", ship: "Agent with evaluation traces", tools: "LangGraph, LangChain, Langfuse" },
      { week: 11, title: "Multi-agent orchestration and human-in-the-loop", topics: ["Supervisor, router, parallel and hierarchical teams; sub-graphs", "Human approval gates and escalation design", "Framework trade-offs: LangGraph, CrewAI, OpenAI Agents SDK, Google ADK"], lab: "Supervisor-based multi-agent workflow with approvals.", ship: "Multi-agent system with cost and trace dashboard", tools: "LangGraph, CrewAI, ADK" },
      { week: 12, title: "MCP and agent interoperability", topics: ["Build MCP servers; tool registries, scopes and governance", "A2A: agent cards and cross-agent handoffs", "Securing tool access: allow-lists, sandboxes, audit logs"], lab: "MCP server in front of a live Jira instance and database.", ship: "Governed tool layer", tools: "MCP SDK, Jira, FastAPI" },
      { week: 13, title: "Legacy systems and enterprise integration", topics: ["SQL Server and Oracle, SOAP and XML, flat files, SFTP", "Slack, Jira, ServiceNow, Salesforce and SAP-style integrations", "Event-driven patterns: Kafka, queues, webhooks, idempotency", "Data contracts and schema drift"], lab: "Integrate an agent with a legacy order system.", ship: "Integration layer with retries and dead-letter handling", tools: "Kafka, Slack, Jira, SQL Server, Oracle" },
      { week: 14, title: "Platform FDE: Databricks, Snowflake and cloud agent platforms", topics: ["Databricks: Unity Catalog, Mosaic AI and Agent Bricks", "Snowflake: Cortex Search, Analyst and Agents", "Cloud platforms: AWS Bedrock, Azure AI Foundry, Google Gemini Enterprise Agent Platform"], lab: "Build the same assistant on two platforms.", ship: "Platform comparison and recommendation memo", tools: "Databricks, Snowflake, Bedrock, Azure, Google Cloud" }
    ]
  },
  {
    id: "production", number: "04", title: "Production & Security", weeks: "Weeks 15-19",
    summary: "Operate, secure and hand over AI systems that regulated enterprises will actually approve.",
    checkpoint: "Engagement 3 · Project Helix: take Atlas to production for a regulated client.",
    after: "Secure, govern, operate and hand over AI systems that regulated enterprises will approve.",
    items: [
      { week: 15, title: "AI security engineering", topics: ["OAuth 2.0, SSO, SAML, RBAC and data-level access control", "Prompt injection, jailbreaks, exfiltration; OWASP LLM Top 10", "PII detection and masking (Presidio), NeMo Guardrails, cloud guardrails"], lab: "Red-team your own agent, then patch it.", ship: "Threat model and hardening report", tools: "Okta, Auth0, Presidio, NeMo Guardrails" },
      { week: 16, title: "Governance, compliance and regulated industries", topics: ["DPDP Act, GDPR, HIPAA and EU AI Act essentials; SOC 2 and ISO 27001 basics", "Data classification, residency, retention and audit trails", "Model risk management for BFSI and healthcare"], lab: "Compliance review of an AI system.", ship: "Governance pack: controls, audit log design, risk register", tools: "Policy templates, audit logging" },
      { week: 17, title: "LLMOps and observability", topics: ["LLM gateways, rate limits, retries, fallbacks and quotas", "Tracing with LangSmith, Langfuse and OpenTelemetry; token and latency SLOs", "Evals in CI, canary releases and rollback"], lab: "Put your agent behind a gateway with tracing and eval gates.", ship: "Production-grade operations stack", tools: "OpenTelemetry, Grafana, Langfuse, GitHub Actions" },
      { week: 18, title: "Scale, reliability and incident response", topics: ["Caching, batching, queues and concurrency; cost at scale", "SLOs, error budgets, runbooks and on-call basics", "Live incident drill and blameless postmortem"], lab: "Load test and fix a failing agent system.", ship: "Runbook and postmortem", tools: "Redis, Kafka, Kubernetes, Grafana" },
      { week: 19, title: "Delivery craft: UAT, handoff, adoption and ROI", topics: ["UAT plans, acceptance criteria, cutover, change management", "Handoff to client teams: documentation, training, support model", "Value realisation: ROI, QBRs, expansion and renewal", "Executive communication: BLUF, demos, pushing back"], lab: "Run UAT and a handoff for Engagement 3.", ship: "UAT runbook and ROI deck", tools: "Docs, Notion, Grafana dashboards" }
    ]
  },
  {
    id: "capstone", number: "05", title: "Capstone & Launch", weeks: "Weeks 20-22",
    summary: "Run a full client engagement end to end, defend it at Demo Day, and prepare for FDE interview loops.",
    checkpoint: "Demo Day: defend your capstone to an industry-style panel.",
    after: "Show a deployed, secured, documented capstone and explain every design decision like an FDE.",
    items: [
      { week: 20, title: "Capstone engagement I: discover, design, build", topics: ["Choose a domain track: BFSI, healthcare or enterprise operations", "Discovery, scoping, SOW, architecture decision records", "Build the core system with RAG, agents and integrations"], lab: "Weekly stakeholder reviews with your mentor panel.", ship: "Approved architecture and working core system", tools: "Your stack of choice from the program" },
      { week: 21, title: "Capstone engagement II: secure, test, deploy", topics: ["Security review, red-team, guardrails and compliance pack", "Evaluation suite, load tests, observability, CI/CD", "UAT, runbooks and handoff documentation"], lab: "Red-team and UAT with an external-style panel.", ship: "Deployed, documented, secured capstone", tools: "Docker, Terraform, GitHub Actions, Langfuse" },
      { week: 22, title: "Demo Day, interview loops and job launch", topics: ["Demo Day: defend your capstone to an industry-style panel", "FDE interview loops: system design with ambiguity, live debugging, customer scenarios", "Resume, LinkedIn and portfolio teardown; referral and outreach playbook", "Offer evaluation and negotiation"], lab: "Two mock interview loops with feedback.", ship: "Portfolio, resume, LinkedIn and job-search plan", tools: "Portfolio site, GitHub, LinkedIn" }
    ]
  }
];

export type Engagement = { code: string; name: string; client: string; brief: string; stack: string[]; deliverables: string[]; weeks: string };

export const fdeEngagements: Engagement[] = [
  { code: "E1", name: "Project Sentinel", client: "BFSI client · secure knowledge copilot", weeks: "Weeks 5-9", brief: "A bank needs answers from thousands of policy documents and a core database, without leaking customer data.", stack: ["Hybrid RAG", "Text-to-SQL", "RBAC", "PII masking", "Guardrails"], deliverables: ["Discovery pack", "Architecture", "Stakeholder demo"] },
  { code: "E2", name: "Project Atlas", client: "Enterprise operations · multi-agent copilot", weeks: "Weeks 10-14", brief: "An operations team wants an agent that works inside Jira and ServiceNow, with humans approving risky actions.", stack: ["LangGraph supervisor", "MCP tools", "Jira", "ServiceNow", "Cost traces"], deliverables: ["Governed tool layer", "Approval flows", "Trace dashboard"] },
  { code: "E3", name: "Project Helix", client: "Regulated enterprise · production hardening", weeks: "Weeks 15-19", brief: "Take Atlas live for a regulated client: pass security review, compliance and UAT, then hand it over.", stack: ["Threat model", "Red-team", "Compliance pack", "SLOs", "Runbooks"], deliverables: ["Red-team report", "UAT runbook", "Client handoff"] },
  { code: "CAP", name: "Your capstone engagement", client: "BFSI · healthcare · enterprise operations", weeks: "Weeks 20-22", brief: "Your domain, your client: the full lifecycle from discovery to handoff, defended live at Demo Day.", stack: ["Your chosen stack", "Evals", "CI/CD", "Security review"], deliverables: ["Deployed system", "Defended architecture", "Portfolio"] }
];

export const fdeToolkit = [
  { name: "Discovery kit", items: "Stakeholder map, questionnaire, problem brief, success metrics" },
  { name: "Architecture pack", items: "Diagrams, ADRs, integration design, data classification" },
  { name: "Commercial pack", items: "SOW outline, estimate, ROI model, QBR template" },
  { name: "Security & compliance", items: "Threat model, red-team report, governance pack, risk register" },
  { name: "Delivery pack", items: "UAT runbook, handoff guide, training deck, support model" },
  { name: "Operations pack", items: "Runbooks, SLOs, dashboards, incident postmortem" }
];

/** Comparison table: generic categories only (no competitor names). Every Datamarcos cell is verifiable in the brochure. */
export type CompareRow = { label: string; dm: string; selfPaced: string; bootcamp: string };

export const fdeCompare: CompareRow[] = [
  { label: "Format", dm: "Live, mentor-led cohort", selfPaced: "Recorded videos", bootcamp: "Live, often short sprints" },
  { label: "Length", dm: "22 weeks · 170+ live hours", selfPaced: "Self-paced, usually short", bootcamp: "Varies, often 4-12 weeks" },
  { label: "Client-style engagements", dm: "4: three studio engagements + capstone", selfPaced: "Practice exercises", bootcamp: "Often one or two projects" },
  { label: "Consulting craft (discovery, SOW, ROI, UAT)", dm: "From Week 1, with a reusable FDE toolkit", selfPaced: "Rarely covered", bootcamp: "Light" },
  { label: "AI security & governance", dm: "A full week each, plus red-teaming", selfPaced: "A lecture at most", bootcamp: "Usually a module" },
  { label: "Data platforms (Databricks, Snowflake)", dm: "Dedicated week (Week 14)", selfPaced: "Rarely", bootcamp: "Rarely" },
  { label: "Panel reviews & Demo Day", dm: "Every engagement + Demo Day", selfPaced: "No", bootcamp: "Sometimes" },
  { label: "1:1 mentoring", dm: "Architecture reviews and career strategy", selfPaced: "No", bootcamp: "Limited" },
  { label: "FDE interview prep", dm: "Weekly career track + mock FDE loops", selfPaced: "No", bootcamp: "Generic" },
  { label: "Honest outcomes", dm: "No placement or salary guarantees", selfPaced: "Varies", bootcamp: "Varies" }
];

/** `link.label` must appear verbatim in `a`; it is rendered as a link and the plain text goes to FAQPage JSON-LD. */
export type FdeFaq = { q: string; a: string; link?: { href: string; label: string } };

export const fdeFaqs: FdeFaq[] = [
  { q: "What does a Forward Deployed AI Engineer actually do?", a: "An FDE embeds with a customer, turns a vague business problem into working software inside the customer's real environment, and stays accountable until it creates value. The day mixes stakeholder discovery, production coding (integrations, RAG, agents, pipelines), debugging in locked-down environments, security reviews and handover." },
  { q: "Do I need AI experience?", a: "No. You need solid Python and working engineering fundamentals. A bridge pre-work track covers Python, Linux, Git and SQL before Day 1, and the program builds LLM, RAG and agent skills from Week 5." },
  { q: "Who is this program for?", a: "Engineers with about 2+ years of experience (or strong shipped projects): backend and full-stack engineers, IT-services engineers, data and ML engineers, solutions architects, QA/SDET and DevOps engineers, and tech leads. It is not for people who have never written code or who want a watch-only video course." },
  { q: "How much time per week do I need?", a: "Plan for about 10 to 14 hours: two live weekend sessions, a weekday evening lab and project work. The program runs for 22 weeks (5 months)." },
  { q: "Are the classes live? What if I miss one?", a: "Yes, sessions are live online and mentor-led. Ask your counsellor how recordings and catch-up work for your cohort." },
  { q: "What projects will I build?", a: "Four client-style engagements: Project Sentinel (BFSI knowledge copilot), Project Atlas (multi-agent operations copilot), Project Helix (production hardening for a regulated client) and your own capstone engagement, each with a client brief, constraints and a panel review." },
  { q: "Is security covered in depth?", a: "Yes. There is a full week on AI security (prompt injection, OWASP LLM Top 10, PII masking, guardrails) and a full week on governance and compliance (DPDP, GDPR, HIPAA, EU AI Act essentials), plus red-teaming in the engagement studio." },
  { q: "Do you cover Databricks and Snowflake?", a: "Yes. Week 14 is dedicated to platform FDE work on Databricks, Snowflake and cloud agent platforms such as AWS Bedrock and Azure AI Foundry." },
  { q: "Will I get a job after this?", a: "We do not guarantee placements, salaries or hikes. You get deployed projects, a weekly career track, FDE-specific mock interview loops, resume and LinkedIn teardowns, and a referral and outreach playbook." },
  { q: "Will I get a certificate?", a: "Yes. The Datamarcos Executive Certificate in Forward Deployed AI Engineering is awarded on completing the program and defending your capstone." },
  { q: "What is the fee? Are EMI options available?", a: "EMI options are available. Our counsellor shares the fee, instalment options, scholarships and the next cohort date after a short call. Request a call and we will get back to you." },
  { q: "Can my company sponsor me?", a: "Yes. Talk to admissions about corporate sponsorship and team cohorts." },
  // Added 27 Oct 2026 (SEO brief, section 4). Facts match the page: ~2+ years, certificate, 4 engagements, weekly rhythm, career track.
  { q: "Can a fresher join the Forward Deployed Engineer course?", a: "Most FDE roles expect real engineering experience, so the program is built for engineers with about 2+ years, or strong shipped projects. If you are earlier in your career, a counsellor may suggest starting with the Generative AI & Agentic AI Engineer program and moving to FDE later.", link: { href: "/programs/genai-agentic-ai-engineer", label: "Generative AI & Agentic AI Engineer program" } },
  { q: "What is the difference between a forward deployed engineer and a solutions engineer?", a: "A solutions engineer mostly supports the sale with demos and proofs of concept. A forward deployed engineer builds, deploys and supports the real system in the customer's environment after the sale, and owns the result." },
  { q: "Is this an IIT or university certificate?", a: "No. You earn the Datamarcos Executive Certificate in Forward Deployed AI Engineering after completing the program and defending your capstone. We focus on the portfolio you can show: four deployed, client-style engagements." },
  { q: "Is the course available in Bangalore, Hyderabad, Pune or Delhi NCR?", a: "Yes. It's live online, so you can join from anywhere in India (and abroad), with live weekend sessions and a weekday evening lab." },
  { q: "Do you prepare me for FDE interviews?", a: "Yes. A weekly career track includes FDE-style mock interview loops (system design with ambiguity, live debugging and customer scenarios), plus resume, LinkedIn and portfolio reviews. We don't guarantee interviews or offers." },
  { q: "How is the FDE program different from the GenAI & Agentic AI Engineer program?", a: "The GenAI program builds LLM, RAG and agent engineering skills. The FDE program assumes engineering experience and adds the customer-facing half of the job: discovery, scoping, SOWs, security reviews, enterprise integration, deployment and handover, practised through four client-style engagements." }
];

/** Second role comparison (SEO brief 3a). Copy from the brief; generic role descriptions, no company names. */
export type AdjacentRoleRow = { label: string; se: string; aie: string; con: string; fde: string };

export const fdeAdjacentRoleRows: AdjacentRoleRow[] = [
  { label: "Main focus", se: "Technical demos and proofs of concept before the deal", aie: "Building AI features and systems for a product or platform", con: "Recommendations and plans", fde: "Making one customer's system work in production" },
  { label: "Writes production code", se: "Sometimes, mostly demos", aie: "Yes", con: "Rarely", fde: "Yes, in the customer's environment" },
  { label: "After the contract is signed", se: "Usually hands over", aie: "Not customer-specific", con: "Report or roadmap", fde: "Stays until it's adopted and handed over" },
  { label: "Judged on", se: "Deals won", aie: "Feature quality, model metrics", con: "Quality of advice", fde: "Working software and measured business value" }
];

/** "What employers ask for" mapping (SEO brief 3b). Week ranges match fdePhases. */
export const fdeJobSkillMap = [
  { skill: "Python, APIs, cloud networking, containers and CI/CD", weeks: "Weeks 1-4" },
  { skill: "RAG, evaluation, multimodal documents, cost control", weeks: "Weeks 5-9" },
  { skill: "Agents, MCP, enterprise and data-platform integration", weeks: "Weeks 10-14" },
  { skill: "AI security, governance, LLMOps and handover", weeks: "Weeks 15-19" },
  { skill: "Capstone engagement and FDE interview loops", weeks: "Weeks 20-22 + weekly career track" }
];
