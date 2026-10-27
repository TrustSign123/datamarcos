"use client";

import { useState } from "react";
import { Flag } from "lucide-react";
/** Loose shape so other programs can reuse the roadmap; FDE's Phase/Week types satisfy it. */
export type CurriculumWeek = { week: number; title: string; topics: string[]; lab?: string; ship?: string; tools?: string };
export type CurriculumPhase = { id: string; number: string; title: string; weeks: string; summary: string; checkpoint?: string; after?: string; items: CurriculumWeek[] };
type Phase = CurriculumPhase;

/** Interactive week-by-week roadmap: phase timeline tabs + week accordions. All content stays in the HTML for SEO. */
export function FdeCurriculum({ phases }: { phases: Phase[] }) {
  const [phaseId, setPhaseId] = useState(phases[0].id);
  const [openWeeks, setOpenWeeks] = useState<number[]>([phases[0].items[0].week]);
  const total = phases.reduce((sum, phase) => sum + phase.items.length, 0);

  const toggle = (week: number) => setOpenWeeks((current) => (current.includes(week) ? current.filter((w) => w !== week) : [...current, week]));
  const choose = (phase: Phase) => {
    setPhaseId(phase.id);
    setOpenWeeks([phase.items[0].week]);
  };

  return (
    <div className="fx-curr">
      <div className="fx-curr-rail" role="tablist" aria-label="Program phases">
        {phases.map((phase) => (
          <button
            key={phase.id}
            id={`fx-tab-${phase.id}`}
            role="tab"
            type="button"
            aria-selected={phaseId === phase.id}
            aria-controls={`fx-panel-${phase.id}`}
            onClick={() => choose(phase)}
            style={{ flexGrow: phase.items.length / total * 10 }}
          >
            <span className="fx-curr-bar" aria-hidden="true" />
            <small>{phase.number} · {phase.weeks}</small>
            <strong>{phase.title}</strong>
          </button>
        ))}
      </div>

      {phases.map((phase) => (
        <div key={phase.id} id={`fx-panel-${phase.id}`} role="tabpanel" aria-labelledby={`fx-tab-${phase.id}`} hidden={phaseId !== phase.id} className="fx-curr-panel">
          <aside className="fx-curr-side">
            <p className="fx-eyebrow">Phase {phase.number} · {phase.weeks}</p>
            <h3>{phase.title}</h3>
            <p>{phase.summary}</p>
            {phase.checkpoint && <div className="fx-curr-check"><Flag size={16} aria-hidden="true" /><span>{phase.checkpoint}</span></div>}
            {phase.after && <div className="fx-curr-after"><strong>After this phase you can</strong><p>{phase.after}</p></div>}
          </aside>
          <ol className="fx-weeks">
            {phase.items.map((week) => {
              const open = openWeeks.includes(week.week);
              return (
                <li key={week.week} className={open ? "is-open" : undefined}>
                  <h4>
                    <button type="button" aria-expanded={open} aria-controls={open ? `fx-week-${week.week}` : undefined} onClick={() => toggle(week.week)}>
                      <span className="fx-week-n">W{String(week.week).padStart(2, "0")}</span>
                      <span className="fx-week-t">{week.title}</span>
                      <span className="fx-week-chev" aria-hidden="true" />
                    </button>
                  </h4>
                  {open && <div id={`fx-week-${week.week}`} className="fx-week-body">
                    <ul>{week.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                    {week.lab && <p className="fx-week-meta"><b>Lab</b>{week.lab}</p>}
                    {week.ship && <p className="fx-week-meta"><b>You ship</b>{week.ship}</p>}
                    {week.tools && <p className="fx-week-meta"><b>Tools</b>{week.tools}</p>}
                  </div>}
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
