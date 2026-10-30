import type { Guide } from "./types";
import { guide as fdeCoursesCompared2026 } from "./forward-deployed-engineer-courses-india-compared-2026";
import { guide as agenticCoursesCompared2026 } from "./agentic-ai-courses-india-compared-2026";
import { guide as genaiCoursesCompared2026 } from "./generative-ai-courses-india-compared-2026";
import { guide as deCoursesCompared2026 } from "./data-engineering-courses-with-genai-india-compared-2026";
import { guide as ragVsFineTuning } from "./rag-vs-fine-tuning";
import { guide as whatIsFde } from "./what-is-a-forward-deployed-engineer";
import { guide as langgraphVsCrewaiVsAutogen } from "./langgraph-vs-crewai-vs-autogen";

/** Every guide file, any status. Only `approved` ones are exposed by lib/guides.ts. */
export const allGuides: Guide[] = [fdeCoursesCompared2026, agenticCoursesCompared2026, genaiCoursesCompared2026, deCoursesCompared2026, ragVsFineTuning, whatIsFde, langgraphVsCrewaiVsAutogen];
