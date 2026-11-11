import type { ToolGroup } from "@/components/program/ToolWall";
import { NEXT_COHORT_LONG } from "@/config/cohort";
import type { CurriculumPhase } from "@/components/program/fde/FdeCurriculum";

/** On-page and brochure fee line for these international-only programs. No amounts. */
export const INTL_COURSE_FEE_LINE = "Fees and EMI options shared on a counsellor call.";

export type IntlFaq = { q: string; a: string; link?: { href: string; label: string } };

export type IntlCourse = {
  slug: string;
  path: string;
  /** Value stored in the lead sheet. Must stay stable. */
  course: string;
  title: string;
  fullTitle: string;
  kicker: string;
  heroLead: string;
  heroEm: string;
  deck: string;
  promises: string[];
  durationLabel: string;
  durationIso: string;
  weekCount: number;
  hoursPerWeek: string;
  formatLabel: string;
  timing: string;
  regions: string;
  level: string;
  prereqs: string[];
  audience: string[];
  notFor: string[];
  outcomes: string[];
  phases: CurriculumPhase[];
  projects: { title: string; body: string }[];
  toolGroups: ToolGroup[];
  faqs: IntlFaq[];
  brochure: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  teaches: string[];
  educationalLevel: string;
  credentialName: string;
  applyLead: string;
  applyEm: string;
  applyBody: string;
  applyBullets: string[];
  trust: string[];
  successBody: string;
  related: { href: string; title: string; blurb: string }[];
};

export const INTL_SHARED_TIMING =
  `Part-time and live online, in a small mentor-led cohort. Weekend-morning batches are offered for learners in the US. Evening batches (India time) are offered for learners in the Gulf and Africa. Europe-oriented groups typically meet after work and on Saturdays. Recordings are shared if you miss a live session. The next cohort starts on ${NEXT_COHORT_LONG}. Exact session days and times are confirmed on a counsellor call.`;
