import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, CalendarClock, Check, Linkedin, Rocket, RotateCcw, ShieldCheck, UsersRound } from "lucide-react";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { FdeSectionNav, type FdeNavItem } from "@/components/program/fde/FdeSectionNav";
import { FdeCurriculum } from "@/components/program/fde/FdeCurriculum";
import { ToolWall } from "@/components/program/ToolWall";
import { DEEPESH_LINKEDIN } from "@/config/home";
import { APPLY_FEE_INTRO, faqsWithProgramFees, isFeeSlug } from "@/config/fees";
import { type IntlCourse, type IntlFaq } from "@/config/intl-courses";
import { brochureHrefForMarket } from "@/config/lead";
import { site } from "@/config/site";
import { FeesEnrolment } from "@/components/program/FeesEnrolment";
import { ViewFeesLink } from "@/components/program/ViewFeesLink";
import { faqsForJsonLd } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

const nav: FdeNavItem[] = [
  { id: "outcomes", label: "Outcomes" },
  { id: "fit", label: "Who it's for" },
  { id: "curriculum", label: "Curriculum" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
  { id: "format", label: "Format" },
  { id: "mentor", label: "Mentor" },
  { id: "fees", label: "Fees" },
  { id: "faq", label: "FAQ" }
];

function jsonLdFor(course: IntlCourse, faqs: IntlFaq[]) {
  const url = `${site.url}${course.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      name: course.fullTitle,
      description: course.metaDescription,
      url,
      image: `${site.url}${course.image}`,
      inLanguage: "en",
      educationalLevel: course.educationalLevel,
      timeRequired: course.durationIso,
      coursePrerequisites: course.prereqs,
      teaches: course.teaches,
      syllabusSections: course.phases.flatMap((phase) =>
        phase.items.map((week) => ({
          "@type": "Syllabus",
          name: `Week ${week.week}: ${week.title}`,
          description: week.topics.join("; ")
        }))
      ),
      provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
      educationalCredentialAwarded: {
        "@type": "EducationalOccupationalCredential",
        name: course.credentialName,
        credentialCategory: "certificate"
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: course.weekCount },
        instructor: { "@id": MENTOR_ID }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": MENTOR_ID,
      name: site.founder.name,
      jobTitle: "Founder and Lead Mentor",
      image: `${site.url}${site.founder.image}`,
      worksFor: { "@id": ORG_ID },
      sameAs: [DEEPESH_LINKEDIN]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Programs", item: `${site.url}/programs` },
        { "@type": "ListItem", position: 3, name: course.fullTitle, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
  ];
}

function FaqAnswer({ faq }: { faq: IntlFaq }) {
  if (!faq.link || !faq.a.includes(faq.link.label)) return <p>{faq.a}</p>;
  const [before, after] = faq.a.split(faq.link.label);
  return <p>{before}<Link href={faq.link.href}>{faq.link.label}</Link>{after}</p>;
}

function Cta({ course, label = "Talk to a counsellor", cta, variant = "primary" }: { course: string; label?: string; cta: string; variant?: "primary" | "ghost" | "dark" }) {
  return <a className={`fx-btn fx-btn-${variant}`} href="#apply" data-dm-lead data-cta={cta} data-course={course}>{label} <ArrowRight size={17} aria-hidden="true" /></a>;
}

async function Syllabus({ course, href, cta, variant = "ghost", label = "Download syllabus" }: { course: string; href: string; cta: string; variant?: "ghost" | "light" | "dark"; label?: string }) {
  return <a className={`fx-btn fx-btn-${variant}`} href={href} data-dm-download data-file={href} data-course={course} data-cta={cta}><ArrowDownToLine size={17} aria-hidden="true" /> {label}</a>;
}

function Head({ eyebrow, title, body, id }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; id: string }) {
  return (
    <header className="fx-head">
      <p className="fx-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {body && <p className="fx-head-body">{body}</p>}
    </header>
  );
}

export async function IntlCoursePage({ course }: { course: IntlCourse }) {
  const market = await getMarket();
  const brochureHref = brochureHrefForMarket(course.brochure, market);
  const feeSlug = isFeeSlug(course.slug) ? course.slug : undefined;
  const faqs = feeSlug ? faqsWithProgramFees(market, course.faqs, feeSlug) : course.faqs;
  const successLinks = [{ label: "Download the brochure", href: brochureHref, download: true }];

  return (
    <article className="fde-page fx fx-intl-course">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(course, faqsForJsonLd(feeSlug ? faqsWithProgramFees("in", course.faqs, feeSlug) : course.faqs))) }} />
      <FdeSectionNav items={nav} course={course.course} brand={<>{course.title}</>} ctaPrefix={course.title} />

      <section className="fx-hero" id="top" aria-labelledby="fx-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-hero-grid">
          <div className="fx-hero-copy">
            <nav className="fx-crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li aria-current="page">{course.fullTitle}</li>
              </ol>
            </nav>
            <p className="fx-hero-kicker"><span className="fx-dot" /> {course.kicker}</p>
            <h1 id="fx-title"><span>{course.heroLead}</span> <em>{course.heroEm}</em></h1>
            <p className="fx-hero-deck">{course.deck}</p>
            <ul className="fx-hero-promise">
              {course.promises.map((item) => (
                <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
            <div className="fx-hero-actions">
              <Cta course={course.course} label="Talk to a counsellor" cta={`${course.title} hero (counsellor)`} />
              <Syllabus course={course.course} href={brochureHref} cta={`${course.title} hero (syllabus)`} variant="light" />
            </div>
            <p className="fx-hero-note"><CalendarClock size={15} aria-hidden="true" /> {course.formatLabel} · {course.durationLabel} · {course.hoursPerWeek}</p>
            <ViewFeesLink />
          </div>
          <figure className="fx-hero-media">
            <div className="fx-intl-panel">
              <p className="fx-intl-panel-kicker">Live online · Mentor-led</p>
              <ul>
                <li><b>{course.durationLabel}</b><span>Duration</span></li>
                <li><b>{course.hoursPerWeek}</b><span>Time commitment</span></li>
                <li><b>{course.formatLabel}</b><span>Format</span></li>
                <li><b>Recordings if you miss a session</b><span>Attendance</span></li>
              </ul>
              <p className="fx-intl-panel-note">{course.regions}</p>
            </div>
          </figure>
        </div>
      </section>

      <section className="fx-section" id="outcomes" aria-labelledby="fx-outcomes-title">
        <div className="fx-wrap">
          <Head id="fx-outcomes-title" eyebrow="Outcomes" title={<>What you will be able to <em>do.</em></>} body="These are skills and work products from the program — not placement, salary or promotion promises." />
          <ol className="fx-intl-outcomes">
            {course.outcomes.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fx-section" id="fit" aria-labelledby="fx-fit-title">
        <div className="fx-wrap">
          <Head id="fx-fit-title" eyebrow="Who it's for" title={<>A good fit, <em>and when it is not.</em></>} body={course.level} />
          <div className="fx-fitgrid">
            <div className="fx-fitbox fx-fit-yes">
              <h3>This program is for</h3>
              <ul>{course.audience.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-fit-no">
              <h3>This program is not for</h3>
              <ul>{course.notFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="fx-fitbox fx-fit-yes">
              <h3>Starting point</h3>
              <ul>{course.prereqs.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fx-section" id="curriculum" aria-labelledby="fx-curr-title">
        <div className="fx-wrap">
          <Head id="fx-curr-title" eyebrow="Curriculum" title={<>Week by week, <em>{course.durationLabel}.</em></>} body={`${course.hoursPerWeek}, live and mentor-led. Open a week for topics, labs and what you ship.`} />
          <FdeCurriculum phases={course.phases} />
        </div>
      </section>

      <section className="fx-section" id="projects" aria-labelledby="fx-proj-title">
        <div className="fx-wrap">
          <Head id="fx-proj-title" eyebrow="Projects" title={<>Work you can <em>take with you.</em></>} />
          <ul className="fx-projects">
            {course.projects.map((project, index) => (
              <li key={project.title} className="fx-project" style={{ "--acc": ["#f4511e", "#2f6bff", "#0e9f84", "#b04cff"][index % 4] } as React.CSSProperties}>
                <div className="fx-project-art" aria-hidden="true"><span>{`P${String(index + 1).padStart(2, "0")}`}</span></div>
                <div className="fx-project-body">
                  <h3>{project.title}</h3>
                  <p className="fx-project-brief">{project.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fde-toolkit fx-tools" id="tools" aria-labelledby="fx-tools-title">
        <div className="container">
          <div className="fde-toolkit-heading">
            <div>
              <p className="fde-eyebrow">Tools</p>
              <h2 id="fx-tools-title">What you will practise with.</h2>
            </div>
            <p>These are tools used in the sessions. Product and company names are trademarks of their respective owners and are shown for identification only; no affiliation is implied.</p>
          </div>
          <ToolWall groups={course.toolGroups} />
        </div>
      </section>

      <section className="fx-section" id="format" aria-labelledby="fx-format-title">
        <div className="fx-wrap">
          <Head id="fx-format-title" eyebrow="Format and schedule" title={<>Part-time, live, <em>with regional batches.</em></>} />
          <p className="fx-head-body">{course.timing}</p>
          <p className="fx-head-body">{course.regions}</p>
          <p className="fx-head-body">A Datamarcos certificate of completion is awarded when you finish the program work. Cohort start dates are shared on a counsellor call — we do not publish a date until then. Fees and EMI are listed in the Fees &amp; enrolment section.</p>
        </div>
      </section>

      <section className="fx-section" id="mentor" aria-labelledby="fx-mentor-title">
        <div className="fx-wrap fx-mentor">
          <div className="fx-mentor-photo">
            <Image src="/images/deepesh-mishra-founder.jpeg" alt="Deepesh Mishra, founder and lead mentor at Datamarcos" width={600} height={720} sizes="(max-width: 760px) 90vw, 420px" />
            <span className="fx-mentor-badge">Lead mentor</span>
          </div>
          <div>
            <p className="fx-eyebrow">Mentor</p>
            <h2 id="fx-mentor-title">Deepesh Mishra</h2>
            <p className="fx-mentor-role">Founder, Datamarcos · Solution Architect · Corporate Trainer · BITS Pilani alumnus</p>
            <p>Deepesh is the founder and lead mentor at Datamarcos. He has worked as a solution architect and corporate trainer in data and AI, and has trained teams at 200+ organizations. Live sessions on this program are mentor-led, with practical, project-based delivery.</p>
            <div className="fx-mentor-actions"><a className="fx-link" href={DEEPESH_LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn profile</a></div>
          </div>
        </div>
      </section>

      {feeSlug ? <FeesEnrolment slug={feeSlug} /> : null}

            <section className="fx-section fx-faq" id="faq" aria-labelledby="fx-faq-title">
        <div className="fx-wrap fx-faq-grid">
          <div>
            <Head id="fx-faq-title" eyebrow="FAQ" title={<>Questions, <em>answered.</em></>} body="Can't find yours? A counsellor will answer it on a short call." />
            <Cta course={course.course} cta={`${course.title} FAQ (counsellor)`} variant="dark" label="Ask a counsellor" />
          </div>
          <div className="fx-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}<span aria-hidden="true" /></summary>
                <FaqAnswer faq={faq} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="fx-section fx-brochure" id="brochure" aria-labelledby="fx-bro-title">
        <div className="fx-wrap">
          <div className="fx-split fx-split-end">
            <Head id="fx-bro-title" eyebrow="The full program guide" title={<>Read the {course.durationLabel} <em>curriculum.</em></>} body="Modules, projects, tools and format in one PDF. No prices are listed; fees are shared on a counsellor call." />
            <Syllabus course={course.course} href={brochureHref} cta={`${course.title} brochure section`} variant="dark" label="Download PDF" />
          </div>
          <div className="fx-pdf"><GatedBrochureFrame src={course.brochure} title={`${course.fullTitle} brochure`} course={course.course} cover={course.image} /></div>
        </div>
      </section>

      <section className="fx-apply" id="apply" aria-labelledby="fx-apply-title">
        <div className="fx-hero-glow" aria-hidden="true" />
        <div className="fx-wrap fx-apply-grid">
          <div>
            <p className="fx-eyebrow">Small-batch live cohorts</p>
            <h2 id="fx-apply-title">{course.applyLead} <em>{course.applyEm}</em></h2>
            <p>{course.applyBody}</p>
            <ul className="fx-apply-list">
              {course.applyBullets.map((item) => (
                <li key={item}><Rocket size={17} aria-hidden="true" /> {item}</li>
              ))}
              <li><UsersRound size={17} aria-hidden="true" /> Live, mentor-led sessions with Deepesh Mishra</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Honest outcomes: no placement or salary guarantees</li>
              <li className="fx-apply-refund"><RotateCcw size={17} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: not right for you? Ask within 7 days for a refund.</span></li>
            </ul>
            <Syllabus course={course.course} href={brochureHref} cta={`${course.title} apply (syllabus)`} variant="light" label="Prefer to read first? Get the syllabus" />
          </div>
          <InlineLeadForm
            idPrefix={`${course.slug}-apply`}
            course={course.course}
            lockCourse
            cta={`${course.title} inline form (apply section)`}
            eyebrow={course.fullTitle}
            title="Request a call back."
            intro={APPLY_FEE_INTRO}
            submitLabel="Request my call"
            trust={course.trust}
            successTitle="Thanks{first}! Request received."
            successBody={course.successBody}
            successLinks={successLinks}
            minHeight={560}
          />
        </div>
      </section>

      {course.related.length > 0 && (
        <section className="fx-section" aria-labelledby="fx-related-title">
          <div className="fx-wrap">
            <Head id="fx-related-title" eyebrow="Related programs" title={<>You may also <em>look at.</em></>} />
            <ul className="fx-intl-related">
              {course.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <strong>{item.title}</strong>
                    <span>{item.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
