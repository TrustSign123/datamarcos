"use client";

import { useState } from "react";
import type { Engagement } from "@/config/fde";

/** Interactive project showcase: pick an engagement, see the brief, stack and deliverables. */
export function FdeEngagementShowcase({ engagements, demoSlot }: { engagements: Engagement[]; demoSlot?: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const item = engagements[active];
  return (
    <div className="ds-show">
      <div className="ds-show-tabs" role="tablist" aria-label="Client-style engagements">
        {engagements.map((e, i) => (
          <button key={e.code} type="button" role="tab" id={`ds-show-tab-${e.code}`} aria-selected={i === active} aria-controls="ds-show-panel" onClick={() => setActive(i)}>
            <span>{e.code}</span>
            <b>{e.name}</b>
            <small>{e.weeks}</small>
          </button>
        ))}
      </div>
      <div className="ds-show-panel" id="ds-show-panel" role="tabpanel" aria-labelledby={`ds-show-tab-${item.code}`}>
        <div className="ds-show-copy">
          <p className="ds-show-client">{item.client}</p>
          <h3>{item.name}</h3>
          <p className="ds-show-brief">{item.brief}</p>
          <p className="ds-show-label">Stack</p>
          <ul className="ds-chips ds-chips-sm">{item.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          <p className="ds-show-label">You deliver</p>
          <ul className="ds-checks">{item.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
        {demoSlot}
      </div>
    </div>
  );
}
