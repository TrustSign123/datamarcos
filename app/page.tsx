import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, CircuitBoard, Database, GraduationCap, Network, Users, Workflow } from "lucide-react";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "AI, Data Engineering & Agentic AI Upskilling | Datamarcos",
  description: "Mentor-led learning for AI and data professionals, plus practical technology capability programs for teams. Build data engineering, GenAI, agentic AI and production skills with Datamarcos."
};

const skillAreas = ["AI & GenAI", "Data Engineering", "Cloud", "DevOps", "Cybersecurity", "Software Engineering", "Platform Engineering", "Machine Learning", "Analytics"];

const learningSteps = [
  ["Build the data foundation", "Pipelines, cloud data platforms, orchestration and quality."],
  ["Engineer with language models", "RAG, evaluation, model integration and useful AI applications."],
  ["Create agentic workflows", "Tool use, MCP, multi-step reasoning and human oversight."],
  ["Take systems to production", "Security, deployment, monitoring and enterprise context."]
];

const programs = [
  {
    title: "Generative AI & Agentic AI Engineer",
    category: "18-week executive program · 130+ live hours",
    description: "Build LLM apps, production RAG and governed multi-agent systems, then secure, deploy and defend them.",
    image: "/images/program-thumbnails/genai-agentic-ai-engineer.jpg",
    alt: "Datamarcos technology learners at an instructor-led cohort session",
    href: "/programs/genai-agentic-ai-engineer",
    link: "Explore the GenAI & Agentic AI program"
  },
  {
    title: "Advance Data Engineering with Applied GenAI & Agentic AI",
    category: "4-month foundation · advanced specialization",
    description: "Build modern cloud data engineering first, then advance into GenAI, production RAG, agent workflows and an integrated capstone.",
    image: "/images/program-thumbnails/data-engineering-genai.png",
    alt: "Advanced Data Engineering with GenAI and Agentic AI program thumbnail",
    href: "/programs/advance-data-engineering-genai",
    link: "Explore the data + AI pathway"
  },
  {
    title: "Applied Agentic AI",
    category: "LLMs · RAG · Agent workflows",
    description: "Learn to design, build and evaluate practical AI workflows with retrieval, tools and agent orchestration.",
    image: "/images/program-thumbnails/applied-agentic-ai.png",
    alt: "Applied Agentic AI certification program thumbnail",
    href: "/programs/applied-agentic-ai-certification",
    link: "Explore Applied Agentic AI"
  },
  {
    title: "Forward Deployed AI Engineer",
    category: "Enterprise AI · Field engineering",
    description: "Scope, build, secure and deploy AI systems in enterprise environments, from discovery to handoff.",
    image: "/images/program-thumbnails/forward-deployed-ai-engineer.png",
    alt: "Forward Deployed AI Engineer program thumbnail",
    href: "/programs/forward-deployed-ai-engineer",
    link: "Explore the FDE program"
  }
];

