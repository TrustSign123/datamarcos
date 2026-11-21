import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CourseLanding } from "@/components/program/landing/CourseLanding";
import { site } from "@/config/site";
import { faqsForJsonLd, isIndiaMarket } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";
import { brochureHrefForMarket } from "@/config/lead";
import { NEXT_COHORT_FAQ_ANSWER, NEXT_COHORT_ISO, NEXT_COHORT_LONG, NEXT_COHORT_STARTS } from "@/config/cohort";
import { DEEPESH_LINKEDIN } from "@/config/home";
import {
  ADE_BROCHURE, ADE_COURSE, ADE_COVER, adeAudience, adeBuildItems, adeJourney, adePhases, adePrereqs, adeToolGroups, adeTracks
} from "@/config/ade";

export const metadata: Metadata = {
  title: "Advance Data Engineering with GenAI & Agentic AI | Datamarcos",
  description: "A 4+ month mentor-led program: a four-month data engineering foundation, then an advanced GenAI, RAG and Agentic AI track and a capstone, with Deepesh Mishra.",
  alternates: { canonical: "/programs/advance-data-engineering-genai" },
  openGraph: {
    title: "Advanced Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build the data foundation. Engineer the intelligence. Deploy the agents.",
    url: `${site.url}/programs/advance-data-engineering-genai`,
    siteName: site.name,
    images: [{ url: "/images/advance-data-engineering-genai/classroom-live.jpg", width: 1280, height: 960 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
    description: "Build modern data engineering, RAG, GenAI and Agentic AI skills with mentor Deepesh Mishra.",
    images: ["/images/advance-data-engineering-genai/classroom-live.jpg"]
  }
};


/** Every answer restates what the program brochure / previous page already said. No fees here: they live in Fees & enrolment. */
const adeFaqs = [
  { q: "Do I need cloud or AI experience?", a: "No. Cloud knowledge is helpful but not mandatory, and no prior AI experience is needed. SQL is required and Python is preferred; Python and SQL refreshers come before the program work." },
  { q: "How is the program structured?", a: "Two connected tracks: a four-month Data Engineering Foundation (weeks 1-16), then the Applied GenAI & Agentic AI advanced specialization. Admissions can confirm the advanced track's cohort schedule." },
  { q: "How are the sessions delivered?", a: "Live, mentor-led online sessions with Deepesh Mishra, on weekends or evenings." },
  { q: "What will I build?", a: "Scalable data pipelines, a production-style RAG assistant, a tool-using agent and an integrated capstone that brings data engineering, GenAI and agentic patterns together." },
  { q: "Is there placement support?", a: "Yes. Resume and interview preparation start in Month 4, then CareerOS gives you practice rounds, live openings and a job tracker. Placement support, not a job guarantee." },
  { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." },
  { q: "When does the next cohort start?", a: NEXT_COHORT_FAQ_ANSWER },
  { q: "Who is this program for?", a: "Professionals who already work with data or want to: analytics and BI professionals moving beyond dashboards, ETL and integration engineers modernizing their stack, software and backend developers expanding into data systems, and database administrators moving toward data platforms and AI." },
  { q: "Which tools and platforms will I use?", a: "Azure, AWS, Databricks, Snowflake and Delta Lake for data platforms; PySpark, Kafka, Airflow, dbt, Great Expectations, SQL, Python and Git for pipelines and quality; and LangChain, LangGraph, CrewAI, vector databases, Snowflake Cortex AI and Databricks Agent Bricks for GenAI and agents." },
  { q: "Do I finish the data engineering foundation before the GenAI track?", a: "Yes. The four-month Data Engineering Foundation comes first and ends with a foundation capstone. The Applied GenAI & Agentic AI track follows as an advanced specialization and ends with an integrated capstone." }
];

const ADE_URL = `${site.url}/programs/advance-data-engineering-genai`;
const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course (+ CourseInstance, Syllabus), mentor, breadcrumb and FAQ. Deliberately NO offers / price / fees. */
function adeJsonLd(faqs: typeof adeFaqs) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${ADE_URL}#course`,
      name: ADE_COURSE,
      description: metadata.description,
      url: ADE_URL,
      image: `${site.url}${ADE_COVER}`,
      inLanguage: "en-IN",
      coursePrerequisites: adePrereqs,
      teaches: ["Python and SQL for data engineering", "Azure Data Lake, Azure Data Factory and PySpark pipelines", "AWS, Databricks lakehouse and Spark Structured Streaming", "Data quality with dbt-style transformations and Great Expectations", "RAG with embeddings, vector databases and LangChain", "Agentic workflows with LangGraph, CrewAI and MCP", "Snowflake Cortex AI and Databricks Agent Bricks"],
      syllabusSections: adePhases.map((phase) => ({ "@type": "Syllabus", name: `${phase.title} (${phase.weeks})`, description: phase.summary })),
      provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        startDate: NEXT_COHORT_ISO,
        instructor: { "@id": MENTOR_ID }
      }
    },
    { "@context": "https://schema.org", "@type": "Person", "@id": MENTOR_ID, name: site.founder.name, jobTitle: "Founder and Lead Mentor", image: `${site.url}${site.founder.image}`, worksFor: { "@id": ORG_ID }, sameAs: [DEEPESH_LINKEDIN] },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Programs", item: `${site.url}/programs` },
        { "@type": "ListItem", position: 3, name: ADE_COURSE, item: ADE_URL }
      ]
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
  ];
}

