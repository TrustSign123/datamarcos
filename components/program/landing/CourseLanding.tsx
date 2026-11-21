import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, Linkedin, PhoneCall, Rocket, RotateCcw, ShieldCheck, UsersRound, X } from "lucide-react";
import { FeesEnrolment } from "@/components/program/FeesEnrolment";
import { ViewFeesLink } from "@/components/program/ViewFeesLink";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeCurriculum, type CurriculumPhase } from "@/components/program/fde/FdeCurriculum";
import { ToolWall, type ToolGroup } from "@/components/program/ToolWall";
import { RelatedGuides } from "@/components/guides/RelatedGuides";
import { CareerJourney } from "@/components/ds/CareerJourney";
import { LearnerProof, RiskStrip } from "@/components/ds/CourseTrust";
import { CareerOSJourney } from "@/components/ds/CareerOSJourney";
import type { JourneyStep } from "@/lib/journey";
import { DEEPESH_LINKEDIN } from "@/config/home";
import { APPLY_FEE_INTRO, type FeeSlug } from "@/config/fees";
import { PLACEMENT_LABEL, PLACEMENT_URL } from "@/config/placement";
import { NEXT_COHORT_LONG } from "@/config/cohort";
import { faqsPointingToFees } from "@/lib/geo";

export type LandingFaq = { q: string; a: string; link?: { href: string; label: string } };
export type LandingLevel = { level: string; who: string; next: string };

/**
 * One course landing in the FDE structure. Every string is passed in from the course's own config,
 * so the layout is shared and the content stays each program's own.
 */
export type CourseLandingProps = {
  /** Lead-sheet course value (stable). */
  course: string;
  feeSlug?: FeeSlug;
  /** Short name for CTAs, nav and analytics labels. */
  name: string;
  fullTitle: string;
  kicker: string;
  title: React.ReactNode;
  leadLong: string;
  leadShort: string;
  brochureHref: string;
  brochureSrc: string;
  brochureCover?: string;
  media: React.ReactNode;
  facts: { dt: string; dd: string }[];
  promises?: string[];
  roles?: { title: string; body?: string }[];
  rolesTitle?: React.ReactNode;
  audienceTitle?: React.ReactNode;
  audienceBody?: string;
  audience: { title: string; note?: string }[];
  levels: LandingLevel[];
  transitions?: { from: string; to: string; why?: string }[];
  fitFor: string[];
  notFor: string[];
  admission?: { step: string; body: string }[];
  prereqNote?: string;
  journey: { duration: string; title: React.ReactNode; objective: string; steps: JourneyStep[]; careerPrep?: string };
  curriculum: { eyebrow: string; title: React.ReactNode; phases?: CurriculumPhase[]; custom?: React.ReactNode };
  projects: { code?: string; name: string; meta?: string; brief: string; stack?: string[] }[];
  projectsTitle?: React.ReactNode;
  toolGroups?: ToolGroup[];
  faqs: LandingFaq[];
  objections?: { q: string; a: string }[];
  /** Skills and work products (not outcomes promises). Shown when there are no role cards. */
  outcomes?: string[];
  /** Format and schedule paragraphs. */
  format?: { title: React.ReactNode; paragraphs: string[] };
  india: boolean;
  apply: { eyebrow: string; title: React.ReactNode; body: string; bullets: string[]; formTitle: string; submitLabel: string; trust: string[]; successBody: string };
  relatedGuides?: string[];
  related?: { href: string; title: string; blurb: string }[];
};

function Head({ eyebrow, title, body, id, align = "center" }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; id: string; align?: "center" | "left" }) {
  return (
    <header className={`ds-head ds-head-${align}`}>
      <div>
        <p className="ds-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {body && <p className="ds-sub">{body}</p>}
      </div>
    </header>
  );
}

function FaqAnswer({ faq }: { faq: LandingFaq }) {
  if (!faq.link) return <p>{faq.a}</p>;
  if (!faq.a.includes(faq.link.label)) return <><p>{faq.a}</p><p><Link href={faq.link.href}>{faq.link.label} <ArrowRight size={14} aria-hidden="true" /></Link></p></>;
  const [before, after] = faq.a.split(faq.link.label);
  return <p>{before}<Link href={faq.link.href}>{faq.link.label}</Link>{after}</p>;
}

