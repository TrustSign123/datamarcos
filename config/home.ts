import { EMI_NOTE, PROGRAM_FEES } from "@/config/fees";

/**
 * Homepage content. Every fact below comes from the program pages / brochures already on the site
 * or from fees confirmed by Datamarcos. Do not add numbers that are not published elsewhere.
 */

export type HomeProgram = {
  slug: keyof typeof PROGRAM_FEES;
  /** Display title. */
  title: string;
  /** Course value used by the lead form / sheet (keep in sync with LEAD_COURSES). */
  leadCourse: string;
  brochure: string;
  image: string;
  imageAlt: string;
  fee: string;
  facts: string[];
  whoFor: string;
  summary: string;
  tag: string;
};

export const homePrograms: HomeProgram[] = [
  {
    slug: "genai-agentic-ai-engineer",
    title: "Generative AI & Agentic AI Engineer",
    leadCourse: "Generative AI & Agentic AI Engineer",
    brochure: "/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf",
    image: "/images/program-cards/genai-agentic-ai-engineer.webp",
    imageAlt: "Generative AI and Agentic AI Engineer program poster",
    fee: PROGRAM_FEES["genai-agentic-ai-engineer"],
    facts: ["18 weeks", "130+ live hours", "Live online"],
    whoFor: "Developers, data/ML, QA and DevOps engineers, and career switchers with coding basics.",
    summary: "Build LLM apps, production RAG and multi-agent systems, then secure and deploy them.",
    tag: "GenAI · Agents"
  },
  {
    slug: "advance-data-engineering-genai",
    title: "Advanced Data Engineering with Applied GenAI & Agentic AI",
    leadCourse: "Advance Data Engineering with Applied GenAI & Agentic AI",
    brochure: "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf",
    image: "/images/program-cards/data-engineering-genai.webp",
    imageAlt: "Advanced Data Engineering with GenAI and Agentic AI program poster",
    fee: PROGRAM_FEES["advance-data-engineering-genai"],
    facts: ["4-month foundation", "+ advanced AI track", "Weekend/evening live"],
    whoFor: "People working with data, or moving from analytics, software or database roles (SQL required).",
    summary: "Modern cloud data engineering first, then GenAI, production RAG, agents and a capstone.",
    tag: "Data Engineering · GenAI"
  },
  {
    slug: "applied-agentic-ai-certification",
    title: "Applied Agentic AI",
    leadCourse: "Applied Agentic AI",
    brochure: "/brochures/DataMarcos_Applied_Agentic_AI_Brochure.pdf",
    image: "/images/program-cards/applied-agentic-ai.webp",
    imageAlt: "Applied Agentic AI certification program poster",
    fee: PROGRAM_FEES["applied-agentic-ai-certification"],
    facts: ["8 weeks", "Live mentor support", "Portfolio capstone"],
    whoFor: "Professionals who want to move beyond prompts and build real AI workflows and agents.",
    summary: "Design, build and evaluate practical AI workflows with retrieval, tools and agent orchestration.",
    tag: "Certification"
  },
  {
    slug: "forward-deployed-ai-engineer",
    title: "Forward Deployed AI Engineer",
    leadCourse: "Forward Deployed AI Engineer",
    brochure: "/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf",
    image: "/images/program-cards/forward-deployed-ai-engineer.webp",
    imageAlt: "Forward Deployed AI Engineer program poster",
    fee: PROGRAM_FEES["forward-deployed-ai-engineer"],
    facts: ["22 weeks", "170+ live hours", "Live online"],
    whoFor: "Engineers comfortable in Python with 2+ years of experience, or strong shipped projects.",
    summary: "Scope, build, secure and deploy AI systems in enterprise environments, from discovery to handoff.",
    tag: "Enterprise AI"
  }
];

export { EMI_NOTE };

/**
 * Learner video feedback. To add more (e.g. from the Drive folder), drop a poster image in
 * /public/images/learner-reels/ and add an entry. `kind: "instagram"` lazy-loads Instagram's
 * iframe only after a click; `kind: "video"` plays a self-hosted MP4 (put it in /public/videos/).
 */
export type LearnerVideo = {
  id: string;
  kind: "instagram" | "video";
  /** Instagram reel shortcode, or the MP4 path for kind "video". */
  source: string;
  url?: string;
  poster: string;
  name: string;
  role: string;
  headline: string;
  quote: string;
  course?: string;
};

