"use client";

import { useState } from "react";
import { fdePhases } from "@/config/fde";

export function FdeAdCurriculum() {
  const [active, setActive] = useState(fdePhases[0]?.id ?? "");
  const phase = fdePhases.find((item) => item.id === active) ?? fdePhases[0];
  if (!phase) return null;

  return (
    <div className="fde-ad-curr-layout">
      <nav className="fde-ad-curr-toc" aria-label="Curriculum phases">
        {fdePhases.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === phase.id ? "is-active" : undefined}
            onClick={() => setActive(item.id)}
            aria-current={item.id === phase.id ? "true" : undefined}
          >
            <span className="fde-ad-curr-toc-kicker">Phase {item.number}</span>
            <strong>{item.title}</strong>
            <small>{item.weeks}</small>
          </button>
        ))}
      </nav>
      <div className="fde-ad-curr-main">
        <div className="fde-ad-curr-head">
          <span>Phase {phase.number} · {phase.title}</span>
          <em>{phase.weeks}</em>
        </div>
        <div className="fde-ad-curr-body">
          <p className="fde-ad-curr-summary">{phase.summary}</p>
          <p className="fde-ad-curr-after"><strong>You will be able to:</strong> {phase.after}</p>
          <div className="fde-ad-curr-weeks">
            {phase.items.map((week) => (
              <article key={week.week}>
                <h3>Week {week.week}: {week.title}</h3>
                <ul>
                  {week.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
                <p className="fde-ad-curr-meta"><strong>Lab:</strong> {week.lab}</p>
                <p className="fde-ad-curr-meta"><strong>You ship:</strong> {week.ship}</p>
                <p className="fde-ad-curr-meta"><strong>Tools:</strong> {week.tools}</p>
              </article>
            ))}
          </div>
          <p className="fde-ad-curr-check"><strong>Checkpoint:</strong> {phase.checkpoint}</p>
        </div>
      </div>
    </div>
  );
}
