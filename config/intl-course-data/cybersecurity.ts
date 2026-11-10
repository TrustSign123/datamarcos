import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";

export const cybersecurityCourse: IntlCourse = {
  slug: "cybersecurity-with-ai",
  path: "/programs/cybersecurity-with-ai",
  course: "Cybersecurity with AI",
  title: "Cybersecurity with AI",
  fullTitle: "Cybersecurity with AI",
  kicker: "Cybersecurity with AI · Live online · 8 weeks · Mentor-led",
  heroLead: "Cybersecurity",
  heroEm: "with AI.",
  deck: "An eight-week, part-time live program for security and engineering professionals who want to use AI carefully in security operations, and to secure LLM and agent applications against prompt injection, data leakage and related risks. Designed with US learners in mind, including weekend-morning live batches; join from anywhere.",
  promises: [
    "Practise AI-assisted threat detection and alert analysis — and verify every claim the model makes",
    "Map an LLM or agent application against the OWASP Top 10 for LLM applications, in practical terms",
    "Run a short, documented red-team pass on a chat, RAG or agent feature, then recommend controls"
  ],
  durationLabel: "8 weeks",
  durationIso: "P8W",
  weekCount: 8,
  hoursPerWeek: "6–8 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with US learners in mind, including weekend-morning live batches. Join live from anywhere.",
  level: "For people with some IT, security or application background; not a first cybersecurity fundamentals course",
  prereqs: [
    "Some exposure to IT, networks, application logs or security operations is helpful",
    "No prior machine-learning or LLM-engineering experience is required",
    "You should be willing to inspect logs, prompts or application behaviour and write down what you actually checked"
  ],
  audience: [
    "Security analysts, SOC and detection engineers who want a structured way to use AI in investigations",
    "Software and platform engineers who are shipping chat, RAG or agent features and need to secure them",
    "IT and security professionals in the US and other regions who can join a weekend-morning or other live batch",
    "People who already work around logs, alerts or applications, not complete beginners in cybersecurity"
  ],
  notFor: [
    "People looking for an official CompTIA, SANS, (ISC)² or government certificate. This program issues a Datamarcos certificate of completion",
    "Complete beginners who need a first course in cybersecurity fundamentals",
    "People seeking placement or salary guarantees — we do not offer those"
  ],
  outcomes: [
    "Use an AI assistant on a detection or investigation task and verify, with notes, what you accepted, edited or rejected",
    "Write a short investigation or triage brief that a colleague can follow, including residual uncertainty",
    "Describe, in practical terms, the OWASP Top 10 for LLM applications and how it applies to a chat, RAG or agent feature",
    "Spot common prompt-injection and data-leakage patterns and recommend a human review or control step",
    "Plan and document a short red-team pass on an LLM feature, including findings and residual risk",
    "Leave with a capstone pack: a security-ops brief and/or an LLM threat model, plus recommended controls — not a vendor certification"
  ],
  phases: [
    {
      id: "secops",
      number: "01",
      title: "AI in security operations",
      weeks: "Weeks 1–4",
      summary: "Use AI as a checked assistant in detection and investigation work, without handing it unsupervised control.",
      checkpoint: "A verified investigation brief on a realistic alert or log sample.",
      after: "Use an assistant to speed analysis and still be able to explain every claim you publish.",
      items: [
        {
          week: 1,
          title: "Where AI helps in security work — and where it fails",
          topics: [
            "Assisting versus automating: drafting, summarising and clustering, not unsighted close-out",
            "Typical failure modes: invented indicators, missed context, over-confident wording",
            "What must stay a human decision in a security workflow",
            "Choosing a practice task from detection, triage or investigation"
          ],
          lab: "Compare an assistant's summary of a sample alert with the source evidence and list errors.",
          ship: "A one-page note on where AI may and may not be used on your chosen task."
        },
        {
          week: 2,
          title: "Threat detection and log analysis with AI assistance",
          topics: [
            "Writing a precise question over logs or alerts so the answer can be checked",
            "Using an assistant to suggest queries, clusters or next questions",
            "Verifying indicators, timestamps and asset names against the source",
            "A short method note: what the model suggested and what you confirmed"
          ],
          lab: "Run an assisted analysis on a sample log or alert set and tick off every claim.",
          ship: "A checked detection or log-analysis note."
        },
        {
          week: 3,
          title: "Triage, investigation and human review",
          topics: [
            "A triage workflow that includes a review step before any action is taken",
            "Writing an investigation brief another analyst can pick up",
            "What not to paste into a public assistant: secrets, personal data, unreleased findings",
            "When a finding should be escalated rather than auto-closed"
          ],
          lab: "Draft a triage brief from a sample case and mark the human review points.",
          ship: "A triage and investigation brief with a review checklist."
        },
        {
          week: 4,
          title: "Phase checkpoint: a verified security-ops brief",
          topics: [
            "Assembling the analysis, the checks you ran and the residual uncertainty",
            "Peer and mentor review",
            "What the second half of the program will add: securing the AI systems themselves"
          ],
          lab: "Present your security-ops brief and the evidence behind it.",
          ship: "A phase-one packet ready to carry or to stand alone."
        }
      ]
    },
    {
      id: "llmsec",
      number: "02",
      title: "Securing LLM and agent applications",
      weeks: "Weeks 5–8",
      summary: "Threat-model and lightly red-team a chat, RAG or agent feature using public frameworks, then recommend controls.",
      checkpoint: "A threat model, a short red-team note and recommended controls for one LLM feature.",
      after: "Talk about LLM application risk with evidence, not only with a list of tool names.",
      items: [
        {
          week: 5,
          title: "OWASP Top 10 for LLM applications, in practice",
          topics: [
            "The attack surface of a chat, retrieval-augmented or tool-using agent application",
            "The OWASP Top 10 for LLM applications as a working checklist, not as a certificate",
            "How this differs from a traditional web or network review",
            "Picking one feature to threat-model for the rest of the program"
          ],
          lab: "Walk a sample LLM feature and mark relevant OWASP LLM items.",
          ship: "A first-pass threat-model worksheet.",
          tools: "OWASP Top 10 for LLM Applications"
        },
        {
          week: 6,
          title: "Prompt injection, data leakage and output handling",
          topics: [
            "Direct and indirect prompt injection, in practical terms",
            "Sensitive data in prompts, context windows and logs",
            "Insecure output handling: when a model reply is treated as a trusted instruction",
            "Basic mitigations: input and output review, least privilege for tools, and fallbacks"
          ],
          lab: "Attempt a small, authorised prompt-injection test on a practice application and record what happened.",
          ship: "A findings note with suggested controls.",
          tools: "A practice chat or RAG app, review checklists"
        },
        {
          week: 7,
          title: "Red-teaming an LLM or agent feature",
          topics: [
            "Scoping a short red-team pass: goals, rules of engagement and what is out of scope",
            "Recording findings so an engineer can reproduce them",
            "Residual risk: what you did not test",
            "This is structured testing, not a professional penetration-testing or official red-team certification"
          ],
          lab: "Run a short, documented test plan against your chosen feature.",
          ship: "A red-team note with findings and residual risk.",
          tools: "Your test plan and the practice application"
        },
        {
          week: 8,
          title: "Capstone: brief, threat model and recommended controls",
          topics: [
            "Assembling a capstone pack from the security-ops brief and/or the LLM threat model and red-team note",
            "Recommended controls and a short runbook a team could actually follow",
            "Live walk-throughs and mentor feedback"
          ],
          lab: "Present the capstone pack and the checks you ran.",
          ship: "Capstone pack: verified brief and/or LLM threat model, red-team note and recommended controls."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Verified security-ops brief",
      body: "An investigation or detection note on a realistic sample, with an explicit list of what an AI assistant suggested and what you confirmed against the source."
    },
    {
      title: "LLM application threat model",
      body: "A worksheet that maps one chat, RAG or agent feature to the OWASP Top 10 for LLM applications and names realistic controls."
    },
    {
      title: "Capstone: red-team note and recommended controls",
      body: "A short, documented test, residual risk and a runbook. This is coursework, not an official penetration-testing or vendor certification."
    }
  ],
  toolGroups: [
    { category: "Frameworks and practice", tools: ["OWASP LLM Top 10", "Threat-model worksheets", "Red-team test plans"] },
    { category: "AI assistants used with review", tools: ["ChatGPT", "Claude", "Gemini"] },
    { category: "Technical practice", tools: ["Python", "GitHub"] }
  ],
  faqs: [
    { q: "Is this an official CompTIA, SANS, (ISC)² or government certificate?", a: "No. Completing the program leads to a Datamarcos certificate of completion. We use public frameworks such as the OWASP Top 10 for LLM applications as working checklists. We do not award, and do not prepare you for, a third-party certification exam." },
    { q: "How long is the program and how much time does it take?", a: "Eight weeks, part-time and live online, at about 6–8 hours a week including the live session and practice work." },
    { q: "Who is it for?", a: "Security, SOC and detection professionals, and engineers who ship chat, RAG or agent features and need to secure them. Some IT, logging or security exposure is helpful. It is not a first course in cybersecurity fundamentals." },
    { q: "Are the sessions live, and when do US batches meet?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Weekend-morning batches are offered for learners in the US; other regional times are available. Exact days and times are confirmed on a counsellor call." },
    { q: "Do I need to be an AI engineer already?", a: "No. You should be comfortable inspecting logs, prompts or application behaviour. Machine-learning or LLM-engineering experience is not required. Engineers who mainly want to deploy and evaluate production LLM services may also look at LLMOps & AI Evaluation." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_Cybersecurity_with_AI_Brochure.pdf",
  image: "/images/intl-courses/cybersecurity-with-ai-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos Cybersecurity with AI program",
  metaTitle: "Cybersecurity with AI, 8 Weeks Live | Datamarcos",
  metaDescription: "An 8-week live online program on AI in security operations and on securing LLM and agent applications, including OWASP LLM risks, prompt injection and red-teaming. Fees and EMI options shared on a counsellor call.",
  teaches: ["AI-assisted threat detection and log analysis with verification", "Triage and investigation briefs with a human review step", "Practical use of the OWASP Top 10 for LLM applications", "Prompt injection, data leakage and output-handling risks", "Scoping and documenting a short LLM red-team pass"],
  educationalLevel: "Intermediate",
  credentialName: "Datamarcos Certificate of Completion — Cybersecurity with AI",
  applyLead: "Use AI in security work",
  applyEm: "without losing the evidence trail.",
  applyBody: "Share a few details. A counsellor will talk through your background, weekend-morning or other batch times, the next cohort, fees and enrollment.",
  applyBullets: [
    "Eight weeks, 6–8 hours a week, live and mentor-led",
    "US weekend-morning batches, with other regional times available",
    "Security ops plus LLM and agent application security",
    "Honest scope: not an official CompTIA, SANS or (ISC)² certificate, and no placement or salary guarantees"
  ],
  trust: ["8 weeks", "Live & mentor-led", "US weekend mornings"],
  successBody: "A Datamarcos counsellor will call you about program fit, the next cohort date and fees. Meanwhile, the brochure has the full 8-week curriculum.",
  related: [
    { href: "/programs/llmops-ai-evaluation", title: "LLMOps & AI Evaluation", blurb: "A production follow-on if you already build LLM apps and want evaluation, observability and hardening." },
    { href: "/programs/forward-deployed-ai-engineer", title: "Forward Deployed AI Engineer", blurb: "A longer engineering program for people who will ship AI inside a customer's environment." }
  ]
};
