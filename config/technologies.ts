export type TechnologyStatus = "LIVE" | "COMING_SOON" | "CUSTOM_CORPORATE";

export type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  status: TechnologyStatus;
  programUrl?: string;
};

const t = (
  name: string,
  category: string,
  status: TechnologyStatus = "CUSTOM_CORPORATE",
  programUrl?: string
): Technology => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name,
  category,
  description: `${name} capability development for enterprise teams and technology professionals.`,
  icon: "CircuitBoard",
  status,
  programUrl
});

export const technologies: Technology[] = [
  ...["Generative AI", "Agentic AI", "AI Engineering", "LLM Engineering", "RAG", "MCP", "Multi-Agent Systems", "AI Agents", "Machine Learning", "Deep Learning", "MLOps", "LLMOps", "AI Evaluation", "AI Governance"].map((name) => t(name, "AI & Artificial Intelligence", name.includes("AI") ? "LIVE" : "CUSTOM_CORPORATE", "/programs/ai-engineering-agentic-ai")),
  ...["Data Engineering", "Big Data", "PySpark", "Apache Spark", "Kafka", "Airflow", "dbt", "Databricks", "Snowflake", "Azure Data Engineering", "AWS Data Engineering", "GCP Data Engineering", "Data Architecture", "Data Analytics", "BI"].map((name) => t(name, "Data", name === "Data Engineering" ? "LIVE" : "CUSTOM_CORPORATE", "/programs/data-engineering")),
  ...["AWS", "Microsoft Azure", "Google Cloud", "Cloud Architecture", "Cloud Security", "Cloud Native"].map((name) => t(name, "Cloud", "CUSTOM_CORPORATE")),
  ...["DevOps", "DevSecOps", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions", "GitLab CI", "Platform Engineering", "Internal Developer Platforms", "SRE", "Observability", "Site Reliability Engineering"].map((name) => t(name, "DevOps / Platform", ["DevOps", "DevSecOps", "Platform Engineering"].includes(name) ? "LIVE" : "CUSTOM_CORPORATE", `/programs/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`)),
  ...["Python", "Java", "JavaScript", "TypeScript", "React", "Node.js", "APIs", "Microservices", "System Design", "Backend Engineering", "Software Architecture"].map((name) => t(name, "Software Engineering", "CUSTOM_CORPORATE")),
  ...["Cloud Security", "Application Security", "Identity & Access", "Security Engineering", "AI Security", "Cybersecurity Foundations"].map((name) => t(name, "Cybersecurity", "CUSTOM_CORPORATE")),
  ...["Forward Deployed Engineering", "AI Product Engineering", "AI Coding Agents", "Agentic Software Engineering", "AI Infrastructure", "Edge AI", "Data Governance"].map((name) => t(name, "Emerging / Specialized", name === "Forward Deployed Engineering" ? "LIVE" : "CUSTOM_CORPORATE", "/programs/forward-deployed-engineering"))
];

export const technologyCategories = Array.from(new Set(technologies.map((item) => item.category)));
