/**
 * Applied Agentic AI Certification page content.
 * Source of truth: /public/brochures/DataMarcos_Applied_Agentic_AI_Brochure.pdf (Sep 2026, 13 pages),
 * plus copy already on the live page. Rules: no fees in this file, no placement %, CTC or hike claims,
 * no invented numbers. Deliberately NOT used: the brochure's "GPT-6 Astra / 99.9% ARC-AGI-3" claim
 * (unsourced) and weekly-hours or live-hours figures (the brochure gives none).
 */
import type { CurriculumPhase } from "@/components/program/fde/FdeCurriculum";
import type { ToolGroup } from "@/components/program/ToolWall";

export const APPLIED_COURSE = "Applied Agentic AI"; // must match LEAD_COURSES
export const APPLIED_TITLE = "Applied Agentic AI Certification";
export const APPLIED_BROCHURE = "/brochures/DataMarcos_Applied_Agentic_AI_Brochure.pdf";
export const APPLIED_VIDEO_ID = "IFPVcpxTWGc"; // "Applied Agentic AI | Build. Automate. Deploy. | Datamarcos" (official channel)

/** Brochure p.12 "Why this, why now" bullets (qualitative only). */
export const appliedWhy = [
  { step: "Answer → act", body: "AI is moving from answering questions to reasoning, using tools, and taking action." },
  { step: "Build, not prompt", body: "Companies are hiring engineers who can build agentic systems, not just prompt a chatbot." },
  { step: "Start now", body: "The shift toward agentic AI is already here. You don't need to wait for AGI to prepare." }
];

/** p.12 "Career outcomes": starting point → what changes. */
export const appliedShifts = [
  { from: "Automation QA / Test Engineer", to: "Builds and evaluates AI agents, not just test scripts" },
  { from: "Software / Backend Developer", to: "Designs tool-using, agentic systems on top of existing APIs" },
  { from: "Technical Product Manager", to: "Speaks fluently on agent architecture and can scope AI-native products" },
  { from: "Data / AI Professional", to: "Moves from using AI tools to engineering production agentic systems" }
];
export const appliedRoles = ["AI Agent Engineer", "Agentic AI Developer", "GenAI Solutions Engineer", "AI Automation Engineer", "AI Product Engineer"];

/** p.5 "Who is this course for" + "Prerequisites & eligibility". */
export const appliedFor = [
  "Automation QA / test automation professionals",
  "Software engineers & developers: backend, frontend, full stack",
  "Technical product managers",
  "Professionals exploring AI-powered development workflows",
  "Early-career professionals building practical AI skills"
];
export const appliedPrereqs = [
  "You don't need to be an AI expert or come from a technical background",
  "Open to learning basic Python programming",
  "Comfortable exploring new tools and hands-on exercises",
  "No prior AI experience required: beginner-friendly refreshers provided"
];
export const appliedNotFor = [
  "You want a watch-only, self-paced video course",
  "You expect a guaranteed job or salary"
];

