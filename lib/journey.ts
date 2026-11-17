import type { CurriculumPhase } from "@/components/program/fde/FdeCurriculum";

/** One stop on the career-journey simulation. Every field comes from the course's own curriculum data. */
export type JourneyStep = {
  id: string;
  label: string;
  span?: string;
  modules: string[];
  learn: string[];
  build?: string;
  unlock?: string;
  milestone?: string;
};

type Milestone = { weeks: string; milestone: string };

const firstWeek = (weeks: string) => Number((weeks.match(/\d+/) ?? ["0"])[0]);
/** Shorten a sentence to its first clause ("Phase 1 review: demo..." -> "Phase 1 review"). */
export const clause = (text?: string, max = 70) => {
  if (!text) return undefined;
  const head = text.split(/(?<!\d)[:;.](?!\d)|, (?=and |then |or )| — /)[0].trim();
  if (head.length <= max) return head;
  const cut = head.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,\s]+$/, "") + "…";
};

/**
 * Group a course's weeks into months (ceil(week / 4)). Courses shorter than 8 weeks are grouped by phase,
 * labelled with their own week ranges, so no month is invented.
 */
export function journeyFromPhases(phases: CurriculumPhase[], opts: { milestones?: Milestone[] } = {}): JourneyStep[] {
  const weeks = phases.flatMap((phase) => phase.items.map((week) => ({ ...week, phase })));
  if (!weeks.length) return [];
  const total = Math.max(...weeks.map((w) => w.week));
  const byMonth = total >= 8;
  const groups = new Map<number, typeof weeks>();
  for (const w of weeks) {
    const key = byMonth ? Math.ceil(w.week / 4) : phases.indexOf(w.phase) + 1;
    groups.set(key, [...(groups.get(key) ?? []), w]);
  }
  return [...groups.entries()].sort((a, b) => a[0] - b[0]).map(([key, items]) => {
    const from = Math.min(...items.map((w) => w.week));
    const to = Math.max(...items.map((w) => w.week));
    const phaseList = [...new Set(items.map((w) => w.phase))];
    const ending = phaseList.filter((phase) => Math.max(...phase.items.map((w) => w.week)) <= to);
    const shipped = [...items].reverse().find((w) => w.ship || w.lab);
    const career = opts.milestones?.filter((m) => { const s = firstWeek(m.weeks); return s >= from && s <= to; }).map((m) => m.milestone);
    return {
      id: `step-${key}`,
      label: byMonth ? `Month ${key}` : `Stage ${key}`,
      span: from === to ? `Week ${from}` : `Weeks ${from}–${to}`,
      modules: phaseList.map((phase) => phase.title.replace(/^Month \d+\s*·\s*/, "")),
      learn: items.map((w) => w.title).slice(0, 4),
      build: clause(shipped?.ship ?? shipped?.lab, 90),
      unlock: ending.length ? clause(ending[ending.length - 1].after, 130) : undefined,
      milestone: career?.length ? career.map((m) => clause(m, 70)).join(" · ") : ending.length ? clause(ending[ending.length - 1].checkpoint, 70) : undefined
    };
  });
}
