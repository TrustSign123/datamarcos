import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const aiSecuritySecopsCourse: IntlCourse = {
  slug: "ai-security-secops",
  path: "/programs/ai-security-secops",
  course: "AI Security & SecOps",
  title: "AI Security & SecOps",
  fullTitle: "AI Security & SecOps",
  kicker: "AI Security & SecOps · Live online · 8 weeks · Mentor-led",
  heroLead: "AI Security",
  heroEm: "& SecOps.",
  deck: "An 8-week, part-time live program for people who already have some IT, security or application background and want an advanced, lab-heavy path: securing AI and LLM applications, and using AI carefully inside security operations. You will threat-model and red-team chat, RAG and agent features, design guardrails and basic governance, then practise AI-assisted detection, triage and incident-response automation with a human approval step. Same length as our Cybersecurity with AI introduction, but built around labs, a scoped red-team and a SOAR-style playbook — not a first-pass survey.",
  promises: [
    "Threat-model and red-team an LLM or agent application against the OWASP Top 10 for LLM applications, in the lab",
    "Design practical guardrails, review steps and basic AI-governance artefacts a team can actually run",
    "Build SIEM/SOAR-style workflows that use AI for detection, triage and response — with approvals, verification and a kill switch"
  ],
  durationLabel: "8 weeks",
  durationIso: "P8W",
  weekCount: 8,
  hoursPerWeek: "6–8 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Join live from anywhere. Weekend-morning batches are offered for learners in the US; evening batches (India time) for the Gulf and Africa; Europe-oriented groups typically meet after work and on Saturdays.",
  level: "For people with some IT, security or application background; an advanced, lab-heavy path compared with our 8-week Cybersecurity with AI introduction",
  prereqs: [
    "Some exposure to IT, networks, application logs, security operations or application development is expected",
    "No prior machine-learning or LLM-engineering experience is required",
    "You should be willing to inspect logs, prompts or playbooks and write down what you actually tested",
    "If you are new to both cybersecurity and AI applications, start with the 8-week Cybersecurity with AI introduction"
  ],
  audience: [
    "Security analysts, SOC, detection and incident-response professionals who want a lab-heavy path into AI-powered SecOps",
    "Software, platform and security engineers who ship chat, RAG or agent features and need to secure them in depth",
    "IT and security leads who need both LLM-application security labs and a practical SIEM/SOAR automation exercise with AI",
    "Learners who can commit 6–8 hours a week for 8 weeks, joining live from anywhere, and who already have some IT or security context"
  ],
  notFor: [
    "People looking for an official CompTIA, SANS, GIAC, (ISC)² or government certificate. This program issues a Datamarcos certificate of completion",
    "Complete beginners who need a first course in cybersecurity fundamentals",
    "People who want a first introduction to AI in security. Our 8-week Cybersecurity with AI course is the lighter starting point",
    "People seeking placement or salary guarantees — we do not offer those"
  ],
  outcomes: [
    "Produce a written threat model of a chat, RAG or agent feature mapped to the OWASP Top 10 for LLM applications",
    "Run a scoped, documented red-team pass, including prompt injection and data-leakage tests, and record residual risk",
    "Recommend and sketch guardrails: input and output review, least privilege for tools, fallbacks and a human approval step",
    "Draft basic AI-governance artefacts: an acceptable-use note, a logging and review plan, and when to involve legal or compliance review",
    "Design an AI-assisted detection or triage workflow in a SIEM-style setting, with every model claim verified against source evidence",
    "Build a SOAR-style response playbook with approvals, least privilege, verification and a kill switch — not unsighted automation",
    "Leave with a capstone pack: an LLM security assessment and a SecOps playbook, not a vendor or professional pentest certification"
  ],
  phases: [
    {
      id: "appsec-labs",
      number: "01",
      title: "Labs: securing LLM and agent applications",
      weeks: "Weeks 1–3",
      summary: "Map the attack surface, practise prompt injection in the lab, then run a scoped red-team and design guardrails you can re-test.",
      checkpoint: "A threat model, injection findings log, red-team note and recommended guardrails for one feature.",
      after: "Show evidence of what you tested, what you blocked, and what you did not have time to test.",
      items: [
        { week: 1, title: "Attack surface, OWASP LLM Top 10 and a first-pass threat model", topics: ["How chat, retrieval and tool-using agents change the attack surface", "Walking the OWASP Top 10 for LLM applications as a working checklist, not as a certificate", "A lightweight threat-model method: assets, threats, existing controls, residual risk", "Picking one chat, RAG or agent feature you will carry through the labs"], lab: "Sketch the system, score it against the OWASP list, and draft a first-pass threat model.", ship: "A system sketch, an OWASP-LLM worksheet and a first-pass threat model.", tools: "OWASP Top 10 for LLM Applications, threat-model worksheets" },
        { week: 2, title: "Prompt injection labs", topics: ["Direct and indirect prompt injection, including documents and tool output", "Jailbreak-style attempts used only on a practice application you are authorised to test", "Recording steps so an engineer can reproduce a finding", "What a single successful injection does and does not prove"], lab: "Run an authorised injection test plan on a practice app and log results.", ship: "An injection findings log.", tools: "A practice chat or RAG app" },
        { week: 3, title: "Red-teaming, leakage, tool misuse and guardrails", topics: ["Sensitive data in prompts, context windows, logs and retrieved documents", "Tool and agent misuse: unexpected actions and over-broad permissions", "Guardrails you can actually run: input and output review, least privilege, fallbacks and a human step", "A scoped red-team pass: rules of engagement, residual risk, and findings an engineer can act on", "This is structured coursework, not a professional penetration-testing or official red-team certification"], lab: "Execute a short test plan, tighten a small set of guardrails, and re-test an earlier finding.", ship: "A red-team report with recommended guardrails and residual risk.", tools: "Practice app, red-team test plans, review checklists" }
      ]
    },
    {
      id: "gov",
      number: "02",
      title: "AI governance basics",
      weeks: "Week 4",
      summary: "Turn technical findings into logging, review and governance artefacts a team can keep current.",
      checkpoint: "A short governance pack: acceptable use, logging, review and escalation.",
      after: "Hand a manager a practical set of measures, and know when legal or compliance review is still required.",
      items: [
        { week: 4, title: "Governance, logging and an incident note for AI systems", topics: ["Acceptable use, ownership and residual-risk language that does not over-claim", "Public frameworks such as the NIST AI Risk Management Framework used as a map, not as a certificate", "What to log (prompts, retrieval, tool calls) and what must be redacted", "When to involve legal, privacy or compliance review, and a sample incident note"], lab: "Draft an acceptable-use note, a logging and review plan, and a sample incident note for your feature.", ship: "A short governance and monitoring pack.", tools: "Policy worksheets" }
      ]
    },
    {
      id: "secops",
      number: "03",
      title: "AI-powered SecOps",
      weeks: "Weeks 5–7",
      summary: "Use AI as a checked assistant in detection and triage, then design SOAR-style automation with approvals and a kill switch.",
      checkpoint: "A verified detection or triage workflow and a SOAR-style playbook with human gates.",
      after: "Show how AI can speed SecOps without removing evidence, approval or the ability to stop an action.",
      items: [
        { week: 5, title: "AI-assisted detection and log analysis, verified", topics: ["What a SIEM-style workflow is for, and where AI may and may not sit", "Writing precise questions over logs or alerts so answers can be checked", "Drafting or translating detection logic with an assistant, then testing it", "Verifying indicators, timestamps and asset names against the source", "You will practise in a SIEM or SOAR-style workflow you can access, or in a practice environment — Datamarcos is not a vendor for those products"], lab: "Run an assisted analysis on a sample log or alert set and tick off every claim.", ship: "A verified detection or log-analysis note.", tools: "Python, a SIEM-style practice workflow" },
        { week: 6, title: "Alert triage and enrichment", topics: ["Enrichment, clustering and a first-pass severity suggestion", "True-positive and false-positive discipline", "Writing a triage brief another analyst can pick up", "What not to paste into a public assistant"], lab: "Triage a small alert batch with AI assistance and a review checklist.", ship: "A triage pack with enrichment notes and review points.", tools: "Practice alert set, review checklists" },
        { week: 7, title: "SOAR-style incident response with a kill switch", topics: ["Turning a playbook into a SOAR-style workflow: triggers, conditions, actions", "Approvals, least privilege, verification and recovery", "Kill switches and rollback when automation is wrong", "Testing the playbook against a case where the obvious action would be wrong", "Auto-isolation and similar actions only with a clear approval path"], lab: "Design a playbook for one incident type, including approval and stop conditions, then failure-test the gates.", ship: "A SOAR-style playbook with human gates and a short automation-risk note.", tools: "Playbook templates" }
      ]
    },
    {
      id: "capstone",
      number: "04",
      title: "Capstone",
      weeks: "Week 8",
      summary: "Assemble an LLM security assessment and a SecOps playbook into one pack a team could review.",
      checkpoint: "A finished capstone and a live walk-through.",
      after: "Show both sides of the work: securing an AI feature, and using AI inside operations with controls.",
      items: [
        { week: 8, title: "Capstone: assessment, playbook and walk-through", topics: ["Assembling the threat model, red-team note, guardrails and governance artefacts", "Assembling the verified SecOps workflow and the SOAR-style playbook", "Live presentations and mentor feedback", "Honest scope: coursework, not an official pentest, GIAC, SANS or vendor certificate"], lab: "Present the capstone pack and the checks you ran.", ship: "Capstone pack: LLM security assessment and SecOps playbook with residual risk." }
      ]
    }
  ],
  projects: [
    { title: "LLM application threat model and red-team note", body: "A written threat model mapped to the OWASP Top 10 for LLM applications, plus a scoped, documented red-team pass with residual risk." },
    { title: "Guardrails and governance pack", body: "Input and output review, least-privilege tool use, a logging and review plan, and a short acceptable-use note. Not a legal or official compliance certificate." },
    { title: "Capstone: AI-assisted SecOps playbook", body: "A verified triage or detection workflow and a SOAR-style response playbook with approvals, verification and a kill switch, presented with the LLM security assessment." }
  ],
  toolGroups: [
    { category: "Frameworks and practice", tools: ["OWASP LLM Top 10", "Threat-model worksheets", "Red-team test plans", "Playbook templates"] },
    { category: "SecOps practice", tools: ["Python", "GitHub"] },
    { category: "AI assistants used with review", tools: ["ChatGPT", "Claude"] }
  ],
  faqs: [
    { q: "How is this different from Cybersecurity with AI?", a: "Both programs are 8 weeks and part-time. Cybersecurity with AI is the introduction: a first pass at AI in security operations and at securing LLM applications. AI Security & SecOps is the advanced, lab-heavy course. You spend more time in labs — prompt injection tests, a scoped red-team, guardrails you re-test, basic AI-governance artefacts, and a SIEM/SOAR-style detection, triage and incident-response playbook with approvals and a kill switch. If you want a first course, start with Cybersecurity with AI." },
    { q: "Is this an official CompTIA, SANS, GIAC or government certificate?", a: "No. Completing the program leads to a Datamarcos certificate of completion. We use public frameworks such as the OWASP Top 10 for LLM applications, and we refer to maps such as the NIST AI Risk Management Framework, as working checklists. We do not award, and do not prepare you for, a third-party certification exam." },
    { q: "How long is the program and how much time does it take?", a: "Eight weeks, part-time and live online, at about 6–8 hours a week including the live session and lab work." },
    { q: "Who is it for?", a: "Security, SOC, detection and incident-response professionals, and engineers who ship LLM or agent features and need to secure them in depth. Some IT, logging or security exposure is expected. It is not a first course in cybersecurity fundamentals, and it is not the lighter introduction — that is Cybersecurity with AI." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Weekend-morning batches are offered for learners in the US, with other regional times available. Exact times are confirmed on a counsellor call." },
    { q: "Will you teach a specific SIEM or SOAR product?", a: "You will practise SIEM- and SOAR-style workflows — detection, triage, enrichment and playbooks with human gates — in a tool you can access or in a practice environment. Datamarcos is not a vendor for those products, and the program is not a vendor certification." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_AI_Security_SecOps_Brochure.pdf",
  image: "/images/intl-courses/ai-security-secops-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos AI Security and SecOps program",
  metaTitle: "AI Security & SecOps, 8 Weeks Live | Datamarcos",
  metaDescription: "An 8-week live, lab-heavy program on securing LLM and agent applications and on AI-powered SecOps: threat modelling, red-teaming, guardrails, and SIEM/SOAR workflows with human gates. Fees and EMI options shared on a counsellor call.",
  teaches: ["Threat modelling for LLM, RAG and agent applications", "OWASP Top 10 for LLM applications in practical lab work", "Prompt injection, data leakage and tool-misuse testing", "Guardrails and basic AI governance artefacts", "AI-assisted detection, triage and verification in a SIEM-style workflow", "SOAR-style incident-response playbooks with approvals and a kill switch"],
  educationalLevel: "Intermediate",
  credentialName: "Datamarcos Certificate of Completion — AI Security & SecOps",
  applyLead: "Secure AI systems,",
  applyEm: "and use AI in the SOC with controls.",
  applyBody: `Share a few details. A counsellor will talk through your background, how this lab-heavy 8-week path compares with our Cybersecurity with AI introduction, the cohort starting ${NEXT_COHORT_LONG}, fees and enrollment.`,
  applyBullets: [
    "Eight weeks, 6–8 hours a week, live and mentor-led",
    "Lab-heavy: LLM and agent application security plus AI-powered SecOps",
    "The advanced counterpart to the 8-week Cybersecurity with AI introduction",
    "Honest scope: not an official CompTIA, SANS or GIAC certificate, and no placement or salary guarantees"
  ],
  trust: ["8 weeks", "Live & mentor-led", "Lab-heavy"],
  successBody: `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 8-week curriculum.`,
  related: [
    { href: "/programs/cybersecurity-with-ai", title: "Cybersecurity with AI", blurb: "The 8-week introduction if you want a first pass at AI in security operations and LLM application security before this lab-heavy course." },
    { href: "/programs/llmops-ai-evaluation", title: "LLMOps & AI Evaluation", blurb: "A production follow-on if you already build LLM apps and want evaluation, observability and hardening." }
  ]
};
