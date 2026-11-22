import type { Guide } from "./types";

// v2 (21 Nov 2026): expanded from 7 to 24 programs. Every provider fact below was read on the provider's own
// page on 21 Nov 2026 (see `sources`); research notes: /workspace/seo/prs/research/. No fees, salaries,
// placement numbers or ratings, by policy. Previous version: /workspace/seo/prs/backup-2026-11-21/.
const C = "21 Nov 2026";

export const guide: Guide = {
  status: "approved",
  slug: "forward-deployed-engineer-courses-india-compared-2026",
  title: "Forward Deployed Engineer Courses in India Compared (2026)",
  h1: "Forward Deployed Engineer (FDE) Courses in India Compared (2026)",
  description: "24 forward deployed engineer (FDE) courses open to learners in India, compared by duration, live hours, format, projects, credential and eligibility, with a curriculum-by-skill matrix.",
  datePublished: "2026-10-27",
  dateModified: "2026-11-21",
  lastReviewed: "2026-11-21",
  author: "Datamarcos Team",
  cluster: "Forward Deployed Engineering",
  relatedProgram: {
    href: "/programs/forward-deployed-ai-engineer",
    title: "Forward Deployed AI Engineer program",
    summary: "22 weeks live online, 170+ live hours and four client-style engagements, from customer discovery to production handover. Built for working engineers.",
    cta: "See the 22-week FDE syllabus"
  },
  disclosure: "Datamarcos publishes this guide and runs one of the programs compared (the Forward Deployed AI Engineer program). Facts about every other program come from that provider's own public page, read on 21 November 2026 and linked in the table and under Sources. FDE programs are new and change quickly, so check each page before you decide.",
  body: [
    { type: "p", text: "**Short answer:** in November 2026 we found 24 forward deployed engineer (FDE) programs open to learners in India. They range from a self-paced exam-based certification and 4-week bootcamps to 12-month live programs, and several carry an IIT or IIIT name through a continuing-education unit or an innovation hub. Three questions separate them better than the brochure headlines:" },
    { type: "ul", items: [
      "**How much of the course is a client-style engagement** (discovery, scoping, build, handover), as opposed to lectures and isolated projects?",
      "**How many hours are actually live**, and how many are recorded or self-study?",
      "**Who issues the credential**, and what experience does the program expect you to bring?"
    ] },
    { type: "h2", id: "what-an-fde-does", text: "What a forward deployed engineer does" },
    { type: "p", text: "A forward deployed engineer works inside a customer's environment. They connect a product or model to that customer's systems, data, security rules and users, and stay until it works in production. In India the role is being hired for by global capability centres, IT-services firms, AI companies, enterprise software firms, cloud platforms and consulting companies ([The Hindu BusinessLine, 12 Aug 2026](https://www.thehindubusinessline.com/info-tech/gccs-outpace-indian-it-services-firms-in-hiring-forward-deployed-engineers/article71336534.ece)). For a fuller definition, see [what is a forward deployed engineer](/guides/what-is-a-forward-deployed-engineer)." },
    { type: "h2", id: "how-we-compared", text: "How we compared" },
    { type: "note", text: "**How we compared.** We listed every FDE program open to Indian learners that has its own public page, and took each fact only from that page (linked in the table). Criteria: duration, live hours or weekly time, format, projects and client simulation, credential and stated eligibility. All pages were read on 21 November 2026. We don't rank programs, and we leave out fees, salaries, placement figures and ratings because they change often and can't be checked the same way for everyone. Where a page doesn't state something, we say so instead of guessing. Datamarcos runs one of these programs; we list facts from each provider's own page and link them. We re-check this page every month." },
    { type: "h2", id: "comparison", text: "Side-by-side comparison" },
    { type: "table", caption: `FDE programs open to learners in India, from each provider's own page (checked ${C})`, head: ["Program (links to provider page)", "Duration", "Live hours / weekly time", "Format", "Projects and client simulation", "Credential (as stated)", "Eligibility (as stated)", "Checked on"], rows: [
      ["**[IIT Delhi CEP (with InterviewBit Varsity): Advanced Certificate in AI Forward Deployed Engineering, Batch 2](https://cepqip.iitd.ac.in/post/program/advanced-certificate-in-ai-forward-deployed-engineering)**", "6 months (6 Feb – 31 Jul 2027)", "145 hours: 76 live, 38 self-paced, 31 capstone and lab", "Online, weekend classes; optional 2-day campus immersion", "70/30 build-to-deliver split; 4 mini-capstones and a final capstone defended to an expert panel", "e-Certificate from CEP, IIT Delhi", "Graduates in listed disciplines; coding experience in any language", C],
      ["**[IIT Hyderabad AI Launchpad: FDE Practitioner Program](https://ailaunchpad.cse.iith.ac.in/programs/fde-practitioner/)**", "13 weeks (5 Dec 2026 – 14 Mar 2027)", "24 sessions; 72 live hours", "Online, with three optional campus immersions", "One connected customer engagement in a single repository; each session pairs a lecture with a lab; capstone", "IIT Hyderabad certificate listed; final title and issuer details to be confirmed", "AI and software engineers with roughly 2–5 years' experience", C],
      ["**[IIT Roorkee CEC (with Futurense): PG Certificate in Forward Deployed AI Engineering](https://futurense.com/iit-roorkee/pg-certificate-in-forward-deployed-ai-engineering)**", "3 months, after a 2-week bridge course", "About 85 learning hours; weekend live sessions of 2–3 hours; about 10 hours a week", "Live online", "End-to-end deployed capstone with client-ready documentation; live enterprise projects", "PG Certificate from CEC, IIT Roorkee", "3-year bachelor's in a technical field (or listed PG degrees); fresh graduates to early-career, 1–2 years preferred", C],
      ["**[iHUB DivyaSampark, IIT Roorkee (with Masai): Forward Deployed Engineer Program](https://www.masaischool.com/program/iit-roorkee/fde/ivsinfo)**", "7 months, 6 modules", "8–10 hours a week; weekday evening classes", "Instructor-led online", "One engagement across the modules, ending in an FDE engagement capstone you demonstrate and hand over", "Certificate from iHUB DivyaSampark, IIT Roorkee (a certification, not a degree)", "See provider page", C],
      ["**[IIIT Bangalore (with upGrad): Executive PG Programme in Forward Deployed AI Engineering](https://www.iiitb.ac.in/executive-post-graduate-programme-in-forward-deployed-ai-engineering)**", "6 months (about 24 weeks)", "About 120 learning hours", "Online: live and recorded sessions, labs, 1-day IIIT-B campus immersion", "5 project deliverables; live client capstone (or high-fidelity equivalent) defended before a panel", "Executive Post Graduate Certificate, IIIT Bangalore", "Experienced engineers", C],
      ["**[iHub IIT Mandi (with Coding Ninjas): Professional Certification in FDE with Multimodal AI](https://www.codingninjas.com/programs/forward-deployed-engineering-iit-mandi-advanced-certification)**", "8 months", "Not stated as hours; live instructor-led sessions plus a monthly guest lecture", "Live online; optional on-campus project at iHub, IIT Mandi", "30+ AI projects, reviewed by mentors; months 6–8 cover client discovery, scoping and change management", "Certification by iHub, IIT Mandi and Coding Ninjas", "Software engineers and tech professionals; basic programming (preferably Python); no prior AI needed", C],
      ["**[Scaler: AI Forward Deployed Engineer Program](https://www.scaler.com/ai-forward-deployed-engineer-course/)**", "12 months, 14 modules", "197 live sessions", "Live", "One continuous simulated client engagement across every module; graded assessments, labs and communication classes", "See provider page", "Early-career (1–3 years) to senior (8+ years) engineers", C],
      ["**[FDE School: Forward Deployed AI Engineering](https://fdeschool.in/)**", "13 weeks, plus a 2-month bridge course", "8–10 hours a week", "Live online", "4 deployed systems, a client document set and a capstone defended before a panel", "See provider page", "Selective intake; the page describes both graduates and experienced practitioners, so confirm with the provider", C],
      ["**[Fireblaze AI School: Applied AI Forward Deployment Engineering](https://fireblazeaischool.in/courses/forward-deployed-engineer-course/)**", "26 weeks, 6 phases", "Weekend classes", "Live online or Nagpur classroom", "Integration, RAG and agents, deployment, scoping and demos; team capstone", "Fireblaze AI School certificate", "Working IT professionals with 1–8 years' experience", C],
      ["**[FDE Academy: PGP in FDE & Applied AI Solutions](https://fde.academy/)**", "8 months / 32 weeks", "See provider page", "Live, selective cohort", "4 phases, each with a consulting track; capstone", "FDE Academy certificate; optional IIT certification add-on (IIT not named on the page)", "Degree with maths and 2+ years' technical experience, or an exceptional fresher", C],
      ["**[Learnbay (with IBM and Microsoft): Forward Deployed AI Engineer Program](https://www.learnbay.co/artificial-intelligence/forward-deployed-engineer-course)**", "12 months", "400+ hours of live classes", "100% live online, or hybrid with classroom project sessions", "80+ guided projects; two capstone projects from industry electives", "IBM GenAI and Microsoft certificates, plus a project certificate", "Python, machine learning and deep learning knowledge", C],
      ["**[Interview Kickstart: Forward Deployed AI Engineering](https://interviewkickstart.com/in/courses/forward-deployed-ai-engineering)**", "23 weeks in four blocks", "Live sessions; recordings provided", "Live online", "8 guided builds; an enterprise FDE capstone across three cloud stacks; 6 weeks of FDE interview prep", "See provider page", "Software, data, cloud and customer-facing engineers", C],
      ["**[Bosscoder Academy: AI Forward Deployed Engineer Program](https://www.bosscoderacademy.com/ai-forward-deployed-engineer-program)**", "Not stated on the page", "Not stated", "Live classes", "8 modules including electives; a full client-engagement capstone", "NASSCOM certification listed", "Working engineers", C],
      ["**[Simplilearn: Forward Deployed Engineer Program](https://corporate-training.simplilearn.com/forward_deployed_engineer_program)**", "10 weeks as listed (Nov cohort classes run 30 Nov 2026 – 28 Feb 2027)", "80 hours; two evening sessions a week", "Live online", "15+ labs and workshops; one complete FDE engagement from discovery to delivery as the capstone", "Program completion certificate", "See provider page", C],
      ["**[WeLe: Forward Deployed Engineer Program](https://wele.ai/forward-deployed-engineer)**", "16 weeks", "Live classes plus a weekly 1:1 code review", "Live online", "4 AI projects, one capstone at the end of each month, the last a client deployment", "WeLe FDE certificate after all 16 weeks and a deployed final project", "See provider page", C],
      ["**[Codebasics: Forward Deployed Engineer Bootcamp for AI Engineers](https://codebasics.io/bootcamps/fde-bootcamp-ai-engineers-1)**", "8 weeks", "16 live sessions, two a week; recorded", "Live online", "A fictional client account with one ticket shipped every week", "Certificate", "AI engineers who already build with LLMs", C],
      ["**[Alumnx: AI Launchpad](https://alumnx.com/programs/ai-launchpad)**", "6 weeks (9 Nov – 18 Dec 2026)", "Live sessions Monday–Friday (1 hour) plus Saturday hands-on workshops", "Live online", "An AI-operated drone project built across the Saturday workshops", "See provider page", "Engineers with 1–8 years' experience", C],
      ["**[BuildAI Careers: Forward Deployed Engineer](https://buildaicareers.com/training/forward-deployed-engineer/)**", "2 months", "50 hours of live instruction", "Live online or Bengaluru classroom; small batches", "One connected enterprise project with five review gates, ending in a live defence", "See provider page", "Hands-on technical experience; Python, Git, SQL and API basics", C],
      ["**[Internshala Trainings: Forward Deployed Engineer Course](https://trainings.internshala.com/forward-deployed-engineer-course/)**", "4 weeks", "Self-paced (16+ video tutorials)", "Online, recorded", "2 projects, including a customer-discovery simulation and a deployed prototype", "Internshala completion certificate, plus NSDC and Skill India certificates", "See provider page", C],
      ["**[Krish Naik: AI Forward Deployed Engineer Bootcamp](https://www.krishnaik.in/liveclass2/Forward_Deployed_Engineer?id=)**", "5 months (started 4 Oct 2026)", "Weekend live classes, 3 hours each day", "Live online", "Two enterprise capstones: a secure AI integration system and a multi-agent compliance platform", "See provider page", "Basic Python, SQL, APIs and Git", C],
      ["**[Maven (AI Makerspace): The AI FDE Certification](https://maven.com/aimakerspace/ai-fde-certification)**", "10 weeks", "20 live sessions", "Live cohort (global)", "10 projects; you bring a real use case from work and take it from pilot to production", "Certificate of completion", "Engineers with production code experience and company support for a real project", C],
      ["**[Maven (Agent Lab): Forward Deployed AI Engineer Bootcamp](https://maven.com/agent-lab/agent-engineering-bootcamp)**", "4 weeks", "Live sessions and office hours", "Live cohort (global)", "A realistic FDE project with a requirements document, proof of concept and final demo", "Personalised certificate after the required work", "Professionals with development experience", C],
      ["**[ADaSci: Certified Forward Deployed Engineer (CFDE)](https://adasci.org/certifications/certified-forward-deployed-engineer-cfde)**", "3–6 weeks at your own pace (a 1-month live incubator is a separate option)", "About 28 hours of on-demand content", "Self-paced, then a proctored exam", "Not project-based; a 50-question proctored multiple-choice exam", "CFDE credential, issued only on passing the exam", "AI professionals at any level", C],
      ["**[Datamarcos: Forward Deployed AI Engineer](/programs/forward-deployed-ai-engineer)**", "22 weeks", "170+ live hours; 10–14 hours a week", "Live online: 2 weekend sessions, a weekday evening lab and a weekly clinic", "4 client-style engagements from discovery and SOW through build, security, LLMOps and handover; FDE mock interview loops", "Datamarcos Executive Certificate (not an IIT or university certificate)", "Working engineers with about 2+ years' experience", C]
    ] },
    { type: "note", text: "\"See provider page\" means the page didn't state that fact clearly when we checked. Simplilearn's program page sits on its corporate-training site but lists a public cohort. HCL GUVI publishes a series of [forward deployed engineer articles](https://www.guvi.in/blog/category/forward-deployed-engineer/) but had no dedicated FDE program page we could link." },
    { type: "h2", id: "curriculum-by-skill", text: "How the curricula compare, skill by skill" },
    { type: "p", text: "Most FDE syllabi now name the same core technologies, so the real differences are in **how much client-side work you practise** and **how deep the production topics go**. The matrix below covers the programs with the most detailed public syllabi. \"Named\" means the skill appears in the provider's published curriculum; it doesn't measure depth. Ask for the week-by-week plan to judge that." },
    { type: "table", caption: `Skills named in each published FDE syllabus (checked ${C})`, head: ["Skill", "IIT Delhi CEP", "IIT Hyderabad", "IIIT Bangalore", "Scaler", "FDE School", "Simplilearn", "Interview Kickstart", "Datamarcos"], rows: [
      ["Discovery and scoping (problem brief, SOW)", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["RAG and retrieval", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["Agents and orchestration", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["MCP and tool integration", "Named", "Named", "Named", "Named", "Named", "Not named", "Named", "Named"],
      ["Evaluation (evals, test sets)", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["AI security and governance", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["Deployment and LLMOps", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"],
      ["Data engineering, SQL and legacy data", "Named", "Named", "Not named", "Named", "Not named", "Named", "Not named", "Named"],
      ["Client communication (demos, handover)", "Named", "Named", "Named", "Named", "Named", "Named", "Named", "Named"]
    ] },
    { type: "p", text: "Where they differ is the shape of the practice. IIT Delhi CEP splits the work roughly 70/30 between building and delivering, with a mini-capstone at each phase. IIT Hyderabad, Scaler and the iHUB DivyaSampark program run one connected engagement from start to finish. IIIT Bangalore, FDE School and BuildAI end in a capstone you defend to a panel. Datamarcos runs four separate client-style engagements, so you repeat the discovery-to-handover cycle four times." },
    { type: "h2", id: "who-each-is-for", text: "Which type of program fits you" },
    { type: "ul", items: [
      "**You want an IIT or IIIT name on the certificate:** IIT Delhi CEP, IIT Hyderabad AI Launchpad, IIT Roorkee CEC, iHUB DivyaSampark IIT Roorkee, IIIT Bangalore and iHub IIT Mandi. Check exactly which unit issues the certificate (a continuing-education centre or a technology innovation hub is not the same as a degree).",
      "**You want a long, live program with a lot of practice:** Scaler (12 months), Learnbay (12 months), iHub IIT Mandi with Coding Ninjas (8 months), FDE Academy (8 months), iHUB DivyaSampark IIT Roorkee (7 months), Fireblaze (26 weeks) and Datamarcos (22 weeks).",
      "**You already build with LLMs and want the client-facing layer fast:** Codebasics (8 weeks), IIT Hyderabad (13 weeks), FDE School (13 weeks), Simplilearn (10 weeks), BuildAI (2 months) and the Maven cohorts.",
      "**You want to test your interest cheaply first:** Internshala (4 weeks, self-paced), Alumnx (6 weeks) or ADaSci's self-paced CFDE exam route. These won't replace hands-on client-style practice, but they show you whether the role suits you.",
      "**You're preparing for FDE interviews specifically:** Interview Kickstart includes six weeks of FDE interview prep; Datamarcos includes FDE mock interview loops. See also our [FDE interview questions guide](/guides/forward-deployed-engineer-interview-questions)."
    ] },
    { type: "h2", id: "questions-to-ask", text: "Six questions to ask any FDE program" },
    { type: "ol", items: [
      "**How many full client-style engagements will I run end to end?** One? Four?",
      "**Do I write discovery notes, a scope or SOW, and a handover pack**, or only code?",
      "**Is security and governance hands-on?** That means SSO and RBAC, PII handling and audit trails, not just a lecture.",
      "**Who plays the \"client\"**, and who reviews my decisions?",
      "**How many hours are live**, and how many are recorded or self-study?",
      "**What experience does it assume?** Several programs above ask for prior engineering experience."
    ] },
    { type: "h2", id: "where-datamarcos-fits", text: "Where Datamarcos fits" },
    { type: "p", text: "The [Forward Deployed AI Engineer program](/programs/forward-deployed-ai-engineer) is a 22-week live program built around four client-style engagements, each running from customer discovery to production handover. It's designed for working engineers and runs on weekends with a weekday evening lab. It issues a Datamarcos certificate, not an IIT one; if an IIT name on the certificate is your priority, the IIT-linked programs above fit that better. Placement support, not a job guarantee. If you're earlier in your AI journey, the [GenAI & Agentic AI Engineer program](/programs/genai-agentic-ai-engineer) builds the agent and RAG foundations first." }
  ],
  faqs: [
    { q: "How does the curriculum of leading forward deployed engineering courses compare?", a: "The biggest difference is how much of the curriculum is a client-style engagement. IIT Delhi CEP uses a 70/30 build-to-deliver split with mini-capstones; IIT Hyderabad AI Launchpad and Scaler build around one connected client engagement; FDE School has four deployed systems and a client document set; Datamarcos runs four client-style engagements from discovery to handover." },
    { q: "Is there a forward deployed engineer course in India?", a: "Yes. As of November 2026 we found 24 programs open to Indian learners, from IIT Delhi CEP, IIT Hyderabad, IIT Roorkee, IIIT Bangalore and iHub IIT Mandi to Scaler, Learnbay, Interview Kickstart, FDE School, Datamarcos and others. They differ a lot in length, live hours, format and credential." },
    { q: "Is there an IIT forward deployed engineer course?", a: "Several programs carry an IIT name: IIT Delhi's Continuing Education Programme, IIT Hyderabad's AI Launchpad, IIT Roorkee's Continuing Education Centre (with Futurense), iHUB DivyaSampark at IIT Roorkee (with Masai) and iHub IIT Mandi (with Coding Ninjas). Check which unit issues the certificate and whether it is a certificate or a degree." },
    { q: "Which FDE course is the shortest?", a: "Among the programs we compared, Internshala's self-paced course and Maven's Agent Lab bootcamp run 4 weeks, and ADaSci's self-paced CFDE route takes about 3–6 weeks before the exam. Short courses are useful for orientation; client-style practice takes longer." },
    { q: "Can a fresher become a forward deployed engineer?", a: "Many FDE programs expect prior engineering experience: for example, IIT Hyderabad's program is aimed at engineers with roughly 2–5 years and Fireblaze's at 1–8 years. A few, such as IIT Roorkee CEC's certificate, are open to fresh graduates. Expect to build a strong portfolio, and possibly to start in an adjacent role." },
    { q: "How long does an FDE course take?", a: "The programs compared here run from about 4 weeks to 12 months. Many live programs aimed at working engineers take 3 to 8 months." },
    { q: "Do FDE courses guarantee jobs?", a: "Don't assume so; read each provider's terms. At Datamarcos it's placement support, not a job guarantee, and we don't promise a salary or a hike." }
  ],
  sources: [
    { label: "IIT Delhi CEP, Advanced Certificate in AI Forward Deployed Engineering (Batch 2)", url: "https://cepqip.iitd.ac.in/post/program/advanced-certificate-in-ai-forward-deployed-engineering" },
    { label: "IIT Hyderabad AI Launchpad, FDE Practitioner Program", url: "https://ailaunchpad.cse.iith.ac.in/programs/fde-practitioner/" },
    { label: "IIT Roorkee CEC with Futurense, PG Certificate in Forward Deployed AI Engineering", url: "https://futurense.com/iit-roorkee/pg-certificate-in-forward-deployed-ai-engineering" },
    { label: "iHUB DivyaSampark, IIT Roorkee with Masai, Forward Deployed Engineer Program", url: "https://www.masaischool.com/program/iit-roorkee/fde/ivsinfo" },
    { label: "IIIT Bangalore, Executive PG Programme in Forward Deployed AI Engineering", url: "https://www.iiitb.ac.in/executive-post-graduate-programme-in-forward-deployed-ai-engineering" },
    { label: "Coding Ninjas with iHub IIT Mandi, Professional Certification in FDE with Multimodal AI", url: "https://www.codingninjas.com/programs/forward-deployed-engineering-iit-mandi-advanced-certification" },
    { label: "Scaler, AI Forward Deployed Engineer Program", url: "https://www.scaler.com/ai-forward-deployed-engineer-course/" },
    { label: "FDE School", url: "https://fdeschool.in/" },
    { label: "Fireblaze AI School, Forward Deployed Engineer course", url: "https://fireblazeaischool.in/courses/forward-deployed-engineer-course/" },
    { label: "FDE Academy, PGP in FDE & Applied AI Solutions", url: "https://fde.academy/" },
    { label: "Learnbay, Forward Deployed AI Engineer Program", url: "https://www.learnbay.co/artificial-intelligence/forward-deployed-engineer-course" },
    { label: "Interview Kickstart, Forward Deployed AI Engineering", url: "https://interviewkickstart.com/in/courses/forward-deployed-ai-engineering" },
    { label: "Bosscoder Academy, AI Forward Deployed Engineer Program", url: "https://www.bosscoderacademy.com/ai-forward-deployed-engineer-program" },
    { label: "Simplilearn, Forward Deployed Engineer Program", url: "https://corporate-training.simplilearn.com/forward_deployed_engineer_program" },
    { label: "WeLe, Forward Deployed Engineer Program", url: "https://wele.ai/forward-deployed-engineer" },
    { label: "Codebasics, Forward Deployed Engineer Bootcamp for AI Engineers", url: "https://codebasics.io/bootcamps/fde-bootcamp-ai-engineers-1" },
    { label: "Alumnx, AI Launchpad", url: "https://alumnx.com/programs/ai-launchpad" },
    { label: "BuildAI Careers, Forward Deployed Engineer", url: "https://buildaicareers.com/training/forward-deployed-engineer/" },
    { label: "Internshala Trainings, Forward Deployed Engineer Course", url: "https://trainings.internshala.com/forward-deployed-engineer-course/" },
    { label: "Krish Naik, AI Forward Deployed Engineer Bootcamp", url: "https://www.krishnaik.in/liveclass2/Forward_Deployed_Engineer?id=" },
    { label: "Maven, AI Makerspace: The AI FDE Certification", url: "https://maven.com/aimakerspace/ai-fde-certification" },
    { label: "Maven, Agent Lab: Forward Deployed AI Engineer Bootcamp", url: "https://maven.com/agent-lab/agent-engineering-bootcamp" },
    { label: "ADaSci, Certified Forward Deployed Engineer (CFDE)", url: "https://adasci.org/certifications/certified-forward-deployed-engineer-cfde" },
    { label: "HCL GUVI blog, Forward Deployed Engineer category", url: "https://www.guvi.in/blog/category/forward-deployed-engineer/" },
    { label: "The Hindu BusinessLine, \"GCCs outpace Indian IT services firms in hiring Forward Deployed Engineers\" (12 Aug 2026)", url: "https://www.thehindubusinessline.com/info-tech/gccs-outpace-indian-it-services-firms-in-hiring-forward-deployed-engineers/article71336534.ece" },
    { label: "Datamarcos, Forward Deployed AI Engineer program", url: "https://www.datamarcos.com/programs/forward-deployed-ai-engineer" }
  ]
};
