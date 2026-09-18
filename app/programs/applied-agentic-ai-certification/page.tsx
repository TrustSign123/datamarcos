import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Check, MessageCircle, Sparkles, Star, Users } from "lucide-react";
import { Logo } from "@/components/Header";
import { site } from "@/config/site";

const brochurePath = "/brochures/DataMarcos_Applied_Agentic_AI_Brochure.pdf";
const whatsappBase = (site.social.whatsapp || "https://wa.me/918442032741").split("?")[0];
const whatsappConsultation = `${whatsappBase}?text=${encodeURIComponent("Hi Datamarcos! I want to know more about the Applied Agentic AI Certification, the course details, fees, and next batch dates.")}`;
const whatsappBrochure = `${whatsappBase}?text=${encodeURIComponent("Hi Datamarcos! Please send me the brochure and fee details for the Applied Agentic AI Certification.")}`;

const stats = [
  { value: "25,000+", label: "Professionals trained" },
  { value: "200+", label: "Corporate & academic clients" },
  { value: "10+", label: "Countries reached" },
  { value: "18+", label: "Years of industry experience" }
];

const pillars = [
  { title: "Mentor-led learning", copy: "Practical instruction from Deepesh Mishra, a BITS Pilani alumnus and enterprise technology mentor." },
  { title: "Hands-on AI workflows", copy: "Work through real prompts, tools, agents, retrieval patterns and production-grade AI use cases." },
  { title: "Career growth focus", copy: "Built for professionals who want to move from passive AI usage to relevant, applied AI implementation." }
];

const mentorLogos = ["Deloitte", "EY", "Adobe", "Yahoo", "HSBC", "Boeing", "Reliance", "Micro Focus"];

const orbitTechnologies = [
  { name: "LangChain", mark: "LC", tone: "orange" },
  { name: "LangGraph", mark: "LG", tone: "violet" },
  { name: "Agentic AI", mark: "AI", tone: "cyan" },
  { name: "Azure", mark: "AZ", tone: "blue" },
  { name: "OpenAI", mark: "OAI", tone: "green" },
  { name: "MCP", mark: "MCP", tone: "coral" }
];

const reasons = [
  { title: "Practical execution", copy: "Every session is anchored in real AI system design, tooling and problem-solving instead of theory alone." },
  { title: "Relevant for the market", copy: "You learn workflows, multi-step reasoning, tool use and AI orchestration that matter in real projects." },
  { title: "Mentor guidance", copy: "It is built for professionals who want a clear path from experimentation to useful production outcomes." },
  { title: "Career readiness", copy: "The program is designed to help you become fluent in modern AI engineering patterns and project execution." }
];

const weeklyModules = [
  { week: "Week 1", title: "LLM foundations & system thinking", copy: "Understand transformers, embeddings, context windows, multi-model workflows and evaluation strategy." },
  { week: "Week 2", title: "Prompt engineering & structured output", copy: "Build reliable prompts, controlled responses and tool-calling patterns for production contexts." },
  { week: "Week 3", title: "Production RAG systems", copy: "Create knowledge workflows with retrieval, chunking, vector stores, reranking and quality checks." },
  { week: "Week 4", title: "AI agents & tool use", copy: "Connect your agent to APIs, internal systems and workflows with memory, guardrails and action loops." },
  { week: "Week 5", title: "Multi-agent systems", copy: "Coordinate specialist agents, dispatch tasks, and design orchestration patterns for real projects." },
  { week: "Week 6", title: "MCP & enterprise integration", copy: "Learn how agentic systems plug into business tools, databases and operational environments." },
  { week: "Week 7", title: "Voice, multimodal & automation", copy: "Explore tool-based automation, multimodal flows and connected AI workflows that support business tasks." },
  { week: "Week 8", title: "Capstone & deployment", copy: "Package your solution, evaluate performance, and present a portfolio-ready AI system." }
];

const outcomes = [
  "Design and evaluate production-ready AI conversations and workflows",
  "Build RAG systems that connect models to real business knowledge",
  "Create agents that call tools, take action and operate across systems",
  "Understand multi-agent orchestration, evaluation and reliability patterns",
  "Ship a capstone project that demonstrates real-world AI engineering skills"
];

const classroomPreviews = [
  { image: "/images/applied-agentic-ai/classroom-sigmaoid.webp", label: "Sigmaoid delivery session", copy: "Collaborative learning, technical discussion and applied problem-solving." },
  { image: "/images/applied-agentic-ai/classroom-novartis.webp", label: "Novartis classroom training", copy: "Analytics, Python, forecasting and machine learning connected to a real domain." },
  { image: "/images/applied-agentic-ai/classroom-live.webp", label: "Hands-on live classroom", copy: "Instructor-led practice where learners build, test and ask better questions together." }
];