export const learnerVideos: LearnerVideo[] = [
  {
    id: "hema-natarajan",
    kind: "instagram",
    source: "DeHWwlvzS2j",
    url: "https://www.instagram.com/datamarcos_official/reel/DeHWwlvzS2j/",
    poster: "/images/learner-reels/hema-natarajan.webp",
    name: "Hema Natarajan",
    role: "Sr. IT Recruitment Consultant, Geno Consulting Services",
    headline: "From HR recruitment to building AI agents",
    quote: "The sessions were very practical. We built real AI agents and automation workflows using n8n, LangChain and more.",
    course: "Agentic AI"
  },
  {
    id: "krishna-kumar",
    kind: "instagram",
    source: "DeHU1_zz5Ha",
    url: "https://www.instagram.com/datamarcos_official/reel/DeHU1_zz5Ha/",
    poster: "/images/learner-reels/krishna-kumar.webp",
    name: "Krishna Kumar",
    role: "Senior Consultant, InPhase Solutions (Norway)",
    headline: "From data engineering learner to global consultant",
    quote: "The training helped me build real Data Engineering skills with hands-on projects, which directly added value in my current role.",
    course: "Data Engineering"
  },
  {
    id: "ayushi-soni",
    kind: "video",
    source: "/videos/learner-ayushi-soni.mp4",
    poster: "/images/learner-feedback/poster-ayushi-soni.webp",
    name: "Ayushi Soni",
    role: "Data Engineering learner · live class feedback",
    headline: "Azure made easy",
    quote: "I previously worked on AWS and I found it really hard during college but you made it pretty easy for Azure and explaining everything nicely so thank you so much for that.",
    course: "Data Engineering"
  },
  {
    id: "raghul-k",
    kind: "video",
    source: "/videos/learner-raghul-k.mp4",
    poster: "/images/learner-feedback/poster-raghul-k.webp",
    name: "Raghul K",
    role: "Data Engineering learner · live class feedback",
    headline: "Learnt from scratch, built real projects",
    quote: "So we learnt many things sir so we learnt from anything from scratch so without you this much project can't be built.",
    course: "Data Engineering"
  }
];

/**
 * Written learner feedback (verbatim; trimmed only with "…", typos kept as written).
 * `image` is an optional screenshot of the original, shown as a small "see original" thumbnail.
 */
export type LearnerFeedback = { id: string; name: string; role: string; source: string; quote: string; image?: string; imageAlt?: string };

export const learnerFeedback: LearnerFeedback[] = [
  {
    id: "databricks-feedback",
    name: "Databricks exam-prep learner",
    role: "Name withheld",
    source: "Training feedback form",
    quote: "The program was well-structured, engaging, and highly practical. … What I liked most was the balance between theory and application—it wasn't just about passing the test, but about truly understanding Databricks and how to apply it to real-world problems.",
    image: "/images/learner-feedback/databricks-feedback-form.webp",
    imageAlt: "Databricks training feedback form with a written testimonial"
  },
  {
    id: "kidest-k",
    name: "Kidest K",
    role: "GenAI class learner",
    source: "Email",
    quote: "It's a blessing to meet you and learn AI under your guidance. … Thank you so much"
  }
];

export type FaqItem = { q: string; a: string; link?: { href: string; label: string } };

export const homeFaqs: FaqItem[] = [
  {
    q: "Which program is right for me?",
    a: "Developers and engineers with coding basics usually start with Generative AI & Agentic AI Engineer. If you work with data, SQL or analytics, Advanced Data Engineering with Applied GenAI & Agentic AI builds the data foundation first. Applied Agentic AI is the shortest path (8 weeks) to building AI workflows and agents. Forward Deployed AI Engineer is for engineers with 2+ years of experience who want to deliver AI inside client environments. Not sure? Book a free career call and a counsellor will help you choose."
  },
  {
    q: "Do I need a coding background?",
    a: "It depends on the program. GenAI & Agentic AI Engineer expects Python basics and engineering fundamentals (or strong shipped projects), and bridge pre-work in Python, Linux, Git and SQL is provided before Day 1. Advanced Data Engineering requires SQL and prefers Python; Python and SQL refreshers are included and cloud knowledge is helpful but not mandatory. Forward Deployed AI Engineer expects comfortable Python and 2+ years of experience or strong shipped projects. For Applied Agentic AI, ask our counsellor about prerequisites."
  },
  {
    q: "Are the classes live? Will I get recordings?",
    a: "Yes, all four programs are live online and mentor-led by Deepesh Mishra. For example, GenAI & Agentic AI Engineer has two live sessions every week plus a weekday lab, and Advanced Data Engineering runs weekend/evening sessions. Enrolled learners get the Datamarcos student portal with class schedules, materials and recordings."
  },
  {
    q: "How much time do I need each week?",
    a: "Plan for about 8–12 hours a week for GenAI & Agentic AI Engineer and about 10–14 hours a week for Forward Deployed AI Engineer, including live sessions, labs and project work. Our counsellor can share the weekly schedule for the other programs."
  },
  {
    q: "What are the fees?",
    a: `Forward Deployed AI Engineer: ${PROGRAM_FEES["forward-deployed-ai-engineer"]}. Generative AI & Agentic AI Engineer: ${PROGRAM_FEES["genai-agentic-ai-engineer"]}. Advanced Data Engineering with Applied GenAI & Agentic AI: ${PROGRAM_FEES["advance-data-engineering-genai"]}. Applied Agentic AI: ${PROGRAM_FEES["applied-agentic-ai-certification"]}.`
  },
  {
    q: "Is EMI available?",
    a: "Yes, EMI options are available. Ask our counsellor for the plan that suits you."
  },
  {
    q: "When does the next batch start?",
    a: "Admissions shares the current cohort dates. Apply or message us on WhatsApp and we’ll send you the next batch date for your program."
  },
  {
    q: "Do you offer placement or a job guarantee?",
    a: "No placement, salary or hike is guaranteed. The GenAI & Agentic AI and Forward Deployed AI Engineer programs run a career track every week: portfolio, resume, LinkedIn, interview loops and referrals. The Advanced Data Engineering foundation includes resume and interview preparation. Talk to a counsellor about the career support in your program."
  },
  {
    q: "Will I get a certificate?",
    a: "Applied Agentic AI is a Datamarcos certification program, and Advanced Data Engineering with Applied GenAI & Agentic AI is our flagship certification program. Ask our counsellor about certification for the other programs."
  },
  {
    q: "What is the refund policy?",
    a: "Please read our Payment & Refund Policy for the full terms, or ask our counsellor before you enrol.",
    link: { href: "/payment-refund-policy", label: "Read the Payment & Refund Policy" }
  }
];