/** pp.5-6 curriculum, one module per week (as on the previous page). Projects are the brochure's own. */
export const appliedPhases: CurriculumPhase[] = [
  {
    id: "month-1", number: "01", title: "Month 1 · Foundations to RAG & agents", weeks: "Weeks 1-4",
    summary: "From LLM foundations to reliable, structured AI systems: prompting, production RAG and your first tool-using agents.",
    items: [
      { week: 1, title: "LLM foundations & system thinking", topics: ["Transformer intuition, attention, tokenization and embeddings", "Context window limits and hallucination causes", "Prompt vs retrieval vs fine-tuning", "Hands-on with the OpenAI, Gemini and Claude SDKs"], lab: "Multi-SDK LLM Playground: query OpenAI, Gemini and Claude side by side", tools: "OpenAI, Gemini and Claude SDKs" },
      { week: 2, title: "Prompt engineering & structured output", topics: ["Zero-shot, few-shot, chain-of-thought and tree-of-thought prompting", "Role and persona design", "Structured JSON output and function calling", "Defending against prompt injection"], lab: "Call Center Transcript Sentiment & Intent Classifier with an evaluation harness" },
      { week: 3, title: "Production RAG systems", topics: ["Why RAG is essential for enterprise AI; end-to-end RAG architecture", "Embeddings, keyword vs semantic search, vector databases", "Chunking strategies and retrieve-then-rerank pipelines", "Evaluating with RAGAS"], lab: "Company Knowledge-Base Chatbot: ingest PDFs and docs with hybrid search + reranking", tools: "RAGAS" },
      { week: 4, title: "Building AI agents", topics: ["Core components of an agent: roles, memory, tools, autonomy, goals", "The ReAct framework and tool orchestration", "Short- and long-term memory systems", "Connecting agents to APIs, databases and file systems safely"], lab: "Researcher-and-Summarizer Agent + a Customer Care Agent using live tool calling" }
    ]
  },
  {
    id: "month-2", number: "02", title: "Month 2 · Multi-agent to capstone", weeks: "Weeks 5-8",
    summary: "From single agents to production multi-agent systems: orchestration, MCP, voice and automation, then evaluation and your capstone.",
    after: "Ship a fully integrated multi-agent application combining RAG, agents, multi-agent orchestration and MCP.",
    items: [
      { week: 5, title: "Multi-agent systems & orchestration", topics: ["Sequential, parallel and hierarchical multi-agent architectures", "Role-based specialist vs generalist agents", "Coordinator-dispatcher patterns", "Passing context and outputs across agent boundaries"], lab: "Financial News Research Coordinator: dispatches specialist sub-agents and produces a structured report", tools: "CrewAI, LangGraph" },
      { week: 6, title: "Model Context Protocol (MCP) & enterprise integration", topics: ["What MCP is and why modern agents use it", "Client-server-transport architecture", "Registering tools and services through MCP servers", "Migrating from legacy tool-calling"], lab: "MCP server connecting an agent to a live database and internal API", tools: "MCP" },
      { week: 7, title: "Voice, multimodal agents & automation", topics: ["Multimodal capabilities across vision, audio and documents", "Voice agent architecture: speech-to-text → LLM → action → text-to-speech", "Wiring agentic workflows into no-code automation platforms like n8n"], lab: "Voice-enabled multimodal assistant with an automated workflow trigger", tools: "n8n" },
      { week: 8, title: "Evaluation, reliability & capstone", topics: ["Evaluating agents end to end: task completion, tool-use accuracy, response quality", "Debugging agentic systems", "Reliability patterns: idempotency, retries, fallbacks", "Shipping a fully integrated capstone"], lab: "Capstone: fully integrated multi-agent application combining RAG + agents + multi-agent + MCP" }
    ]
  }
];

/** p.7 "What you'll build: live projects" (module projects listed above). */
export const appliedProjects = [
  { code: "W1", name: "Multi-SDK LLM Playground", client: "Week 1 · LLM foundations", brief: "Query OpenAI, Gemini and Claude side by side and compare how they behave.", stack: ["OpenAI SDK", "Gemini SDK", "Claude SDK"] },
  { code: "W2", name: "Sentiment & Intent Classifier", client: "Week 2 · prompting & structured output", brief: "Classify call-center transcripts by sentiment and intent, with an evaluation harness.", stack: ["Structured JSON", "Function calling", "Evals"] },
  { code: "W3", name: "Production RAG Knowledge-Base Chatbot", client: "Week 3 · retrieval", brief: "Ingest PDFs and docs into a company knowledge base with hybrid search and reranking.", stack: ["Vector DB", "Hybrid search", "Reranking", "RAGAS"] },
  { code: "W4", name: "Researcher & Customer Care Agents", client: "Week 4 · agents", brief: "A researcher-and-summarizer agent and a customer care agent that use live tool calling.", stack: ["ReAct", "Memory", "Tool calling"] },
  { code: "W5", name: "Multi-Agent Research Coordinator", client: "Week 5 · orchestration", brief: "A coordinator dispatches specialist sub-agents on financial news and produces a structured report.", stack: ["CrewAI", "LangGraph"] },
  { code: "CAP", name: "Integrated Agentic AI Application", client: "Week 8 · capstone", brief: "A fully integrated multi-agent application combining RAG, agents, multi-agent orchestration and MCP.", stack: ["RAG", "Agents", "Multi-agent", "MCP"] }
];

