export type CurriculumModule = {
  module: string;
  title: string;
  description: string;
  topics: string[];
  handsOn: string;
  project?: string;
  duration: string;
};

export type ProjectDetail = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
  architectureImage?: string;
};

export type ProgramDetail = {
  badge: string;
  statusLine: Record<string, string>;
  positioning: string;
  supportingLine: string;
  body: string;
  trustLine: string[];
  brochureUrl?: string;
  stats: { value: string; label: string }[];
  audienceTags: string[];
  problemCards: { label: string; title: string; copy: string }[];
  before: string[];
  after: string[];
  stackLayers: string[];
  roadmap: string[];
  architectureNodes: string[];
  curriculumModules: CurriculumModule[];
  projectPortfolio: ProjectDetail[];
  technologyStack: { group: string; items: string[] }[];
  prerequisites: { required: string[]; recommended: string[]; taught: string[] };
  learningExperience: { title: string; copy: string }[];
  weeklySchedule: { day: string; activity: string; time: string }[];
  cohortInfo: { label: string; value?: string }[];
  outcomes: string[];
  principles: string[];
  careerDirections: string[];
  corporateCustomization: string[];
  deliveryOptions: string[];
  faq: { question: string; answer: string }[];
  showPricing: boolean;
  capstoneVideoUrl?: string;
  instructor?: {
    photo?: string;
    name?: string;
    role?: string;
    bio?: string;
    experience?: string[];
    linkedin?: string;
    expertise?: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
};

const modules: CurriculumModule[] = [
  {
    module: "01",
    title: "Modern Data Engineering",
    description: "Build the data engineering base needed before AI systems can be trusted.",
    topics: ["Advanced SQL", "Python for Data Engineering", "Data Modeling", "ETL vs ELT", "Batch Processing", "Streaming", "Data Lakes", "Data Warehouses", "Lakehouse Architecture", "Apache Spark", "PySpark", "Kafka", "Airflow", "dbt", "Data Quality", "Data Contracts"],
    handsOn: "Build a production-style data pipeline.",
    duration: "Configurable"
  },
  {
    module: "02",
    title: "AI-Ready Data Engineering",
    description: "Turn enterprise data into reliable inputs for retrieval, search and AI applications.",
    topics: ["Unstructured Data", "Document Ingestion", "Metadata", "Data Profiling", "Data Lineage", "Document Processing", "Chunking", "Embeddings", "Vectorization", "Semantic Search", "Hybrid Search", "Metadata Filtering"],
    handsOn: "Build an AI-ready enterprise knowledge pipeline.",
    duration: "Configurable"
  },
  {
    module: "03",
    title: "Advanced RAG",
    description: "Move beyond naive retrieval into robust production-oriented RAG patterns.",
    topics: ["Naive RAG", "Advanced RAG", "Dense Retrieval", "Sparse Retrieval", "BM25", "Hybrid Retrieval", "Reranking", "Query Rewriting", "Multi-Query Retrieval", "Parent-Child Retrieval", "Context Compression", "Citation Generation", "Graph RAG", "Agentic RAG"],
    handsOn: "Build a production-oriented enterprise RAG system.",
    duration: "Configurable"
  },
  {
    module: "04",
    title: "LLM Engineering",
    description: "Design model interactions, structured outputs and provider abstractions with engineering discipline.",
    topics: ["LLM APIs", "Prompt Architecture", "System Instructions", "Structured Outputs", "JSON Schema", "Function Calling", "Tool Calling", "Model Selection", "Context Windows", "Token Economics", "Caching", "Model Routing", "Fallback Models", "Provider Abstraction"],
    handsOn: "Build a structured AI analyst.",
    duration: "Configurable"
  },
  {
    module: "05",
    title: "Agent Engineering",
    description: "Understand when to use agents and how to bound autonomy safely.",
    topics: ["Agent vs Workflow", "ReAct", "Planning", "Tool Use", "State", "Memory", "Sessions", "Loops", "Retries", "Failure Handling", "Human-in-the-loop", "Bounded Autonomy"],
    handsOn: "Build a tool-using research agent.",
    duration: "Configurable"
  },
  {
    module: "06",
    title: "Agent Frameworks",
    description: "Use frameworks as engineering tools while keeping architecture principles transferable.",
    topics: ["LangGraph", "OpenAI Agents SDK", "CrewAI", "State", "Nodes", "Edges", "Conditional Routing", "Handoffs", "Agent-as-tool Patterns", "Memory", "Persistence", "Guardrails", "Tracing"],
    handsOn: "Implement an agent workflow with explicit state and routing.",
    duration: "Configurable"
  },
  {
    module: "07",
    title: "Model Context Protocol",
    description: "Connect agents to tools, resources and systems through MCP concepts.",
    topics: ["MCP Architecture", "MCP Clients", "MCP Servers", "Tools", "Resources", "Prompts", "Tool Discovery", "Authentication Concepts", "MCP + Databases", "MCP + APIs", "MCP Security", "Failure Handling"],
    handsOn: "Build a custom MCP server and connect an agent to it.",
    duration: "Configurable"
  },
  {
    module: "08",
    title: "Multi-Agent Systems",
    description: "Design supervisor, specialist and handoff patterns for complex workflows.",
    topics: ["Supervisor Architecture", "Routing", "Handoffs", "Agents as Tools", "Sequential Workflows", "Parallel Workflows", "Hierarchical Systems", "Specialist Agents", "Shared State", "Failure Recovery", "Human Approval"],
    handsOn: "Build a multi-agent business analyst with SQL, research, forecast, document and report agents.",
    duration: "Configurable"
  },
  {
    module: "09",
    title: "AI + Data Engineering",
    description: "Use AI to improve data systems, observability, documentation and quality workflows.",
    topics: ["Text-to-SQL", "Natural Language Analytics", "AI Data Quality", "AI ETL", "Data Pipeline Agents", "Data Documentation Agents", "Data Observability Agents", "Root Cause Analysis Agents", "Data Catalog Agents", "Schema Understanding", "Data Governance Assistants"],
    handsOn: "Build an AI data quality agent.",
    project: "Pipeline failure analysis with suggested fixes and human approval.",
    duration: "Configurable"
  },
  {
    module: "10",
    title: "AI Evaluation",
    description: "Evaluate RAG, agents and LLM workflows before scaling them.",
    topics: ["Golden Datasets", "LLM-as-Judge", "RAG Evaluation", "Agent Evaluation", "Regression Testing", "Faithfulness", "Answer Relevancy", "Context Precision", "Context Recall", "Tool-call Accuracy", "Latency", "Cost", "Failure Analysis"],
    handsOn: "Create evaluation pipelines for RAG and agent behavior.",
    duration: "Configurable"
  },
  {
    module: "11",
    title: "AI Security & Governance",
    description: "Add controls before agents touch tools, data and high-impact workflows.",
    topics: ["Prompt Injection", "Indirect Prompt Injection", "Data Leakage", "PII", "Secrets", "Tool Abuse", "Excessive Agency", "Authentication", "Authorization", "RBAC", "Guardrails", "Audit Logging", "Data Governance", "Model Risk", "Privacy"],
    handsOn: "Secure the multi-agent application.",
    duration: "Configurable"
  },
  {
    module: "12",
    title: "Production AI / LLMOps",
    description: "Package, deploy, monitor and operate AI systems as production-style services.",
    topics: ["FastAPI", "Docker", "PostgreSQL", "Redis", "Vector Database", "Async APIs", "Background Jobs", "Rate Limiting", "Caching", "Logging", "Tracing", "Monitoring", "Token Monitoring", "CI/CD", "Secrets", "Model Routing", "Scalability"],
    handsOn: "Deploy the AI platform as a production-style service.",
    duration: "Configurable"
  },
  {
    module: "13",
    title: "Cloud & Enterprise Architecture",
    description: "Reason about cloud deployment, identity, networking, resilience and cost.",
    topics: ["Cloud Architecture", "Container Deployment", "Storage", "Networking Concepts", "IAM", "Secrets", "Observability", "Scaling", "Cost Optimization", "High Availability", "AWS", "Azure", "GCP", "Databricks", "Snowflake"],
    handsOn: "Map a production deployment architecture for the capstone.",
    duration: "Configurable"
  },
  {
    module: "14",
    title: "Capstone",
    description: "Deliver an enterprise agentic data intelligence platform with code, docs, evaluation and deployment artifacts.",
    topics: ["AI Supervisor", "SQL Agent", "RAG Agent", "Forecast Agent", "Data Warehouse", "Vector DB", "MCP", "Evaluation", "Human Approval", "Production API"],
    handsOn: "Build the enterprise agentic data intelligence platform.",
    project: "Source code, README, architecture diagram, API documentation, evaluation report, security checklist, deployment documentation, demo video and repository.",
    duration: "Configurable"
  }
];

export const programDetails: Record<string, ProgramDetail> = {
  "advanced-ai-data-engineering-agentic-ai": {
    badge: "FLAGSHIP ADVANCED PROGRAM",
    statusLine: {
      LIVE: "LIVE COHORT - ENROLLMENT OPEN",
      UPCOMING: "NEXT COHORT - APPLICATIONS OPEN",
      COMING_SOON: "COMING SOON - JOIN THE WAITLIST",
      CORPORATE_CUSTOM: "CORPORATE CUSTOM PROGRAM"
    },
    positioning: "Build the Data Foundation. Engineer the Intelligence. Deploy the Agents.",
    supportingLine: "Advanced Data Engineering, RAG, Agentic AI, MCP and Production AI taught as one complete engineering discipline.",
    body: "Go beyond notebooks and chatbots. Learn to build AI-ready data platforms, production RAG systems, tool-using agents, multi-agent workflows and deployable AI applications.",
    trustLine: ["Live Cohort", "Hands-On Projects", "Production Architecture", "Mentor Support"],
    stats: [
      { value: "12-16 Weeks", label: "Configurable duration" },
      { value: "Live Instructor-Led", label: "Premium cohort format" },
      { value: "5+ Production Projects", label: "Configurable project count" },
      { value: "Advanced Level", label: "For working technology professionals" }
    ],
    audienceTags: ["Data Engineering", "Software Engineering", "AI/ML", "Cloud", "Analytics", "Backend Engineering", "Platform Engineering", "Technology Consulting"],
    problemCards: [
      { label: "01", title: "Data Problem", copy: "Enterprise data is fragmented across databases, documents, APIs, data lakes and operational systems." },
      { label: "02", title: "Engineering Problem", copy: "A working AI demo is very different from a reliable production system." },
      { label: "03", title: "Agent Problem", copy: "Agents need tools, state, permissions, guardrails, evaluation and observability before organizations can trust them." }
    ],
    before: ["SQL", "Python", "ETL", "APIs", "Spark", "Cloud", "Basic ML", "Analytics"],
    after: ["AI-ready data platforms", "Advanced RAG", "LLM engineering", "Tool calling", "Agent workflows", "Multi-agent systems", "MCP", "AI evaluation", "LLMOps", "AI security", "Production deployment"],
    stackLayers: ["Data Engineering", "AI-Ready Data", "Retrieval & RAG", "LLM Engineering", "Agents & Tools", "MCP", "Multi-Agent Systems", "Evaluation", "Security & Governance", "Production / LLMOps"],
    roadmap: ["Data", "AI-ready Data", "RAG", "LLM", "Tools", "MCP", "Agents", "Multi-Agent", "Evaluation", "Security", "LLMOps", "Production"],
    architectureNodes: ["User", "AI Supervisor", "SQL Agent", "RAG Agent", "Analytics Agent", "Databases", "Vector DB", "ML Models", "Tools", "MCP", "External Systems / APIs", "Evaluation", "Human Approval", "Production"],
    curriculumModules: modules,
    projectPortfolio: [
      { title: "Production Data Pipeline", description: "Build a production-style data pipeline for structured analytics and downstream AI use.", technologies: ["Python", "SQL", "Spark", "Airflow", "dbt"] },
      { title: "AI-Ready Enterprise Knowledge Pipeline", description: "Ingest documents, chunk content, create embeddings and support hybrid retrieval.", technologies: ["Documents", "Chunking", "Embeddings", "Vector DB", "Hybrid Search"] },
      { title: "Advanced RAG Assistant", description: "Implement retrieval, reranking, query rewriting and evaluation.", technologies: ["RAG", "Reranking", "Query Rewriting", "Evaluation"] },
      { title: "Natural Language to SQL Agent", description: "Build an agent that reasons over data access with structured outputs and tool calling.", technologies: ["LLM", "Structured Output", "SQL", "Tool Calling", "Database"] },
      { title: "Multi-Agent Business Analyst", description: "Coordinate specialist agents through a supervisor and MCP-connected tools.", technologies: ["Supervisor", "SQL Agent", "Research Agent", "Forecast Agent", "MCP"] },
      { title: "AI Data Quality Agent", description: "Detect failures, analyze root causes and route suggested fixes through human approval.", technologies: ["Quality Checks", "Root Cause Analysis", "AI Recommendations", "Human Approval"] },
      { title: "Enterprise Agentic Data Intelligence Platform", description: "Full capstone with data layer, RAG, agents, MCP, evaluation, security and deployment.", technologies: ["Capstone", "Architecture", "Evaluation", "Security", "Production API"] }
    ],
    technologyStack: [
      { group: "Primary", items: ["Python", "SQL", "PySpark", "Apache Spark", "Kafka", "Airflow", "dbt"] },
      { group: "AI", items: ["LLM APIs", "Embeddings", "Rerankers", "Vector Databases"] },
      { group: "RAG", items: ["Hybrid Search", "BM25", "Dense Retrieval", "Reranking", "Graph RAG"] },
      { group: "Agents", items: ["LangGraph", "OpenAI Agents SDK", "CrewAI"] },
      { group: "Protocol", items: ["MCP"] },
      { group: "Backend", items: ["FastAPI", "PostgreSQL", "Redis"] },
      { group: "Production", items: ["Docker", "Git", "GitHub", "CI/CD", "Cloud"] },
      { group: "Evaluation", items: ["RAGAS", "LLM-as-Judge", "Custom Evaluation"] },
      { group: "Observability", items: ["Tracing", "Logging", "Metrics", "Cost Monitoring"] }
    ],
    prerequisites: {
      required: ["Python fundamentals", "SQL fundamentals", "Basic Git", "Basic API concepts"],
      recommended: ["Data Engineering experience", "Software Engineering experience", "Cloud familiarity", "Basic ML concepts"],
      taught: ["RAG", "LangGraph", "MCP", "Agentic AI patterns"]
    },
    learningExperience: [
      { title: "Live Class", copy: "Concepts and architecture." },
      { title: "Live Coding", copy: "Build core systems together." },
      { title: "Lab", copy: "Individual implementation practice." },
      { title: "Project", copy: "Production-oriented systems." },
      { title: "Code Review", copy: "Review architecture and implementation." },
      { title: "Office Hours", copy: "Ask technical questions." },
      { title: "Community", copy: "Collaborate with peers." }
    ],
    weeklySchedule: [
      { day: "Monday", activity: "Architecture + concepts", time: "Time to be announced" },
      { day: "Wednesday", activity: "Live coding", time: "Time to be announced" },
      { day: "Saturday", activity: "Project workshop", time: "Time to be announced" },
      { day: "Office Hours", activity: "Weekly support", time: "Time to be announced" }
    ],
    cohortInfo: [
      { label: "Duration", value: "12-16 Weeks" },
      { label: "Start", value: undefined },
      { label: "Format", value: "Live Online" },
      { label: "Timezone", value: undefined },
      { label: "Seats", value: undefined },
      { label: "Status", value: "UPCOMING" }
    ],
    outcomes: ["Build AI-ready data pipelines", "Design advanced RAG architectures", "Implement hybrid retrieval", "Build tool-using AI agents", "Design agent workflows", "Build multi-agent systems", "Create MCP servers", "Connect agents to databases and APIs", "Implement evaluation pipelines", "Add guardrails", "Implement human-in-the-loop workflows", "Instrument AI systems", "Deploy production-style AI APIs", "Reason about cost and scalability", "Document AI architecture"],
    principles: ["Data before intelligence.", "Architecture before framework.", "Evaluation before scale.", "Security before autonomy.", "Observability before production.", "Cost before uncontrolled model usage.", "Human control for high-impact actions.", "Clear boundaries for agent autonomy."],
    careerDirections: ["AI Engineer", "GenAI Engineer", "Agentic AI Engineer", "AI Data Engineer", "Data Engineer", "ML Engineer", "LLM Engineer", "AI Solutions Engineer", "AI Platform Engineer", "AI Architect"],
    corporateCustomization: ["Curriculum", "Technology stack", "Cloud platform", "Projects", "Data environment", "Security requirements", "Duration", "Delivery format", "Assessment"],
    deliveryOptions: ["Live Online", "Onsite", "Hybrid", "Custom Corporate Academy"],
    faq: [
      { question: "Who is this program for?", answer: "Working technology professionals such as data engineers, software engineers, AI engineers, ML engineers, data scientists, cloud engineers, analytics engineers, backend engineers, technical leads and technology consultants." },
      { question: "Is this a beginner course?", answer: "No. This is an advanced engineering program for people who already have technical foundations." },
      { question: "What Python knowledge do I need?", answer: "You should be comfortable with Python fundamentals before joining." },
      { question: "Do I need SQL?", answer: "Yes. SQL fundamentals are expected because the program connects data engineering and AI systems." },
      { question: "Do I need prior RAG, LangGraph or MCP experience?", answer: "No. RAG, LangGraph patterns and MCP concepts are taught inside the program." },
      { question: "Will I build real projects?", answer: "Yes. The program is structured around production-oriented systems, labs and a final capstone." },
      { question: "Will I build agents and an MCP server?", answer: "Yes. The curriculum includes tool-using agents, multi-agent workflows and a custom MCP server." },
      { question: "Will I learn AI security and evaluation?", answer: "Yes. Evaluation, security, governance, human approval and observability are core parts of the program." },
      { question: "Is there job placement?", answer: "There is no guaranteed job placement. The program is designed to help you build capabilities relevant to modern AI engineering roles. Career outcomes depend on your prior experience, portfolio and individual circumstances." },
      { question: "Can companies enroll teams?", answer: "Yes. Datamarcos can customize this program for corporate engineering, data and AI teams." },
      { question: "Can international students join?", answer: "Yes, subject to cohort timing and delivery configuration." },
      { question: "How does the consultation work?", answer: "The free 1:1 call helps Datamarcos understand your background, goals and program fit. No payment is required for the consultation." },
      { question: "Can I pay through Razorpay?", answer: "Razorpay checkout can be enabled when enrollment is live and a public checkout URL is configured." },
      { question: "What is the refund policy?", answer: "Please review the editable refund policy page or contact Datamarcos for the current policy before enrollment." }
    ],
    showPricing: false,
    seo: {
      title: "Advanced AI Data Engineering & Agentic AI Engineering | Datamarcos",
      description: "Build production-ready AI systems by mastering advanced data engineering, AI-ready data, RAG, LLM engineering, Agentic AI, MCP, multi-agent systems, evaluation and production AI with Datamarcos.",
      keywords: ["AI Data Engineering", "Advanced Data Engineering", "Agentic AI Engineering", "AI Engineering", "Generative AI Engineering", "RAG", "MCP", "LLM Engineering", "Multi-Agent Systems", "AI Data Engineer", "Agentic AI Engineer", "Production AI"],
      ogImage: "/images/programs/advanced-ai-data-engineering-agentic-ai-og.png"
    }
  }
};
