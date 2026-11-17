import type React from "react";

/** Shared section heading: small eyebrow with rules, one short title, optional one-line sub. */
export function SectionHead({ id, eyebrow, title, sub, align = "center", action }: { id: string; eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; align?: "center" | "left"; action?: React.ReactNode }) {
  return (
    <header className={`ds-head ds-head-${align}${action ? " ds-head-action" : ""}`}>
      <div>
        <p className="ds-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {sub && <p className="ds-sub">{sub}</p>}
      </div>
      {action}
    </header>
  );
}
