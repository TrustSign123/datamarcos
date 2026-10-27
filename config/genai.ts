/**
 * Generative AI & Agentic AI Engineer page content.
 * Source of truth: /public/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf (2026 edition, 18 pages),
 * plus copy already on the live page. Rules: no fees in this file, no placement %, CTC or hike claims,
 * no invented numbers. Page numbers in comments refer to the brochure.
 */
import type { CurriculumPhase } from "@/components/program/fde/FdeCurriculum";
import type { ToolGroup } from "@/components/program/ToolWall";

export const GENAI_COURSE = "Generative AI & Agentic AI Engineer"; // must match LEAD_COURSES
export const GENAI_BROCHURE = "/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf";

/** p.2 "The opportunity": builder, integrator, owner. */
export const genaiOpportunity = [
  { step: "Builder", body: "Builds LLM apps, RAG pipelines and agents that run on real, messy data. Not slideware." },
  { step: "Integrator", body: "Connects models to databases, APIs, Jira, Slack and cloud so AI works inside real workflows." },
  { step: "Owner", body: "Evaluates, secures and operates AI in production and stays accountable until it creates value." }
];

/** p.2 "Roles you can target". */
export const genaiRoles = [
  { role: "GenAI / LLM Application Engineer", body: "Builds copilots, chatbots and generative features on top of foundation models." },
  { role: "RAG and Knowledge Engineer", body: "Designs retrieval, vector search and graph systems that ground answers in company data." },
  { role: "AI Agent Developer", body: "Builds tool-using and multi-agent workflows with LangGraph, MCP and human approval." },
  { role: "AI Solutions / Forward Deployed Engineer", body: "Embeds with customers, scopes problems and ships AI inside their environment." },
  { role: "LLMOps / AI Platform Engineer", body: "Runs gateways, tracing, evals, cost control and CI/CD for AI systems." },
  { role: "AI Security and Governance Engineer", body: "Red-teams agents, applies guardrails and maps systems to compliance needs." }
];

/** p.2 "What hiring managers screen for". */
export const genaiSignals = [
  { k: "Shipped, deployed work", v: "A live system with tests, security and monitoring beats a certificate." },
  { k: "Integration depth", v: "Databases, APIs, identity and cloud: the messy real world." },
  { k: "Evaluation discipline", v: "You measure quality, cost and latency and can prove it works." },
  { k: "Agent design judgement", v: "You know when to use RAG, tools, or a multi-agent workflow." },
  { k: "Security mindset", v: "You know where agents fail and how to contain the blast radius." },
  { k: "Ownership and communication", v: "You take a vague ask to an adopted solution and explain it clearly." }
];

/** p.3 "Six career journeys, one destination". */
export const genaiJourneys = [
  { from: "Fresh graduates and career starters", detail: "Python basics, strong projects", to: "Associate GenAI Engineer", why: "Turn coursework into deployed, portfolio-ready AI systems." },
  { from: "Backend and full-stack developers", detail: "2-10 years of experience", to: "LLM and agent engineer", why: "Add LLM, RAG, agent and deployment depth to strong software skills." },
  { from: "Data, analytics and ML engineers", detail: "Pipelines, warehouses, models", to: "Applied AI / platform AI engineer", why: "Turn data skills into agentic, governed enterprise solutions." },
  { from: "IT-services, QA and DevOps engineers", detail: "Delivery, automation, reliability", to: "AI deployment and reliability engineer", why: "Bring testing and ops rigour to LLM systems: evals, gates, observability." },
  { from: "Career switchers with coding basics", detail: "Analysts, consultants, support", to: "AI solutions engineer", why: "Back your domain knowledge with hands-on AI engineering credibility." },
  { from: "Tech leads, architects and managers", detail: "Lead teams and designs", to: "AI delivery lead", why: "Lead enterprise AI engagements with architecture, security and ROI." }
];

/** p.3 "You will thrive if" / "This is probably not for you if". */
export const genaiFitFor = [
  "You can code in Python (or have strong shipped projects)",
  "You like customer problems as much as technical ones",
  "You can commit about 8 to 12 hours a week",
  "You want to build, deploy and defend real systems"
];
export const genaiNotFor = [
  "You want a passive, watch-only video course",
  "You have never written code",
  "You expect a guaranteed job or salary outcome",
  "You prefer theory over shipping"
];
/** p.18 admissions. */
export const genaiAdmission = [
  { step: "Apply", body: "Short online application" },
  { step: "Diagnostic", body: "Technical & fit check: Python, APIs" },
  { step: "Interview", body: "Talk to an admissions mentor" },
  { step: "Offer", body: "Cohort seat + bridge pre-work" }
];

