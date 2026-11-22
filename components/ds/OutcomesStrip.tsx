import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, ShieldCheck } from "lucide-react";
import { outcomeCards, PLACEMENTS_PATH, stripLearnerIds, type OutcomeCard } from "@/config/placements";

/**
 * Compact placement proof, reused on the homepage and every course page (one component, two layouts):
 *  - variant "band":   learner chips + one line on the CareerOS method + link to /placements (homepage, course tops)
 *  - variant "landed": short "where our learners work today" list, placed next to Fees & enrolment
 * Facts come only from config/placements.ts (each entry names its source). No fees, no placement %, no guarantees.
 */
const DISCLAIMER = "Placement support, not a job guarantee.";

const learners = stripLearnerIds.map((id) => outcomeCards.find((c) => c.id === id)).filter((c): c is OutcomeCard => Boolean(c));

function Face({ c, size }: { c: OutcomeCard; size: number }) {
  return c.image
    ? <Image className="os-face" src={c.image} alt="" width={size} height={size} sizes={`${size}px`} style={{ width: size, height: size }} />
    : <span className="os-face os-face-initials" aria-hidden="true" style={{ width: size, height: size }}>{c.initials}</span>;
}

export function OutcomesStrip({ variant = "band", course, ctaPrefix = "Outcomes" }: { variant?: "band" | "landed"; course?: string; ctaPrefix?: string }) {
  if (variant === "landed") {
    return (
      <section className="os-landed" aria-labelledby={`os-landed-${ctaPrefix.replace(/\W+/g, "-")}`}>
        <div className="ds-wrap">
          <div className="os-landed-card">
            <div className="os-landed-copy">
              <p className="ds-eyebrow">Before you enrol</p>
              <h2 id={`os-landed-${ctaPrefix.replace(/\W+/g, "-")}`}>Where our learners <em>work today.</em></h2>
              <p>Real Datamarcos learners, with roles as their own LinkedIn shows. The same career track and CareerOS support come with this program.</p>
              <p className="os-note"><ShieldCheck size={15} aria-hidden="true" /> {DISCLAIMER}</p>
              <Link className="ds-link" href={PLACEMENTS_PATH} data-cta={`${ctaPrefix} landed - outcomes`}>See all learner outcomes <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>
            <ul className="os-landed-list">
              {learners.map((c) => (
                <li key={c.id}>
                  <Face c={c} size={40} />
                  <span><b>{c.name}</b><small>{c.role}</small></span>
                  <strong>{c.orgShort ?? c.org}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="os-band" aria-label="Learner outcomes">
      <div className="ds-wrap os-band-inner">
        <div className="os-band-head">
          <p className="os-kicker"><BadgeCheck size={15} aria-hidden="true" /> Learner outcomes</p>
          <p className="os-title">Where our learners work today</p>
        </div>
        <ul className="os-chips">
          {learners.map((c) => (
            <li key={c.id}><Face c={c} size={34} /><span><b>{c.name}</b><small>{c.orgShort ?? c.org}</small></span></li>
          ))}
        </ul>
        <div className="os-band-foot">
          <p className="os-method"><Briefcase size={15} aria-hidden="true" /> <span><b>How:</b> live projects, a verified capstone, then CareerOS for job matching, AI mock interviews and application tracking.</span></p>
          <p className="os-note"><ShieldCheck size={15} aria-hidden="true" /> {DISCLAIMER}</p>
          <Link className="ds-link" href={PLACEMENTS_PATH} data-course={course} data-cta={`${ctaPrefix} band - outcomes`}>See learner outcomes <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
