"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Briefcase, Check, FileText, GitBranch, MessageSquare, Send, Sparkles, Upload, Columns3 } from "lucide-react";
import Link from "next/link";
import { PLACEMENT_URL } from "@/config/placement";
import { PLACEMENTS_PATH } from "@/config/placements";

/**
 * CareerOS placement journey: an interactive scroll story of what a learner does on CareerOS after signing up.
 * Laptop/phone frames hold real screenshots of career.datamarcos.com (public pages, captured 17 Nov 2026).
 * The animated cards are illustrations of each step (marked as such) — no real company, score or result is implied.
 */
const steps = [
  { n: 1, icon: Upload, title: "Upload your resume", body: "Create your profile and add your resume and target roles." },
  { n: 2, icon: Briefcase, title: "Get matched to live jobs", body: "Public AI and data openings, checked against your skills every day." },
  { n: 3, icon: GitBranch, title: "Raise your readiness", body: "Resume and GitHub readiness checks show the gaps to fix." },
  { n: 4, icon: MessageSquare, title: "Practise with an AI interviewer", body: "Role-specific questions, your answers, a score and notes." },
  { n: 5, icon: Send, title: "Apply to the right roles", body: "Tailored materials, then you apply on the employer’s own site." },
  { n: 6, icon: Columns3, title: "Track every application", body: "Saved, applied, interviewing, offer: your pipeline in one place." }
];

function Laptop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="cos-laptop">
      <div className="cos-laptop-screen"><span className="cos-laptop-bar" aria-hidden="true"><i /><i /><i /><em>career.datamarcos.com</em></span><Image src={src} alt={alt} width={1200} height={750} sizes="(max-width: 900px) 92vw, 560px" /></div>
      <div className="cos-laptop-base" aria-hidden="true" />
    </div>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return <div className="cos-phone"><span className="cos-phone-notch" aria-hidden="true" /><Image src={src} alt={alt} width={520} height={1125} sizes="180px" /></div>;
}

const Illus = () => <span className="cos-illus">Illustration</span>;

