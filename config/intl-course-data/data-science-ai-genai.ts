import type { IntlCourse } from "./types";
import { INTL_SHARED_TIMING } from "./types";

export const dataScienceCourse: IntlCourse = {
  slug: "data-science-ai-genai",
  path: "/programs/data-science-ai-genai",
  course: "Data Science & AI with GenAI",
  title: "Data Science & AI with GenAI",
  fullTitle: "Data Science & AI with GenAI",
  kicker: "Data Science & AI with GenAI · Live online · 24 weeks · Mentor-led",
  heroLead: "Data Science & AI",
  heroEm: "with GenAI.",
  deck: "A 24-week, part-time live program that takes you from first steps in Python to statistics, machine learning, an introduction to deep learning, and practical GenAI — including prompting, RAG and a simple agent — ending in a capstone you can show. Built for a wide audience: no prior programming is required. This is a data-science path, not a BI-only analytics course and not a production LLM engineering program.",
  promises: [
    "Learn Python, statistics and data analysis by doing weekly labs, not only watching videos",
    "Train, evaluate and explain supervised and unsupervised models — and say clearly when a model is not good enough",
    "Add practical GenAI: prompting, a simple RAG prototype and a small agent, then finish a capstone"
  ],
  durationLabel: "24 weeks",
  durationIso: "P24W",
  weekCount: 24,
  hoursPerWeek: "8–10 hours a week",
  formatLabel: "Part-time, live online",
  timing: INTL_SHARED_TIMING,
  regions: "Join live from anywhere. Weekend-morning batches are offered for learners in the US; evening batches (India time) for the Gulf and Africa; Europe-oriented groups typically meet after work and on Saturdays.",
  level: "Beginner-friendly to job-ready practice; no prior programming required",
  prereqs: [
    "No prior programming or machine-learning experience is required; Python is taught from the start",
    "Comfort with school-level maths (percentages, averages and simple graphs) is helpful",
    "You will need a laptop that can run a browser and a Python environment, plus 8–10 hours a week"
  ],
  audience: [
    "Career starters and career-switchers who want a structured path into data science and applied AI",
    "Analysts who already work with spreadsheets or dashboards and want to add statistics, machine learning and GenAI",
    "Professionals who want to go beyond using ChatGPT and learn to analyse data, build models and apply LLMs carefully",
    "Learners who can commit 8–10 hours a week for 24 weeks, joining live from anywhere"
  ],
  notFor: [
    "People who mainly want spreadsheets, SQL and BI dashboards. That shorter path is Data Analytics with AI (16 weeks)",
    "Engineers who already want to ship production RAG systems, multi-agent apps or LLMOps. See GenAI & Agentic AI Engineer or LLMOps & AI Evaluation",
    "People seeking placement or salary guarantees — we do not offer those"
  ],
  outcomes: [
    "Write Python to clean, explore and visualise a dataset, and keep a reproducible notebook",
    "Use basic statistics honestly: describe uncertainty, and avoid over-claiming from a single number",
    "Train supervised and unsupervised models, split data properly, and evaluate them with the right metrics",
    "Explain, in plain language, what a model can and cannot support for a decision",
    "Build a small GenAI prototype: a prompted workflow, a simple RAG path, and a simple tool-using agent with a human review step",
    "Leave with a capstone that combines analysis or a model with a written narrative — not a placement promise"
  ],
  phases: [
    {
      id: "python",
      number: "01",
      title: "Python and data analysis",
      weeks: "Weeks 1–6",
      summary: "Start with Python, then clean, explore and chart real tabular data, including a first pass at SQL for analysis.",
      checkpoint: "A cleaned dataset, an exploratory notebook and a clear analysis question.",
      after: "Load, clean and describe a table in Python, and write a question the data can actually support.",
      items: [
        { week: 1, title: "Python start for data work", topics: ["Notebooks, variables, types and control flow", "Reading and writing tabular files", "How a script differs from a spreadsheet, and why that helps", "Using an assistant to explain an error, then fixing it yourself"], lab: "Load a sample table in a notebook and print a sound overview.", ship: "A starting notebook with checks.", tools: "Python, Jupyter" },
        { week: 2, title: "Functions, data structures and tidy code", topics: ["Lists, dictionaries and functions you can reuse", "Reading errors and writing small tests", "Keeping a notebook runnable from top to bottom", "A short personal coding checklist"], lab: "Refactor messy exploration code into small functions.", ship: "A tidier notebook you can rerun.", tools: "Python, Jupyter" },
        { week: 3, title: "Wrangling with pandas", topics: ["Selecting, filtering and deriving columns", "Missing values, types, duplicates and joins", "A reproducible cleaning log, not ad-hoc edits", "When a spreadsheet is enough, and when Python is better"], lab: "Clean a messy table and record every step.", ship: "A wrangled dataframe and a cleaning log.", tools: "Python, pandas" },
        { week: 4, title: "Exploratory analysis and charts", topics: ["Asking a precise question before you plot", "Charts for comparisons, trends and distributions", "Labelling, units and honest scales", "A one-sentence claim that the chart actually supports"], lab: "Build a small chart set and drop any chart that does not earn its place.", ship: "An exploratory chart pack tied to your question.", tools: "Python, pandas" },
        { week: 5, title: "SQL enough to get the data out", topics: ["SELECT, WHERE, JOIN and GROUP BY for analysis work", "Checking a query result against a known sample", "When to stay in SQL and when to continue in Python", "This is enough SQL to feed a data-science workflow, not a full BI-dashboard program"], lab: "Pull a joined, aggregated table and continue the analysis in pandas.", ship: "A SQL-plus-Python analysis slice.", tools: "SQL, Python, pandas" },
        { week: 6, title: "Phase checkpoint: a question and a clean dataset", topics: ["Putting the question, the cleaned table and the first charts together", "Peer and mentor feedback", "What statistics will add next"], lab: "Present your brief and cleaned data.", ship: "A phase-one packet ready for statistical work.", tools: "Python, pandas, SQL" }
      ]
    },
    {
      id: "stats",
      number: "02",
      title: "Statistics for data science",
      weeks: "Weeks 7–10",
      summary: "Build the habit of describing uncertainty, not only a headline number.",
      checkpoint: "A short statistical note with claims, caveats and a comparison you can defend.",
      after: "Talk about a result with a range, a sample and a limitation, not only an average.",
      items: [
        { week: 7, title: "Descriptive statistics that stay honest", topics: ["Averages, spreads and simple distributions, in plain language", "Why a single headline number is often misleading", "Comparisons across groups without over-claiming", "Choosing a summary that matches the question"], lab: "Compute and chart a small set of descriptive measures with caveats.", ship: "A descriptive summary with charts and limits." },
        { week: 8, title: "Probability, sampling and bias", topics: ["Samples versus populations, in practical terms", "Common sampling and selection problems", "Independence and why it is often a hopeful assumption", "What your dataset cannot represent"], lab: "Write down how the data were collected and what that allows.", ship: "A sampling and bias note for your dataset." },
        { week: 9, title: "Inference and uncertainty", topics: ["Confidence intervals as a range, not a ritual", "Standard errors in plain language", "What 'significant' does and does not mean", "Reporting uncertainty next to a point estimate"], lab: "Add an interval or a clear uncertainty statement to one claim.", ship: "An inference note with a range and a caveat." },
        { week: 10, title: "Comparisons, tests and a statistics checkpoint", topics: ["A careful group comparison or A/B-style readout", "Multiple testing and fishing for a result", "Peer and mentor review", "What machine learning will add — and what it will not replace"], lab: "Present a statistical comparison and the checks you ran.", ship: "A phase-two statistics packet." }
      ]
    },
    {
      id: "ml",
      number: "03",
      title: "Machine learning",
      weeks: "Weeks 11–16",
      summary: "Train supervised and unsupervised models, evaluate them properly, and write down what a decision-maker can trust.",
      checkpoint: "An evaluated model with a written evaluation note and a clear statement of limits.",
      after: "Fit a model, test it on held-out data, and explain the result without hiding failure modes.",
      items: [
        { week: 11, title: "What machine learning can and cannot do", topics: ["Prediction versus explanation", "Train, validation and test splits, and leakage", "A baseline before a fancy model", "Choosing a first supervised problem from your data"], lab: "Define a target, a split and a simple baseline.", ship: "A problem statement and a baseline score.", tools: "Python, scikit-learn" },
        { week: 12, title: "Supervised learning: regression", topics: ["Linear models and when they are enough", "Features, scaling and regularisation at a practical level", "Residual plots and obvious misspecification", "Comparing a model with the baseline"], lab: "Train a regression model and inspect residuals.", ship: "A regression notebook with a fair comparison.", tools: "Python, scikit-learn" },
        { week: 13, title: "Supervised learning: classification", topics: ["Logistic regression and a tree-based model as a comparison", "Class imbalance, in practical terms", "Decision thresholds and who is affected by an error", "A first classification report"], lab: "Train two classifiers and compare them on the same split.", ship: "A classification notebook with a threshold note.", tools: "Python, scikit-learn" },
        { week: 14, title: "Model evaluation that a colleague can read", topics: ["Accuracy, precision, recall, ROC and calibration, used with care", "Why a leaderboard metric can mislead", "Error analysis: looking at the cases the model gets wrong", "A written evaluation note, not only a score"], lab: "Write an evaluation note and an error-analysis sample.", ship: "An evaluation report a non-specialist can follow.", tools: "Python, scikit-learn" },
        { week: 15, title: "Unsupervised learning", topics: ["Clustering and what a cluster is not", "Dimensionality reduction as a view, not a proof", "Checking stability and sanity of groupings", "When unsupervised work should stay exploratory"], lab: "Try a clustering or a reduced view and stress-test it.", ship: "An unsupervised exploration note.", tools: "Python, scikit-learn" },
        { week: 16, title: "Phase checkpoint: an evaluated model", topics: ["Assembling the model, the metrics and the limits", "Peer and mentor review", "What an introduction to deep learning will and will not add"], lab: "Present the model and the evaluation evidence.", ship: "A phase-three ML packet.", tools: "Python, scikit-learn" }
      ]
    },
    {
      id: "dl",
      number: "04",
      title: "Introduction to deep learning",
      weeks: "Weeks 17–18",
      summary: "See how a neural network is trained at a practical introductory level, and when a simpler model is still the better choice.",
      checkpoint: "A small deep-learning or transfer-learning experiment with a comparison to a simpler baseline.",
      after: "Explain, in outline, what a neural net is doing and when you would not start there.",
      items: [
        { week: 17, title: "Neural networks in practical terms", topics: ["Layers, loss and optimisation, without a research lecture", "Overfitting and regularisation in this setting", "When a simpler model is still the better first choice", "Setting up a small experiment"], lab: "Train a small network on a familiar task and compare it with a baseline.", ship: "An introductory deep-learning notebook.", tools: "Python, a modern DL library such as PyTorch or Keras" },
        { week: 18, title: "A small deep-learning experiment", topics: ["Transfer learning or a slightly larger architecture, used carefully", "Compute, data size and diminishing returns", "What this introduction does not cover: production training at scale", "A written note on when you would stay with classical ML"], lab: "Complete a small experiment and write the comparison.", ship: "An experiment note plus the notebook.", tools: "Python, a modern DL library" }
      ]
    },
    {
      id: "genai",
      number: "05",
      title: "Practical GenAI",
      weeks: "Weeks 19–22",
      summary: "Apply large language models as a data-science tool: prompting, a simple RAG path and a simple agent, always with a review step. This is not a production LLM-engineering program.",
      checkpoint: "A small GenAI prototype with an evaluation of where it helps and where it fails.",
      after: "Use an LLM on a data task, ground it in your documents or tables where useful, and check the output.",
      items: [
        { week: 19, title: "LLMs and prompting for data work", topics: ["What current models are good at, and where they invent", "Prompt patterns for analysis, explanation and code drafts", "Verifying every number and citation yourself", "When not to use a model at all"], lab: "Draft an analysis or a code snippet with an assistant and document what you accepted or rejected.", ship: "A prompting playbook for your capstone domain.", tools: "ChatGPT or a similar assistant, Python" },
        { week: 20, title: "A simple RAG prototype", topics: ["Retrieval-augmented generation in outline: documents, chunks, queries, answers", "Measuring whether the retrieved context actually supports the answer", "Common failure modes: missing sources and confident invention", "This is an introductory prototype, not a production RAG service"], lab: "Build a small question-answering path over a document set you control.", ship: "A simple RAG notebook with a few evaluated questions.", tools: "Python, an LLM API" },
        { week: 21, title: "A simple tool-using agent", topics: ["When a single prompt is enough, and when a tool call helps", "A minimal agent that can call a function (for example a query or a calculator) and return a checked result", "Human review before any action that would matter at work", "What this course does not cover: multi-agent production systems"], lab: "Wire a simple tool-using agent and log each step.", ship: "A small agent prototype with a review step.", tools: "Python, an LLM API" },
        { week: 22, title: "Evaluating GenAI and knowing its limits", topics: ["A small evaluation set for your prototype", "Quality, cost and when a rule or a classical model is better", "Privacy: what must not be pasted into a public tool", "Choosing what belongs in the capstone"], lab: "Score the prototype on a short question set and write residual risks.", ship: "A GenAI evaluation note.", tools: "Python, your prototype" }
      ]
    },
    {
      id: "capstone",
      number: "06",
      title: "Capstone",
      weeks: "Weeks 23–24",
      summary: "Assemble a piece of work a reader can follow: a question, analysis or model, an optional GenAI component, and a written narrative with limits.",
      checkpoint: "A finished capstone and a live walk-through.",
      after: "Show a complete piece of data-science work, including what you did not claim.",
      items: [
        { week: 23, title: "Build the capstone", topics: ["Choosing a scope you can finish: one question, one main method, a clear narrative", "Reproducible notebooks and a short method note", "Optional: include the GenAI prototype only if it earns its place", "Mentor review of claims versus evidence"], lab: "Assemble the notebook, the figures and the first draft of the narrative.", ship: "A capstone draft ready for presentation." },
        { week: 24, title: "Present, review and next steps", topics: ["Live capstone presentations and mentor feedback", "A written brief a hiring manager or a colleague could read without opening the notebook", "Honest next steps: more statistics, more engineering, or a later GenAI engineering program if that is the right path", "No placement or salary promises"], lab: "Present the capstone and the checks you ran.", ship: "Finished capstone: notebook, narrative and method note." }
      ]
    }
  ],
  projects: [
    { title: "Cleaned dataset and exploratory brief", body: "A documented, cleaned table, charts and a question the data can actually support. This is the foundation for later modelling." },
    { title: "Evaluated machine-learning model", body: "A supervised model with a proper split, a baseline, metrics, error analysis and a written statement of limits." },
    { title: "Capstone: analysis, model and optional GenAI", body: "A reproducible notebook, a short written narrative, and — if it earns its place — a simple RAG or agent prototype with an evaluation note. This is coursework, not a job guarantee." }
  ],
  toolGroups: [
    { category: "Analysis", tools: ["Python", "pandas", "Jupyter", "SQL"] },
    { category: "Machine learning", tools: ["scikit-learn"] },
    { category: "Deep learning and GenAI practice", tools: ["PyTorch", "ChatGPT"] }
  ],
  faqs: [
    { q: "How is this different from Data Analytics with AI?", a: "Data Analytics with AI is a 16-week program focused on spreadsheets, SQL, Python for analysis, BI dashboards and careful AI assistance. Data Science & AI with GenAI is a 24-week path that goes further into statistics, machine learning, an introduction to deep learning, and practical GenAI (prompting, a simple RAG prototype and a simple agent), ending in a data-science capstone." },
    { q: "How is this different from GenAI & Agentic AI Engineer?", a: "GenAI & Agentic AI Engineer is an engineering program for people who want to build and deploy LLM applications, production RAG and multi-agent systems. This program is a data-science path: Python, statistics and machine learning come first, and GenAI is taught as a practical additional tool, not as a production engineering syllabus." },
    { q: "Do I need prior programming experience?", a: "No. Python is taught from the start. Comfort with school-level maths is helpful. You will need a laptop and 8–10 hours a week for 24 weeks." },
    { q: "How long is the program?", a: "Twenty-four weeks, part-time and live online, at about 8–10 hours a week including live sessions and labs." },
    { q: "Are the sessions live?", a: "Yes. Sessions are live and mentor-led, with recordings if you miss a class. Weekend-morning batches are offered for learners in the US, with other regional times available. Exact times are confirmed on a counsellor call." },
    { q: "Will this get me a job or a salary increase?", a: "We do not promise placement, salary or promotion outcomes. The program is designed so you can show a capstone — a notebook, a narrative and the checks you ran." },
    { q: "Is this an official university or vendor certificate?", a: "No. Completing the program leads to a Datamarcos certificate of completion. We do not award a university, government or vendor certification." },
    { q: "What about fees?", a: "Fees and EMI options shared on a counsellor call." },
    { q: "Is there a refund policy?", a: "Yes. Datamarcos has a 7-day refund policy. If the program is not right for you, ask within 7 days of enrollment." }
  ],
  brochure: "/brochures/Datamarcos_Data_Science_AI_GenAI_Brochure.pdf",
  image: "/images/intl-courses/data-science-ai-genai-cover.webp",
  imageAlt: "Typographic poster for the Datamarcos Data Science and AI with GenAI program",
  metaTitle: "Data Science & AI with GenAI, 24 Weeks Live | Datamarcos",
  metaDescription: "A 24-week live online program from Python and statistics to machine learning, intro deep learning and practical GenAI, ending in a capstone. Fees and EMI options shared on a counsellor call.",
  teaches: ["Python for data analysis", "Statistics and honest uncertainty", "Supervised and unsupervised machine learning", "Model evaluation", "Introductory deep learning", "Prompting, simple RAG and a simple agent", "A reproducible data-science capstone"],
  educationalLevel: "Beginner",
  credentialName: "Datamarcos Certificate of Completion — Data Science & AI with GenAI",
  applyLead: "Build data science and AI skills",
  applyEm: "you can show.",
  applyBody: "Share a few details. A counsellor will talk through your background, the 24-week time commitment, the next cohort, fees and enrollment.",
  applyBullets: [
    "Twenty-four weeks, 8–10 hours a week, live and mentor-led",
    "Python, statistics, machine learning, intro deep learning and practical GenAI",
    "No prior programming required",
    "Honest outcomes: no placement or salary guarantees, and not a production LLM-engineering program"
  ],
  trust: ["24 weeks", "Live & mentor-led", "No prior coding required"],
  successBody: "A Datamarcos counsellor will call you about program fit, the next cohort date and fees. Meanwhile, the brochure has the full 24-week curriculum.",
  related: [
    { href: "/programs/data-analytics-with-ai", title: "Data Analytics with AI", blurb: "A shorter 16-week path if you want SQL, Python and BI dashboards rather than machine learning and GenAI." },
    { href: "/programs/genai-agentic-ai-engineer", title: "GenAI & Agentic AI Engineer", blurb: "A later or alternative engineering path if you specifically want to build production LLM, RAG and agent systems." }
  ]
};