/** p.7 "Technologies & frameworks you will master". */
export const appliedToolGroups: ToolGroup[] = [
  { category: "Models & SDKs", tools: ["Python", "OpenAI SDK", "Gemini SDK", "Claude SDK", "tiktoken"] },
  { category: "Agents & orchestration", tools: ["LangChain", "LangGraph", "CrewAI", "Google ADK", "MCP SDK", "n8n"] },
  { category: "Retrieval & vector stores", tools: ["FAISS", "ChromaDB", "Pinecone", "Weaviate"] },
  { category: "Evals, safety & serving", tools: ["RAGAS", "LangSmith", "Langfuse", "Guardrails AI", "FastAPI"] }
];

/** Datamarcos course chooser: every cell comes from the three program brochures. */
export const appliedChooser = [
  { label: "Length", applied: "8 weeks (2 months)", genai: "18 weeks · 130+ hours", fde: "22 weeks · 170+ live hours" },
  { label: "Starting point", applied: "No prior AI experience; open to learning basic Python", genai: "Python basics and engineering fundamentals, or strong projects", fde: "Comfortable Python, about 2+ years of engineering experience" },
  { label: "Focus", applied: "Agent architecture, tool calling, RAG, multi-agent, MCP and automation", genai: "LLM apps, RAG, agents, security, LLMOps and cloud deployment", fde: "Shipping secure AI inside a customer's environment, plus discovery, SOWs and handover" },
  { label: "Projects", applied: "A project every module + an integrated capstone", genai: "3 client-style projects + capstone", fde: "4 client-style engagements incl. capstone" },
  { label: "Certificate", applied: "Datamarcos Applied Agentic AI Certification", genai: "Datamarcos Executive Certificate", fde: "Datamarcos Executive Certificate" }
];

export type AppliedFaq = { q: string; a: string; link?: { href: string; label: string } };

/** FAQ built only from brochure facts. Plain text also feeds FAQPage JSON-LD. */
export const appliedFaqs: AppliedFaq[] = [
  { q: "Do I need prior AI experience?", a: "No. No prior AI experience is required, and beginner-friendly refreshers are built into every module. You should be open to learning basic Python and comfortable with hands-on exercises." },
  { q: "How long is the program?", a: "Eight weeks (2 months): Month 1 takes you from LLM foundations to RAG and your first agents, and Month 2 covers multi-agent systems, MCP, voice and automation, evaluation and your capstone." },
  { q: "Who is it for?", a: "Automation QA and test professionals, software engineers and developers, technical product managers, professionals exploring AI-powered development workflows, and early-career professionals building practical AI skills." },
  { q: "Are the sessions live?", a: "Yes. Small-batch, interactive live sessions are led directly by Deepesh Mishra, with real-time Q&A and doubt resolution, plus continued mentorship as you apply the skills at work." },
  { q: "What will I build?", a: "A project in every module: a multi-SDK LLM playground, a sentiment and intent classifier, a production RAG knowledge-base chatbot, researcher and customer care agents, a multi-agent research coordinator, an MCP server and a voice-enabled assistant, ending in an integrated agentic AI capstone." },
  { q: "Which tools are covered?", a: "Python, the OpenAI, Gemini and Claude SDKs, LangChain, LangGraph, CrewAI, Google ADK, n8n, FAISS, ChromaDB, Pinecone, Weaviate, RAGAS, LangSmith, Langfuse, Guardrails AI, the MCP SDK and FastAPI." },
  { q: "Will I get a certificate?", a: "Yes. Every learner who completes the program receives the Datamarcos Applied Agentic AI Certification, validating hands-on proficiency across LLMs, RAG, agents, multi-agent orchestration and MCP." },
  { q: "Will I get a job after this?", a: "We do not guarantee placements, salaries or hikes. You leave with portfolio projects, an integrated capstone and career support." },
  { q: "What is the fee and next batch date?", a: "EMI options are available. Our counsellor shares the fee, instalment options and the next batch date after a short call." },
  { q: "Which Datamarcos course should I pick?", a: "Start with Applied Agentic AI if you want a focused 8-week path into agents. Choose the 18-week Generative AI & Agentic AI Engineer program for deeper production, security and LLMOps work.", link: { href: "/programs/genai-agentic-ai-engineer", label: "Generative AI & Agentic AI Engineer program" } }
];
