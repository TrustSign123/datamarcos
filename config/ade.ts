import type { JourneyStep } from "@/lib/journey";
import type { ToolGroup } from "@/components/program/ToolWall";

/** Advance Data Engineering with Applied GenAI & Agentic AI: content from the program brochure (moved from GenAIAgenticLanding, 20 Nov 2026). */
export const ADE_COURSE = "Advance Data Engineering with Applied GenAI & Agentic AI";
export const ADE_BROCHURE = "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf";
export const ADE_COVER = "/images/program-thumbnails/data-engineering-genai.webp";

export const adeTracks = [
  { number: "TRACK 01", duration: "4 months · weeks 1-16", title: "Data Engineering Foundation", summary: "Build modern data engineering capability across cloud data lakes, pipelines, orchestration, streaming and data quality.", topics: ["Python & SQL", "Azure Data Lake", "PySpark", "Azure Data Factory", "AWS & Databricks", "Streaming, dbt & quality"] },
  { number: "TRACK 02", duration: "Advanced specialization", title: "Applied GenAI & Agentic AI", summary: "Build LLM-powered applications on real data platforms, from grounded RAG to tool-using agents and a production-style capstone.", topics: ["LLM foundations", "Embeddings & vector search", "LangChain RAG", "LangGraph & CrewAI", "MCP integration", "Snowflake Cortex & Agent Bricks"] }
];

export const adePhases = [
  { number: "01", title: "Foundations & cloud data lakes", weeks: "Foundation · Month 1 · Weeks 1-4", summary: "Refresh Python and SQL, core data concepts and cloud foundations.", topics: ["Python and SQL refresher", "Files, formats, joins and aggregations", "Azure Data Lake fundamentals", "Data modeling and first cloud environment"], ship: "Set up a cloud data environment and prepare a structured dataset." },
  { number: "02", title: "Pipelines, PySpark & orchestration", weeks: "Foundation · Month 2 · Weeks 5-8", summary: "Process larger datasets and build orchestrated pipelines.", topics: ["PySpark for distributed processing", "Data structuring and cleaning", "Azure Data Factory pipelines", "Delta Lake and workflow orchestration"], ship: "Build a repeatable pipeline with transformation and orchestration." },
  { number: "03", title: "Multi-cloud, Databricks & streaming", weeks: "Foundation · Month 3 · Weeks 9-12", summary: "Expand into lakehouse patterns, streaming and data quality.", topics: ["AWS data services", "Databricks lakehouse architecture", "Spark Structured Streaming", "Great Expectations and dbt-style transformations"], ship: "Develop a streaming-ready, quality-checked data workflow." },
  { number: "04", title: "Foundation capstone & GenAI introduction", weeks: "Foundation · Month 4 · Weeks 13-16", summary: "Bring the foundation together and prepare for the advanced track.", topics: ["Ingest, process, store and analyze a real dataset", "Introduction to GenAI-powered data applications", "End-to-end data engineering capstone", "Resume and interview preparation"], ship: "Present an end-to-end data engineering capstone." },
  { number: "05", title: "Applied GenAI foundations", weeks: "Advanced track · Module 1", summary: "Connect language models to useful workflows and real data.", topics: ["LLM fundamentals and prompting", "Embeddings and vector databases", "Model connections to data pipelines", "Applied GenAI patterns"], ship: "Create a grounded LLM workflow using real data." },
  { number: "06", title: "Retrieval-augmented generation", weeks: "Advanced track · Module 2", summary: "Build retrieval systems that ground responses in enterprise knowledge.", topics: ["RAG architecture", "Chunking and retrieval strategies", "LangChain pipelines", "Grounded responses and source context"], ship: "Build a RAG assistant over a knowledge collection." },
  { number: "07", title: "Agentic AI systems", weeks: "Advanced track · Module 3", summary: "Design multi-step agents that use tools and connect to enterprise data.", topics: ["Tool-using agent design", "LangGraph workflows", "CrewAI orchestration patterns", "Agent connections to enterprise data systems"], ship: "Prototype an agentic workflow with tools and clear task boundaries." },
  { number: "08", title: "Enterprise AI platforms & capstone", weeks: "Advanced track · Module 4", summary: "Apply platform-native AI capabilities and integrate the complete system.", topics: ["Snowflake Cortex AI", "Databricks Agent Bricks", "Evaluation and integration", "End-to-end production-style capstone"], ship: "Build and present an integrated Agentic AI data application." }
];

export const adeBuildItems = [
  { id: "01", title: "Scalable data pipelines", detail: "Ingest, transform and orchestrate data across cloud platforms." },
  { id: "02", title: "Production RAG assistant", detail: "Ground model responses in searchable business knowledge." },
  { id: "03", title: "Tool-using agent", detail: "Connect an agent to APIs, data and a defined workflow." },
  { id: "04", title: "Integrated capstone", detail: "Bring data engineering, GenAI and agentic patterns together." }
];

export const adeAudience = [
  "Analytics and BI professionals moving beyond dashboards",
  "ETL and integration engineers modernizing their stack",
  "Software and backend developers expanding into data systems",
  "Database administrators moving toward data platforms and AI"
];

export const adeJourney: JourneyStep[] = adePhases.map((phase, index) => {
  const month = phase.weeks.match(/Month (\d+) · (Weeks [\d-]+)/);
  const mod = phase.weeks.match(/Module (\d+)/);
  return {
    id: `ade-${phase.number}`,
    label: month ? `Month ${month[1]}` : `Advanced · Module ${mod?.[1] ?? index - 3}`,
    span: month ? month[2].replace("-", "–") : "Advanced track",
    modules: [phase.title],
    learn: phase.topics.slice(0, 3),
    build: phase.ship,
    unlock: index === 3 ? "Data Engineering Foundation complete" : index === adePhases.length - 1 ? "Applied GenAI & Agentic AI track complete" : undefined,
    milestone: index === 3 ? "Foundation capstone · resume and interview prep" : index === adePhases.length - 1 ? "Integrated capstone" : undefined
  };
});

/** Tools and platforms named in the brochure, grouped. */
export const adeToolGroups: ToolGroup[] = [
  { category: "Cloud & data platforms", tools: ["Azure", "AWS", "Snowflake", "Databricks", "Delta Lake"] },
  { category: "Pipelines, quality & code", tools: ["PySpark", "Kafka", "Airflow", "dbt", "Great Expectations", "SQL", "Python", "Git"] },
  { category: "GenAI & agents", tools: ["LangChain", "LangGraph", "CrewAI", "RAG", "Vector Databases", "Snowflake Cortex AI", "Databricks Agent Bricks"] }
];

export const adePrereqs = [
  "Basic understanding of databases; SQL is required.",
  "Familiarity with a programming language; Python is preferred.",
  "Comfort with data concepts such as files, formats, joins and aggregations.",
  "Experience working with data in any role is useful."
];
