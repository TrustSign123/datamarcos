/**
 * /placements page content (Placements & learner outcomes, 22 Nov 2026).
 *
 * HARD RULES (Deepesh):
 *  - Only facts already published on this site (config/home.ts, app/page.tsx) or confirmed by Deepesh in writing.
 *    Every entry names its source in `source` (editor note, not rendered).
 *  - No invented before/after roles, no placement %, salary, CTC or hike figures, no fees.
 *  - Never say Datamarcos "placed" anyone or "got them the job". Current roles are as each learner's own
 *    LinkedIn / message shows them. "Placement support, not a job guarantee." stays on the page.
 *  - Never publish placeholder or sample stories. To add a learner, append a REAL entry below with a source.
 */

export type OutcomeCard = {
  id: string;
  name: string;
  initials: string;
  /** Current role, exactly as the learner's own source shows it. */
  role: string;
  org?: string;
  /** Short org for compact strips (defaults to org). */
  orgShort?: string;
  /** Short relationship line, e.g. "Datamarcos learner". */
  tag: string;
  image?: string;
  /** Optional extra fact (only if the source states it). */
  highlight?: string;
  /** Optional "before" (only if the learner's own words say it). */
  before?: string;
  /** Verbatim quote, trimmed only with "…". */
  quote?: string;
  link: { href: string; label: string };
  source: string;
};

export const outcomeCards: OutcomeCard[] = [
  {
    id: "pravince-kumar", name: "Pravince Kumar", initials: "PK",
    role: "Product Manager", org: "Google (Google Maps & DeepMind)", orgShort: "Google", tag: "Datamarcos learner",
    image: "/images/student-placements/pravince-kumar.webp",
    link: { href: "https://www.linkedin.com/in/pravincesingh/", label: "LinkedIn" },
    source: "config/home.ts learnersNow + app/page.tsx learnerProfiles (confirmed learner, Deepesh 17 Nov 2026)"
  },
  {
    id: "uphar-tandon", name: "Uphar Tandon", initials: "UT",
    role: "Technology professional", org: "Microsoft", tag: "Datamarcos learner",
    image: "/images/student-placements/uphar-tandon.webp",
    link: { href: "https://www.linkedin.com/in/uphar-tandon-2563a636/", label: "LinkedIn" },
    source: "app/page.tsx learnerProfiles (confirmed learner, Deepesh 17 Nov 2026)"
  },
  {
    id: "lakshan-sj", name: "Lakshan S J", initials: "LS",
    role: "Software Engineer", org: "Hexaware Technologies", orgShort: "Hexaware", tag: "Trained with Deepesh",
    image: "/images/student-placements/lakshan-j.webp",
    quote: "He gave us the freedom to explore and emphasized practical learning through hands-on assignments and programming exercises. … Highly recommended for anyone who wants to learn deeply and practically!",
    link: { href: "https://www.linkedin.com/in/lakshan013/", label: "Recommendation on LinkedIn" },
    source: "Role/employer: app/page.tsx learnerProfiles. Quote: config/home.ts learnerStories (lakshan-sj), trimmed with …"
  },
  // CONSENT PENDING: Shreshtha Singh Chauhan has not yet confirmed she is happy to be featured (Deepesh to ask her).
  // Facts and wording confirmed by Deepesh, 22 Nov 2026. She trained with Deepesh in HSBC's graduate training program
  // (corporate programme, delivered with training partner Neueda). Do NOT describe this as a Datamarcos placement.
  {
    id: "shreshtha-singh-chauhan", name: "Shreshtha Singh Chauhan", initials: "SC",
    role: "Software Engineer (Data Engineer)", org: "HSBC, Pune", orgShort: "HSBC",
    tag: "Trained in data engineering with Deepesh Kumar Mishra (Datamarcos)",
    highlight: "Medal for Excellence in Performance, HSBC graduate training program",
    quote: "Grateful to Deepesh Kumar Mishra for his insightful mentorship.",
    link: { href: "https://www.linkedin.com/in/shreshthasinghchauhan/", label: "LinkedIn" },
    source: "Deepesh, 22 Nov 2026 (her LinkedIn post + profile). Consent pending."
  },
  {
    id: "ansh-ranjan", name: "Ansh Ranjan", initials: "AR",
    role: "Data Engineer", org: "Hexaware Technologies", orgShort: "Hexaware", tag: "Datamarcos learner · Data Engineering",
    before: "Complete beginner in Data Engineering",
    link: { href: "https://www.linkedin.com/in/imanshranjan/", label: "Recommendation on LinkedIn" },
    source: "config/home.ts learnerStories (ansh-ranjan): role, company and before state from his LinkedIn recommendation"
  },
  {
    id: "raghul-k", name: "Raghul K", initials: "RK",
    role: "Data Engineer", tag: "Datamarcos learner · Data Engineering",
    before: "Data Engineering learner",
    link: { href: "/images/learner-feedback/raghul-k-chat.webp", label: "See original message" },
    source: "config/home.ts learnerStories (raghul-k), message shared with consent"
  },
  {
    id: "krishna-kumar", name: "Krishna Kumar", initials: "KK",
    role: "Senior Consultant", org: "InPhase Solutions (Norway)", orgShort: "InPhase Solutions, Norway", tag: "Datamarcos learner · Data Engineering",
    link: { href: "https://www.instagram.com/datamarcos_official/reel/DeHU1_zz5Ha/", label: "Watch his story" },
    source: "config/home.ts learnerVideos (krishna-kumar)"
  },
  {
    id: "hema-natarajan", name: "Hema Natarajan", initials: "HN",
    role: "Sr. IT Recruitment Consultant", org: "Geno Consulting Services", tag: "Datamarcos learner · Agentic AI",
    link: { href: "https://www.instagram.com/datamarcos_official/reel/DeHWwlvzS2j/", label: "Watch her story" },
    source: "config/home.ts learnerVideos (hema-natarajan)"
  },
  {
    id: "joydip-dutta", name: "Joydip Dutta", initials: "JD",
    role: "Project Associate, AOCTestbed", org: "IIT Madras", tag: "Datamarcos learner",
    image: "/images/student-placements/joydip-dutta.webp",
    link: { href: "https://www.linkedin.com/in/joydip-dutta-b1878816b/", label: "LinkedIn" },
    source: "config/home.ts learnersNow + app/page.tsx learnerProfiles"
  }
];

