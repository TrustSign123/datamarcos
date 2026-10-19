import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  ChartNoAxesCombined,
  Database,
  Network,
  Sparkles,
  Workflow
} from "lucide-react";
import { site } from "@/config/site";
import "./academy-preview.css";

export const metadata: Metadata = {
  title: "Datamarcos Academy | Upskill for AI, Data & Engineering",
  description: "Build practical skills in AI, Generative AI, Agentic AI, Forward Deployed Engineering and Data Engineering with mentor-led learning at Datamarcos.",
  alternates: { canonical: "/academy-preview" },
  openGraph: {
    title: "Datamarcos Academy | Practical technology learning",
    description: "Learn the skills. Build real systems. Grow your technology career.",
    images: ["/images/forward-deployed-ai-engineer/field-engineer-hero.jpg"]
  }
};

const metrics = [
  { value: "18+", label: "years in technology" },
  { value: "25,000+", label: "professionals trained" },
  { value: "200+", label: "organizations reached" },
  { value: "10+", label: "countries" }
];

const paths = [
  {
    icon: Atom,
    number: "01",
    title: "Artificial Intelligence",
    description: "Build strong foundations in machine learning, applied AI and the systems behind intelligent products.",
    tags: ["Applied AI", "Machine Learning", "AI systems"],
    href: "/programs?technology=AI",
    tone: "cyan"
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Generative AI",
    description: "Design useful LLM applications with retrieval, evaluation, safety and production-minded engineering.",
    tags: ["LLMs", "RAG", "Evaluation"],
    href: "/programs/generative-ai-engineering",
    tone: "coral"
  },
  {
    icon: Workflow,
    number: "03",
    title: "Agentic AI",
    description: "Create tool-using agents and dependable workflows with orchestration, approvals and observability.",
    tags: ["Agents", "MCP", "Workflows"],
    href: "/programs/applied-agentic-ai-certification",
    tone: "lime"
  },
  {
    icon: Network,
    number: "04",
    title: "Forward Deployed Engineering",
    description: "Take AI from customer discovery to secure deployment, integration, adoption and handoff.",
    tags: ["Customer craft", "Deployment", "Ownership"],
    href: "/programs/forward-deployed-ai-engineer",
    tone: "blue"
  },
  {
    icon: Database,
    number: "05",
    title: "Data Engineering",
    description: "Engineer modern batch, streaming and cloud data platforms that make analytics and AI possible.",
    tags: ["Python", "Cloud data", "Platforms"],
    href: "/programs/data-engineering",
    tone: "gold"
  }
];

const learningSteps = [
  { number: "01", title: "Learn with context", description: "Live instruction connects core concepts to the decisions engineers make at work." },
  { number: "02", title: "Build with guidance", description: "Labs, code reviews and mentor feedback help turn knowledge into working systems." },
  { number: "03", title: "Show what you can do", description: "Projects and capstones give you concrete work to explain and keep improving." }
];

const projectExamples = [
  { icon: Braces, label: "GenAI application", title: "Grounded answers, not guesswork", description: "Build a retrieval assistant with citations, evaluation and sensible safety controls." },
  { icon: Workflow, label: "Agentic workflow", title: "Tools with human oversight", description: "Connect an agent to business tools with approvals, traces and clear boundaries." },
  { icon: ChartNoAxesCombined, label: "Data platform", title: "Reliable data, ready for AI", description: "Design production pipelines that keep important information timely and trustworthy." }
];