const learnerFeedback = "His deep understanding of the subject, combined with a clear and engaging teaching style, made complex concepts easy to grasp — even for those new to the field. What stood out most was his ability to connect real-world applications with theoretical concepts.";

export default function AppliedAgenticAICertificationPage() {
  return (
    <div id="applied-agentic-ai-certification" className="agentic-course-page">
      <section className="agentic-hero-shell">
        <div className="container agentic-topbar">
          <Logo />

          <div className="agentic-top-actions">
            <Link className="button secondary" href="/programs">Explore Programs</Link>
            <a className="button primary" href={whatsappConsultation} target="_blank" rel="noreferrer">Enroll on WhatsApp</a>
          </div>
        </div>

        <div className="container agentic-hero">
          <div className="agentic-copy">
            <span className="badge live">Applied Agentic AI Certification</span>
            <h1>Build agentic AI systems that actually work in the real world.</h1>
            <p>
              An eight-week, mentor-led Datamarcos certification for professionals who want to move beyond prompts and build production-ready AI workflows, RAG systems, tool-using agents and automation that can stand up in the real world.
            </p>

            <div className="agentic-program-meta"><span>8 weeks</span><span>Live mentor support</span><span>Portfolio capstone</span></div>

            <div className="hero-actions">
              <a className="button primary" href={whatsappConsultation} target="_blank" rel="noreferrer">
                Book a consultation <ArrowRight size={18} />
              </a>
              <a className="button secondary" href={brochurePath} download target="_blank" rel="noreferrer">
                Download brochure <ArrowDownToLine size={18} />
              </a>
            </div>

            <div className="trust-line">
              <span><Check size={14} /> BITS Pilani alumnus</span>
              <span><Check size={14} /> AI tool power user</span>
              <span><Check size={14} /> Live mentor support</span>
            </div>
          </div>

          <div className="agentic-visual-wrap">
            <div className="agentic-visual-card agentic-orbit-card">
              <div className="agentic-orbit-copy">
                <span className="agentic-orbit-kicker">Build with the modern AI stack</span>
                <strong>From model to working agent.</strong>
                <span>Learn the tools that turn ideas into useful systems.</span>
              </div>
              <div className="agentic-orbit" aria-label="Rotating technology stack">
                <div className="agentic-orbit-ring agentic-orbit-ring-one" />
                <div className="agentic-orbit-ring agentic-orbit-ring-two" />
                <div className="agentic-orbit-core"><Sparkles size={24} /><span>Agentic<br />systems</span></div>
                <div className="agentic-orbit-wheel">
                  {orbitTechnologies.map((technology, index) => (
                    <div key={technology.name} className={`agentic-orbit-item agentic-orbit-item-${index + 1}`}>
                      <span className={`agentic-tech-mark ${technology.tone}`}>{technology.mark}</span>
                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="agentic-mentor-box">
                <img src="/images/applied-agentic-ai/deepesh-mishra.jpg" alt="Deepesh Mishra, Datamarcos mentor" className="agentic-mentor-avatar" />
                <div className="agentic-mentor-details"><span className="agentic-mentor-label">Mentored by</span><div className="agentic-mentor-name">Deepesh Mishra</div></div>
                <span className="agentic-mentor-stat">18+ years<br />of experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container agentic-stat-grid">
          {stats.map((item) => (
            <div className="agentic-stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container agentic-two-col">
          <div>
            <p className="eyebrow">Why this program</p>
            <h2 className="section-title">Real-world AI learning for professionals who want to keep growing.</h2>
            <p className="section-copy">
              Datamarcos blends technical depth with practical delivery so you learn the systems, workflows and reasoning behind modern AI engineering without getting lost in hype.
            </p>
          </div>

          <div className="agentic-feature-list">
            {pillars.map((item) => (
              <article key={item.title} className="agentic-feature-card">
                <div className="agentic-icon-wrap">
                  <Star size={20} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section agentic-proof-section">
        <div className="container">
          <div className="agentic-heading-center">
            <p className="eyebrow">Learning in the room</p>
            <h2 className="section-title">Real delivery. Real people. Real momentum.</h2>
            <p className="section-copy">The certification brings the same practical energy found in Deepesh&apos;s enterprise classrooms into a focused, hands-on AI learning path.</p>
          </div>

          <div className="agentic-classroom-grid">
            {classroomPreviews.map((preview) => (
              <figure className="agentic-classroom-card" key={preview.image}>
                <img src={preview.image} alt={preview.label} />
                <figcaption><strong>{preview.label}</strong><span>{preview.copy}</span></figcaption>
              </figure>
            ))}
          </div>

          <blockquote className="agentic-feedback-card">
            <div className="agentic-feedback-mark">“</div>
            <p>{learnerFeedback}</p>
            <footer>Kumar Gaurav <span>Senior Azure Data Engineer @ PwC · Ex-EY · Ex-Genpact</span></footer>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="agentic-heading-center">
            <p className="eyebrow">What sets it apart</p>
            <h2 className="section-title">From AI curiosity to applied implementation.</h2>
          </div>

          <div className="agentic-grid-two">
            <div className="agentic-focus-card">
              <div className="agentic-card-icon"><Sparkles size={20} /></div>
              <h3>What you’ll learn</h3>
              <div className="tech-list">
                {[
                  "LLM Foundations",
                  "Prompt design & structured output",
                  "RAG & retrieval systems",
                  "Agentic workflows",
                  "Tool calling & orchestration",
                  "Multi-agent patterns",
                  "MCP & automation",
                  "Production AI evaluation"
                ].map((item) => (
                  <span className="tech-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="agentic-focus-card agentic-focus-highlight">
              <div className="agentic-card-icon"><Users size={20} /></div>
              <h3>Who it is built for</h3>
              <ul className="agentic-check-list">
                {[
                  "Data engineers and analytics professionals",
                  "Software engineers exploring AI implementation",
                  "Technical leaders and product-minded teams",
                  "Working professionals ready to upskill fast"
                ].map((item) => (
                  <li key={item}><Check size={16} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container agentic-two-col">
          <div>
            <p className="eyebrow">Mentor footprint</p>
            <h2 className="section-title">Trusted by leading teams and organizations.</h2>
            <div className="agentic-logo-row">
              {mentorLogos.map((mentor) => (
                <span key={mentor}>{mentor}</span>
              ))}
            </div>
          </div>

          <div className="agentic-side-stack">
            {reasons.map((reason) => (
              <div key={reason.title} className="agentic-reason-item">
                <div className="agentic-check-bullet"><Check size={15} /></div>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="agentic-heading-center">
            <p className="eyebrow">Curriculum build path</p>
            <h2 className="section-title">A structured eight-week path from AI fundamentals to agentic execution.</h2>
          </div>

          <div className="agentic-learning-path">
            <div className="agentic-path-line" aria-hidden="true" />
            {weeklyModules.map((module) => (
              <article key={module.week} className="agentic-path-item">
                <div className="agentic-path-marker"><span>{module.week.replace("Week ", "")}</span></div>
                <div className="agentic-module-card">
                  <span>{module.week}</span>
                  <h3>{module.title}</h3>
                  <p>{module.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="agentic-heading-center">
            <p className="eyebrow">What you can do by the end</p>
            <h2 className="section-title">Build useful AI systems, not just demos.</h2>
          </div>

          <div className="agentic-outcome-grid">
            {outcomes.map((item) => (
              <div className="agentic-outcome-item" key={item}>
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container agentic-showcase">
          <div className="agentic-image-panel">
            <img src="/images/applied-agentic-ai/live-session.jpg" alt="Datamarcos live AI workshop" />
          </div>

          <div className="agentic-proof-stack">
            <div className="agentic-proof-card">
              <p className="eyebrow">Learner feedback</p>
              <img src="/images/applied-agentic-ai/testimonial-1.jpg" alt="Learner testimonial" />
            </div>
            <div className="agentic-proof-card">
              <img src="/images/applied-agentic-ai/testimonial-2.jpg" alt="Second learner testimonial" />
            </div>
          </div>
        </div>
      </section>

      <section className="section final-program-cta">
        <div className="container">
          <span className="badge live">Learn. Apply. Grow. Succeed.</span>
          <h2>Take the next step in your AI journey with Datamarcos.</h2>
          <p>
            This certification is designed for professionals who want to become confident with modern AI systems, not just learn isolated prompts or surface-level tools.
          </p>

          <div className="hero-actions center-actions">
            <a className="button primary" href={whatsappConsultation} target="_blank" rel="noreferrer">
              Book your call <ArrowRight size={18} />
            </a>
            <a className="button secondary" href={brochurePath} download target="_blank" rel="noreferrer">
              Download brochure <ArrowDownToLine size={18} />
            </a>
          </div>

          <div className="agentic-footer-links">
            <a href={whatsappBrochure} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp brochure request
            </a>
            <Link href="/contact">Talk to a program advisor</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
