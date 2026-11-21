import { CourseLanding } from "@/components/program/landing/CourseLanding";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { journeyFromPhases } from "@/lib/journey";
import { site } from "@/config/site";
import { NEXT_COHORT_ISO, NEXT_COHORT_LONG, NEXT_COHORT_STARTS } from "@/config/cohort";
import { faqsWithProgramFees } from "@/config/fees";
import { faqsForJsonLd, faqsForMarket, isIndiaMarket } from "@/lib/geo";
import { brochureHrefForMarket } from "@/config/lead";
import { getMarket } from "@/lib/geo-server";
import { DEEPESH_LINKEDIN } from "@/config/home";
import { pageMetadata } from "@/lib/seo";
import {
  APPLIED_BROCHURE, APPLIED_COURSE, APPLIED_TITLE, APPLIED_VIDEO_ID, appliedFaqs, appliedFor, appliedNotFor, appliedPhases,
  appliedPrereqs, appliedProjects, appliedRoles, appliedShifts, appliedToolGroups
} from "@/config/applied";

const PATH = "/programs/applied-agentic-ai-certification";
const URL = `${site.url}${PATH}`;
const TITLE = "Applied Agentic AI Certification, 8 Weeks Live | Datamarcos";
const DESCRIPTION = "An eight-week, mentor-led certification to build production-ready AI workflows, RAG systems, tool-using agents and automation, ending in a portfolio capstone.";

export const metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });



const successBodyIn = `A Datamarcos counsellor will call you about program fit, the batch starting ${NEXT_COHORT_LONG} and EMI options. Meanwhile, the brochure has the full 8-week curriculum.`;
const successBodyIntl = `A Datamarcos counsellor will call you about program fit, the batch starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 8-week curriculum.`;

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course + mentor + breadcrumb + FAQ. Deliberately NO offers / price. */
function jsonLdFor(faqs: typeof appliedFaqs) {
  return [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${URL}#course`,
    name: APPLIED_TITLE,
    description: DESCRIPTION,
    url: URL,
    image: `${site.url}/images/applied-agentic-ai/hero-video-poster.webp`,
    inLanguage: "en-IN",
    educationalLevel: "Beginner",
    timeRequired: "P8W",
    coursePrerequisites: ["No prior AI experience required; beginner-friendly refreshers are provided", "Openness to learning basic Python programming"],
    teaches: ["LLM foundations and prompt engineering", "Production RAG systems", "AI agents and tool calling", "Multi-agent orchestration with CrewAI and LangGraph", "Model Context Protocol (MCP) and enterprise integration", "Voice, multimodal agents and n8n automation", "Agent evaluation and reliability"],
    syllabusSections: appliedPhases.flatMap((phase) => phase.items.map((w) => ({ "@type": "Syllabus", name: `Week ${w.week}: ${w.title}`, description: w.topics.join("; ") }))),
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
    educationalCredentialAwarded: { "@type": "EducationalOccupationalCredential", name: "Datamarcos Applied Agentic AI Certification", credentialCategory: "certificate" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: NEXT_COHORT_ISO,
      courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: 8 },
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
      { "@type": "ListItem", position: 3, name: APPLIED_TITLE, item: URL }
    ]
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
];
}