export function CourseLanding(p: CourseLandingProps) {
  const lead = (label: string, cta: string, variant = "primary", extra = "") => (
    <a className={`ds-btn ds-btn-${variant}${extra}`} href="#apply" data-dm-lead data-course={p.course} data-cta={`${p.name} ${cta}`}>{label} <ArrowRight size={17} aria-hidden="true" /></a>
  );
  const syllabus = (cta: string, variant = "ghost", label = "Download syllabus") => (
    <a className={`ds-btn ds-btn-${variant}`} href={p.brochureHref} data-dm-download data-file={p.brochureHref} data-course={p.course} data-cta={`${p.name} ${cta}`}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>
  );
  const nav: FdeNavItem[] = [
    { id: "fit", label: "Who it's for" },
    { id: "mentor", label: "Mentor" },
    { id: "learner-stories", label: "Learners" },
    { id: "journey", label: "Journey" },
    { id: "curriculum", label: "Curriculum" },
    { id: "projects", label: "Projects" },
    { id: "placement", label: "Placement" },
    ...(p.feeSlug ? [{ id: "fees", label: "Fees" }] : []),
    { id: "faq", label: "FAQ" }
  ];
  const successLinks = [{ label: "Download the brochure", href: p.brochureHref, download: true }];

  return (
    <article className="ds-fde ds-course">
      {/* 1. HERO: sell the career */}
      <section className="ds-hero ds-fde-hero" id="top" aria-labelledby="course-title">
        <div className="ds-wrap ds-hero-grid">
          <div className="ds-hero-copy">
            <nav className="ds-crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li aria-current="page">{p.fullTitle}</li>
              </ol>
            </nav>
            <p className="ds-kicker"><span className="ds-dot" aria-hidden="true" /> {p.kicker}</p>
            <h1 id="course-title">{p.title}</h1>
            <p className="ds-lead"><span className="ds-lead-long">{p.leadLong}</span><span className="ds-lead-short">{p.leadShort}</span></p>
            <div className="ds-actions">
              <a className="ds-btn ds-btn-primary ds-btn-lg" href="#fit">Is this for you? <ArrowRight size={18} aria-hidden="true" /></a>
              {syllabus("hero (syllabus)")}
            </div>
            <div className="ds-hero-links">
              {lead("Talk to a counsellor", "hero (counsellor)", "ghost")}
              {p.feeSlug && <ViewFeesLink />}
              <a className="ds-link" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">{PLACEMENT_LABEL} <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="ds-course-media">{p.media}</div>
        </div>
        <div className="ds-wrap">
          <dl className="ds-facts">{p.facts.map((f) => <div key={f.dt}><dt>{f.dt}</dt><dd>{f.dd}</dd></div>)}</dl>
        </div>
      </section>

      <FdeSectionNav items={nav} course={p.course} brand={<>{p.name}</>} ctaPrefix={p.name} />

      {/* 2. ROLES: what this unlocks */}
      {p.roles && p.roles.length > 0 && (
        <section className="ds-section ds-section-tight" id="roles" aria-labelledby="course-roles-title">
          <div className="ds-wrap">
            <Head id="course-roles-title" eyebrow="Roles you can target" title={p.rolesTitle ?? <>Where this <em>can take you.</em></>} />
            <ul className="ds-rolecards">{p.roles.map((r, i) => <li key={r.title}><span>{String(i + 1).padStart(2, "0")}</span><b>{r.title}</b>{r.body && <small>{r.body}</small>}</li>)}</ul>
            <p className="ds-fine ds-center">Titles vary by company. Role readiness, not a placement, salary or hike guarantee.</p>
          </div>
        </section>
      )}

      {p.outcomes && p.outcomes.length > 0 && (
        <section className="ds-section ds-section-tight" id="outcomes" aria-labelledby="course-out-title">
          <div className="ds-wrap">
            <Head id="course-out-title" eyebrow="Outcomes" title={<>What you will be able <em>to do.</em></>} body="Skills and work products from the program, not placement, salary or promotion promises." />
            <ul className="ds-rolecards">{p.outcomes.map((o, i) => <li key={o}><span>{String(i + 1).padStart(2, "0")}</span><small>{o}</small></li>)}</ul>
          </div>
        </section>
      )}

      {/* 3. IS THIS FOR YOU? audience, readiness levels, fit */}
      <section className="ds-section ds-soft" id="fit" aria-labelledby="course-fit-title">
        <div className="ds-wrap">
          <Head id="course-fit-title" eyebrow="Is this for you?" title={p.audienceTitle ?? <>Is this for you? <em>Start from your role.</em></>} body={p.audienceBody} />
          <ul className="ds-aud">{p.audience.map((a) => <li key={a.title}><Check size={16} aria-hidden="true" /><span><b>{a.title}</b>{a.note && <small>{a.note}</small>}</span></li>)}</ul>
          <ol className="ds-levels" aria-label="Readiness levels">
            {p.levels.map((level, index) => (
              <li key={level.level} className={`ds-level ds-level-${index + 1}`}>
                <span className="ds-level-n">{index + 1}</span>
                <b>{level.level}</b>
                <small>{level.who}</small>
                <span>{level.next}</span>
              </li>
            ))}
          </ol>
          {p.transitions && p.transitions.length > 0 && (
            <ul className="ds-transitions">
              {p.transitions.map((j) => (
                <li key={j.from}>
                  <p className="ds-tr-from"><small>From</small><b>{j.from}</b></p>
                  <ArrowRight size={18} aria-hidden="true" />
                  <p className="ds-tr-to"><small>To</small><b>{j.to}</b></p>
                  {j.why && <p className="ds-tr-why">{j.why}</p>}
                </li>
              ))}
            </ul>
          )}
          <div className="ds-fitgrid">
            <div className="ds-card"><h3>A strong fit if</h3><ul className="ds-checks">{p.fitFor.map((f) => <li key={f}>{f}</li>)}</ul></div>
            <div className="ds-card"><h3>Not the right fit if</h3><ul className="ds-crosses">{p.notFor.map((f) => <li key={f}><X size={15} aria-hidden="true" />{f}</li>)}</ul></div>
            <div className="ds-card">
              <h3>{p.admission ? "How admission works" : "Not sure yet?"}</h3>
              {p.admission
                ? <ol className="ds-steps">{p.admission.map((a) => <li key={a.step}><b>{a.step}</b><small>{a.body}</small></li>)}</ol>
                : <p className="ds-muted">A counsellor checks your background and goals on a free 15-minute call and tells you honestly if this is the right course.</p>}
              {p.prereqNote && <p className="ds-fine">{p.prereqNote}</p>}
            </div>
          </div>
          <p className="ds-soft-cta">{lead("Check my fit on a free call", "fit (counsellor)", "primary")}</p>
        </div>
      </section>

      {/* 7. MENTOR */}
      <section className="ds-section ds-soft" id="mentor" aria-labelledby="course-mentor-title">
        <div className="ds-wrap">
          <Head id="course-mentor-title" eyebrow="Your mentor" title={<>Learn from <em>a practitioner.</em></>} />
          <div className="ds-mentors ds-mentors-fde">
            <article className="ds-mentor ds-mentor-lead">
              <div className="ds-mentor-photo"><Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={600} height={720} sizes="(max-width: 760px) 80vw, 340px" /></div>
              <div className="ds-mentor-copy">
                <span className="ds-tag">Founder &amp; lead mentor</span>
                <h3>Deepesh Mishra</h3>
                <p className="ds-mentor-role">Solution Architect · Corporate Trainer · BITS Pilani alumnus</p>
                <p>18+ years in technology. Has trained 25,000+ professionals across 200+ organizations, live.</p>
                <div className="ds-row"><a className="ds-btn ds-btn-ghost" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> Recommendations on LinkedIn</a></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 8. PROOF: why us + learner stories, right after the mentor */}
      <LearnerProof course={p.course} ctaPrefix={p.name} courseName={p.name} />

      {/* 4. CAREER JOURNEY */}
      <CareerJourney course={p.course} ctaPrefix={p.name} duration={p.journey.duration} title={p.journey.title} objective={p.journey.objective} steps={p.journey.steps} careerPrep={p.journey.careerPrep} />

      {/* 5. CURRICULUM */}
      <section className="ds-section" id="curriculum" aria-labelledby="course-curr-title">
        <div className="ds-wrap">
          <Head id="course-curr-title" eyebrow={p.curriculum.eyebrow} title={p.curriculum.title} body="Pick a phase, then open any week." />
          {p.curriculum.phases ? <div className="ds-curr"><FdeCurriculum phases={p.curriculum.phases} /></div> : p.curriculum.custom}
          <p className="ds-center">{syllabus("curriculum (syllabus)", "navy", "Get the full syllabus PDF")}</p>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <section className="ds-section ds-navy" id="projects" aria-labelledby="course-proj-title">
        <div className="ds-wrap">
          <Head id="course-proj-title" eyebrow="What you build" title={p.projectsTitle ?? <>Real projects. <em>Portfolio-ready.</em></>} />
          <ul className="ds-projects">
            {p.projects.map((proj, i) => (
              <li key={proj.name}>
                <span className="ds-proj-code">{proj.code ?? String(i + 1).padStart(2, "0")}</span>
                {proj.meta && <small>{proj.meta}</small>}
                <h3>{proj.name}</h3>
                <p>{proj.brief}</p>
                {proj.stack && <ul className="ds-proj-stack">{proj.stack.slice(0, 6).map((s) => <li key={s}>{s}</li>)}</ul>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {p.toolGroups && p.toolGroups.length > 0 && (
        <section className="ds-section ds-section-tight" id="tools" aria-labelledby="course-tools-title">
          <div className="ds-wrap">
            <Head id="course-tools-title" eyebrow="The toolkit" title={<>Tools you <em>actually use.</em></>} />
            <ToolWall groups={p.toolGroups} />
          </div>
        </section>
      )}

      {p.format && (
        <section className="ds-section ds-section-tight" id="format" aria-labelledby="course-format-title">
          <div className="ds-wrap ds-format">
            <Head id="course-format-title" eyebrow="Format and schedule" title={p.format.title} align="left" />
            <div>{p.format.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
          </div>
        </section>
      )}

      {/* 10. PLACEMENT JOURNEY (CareerOS) + RISK REDUCERS + FEES */}
      <CareerOSJourney id="placement" course={p.course} ctaPrefix={`${p.name} CareerOS`} />
      {p.feeSlug && (
        <>
          <RiskStrip course={p.course} ctaPrefix={p.name} india={p.india} />
          <FeesEnrolment slug={p.feeSlug} />
        </>
      )}

      {/* 11. OBJECTIONS + FAQ */}
      <section className="ds-section ds-soft" id="faq" aria-labelledby="course-faq-title">
        <div className="ds-wrap ds-faq-grid">
          <div>
            <Head id="course-faq-title" eyebrow="FAQ" title={<>Questions, <em>answered.</em></>} align="left" />
            {p.objections && p.objections.length > 0 ? <ul className="ds-worries">{p.objections.map((o) => <li key={o.q}><b>{o.q}</b><span>{o.a}</span></li>)}</ul> : <p className="ds-sub">Can&rsquo;t find yours? A counsellor will answer it on a short call.</p>}
            {lead("Ask a counsellor", "FAQ (counsellor)", "navy")}
          </div>
          <div className="ds-faq">
            {faqsPointingToFees(p.faqs).map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary><span>{faq.q}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
                <FaqAnswer faq={faq} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GATED BROCHURE */}
      <section className="ds-section ds-section-tight" id="brochure" aria-labelledby="course-bro-title">
        <div className="ds-wrap">
          <Head id="course-bro-title" eyebrow="The full program guide" title={<>Read the <em>syllabus.</em></>} body="Modules, projects, tools and format in one PDF." />
          <div className="ds-pdf"><GatedBrochureFrame src={p.brochureSrc} title={`${p.fullTitle} brochure`} course={p.course} cover={p.brochureCover} /></div>
        </div>
      </section>
      {p.relatedGuides && p.relatedGuides.length > 0 && <RelatedGuides slugs={p.relatedGuides} wrapClassName="ds-wrap" />}

      {/* 13. FINAL CTA / APPLY */}
      <section className="ds-apply" id="apply" aria-labelledby="course-apply-title">
        <div className="ds-wrap ds-apply-grid">
          <div>
            <p className="ds-eyebrow ds-eyebrow-light">{p.apply.eyebrow}</p>
            <h2 id="course-apply-title">{p.apply.title}</h2>
            <p>{p.apply.body}</p>
            <ul className="ds-apply-list">
              {p.apply.bullets.map((b) => <li key={b}><Rocket size={17} aria-hidden="true" /> {b}</li>)}
              <li><UsersRound size={17} aria-hidden="true" /> Live, mentor-led sessions with Deepesh Mishra</li>
              {!p.apply.bullets.some((b) => /guarantee/i.test(b)) && <li><ShieldCheck size={17} aria-hidden="true" /> Placement support, not a job guarantee</li>}
              <li><RotateCcw size={17} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: ask within 7 days for a refund.</span></li>
              <li><PhoneCall size={17} aria-hidden="true" /> Next cohort starts {NEXT_COHORT_LONG}</li>
            </ul>
            {syllabus("apply (syllabus)", "outline-light", "Prefer to read first? Get the syllabus")}
          </div>
          <InlineLeadForm
            idPrefix={`${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-apply`}
            course={p.course}
            lockCourse
            cta={`${p.name} inline form (apply section)`}
            eyebrow={p.fullTitle}
            title={p.apply.formTitle}
            intro={APPLY_FEE_INTRO}
            submitLabel={p.apply.submitLabel}
            trust={p.apply.trust}
            successTitle="Thanks{first}! Request received."
            successBody={p.apply.successBody}
            successLinks={successLinks}
            minHeight={560}
          />
        </div>
      </section>

      {p.related && p.related.length > 0 && (
        <section className="ds-section ds-section-tight" aria-labelledby="course-related-title">
          <div className="ds-wrap">
            <Head id="course-related-title" eyebrow="Related programs" title={<>You may also <em>look at.</em></>} />
            <ul className="ds-related">{p.related.map((r) => <li key={r.href}><Link href={r.href}><b>{r.title}</b><span>{r.blurb}</span><ArrowRight size={16} aria-hidden="true" /></Link></li>)}</ul>
          </div>
        </section>
      )}
    </article>
  );
}