/* ------------------------------------------------------------------ */
/* Alumni outcomes / learner report                                    */
/* ------------------------------------------------------------------ */

/**
 * HARD RULE: only publish figures Datamarcos can evidence. Do NOT invent placement %, average CTC
 * or hike multiples. To add a verified outcome later (e.g. a placement rate from a real cohort
 * report), append it here with `kind: "outcome"` and a `source` – it renders in the same band.
 */
export type OutcomeStat = {
  value: string;
  label: string;
  /** "reach" = scale figures already published on the site; "outcome" = verified learner outcome. */
  kind: "reach" | "outcome";
  /** Where the figure comes from (shown as a tooltip / for editors). */
  source?: string;
};

export const outcomeStats: OutcomeStat[] = [
  { value: "25,000+", label: "Professionals trained", kind: "reach", source: "Deepesh Mishra's published training record" },
  { value: "200+", label: "Corporate & academic clients", kind: "reach" },
  { value: "18+", label: "Years in industry & training", kind: "reach" },
  { value: "10+", label: "Countries reached", kind: "reach" },
  { value: "4", label: "Live online programs", kind: "reach" }
];

export const OUTCOMES_PILL = "As reported by Datamarcos & learners";
export const OUTCOMES_DISCLAIMER =
  "Reach figures as published by Datamarcos. Learner stories are shared by the learners themselves (LinkedIn recommendations and messages, quoted verbatim). No placement, salary or hike is guaranteed; outcomes depend on each learner.";

/**
 * Organisations evidenced in real sources: learners' / recommenders' LinkedIn headlines,
 * corporate trainings in the feedback folder, existing site student data and Deepesh's own
 * LinkedIn experience. Add corporate client names here (style is optional).
 */
export type OrgLogo = {
  name: string;
  /** Visual treatment for the text wordmark. */
  style?: "bold" | "lower" | "caps" | "wide" | "serif";
  /** Why this organisation is listed (editor note, not rendered). */
  evidence: string;
};

export const orgLogos: OrgLogo[] = [
  { name: "pwc", style: "lower", evidence: "Kumar Gaurav & Gaurav Taluja – LinkedIn headlines" },
  { name: "Hexaware", style: "bold", evidence: "Ansh Ranjan – LinkedIn headline; Lakshan J – site student data" },
  { name: "EY", style: "caps", evidence: "Kumar Gaurav – Ex-EY (LinkedIn headline)" },
  { name: "Genpact", style: "bold", evidence: "Kumar Gaurav – Ex-Genpact (LinkedIn headline)" },
  { name: "accenture", style: "lower", evidence: "Gaurav Taluja – Ex Accenture (LinkedIn headline)" },
  { name: "ZS", style: "caps", evidence: "Databricks training at ZS (feedback folder)" },
  { name: "IBM", style: "wide", evidence: "Corporate training (feedback folder)" },
  { name: "Microsoft", style: "bold", evidence: "Uphar Tandon – existing site student data" },
  { name: "Adobe", style: "bold", evidence: "Deepesh Mishra – LinkedIn experience" },
  { name: "Yahoo!", style: "serif", evidence: "Deepesh Mishra – LinkedIn experience" },
  { name: "eClerx", style: "bold", evidence: "Deepesh Mishra – LinkedIn experience" }
];

