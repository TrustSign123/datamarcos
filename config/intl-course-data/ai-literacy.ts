import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";

export const literacyCourse: IntlCourse = {
  slug: "ai-literacy-responsible-ai",
  path: "/programs/ai-literacy-responsible-ai",
  course: "AI Literacy & Responsible AI",
  title: "AI Literacy & Responsible AI",
  fullTitle: "AI Literacy & Responsible AI (EU AI Act ready)",
  kicker: "AI Literacy & Responsible AI · Live online · 4 weeks · Mentor-led",
  heroLead: "AI Literacy &",
  heroEm: "Responsible AI.",
  deck: "A four-week, part-time live program for managers and professionals who need practical AI literacy at work — including what the EU AI Act expects of staff who use or oversee AI — without turning the course into a legal qualification or a coding bootcamp.",
  promises: [
    "Learn what current AI tools can and cannot do, and how to brief a team clearly",
    "Practise a workplace checklist for privacy, quality and human oversight",
    "Understand Article 4 AI-literacy duties in practical terms — this is not an official EU or government certificate"
  ],
  durationLabel: "4 weeks",
  durationIso: "P4W",
  weekCount: 4,
  hoursPerWeek: "3–4 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with Europe and the UK in mind; join live from anywhere.",
  level: "Introductory, no coding required",
  prereqs: [
    "No coding or prior AI experience is required",
    "Best suited to people who already work with a team, a process or a set of decisions that AI might touch"
  ],
  audience: [
    "Managers, team leads and operations professionals in, or selling into, the EU or UK",
    "People asked to write or follow an AI-use policy at work",
    "Compliance, risk, HR and enablement partners who need a shared vocabulary with technical teams",
    "Individual professionals first; team packs can be discussed on a counsellor call"
  ],
  notFor: [
    "Engineers who want to build RAG systems, agents or production LLM apps — see our longer engineering programs",
    "Anyone looking for an official EU, government or university certificate. This program issues a Datamarcos certificate of completion"
  ],
  outcomes: [
    "Explain, in plain language, what generative AI can and cannot reliably do in a workplace setting",
    "Spot high-risk uses of AI in a process and know when to involve a specialist or legal review",
    "Apply a short literacy and review checklist covering data, privacy, quality and human oversight",
    "Describe, at a practical level, what Article 4 of the EU AI Act asks of providers and deployers — not as legal advice",
    "Leave with a short briefing you can take back to your team"
  ],
  phases: [
    {
      id: "foundations",
      number: "01",
      title: "Foundations",
      weeks: "Weeks 1–2",
      summary: "Build a shared, accurate picture of current AI tools, their limits, and the data and privacy questions they raise at work.",
      checkpoint: "A short written briefing on a real workplace AI use case.",
      after: "Talk about AI tools with your team without over-claiming, and flag obvious data-risk issues.",
      items: [
        {
          week: 1,
          title: "What AI can and cannot do at work",
          topics: [
            "Models, products and prompts: a practical map, not a research lecture",
            "Where generative AI helps with drafting, summarising and analysis — and where it fails",
            "Hallucinations, bias and over-reliance: how they show up in everyday work",
            "A first pass at a use case from your own role"
          ],
          lab: "Compare outputs from an approved AI assistant on a realistic workplace task and note failure modes.",
          ship: "A one-page brief: task, tool, risks, and when a human must review."
        },
        {
          week: 2,
          title: "Data, privacy and shadow AI",
          topics: [
            "What must not be pasted into a public AI tool: personal data, secrets, client material",
            "Approved tools versus unsanctioned use at work",
            "Basic security hygiene when AI is in a workflow",
            "Questions to ask a vendor or an internal IT team"
          ],
          lab: "Walk a sample workflow and mark data that should stay out of a general-purpose model.",
          ship: "A privacy and tool-use checklist for your team."
        }
      ]
    },
    {
      id: "practice",
      number: "02",
      title: "Practice and briefing",
      weeks: "Weeks 3–4",
      summary: "Place the EU AI Act literacy duty in context and practise a responsible-use briefing you can take back to work.",
      checkpoint: "A team-ready literacy briefing and review checklist.",
      after: "Run a short literacy conversation with a team and know where legal advice is still required.",
      items: [
        {
          week: 3,
          title: "EU AI Act literacy in practical terms",
          topics: [
            "Article 4: providers and deployers must take measures so staff and other people dealing with AI systems have a sufficient level of AI literacy, taking into account their role and context",
            "The duty has applied since 2 February 2025; wider AI Act obligations phase in, including from 2 August 2026",
            "It can also apply to organisations outside the EU when their AI systems are used in the Union",
            "Risk categories at a practical level, documentation, transparency and human oversight — not a substitute for legal counsel"
          ],
          lab: "Map your organisation's role (provider, deployer, or both) on a simple worksheet.",
          ship: "A one-page note of literacy measures a team can actually run."
        },
        {
          week: 4,
          title: "Policies, review and a team briefing",
          topics: [
            "What a usable AI-use policy covers — and what it should not promise",
            "Review checklists before an AI-assisted output goes to a customer or a regulator",
            "How to brief non-technical colleagues without fear or hype",
            "Presentations and feedback in the live session"
          ],
          lab: "Deliver a short workplace briefing and receive mentor feedback.",
          ship: "Your literacy briefing and checklist, ready to share internally."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Workplace AI use-case brief",
      body: "Describe a real task from your role, the tool you would use, the risks, and the human review step. This is a briefing, not a software project."
    },
    {
      title: "Team literacy briefing",
      body: "A short presentation and checklist you can take back to a manager or a team. It is not legal advice and not an official EU certificate."
    }
  ],
  toolGroups: [
    { category: "AI assistants you may already use", tools: ["ChatGPT", "Microsoft Copilot", "Gemini", "Claude"] },
    { category: "Workplace practice", tools: ["Review checklists", "Use-case briefs", "Policy worksheets"] }
  ],
  faqs: [
    { q: "Is this an official EU, government or university certificate?", a: "No. Completing the program leads to a Datamarcos certificate of completion. The EU AI Act does not require a specific certificate; it requires organisations to take measures so relevant staff have sufficient AI literacy. This course is practical workplace literacy, not a legal qualification." },
    { q: "How long is the program and how much time does it take?", a: "Four weeks, part-time and live online, at about 3–4 hours a week including the live session and a short practice task." },
    { q: "Who is it for?", a: "Managers, team leads and professionals who need a clear, responsible way to use or oversee AI at work, especially in or selling into the EU and UK. No coding is required." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Europe-oriented groups typically meet after work and on Saturdays. Exact times are confirmed on a counsellor call." },
    { q: "Do I need a technical background?", a: "No. The program is designed for non-engineers. People who want to build production AI systems should look at our longer engineering programs instead." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_AI_Literacy_Responsible_AI_Brochure.pdf",
  image: "/images/intl-courses/ai-literacy-responsible-ai-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos AI Literacy and Responsible AI program",
  metaTitle: "AI Literacy & Responsible AI, 4 Weeks Live | Datamarcos",
  metaDescription: "A 4-week live online AI literacy program for managers and professionals, covering practical responsible use and EU AI Act staff-literacy duties. Fees and EMI options shared on a counsellor call.",
  teaches: ["Workplace AI literacy", "Limits of generative AI", "Data and privacy hygiene when using AI tools", "Practical reading of EU AI Act Article 4 duties", "Responsible-use checklists and team briefings"],
  educationalLevel: "Beginner",
  credentialName: "Datamarcos Certificate of Completion — AI Literacy & Responsible AI",
  applyLead: "Build shared AI literacy",
  applyEm: "your team can use.",
  applyBody: "Share a few details. A counsellor will talk through your background, the next cohort, fees and enrollment. Exact session times are confirmed on that call.",
  applyBullets: [
    "Four weeks, 3–4 hours a week, live and mentor-led",
    "No coding required",
    "A briefing and checklist you can take back to work",
    "Honest scope: not legal advice and not an official EU certificate"
  ],
  trust: ["4 weeks", "Live & mentor-led", "No coding required"],
  successBody: "A Datamarcos counsellor will call you about program fit, the next cohort date and fees. Meanwhile, the brochure has the full 4-week curriculum.",
  related: [
    { href: "/programs/ai-product-strategy-for-leaders", title: "AI Product & Strategy for Leaders", blurb: "A 6-week program for product and business leaders who need to choose and sequence AI work." },
    { href: "/programs/genai-at-work", title: "GenAI at Work", blurb: "A 6-week hands-on course on everyday AI tools and no-code automation." }
  ]
};
