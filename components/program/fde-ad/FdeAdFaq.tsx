"use client";

import { useState } from "react";
import type { FdeFaq } from "@/config/fde";

export function FdeAdFaq({ faqs }: { faqs: FdeFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="fde-ad-faq-list">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        const id = `fde-ad-faq-${index}`;
        return (
          <div key={faq.q} className={`fde-ad-faq-item${expanded ? " is-open" : ""}`}>
            <button
              type="button"
              className="fde-ad-faq-q"
              aria-expanded={expanded}
              aria-controls={id}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="fde-ad-faq-num">{String(index + 1).padStart(2, "0")}</span>
              <span>{faq.q}</span>
            </button>
            <div id={id} hidden={!expanded} className="fde-ad-faq-a">
              <p>
                {faq.a}
                {faq.link ? <> <a href={faq.link.href}>{faq.link.label}</a>.</> : null}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