export const DEEPESH_LINKEDIN = "https://www.linkedin.com/in/deepesh-kumar-mishra-523632a5/";

export type LearnerStory = {
  id: string;
  name: string;
  initials: string;
  /** Current role as stated by the learner (LinkedIn headline / message). */
  role: string;
  company?: string;
  image?: string;
  /** Relationship as LinkedIn states it, or how the feedback was shared. */
  context: string;
  /** Verbatim quote; trimmed only with "…". */
  quote: string;
  /** Only where the source itself states it. */
  move?: { before: string; beforeOrg?: string; after: string; afterOrg?: string; badge: string };
  verify: { label: string; href: string };
  accent: "pink" | "cyan" | "green" | "amber" | "violet";
  /** "peer" = industry peer endorsement (not a learner) – shown as a slim line, never as a learner card. */
  kind?: "learner" | "peer";
};

export const learnerStories: LearnerStory[] = [
  {
    id: "ansh-ranjan",
    name: "Ansh Ranjan",
    initials: "AR",
    role: "Data Engineer",
    company: "Hexaware Technologies",
    context: "LinkedIn recommendation · Data Engineering",
    move: { before: "Complete beginner", beforeOrg: "in Data Engineering", after: "Data Engineer", afterOrg: "Hexaware Technologies", badge: "Career move" },
    quote: "As a complete begineering in Data Engineering, I was confused where to start and how to do effective practice. Learning under Deepesh Sir has been a great opportunity. All my doubts were dispelled and I was able to hone my skills with great hands on activities and projects…",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/imanshranjan/" },
    accent: "pink"
  },
  {
    id: "raghul-k",
    name: "Raghul K",
    initials: "RK",
    role: "Data Engineer",
    context: "Message to Deepesh · shared with consent",
    move: { before: "Data Engineering learner", beforeOrg: "Datamarcos", after: "Data Engineer", badge: "Career move" },
    quote: "So sir In this journey I have learnt many things without you it wouldn't have been possible sir. Thank You so much sir ❤️ for making me a Data Engineer.",
    verify: { label: "See original message", href: "/images/learner-feedback/raghul-k-chat.webp" },
    accent: "cyan"
  },
  {
    id: "kumar-gaurav",
    name: "Kumar Gaurav",
    initials: "KG",
    role: "Senior Azure Data Engineer",
    company: "PwC · Ex-EY · Ex-Genpact",
    context: "LinkedIn recommendation · 2-day Generative AI training (client)",
    quote: "His deep understanding of the subject, combined with a clear and engaging teaching style, made complex concepts easy to grasp—even for those new to the field. … He encouraged questions, discussions, and ensured every participant walked away with valuable insights and a stronger foundation in GenAI.",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/gk90731/" },
    accent: "amber"
  },
  {
    id: "samyuktha-bhavanam",
    name: "Samyuktha Bhavanam",
    initials: "SB",
    role: "Data Engineer",
    company: "PySpark, SQL & Azure",
    context: "LinkedIn recommendation · Data Engineering training",
    quote: "I had the opportunity to learn under Deepesh Mishra during my Data Engineering training, and I can confidently say he is one of the best trainers I've come across. His teaching style is clear, engaging, and highly effective.",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/samyuktha-bhavanam-319343356/" },
    accent: "green"
  },
  {
    id: "lakshan-sj",
    name: "Lakshan S J",
    initials: "LS",
    role: "Passionate Innovator in Tech Development",
    image: "/images/student-placements/lakshan-j.png",
    context: "LinkedIn recommendation · Training with Deepesh",
    quote: "What stood out most was his approach to training — he gave us the freedom to explore and emphasized practical learning through hands-on assignments and programming exercises. … Highly recommended for anyone who wants to learn deeply and practically!",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/lakshan013/" },
    accent: "violet"
  },
  {
    id: "shivani-kapoor",
    name: "Shivani Kapoor",
    initials: "SK",
    role: "Technical Trainer",
    company: "Freelance",
    context: "LinkedIn recommendation · Data Science (client)",
    quote: "Mr Deepesh Kumar Mishra had been a great mentor and guide. He not only did this just as a job he really wants his students to learn and grow. His grasp over the concepts of data Sciences is amazing.",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/shivani-kapoor-4114511a8/" },
    accent: "pink"
  },
  {
    id: "gaurav-taluja",
    name: "Gaurav Taluja",
    initials: "GT",
    role: "Senior Consultant",
    company: "PwC · Ex-Accenture",
    context: "LinkedIn recommendation · Industry peer",
    quote: "Deepesh possesses excellent communication skills and demonstrates in-depth expertise in both Generative AI and Data Engineering.",
    verify: { label: "Verified on LinkedIn", href: "https://www.linkedin.com/in/gaurav-t-a4a096158/" },
    accent: "cyan",
    kind: "peer"
  }
];
