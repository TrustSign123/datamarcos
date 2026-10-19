export type ProgramStatus = "LIVE" | "UPCOMING" | "COMING_SOON" | "CORPORATE_CUSTOM" | "WAITLIST";

export type Program = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  positioning?: string;
  audience: string[];
  level: string;
  duration: string;
  format: string;
  delivery: string[];
  status: ProgramStatus;
  cohortDate?: string;
  seats?: string;
  technologies: string[];
  heroImage?: string;
  thumbnail?: string;
  curriculum: { title: string; topics: string[] }[];
  projects: string[];
  instructors: string[];
  testimonials: string[];
  pricing: string;
  showPricing?: boolean;
  calendlyUrl?: string;
  razorpayUrl?: string;
  brochureUrl?: string;
  programOgImage?: string;
  featured: boolean;
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  };
};

export const programs: Program[] = [
  {
    id: "genai-agentic-ai-engineer",
    slug: "genai-agentic-ai-engineer",
    title: "Generative AI and Agentic AI Engineer",
    shortTitle: "GenAI & Agentic AI Engineer",
    category: "Generative AI / Agentic AI Engineering",
    description: "An 18-week executive program to build, evaluate, secure and deploy LLM applications, RAG systems, multi-agent workflows and production AI integrations.",
    positioning: "Build it. Ship it. Own the outcome.",
    audience: ["Backend and Full-Stack Developers", "Data, Analytics and ML Engineers", "IT-Services, QA and DevOps Engineers", "Career Switchers with Coding Basics", "Tech Leads and Architects"],
    level: "Intermediate to advanced",
    duration: "18 Weeks",
    format: "Live mentor-led executive program",
    delivery: ["Live Online", "Hybrid", "Corporate Sponsored"],
    status: "LIVE",
    technologies: ["Python", "FastAPI", "OpenAI", "Claude", "Gemini", "LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "Google ADK", "MCP", "A2A", "Qdrant", "Pinecone", "pgvector", "Neo4j", "RAGAS", "DeepEval", "Docker", "Terraform", "Kubernetes", "OpenTelemetry", "Grafana", "AWS Bedrock", "Azure AI Foundry", "Databricks", "Snowflake"],
    curriculum: [
      { title: "Foundations · Weeks 1-3", topics: ["LLM fundamentals", "Prompt engineering and structured outputs", "FastAPI GenAI services", "Python, Git and environment bridge track"] },
      { title: "RAG Systems · Weeks 4-7", topics: ["Embeddings and vector databases", "Advanced retrieval and evaluation", "Knowledge graphs and GraphRAG", "Multimodal document intelligence"] },
      { title: "Agentic AI · Weeks 8-12", topics: ["Agent design with LangGraph", "MCP and governed tool use", "Multi-agent orchestration", "Memory, human approval and enterprise integration"] },
      { title: "Production and Security · Weeks 13-16", topics: ["AI security and guardrails", "LLMOps and observability", "Cost engineering", "Cloud deployment and governance"] },
      { title: "Capstone · Weeks 17-18", topics: ["Build and harden a domain capstone", "Demo Day", "Interview preparation", "Portfolio and job-search plan"] }
    ],
    projects: ["P1 Knowledge Copilot", "P2 Multi-Agent Ops Copilot", "P3 Production Hardening", "Domain capstone and Demo Day"],
    instructors: ["Deepesh Mishra"],
    testimonials: ["Kumar Gaurav", "Ansh Ranjan", "Gourav Thadhani"],
    pricing: "Admissions shares cohort dates, fees, instalment options and scholarship details after a fit conversation.",
    showPricing: false,
    brochureUrl: "/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf",
    programOgImage: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg",
    featured: true,
    seo: {
      title: "Generative AI and Agentic AI Engineer | Datamarcos",
      description: "Build, evaluate, secure and deploy GenAI and Agentic AI systems in an 18-week, mentor-led executive program with three client-style projects and a capstone.",
      keywords: ["Generative AI Engineer", "Agentic AI Engineer", "GenAI course", "RAG", "LangGraph", "MCP", "Multi-agent systems", "LLMOps", "Datamarcos"],
      ogImage: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg"
    }
  },
  {
    id: "genai-agentic-ai-engineer",
    slug: "genai-agentic-ai-engineer",
    title: "Generative AI and Agentic AI Engineer",
    shortTitle: "GenAI & Agentic AI Engineer",
    category: "Generative AI / Agentic AI Engineering",
    description: "An 18-week executive program to build, evaluate, secure and deploy LLM applications, RAG systems, multi-agent workflows and production AI integrations.",
    positioning: "Build it. Ship it. Own the outcome.",
    audience: ["Backend and Full-Stack Developers", "Data, Analytics and ML Engineers", "IT-Services, QA and DevOps Engineers", "Career Switchers with Coding Basics", "Tech Leads and Architects"],
    level: "Intermediate to advanced",
    duration: "18 Weeks",
    format: "Live mentor-led executive program",
    delivery: ["Live Online", "Hybrid", "Corporate Sponsored"],
    status: "LIVE",
    technologies: ["Python", "FastAPI", "OpenAI", "Claude", "Gemini", "LangChain", "LangGraph", "CrewAI", "MCP", "A2A", "Qdrant", "Pinecone", "pgvector", "Neo4j", "RAGAS", "DeepEval", "Docker", "Terraform", "Kubernetes", "OpenTelemetry", "Grafana", "AWS Bedrock", "Azure AI Foundry", "Databricks", "Snowflake"],
    curriculum: [
      { title: "Foundations · Weeks 1-3", topics: ["LLM fundamentals", "Prompt engineering and structured outputs", "FastAPI GenAI services", "Python, Git and environment bridge track"] },
      { title: "RAG Systems · Weeks 4-7", topics: ["Embeddings and vector databases", "Advanced retrieval and evaluation", "Knowledge graphs and GraphRAG", "Multimodal document intelligence"] },
      { title: "Agentic AI · Weeks 8-12", topics: ["Agent design with LangGraph", "MCP and governed tool use", "Multi-agent orchestration", "Memory, human approval and enterprise integration"] },
      { title: "Production and Security · Weeks 13-16", topics: ["AI security and guardrails", "LLMOps and observability", "Cost engineering", "Cloud deployment and governance"] },
      { title: "Capstone · Weeks 17-18", topics: ["Build and harden a domain capstone", "Demo Day", "Interview preparation", "Portfolio and job-search plan"] }
    ],
    projects: ["P1 Knowledge Copilot", "P2 Multi-Agent Ops Copilot", "P3 Production Hardening", "Domain capstone and Demo Day"],
    instructors: ["Deepesh Mishra"],
    testimonials: ["Kumar Gaurav", "Ansh Ranjan", "Gourav Thadhani"],
    pricing: "Admissions shares cohort dates, fees, instalment options and scholarship details after a fit conversation.",
    showPricing: false,
    brochureUrl: "/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf",
    programOgImage: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg",
    featured: true,
    seo: {
      title: "Generative AI and Agentic AI Engineer | Datamarcos",
      description: "Build, evaluate, secure and deploy GenAI and Agentic AI systems in an 18-week, mentor-led executive program with three client-style projects and a capstone.",
      keywords: ["Generative AI Engineer", "Agentic AI Engineer", "GenAI course", "RAG", "LangGraph", "MCP", "Multi-agent systems", "LLMOps", "Datamarcos"],
      ogImage: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg"
    }
  },
  {
    id: "advanced-ai-data-engineering-agentic-ai",
    slug: "advanced-ai-data-engineering-agentic-ai",
    title: "Advanced AI Data Engineering & Agentic AI Engineering",
    shortTitle: "AI Data Engineering & Agentic AI",
    category: "AI Engineering / Data Engineering / Agentic AI",
    description: "Build production-grade AI systems by combining modern data engineering, AI-ready data platforms, advanced RAG, LLM engineering, tool-using agents, multi-agent workflows, MCP, evaluation, observability, security and deployment.",
    positioning: "Build the Data Foundation. Engineer the Intelligence. Deploy the Agents.",
    audience: ["Data Engineers", "Software Engineers", "AI Engineers", "ML Engineers", "Data Scientists", "Cloud Engineers", "Analytics Engineers", "Backend Engineers", "Technical Leads", "Technology Consultants", "Working Technology Professionals"],
    level: "Advanced",
    duration: "12-16 Weeks",
    format: "Premium Live Cohort",
    delivery: ["Live Online", "Onsite", "Hybrid", "Custom Corporate Academy"],
    status: "LIVE",
    cohortDate: undefined,
    seats: undefined,
    technologies: ["Advanced Data Engineering", "AI-Ready Data", "RAG", "LLM Engineering", "Agentic AI", "MCP", "Multi-Agent Systems", "Evaluation", "Observability", "Security", "LLMOps", "Production AI"],
    curriculum: [
      { title: "Modern Data Engineering", topics: ["SQL", "Python", "Spark", "Kafka", "Airflow", "dbt"] },
      { title: "AI-Ready Data and RAG", topics: ["Embeddings", "Vector databases", "Hybrid search", "Reranking", "Evaluation"] },
      { title: "Agentic AI Engineering", topics: ["Tool calling", "MCP", "Multi-agent workflows", "Human approval", "Production deployment"] }
    ],
    projects: ["Production data pipeline", "AI-ready enterprise knowledge pipeline", "Advanced RAG assistant", "Natural language to SQL agent", "Multi-agent business analyst", "AI data quality agent", "Enterprise agentic data intelligence platform"],
    instructors: [],
    testimonials: [],
    pricing: "Program investment depends on cohort format and mentorship level.",
    showPricing: false,
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    razorpayUrl: process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL,
    brochureUrl: process.env.NEXT_PUBLIC_PROGRAM_BROCHURE_URL,
    programOgImage: "/images/programs/advanced-ai-data-engineering-agentic-ai-og.png",
    featured: true,
    seo: {
      title: "Advanced AI Data Engineering & Agentic AI Engineering | Datamarcos",
      description: "Build production-ready AI systems by mastering advanced data engineering, AI-ready data, RAG, LLM engineering, Agentic AI, MCP, multi-agent systems, evaluation and production AI with Datamarcos.",
      keywords: ["AI Data Engineering", "Advanced Data Engineering", "Agentic AI Engineering", "AI Engineering", "Generative AI Engineering", "RAG", "MCP", "LLM Engineering", "Multi-Agent Systems", "AI Data Engineer", "Agentic AI Engineer", "Production AI"],
      ogImage: "/images/programs/advanced-ai-data-engineering-agentic-ai-og.png"
    }
  },
  {
    id: "advance-data-engineering-genai",
    slug: "advance-data-engineering-genai",
    title: "Advance Data Engineering with Applied GenAI & Agentic AI",
    shortTitle: "Advance Data Engineering + Agentic AI",
    category: "Data Engineering / GenAI / Agentic AI",
    description: "A structured, mentor-led path from a four-month data engineering foundation into advanced GenAI, production RAG, Agentic AI and an integrated data application capstone.",
    positioning: "Build the Data Foundation. Engineer the Intelligence. Deploy the Agents.",
    audience: ["Data Engineers", "Analytics and BI Professionals", "ETL and Integration Engineers", "Software and Backend Developers", "Database Administrators", "Working Technology Professionals"],
    level: "Advanced",
    duration: "4-Month Foundation + Advanced Specialization",
    format: "Live mentor-led cohort",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    cohortDate: undefined,
    seats: undefined,
    technologies: ["Python", "SQL", "Azure Data Lake", "PySpark", "Spark Structured Streaming", "Azure Data Factory", "AWS", "Databricks", "Snowflake", "Delta Lake", "Kafka", "Airflow", "dbt", "Great Expectations", "LangChain", "LangGraph", "RAG", "CrewAI", "MCP", "Snowflake Cortex AI", "Databricks Mosaic AI"],
    curriculum: [
      { title: "Foundation · Month 1 · Foundations & cloud data lakes", topics: ["Python and SQL refresher", "Files, formats, joins and aggregations", "Azure Data Lake", "Data modeling"] },
      { title: "Foundation · Month 2 · Pipelines, PySpark & orchestration", topics: ["PySpark", "Data structuring", "Azure Data Factory", "Delta Lake"] },
      { title: "Foundation · Month 3 · Multi-cloud, Databricks & streaming", topics: ["AWS", "Databricks lakehouse", "Spark Structured Streaming", "dbt and data quality"] },
      { title: "Foundation · Month 4 · Capstone & GenAI introduction", topics: ["Ingest, process, store and analyze", "Real-world dataset capstone", "GenAI introduction", "Resume and interview preparation"] },
      { title: "Advanced · Applied GenAI foundations and RAG", topics: ["LLMs and prompting", "Embeddings and vector databases", "LangChain", "Retrieval strategies"] },
      { title: "Advanced · Agentic systems and enterprise platforms", topics: ["LangGraph", "CrewAI", "Agent orchestration", "Snowflake Cortex AI", "Databricks Mosaic AI"] }
    ],
    projects: ["End-to-end cloud data pipeline", "Production RAG knowledge assistant", "Researcher and customer-care agents", "Financial news multi-agent coordinator", "MCP server connected to a database and internal API", "Integrated Agentic AI data application capstone"],
    instructors: ["Deepesh Mishra"],
    testimonials: ["Raghul K", "Ansh Ranjan", "Kumar Gaurav", "Corporate Training Participant"],
    pricing: "Tap Download Brochure or Book a Consultation and Datamarcos will WhatsApp the fees and next batch dates.",
    showPricing: false,
    brochureUrl: "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf",
    programOgImage: "/images/advance-data-engineering-genai/classroom-live.jpg",
    featured: true,
    seo: {
      title: "Advance Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
      description: "Build modern data engineering foundations, then advance into production RAG, LangChain, LangGraph, CrewAI, MCP and platform-native AI with Datamarcos mentor Deepesh Mishra.",
      keywords: ["Advance Data Engineering", "Applied GenAI", "Agentic AI", "RAG", "LangChain", "LangGraph", "CrewAI", "MCP", "Databricks", "Snowflake", "Azure Data Lake"],
      ogImage: "/images/advance-data-engineering-genai/classroom-live.jpg"
    }
  },
  {
    id: "ai-engineering-agentic-ai",
    slug: "ai-engineering-agentic-ai",
    title: "AI Engineering & Agentic AI Architect",
    shortTitle: "AI Engineering",
    category: "AI & Artificial Intelligence",
    description: "A structured program for building production-grade GenAI, RAG, agents and evaluation workflows.",
    audience: ["Professionals", "Organizations"],
    level: "Advanced",
    duration: "Configurable",
    format: "Live cohort / corporate custom",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    technologies: ["Generative AI", "Agentic AI", "LLM Engineering", "RAG", "MCP", "AI Evaluation"],
    curriculum: [
      { title: "AI engineering foundations", topics: ["LLM application patterns", "Prompt systems", "RAG architecture"] },
      { title: "Agentic systems", topics: ["Tool use", "Multi-agent workflows", "Evaluation and safety"] }
    ],
    projects: ["Enterprise knowledge assistant", "Agentic workflow prototype"],
    instructors: [],
    testimonials: [],
    pricing: "To be announced",
    featured: true
  },
  {
    id: "forward-deployed-engineering",
    slug: "forward-deployed-engineering",
    title: "Forward Deployed Engineering",
    shortTitle: "FDE",
    category: "Emerging / Specialized",
    description: "Product, engineering and customer-context skills for teams deploying technology in complex environments.",
    audience: ["Professionals", "Organizations"],
    level: "Intermediate to advanced",
    duration: "Configurable",
    format: "Live cohort / workshop",
    delivery: ["Remote", "Onsite", "Hybrid"],
    status: "LIVE",
    technologies: ["AI Product Engineering", "System Design", "APIs", "Data"],
    curriculum: [{ title: "FDE operating model", topics: ["Discovery", "Solution design", "Field delivery"] }],
    projects: ["Customer problem-to-prototype engagement"],
    instructors: [],
    testimonials: [],
    pricing: "To be announced",
    featured: true
  },
  {
    id: "forward-deployed-ai-engineer",
    slug: "forward-deployed-ai-engineer",
    title: "Forward Deployed AI Engineer",
    shortTitle: "Forward Deployed AI Engineer",
    category: "AI Engineering / Forward Deployed Engineering",
    description: "A 5-month, 22-week executive program for engineers to scope, build, secure, deploy and own production AI systems inside real enterprise environments.",
    positioning: "Build it. Deploy it. Own it inside the customer's world.",
    audience: ["Backend Engineers", "Full-Stack Engineers", "Data Engineers", "ML Engineers", "Solutions Architects", "QA / SDET", "DevOps Engineers", "Technology Leads"],
    level: "Intermediate to advanced",
    duration: "5 Months / 22 Weeks",
    format: "Live mentor-led executive program",
    delivery: ["Live Online", "Hybrid", "Corporate Custom"],
    status: "LIVE",
    technologies: ["Python", "FastAPI", "LLM Engineering", "RAG", "LangGraph", "MCP", "AWS", "Azure", "GCP", "Terraform", "Docker", "Enterprise Integrations", "AI Security", "LLMOps"],
    curriculum: [
      { title: "Foundation", topics: ["FDE craft", "Discovery", "APIs", "Cloud", "Networking", "Containers", "CI/CD"] },
      { title: "GenAI Systems", topics: ["LLM engineering", "RAG", "Knowledge graphs", "Multimodal AI", "Evaluation", "Cost engineering"] },
      { title: "Agents and Enterprise Integration", topics: ["LangGraph", "Multi-agent systems", "MCP", "Legacy systems", "Enterprise platforms"] },
      { title: "Production, Security and Governance", topics: ["AI security", "Compliance", "LLMOps", "Reliability", "UAT", "Handoff"] },
      { title: "Capstone and Career Launch", topics: ["Client engagement", "Deployment", "Demo Day", "FDE interview loops"] }
    ],
    projects: ["Project Sentinel: BFSI secure knowledge copilot", "Project Atlas: multi-agent operations copilot", "Project Helix: regulated production deployment", "End-to-end client capstone engagement"],
    instructors: ["Deepesh Mishra"],
    testimonials: [],
    pricing: "Application-based admission. Cohort dates and fees are shared after the fit conversation.",
    showPricing: false,
    brochureUrl: "/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf",
    programOgImage: "/images/forward-deployed-ai-engineer/brochure-cover.png",
    featured: true,
    seo: {
      title: "Forward Deployed AI Engineer Program | Datamarcos",
      description: "Build, secure, deploy and own enterprise AI systems in this 5-month, 22-week Forward Deployed AI Engineer program.",
      keywords: ["Forward Deployed AI Engineer", "Forward Deployed Engineer Program", "AI Engineering", "Enterprise AI", "AI Agents", "RAG", "LangGraph", "MCP", "LLMOps"],
      ogImage: "/images/forward-deployed-ai-engineer/brochure-cover.png"
    }
  },
  {
    id: "data-engineering",
    slug: "data-engineering",
    title: "Advanced Data Engineering",
    shortTitle: "Data Engineering",
    category: "Data",
    description: "Modern batch, streaming and cloud data engineering for production teams.",
    audience: ["Professionals", "Organizations"],
    level: "Intermediate",
    duration: "Configurable",
    format: "Cohort / corporate custom",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    technologies: ["Spark", "Kafka", "Airflow", "dbt", "Databricks", "Snowflake"],
    curriculum: [{ title: "Data platforms", topics: ["Pipelines", "Orchestration", "Quality", "Warehouse/lakehouse"] }],
    projects: ["Analytics-ready pipeline and data quality workflow"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  },
  {
    id: "generative-ai-engineering",
    slug: "generative-ai-engineering",
    title: "Generative AI Engineering",
    shortTitle: "GenAI Engineering",
    category: "AI & Artificial Intelligence",
    description: "Hands-on GenAI application engineering for software, product and data teams.",
    audience: ["Professionals", "Organizations"],
    level: "Intermediate",
    duration: "Configurable",
    format: "Workshop / cohort",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    technologies: ["Generative AI", "RAG", "Evaluation", "AI Governance"],
    curriculum: [{ title: "GenAI applications", topics: ["Patterns", "Retrieval", "Testing", "Deployment"] }],
    projects: ["Internal GenAI app prototype"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  },
  {
    id: "cloud-devops-engineering",
    slug: "cloud-devops-engineering",
    title: "Cloud & DevOps Engineering",
    shortTitle: "Cloud & DevOps",
    category: "Cloud",
    description: "Cloud-native engineering, automation and delivery capability for modern teams.",
    audience: ["Professionals", "Organizations"],
    level: "Intermediate",
    duration: "Configurable",
    format: "Corporate custom / cohort",
    delivery: ["Remote", "Onsite", "Hybrid"],
    status: "LIVE",
    technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
    curriculum: [{ title: "Cloud delivery", topics: ["Infrastructure as code", "Containers", "Pipelines", "Operations"] }],
    projects: ["Cloud-native deployment pipeline"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  },
  {
    id: "platform-engineering",
    slug: "platform-engineering",
    title: "Platform Engineering",
    shortTitle: "Platform Engineering",
    category: "DevOps / Platform",
    description: "Internal developer platforms, golden paths, SRE practices and engineering enablement.",
    audience: ["Organizations", "Professionals"],
    level: "Advanced",
    duration: "Configurable",
    format: "Corporate custom",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    technologies: ["IDP", "Kubernetes", "SRE", "Observability"],
    curriculum: [{ title: "Platform foundations", topics: ["Developer experience", "Golden paths", "Reliability", "Governance"] }],
    projects: ["Internal platform blueprint"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  },
  {
    id: "devsecops",
    slug: "devsecops",
    title: "DevSecOps",
    shortTitle: "DevSecOps",
    category: "Cybersecurity",
    description: "Security embedded into delivery pipelines, cloud platforms and engineering workflows.",
    audience: ["Organizations", "Professionals"],
    level: "Intermediate",
    duration: "Configurable",
    format: "Workshop / corporate custom",
    delivery: ["Remote", "Onsite", "Hybrid"],
    status: "LIVE",
    technologies: ["DevSecOps", "Cloud Security", "Application Security", "CI/CD"],
    curriculum: [{ title: "Secure delivery", topics: ["Threat modeling", "Pipeline controls", "Secrets", "Policy"] }],
    projects: ["Secure CI/CD pipeline baseline"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  },
  {
    id: "mlops-llmops",
    slug: "mlops-llmops",
    title: "MLOps & LLMOps",
    shortTitle: "MLOps & LLMOps",
    category: "AI & Artificial Intelligence",
    description: "Operational discipline for ML and LLM systems, from experimentation to monitoring.",
    audience: ["Organizations", "Professionals"],
    level: "Advanced",
    duration: "Configurable",
    format: "Corporate custom / workshop",
    delivery: ["Remote", "Hybrid"],
    status: "LIVE",
    technologies: ["MLOps", "LLMOps", "Monitoring", "Evaluation"],
    curriculum: [{ title: "Operational AI", topics: ["Pipelines", "Registries", "Evaluation", "Monitoring"] }],
    projects: ["Model and LLM monitoring workflow"],
    instructors: [],
    testimonials: [],
    pricing: "Custom proposal",
    featured: true
  }
];

export const featuredPrograms = programs.filter((program) => program.featured);
