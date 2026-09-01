"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { readAttribution, trackEvent } from "@/lib/analytics";

export function ProgramPageTracker({ programId, programSlug, landingPage = false }: { programId: string; programSlug: string; landingPage?: boolean }) {
  useEffect(() => {
    readAttribution();
    trackEvent("program_view", { programId, programSlug, landingPage: String(landingPage) });
  }, [landingPage, programId, programSlug]);

  return null;
}

export function SkillAssessment({ programId, programSlug }: { programId: string; programSlug: string }) {
  const [scores, setScores] = useState<Record<string, number>>({});
  const questions = ["Python", "SQL", "Data pipelines", "APIs", "Cloud services", "LLM APIs"];
  const answered = Object.keys(scores).length;
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const result = useMemo(() => {
    if (answered < questions.length) return "Answer each item to see your readiness signal.";
    if (total <= 9) return "Based on your answers, this program appears to require foundation preparation.";
    if (total <= 15) return "Based on your answers, this program appears to be a good fit.";
    return "Based on your answers, this program appears to be an advanced fit.";
  }, [answered, questions.length, total]);

  useEffect(() => {
    if (answered === 1) trackEvent("skill_assessment_start", { programId, programSlug });
    if (answered === questions.length) trackEvent("skill_assessment_complete", { programId, programSlug });
  }, [answered, programId, programSlug, questions.length]);

  return (
    <div className="card">
      <h3>Are You Ready for This Program?</h3>
      <div className="readiness-grid">
        {questions.map((question) => (
          <label className="readiness-item" key={question}>
            <span>{question}</span>
            <select aria-label={`Comfort with ${question}`} value={scores[question] ?? ""} onChange={(event) => setScores({ ...scores, [question]: Number(event.target.value) })}>
              <option value="">Select</option>
              <option value="1">Foundation</option>
              <option value="2">Working</option>
              <option value="3">Advanced</option>
            </select>
          </label>
        ))}
      </div>
      <p className="assessment-result">{result}</p>
      <Link className="button secondary" href="#booking">Discuss Your Background With an Instructor</Link>
    </div>
  );
}

export function StickyProgramCTA({ programId, programSlug }: { programId: string; programSlug: string }) {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || closed) return null;

  return (
    <div className="program-sticky-cta" role="region" aria-label="Program booking shortcut">
      <span>Advanced AI Data Engineering & Agentic AI</span>
      <Link className="button primary" href="#booking" onClick={() => trackEvent("hero_cta_click", { programId, programSlug })}>Book Free Call</Link>
      <button className="button secondary sticky-close" type="button" aria-label="Dismiss sticky call to action" onClick={() => setClosed(true)}><X size={16} /></button>
    </div>
  );
}

export function LeadMagnetCTA({ programId, programSlug, brochureUrl }: { programId: string; programSlug: string; brochureUrl?: string }) {
  if (!brochureUrl) return <p className="muted-note">Program brochure will be available soon.</p>;
  return <a className="button secondary" href={brochureUrl} onClick={() => trackEvent("brochure_click", { programId, programSlug })}>Download Program Brochure</a>;
}
