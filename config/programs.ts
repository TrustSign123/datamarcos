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
    status: "UPCOMING",
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
    status: "UPCOMING",
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
    status: "UPCOMING",
    technologies: ["AI Product Engineering", "System Design", "APIs", "Data"],
    curriculum: [{ title: "FDE operating model", topics: ["Discovery", "Solution design", "Field delivery"] }],
    projects: ["Customer problem-to-prototype engagement"],
    instructors: [],
    testimonials: [],
    pricing: "To be announced",
    featured: true
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
    status: "CORPORATE_CUSTOM",
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
    status: "CORPORATE_CUSTOM",
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
    status: "CORPORATE_CUSTOM",
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
    status: "CORPORATE_CUSTOM",
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
    status: "CORPORATE_CUSTOM",
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
    status: "CORPORATE_CUSTOM",
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