/** Confirmed learners with no confirmed role yet (app/page.tsx). Shown as a photo row only. */
export const communityLearners = [
  { name: "Richard Leclézio", image: "/images/student-placements/richard-leclezio.jpeg", link: "https://www.linkedin.com/in/richard-leclezio/" },
  { name: "Sharoz Farhan Afridi", image: "/images/student-placements/sharoz-farhan-afridi.jpeg", link: "https://www.linkedin.com/in/sharoz-farhan-afridi/" },
  { name: "Manav Chhouda", image: "/images/student-placements/manav-chhouda.webp", link: "https://www.linkedin.com/in/manav-chhouda-738784268/" }
];

/**
 * Transformation stories: Start → Build → Land. Publish a story ONLY when the learner's own words (LinkedIn,
 * message, video) cover all three steps. Copy the quote verbatim. To add one, append an entry with its source.
 */
export type TransformationStory = {
  id: string;
  name: string;
  initials: string;
  track: string;
  start: string;
  build: string;
  land: string;
  quote: string;
  image?: { src: string; alt: string; width: number; height: number };
  link: { href: string; label: string };
  source: string;
};

export const transformationStories: TransformationStory[] = [
  {
    id: "ansh-ranjan", name: "Ansh Ranjan", initials: "AR", track: "Data Engineering",
    start: "A complete beginner in Data Engineering, unsure where to start.",
    build: "Hands-on activities and projects with Deepesh.",
    land: "Data Engineer at Hexaware Technologies.",
    quote: "All my doubts were dispelled and I was able to hone my skills with great hands on activities and projects…",
    image: { src: "/images/learner-feedback/ansh-ranjan-linkedin.webp", alt: "Ansh Ranjan's LinkedIn recommendation for Deepesh Mishra", width: 560, height: 571 },
    link: { href: "https://www.linkedin.com/in/imanshranjan/", label: "Verified on LinkedIn" },
    source: "config/home.ts learnerStories (ansh-ranjan)"
  },
  {
    id: "raghul-k", name: "Raghul K", initials: "RK", track: "Data Engineering",
    start: "Learnt data engineering from scratch.",
    build: "Built real projects in the live classes.",
    land: "Data Engineer, in his own words.",
    quote: "Thank You so much sir ❤️ for making me a Data Engineer.",
    image: { src: "/images/learner-feedback/raghul-k-chat.webp", alt: "Raghul K's message to Deepesh Mishra", width: 560, height: 486 },
    link: { href: "/images/learner-feedback/raghul-k-chat.webp", label: "See original message" },
    source: "config/home.ts learnerStories (raghul-k) + learnerVideos (raghul-k)"
  },
  {
    id: "krishna-kumar", name: "Krishna Kumar", initials: "KK", track: "Data Engineering",
    start: "Data engineering learner.",
    build: "Real data engineering skills through hands-on projects.",
    land: "Senior Consultant at InPhase Solutions, Norway.",
    quote: "The training helped me build real Data Engineering skills with hands-on projects, which directly added value in my current role.",
    image: { src: "/images/learner-reels/krishna-kumar.webp", alt: "Krishna Kumar, Senior Consultant at InPhase Solutions, video story", width: 640, height: 640 },
    link: { href: "https://www.instagram.com/datamarcos_official/reel/DeHU1_zz5Ha/", label: "Watch on Instagram" },
    source: "config/home.ts learnerVideos (krishna-kumar)"
  },
  {
    id: "hema-natarajan", name: "Hema Natarajan", initials: "HN", track: "Agentic AI",
    start: "Sr. IT Recruitment Consultant at Geno Consulting Services.",
    build: "Real AI agents and automation workflows with n8n and LangChain.",
    land: "From HR recruitment to building AI agents.",
    quote: "The sessions were very practical. We built real AI agents and automation workflows using n8n, LangChain and more.",
    image: { src: "/images/learner-reels/hema-natarajan.webp", alt: "Hema Natarajan, Sr. IT Recruitment Consultant, video story", width: 361, height: 430 },
    link: { href: "https://www.instagram.com/datamarcos_official/reel/DeHWwlvzS2j/", label: "Watch on Instagram" },
    source: "config/home.ts learnerVideos (hema-natarajan)"
  }
];

