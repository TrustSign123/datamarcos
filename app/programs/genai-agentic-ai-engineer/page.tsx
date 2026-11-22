import type { Metadata } from "next";
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
import {
  GENAI_BROCHURE, GENAI_COURSE, genaiAdmission, genaiCareer, genaiFaqs, genaiFitFor, genaiJourneys, genaiNotFor,
  genaiPhases, genaiProjects, genaiRoles, genaiToolGroups
} from "@/config/genai";

const PATH = "/programs/genai-agentic-ai-engineer";
const URL = `${site.url}${PATH}`;
const videoId = "4eGgJmad5lY";

export const metadata: Metadata = {
  title: "GenAI & Agentic AI Engineer Course, Live 18 Weeks | Datamarcos",
  description: "An 18-week, mentor-led live program to build, evaluate, secure and deploy GenAI and Agentic AI systems: 130+ hours, three client-style projects and a capstone.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Generative AI & Agentic AI Engineer | Datamarcos",
    description: "Build it. Ship it. Own the outcome. Learn GenAI and Agentic AI engineering with Deepesh Mishra.",
    images: [{ url: "/images/genai-agentic-ai-engineer/classroom-cohort.jpg", width: 841, height: 512 }]
  }
};



const successBodyIn = `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG}, EMI options and scholarships. Meanwhile, the brochure has the full 18-week roadmap.`;
const successBodyIntl = `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG}, fees and scholarships. Meanwhile, the brochure has the full 18-week roadmap.`;

const ORG_ID = `${site.url}/#organization`;
const MENTOR_ID = `${site.url}/#deepesh-mishra`;

/** Course + mentor + breadcrumb + FAQ. Deliberately NO offers / price. */
function jsonLdFor(faqs: typeof genaiFaqs) {
  return [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${URL}#course`,
    name: "Generative AI & Agentic AI Engineer",
    description: metadata.description,
    url: URL,
    image: `${site.url}/images/program-thumbnails/genai-agentic-ai-engineer.webp`,
    inLanguage: "en-IN",
    timeRequired: "P18W",
    coursePrerequisites: ["Python basics and working engineering fundamentals, or strong shipped projects", "Bridge pre-work in Python, Linux, Git and SQL is provided before Day 1"],
    teaches: ["LLM fundamentals, prompting and structured outputs", "RAG, knowledge graphs and multimodal document intelligence", "Agents, LangGraph, MCP and multi-agent orchestration", "AI security, guardrails and governance", "LLMOps, evaluation and observability", "Cloud deployment with Docker, Terraform and CI/CD"],
    syllabusSections: genaiPhases.map((phase) => ({ "@type": "Syllabus", name: `${phase.title} (${phase.weeks})`, description: phase.summary })),
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url },
    educationalCredentialAwarded: { "@type": "EducationalOccupationalCredential", name: "Datamarcos Executive Certificate in Generative AI and Agentic AI Engineering", credentialCategory: "certificate" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: NEXT_COHORT_ISO,
      courseWorkload: "PT130H",
      courseSchedule: { "@type": "Schedule", repeatFrequency: "P1W", repeatCount: 18 },
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
      { "@type": "ListItem", position: 3, name: "Generative AI & Agentic AI Engineer", item: URL }
    ]
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
];
}

