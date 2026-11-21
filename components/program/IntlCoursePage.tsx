import { isIndiaMarket, faqsForJsonLd } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";
import { journeyFromPhases } from "@/lib/journey";
import { intlProgramCards, type IntlCourse, type IntlFaq } from "@/config/intl-courses";
import { CourseLanding, type LandingLevel } from "@/components/program/landing/CourseLanding";
import { DEEPESH_LINKEDIN } from "@/config/home";
import { faqsWithProgramFees, isFeeSlug } from "@/config/fees";
import { brochureHrefForMarket } from "@/config/lead";
import { site } from "@/config/site";
import { NEXT_COHORT_FAQ_ANSWER, NEXT_COHORT_ISO, NEXT_COHORT_LONG } from "@/config/cohort";

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

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
        startDate: NEXT_COHORT_ISO,
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

/** First sentence of the deck, for the compact mobile hero. */
function firstSentence(text: string) {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

/** Readiness levels built only from the course's own level, starting points, not-for list and related programs. */
function levelsFor(course: IntlCourse): LandingLevel[] {
  const alt = course.related[0];
  return [
    { level: "Ready now", who: course.level, next: "Apply. A counsellor confirms your fit on a free 15-minute call." },
    { level: "Check the starting point", who: `Starting point: ${course.prereqs[0]}`, next: "If it feels rusty, ask a counsellor what to review before week 1." },
    { level: "A different program fits better", who: `Not for you if: ${course.notFor[0]}`, next: alt ? `Look at ${alt.title}, or ask a counsellor.` : "A counsellor will point you to the right program." }
  ];
}

export async function IntlCoursePage({ course }: { course: IntlCourse }) {
  const market = await getMarket();
  const brochureHref = brochureHrefForMarket(course.brochure, market);
  const feeSlug = isFeeSlug(course.slug) ? course.slug : undefined;
  const startFaq = { q: "When does the next cohort start?", a: NEXT_COHORT_FAQ_ANSWER };
  const withStart = (list: typeof course.faqs) =>
    list.some((faq) => /when does the next (cohort|batch) start/i.test(faq.q)) ? list : [...list, startFaq];
  const faqs = withStart(feeSlug ? faqsWithProgramFees(market, course.faqs, feeSlug) : course.faqs);
  const card = intlProgramCards.find((c) => c.slug === course.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(course, faqsForJsonLd(withStart(feeSlug ? faqsWithProgramFees("in", course.faqs, feeSlug) : course.faqs)))) }} />
      <CourseLanding
        course={course.course}
        feeSlug={feeSlug}
        name={course.title}
        fullTitle={course.fullTitle}
        kicker={course.kicker}
        title={<>{course.heroLead} <em>{course.heroEm}</em></>}
        leadLong={course.deck}
        leadShort={firstSentence(course.deck)}
        brochureHref={brochureHref}
        brochureSrc={course.brochure}
        brochureCover={course.image}
        media={
          <div className="ds-intl-panel">
            <p className="ds-eyebrow">Live online · Mentor-led</p>
            <ul className="ds-checks">{course.promises.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="ds-fine">{course.regions}</p>
          </div>
        }
        facts={[
          { dt: "Duration", dd: course.durationLabel },
          { dt: "Time commitment", dd: course.hoursPerWeek },
          { dt: "Format", dd: course.formatLabel },
          { dt: "Missed a session?", dd: "Recordings shared" },
          { dt: "Next cohort", dd: NEXT_COHORT_LONG }
        ]}
        outcomes={course.outcomes}
        audienceBody={course.level}
        audience={course.audience.map((title) => ({ title }))}
        levels={levelsFor(course)}
        fitFor={course.prereqs}
        notFor={course.notFor}
        journey={{ duration: course.durationLabel, title: <>Your journey, <em>step by step.</em></>, objective: card?.summary ?? course.deck, steps: journeyFromPhases(course.phases) }}
        curriculum={{ eyebrow: "Curriculum", title: <>Week by week, <em>{course.durationLabel}.</em></>, phases: course.phases }}
        projects={course.projects.map((pr, i) => ({ code: `P${String(i + 1).padStart(2, "0")}`, name: pr.title, brief: pr.body }))}
        projectsTitle={<>Work you can <em>take with you.</em></>}
        toolGroups={course.toolGroups}
        format={{ title: <>Part-time, live, <em>with regional batches.</em></>, paragraphs: [course.timing, "A Datamarcos certificate of completion is awarded when you finish the program work. Fees and EMI are listed in the Fees & enrolment section."] }}
        faqs={faqs}
        india={isIndiaMarket(market)}
        apply={{ eyebrow: "Small-batch live cohorts", title: <>{course.applyLead} <em>{course.applyEm}</em></>, body: course.applyBody, bullets: course.applyBullets, formTitle: "Request a call back.", submitLabel: "Request my call", trust: course.trust, successBody: course.successBody }}
        related={course.related}
      />
    </>
  );
}
