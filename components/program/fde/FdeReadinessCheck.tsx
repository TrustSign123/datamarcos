"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { NEXT_COHORT_LONG } from "@/config/cohort";

/**
 * 3-question FDE readiness check. Purely client-side: nothing is stored or sent.
 * Levels follow the published eligibility only: ~2+ years of engineering (or strong shipped projects),
 * comfortable Python (bridge pre-work covers Python, Linux, Git, SQL), 10-14 hours a week; earlier-career
 * learners are pointed to the GenAI & Agentic AI Engineer program (FDE FAQ).
 */
type Answer = 0 | 1 | 2;
const questions: { q: string; options: [string, string, string] }[] = [
  { q: "How much hands-on engineering experience do you have?", options: ["2+ years, or strong shipped projects", "Under 2 years", "I haven’t written code yet"] },
  { q: "How comfortable are you with Python?", options: ["I use it regularly", "I code in another language (Java, JavaScript…)", "Not yet"] },
  { q: "Can you give 10–14 hours a week for 22 weeks?", options: ["Yes", "Mostly, on weekends", "Not right now"] }
];

const results = {
  ready: { level: "Ready now", title: "You look like a strong fit.", body: "Apply for the next cohort. A short diagnostic and mentor conversation confirm your seat.", cta: "Apply: request my fit call" },
  bridge: { level: "Ready with bridge pre-work", title: "You can get there before Day 1.", body: "The bridge pre-work covers Python, Linux, Git and SQL. A counsellor will check your plan with you.", cta: "Talk to a counsellor" },
  timing: { level: "Plan your start", title: "Pick the cohort that fits your calendar.", body: `The program needs about 10–14 hours a week. A counsellor can help you plan for the ${NEXT_COHORT_LONG} cohort or a later one.`, cta: "Talk to a counsellor" },
  later: { level: "Start one step earlier", title: "Begin with GenAI & Agentic AI Engineer.", body: "FDE roles expect real engineering experience. Many learners start with the GenAI program and move to FDE later.", cta: "Get advice on my path" }
};

export function FdeReadinessCheck({ course }: { course: string }) {
  const [answers, setAnswers] = useState<(Answer | null)[]>([null, null, null]);
  const done = answers.every((a) => a !== null);
  const score = answers as Answer[];
  const key: keyof typeof results = !done ? "ready" : score[0] >= 1 ? "later" : score[2] === 2 ? "timing" : score[1] === 0 && score[2] === 0 ? "ready" : "bridge";
  const result = results[key];
  const set = (qi: number, value: Answer) => setAnswers((current) => current.map((a, i) => (i === qi ? value : a)));
  return (
    <div className="ds-quiz">
      <ol className="ds-quiz-qs">
        {questions.map((item, qi) => (
          <li key={item.q}>
            <fieldset>
              <legend><span>{qi + 1}</span>{item.q}</legend>
              <div className="ds-quiz-opts">
                {item.options.map((option, oi) => (
                  <label key={option} className={answers[qi] === oi ? "is-on" : undefined}>
                    <input type="radio" name={`fde-ready-${qi}`} checked={answers[qi] === oi} onChange={() => set(qi, oi as Answer)} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
      <div className={`ds-quiz-result${done ? ` is-${key}` : ""}`} aria-live="polite">
        {done ? (
          <>
            <span className="ds-tag">{result.level}</span>
            <h3>{result.title}</h3>
            <p>{result.body}</p>
            <div className="ds-row">
              <a className="ds-btn ds-btn-primary" href="#apply" data-dm-lead data-course={key === "later" ? undefined : course} data-cta={`FDE readiness check - ${result.level}`}>{result.cta} <ArrowRight size={16} aria-hidden="true" /></a>
              {key === "later" && <Link className="ds-btn ds-btn-ghost" href="/programs/genai-agentic-ai-engineer">See GenAI program</Link>}
              <button type="button" className="ds-btn ds-btn-ghost" onClick={() => setAnswers([null, null, null])}><RotateCcw size={15} aria-hidden="true" /> Retake</button>
            </div>
          </>
        ) : (
          <>
            <span className="ds-tag">Readiness check</span>
            <h3>Answer 3 quick questions.</h3>
            <p>See where you stand: ready now, ready with bridge pre-work, or best to start one step earlier. Nothing is saved.</p>
          </>
        )}
      </div>
    </div>
  );
}