/** `outcomesLink` adds a "See learner outcomes" link to /placements (off on /placements itself). */
export function CareerOSJourney({ id = "careeros", variant = "full", course, ctaPrefix = "CareerOS", outcomesLink = true }: { id?: string; variant?: "full" | "compact"; course?: string; ctaPrefix?: string; outcomesLink?: boolean }) {
  const root = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const stages = Array.from(el.querySelectorAll<HTMLElement>(".cos-stage"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { stages.forEach((s) => s.classList.add("is-in")); return; }
    el.classList.add("cos-armed");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        const n = (e.target as HTMLElement).dataset.step;
        if (n) el.style.setProperty("--cos-progress", String(Number(n) / steps.length));
        el.querySelectorAll<HTMLElement>(".cos-rail li").forEach((li) => li.classList.toggle("is-on", Number(li.dataset.step) <= Number(n ?? 0)));
      });
    }, { threshold: 0.35 });
    stages.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const careerCall = (label: string, cta: string, cls = "ds-btn ds-btn-ghost") => (
    <button type="button" className={cls} data-dm-lead data-course={course} data-cta={`${ctaPrefix} ${cta}`}>{label} <ArrowRight size={16} aria-hidden="true" /></button>
  );

  return (
    <section className={`cos cos-${variant}`} id={id} aria-labelledby={`${id}-title`} ref={root}>
      <div className="ds-wrap">
        {/* HERO: the CareerOS promise */}
        <div className="cos-stage cos-hero">
          <div className="cos-hero-copy">
            <p className="cos-tag"><Sparkles size={14} aria-hidden="true" /> CareerOS — Your journey from skills to opportunities</p>
            <h2 id={`${id}-title`}>Your career journey. <em>One platform.</em></h2>
            <p className="cos-sub">From discovering opportunities to preparing for interviews, CareerOS gives you the tools to take control of your job search.</p>
            <div className="cos-actions">
              <a className="ds-btn ds-btn-primary" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">Explore CareerOS <ArrowUpRight size={16} aria-hidden="true" /></a>
              {careerCall("Book a career call", "hero - career call")}
            </div>
          </div>
          <div className="cos-hero-visual">
            <Laptop src="/images/careeros/cos-hero-desktop.webp" alt="CareerOS home page: get interview-ready and go after AI and data roles" />
            <Phone src="/images/careeros/cos-hero-mobile.webp" alt="CareerOS on a phone" />
          </div>
        </div>

        {variant === "full" && (
          <div className="cos-stage cos-problem">
            <video className="cos-gif" autoPlay muted loop playsInline poster="/images/careeros/lost-student-poster.webp" aria-label="A student wondering where to find AI jobs, whether their resume is good enough and how to prepare">
              <source src="/images/careeros/lost-student.mp4" type="video/mp4" />
            </video>
            <div>
              <p className="cos-kicker">The problem</p>
              <h3>Feeling lost about getting a job in AI?</h3>
              <ul className="cos-qs"><li>Where do I find AI jobs?</li><li>Is my resume good enough?</li><li>How do I prepare?</li></ul>
              <p className="cos-muted">Here’s what you do on CareerOS, step by step.</p>
            </div>
          </div>
        )}

        <div className="cos-steps">
          <ol className="cos-rail" aria-hidden="true">
            <span className="cos-rail-fill" />
            {steps.map((s) => <li key={s.n} data-step={s.n}><span>{s.n}</span></li>)}
          </ol>

          {steps.map((s, i) => (
            <div key={s.n} className={`cos-stage cos-step cos-step-${s.n}${i % 2 ? " is-flip" : ""}`} data-step={s.n}>
              <div className="cos-step-copy">
                <p className="cos-kicker">Step {s.n}</p>
                <h3><s.icon size={20} aria-hidden="true" /> {s.title}</h3>
                <p>{s.body}</p>
              </div>
              {variant === "full" && <div className="cos-step-visual">{visual(s.n)}</div>}
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="cos-stage cos-final">
          <h3>Ready to take the next step?</h3>
          <p>Build your profile. Discover opportunities. Prepare with AI. Track your progress.</p>
          <div className="cos-actions">
            <a className="ds-btn ds-btn-white" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">Open CareerOS <ArrowUpRight size={16} aria-hidden="true" /></a>
            {careerCall("Book a free career call", "final - career call", "ds-btn ds-btn-outline-light")}
          </div>
          {outcomesLink && <p className="cos-outcomes"><Link href={PLACEMENTS_PATH}>See learner outcomes and stories <ArrowRight size={14} aria-hidden="true" /></Link></p>}
        </div>
      </div>
      <p className="cos-disclaimer" role="note">Placement support, not a job guarantee.</p>
    </section>
  );
}

function visual(n: number) {
  switch (n) {
    case 1:
      return (
        <div className="cos-vis">
          <Laptop src="/images/careeros/cos-how-desktop.webp" alt="CareerOS: how it works, starting with uploading your resume" />
          <div className="cos-card cos-upload"><Illus />
            <p><FileText size={18} aria-hidden="true" /> <b>my-resume.pdf</b></p>
            <div className="cos-bar"><i /></div>
            <ul className="cos-chips"><li>Python</li><li>SQL</li><li>RAG</li><li>APIs</li></ul>
            <small><Check size={13} aria-hidden="true" /> Profile ready</small>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="cos-vis cos-vis-phone">
          <Phone src="/images/careeros/cos-jobs-mobile.webp" alt="CareerOS latest AI and data jobs, pulled from public job feeds" />
          <div className="cos-jobs"><Illus />
            {[["Data Engineer", "3 of 4 skills"], ["GenAI Engineer", "4 of 5 skills"], ["Forward Deployed Engineer", "3 of 5 skills"]].map(([role, match], i) => (
              <div className="cos-card cos-job" key={role} style={{ ["--i" as string]: i }}><b>{role}</b><span>Public posting · Remote / hybrid</span><em>{match} match</em></div>
            ))}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="cos-vis">
          <div className="cos-card cos-meters"><Illus />
            {[["Resume readiness", 82, "#1557e5"], ["GitHub readiness", 76, "#0d9488"]].map(([label, v, c]) => (
              <div className="cos-meter" key={label as string}><p><b>{label}</b><em>{v}</em></p><div className="cos-meter-track"><i style={{ ["--v" as string]: `${v}%`, background: c as string }} /></div></div>
            ))}
            <ul className="cos-fixes"><li><Check size={13} aria-hidden="true" /> Add a README to 2 repos</li><li><Check size={13} aria-hidden="true" /> Quantify 3 resume bullets</li></ul>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="cos-vis">
          <Laptop src="/images/careeros/cos-interview-desktop.webp" alt="CareerOS AI mock interview: practise the conversation before you book one" />
          <div className="cos-card cos-chat"><Illus />
            <p className="cos-msg cos-ai">How would you check that a RAG answer is grounded in the source?</p>
            <p className="cos-msg cos-me">I’d compare each claim with the retrieved chunks and score faithfulness…</p>
            <p className="cos-msg cos-ai cos-typing"><span /><span /><span /></p>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="cos-vis">
          <div className="cos-apply"><Illus />
            {["GenAI Engineer", "Data Engineer"].map((role, i) => (
              <div className="cos-card cos-applycard" key={role} style={{ ["--i" as string]: i }}>
                <b>{role}</b><span>Tailored resume + cover letter ready</span>
                <span className="cos-applybtn"><em>Apply on employer site</em><strong><Check size={14} aria-hidden="true" /> Applied</strong></span>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className="cos-vis">
          <div className="cos-card cos-kanban"><Illus />
            {["Applied", "Interview", "Offer"].map((col) => <div className="cos-col" key={col}><p>{col}</p></div>)}
            <div className="cos-kcard cos-k1"><b>GenAI Engineer</b></div>
            <div className="cos-kcard cos-k2"><b>Data Engineer</b></div>
            <div className="cos-kcard cos-k3"><b>AI Solutions Eng.</b></div>
          </div>
        </div>
      );
  }
}