function AdeCurriculum() {
  return (
    <div className="ds-ade-curr">
      {adeTracks.map((track, t) => (
        <section key={track.number} className="ds-ade-track" aria-label={track.title}>
          <header><span>{track.number}</span><small>{track.duration}</small><h3>{track.title}</h3><p>{track.summary}</p></header>
          <ol>
            {adePhases.slice(t === 0 ? 0 : 4, t === 0 ? 4 : undefined).map((phase) => (
              <li key={phase.number}>
                <details open={phase.number === "01" || phase.number === "05"}>
                  <summary><b>{phase.number}</b><span><small>{phase.weeks}</small><strong>{phase.title}</strong></span></summary>
                  <ul>{phase.topics.map((topic) => <li key={topic}><Check size={14} aria-hidden="true" />{topic}</li>)}</ul>
                  <p><b>You build:</b> {phase.ship}</p>
                </details>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default async function AdvanceDataEngineeringGenAIPage() {
  const market = await getMarket();
  const india = isIndiaMarket(market);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adeJsonLd(faqsForJsonLd(adeFaqs))) }} />
      <CourseLanding
        course={ADE_COURSE}
        feeSlug="advance-data-engineering-genai"
        name="Data Engineering + GenAI"
        fullTitle="Advance Data Engineering with Applied GenAI & Agentic AI"
        kicker={`Flagship · 4-month foundation + advanced AI track · ${NEXT_COHORT_STARTS}`}
        title={<>Build the data foundation. <em>Engineer the intelligence.</em></>}
        leadLong="A structured, mentor-led journey from modern data engineering foundations to production-style RAG, agentic workflows and an integrated capstone, taught by Deepesh Mishra."
        leadShort="Mentor-led: cloud data engineering first, then RAG, agents and an integrated capstone."
        brochureHref={brochureHrefForMarket(ADE_BROCHURE, market)}
        brochureSrc={ADE_BROCHURE}
        brochureCover={ADE_COVER}
        media={<div className="ds-course-video ds-course-photo"><Image src="/images/advance-data-engineering-genai/classroom-live.jpg" alt="Live instructor-led data and AI classroom session at Datamarcos" width={1280} height={960} sizes="(max-width: 1080px) calc(100vw - 40px), 545px" priority /></div>}
        facts={[
          { dt: "Data engineering foundation", dd: "4 months" },
          { dt: "Then the advanced track", dd: "GenAI + agents" },
          { dt: "Live online", dd: "Weekend / evening" },
          { dt: "Foundation + integrated", dd: "2 capstones" },
          { dt: "Next cohort", dd: NEXT_COHORT_LONG }
        ]}
        outcomes={[1, 2, 3, 5, 6, 7].map((i) => adePhases[i].ship)}
        audienceTitle={<>Is this for you? <em>Start from your role.</em></>}
        audienceBody="For professionals already working with data, building data products, or moving from analytics, software and database roles."
        audience={adeAudience.map((title) => ({ title }))}
        levels={[
          { level: "Ready now", who: "You know SQL, some Python, and work with data in any role.", next: "Apply. A counsellor confirms your fit on a free call." },
          { level: "Ready with refreshers", who: "SQL is fine, but Python or cloud is new to you.", next: "Python and SQL refreshers come first; cloud knowledge is helpful, not mandatory." },
          { level: "Ready to go further", who: "You already build data platforms and want a customer-facing AI role.", next: "Look at the Forward Deployed AI Engineer program." }
        ]}
        fitFor={adePrereqs}
        notFor={["You do not want to work with SQL: it is required.", "You want a placement or salary guarantee. We offer placement support, not a job guarantee."]}
        journey={{ duration: "4-month foundation + advanced track", title: <>Month by month, <em>to data + AI engineer.</em></>, objective: "Modern cloud data engineering first, then GenAI, production RAG, agents and an integrated capstone on real data platforms.", steps: adeJourney, careerPrep: "Resume and interview preparation in Month 4, then practice rounds on CareerOS" }}
        curriculum={{ eyebrow: "Curriculum · two tracks", title: <>From data foundations <em>to agentic applications.</em></>, custom: <AdeCurriculum /> }}
        projects={adeBuildItems.map((item) => ({ code: `P${item.id}`, name: item.title, brief: item.detail }))}
        projectsTitle={<>Projects move <em>from data to action.</em></>}
        toolGroups={adeToolGroups}
        format={{ title: <>Live, mentor-led, <em>weekends or evenings.</em></>, paragraphs: [
          "Live mentor-led sessions on weekends or evenings. The four-month foundation comes first; the advanced GenAI & Agentic AI track follows as a specialization, and admissions can confirm its cohort schedule.",
          `The next cohort starts on ${NEXT_COHORT_LONG}. Fees and EMI are listed in the Fees & enrolment section.`
        ] }}
        faqs={adeFaqs}
        india={india}
        apply={{
          eyebrow: "Take the next step",
          title: <>Plan your data + AI <em>learning path.</em></>,
          body: `The next cohort starts on ${NEXT_COHORT_LONG}. Ask about session times, the advanced specialization schedule and admissions.`,
          bullets: ["4-month data engineering foundation + advanced GenAI & Agentic AI track", "A foundation capstone and an integrated capstone"],
          formTitle: "Request a call back.",
          submitLabel: "Request my call",
          trust: ["4-month foundation", "Live online", "SQL required"],
          successBody: `A Datamarcos counsellor will call you about program fit, the batch starting ${NEXT_COHORT_LONG} and ${india ? "EMI options" : "fees"}. Meanwhile, the brochure has the full curriculum.`
        }}
        relatedGuides={["data-engineering-courses-with-genai-india-compared-2026", "rag-vs-fine-tuning", "data-engineer-vs-ai-engineer"]}
        related={[{ href: "/programs/forward-deployed-ai-engineer", title: "Forward Deployed AI Engineer", blurb: "For data engineers who want a customer-facing AI role next." }]}
      />
    </>
  );
}
