"use client";

import type { ReactNode } from "react";
import { LeadForm, type LeadFormProps } from "./LeadForm";
import { ShadowPortal } from "./ShadowPortal";
import { fdeInlineStyles, leadFormStyles } from "./leadStyles";

/**
 * Lead form embedded in a page section (same fields, submit and sheet columns as the popup).
 * variant="card": own header with headline + benefit bullets. variant="bare": just the form,
 * for slots that already have a heading (e.g. the FDE hero card).
 */
export function InlineLeadForm({
  variant = "card", theme = "fde", eyebrow, title, intro, benefits = [], minHeight, ...form
}: LeadFormProps & {
  variant?: "card" | "bare";
  theme?: "fde";
  eyebrow?: string;
  title?: string;
  intro?: string;
  benefits?: ReactNode[];
  /** Space reserved before the client-side form mounts, to avoid layout shift. */
  minHeight?: number;
}) {
  const css = leadFormStyles + (theme === "fde" ? fdeInlineStyles : "");
  return (
    <ShadowPortal css={css} style={minHeight ? { minHeight } : undefined}>
      <div className={variant}>
        <div className="card">
          {variant === "card" && (
            <div className="head">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h3 className="title">{title}</h3>}
              {intro && <p className="sub">{intro}</p>}
              {benefits.length > 0 && (
                <ul className="benefits">
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#ff7a3d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <div className="body"><LeadForm {...form} /></div>
        </div>
      </div>
    </ShadowPortal>
  );
}
