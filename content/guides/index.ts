import type { Guide } from "./types";
import { guide as fdeCoursesCompared2026 } from "./forward-deployed-engineer-courses-india-compared-2026";
import { guide as agenticCoursesCompared2026 } from "./agentic-ai-courses-india-compared-2026";
import { guide as genaiCoursesCompared2026 } from "./generative-ai-courses-india-compared-2026";
import { guide as deCoursesCompared2026 } from "./data-engineering-courses-with-genai-india-compared-2026";
import { guide as ragVsFineTuning } from "./rag-vs-fine-tuning";
import { guide as whatIsFde } from "./what-is-a-forward-deployed-engineer";
import { guide as langgraphVsCrewaiVsAutogen } from "./langgraph-vs-crewai-vs-autogen";
import { guide as whatIsAgenticAi } from "./what-is-agentic-ai";
import { guide as fdeInterviewQuestions } from "./forward-deployed-engineer-interview-questions";
import { guide as dataEngineerVsAiEngineer } from "./data-engineer-vs-ai-engineer";
import { guide as agenticAiProjects } from "./agentic-ai-projects-for-beginners";
import { guide as howToBuildAnMcpServer } from "./how-to-build-an-mcp-server";
import { guide as n8nVsLanggraph } from "./n8n-vs-langgraph";
import { guide as agenticAiRoadmap } from "./agentic-ai-roadmap";
import { guide as dataEngineeringRoadmap } from "./data-engineering-roadmap";

/** Every guide file, any status. Only `approved` ones are exposed by lib/guides.ts. */
export const allGuides: Guide[] = [fdeCoursesCompared2026, agenticCoursesCompared2026, genaiCoursesCompared2026, deCoursesCompared2026, ragVsFineTuning, whatIsFde, langgraphVsCrewaiVsAutogen, whatIsAgenticAi, fdeInterviewQuestions, dataEngineerVsAiEngineer, agenticAiProjects, howToBuildAnMcpServer, n8nVsLanggraph, agenticAiRoadmap, dataEngineeringRoadmap];