/**
 * Companies strip: ONLY organisations where the site already shows a learner working today, or a client team we trained.
 * `logo` = file in /public/logos; otherwise a text wordmark.
 */
export type HiringOrg = { name: string; logo?: { src: string; width: number; height: number; h: number }; evidence: string };

export const learnerOrgs: HiringOrg[] = [
  { name: "Google", evidence: "Pravince Kumar (learner)" },
  { name: "Microsoft", logo: { src: "/logos/microsoft.svg", width: 525, height: 120, h: 26 }, evidence: "Uphar Tandon (learner)" },
  { name: "Hexaware", logo: { src: "/logos/hexaware.svg", width: 804, height: 120, h: 20 }, evidence: "Lakshan S J, Ansh Ranjan (learners); corporate client" },
  { name: "HSBC", evidence: "Shreshtha Singh Chauhan; HSBC Technology India graduate training (via Neueda)" },
  { name: "PwC", logo: { src: "/logos/pwc.svg", width: 243, height: 120, h: 32 }, evidence: "Kumar Gaurav (client learner); PwC workshop Feb 2026" },
  { name: "IIT Madras", evidence: "Joydip Dutta (learner)" },
  { name: "InPhase Solutions", evidence: "Krishna Kumar (learner)" }
];

export const PLACEMENTS_PATH = "/placements";

/** Learners shown in the compact outcome strips (homepage band, course pages). Order = display order. */
export const stripLearnerIds = ["pravince-kumar", "uphar-tandon", "shreshtha-singh-chauhan", "lakshan-sj", "ansh-ranjan", "krishna-kumar"];
