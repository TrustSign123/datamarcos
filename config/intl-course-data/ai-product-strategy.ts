import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const leadersCourse: IntlCourse = {
  slug: "ai-product-strategy-for-leaders",
  path: "/programs/ai-product-strategy-for-leaders",
  course: "AI Product & Strategy for Leaders",
  title: "AI Product & Strategy for Leaders",
  fullTitle: "AI Product & Strategy for Leaders",
  kicker: "AI Product & Strategy for Leaders · Live online · 6 weeks · Mentor-led",
  heroLead: "AI Product & Strategy",
  heroEm: "for Leaders.",
  deck: "A six-week, part-time live program for product managers, founders and business leaders who need to frame AI opportunities, judge build-versus-buy decisions, and brief a delivery team — without becoming an engineer.",
  promises: [
    "Map a real opportunity and write a practical AI problem statement",
    "Practise vendor and build-versus-buy questions, including data readiness",
    "Leave with a strategy brief you can take to stakeholders — not a coding portfolio"
  ],
  durationLabel: "6 weeks",
  durationIso: "P6W",
  weekCount: 6,
  hoursPerWeek: "4–5 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with the US and the Gulf in mind; join live from anywhere.",
  level: "For working product, business and operations leaders",
  prereqs: [
    "No software-engineering background is required",
    "You should have a product, process or business problem you can use as a working example"
  ],
  audience: [
    "Product managers and product owners",
    "Founders and business-unit leaders considering AI initiatives",
    "Operations and strategy leads who work with engineering or vendors",
    "Professionals in the US, Gulf and other regions who need a structured way to plan AI work"
  ],
  notFor: [
    "Engineers looking for a hands-on LLMOps, RAG or agent-building program",
    "People seeking placement guarantees or salary outcomes — we do not offer those"
  ],
  outcomes: [
    "Frame an AI opportunity in terms of a user, a workflow and a measurable outcome",
    "Ask sharper build-versus-buy and vendor questions, including data and evaluation readiness",
    "Spot delivery risks: quality, cost, privacy, and unclear ownership",
    "Brief engineering, vendors or leadership with a short written strategy canvas",
    "Know what good evaluation looks like at a product level, without having to write the code"
  ],
  phases: [
    {
      id: "frame",
      number: "01",
      title: "Frame the opportunity",
      weeks: "Weeks 1–2",
      summary: "Choose a real problem, write it clearly, and test whether AI is actually the right lever.",
      checkpoint: "A problem statement and opportunity map for one initiative.",
      after: "Say no to vague “we should use AI” requests and yes to a narrower, testable use case.",
      items: [
        {
          week: 1,
          title: "Opportunity mapping and problem framing",
          topics: [
            "Separating research demos from a product or process change",
            "Users, jobs-to-be-done and where AI can reasonably help",
            "Value, feasibility and risk as a simple scoring conversation",
            "Picking one initiative to carry through the program"
          ],
          lab: "Draft an opportunity map for a real initiative from your work.",
          ship: "A one-page problem statement."
        },
        {
          week: 2,
          title: "Data readiness and build versus buy",
          topics: [
            "What data you actually have, and what that allows",
            "When to buy a tool, when to start with a vendor, and when to build",
            "Questions for a sales demo or an internal architecture review",
            "Privacy, residency and procurement issues leaders actually face"
          ],
          lab: "Score a buy, build or blend option for your initiative.",
          ship: "A short build-versus-buy note with open questions."
        }
      ]
    },
    {
      id: "shape",
      number: "02",
      title: "Shape the product",
      weeks: "Weeks 3–4",
      summary: "Turn the idea into a product approach: workflow, evaluation and governance a team can run.",
      checkpoint: "A product outline with evaluation and risk notes.",
      after: "Brief a team on what “good” looks like before anyone starts building.",
      items: [
        {
          week: 3,
          title: "AI product thinking",
          topics: [
            "Workflows, human-in-the-loop steps and fallback behaviour",
            "Defining success beyond a model demo: quality, latency, cost and adoption",
            "Evaluation at a product level: golden questions, sampling, human review",
            "Iteration without promising a one-shot launch"
          ],
          lab: "Write a lightweight evaluation plan for your initiative.",
          ship: "A product outline with success measures."
        },
        {
          week: 4,
          title: "Risk, governance and stakeholder communication",
          topics: [
            "Quality failures, bias and customer-facing risk in plain language",
            "Who owns the system after launch",
            "What to put in a leadership update — and what not to over-claim",
            "A short stakeholder narrative for your initiative"
          ],
          lab: "Draft a stakeholder update and review it in the live session.",
          ship: "A governance and communication note."
        }
      ]
    },
    {
      id: "deliver",
      number: "03",
      title: "Plan delivery",
      weeks: "Weeks 5–6",
      summary: "Shape the team, the first release and a strategy brief you can take to work.",
      checkpoint: "A strategy brief and opportunity canvas.",
      after: "Walk into a planning conversation with a written brief, not a slide full of tool logos.",
      items: [
        {
          week: 5,
          title: "Delivery models and team shape",
          topics: [
            "Roles that typically sit around an AI initiative",
            "Phasing a first release so it can be evaluated",
            "Working with internal engineers, vendors or a mixed team",
            "Measuring value after launch, not only at a kick-off"
          ],
          lab: "Sketch a first-release plan and team shape for your initiative.",
          ship: "A delivery outline for one release."
        },
        {
          week: 6,
          title: "Strategy brief and presentation",
          topics: [
            "Assembling the opportunity canvas: problem, approach, risks, measures, ask",
            "Live presentations and mentor feedback",
            "What to do next at work, including when to pause"
          ],
          lab: "Present your strategy brief to the cohort.",
          ship: "A finished strategy brief you can take to stakeholders."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Opportunity map and problem statement",
      body: "A written framing of one real initiative from your work, including who it is for and why AI may or may not be the right lever."
    },
    {
      title: "Leadership strategy brief",
      body: "A short canvas covering approach, data and vendor posture, evaluation, risks and a first release. This is a briefing document, not a software build."
    }
  ],
  toolGroups: [
    { category: "Working materials", tools: ["Opportunity canvas", "Build-vs-buy worksheets", "Evaluation plans", "Stakeholder briefs"] },
    { category: "AI products you may evaluate", tools: ["ChatGPT", "Microsoft Copilot", "Gemini", "Claude"] }
  ],
  faqs: [
    { q: "Do I need to code?", a: "No. This is a product and strategy program for leaders. You will write briefs and plans, not production software. Engineers who want to build and evaluate LLM systems should look at LLMOps & AI Evaluation or our longer engineering programs." },
    { q: "How long is the program?", a: "Six weeks, part-time and live online, at about 4–5 hours a week including the live session and your written work." },
    { q: "Who is it for?", a: "Product managers, founders, and business or operations leaders who need a structured way to choose and sequence AI work. A real initiative from your job is the working example." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led. Weekend-morning batches are offered for learners in the US, with other regional times available. Recordings are shared if you miss a session. Exact times are confirmed on a counsellor call." },
    { q: "Will this get me a new job or a salary increase?", a: "We do not promise placement, salary or promotion outcomes. The program is designed so you can take a clearer AI initiative brief back to your current role or organisation." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_AI_Product_Strategy_Leaders_Brochure.pdf",
  image: "/images/intl-courses/ai-product-strategy-for-leaders-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos AI Product and Strategy for Leaders program",
  metaTitle: "AI Product & Strategy for Leaders, 6 Weeks Live | Datamarcos",
  metaDescription: "A 6-week live online program for product and business leaders: frame AI opportunities, judge build versus buy, and write a strategy brief. Fees and EMI options shared on a counsellor call.",
  teaches: ["AI opportunity mapping", "Build-versus-buy and vendor questions", "AI product evaluation at a leadership level", "Risk and governance communication", "Writing a strategy brief"],
  educationalLevel: "Intermediate",
  credentialName: "Datamarcos Certificate of Completion — AI Product & Strategy for Leaders",
  applyLead: "Walk into the next planning meeting",
  applyEm: "with a written brief.",
  applyBody: `Share a few details. A counsellor will talk through your background, the cohort starting ${NEXT_COHORT_LONG}, fees and enrollment. Exact session times are confirmed on that call.`,
  applyBullets: [
    "Six weeks, 4–5 hours a week, live and mentor-led",
    "Built around one initiative from your work",
    "No coding required",
    "Honest outcomes: no placement or salary guarantees"
  ],
  trust: ["6 weeks", "Live & mentor-led", "No coding required"],
  successBody: `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 6-week curriculum.`,
  related: [
    { href: "/programs/ai-literacy-responsible-ai", title: "AI Literacy & Responsible AI", blurb: "A 4-week literacy program, including practical EU AI Act staff-literacy context." },
    { href: "/programs/forward-deployed-ai-engineer", title: "Forward Deployed AI Engineer", blurb: "A longer engineering program for people who will ship AI inside a customer's environment." }
  ]
};
