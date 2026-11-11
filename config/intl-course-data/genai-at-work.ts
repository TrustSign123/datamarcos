import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const genaiAtWorkCourse: IntlCourse = {
  slug: "genai-at-work",
  path: "/programs/genai-at-work",
  course: "GenAI at Work",
  title: "GenAI at Work",
  fullTitle: "GenAI at Work: AI Tools & No-code Automation",
  kicker: "GenAI at Work · Live online · 6 weeks · Mentor-led",
  heroLead: "GenAI at Work:",
  heroEm: "tools & no-code automation.",
  deck: "A six-week, part-time live program for working professionals who want to use ChatGPT and similar assistants well, then connect them to everyday tools with no-code automation. Sessions are designed to be followable on a laptop or a phone, with recordings if you miss a class.",
  promises: [
    "Build a personal set of prompts and workflows for writing, research and meetings",
    "Connect an assistant to everyday tools with no-code automation such as Zapier",
    "Learn when not to use AI, including privacy and quality checks — no coding required"
  ],
  durationLabel: "6 weeks",
  durationIso: "P6W",
  weekCount: 6,
  hoursPerWeek: "5–8 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with Africa and the Gulf in mind, including evening batches on India time; join live from anywhere.",
  level: "Introductory, no coding required",
  prereqs: [
    "No coding or prior AI experience is required",
    "You should have a laptop or a smartphone and a workplace or personal workflow you can practise on"
  ],
  audience: [
    "Office, operations, sales, marketing, HR and administrative professionals",
    "People in Africa, the Gulf and other regions who want practical AI-tool skills rather than an engineering syllabus",
    "Anyone who wants a structured way to use assistants and simple automations at work"
  ],
  notFor: [
    "Engineers who want to build RAG systems, agents or production APIs — see our engineering programs",
    "People looking for placement or salary guarantees — we do not offer those"
  ],
  outcomes: [
    "Use a general-purpose AI assistant for writing, research and meeting follow-up with a clear review step",
    "Apply prompt patterns that are specific enough to be useful, and know when the output is wrong",
    "Draft documents, sheets and presentations with AI assistance without handing over the final sign-off",
    "Build a small no-code automation that connects an assistant to a tool you already use",
    "Apply a short privacy and quality checklist, including when not to use AI",
    "Leave with a personal playbook and one workplace automation you can keep using"
  ],
  phases: [
    {
      id: "daily",
      number: "01",
      title: "Daily AI workflows",
      weeks: "Weeks 1–3",
      summary: "Get fluent with an AI assistant on the work you already do, with quality checks built in.",
      checkpoint: "A personal prompt set for writing, research and meetings.",
      after: "Use an assistant as a drafting partner, not as an unsupervised author.",
      items: [
        {
          week: 1,
          title: "Practical literacy and prompt patterns",
          topics: [
            "What current assistants are good at, and where they invent or miss context",
            "Prompt patterns for clear instructions, examples and constraints",
            "Choosing an approved tool at work versus a personal account",
            "A first pass at a playbook for your role"
          ],
          lab: "Rewrite a real work task as a prompt and compare two outputs.",
          ship: "A short personal prompt set."
        },
        {
          week: 2,
          title: "Writing, research and meetings",
          topics: [
            "Drafting and editing emails, notes and short documents",
            "Research with sources you can check",
            "Meeting notes, action lists and follow-ups",
            "A human review step before anything is sent"
          ],
          lab: "Run a meeting-to-actions workflow on a sample recording or notes.",
          ship: "A repeatable writing and meeting workflow."
        },
        {
          week: 3,
          title: "Documents, spreadsheets and presentations",
          topics: [
            "Using AI assistance inside documents and slides",
            "Cleaning and summarising tabular information carefully",
            "Keeping numbers and claims tied to a source",
            "A quality pass before a deck or a sheet is shared"
          ],
          lab: "Produce a short deck or a cleaned table from source notes.",
          ship: "A document or presentation workflow with a review checklist."
        }
      ]
    },
    {
      id: "automate",
      number: "02",
      title: "Automate and playbook",
      weeks: "Weeks 4–6",
      summary: "Connect tools with no-code automation, set privacy rules, and finish a workplace playbook.",
      checkpoint: "One working automation and a written playbook.",
      after: "Show a small automation you can maintain, plus rules for when not to use AI.",
      items: [
        {
          week: 4,
          title: "No-code automation with AI",
          topics: [
            "What no-code tools such as Zapier can connect, and what they should not touch",
            "Triggers, steps and hand-offs a non-engineer can maintain",
            "Adding an AI step without sending sensitive data",
            "Testing and failure handling at a basic level"
          ],
          lab: "Build a small automation, for example turning a form or an email into a draft note.",
          ship: "A working no-code automation in a practice account."
        },
        {
          week: 5,
          title: "Quality, privacy and when not to use AI",
          topics: [
            "Personal data, client material and credentials — what stays out of a tool",
            "Checking facts, figures and tone",
            "Tasks that should remain fully human",
            "A short personal policy you can actually follow"
          ],
          lab: "Audit your automation and prompt set against the privacy checklist.",
          ship: "A privacy and quality checklist for your playbook."
        },
        {
          week: 6,
          title: "Personal playbook and workplace project",
          topics: [
            "Assembling prompts, workflows, the automation and the checklist",
            "Live walk-throughs and mentor feedback",
            "How to keep the playbook current after the program"
          ],
          lab: "Present your playbook and automation to the cohort.",
          ship: "A personal GenAI-at-work playbook and one automation."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Personal prompt and workflow set",
      body: "Reusable prompts and steps for writing, research and meetings in your role, each with a human review step."
    },
    {
      title: "Workplace automation and playbook",
      body: "One no-code automation plus a short written playbook covering tools, privacy rules and when not to use AI."
    }
  ],
  toolGroups: [
    { category: "AI assistants", tools: ["ChatGPT", "Gemini", "Claude", "Microsoft Copilot"] },
    { category: "Everyday work", tools: ["Google Workspace", "Microsoft 365"] },
    { category: "No-code automation", tools: ["Zapier"] }
  ],
  faqs: [
    { q: "Do I need to code?", a: "No. The program uses everyday AI assistants and no-code automation. Engineers who want to build production AI systems should look at our engineering programs instead." },
    { q: "How long is the program?", a: "Six weeks, part-time and live online, at about 5–8 hours a week including the live session and practice tasks." },
    { q: "Who is it for?", a: "Working professionals in non-engineering roles — operations, sales, marketing, HR, administration and similar — who want practical skill with AI tools and simple automations." },
    { q: "Are the sessions live, and can I join from a phone?", a: "Sessions are live and mentor-led. Materials are designed to be followable on a laptop or a phone, and recordings are shared if you miss a class. Evening batches on India time are offered for learners in the Gulf and Africa. Exact times are confirmed on a counsellor call." },
    { q: "Which tools are covered?", a: "General-purpose assistants such as ChatGPT, Gemini, Claude or Microsoft Copilot, everyday workplace suites, and no-code automation such as Zapier. You practise in your own accounts; Datamarcos is not a vendor for those products." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_GenAI_at_Work_Brochure.pdf",
  image: "/images/intl-courses/genai-at-work-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos GenAI at Work program",
  metaTitle: "GenAI at Work: AI Tools & No-code Automation, 6 Weeks Live | Datamarcos",
  metaDescription: "A 6-week live online program on everyday AI assistants and no-code automation for working professionals. No coding required. Fees and EMI options shared on a counsellor call.",
  teaches: ["Practical prompt patterns for workplace tasks", "Writing, research and meeting workflows with AI assistants", "AI-assisted documents and presentations", "No-code automation with tools such as Zapier", "Privacy, quality and when not to use AI"],
  educationalLevel: "Beginner",
  credentialName: "Datamarcos Certificate of Completion — GenAI at Work",
  applyLead: "Put AI tools to work",
  applyEm: "in the job you already have.",
  applyBody: `Share a few details. A counsellor will talk through your background, the cohort starting ${NEXT_COHORT_LONG}, fees and enrollment. Evening batches on India time are available for the Gulf and Africa.`,
  applyBullets: [
    "Six weeks, 5–8 hours a week, live and mentor-led",
    "No coding required; recordings if you miss a class",
    "A personal playbook and one workplace automation",
    "Honest outcomes: no placement or salary guarantees"
  ],
  trust: ["6 weeks", "Live & mentor-led", "No coding required"],
  successBody: `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 6-week curriculum.`,
  related: [
    { href: "/programs/data-analytics-with-ai", title: "Data Analytics with AI", blurb: "A longer program if you want SQL, Python and BI alongside AI-assisted analysis." },
    { href: "/programs/ai-literacy-responsible-ai", title: "AI Literacy & Responsible AI", blurb: "A shorter literacy program with practical EU AI Act context for managers and teams." }
  ]
};
