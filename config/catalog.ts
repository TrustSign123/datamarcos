import { homePrograms } from "@/config/home";
import { INTL_COURSES, intlProgramCards } from "@/config/intl-courses";
import { brochureHrefForMarket } from "@/config/lead";
import type { CatalogCategory, CatalogItem } from "@/components/ds/ProgramCatalog";

/**
 * Program catalog grouping (blue/white redesign, 18 Nov 2026). Durations and levels come from each program's own
 * page / structured data (educationalLevel or published prerequisites). Nothing here is new information.
 */
const FLAGSHIP_META: Record<string, { duration: string; level: string; categories: CatalogCategory[] }> = {
  "forward-deployed-ai-engineer": { duration: "22 weeks", level: "Intermediate", categories: ["flagship"] },
  "genai-agentic-ai-engineer": { duration: "18 weeks", level: "Python basics", categories: ["flagship"] },
  "applied-agentic-ai-certification": { duration: "8 weeks", level: "Beginner-friendly", categories: ["flagship"] },
  "advance-data-engineering-genai": { duration: "4+ months", level: "SQL required", categories: ["flagship"] }
};

const INTL_CATS: Record<string, CatalogCategory[]> = {
  "data-analytics-with-ai": ["data"],
  "data-science-ai-genai": ["data"],
  "llmops-ai-evaluation": ["data"],
  "ai-literacy-responsible-ai": ["pro"],
  "ai-product-strategy-for-leaders": ["pro"],
  "genai-at-work": ["pro"],
  "cybersecurity-with-ai": ["security"],
  "ai-security-secops": ["security"]
};

export function catalogItems(market: Parameters<typeof brochureHrefForMarket>[1]): CatalogItem[] {
  const flagship = homePrograms.map((p) => {
    const m = FLAGSHIP_META[p.slug];
    return { slug: p.slug, title: p.title, leadCourse: p.leadCourse, brochureHref: brochureHrefForMarket(p.brochure, market), duration: m.duration, level: m.level, tag: p.tag, summary: p.summary, facts: p.facts, categories: m.categories, flagship: true };
  });
  const rest = intlProgramCards.map((p) => {
    const c = INTL_COURSES.find((x) => x.slug === p.slug)!;
    return { slug: p.slug, title: p.title, leadCourse: p.leadCourse, brochureHref: brochureHrefForMarket(p.brochure, market), duration: c.durationLabel, level: c.educationalLevel, tag: p.tag, summary: p.summary, facts: p.facts, categories: INTL_CATS[p.slug] ?? ["pro"] };
  });
  return [...flagship, ...rest];
}