export default async function AppliedAgenticAIPage() {
  const market = await getMarket();
  const india = isIndiaMarket(market);
  const faqs = faqsForMarket(market, faqsWithProgramFees(market, appliedFaqs, "applied-agentic-ai-certification"));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(faqsForJsonLd(faqsWithProgramFees("in", appliedFaqs, "applied-agentic-ai-certification")))) }} />
      <CourseLanding
        course={APPLIED_COURSE}
        feeSlug="applied-agentic-ai-certification"
        name="Applied"
        fullTitle={APPLIED_TITLE}
        kicker={`8 weeks · Live online · ${NEXT_COHORT_STARTS}`}
        title={<>Applied Agentic AI: <span>move beyond prompts and build agents that work.</span></>}
        leadLong="An eight-week, mentor-led certification for professionals who want to build production-ready AI workflows, RAG systems, tool-using agents and automation. No prior AI experience required."
        leadShort="8 weeks, mentor-led: build RAG, tool-using agents and automation. No AI experience needed."
        brochureHref={brochureHrefForMarket(APPLIED_BROCHURE, market)}
        brochureSrc={APPLIED_BROCHURE}
        brochureCover="/images/applied-agentic-ai/hero-video-poster.webp"
        media={<div className="ds-course-video"><YouTubeFacade id={APPLIED_VIDEO_ID} title="Applied Agentic AI Certification overview" poster="/images/applied-agentic-ai/hero-video-poster.webp" sizes="(max-width: 1080px) calc(100vw - 40px), 545px" priority /></div>}
        facts={[{ dt: "Duration", dd: "8 weeks" }, { dt: "Modules, one per week", dd: "8" }, { dt: "Mentorship", dd: "1:1 + live Q&A" }, { dt: "Prior AI experience", dd: "None needed" }, { dt: "Next batch", dd: NEXT_COHORT_LONG }]}
        roles={appliedRoles.map((r) => ({ title: r }))}
        rolesTitle={<>Roles this <em>prepares you for.</em></>}
        audienceTitle={<>Is this for you? <em>Start from your role.</em></>}
        audienceBody="For QA, software, product and data professionals who want to build with AI, not just use it."
        audience={appliedFor.map((a) => ({ title: a }))}
        levels={[
          { level: "Ready now", who: "You work in QA, software, product or data and are open to learning basic Python.", next: "Join the next batch. A counsellor confirms your fit first." },
          { level: "Ready with refreshers", who: "No prior AI experience, and Python is new to you.", next: "Beginner-friendly refreshers are provided." },
          { level: "Ready to go deeper", who: "About 2+ years of engineering and you want production depth.", next: "Look at GenAI & Agentic AI Engineer or Forward Deployed AI Engineer." }
        ]}
        transitions={appliedShifts.map((s) => ({ from: s.from, to: s.to }))}
        fitFor={appliedPrereqs}
        notFor={appliedNotFor}
        journey={{ duration: "8 weeks · 2 months", title: <>Month by month, <em>to applied AI builder.</em></>, objective: "Design, build and evaluate practical AI workflows with retrieval, tools and agent orchestration, ending in a capstone you can show.", steps: journeyFromPhases(appliedPhases) }}
        curriculum={{ eyebrow: "Curriculum · 8 weeks · 8 modules", title: <>A project <em>every week.</em></>, phases: appliedPhases }}
        projects={appliedProjects.map((p) => ({ code: p.code, name: p.name, meta: p.client, brief: p.brief, stack: p.stack }))}
        projectsTitle={<>A project every module. <em>Then your capstone.</em></>}
        toolGroups={appliedToolGroups}
        faqs={faqs}
        objections={[
          { q: "“I’m not technical.”", a: "You don’t need an AI or technical background. Be open to learning basic Python; refreshers are provided." },
          { q: "“I have a full-time job.”", a: "Live, mentor-led sessions over 8 weeks, built for working professionals." },
          { q: "“Is it worth it?”", a: `A project every module, an integrated capstone and the Datamarcos certification. ${india ? "EMI options" : "Flexible instalments"} and a 7-day refund policy.` }
        ]}
        india={india}
        apply={{ eyebrow: "Small-batch live cohorts", title: <>Build. Automate. <em>Deploy.</em></>, body: `Share a few details. A counsellor will talk through your fit, the batch starting ${NEXT_COHORT_LONG} and ${india ? "EMI options" : "fees"}.`, bullets: ["A project every module + an integrated capstone", "Datamarcos Applied Agentic AI Certification"], formTitle: "Request a call back.", submitLabel: "Request my call", trust: ["8 weeks", "Live online", "Beginner-friendly"], successBody: india ? successBodyIn : successBodyIntl }}
        relatedGuides={["agentic-ai-courses-india-compared-2026", "rag-vs-fine-tuning", "how-to-build-a-rag-pipeline", "what-is-agentic-ai", "langgraph-vs-crewai-vs-autogen", "agentic-ai-projects-for-beginners", "prompt-engineering-vs-context-engineering"]}
      />
    </>
  );
}
