"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Flag, Hammer, Rocket, Target, Unlock, UserRound } from "lucide-react";
import type { JourneyStep } from "@/lib/journey";
import { PLACEMENT_URL } from "@/config/placement";

type Props = {
  /** Lead-sheet course value (stable). */
  course: string;
  title: ReactNode;
  objective: string;
  duration: string;
  steps: JourneyStep[];
  ctaPrefix: string;
  id?: string;
  /** Program-specific career prep line (only where the program page states it). */
  careerPrep?: string;
};

/**
 * Career journey simulation: a month-by-month timeline where a learner marker moves as you scroll or click.
 * Each stop shows what you learn, build and unlock, plus the career milestone, and it always ends at job-ready.
 */
export function CareerJourney({ course, title, objective, duration, steps, ctaPrefix, id = "journey", careerPrep }: Props) {
  const all = [...steps, { id: "step-ready", label: "Job-ready", modules: [], learn: [] } as JourneyStep];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const railRef = useRef<HTMLOListElement | null>(null);
  const [markerTop, setMarkerTop] = useState(0);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[];
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting);
      if (hit) setActive(Number((hit.target as HTMLElement).dataset.index));
    }, { rootMargin: "-45% 0px -45% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = refs.current[active];
    if (el) setMarkerTop(el.offsetTop + 18);
  }, [active]);

  const go = (index: number) => {
    setActive(index);
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const pct = Math.round(((active + 1) / all.length) * 100);

  return (
    <section className="ds-section ds-cj" id={id} aria-labelledby={`${id}-title`}>
      <div className="ds-wrap">
        <header className="ds-head ds-head-center">
          <div>
            <p className="ds-eyebrow">Your career journey · {duration}</p>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
        </header>
        <div className="ds-cj-goal">
          <Target size={22} aria-hidden="true" />
          <p><b>Course objective</b>{objective}</p>
        </div>

        <div className="ds-cj-progress" aria-hidden="true">
          <span className="ds-cj-level">Level {Math.min(active + 1, all.length)} / {all.length}</span>
          <div className="ds-cj-bar"><i style={{ width: `${pct}%` }} /></div>
          <span className="ds-cj-pct">{active === all.length - 1 ? "Job-ready" : `${pct}%`}</span>
        </div>
        <div className="ds-cj-chips" role="tablist" aria-label="Jump to a month">
          {all.map((step, index) => (
            <button key={step.id} type="button" role="tab" aria-selected={index === active} className={index <= active ? "is-done" : undefined} onClick={() => go(index)}>{step.label}</button>
          ))}
        </div>

        <ol className="ds-cj-rail" ref={railRef}>
          <span className="ds-cj-marker" style={{ transform: `translateY(${markerTop}px)` }} aria-hidden="true"><UserRound size={18} /></span>
          {all.map((step, index) => {
            const last = index === all.length - 1;
            return (
              <li key={step.id} ref={(el) => { refs.current[index] = el; }} data-index={index} className={`ds-cj-step${index === active ? " is-active" : ""}${index < active ? " is-done" : ""}${last ? " is-final" : ""}`} onClick={() => setActive(index)}>
                <span className="ds-cj-dot" aria-hidden="true">{last ? <Rocket size={14} /> : index + 1}</span>
                <div className="ds-cj-card">
                  <p className="ds-cj-when"><b>{step.label}</b>{step.span && <span>{step.span}</span>}</p>
                  {last ? (
                    <>
                      <h3>Portfolio, mock interviews, job-ready.</h3>
                      <ul className="ds-cj-rows">
                        <li><Hammer size={16} aria-hidden="true" /><span><small>Portfolio</small>Your shipped projects, on GitHub and in an interview story</span></li>
                        <li><BookOpen size={16} aria-hidden="true" /><span><small>Mock interviews</small>{careerPrep ?? "Practice interview rounds on CareerOS"}</span></li>
                        <li><Flag size={16} aria-hidden="true" /><span><small>Placement support</small>Live openings and a job tracker on the <a href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">placement portal (CareerOS) <ArrowUpRight size={12} aria-hidden="true" /></a></span></li>
                      </ul>
                      <p className="ds-cj-note">Placement support, not a guarantee. Outcomes depend on each learner and the job market.</p>
                      <button type="button" className="ds-btn ds-btn-primary" data-dm-lead data-course={course} data-cta={`${ctaPrefix} journey - Plan my journey`}>Plan my journey on a free call <ArrowRight size={16} aria-hidden="true" /></button>
                    </>
                  ) : (
                    <>
                      <h3>{step.modules.join(" + ")}</h3>
                      <ul className="ds-cj-rows">
                        {step.learn.length > 0 && <li><BookOpen size={16} aria-hidden="true" /><span><small>Learn</small>{step.learn.join(" · ")}</span></li>}
                        {step.build && <li><Hammer size={16} aria-hidden="true" /><span><small>Build</small>{step.build}</span></li>}
                        {step.unlock && <li className="ds-cj-unlock"><Unlock size={16} aria-hidden="true" /><span><small>Skill unlocked</small>{step.unlock}</span></li>}
                        {step.milestone && <li className="ds-cj-mile"><Flag size={16} aria-hidden="true" /><span><small>Career milestone</small>{step.milestone}</span></li>}
                      </ul>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