/** p.4 "Format and rhythm". */
export const genaiRhythm = [
  { k: "2×", v: "live architecture sessions every week" },
  { k: "Lab", v: "weekly delivery lab and code review" },
  { k: "Studio", v: "client-style projects with panel reviews" },
  { k: "1:1", v: "architecture reviews and career strategy" },
  { k: "Demo", v: "capstone defence at Demo Day" }
];

/** pp.7-12 week-by-week syllabus (topics, lab, ship and tools exactly as listed). */
export const genaiPhases: CurriculumPhase[] = [
  {
    id: "foundations", number: "01", title: "Foundations", weeks: "Weeks 1-3",
    summary: "Understand LLMs, build like an engineer: fluency in LLMs, prompting, structured outputs and deployable GenAI APIs.",
    checkpoint: "Phase 1 review: demo your LLM service and prompt library to a mentor panel.",
    after: "Call and compare LLMs, design reliable prompts and ship a tested GenAI API.",
    items: [
      { week: 1, title: "Generative AI and LLM fundamentals", topics: ["How transformers, tokens, embeddings and context work", "Model landscape: OpenAI, Anthropic, Gemini, open models", "Use cases, limits, hallucination and risk", "Python, Git and environment bridge track"], lab: "Call three model providers and compare output, cost and latency", ship: "Multi-provider comparison notebook", tools: "Python, OpenAI, Claude, Gemini, Jupyter" },
      { week: 2, title: "Prompt engineering and structured outputs", topics: ["Prompt patterns: role, few-shot, chain-of-thought", "Structured outputs with JSON schema and Pydantic", "Tool and function calling basics", "Eval-first mindset: golden sets, regression tests"], lab: "Build an extraction service with validated outputs", ship: "Prompt library with an evaluation harness", tools: "Pydantic, OpenAI and Claude APIs, pytest" },
      { week: 3, title: "API engineering for GenAI apps", topics: ["Async Python, FastAPI, streaming responses", "Auth, error handling, rate limits, retries", "Caching, batching and token budgets", "Docker packaging basics"], lab: "Build and test a secured LLM API", ship: "Tested FastAPI GenAI service with docs", tools: "FastAPI, Docker, Redis, Postman" }
    ]
  },
  {
    id: "rag", number: "02", title: "RAG Systems", weeks: "Weeks 4-7",
    summary: "Build AI that survives real data: retrieval, graphs, multimodal documents and evaluation, all measured.",
    checkpoint: "Project 1 · Knowledge Copilot: a secure copilot with hybrid RAG, text-to-SQL, role-based access and a stakeholder demo.",
    after: "Build, evaluate and improve RAG, graph and multimodal systems on messy data.",
    items: [
      { week: 4, title: "Embeddings, vector databases and core RAG", topics: ["Embeddings, chunking strategies, metadata design", "Vector stores: Qdrant, Pinecone, pgvector", "Ingesting PDFs, wikis and databases", "Grounded answers with citations"], lab: "RAG pipeline over a messy document set", ship: "Working RAG app with citations", tools: "LangChain, Qdrant, Pinecone, pgvector" },
      { week: 5, title: "Advanced RAG and evaluation", topics: ["Hybrid search, reranking, query rewriting", "Multi-hop, parent-document, agentic retrieval", "RAGAS and DeepEval: faithfulness, relevance, recall", "Failure analysis and error taxonomies"], lab: "Improve retrieval and run an evaluation study", ship: "RAG system with an evaluation report", tools: "RAGAS, DeepEval, LangChain, Elasticsearch" },
      { week: 6, title: "Knowledge graphs and GraphRAG", topics: ["Graph modelling with Neo4j and Cypher", "GraphRAG patterns: when graphs beat vectors", "Combining graph, vector and keyword retrieval"], lab: "Add graph retrieval to your RAG system", ship: "Hybrid graph-vector retrieval pipeline", tools: "Neo4j, Cypher, LangChain" },
      { week: 7, title: "Multimodal AI and document intelligence", topics: ["Vision language models and OCR-free parsing", "PDFs, tables, charts, scans and handwriting", "Secure text-to-SQL with read-only access", "Speech and voice pipelines"], lab: "Parse invoices and reports into structured data", ship: "Document-intelligence service", tools: "VLMs, ColPali, Whisper, PostgreSQL" }
    ]
  },
  {
    id: "agents", number: "03", title: "Agentic AI", weeks: "Weeks 8-12",
    summary: "Systems that plan, act and connect safely: agents that use tools, work in teams and connect to the systems enterprises actually run.",
    checkpoint: "Project 2 · Multi-Agent Ops Copilot: a supervisor-based copilot with MCP tools, Jira and ServiceNow integration, human approval and a cost and trace dashboard.",
    after: "Design governed multi-agent systems and integrate them with enterprise tools.",
    items: [
      { week: 8, title: "Agent design and LangGraph", topics: ["Patterns: ReAct, plan-and-execute, reflection, routers", "LangGraph: state, nodes, edges, memory, checkpoints", "Tool design: idempotency, permissions, failures"], lab: "Build a stateful, tool-using agent", ship: "Agent with evaluation traces", tools: "LangGraph, LangChain, Langfuse" },
      { week: 9, title: "Tool use and Model Context Protocol (MCP)", topics: ["Function calling at scale; tool registries", "Build MCP servers; scopes and governance", "Secure tool access: allow-lists, sandboxes, audit logs"], lab: "MCP server in front of a database and Jira", ship: "Governed tool layer", tools: "MCP SDK, FastAPI, Jira, PostgreSQL" },
      { week: 10, title: "Multi-agent orchestration", topics: ["Supervisor, router, parallel and hierarchical teams", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Agent-to-agent handoffs (A2A)"], lab: "Supervisor-based multi-agent workflow", ship: "Multi-agent system with trace dashboard", tools: "LangGraph, CrewAI, ADK" },
      { week: 11, title: "Memory, human-in-the-loop and agent evaluation", topics: ["Short- and long-term memory design", "Human approval gates and escalation design", "Agent evals: task success, tool accuracy, cost, loops"], lab: "Add approvals and an eval suite to your agents", ship: "Agent evaluation report", tools: "LangGraph, Langfuse, DeepEval" },
      { week: 12, title: "Enterprise integration and agent platforms", topics: ["Slack, Jira, ServiceNow, Salesforce, SQL integrations", "Queues, webhooks, retries, dead-letter handling", "Databricks Agent Bricks, Snowflake Cortex, Bedrock, Azure AI Foundry"], lab: "Build the same assistant on two platforms", ship: "Integration layer and platform comparison memo", tools: "Kafka, Databricks, Snowflake, Bedrock, Azure" }
    ]
  },
  {
    id: "production", number: "04", title: "Production & Security", weeks: "Weeks 13-16",
    summary: "Ship AI that enterprises will approve: secure, measure, govern and deploy AI systems that regulated enterprises will actually sign off.",
    checkpoint: "Project 3 · Production Hardening: take Project 2 to production with a security review, compliance pack, red-team report, UAT and handoff.",
    after: "Secure, govern, deploy and operate GenAI and agentic systems in production.",
    items: [
      { week: 13, title: "AI security and guardrails", topics: ["Prompt injection, jailbreaks, exfiltration; OWASP LLM Top 10", "Excessive agency and blast-radius control", "PII masking, NeMo Guardrails, cloud guardrails", "OAuth 2.0, SSO and role-based access control"], lab: "Red-team your own agent, then patch it", ship: "Threat model and hardening report", tools: "Presidio, NeMo Guardrails, Okta, Auth0" },
      { week: 14, title: "LLMOps and observability", topics: ["LLM gateways, fallbacks, rate limits, quotas", "Tracing with LangSmith, Langfuse, OpenTelemetry", "Evals in CI, canary releases and rollback"], lab: "Put your agent behind a gateway with tracing and eval gates", ship: "Production-grade operations stack", tools: "OpenTelemetry, Grafana, Langfuse, GitHub Actions" },
      { week: 15, title: "Fine-tuning, small models and cost engineering", topics: ["Fine-tune vs prompt vs RAG; LoRA and PEFT overview", "Small and open models; private VPC deployment", "Caching, batching and model routing"], lab: "Route requests across models by cost and quality", ship: "Cost-quality report and routing policy", tools: "Hugging Face, Ollama, vLLM concepts" },
      { week: 16, title: "Cloud deployment, scale and governance", topics: ["Docker, CI/CD, Terraform on AWS, Azure or GCP", "Scale, SLOs, runbooks and incident response", "DPDP, GDPR, HIPAA and EU AI Act essentials"], lab: "Deploy to cloud, load test and run an incident drill", ship: "Live deployment, runbook and governance pack", tools: "Docker, Terraform, GitHub Actions, Kubernetes, Grafana" }
    ]
  },
  {
    id: "capstone", number: "05", title: "Capstone & Career Launch", weeks: "Weeks 17-18",
    summary: "Run a full project end to end, defend it, and turn it into an interview-ready portfolio.",
    checkpoint: "Demo Day: defend your capstone to an industry-style panel.",
    items: [
      { week: 17, title: "Capstone: build and harden", topics: ["Choose a track: BFSI, healthcare, enterprise ops or your own", "Discovery, scoping, architecture decision records", "Build with RAG, agents, integrations; add evals, security, CI/CD"], lab: "Weekly reviews with your mentor panel", ship: "Deployed, documented, secured capstone", tools: "Your stack of choice from the program" },
      { week: 18, title: "Demo Day, interviews and job launch", topics: ["Demo Day: defend your capstone to an industry-style panel", "GenAI and agentic AI interview loops", "Resume, LinkedIn and portfolio teardown"], lab: "Two mock interview loops with feedback", ship: "Portfolio, resume, LinkedIn and job-search plan", tools: "GitHub, portfolio site, LinkedIn" }
    ]
  }
];

/** p.13 project studio. */
export const genaiProjects = [
  { code: "P1", name: "Knowledge Copilot", client: "BFSI client · secure knowledge copilot", weeks: "Weeks 4-7", brief: "Hybrid RAG, secure text-to-SQL, role-based access, PII masking and guardrails for a BFSI client.", stack: ["Python", "FastAPI", "PostgreSQL", "Docker"], deliverables: ["Discovery notes", "Architecture", "Stakeholder demo"] },
  { code: "P2", name: "Multi-Agent Ops Copilot", client: "Enterprise operations · multi-agent copilot", weeks: "Weeks 8-12", brief: "LangGraph supervisor, MCP tools, Jira and ServiceNow integration and human approval, plus a cost and trace dashboard.", stack: ["LangGraph", "MCP", "Jira", "Slack", "Kafka"], deliverables: ["MCP tool layer", "Jira and ServiceNow integration", "Cost and trace dashboard"] },
  { code: "P3", name: "Production Hardening", client: "Regulated deployment · production hardening", weeks: "Weeks 13-16", brief: "Take Project 2 to production for a regulated client: security review, compliance and UAT, then hand it over.", stack: ["Okta", "OpenTelemetry", "Grafana", "Terraform"], deliverables: ["Security review", "Compliance pack", "Red-team report", "UAT, runbooks and handoff"] },
  { code: "CAP", name: "Your capstone", client: "BFSI · healthcare · enterprise operations", weeks: "Weeks 17-18", brief: "Your domain, your client: the full lifecycle from discovery to handoff, defended at Demo Day.", stack: ["Databricks", "Snowflake", "CI/CD", "Kubernetes"], deliverables: ["Deployed, documented, secured capstone", "Demo Day defence"] }
];

/** p.13 "The AI toolkit". */
export const genaiToolkit = [
  { name: "Prompt and eval kit", items: "Prompt library, golden sets, regression tests, evaluation reports" },
  { name: "Architecture pack", items: "Diagrams, ADRs, integration design and data classification" },
  { name: "RAG and agent templates", items: "Reusable retrieval pipelines, LangGraph agents and MCP servers" },
  { name: "Security and compliance", items: "Threat model, red-team report, governance pack, risk register" },
  { name: "Delivery pack", items: "UAT runbook, handoff guide, training deck and support model" },
  { name: "Operations pack", items: "Runbooks, SLOs, dashboards and incident postmortem" }
];

/** p.14 "The stack production AI teams use". */
export const genaiToolGroups: ToolGroup[] = [
  { category: "Models & AI platforms", tools: ["OpenAI", "Claude", "Gemini", "Hugging Face", "Ollama", "Databricks", "Snowflake", "AWS Bedrock", "Azure AI Foundry", "Google Cloud"] },
  { category: "Agents & orchestration", tools: ["LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "Google ADK", "MCP", "A2A", "Pydantic", "Python"] },
  { category: "Retrieval, data & events", tools: ["Qdrant", "Pinecone", "pgvector", "Neo4j", "PostgreSQL", "Elasticsearch", "Redis", "Kafka", "SQL Server", "Oracle"] },
  { category: "Build & deploy", tools: ["FastAPI", "GraphQL", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "pytest", "Linux", "GitHub"] },
  { category: "Security & identity", tools: ["OWASP LLM Top 10", "Okta", "Auth0", "Presidio", "NeMo Guardrails"] },
  { category: "Evals & observability", tools: ["RAGAS", "DeepEval", "Langfuse", "LangSmith", "OpenTelemetry", "Grafana", "MLflow"] },
  { category: "Enterprise integrations", tools: ["Slack", "Jira", "ServiceNow", "Salesforce", "SAP", "SOAP and XML", "Webhooks"] }
];

/** p.6 "Eight questions to ask any GenAI program" (answers as printed). */
export const genaiQuestions = [
  { q: "Do you build beyond notebooks into deployed systems?", a: "Yes. Three projects and a capstone, deployed with CI/CD and monitoring." },
  { q: "Do you teach agents properly, not just chatbots?", a: "Yes. LangGraph, MCP, multi-agent orchestration and human approval in Weeks 8-12." },
  { q: "Is security hands-on?", a: "Yes. Red-team your own agent, OWASP LLM Top 10, guardrails, DPDP, GDPR, HIPAA and EU AI Act essentials." },
  { q: "Do you teach evals and observability?", a: "Yes. Eval-first from Week 2; gateways, tracing and CI gates in Week 14." },
  { q: "Do you cover enterprise data platforms?", a: "Yes. Databricks, Snowflake and cloud agent platforms in Week 12." },
  { q: "Who teaches?", a: "A practising architect who has delivered GenAI and FDE programs for enterprise teams." },
  { q: "Is career support specific to AI hiring?", a: "Yes. Resume, LinkedIn and Naukri, mock loops and a referral playbook. No placement guarantees." },
  { q: "Do I keep reusable material?", a: "Yes. The full toolkit of templates, runbooks and your deployed project portfolio." }
];

/** p.15 career launch, by phase. */
export const genaiCareer = [
  { weeks: "Weeks 1-3", milestone: "Role targeting and skills-gap audit" },
  { weeks: "Weeks 4-6", milestone: "GitHub portfolio setup" },
  { weeks: "Weeks 7-9", milestone: "Resume rewrite for GenAI and agentic AI roles" },
  { weeks: "Weeks 10-12", milestone: "LinkedIn and Naukri profile building" },
  { weeks: "Weeks 13-14", milestone: "Interview bank: LLMs, RAG, agents" },
  { weeks: "Weeks 15-16", milestone: "AI system-design interviews" },
  { weeks: "Week 17", milestone: "Security, ethics and behavioural rounds" },
  { weeks: "Week 18", milestone: "1:1 mock interviews and job-search sprint" }
];

export type GenaiFaq = { q: string; a: string; link?: { href: string; label: string } };

/** FAQ: previous page FAQ (fee answer made fee-free) + brochure p.18. Plain text also feeds FAQPage JSON-LD. */
export const genaiFaqs: GenaiFaq[] = [
  { q: "Do I need prior AI experience?", a: "No. You need Python basics and working engineering fundamentals, or strong shipped projects. Bridge pre-work in Python, Linux, Git and SQL is provided before Day 1." },
  { q: "How much time should I plan for each week?", a: "Plan for about 8 to 12 hours per week: two live sessions, a weekday lab and project work." },
  { q: "How is the program delivered?", a: "It is an 18-week, live, mentor-led program with two live sessions each week, weekly delivery labs, a project studio, scheduled 1:1 mentorship and a final Demo Day." },
  { q: "What projects will I build?", a: "Three client-style projects: a secure Knowledge Copilot, a Multi-Agent Ops Copilot and a Production Hardening project, followed by a domain-specific capstone defended at Demo Day." },
  { q: "Is security covered in depth?", a: "Yes. A full week on AI security and guardrails, governance and compliance essentials (DPDP, GDPR, HIPAA, EU AI Act), plus red-teaming in the projects." },
  { q: "Do you cover Databricks and Snowflake?", a: "Yes. Week 12 covers Databricks, Snowflake and cloud agent platforms such as AWS Bedrock and Azure AI Foundry." },
  { q: "Will I get a job after the program?", a: "No placement, salary or hike is guaranteed. The program includes deployed projects, portfolio support, interview preparation, mock interview loops and a referral and outreach playbook." },
  { q: "Will I get a certificate?", a: "Yes. The Datamarcos Executive Certificate in Generative AI and Agentic AI Engineering is awarded on completing the program and defending your capstone." },
  { q: "What is the fee and next cohort date?", a: "EMI options are available. Our counsellor shares the fee, instalment options, scholarships and the next cohort date after a short fit conversation." },
  { q: "Can my company sponsor me or join as a team?", a: "Yes. Contact admissions to discuss corporate sponsorship and team cohorts." },
  { q: "How is this different from the Forward Deployed AI Engineer program?", a: "This program builds LLM, RAG and agent engineering skills over 18 weeks. The Forward Deployed AI Engineer program assumes engineering experience and adds the customer-facing half of the job: discovery, scoping, SOWs, security reviews, enterprise integration, deployment and handover.", link: { href: "/programs/forward-deployed-ai-engineer", label: "Forward Deployed AI Engineer program" } }
];