export default async function GenAIAgenticEngineerPage() {
  const market = await getMarket();
  const india = isIndiaMarket(market);
  const faqs = faqsForMarket(market, faqsWithProgramFees(market, genaiFaqs, "genai-agentic-ai-engineer"));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(faqsForJsonLd(faqsWithProgramFees("in", genaiFaqs, "genai-agentic-ai-engineer")))) }} />
      <CourseLanding
        course={GENAI_COURSE}
        feeSlug="genai-agentic-ai-engineer"
        name="GenAI"
        fullTitle="Generative AI & Agentic AI Engineer"
        kicker={`18-week live program · ${NEXT_COHORT_STARTS}`}
        title={<>Generative AI &amp; Agentic AI Engineer: <span>build it, ship it, own the outcome.</span></>}
        leadLong="Build LLM applications, RAG systems and multi-agent workflows, then secure, evaluate and deploy them on real enterprise stacks, with Deepesh Mishra."
        leadShort="Build, secure and deploy LLM apps, RAG and agents, live with Deepesh Mishra."
        brochureHref={brochureHrefForMarket(GENAI_BROCHURE, market)}
        brochureSrc={GENAI_BROCHURE}
        brochureCover="/images/program-thumbnails/genai-agentic-ai-engineer.webp"
        media={<div className="ds-course-video"><YouTubeFacade id={videoId} title="Generative AI and Agentic AI Engineer program overview" poster="/images/genai-agentic-ai-engineer/hero-video-poster.webp" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1240px) 46vw, 570px" priority /></div>}
        facts={[{ dt: "Duration", dd: "18 weeks" }, { dt: "Live hours, labs & studio", dd: "130+" }, { dt: "Projects incl. capstone", dd: "4" }, { dt: "Mentorship", dd: "1:1" }, { dt: "Next cohort", dd: NEXT_COHORT_LONG }]}
        roles={genaiRoles.map((r) => ({ title: r.role, body: r.body }))}
        rolesTitle={<>Six roles. <em>One skill stack.</em></>}
        audienceTitle={<>Is this for you? <em>Start from your role.</em></>}
        audienceBody="Built for Python, backend, data, QA and DevOps engineers, and career switchers with coding basics."
        audience={genaiJourneys.map((j) => ({ title: j.from, note: j.detail }))}
        levels={[
          { level: "Ready now", who: "You code in Python, or have strong shipped projects.", next: "Apply. A diagnostic and an admissions-mentor call confirm your seat." },
          { level: "Ready with bridge pre-work", who: "You code, but Python, Linux, Git or SQL are rusty.", next: "Bridge pre-work covers them before Day 1." },
          { level: "Start one step earlier", who: "You have never written code.", next: "Begin with Applied Agentic AI: no prior AI experience, open to learning basic Python." }
        ]}
        transitions={genaiJourneys.slice(0, 6).map((j) => ({ from: j.from, to: j.to, why: j.why }))}
        fitFor={genaiFitFor}
        notFor={genaiNotFor}
        admission={genaiAdmission}
        journey={{ duration: "18 weeks · ~4.5 months", title: <>Month by month, <em>to GenAI engineer.</em></>, objective: "Build LLM apps, production RAG and multi-agent systems, then secure and deploy them, with a portfolio to prove it.", steps: journeyFromPhases(genaiPhases, { milestones: genaiCareer }), careerPrep: "1:1 mock interviews, AI system-design rounds and a resume rewrite in the career track" }}
        curriculum={{ eyebrow: "Curriculum · 18 weeks · 5 phases", title: <>From your first model call <em>to Demo Day.</em></>, phases: genaiPhases }}
        projects={genaiProjects.map((p) => ({ code: p.code, name: p.name, meta: `${p.weeks} · ${p.client}`, brief: p.brief, stack: p.stack }))}
        projectsTitle={<>Three client-style projects. <em>Plus your capstone.</em></>}
        toolGroups={genaiToolGroups}
        faqs={faqs}
        objections={[
          { q: "“I have a full-time job.”", a: "Two live sessions a week plus a lab. Plan for about 8–12 hours a week." },
          { q: "“I don’t have AI experience.”", a: "You don’t need it. Python and engineering basics are enough; bridge pre-work comes before Day 1." },
          { q: "“Is it worth it?”", a: `Three client-style projects and a capstone, live mentoring and career prep. ${india ? "EMI options" : "Flexible instalments"} and a 7-day refund policy.` }
        ]}
        india={india}
        apply={{ eyebrow: "Application-based · small cohorts", title: <>Build it. Ship it. <em>Own the outcome.</em></>, body: `Share a few details. A counsellor will talk through your fit, the ${NEXT_COHORT_LONG} cohort, ${india ? "EMI options" : "fees"} and scholarships.`, bullets: ["3 client-style projects + a capstone at Demo Day", "130+ hours of live sessions, labs and studio"], formTitle: "Request a seat.", submitLabel: "Request my seat", trust: ["Application-based", "Small cohorts", "Weekend-friendly"], successBody: india ? successBodyIn : successBodyIntl }}
        relatedGuides={["generative-ai-courses-india-compared-2026", "agentic-ai-courses-india-compared-2026", "rag-vs-fine-tuning", "how-to-build-a-rag-pipeline", "what-is-agentic-ai", "prompt-engineering-vs-context-engineering"]}
      />
    </>
  );
}