export default function AcademyPreviewPage() {
  return (
    <div className="academy-preview-shell">
      <header className="academy-nav">
        <div className="academy-wrap academy-nav-inner">
          <Link href="/academy-preview" className="academy-brand" aria-label="Datamarcos Academy home">
            <span className="academy-brand-mark">DM</span>
            <span><strong>DATAMARCOS</strong><small>ACADEMY</small></span>
          </Link>
          <nav aria-label="Academy navigation">
            <a href="#paths">Learning paths</a>
            <a href="#method">How you learn</a>
            <a href="#about">Our story</a>
          </nav>
          <Link className="academy-nav-cta" href="#paths">Explore programs <ArrowUpRight size={15} /></Link>
        </div>
      </header>

      <main>
        <section className="academy-hero">
          <div className="academy-wrap academy-hero-layout">
            <div className="academy-hero-copy">
              <p className="academy-overline"><span /> PROFESSIONAL TECHNOLOGY LEARNING</p>
              <h1>Build skills for the <span>AI-first</span> world.</h1>
              <p className="academy-hero-lede">Learn AI, Generative AI, Agentic AI, Forward Deployed Engineering and Data Engineering with experienced mentors and practical projects.</p>
              <div className="academy-hero-actions">
                <Link className="academy-button academy-button-bright" href="#paths">Find your learning path <ArrowRight size={17} /></Link>
                <Link className="academy-button academy-button-quiet" href="/contact">Talk to an advisor</Link>
              </div>
              <div className="academy-hero-note"><span className="academy-note-dot" /> Expert-led learning · Practical work · Career-focused growth</div>
            </div>
            <div className="academy-hero-visual">
              <Image src="/images/forward-deployed-ai-engineer/field-engineer-hero.jpg" alt="Technology professional learning and working at a laptop" width={1600} height={1067} priority />
              <div className="academy-visual-shade" />
              <div className="academy-image-caption"><span>LEARN</span><i /> <span>BUILD</span><i /> <span>GROW</span></div>
              <div className="academy-visual-stamp"><Sparkles size={16} /><span>Make your next<br />move count.</span></div>
            </div>
            <span className="academy-hero-index" aria-hidden="true">01 / LEARNING THAT MOVES WITH TECHNOLOGY</span>
          </div>
        </section>

        <section className="academy-proof" aria-label="Datamarcos experience">
          <div className="academy-wrap academy-proof-row">
            <p>Built on real teaching experience</p>
            {metrics.map((metric) => <div className="academy-proof-item" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </section>

        <section className="academy-paths" id="paths">
          <div className="academy-wrap">
            <div className="academy-section-heading">
              <div><p className="academy-overline"><span /> PICK YOUR DIRECTION</p><h2>Where do you want<br />your skills to take you?</h2></div>
              <p>Choose a path. Build capability that you can put to work, whether you are growing your current role or preparing for what comes next.</p>
            </div>
            <div className="academy-path-grid">
              {paths.map((path) => <article className={`academy-path-card tone-${path.tone}`} key={path.number}>
                <div className="academy-card-top"><span className="academy-card-number">{path.number}</span><span className="academy-path-icon"><path.icon size={23} strokeWidth={1.8} /></span></div>
                <h3>{path.title}</h3><p>{path.description}</p>
                <div className="academy-path-tags">{path.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link href={path.href} className="academy-path-link">Explore path <ArrowUpRight size={17} /></Link>
              </article>)}
            </div>
          </div>
        </section>

        <section className="academy-method" id="method">
          <div className="academy-wrap academy-method-layout">
            <div className="academy-method-intro"><p className="academy-overline"><span /> A PRACTICAL WAY TO LEARN</p><h2>From “I understand”<br />to “I built it.”</h2><p>Good learning makes room for questions, practice and iteration. Our programs connect expert instruction with guided work and project-based learning.</p><Link className="academy-text-link" href="/programs">Browse all learning paths <ArrowRight size={16} /></Link></div>
            <div className="academy-step-list">{learningSteps.map((step) => <article className="academy-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><ArrowDownRight size={19} /></article>)}</div>
          </div>
        </section>

        <section className="academy-projects">
          <div className="academy-wrap">
            <div className="academy-section-heading academy-project-heading"><div><p className="academy-overline"><span /> APPLIED LEARNING</p><h2>Make the work<br />your proof.</h2></div><p>Build and refine practical work across the technologies you are learning. The goal is understanding you can demonstrate, not just a list of tools.</p></div>
            <div className="academy-project-grid">{projectExamples.map((item, index) => <article className={`academy-project academy-project-${index + 1}`} key={item.label}><div className="academy-project-graphic"><span className="academy-project-orbit" /><span className="academy-project-icon"><item.icon size={28} /></span><b>0{index + 1}</b></div><p className="academy-project-label">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          </div>
        </section>

        <section className="academy-mentor" id="about">
          <div className="academy-wrap academy-mentor-layout">
            <div className="academy-mentor-image"><Image src={site.founder.image} alt={site.founder.imageAlt} width={700} height={875} /><span>MENTOR-LED. PRACTICE-ROOTED.</span></div>
            <div className="academy-mentor-copy"><p className="academy-overline"><span /> EXPERIENCE THAT TEACHES</p><h2>Learn from people<br />who know the work.</h2><p>Datamarcos Academy is led by technology practitioners who make complex ideas practical and connect learning to the realities of building systems.</p><div className="academy-mentor-name"><strong>{site.founder.name}</strong><span>{site.founder.title}</span></div><div className="academy-mentor-facts"><span><b>18+</b> years experience</span><span><b>25k+</b> professionals trained</span></div><Link className="academy-text-link" href="/about">Get to know Datamarcos <ArrowRight size={16} /></Link></div>
          </div>
        </section>

        <section className="academy-final-cta">
          <div className="academy-wrap academy-final-inner"><div><p className="academy-overline"><span /> YOUR NEXT CHAPTER STARTS HERE</p><h2>Make learning your<br />career advantage.</h2><p>Explore a path in AI, GenAI, Agentic AI, FDE or Data Engineering.</p></div><div className="academy-final-actions"><Link className="academy-button academy-button-bright" href="#paths">Explore learning paths <ArrowRight size={17} /></Link><Link className="academy-button academy-button-outline" href="/contact">Ask us a question</Link></div><span className="academy-final-mark" aria-hidden="true">DM</span></div>
        </section>
      </main>

      <footer className="academy-footer"><div className="academy-wrap academy-footer-inner"><Link href="/academy-preview" className="academy-brand" aria-label="Datamarcos Academy home"><span className="academy-brand-mark">DM</span><span><strong>DATAMARCOS</strong><small>ACADEMY</small></span></Link><p>{site.tagline}</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>© 2026 Datamarcos</span></div></div></footer>
    </div>
  );
}