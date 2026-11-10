export type { IntlCourse, IntlFaq } from "./intl-course-data/types";
export { INTL_COURSE_FEE_LINE, INTL_SHARED_TIMING } from "./intl-course-data/types";

import { literacyCourse } from "./intl-course-data/ai-literacy";
import { leadersCourse } from "./intl-course-data/ai-product-strategy";
import { llmopsCourse } from "./intl-course-data/llmops";
import { genaiAtWorkCourse } from "./intl-course-data/genai-at-work";
import { analyticsCourse } from "./intl-course-data/data-analytics";
import { cybersecurityCourse } from "./intl-course-data/cybersecurity";
import type { IntlCourse } from "./intl-course-data/types";

export const INTL_COURSES: IntlCourse[] = [
  literacyCourse,
  leadersCourse,
  llmopsCourse,
  genaiAtWorkCourse,
  analyticsCourse,
  cybersecurityCourse
];

export const INTL_LEAD_COURSES = INTL_COURSES.map((course) => course.course);

export const INTL_COURSE_PATHS = INTL_COURSES.map((course) => course.path);

export const INTL_SLUGS = INTL_COURSES.map((course) => course.slug);

export const INTL_COURSE_BROCHURES: Record<string, string> = Object.fromEntries(
  INTL_COURSES.map((course) => [course.course, course.brochure])
);

export function intlCourseBySlug(slug: string): IntlCourse | undefined {
  return INTL_COURSES.find((course) => course.slug === slug);
}

export function intlCourseByPath(path: string): IntlCourse | undefined {
  return INTL_COURSES.find((course) => course.path === path);
}

export function intlCourseByLeadName(name: string): IntlCourse | undefined {
  const needle = name.trim().toLowerCase();
  return INTL_COURSES.find(
    (course) => course.course.toLowerCase() === needle || course.fullTitle.toLowerCase() === needle
  );
}

export type IntlProgramCard = {
  slug: string;
  title: string;
  fullTitle: string;
  leadCourse: string;
  brochure: string;
  image: string;
  imageAlt: string;
  facts: string[];
  whoFor: string;
  summary: string;
  tag: string;
};

const CARD_COPY: Record<string, { summary: string; tag: string; whoFor: string }> = {
  "ai-literacy-responsible-ai": {
    tag: "Literacy · Responsible AI",
    whoFor: "Managers, team leads and professionals who need practical AI literacy, especially in or selling into the EU or UK.",
    summary: "Practical AI literacy and responsible use, including EU AI Act staff-literacy duties. Not a legal qualification or a coding course."
  },
  "ai-product-strategy-for-leaders": {
    tag: "Product · Strategy",
    whoFor: "Product managers, founders and business leaders who will frame and sequence AI work.",
    summary: "Frame AI opportunities, judge build versus buy, and write a strategy brief for stakeholders. No coding required."
  },
  "llmops-ai-evaluation": {
    tag: "LLMOps · Evaluation",
    whoFor: "Engineers who already have an LLM or RAG prototype and need to evaluate, observe and harden it.",
    summary: "Evaluate, observe, deploy and harden an LLM prototype for production use. A follow-on, not a first GenAI course."
  },
  "genai-at-work": {
    tag: "AI tools · No-code",
    whoFor: "Working professionals in non-engineering roles who want everyday AI-tool and no-code automation skills.",
    summary: "Everyday AI assistants and no-code automation for the job you already have. No coding required."
  },
  "data-analytics-with-ai": {
    tag: "Analytics · SQL · Python",
    whoFor: "Career starters, switchers and analysts who want SQL, Python, BI and careful AI-assisted analysis.",
    summary: "Spreadsheets, SQL, Python, BI and verified AI assistance, ending in a dashboard and written capstone."
  },
  "cybersecurity-with-ai": {
    tag: "Security · LLM defense",
    whoFor: "Security, SOC and detection professionals, and engineers who need to secure LLM or agent applications.",
    summary: "Use AI carefully in security operations, and secure LLM and agent apps against prompt injection and related risks."
  }
};

export const intlProgramCards: IntlProgramCard[] = INTL_COURSES.map((course) => {
  const copy = CARD_COPY[course.slug];
  return {
    slug: course.slug,
    title: course.title,
    fullTitle: course.fullTitle,
    leadCourse: course.course,
    brochure: course.brochure,
    image: course.image,
    imageAlt: course.imageAlt,
    facts: [course.durationLabel, course.hoursPerWeek, "Live online"],
    whoFor: copy.whoFor,
    summary: copy.summary,
    tag: copy.tag
  };
});
