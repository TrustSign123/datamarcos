import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";
import { NEXT_COHORT_LONG } from "@/config/cohort";

export const analyticsCourse: IntlCourse = {
  slug: "data-analytics-with-ai",
  path: "/programs/data-analytics-with-ai",
  course: "Data Analytics with AI",
  title: "Data Analytics with AI",
  fullTitle: "Data Analytics with AI (SQL, Python, BI)",
  kicker: "Data Analytics with AI · Live online · 16 weeks · Mentor-led",
  heroLead: "Data Analytics",
  heroEm: "with AI.",
  deck: "A 16-week, part-time live program that takes you from spreadsheets to SQL, Python and a BI dashboard, and shows how to use AI as an assistant in that work — with the same care you would give any other analysis. A possible later path is our Advance Data Engineering program if you decide to go further.",
  promises: [
    "Learn SQL and Python for analysis by working through structured labs, not only watching videos",
    "Build a dashboard and a written narrative on a dataset you can show",
    "Use AI to draft queries and explanations, then verify the numbers yourself"
  ],
  durationLabel: "16 weeks",
  durationIso: "P16W",
  weekCount: 16,
  hoursPerWeek: "8–10 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Designed with Africa, the Gulf and the UK in mind; join live from anywhere.",
  level: "Introductory to intermediate; no prior programming required",
  prereqs: [
    "No prior programming is required; comfort with spreadsheets is helpful",
    "You will need a laptop that can run a browser and a Python environment, plus time for weekly labs"
  ],
  audience: [
    "Career starters and career-switchers who want a structured path into analysis work",
    "Analysts and operations professionals who want SQL, Python and BI, not only spreadsheets",
    "Learners in Africa, the Gulf, the UK and other regions who can commit 8–10 hours a week for 16 weeks"
  ],
  notFor: [
    "Experienced data engineers looking for Spark, warehouse architecture or production pipelines — see Advance Data Engineering with GenAI",
    "People seeking placement or salary guarantees — we do not offer those"
  ],
  outcomes: [
    "Clean and describe a dataset in a spreadsheet, and ask a precise analytical question",
    "Write SQL to filter, join and aggregate tables for an analysis",
    "Use Python (including pandas) to wrangle tabular data and produce clear charts",
    "Build a BI dashboard and a short written narrative a decision-maker can read",
    "Use an AI assistant to draft queries or explanations, then check the results yourself",
    "Know what a later data-engineering path would involve, without being pushed into it"
  ],
  phases: [
    {
      id: "sheets",
      number: "01",
      title: "Questions and spreadsheets",
      weeks: "Weeks 1–4",
      summary: "Start with the habit of a clear question, clean data and honest descriptive statistics.",
      checkpoint: "A cleaned spreadsheet and a one-page question brief.",
      after: "Trust a table only after you have checked types, missing values and obvious errors.",
      items: [
        {
          week: 1,
          title: "Asking a useful question",
          topics: [
            "Descriptive, comparative and diagnostic questions",
            "What a dataset can and cannot answer",
            "A first look at the capstone-style dataset you will grow through the program",
            "Using an AI assistant to critique a question — then tightening it yourself"
          ],
          lab: "Write three candidate questions and reject the ones the data cannot support.",
          ship: "A one-page analysis question brief."
        },
        {
          week: 2,
          title: "Spreadsheets and data hygiene",
          topics: [
            "Types, missing values, duplicates and units",
            "Sorting, filtering and lookup patterns",
            "A reproducible cleaning log, not ad-hoc edits",
            "When a spreadsheet is enough, and when it is not"
          ],
          lab: "Clean a messy table and record every step.",
          ship: "A cleaned workbook and a short cleaning log."
        },
        {
          week: 3,
          title: "Descriptive statistics that stay honest",
          topics: [
            "Averages, spreads and simple distributions, in plain language",
            "Why a single headline number is often misleading",
            "Comparisons across groups without over-claiming",
            "Charts that match the question"
          ],
          lab: "Compute and chart a small set of descriptive measures.",
          ship: "A descriptive summary with charts and caveats."
        },
        {
          week: 4,
          title: "Phase checkpoint: a clean brief",
          topics: [
            "Putting the question, the cleaned table and the first charts together",
            "Peer and mentor feedback",
            "What SQL will let you do next"
          ],
          lab: "Present your brief and cleaned data.",
          ship: "A phase-one packet ready for SQL work."
        }
      ]
    },
    {
      id: "sql",
      number: "02",
      title: "SQL for analysis",
      weeks: "Weeks 5–8",
      summary: "Move the same questions into SQL so you can work with larger, relational tables.",
      checkpoint: "A SQL workbook that answers your question from multiple tables.",
      after: "Write SELECT, JOIN and GROUP BY queries you can explain line by line.",
      items: [
        {
          week: 5,
          title: "SQL foundations",
          topics: [
            "Tables, rows and a mental model of a query",
            "SELECT, WHERE, ORDER BY and LIMIT",
            "NULL handling and simple expressions",
            "Drafting a query with an AI assistant, then reading and fixing it"
          ],
          lab: "Rewrite spreadsheet filters as SQL.",
          ship: "A first SQL workbook.",
          tools: "SQL"
        },
        {
          week: 6,
          title: "Joins and more than one table",
          topics: [
            "Inner and outer joins, and why row counts change",
            "Keys, duplicates and accidental many-to-many joins",
            "Keeping a query readable",
            "Checking a join result against a known sample"
          ],
          lab: "Join two or three tables and prove the grain of the result.",
          ship: "A joined table for your analysis question.",
          tools: "SQL"
        },
        {
          week: 7,
          title: "Aggregation and grouping",
          topics: [
            "GROUP BY, HAVING and common aggregate functions",
            "Conditional aggregation",
            "Window functions at a practical introductory level",
            "Common mistakes with averages of averages"
          ],
          lab: "Answer a grouped comparison in SQL.",
          ship: "An aggregate query set with checks.",
          tools: "SQL"
        },
        {
          week: 8,
          title: "Phase checkpoint: a SQL analysis",
          topics: [
            "Assembling a short SQL analysis of your question",
            "Documenting assumptions and residual data issues",
            "Mentor review"
          ],
          lab: "Present the SQL analysis and the checks you ran.",
          ship: "A SQL workbook and a one-page findings note.",
          tools: "SQL"
        }
      ]
    },
    {
      id: "python",
      number: "03",
      title: "Python for analysis",
      weeks: "Weeks 9–12",
      summary: "Use Python and pandas for wrangling and charts that go beyond a single SQL result.",
      checkpoint: "A notebook that cleans, analyses and charts your dataset.",
      after: "Reproduce your analysis in a notebook another person can rerun.",
      items: [
        {
          week: 9,
          title: "Python start for analysts",
          topics: [
            "Notebooks, variables, functions and reading tabular files",
            "How this differs from a spreadsheet, and why that helps",
            "Using an AI assistant to explain an error, then fixing it yourself"
          ],
          lab: "Load your dataset in a notebook and print a sound overview.",
          ship: "A starting notebook with checks.",
          tools: "Python, Jupyter"
        },
        {
          week: 10,
          title: "Wrangling with pandas",
          topics: [
            "Selecting, filtering and deriving columns",
            "Missing values, types and joins in pandas",
            "Group-by operations that match your SQL work",
            "Keeping a reproducible cleaning trail"
          ],
          lab: "Reproduce your SQL cleaning and aggregates in pandas.",
          ship: "A wrangled dataframe and a cleaning section in the notebook.",
          tools: "Python, pandas"
        },
        {
          week: 11,
          title: "Charts that answer the question",
          topics: [
            "Choosing a chart for a comparison, a trend or a distribution",
            "Labelling, units and honest scales",
            "What not to decorate",
            "Writing a one-sentence claim that the chart actually supports"
          ],
          lab: "Build three charts and drop any that do not earn their place.",
          ship: "A chart set tied to your question.",
          tools: "Python"
        },
        {
          week: 12,
          title: "Phase checkpoint: a reproducible notebook",
          topics: [
            "Cleaning up the notebook so it runs top to bottom",
            "Mentor review of claims versus evidence",
            "What a BI tool will add next"
          ],
          lab: "Walk through the notebook with the cohort.",
          ship: "A reproducible analysis notebook.",
          tools: "Python, pandas, Jupyter"
        }
      ]
    },
    {
      id: "bi",
      number: "04",
      title: "BI, AI assistance and capstone",
      weeks: "Weeks 13–16",
      summary: "Publish a dashboard, use AI as a checked assistant, and finish a capstone a reader can follow.",
      checkpoint: "A dashboard plus a written narrative and a verified method note.",
      after: "Share findings as a dashboard and a short brief, with the numbers checked.",
      items: [
        {
          week: 13,
          title: "BI dashboards",
          topics: [
            "From a notebook to a dashboard a decision-maker can filter",
            "Pages, grains and the questions a dashboard should not try to answer",
            "Practise in a modern BI tool such as Looker Studio or Power BI — you may use the one you can access"
          ],
          lab: "Publish a first dashboard from your prepared table.",
          ship: "A draft dashboard.",
          tools: "Looker Studio or Power BI"
        },
        {
          week: 14,
          title: "Dashboard design and review",
          topics: [
            "Layout, colour and typography that stay out of the way",
            "Filters, comparisons and a written takeaway on the page",
            "Peer review"
          ],
          lab: "Revise the dashboard from review notes.",
          ship: "A revised dashboard ready for the narrative.",
          tools: "Looker Studio or Power BI"
        },
        {
          week: 15,
          title: "AI as an analysis assistant",
          topics: [
            "Drafting SQL or pandas with an assistant, then verifying every number",
            "Asking for explanations and alternative cuts — and catching confident errors",
            "What you must still do yourself: definitions, joins, and the claim you publish"
          ],
          lab: "Use an assistant on one task and document what you accepted, edited or rejected.",
          ship: "A short method note on AI use in your analysis.",
          tools: "ChatGPT or a similar assistant, plus SQL or Python"
        },
        {
          week: 16,
          title: "Capstone: dashboard and narrative",
          topics: [
            "A written narrative that a manager can read without opening the notebook",
            "Live capstone presentations and mentor feedback",
            "Optional next steps, including whether Advance Data Engineering is a later path"
          ],
          lab: "Present the dashboard, the narrative and the checks you ran.",
          ship: "Capstone dashboard, written brief and method note."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Cleaned dataset and question brief",
      body: "A documented, cleaned table and a question the data can actually support."
    },
    {
      title: "SQL and Python analysis",
      body: "A SQL workbook and a reproducible Python notebook that answer the same question with checks."
    },
    {
      title: "Capstone dashboard and narrative",
      body: "A BI dashboard, a short written brief, and a method note that includes how you used (and verified) AI assistance."
    }
  ],
  toolGroups: [
    { category: "Spreadsheets", tools: ["Google Sheets", "Excel"] },
    { category: "Analysis", tools: ["SQL", "Python", "pandas", "Jupyter"] },
    { category: "BI", tools: ["Looker Studio", "Power BI"] },
    { category: "AI assistance", tools: ["ChatGPT"] }
  ],
  faqs: [
    { q: "Do I need prior programming experience?", a: "No. Comfort with spreadsheets is helpful. SQL and Python are taught in the program, with weekly labs. You will need a laptop and 8–10 hours a week." },
    { q: "How long is the program?", a: "Sixteen weeks, part-time and live online, at about 8–10 hours a week including live sessions and labs." },
    { q: "What will I build?", a: "A cleaned dataset and question brief, a SQL analysis, a reproducible Python notebook, and a capstone BI dashboard with a written narrative. You will also practise using an AI assistant and verifying its output." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Evening batches on India time are offered for learners in the Gulf and Africa, with other regional times available. Exact times are confirmed on a counsellor call." },
    { q: "Is this a data-engineering program?", a: "No. This is an analysis program: spreadsheets, SQL, Python, BI and careful AI assistance. If you later want pipelines, warehouses and production data engineering, Advance Data Engineering with GenAI is a possible next path. A counsellor can help you compare." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_Data_Analytics_with_AI_Brochure.pdf",
  image: "/images/intl-courses/data-analytics-with-ai-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos Data Analytics with AI program",
  metaTitle: "Data Analytics with AI (SQL, Python, BI), 16 Weeks Live | Datamarcos",
  metaDescription: "A 16-week live online program in spreadsheets, SQL, Python, BI and careful AI-assisted analysis. Fees and EMI options shared on a counsellor call.",
  teaches: ["Analytical question design", "Spreadsheet data hygiene", "SQL for analysis", "Python and pandas for analysis", "Charts and BI dashboards", "Using AI as a checked analysis assistant"],
  educationalLevel: "Beginner",
  credentialName: "Datamarcos Certificate of Completion — Data Analytics with AI",
  applyLead: "Build analysis skills",
  applyEm: "you can show.",
  applyBody: `Share a few details. A counsellor will talk through your background, the time commitment, the cohort starting ${NEXT_COHORT_LONG}, fees and enrollment.`,
  applyBullets: [
    "Sixteen weeks, 8–10 hours a week, live and mentor-led",
    "SQL, Python, a BI dashboard and a written capstone",
    "No prior programming required",
    "Honest outcomes: no placement or salary guarantees"
  ],
  trust: ["16 weeks", "Live & mentor-led", "No prior coding required"],
  successBody: `A Datamarcos counsellor will call you about program fit, the cohort starting ${NEXT_COHORT_LONG} and fees. Meanwhile, the brochure has the full 16-week curriculum.`,
  related: [
    { href: "/programs/advance-data-engineering-genai", title: "Advance Data Engineering with GenAI", blurb: "A later path if you want production data engineering after this analysis foundation." },
    { href: "/programs/genai-at-work", title: "GenAI at Work", blurb: "A shorter, no-code program if you want everyday AI tools rather than SQL and Python." }
  ]
};