const learnerProfiles = [
  { name: "Richard Leclézio", role: "Professional learner", company: "LinkedIn", short: "IN", image: "/images/student-placements/richard-leclezio.jpeg", link: "https://www.linkedin.com/in/richard-leclezio/" },
  { name: "Lakshan J", role: "Software Engineer", company: "Hexaware Technologies", short: "HX", image: "/images/student-placements/lakshan-j.png", link: "https://www.linkedin.com/in/lakshan013/" },
  { name: "Uphar Tandon", role: "Technology professional", company: "Microsoft", short: "MS", image: "/images/student-placements/uphar-tandon.png", link: "https://www.linkedin.com/in/uphar-tandon-2563a636/" },
  { name: "Sharoz Farhan Afridi", role: "Technology professional", company: "Career Growth", short: "CG", image: "/images/student-placements/sharoz-farhan-afridi.jpeg", link: "https://www.linkedin.com/in/sharoz-farhan-afridi/" },
  { name: "Gaurav Taneja", role: "Senior Azure Data Engineer", company: "PwC", short: "PwC", image: "/images/student-placements/gaurav-taneja.png", link: "https://www.linkedin.com/in/gaurav-t-a4a096158/" }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Technology Learning · AI, Data & Workforce Upskilling</p>
            <h1>Build the skills to shape what comes next.</h1>
            <p>Mentor-led learning for professionals and practical capability programs for teams, across data engineering, generative AI and production agentic systems.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/programs">Explore Learning Programs <ArrowRight size={18} /></Link>
              <Link className="button secondary" href="/corporate-training">Upskill Your Team <ArrowUpRight size={17} /></Link>
              <Link className="button secondary" href="/lms"><GraduationCap size={18} /> Learning Hub</Link>
            </div>
            <div className="trust-line"><span>18+ years of experience</span><span>25,000+ professionals trained</span><span>200+ clients</span></div>
          </div>
          <div className="ecosystem" aria-label="Learning path from data foundations to production AI">
            <div className="node-list">
              {[
                [Database, "Data systems", "Build the foundation"],
                [BookOpen, "LLM applications", "Engineer useful AI"],
                [Workflow, "Agentic workflows", "Connect tools and tasks"],
                [Network, "Production AI", "Deploy in real contexts"]
              ].map(([Icon, title, detail], index) => (
                <div className="node" key={title as string}>
                  <span className="node-dot" style={{ animationDelay: `${index * 160}ms` }} />
                  <Icon size={19} aria-hidden="true" />
                  <div><strong>{title as string}</strong><small>{detail as string}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="capability-bar">
        <div className="container">
          <strong>Explore skills for the modern technology workplace</strong>
          <div className="pill-row">{skillAreas.map((item) => <span className="badge" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">One learning partner · two ways forward</p>
          <h2 className="section-title">Skills for people. Capability for teams.</h2>
          <div className="grid two">
            <article className="card"><GraduationCap /><p className="eyebrow">For technology professionals</p><h3>Make your next move in AI and data.</h3><p>Build practical skills through guided programs, applied projects and expert instruction, from data engineering foundations to agentic applications.</p><Link className="button primary" href="/programs">Find Your Learning Path <ArrowRight size={17} /></Link></article>
            <article className="card"><BriefcaseBusiness /><p className="eyebrow">For organizations</p><h3>Turn technology change into team capability.</h3><p>Give teams role-based training in AI, data, cloud and software, designed around your goals, technology stack and delivery environment.</p><Link className="button primary" href="/corporate-training">Build a Team Learning Plan <ArrowRight size={17} /></Link></article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="student-placement-header">
            <div><p className="eyebrow">Learn for the work ahead</p><h2 className="section-title">Choose your next skill path.</h2><p className="section-copy">Focused programs for the technologies changing how products and teams are built.</p></div>
            <Link className="button secondary" href="/programs">Explore All Programs <ArrowRight size={17} /></Link>
          </div>
          <div className="grid home-program-grid">
            {programs.map((program) => (
              <article className="card home-path-card" key={program.href}>
                <div className="home-path-image-frame"><Image className="home-path-image" src={program.image} alt={program.alt} width={1200} height={800} sizes="(max-width: 640px) 90vw, (max-width: 1100px) 44vw, 24vw" /></div>
                <p className="eyebrow">{program.category}</p>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link className="button ghost" href={program.href}>{program.link} <ArrowUpRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-trainer-showcase" aria-labelledby="home-trainers-title">
        <div className="container">
          <div className="student-placement-header">
            <div>
              <p className="eyebrow">Trainers & industry experts</p>
              <h2 className="section-title" id="home-trainers-title">Learn from people who do the work.</h2>
              <p className="section-copy">Experienced practitioners bring technology, business context and hands-on teaching into every learning journey.</p>
            </div>
          </div>
          <div className="grid two home-trainer-cards">
            <article className="card home-trainer-card">
              <div className="home-trainer-card-photo"><Image src={site.founder.image} alt={site.founder.imageAlt} width={420} height={420} sizes="(max-width: 700px) 120px, 160px" /></div>
              <div className="home-trainer-card-content">
                <p className="eyebrow">Founder · Datamarcos</p>
                <h3>Deepesh Mishra</h3>
                <p>Technology trainer and solution architect with 18+ years of experience. Has trained 25,000+ professionals across 200+ corporate and academic clients.</p>
                <div className="home-trainer-tags"><span>AI & GenAI</span><span>Data Engineering</span><span>Cloud</span></div>
                <Link href="/about" className="button ghost">Meet Deepesh <ArrowUpRight size={16} /></Link>
              </div>
            </article>
            <article className="card home-trainer-card">
              <div className="home-trainer-card-photo"><Image src="/images/trainers/eshank-agarwal.jpeg" alt="Eshank Agarwal, GenAI consultant and corporate trainer" width={603} height={603} sizes="(max-width: 700px) 96px, 150px" /></div>
              <div className="home-trainer-card-content">
                <p className="eyebrow">Industry expert · GenAI</p>
                <h3>Eshank Agarwal</h3>
                <p>Founder & CEO, GenAI consultant and Data Science corporate trainer. Also brings advisory, Six Sigma and Lean consulting experience.</p>
                <div className="home-trainer-tags"><span>LEAN.AI</span><span>IIT Bombay</span><span>Six Sigma</span></div>
                <a href="https://www.linkedin.com/in/eshankagarwal/" target="_blank" rel="noreferrer" className="button ghost">View LinkedIn profile <ArrowUpRight size={16} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section student-placement-showcase" aria-labelledby="home-learners-title">
        <div className="container">
          <div className="student-placement-header">
            <div>
              <p className="eyebrow">Our learner community</p>
              <h2 className="section-title" id="home-learners-title">Meet the learners behind the work.</h2>
              <p className="section-copy">Technology professionals bringing new skills into their careers. Open a profile to learn more about each person.</p>
            </div>
          </div>
          <div className="student-placement-marquee" aria-label="Datamarcos learner profiles">
            <div className="student-placement-track">
              {[...learnerProfiles, ...learnerProfiles].map((learner, index) => (
                <a key={`${learner.name}-${index}`} href={learner.link} target="_blank" rel="noreferrer" className="student-placement-card" aria-hidden={index >= learnerProfiles.length} tabIndex={index >= learnerProfiles.length ? -1 : undefined}>
                  <div className="student-placement-image-wrap">
                    <Image src={learner.image} alt={learner.name} width={500} height={420} sizes="250px" />
                    <span className="student-placement-badge">{learner.short}</span>
                  </div>
                  <div className="student-placement-body">
                    <div className="student-placement-company">{learner.company}</div>
                    <h3>{learner.name}</h3>
                    <p>{learner.role}</p>
                    <span className="student-placement-link">View LinkedIn <ArrowRight size={15} /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div><p className="eyebrow">Beyond the buzzwords</p><h2 className="section-title">Understand the stack. Build what runs on it.</h2><p className="section-copy">Strong AI work starts with good data and ends with systems people can use. Our learning connects the layers in between.</p><Link className="button secondary" href="/programs/advance-data-engineering-genai">See the Data + AI Pathway <ArrowRight size={17} /></Link></div>
          <div className="grid two home-journey-grid">{learningSteps.map(([title, detail], index) => <article className="card" key={title}><span className="badge status-custom">0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two home-trainer-grid">
          <div className="founder-portrait" aria-label={site.founder.imageAlt}><Image src={site.founder.image} alt={site.founder.imageAlt} width={700} height={875} /></div>
          <div>
            <p className="eyebrow">Learn with experienced practitioners</p>
            <h2 className="section-title">Meet {site.founder.name}.</h2>
            <p className="section-copy">{site.founder.title} · BITS Pilani alumnus · Technology trainer and solution architect.</p>
            <p className="section-copy">Deepesh has 18+ years in technology and has trained 25,000+ professionals across 200+ corporate and academic clients. His teaching connects clear concepts with hands-on work and real-world examples.</p>
            <div className="tech-list">{site.founder.teaches.slice(0, 6).map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
            <div className="grid three founder-stats">{site.stats.slice(0, 3).map((stat) => <div className="card" key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container grid two">
          <div><p className="eyebrow">For teams building what is next</p><h2 className="section-title">Make AI capability part of how your organization works.</h2><p className="section-copy">From a focused workshop to a role-based academy, shape learning around the people, systems and business problems you need to move forward.</p><Link className="button primary" href="/corporate-training#inquiry">Talk About Team Training <ArrowRight size={17} /></Link></div>
          <div className="grid"><article className="card"><Users /><h3>Role-based learning</h3><p>Build skills around real responsibilities.</p></article><article className="card"><CheckCircle2 /><h3>Practical projects</h3><p>Connect learning to work that matters.</p></article><article className="card"><CircuitBoard /><h3>Flexible delivery</h3><p>Live online, onsite, hybrid or custom.</p></article></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container card" style={{ textAlign: "center" }}>
          <Network size={38} />
          <h2 className="section-title">Build the capability your next chapter needs.</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}><Link className="button primary" href="/programs">Explore Programs</Link><Link className="button secondary" href="/contact">Talk to Datamarcos</Link></div>
        </div>
      </section>
    </>
  );
}