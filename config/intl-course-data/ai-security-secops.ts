import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";

export const aiSecuritySecopsCourse: IntlCourse = {
  slug: "ai-security-secops",
  path: "/programs/ai-security-secops",
  course: "AI Security & SecOps",
  title: "AI Security & SecOps",
  fullTitle: "AI Security & SecOps",
  kicker: "AI Security & SecOps · Live online · 16 weeks · Mentor-led",
  heroLead: "AI Security",
  heroEm: "& SecOps.",
  deck: "A 16-week, part-time live program for people who want to secure AI and LLM applications, and to use AI carefully inside security operations. You will threat-model and red-team chat, RAG and agent features, design guardrails and basic governance, then practise AI-assisted detection, triage and incident-response automation with a human approval step. Deeper and more hands-on than our 8-week Cybersecurity with AI introduction.",
  promises: [
    "Threat-model and red-team an LLM or agent application against the OWASP Top 10 for LLM applications",
    "Design practical guardrails, review steps and basic AI-governance artefacts a team can actually run",
    "Build SIEM/SOAR-style workflows that use AI for detection, triage and response — with approvals, verification and a kill switch"
  ],
  durationLabel: "16 weeks",
  durationIso: "P16W",
  weekCount: 16,
  hoursPerWeek: "8–10 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Join live from anywhere. Weekend-morning batches are offered for learners in the US; evening batches (India time) for the Gulf and Africa; Europe-oriented groups typically meet after work and on Saturdays.",
  level: "For people with some IT, security or application background; a deeper hands-on path than our 8-week Cybersecurity with AI course",
  prereqs: [
    "Some exposure to IT, networks, application logs, security operations or application development is helpful",
    "No prior machine-learning or LLM-engineering experience is required",
    "You should be willing to inspect logs, prompts or playbooks and write down what you actually tested",
    "If you are new to both cybersecurity and AI applications, the 8-week Cybersecurity with AI course is a shorter starting point"
  ],
  audience: [
    "Security analysts, SOC, detection and incident-response professionals who want a structured, hands-on path into AI-powered SecOps",
    "Software, platform and security engineers who ship chat, RAG or agent features and need to secure them in depth",
    "IT and security leads who need both LLM-application security and a practical view of SIEM/SOAR automation with AI",
    "Learners who can commit 8–10 hours a week for 16 weeks, joining live from anywhere"
  ],
  notFor: [
    "People looking for an official CompTIA, SANS, GIAC, (ISC)² or government certificate. This program issues a Datamarcos certificate of completion",
    "Complete beginners who need a first course in cybersecurity fundamentals",
    "People who only want a short introduction. Our 8-week Cybersecurity with AI course is the lighter starting point",
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
      id: "foundations",
      number: "01",
      title: "Foundations and threat modelling",
      weeks: "Weeks 1–4",
      summary: "Map the attack surface of AI and LLM applications and write a threat model a colleague can act on.",
      checkpoint: "A first-pass threat model of one LLM, RAG or agent feature.",
      after: "Describe how AI security differs from a traditional web or network review, with a concrete system in mind.",
      items: [
        { week: 1, title: "The AI and LLM attack surface", topics: ["How chat, retrieval and tool-using agents change the attack surface", "What stays the same as traditional application security", "Assets, trust boundaries and where data flows", "Picking one feature you will carry through the first half of the program"], lab: "Sketch the components and data flows of a sample LLM feature.", ship: "A one-page system sketch and a list of open questions." },
        { week: 2, title: "OWASP Top 10 for LLM applications, in depth", topics: ["Walking the OWASP Top 10 for LLM applications as a working checklist, not as a certificate", "Prompt injection, data leakage, insecure output handling and supply-chain issues, in practical terms", "Agent and tool-use risks: least privilege and unexpected actions", "How this list should and should not be used in a review"], lab: "Score a sample application against the list and note gaps in evidence.", ship: "An OWASP-LLM worksheet with evidence notes.", tools: "OWASP Top 10 for LLM Applications" },
        { week: 3, title: "Threat modelling an LLM, RAG or agent feature", topics: ["A lightweight method: assets, threats, existing controls, residual risk", "Indirect prompt injection via retrieved documents or tool output", "What you would need from engineering to test each item", "Writing the model so a non-specialist can read it"], lab: "Draft a threat model for your chosen feature.", ship: "A first-pass threat model.", tools: "Threat-model worksheets" },
        { week: 4, title: "Phase checkpoint: a review-ready threat model", topics: ["Tightening evidence, residual risk and recommended tests", "Peer and mentor review", "What the hands-on security labs will add next"], lab: "Present the threat model and the tests you plan to run.", ship: "A review-ready threat model and a test backlog.", tools: "OWASP LLM Top 10, threat-model worksheets" }
      ]
    },
    {
      id: "appsec",
      number: "02",
      title: "Hands-on LLM and agent security",
      weeks: "Weeks 5–8",
      summary: "Test prompt injection, leakage and tool misuse on a practice application, then design guardrails and a documented red-team pass.",
      checkpoint: "A red-team note, recommended guardrails and residual risk for one feature.",
      after: "Show evidence of what you tested, what you blocked, and what you did not have time to test.",
      items: [
        { week: 5, title: "Prompt injection, in the lab", topics: ["Direct and indirect prompt injection, including documents and tool output", "Jailbreak-style attempts used only on a practice application you are authorised to test", "Recording steps so an engineer can reproduce a finding", "What a single successful injection does and does not prove"], lab: "Run an authorised injection test plan on a practice app and log results.", ship: "An injection findings log.", tools: "A practice chat or RAG app" },
        { week: 6, title: "Data leakage, output handling and tool misuse", topics: ["Sensitive data in prompts, context windows, logs and retrieved documents", "When a model reply is treated as a trusted instruction or as code", "Tool and agent misuse: unexpected actions, over-broad permissions", "Designing a least-privilege tool interface"], lab: "Attempt leakage and insecure-output cases, then tighten a tool permission in the practice app.", ship: "A leakage and tool-misuse note with suggested controls.", tools: "Practice app, review checklists" },
        { week: 7, title: "Guardrails you can actually run", topics: ["Input and output review, allow-lists, structured outputs and fallbacks", "Human-in-the-loop steps that will still be followed under time pressure", "Evaluation gates before a prompt or a tool change is released", "Limits of filters: they reduce risk, they do not eliminate it"], lab: "Add or document a small set of guardrails and re-test an earlier finding.", ship: "A guardrails design and a re-test note.", tools: "Practice app, policy checks" },
        { week: 8, title: "A scoped red-team pass", topics: ["Rules of engagement, scope and what is out of bounds", "A short test plan mapped to the threat model", "Residual risk: what you did not test", "This is structured coursework, not a professional penetration-testing or official red-team certification"], lab: "Execute the test plan and write findings an engineer can act on.", ship: "A red-team report with residual risk.", tools: "Red-team test plans" }
      ]
    },
    {
      id: "gov",
      number: "03",
      title: "Guardrails, monitoring and AI governance basics",
      weeks: "Weeks 9–10",
      summary: "Turn technical findings into logging, review and governance artefacts a team can keep current.",
      checkpoint: "A short governance pack: acceptable use, logging, review and escalation.",
      after: "Hand a manager a practical set of measures, and know when legal or compliance review is still required.",
      items: [
        { week: 9, title: "AI governance basics for teams", topics: ["Acceptable use, ownership and residual-risk language that does not over-claim", "Public frameworks such as the NIST AI Risk Management Framework used as a map, not as a certificate", "When to involve legal, privacy or compliance review", "A one-page governance note a team can actually adopt"], lab: "Draft an acceptable-use and ownership note for your feature.", ship: "A short governance note.", tools: "Policy worksheets" },
        { week: 10, title: "Logging, monitoring and incident notes for AI systems", topics: ["What to log (prompts, retrieval, tool calls) and what must be redacted", "Alerts that are useful versus noise", "An incident note when an LLM feature misbehaves or is abused", "Handover into a wider security-operations process"], lab: "Write a logging and review plan and a sample incident note.", ship: "A monitoring and incident-note pack." }
      ]
    },
    {
      id: "secops",
      number: "04",
      title: "AI-powered SecOps",
      weeks: "Weeks 11–15",
      summary: "Use AI as a checked assistant in detection, triage and response, and design SOAR-style automation with approvals and a kill switch.",
      checkpoint: "An AI-assisted triage workflow and a SOAR-style playbook with human gates.",
      after: "Show how AI can speed SecOps without removing evidence, approval or the ability to stop an action.",
      items: [
        { week: 11, title: "SIEM, SOAR and where AI should sit", topics: ["What a SIEM and a SOAR-style platform are for, in practical terms", "Where AI can help: summarising, clustering, suggesting queries or next steps", "What must stay a human decision: containment, customer notification, legal holds", "You will practise in a SIEM or SOAR-style workflow you can access, or in a practice environment — Datamarcos is not a vendor for those products"], lab: "Map a current or sample alert path and mark where AI may and may not be used.", ship: "A SecOps-plus-AI system sketch.", tools: "A SIEM or SOAR-style practice workflow" },
        { week: 12, title: "Detection and log analysis with AI, verified", topics: ["Writing precise questions over logs or alerts so answers can be checked", "Drafting or translating detection logic with an assistant, then testing it", "Verifying indicators, timestamps and asset names against the source", "A method note: what the model suggested and what you confirmed"], lab: "Run an assisted analysis on a sample log or alert set and tick off every claim.", ship: "A verified detection or log-analysis note.", tools: "Python, a SIEM-style practice workflow" },
        { week: 13, title: "Alert triage and enrichment", topics: ["Enrichment, clustering and a first-pass severity suggestion", "True-positive and false-positive discipline", "Writing a triage brief another analyst can pick up", "What not to paste into a public assistant"], lab: "Triage a small alert batch with AI assistance and a review checklist.", ship: "A triage pack with enrichment notes and review points.", tools: "Practice alert set, review checklists" },
        { week: 14, title: "Incident response automation with a kill switch", topics: ["Turning a playbook into a SOAR-style workflow: triggers, conditions, actions", "Approvals, least privilege, verification and recovery", "Kill switches and rollback when automation is wrong", "Auto-isolation and similar actions only with a clear approval path"], lab: "Design a playbook for one incident type, including the approval and stop conditions.", ship: "A SOAR-style playbook with human gates.", tools: "Playbook templates" },
        { week: 15, title: "Metrics, failure testing and when automation hurts", topics: ["What to measure: time to triage, quality of summaries, automation error rate", "Testing a playbook against a case where the obvious action would be wrong", "Staged rollout of automation, not a single big-bang switch", "A written recommendation on what to automate first, and what to leave manual"], lab: "Failure-test your playbook and revise the gates.", ship: "A revised playbook plus a short automation-risk note." }
      ]
    },
    {
      id: "capstone",
      number: "05",
      title: "Capstone",
      weeks: "Week 16",
      summary: "Assemble an LLM security assessment and a SecOps playbook into one pack a team could review.",
      checkpoint: "A finished capstone and a live walk-through.",
      after: "Show both sides of the work: securing an AI feature, and using AI inside operations with controls.",
      items: [
        { week: 16, title: "Capstone: assessment, playbook and walk-through", topics: ["Assembling the threat model, red-team note, guardrails and governance artefacts", "Assembling the verified SecOps workflow and the SOAR-style playbook", "Live presentations and mentor feedback", "Honest scope: coursework, not an official pentest, GIAC, SANS or vendor certificate"], lab: "Present the capstone pack and the checks you ran.", ship: "Capstone pack: LLM security assessment and SecOps playbook with residual risk." }
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
    { q: "How is this different from Cybersecurity with AI?", a: "Cybersecurity with AI is an 8-week introduction: a first pass at AI in security operations and at securing LLM applications. AI Security & SecOps is a 16-week, more hands-on program. It goes further on threat modelling, prompt injection labs, guardrails, basic AI governance, and SIEM/SOAR-style detection, triage and incident-response automation with approvals and a kill switch. If you want a shorter first course, start with Cybersecurity with AI." },
    { q: "Is this an official CompTIA, SANS, GIAC or government certificate?", a: "No. Completing the program leads to a Datamarcos certificate of completion. We use public frameworks such as the OWASP Top 10 for LLM applications, and we refer to maps such as the NIST AI Risk Management Framework, as working checklists. We do not award, and do not prepare you for, a third-party certification exam." },
    { q: "How long is the program and how much time does it take?", a: "Sixteen weeks, part-time and live online, at about 8–10 hours a week including the live session and practice work." },
    { q: "Who is it for?", a: "Security, SOC, detection and incident-response professionals, and engineers who ship LLM or agent features and need to secure them in depth. Some IT, logging or security exposure is helpful. It is not a first course in cybersecurity fundamentals." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Weekend-morning batches are offered for learners in the US, with other regional times available. Exact times are confirmed on a counsellor call." },
    { q: "Will you teach a specific SIEM or SOAR product?", a: "You will practise SIEM- and SOAR-style workflows — detection, triage, enrichment and playbooks with human gates — in a tool you can access or in a practice environment. Datamarcos is not a vendor for those products, and the program is not a vendor certification." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_AI_Security_SecOps_Brochure.pdf",
  image: "/images/intl-courses/ai-security-secops-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos AI Security and SecOps program",
  metaTitle: "AI Security & SecOps, 16 Weeks Live | Datamarcos",
  metaDescription: "A 16-week live online program on securing LLM and agent applications and on AI-powered SecOps: threat modelling, red-teaming, guardrails, and SIEM/SOAR workflows with human gates. Fees and EMI options shared on a counsellor call.",
  teaches: ["Threat modelling for LLM, RAG and agent applications", "OWASP Top 10 for LLM applications in practical lab work", "Prompt injection, data leakage and tool-misuse testing", "Guardrails and basic AI governance artefacts", "AI-assisted detection, triage and verification in a SIEM-style workflow", "SOAR-style incident-response playbooks with approvals and a kill switch"],
  educationalLevel: "Intermediate",
  credentialName: "Datamarcos Certificate of Completion — AI Security & SecOps",
  applyLead: "Secure AI systems,",
  applyEm: "and use AI in the SOC with controls.",
  applyBody: "Share a few details. A counsellor will talk through your background, how this 16-week path compares with our 8-week Cybersecurity with AI introduction, the next cohort, fees and enrollment.",
  applyBullets: [
    "Sixteen weeks, 8–10 hours a week, live and mentor-led",
    "LLM and agent application security plus AI-powered SecOps",
    "Deeper and more hands-on than the 8-week Cybersecurity with AI introduction",
    "Honest scope: not an official CompTIA, SANS or GIAC certificate, and no placement or salary guarantees"
  ],
  trust: ["16 weeks", "Live & mentor-led", "Hands-on labs"],
  successBody: "A Datamarcos counsellor will call you about program fit, the next cohort date and fees. Meanwhile, the brochure has the full 16-week curriculum.",
  related: [
    { href: "/programs/cybersecurity-with-ai", title: "Cybersecurity with AI", blurb: "An 8-week introduction if you want a shorter first pass at AI in security operations and LLM application security." },
    { href: "/programs/llmops-ai-evaluation", title: "LLMOps & AI Evaluation", blurb: "A production follow-on if you already build LLM apps and want evaluation, observability and hardening." }
  ]
};
