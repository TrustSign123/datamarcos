import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const llmopsCourse: IntlCourse = {
  slug: "llmops-ai-evaluation",
  path: "/programs/llmops-ai-evaluation",
  course: "LLMOps & AI Evaluation",
  title: "LLMOps & AI Evaluation",
  fullTitle: "LLMOps & AI Evaluation in Production",
  kicker: "LLMOps & AI Evaluation · Live online · 8 weeks · Mentor-led",
  heroLead: "LLMOps & AI Evaluation",
  heroEm: "in Production.",
  deck: "An eight-week, part-time live program for engineers who have already built a prototype with large language models and now need to evaluate, observe, deploy and harden it. A natural follow-on if you have already shipped a RAG or agent prototype — including graduates of our GenAI program.",
  promises: [
    "Design an evaluation set and a release bar, not just a demo notebook",
    "Add traces, quality checks and basic cost and latency visibility",
    "Practise deploying an LLM service with a simple API and a repeatable release path"
  ],
  durationLabel: "8 weeks",
  durationIso: "P8W",
  weekCount: 8,
  hoursPerWeek: "8–10 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with the US and the UK in mind; join live from anywhere.",
  level: "For engineers who already have an LLM or RAG prototype",
  prereqs: [
    "Comfortable writing Python",
    "You have built, or can bring, an LLM, RAG or agent prototype — a personal project is enough",
    "Familiarity with Git and a local development workflow"
  ],
  audience: [
    "Software, data and ML engineers who need to take an LLM app beyond a prototype",
    "People who have completed a GenAI or similar program and want a production follow-on",
    "Engineers in the US, UK and other regions working on evaluation, observability or deployment"
  ],
  notFor: [
    "Beginners who have not yet built a first LLM or RAG project — start with a foundations program such as Applied Agentic AI or GenAI & Agentic AI Engineer",
    "Leaders who want strategy without writing code — see AI Product & Strategy for Leaders"
  ],
  outcomes: [
    "Design a golden set, a regression check and a human-review sample for an LLM feature",
    "Instrument traces and basic quality, latency and cost visibility",
    "Version prompts and application code so a change can be reviewed before release",
    "Evaluate retrieval quality on a RAG-style path, not only final answers",
    "Expose the system behind a simple FastAPI service with a repeatable deploy path",
    "Document failure modes, guardrails and a rollback plan for a capstone service"
  ],
  phases: [
    {
      id: "eval",
      number: "01",
      title: "Evaluate before you scale",
      weeks: "Weeks 1–3",
      summary: "Start from a working prototype and put a measurable evaluation and release bar around it.",
      checkpoint: "A golden set and a first evaluation report on your prototype.",
      after: "Know what “better” means for your system before you add more infrastructure.",
      items: [
        {
          week: 1,
          title: "Production failure modes",
          topics: [
            "What breaks when a notebook becomes a service: quality drift, latency, cost, prompt changes",
            "A reference architecture for an LLM application",
            "Choosing the prototype you will harden during the program",
            "Writing down current behaviour before you change it"
          ],
          lab: "Run your prototype against a first slice of representative tasks and record failures.",
          ship: "A short baseline report of quality issues.",
          tools: "Python, Jupyter, Git"
        },
        {
          week: 2,
          title: "Evaluation design",
          topics: [
            "Golden sets, task types and labels a team can maintain",
            "Automatic checks versus human review, and when each is enough",
            "Regression tests so a prompt change cannot silently land",
            "Reporting results so a product partner can read them"
          ],
          lab: "Build a small golden set and a script that scores your prototype.",
          ship: "An evaluation harness and a first score report.",
          tools: "Python, pytest"
        },
        {
          week: 3,
          title: "Observability: traces, latency, cost and quality",
          topics: [
            "Tracing prompts, retrieval and tool calls",
            "Basic dashboards for latency, cost and quality over time",
            "Sampling production traffic for review",
            "What to alert on — and what is just noise"
          ],
          lab: "Add tracing to your prototype and review a handful of traces in class.",
          ship: "Instrumented runs with a simple quality and latency snapshot.",
          tools: "LangSmith or Langfuse, OpenTelemetry"
        }
      ]
    },
    {
      id: "harden",
      number: "02",
      title: "Harden and retrieve well",
      weeks: "Weeks 4–6",
      summary: "Control releases, evaluate retrieval, and add practical safety checks.",
      checkpoint: "A versioned prompt and application path with retrieval and safety notes.",
      after: "Change a prompt or a retriever with a record of what you tested.",
      items: [
        {
          week: 4,
          title: "Prompt and release management",
          topics: [
            "Versioning prompts and application code together",
            "Environments and a simple release bar",
            "Reviewing a change before it reaches users",
            "Rollbacks when quality drops"
          ],
          lab: "Put your prompts in version control and run a pre-release evaluation.",
          ship: "A documented release checklist.",
          tools: "Git, GitHub, pytest"
        },
        {
          week: 5,
          title: "RAG evaluation and retrieval quality",
          topics: [
            "Measuring retrieval separately from the final answer",
            "Chunking, indexing and query changes as hypotheses you can test",
            "Common retrieval failures in production data",
            "A small experiment log"
          ],
          lab: "Score retrieval on a labelled subset and try one improvement.",
          ship: "A retrieval evaluation note with before-and-after scores.",
          tools: "Python, your existing retriever"
        },
        {
          week: 6,
          title: "Safety, guardrails and red-teaming basics",
          topics: [
            "Prompt injection, data leakage and over-confident answers, in practical terms",
            "Lightweight guardrails and fallback behaviour",
            "A short red-team pass on your own service",
            "What still needs a human review step"
          ],
          lab: "Run a short red-team script and record issues.",
          ship: "A safety note and a list of residual risks.",
          tools: "Python, basic policy checks"
        }
      ]
    },
    {
      id: "ship",
      number: "03",
      title: "Serve and capstone",
      weeks: "Weeks 7–8",
      summary: "Put the service behind an API, add a repeatable deploy path, and present the capstone.",
      checkpoint: "A deployed or locally served capstone with evaluation and runbooks.",
      after: "Show a service, an evaluation report and a clear list of what is still manual.",
      items: [
        {
          week: 7,
          title: "Serving with FastAPI, environments and CI",
          topics: [
            "Wrapping the application in a simple FastAPI service",
            "Configuration, secrets and environment separation at a practical level",
            "A basic GitHub Actions path for tests and a build",
            "Docker as a packaging option"
          ],
          lab: "Expose an endpoint and run your evaluation suite in CI.",
          ship: "A served prototype with a passing test job.",
          tools: "FastAPI, Docker, GitHub Actions"
        },
        {
          week: 8,
          title: "Capstone: instrument, evaluate and harden",
          topics: [
            "Assembling the evaluation report, traces, safety note and runbook",
            "Live capstone walk-throughs and mentor feedback",
            "What you would do next in a real team"
          ],
          lab: "Present the capstone service and its evaluation evidence.",
          ship: "Capstone service, evaluation report and a short operations note.",
          tools: "The stack you used in earlier weeks"
        }
      ]
    }
  ],
  projects: [
    {
      title: "Evaluation harness",
      body: "A golden set, a scoring script and a short report on your starting prototype. This is the backbone of the later weeks."
    },
    {
      title: "Instrumented service",
      body: "Traces plus a simple view of quality, latency and cost, with prompts and code under version control."
    },
    {
      title: "Capstone: a hardened LLM service",
      body: "A FastAPI-wrapped service with an evaluation report, a release checklist, a safety note and a short runbook. Depth matters more than a new model demo."
    }
  ],
  toolGroups: [
    { category: "Language & serving", tools: ["Python", "FastAPI", "Docker", "pytest"] },
    { category: "Evaluation & observability", tools: ["LangSmith", "Langfuse", "OpenTelemetry"] },
    { category: "Delivery", tools: ["GitHub", "GitHub Actions"] }
  ],
  faqs: [
    { q: "Do I need prior LLM experience?", a: "Yes. You should already be comfortable in Python and have built, or be able to bring, an LLM, RAG or agent prototype. This is a production follow-on, not a first course in generative AI. Applied Agentic AI or GenAI & Agentic AI Engineer are better starting points if you are new to this work." },
    { q: "How long is the program?", a: "Eight weeks, part-time and live online, at about 8–10 hours a week including live sessions, labs and your capstone work." },
    { q: "What will I build?", a: "You will harden a prototype: an evaluation harness, tracing, a release checklist, retrieval and safety notes, and a FastAPI-wrapped capstone service with a short runbook." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Weekend-morning batches are offered for learners in the US, with other regional times available. Exact times are confirmed on a counsellor call." },
    { q: "Which tools are covered?", a: "Python, pytest, FastAPI, Docker, GitHub Actions, and an observability stack such as LangSmith or Langfuse, plus OpenTelemetry. You work on a prototype you bring or rebuild, rather than a single vendor platform." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_LLMOps_AI_Evaluation_Brochure.pdf",
  image: "/images/intl-courses/llmops-ai-evaluation-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos LLMOps and AI Evaluation program",
  metaTitle: "LLMOps & AI Evaluation in Production, 8 Weeks Live | Datamarcos",
  metaDescription: "An 8-week live online program for engineers who will evaluate, observe, deploy and harden LLM applications in production. Fees and EMI options shared on a counsellor call.",
  teaches: ["LLM evaluation and golden sets", "Observability for LLM applications", "Prompt and release management", "RAG retrieval evaluation", "Safety and basic red-teaming", "Serving with FastAPI and a simple CI path"],
  educationalLevel: "Intermediate",
  credentialName: "Datamarcos Certificate of Completion — LLMOps & AI Evaluation",
  applyLead: "Take a prototype",
  applyEm: "past the demo.",
  applyBody: `Share a few details. A counsellor will talk through your background, the prototype you can bring, the cohort starting ${NEXT_COHORT_LONG}, fees and enrollment.`,
  applyBullets: [
    "Eight weeks, 8–10 hours a week, live and mentor-led",
    "Built around a prototype you already have or can rebuild",
    "Evaluation, observability, safety and a served capstone",
    "Honest outcomes: no placement or salary guarantees"
  ],
  trust: ["8 weeks", "Live & mentor-led", "Python required"],
  successBody: `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 8-week curriculum.`,
  related: [
    { href: "/programs/genai-agentic-ai-engineer", title: "GenAI & Agentic AI Engineer", blurb: "A longer foundations-to-agents program if you do not yet have a prototype to harden." },
    { href: "/programs/forward-deployed-ai-engineer", title: "Forward Deployed AI Engineer", blurb: "A 22-week program for engineers who will ship AI inside a customer's environment." }
  ]
};
