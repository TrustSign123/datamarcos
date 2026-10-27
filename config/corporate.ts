/**
 * Corporate / institutional programmes delivered by Datamarcos's founder-led team (Deepesh Mishra).
 * SOURCE OF TRUTH: /workspace/seo/linkedin-experience.md (verified from Deepesh's LinkedIn, 27 Oct 2026; Deepesh
 * authorised presenting this experience as Datamarcos capabilities). Use ONLY these facts.
 * Rules: no trainee names, no salary claims, no fees. Programmes delivered through a training partner must say so
 * (`via`), so we never imply the end client contracted Datamarcos directly.
 */
export type CorporateProgramme = {
  org: string;
  /** Training partner the programme was delivered through, if any. */
  via?: string;
  when?: string;
  what: string;
  source: string;
  /** Show in the homepage "Teams we've trained" strip (false for partner-only rows where the trained team is unknown). */
  strip: boolean;
};

export const corporateProgrammes: CorporateProgramme[] = [
  { org: "Novartis", when: "Aug 2026", what: "Analytics, Python, forecasting and machine learning for pharma.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7498241079700373504/", strip: true },
  { org: "HCL Technologies", when: "Jun–Jul 2026", what: "Data Engineering with Azure and Databricks, across multiple batches.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7477981555060187136/", strip: true },
  { org: "Azure AI programmes", via: "EY", what: "AI-103 Azure AI Engineer and AI-300 Azure AI Foundry & GenAI: RAG, prompt engineering, LLMs, AI agents, computer vision, document intelligence and responsible AI.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7477981555060187136/", strip: false },
  { org: "Sigmoid", when: "2026", what: "Data Engineering and Generative AI sessions over 2 months.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7468656989770985473/", strip: true },
  { org: "PwC", when: "Feb 2026", what: "2-day workshop on GenAI, Agentic AI, MCP, CrewAI and LangGraph, ending in a deployable agentic AI solution built from scratch.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7430807358345482241/", strip: true },
  { org: "A large petrochemical company, Dubai", when: "Jan 2026", what: "2 weeks of GenAI sessions, with participants from Angola and Saudi Arabia.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7420725782274158592/", strip: true },
  { org: "UPES Dehradun", when: "Dec 2025", what: "Microsoft AI-102 hands-on session for students.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7404537573919916032/", strip: true },
  { org: "GAIL (India) Training Centre, Noida", when: "Sep 2025", what: "GenAI and Prompt Engineering for 400+ executives over multiple batches.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7378697800425021440/", strip: true },
  { org: "Kia Motors", when: "Sep 2025", what: "2-day AI-driven market intelligence workshop with n8n and AI APIs (low/no-code).", source: "https://www.linkedin.com/feed/update/urn:li:activity:7375107070464995329/", strip: true },
  { org: "Databricks certification cohort, Pune", via: "SpringPeople", when: "Sep 2025", what: "Databricks Associate Engineer certification session for 100+ engineers.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7374097647726522368/", strip: false },
  { org: "HSBC Technology India", via: "Neueda", when: "Aug 2025", what: "3-week Data Engineering training.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7359867331851796480/", strip: true },
  { org: "Hexaware", what: "Role-specific Data Engineering training: Azure Databricks, medallion architecture, Airflow and Azure Data Factory.", source: "https://www.linkedin.com/feed/update/urn:li:activity:7516833859464818688/", strip: true }
];

export const corporateStack = [
  "Azure Data Factory", "Azure Databricks", "Azure Synapse", "Azure AI Foundry", "AI-102 / AI-103 / AI-300", "DP-203",
  "Databricks (Delta Lake, Unity Catalog, Spark)", "Snowflake", "PySpark", "Airflow",
  "LangChain", "LangGraph", "CrewAI", "MCP", "RAG", "LLMs", "Prompt engineering", "n8n"
];

export const founderCredentials = [
  "Microsoft Instructor Recognition – First Class Delivered (Skillable/Credly, Aug 2026)",
  "AWS Machine Learning (May 2021)",
  "IBM Machine Learning with Python – Level 1 (2020)",
  "IBM Python for Data Science (2020)"
];

/** Founder background (profile). Past roles are Deepesh's own, not Datamarcos clients. */
export const founderBackground = [
  "CEO of Datamarcos since February 2022; AI/ML/IoT consultant and freelance corporate trainer since 2019.",
  "Azure Consultant at eClerx (2021–24); data science trainer and consultant engagements with EY (2019–21).",
  "Freelance Data Scientist for Yahoo (2019–20) and Manager in AI at Resolute AI (2019).",
  "Data Scientist and Corporate Trainer at TechTrunk (2016–19), delivering corporate training for 10+ companies.",
  "More than 100 workshops and trainings, by his profile's count; early in his career he built a mind-controlled (EEG) wheelchair."
];

/** Display name for a programme row, e.g. "HSBC Technology India (via training partner Neueda)". */
export function programmeLabel(p: CorporateProgramme) {
  return p.via ? `${p.org} (via training partner ${p.via})` : p.org;
}
