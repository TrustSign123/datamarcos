"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, GitBranch, Network, ShieldCheck } from "lucide-react";
import { CalendlyBooking, PaymentButton } from "@/components/Integrations";
import { ProgramApplicationForm } from "@/components/Forms";
import { VideoCarousel } from "@/components/Video";
import { programDetails } from "@/config/program-details";
import { Program } from "@/config/programs";
import { testimonials } from "@/config/testimonials";
import { LeadMagnetCTA, ProgramPageTracker, SkillAssessment, StickyProgramCTA } from "@/components/program/ProgramInteractions";
import { trackEvent } from "@/lib/analytics";

function statusCta(status: Program["status"]) {
  if (status === "LIVE") return "Enroll Now";
  if (status === "COMING_SOON") return "Get Notified";
  if (status === "CORPORATE_CUSTOM") return "Request Corporate Training";
  if (status === "WAITLIST") return "Join Waitlist";
  return "Apply / Join Interest List";
}

function TechnicalArchitecture({ nodes }: { nodes: string[] }) {
  return (
    <div className="architecture-panel" aria-label="Program architecture from data to production AI">
      <div className="architecture-lane primary"><span>User</span><span>AI Supervisor</span></div>
      <div className="architecture-grid">{["SQL Agent", "RAG Agent", "Analytics Agent"].map((node) => <span key={node}>{node}</span>)}</div>
      <div className="architecture-grid muted">{["Databases", "Vector DB", "ML Models"].map((node) => <span key={node}>{node}</span>)}</div>
      <div className="architecture-lane"><span>Tools</span><span>MCP</span><span>External Systems / APIs</span><span>Evaluation</span><span>Human Approval</span><span>Production</span></div>
      <div className="architecture-mobile">{nodes.map((node) => <span key={node}>{node}</span>)}</div>
    </div>
  );
}

export function ProgramPageTemplate({ program, landingPage = false }: { program: Program; landingPage?: boolean }) {
  const detail = programDetails[program.slug];
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.seo?.description || program.description,
    provider: { "@type": "EducationalOrganization", name: "Datamarcos" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Programs", item: "/programs" },
      { "@type": "ListItem", position: 2, name: program.title, item: `/programs/${program.slug}` }
    ]
  };
  const faqSchema = detail ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  } : undefined;
  const statusLine = detail?.statusLine[program.status] || program.status.replaceAll("_", " ");
  const primaryCta = program.status === "LIVE" ? statusCta(program.status) : "Book a Free 1:1 Program Call";

  if (!detail) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
        <section className="hero-simple">
          <div className="container">
            <span className="badge">{program.status.replaceAll("_", " ")}</span>
            <h1 className="section-title">{program.title}</h1>
            <p className="section-copy">{program.description}</p>
            <div className="hero-actions"><a className="button primary" href="#application">{statusCta(program.status)}</a><Link className="button secondary" href="/programs">All Programs</Link></div>
          </div>
        </section>
        <section className="section">
          <div className="container grid two">
            <div><p className="eyebrow">Overview</p><h2 className="section-title">Built for serious technology capability.</h2><p className="section-copy">This shared program template supports overview, audience, prerequisites, outcomes, curriculum, projects, instructors, schedule, pricing, FAQ, application and booking flows without creating a one-off design.</p></div>
            <div className="card"><p><strong>Level:</strong> {program.level}</p><p><strong>Duration:</strong> {program.duration}</p><p><strong>Format:</strong> {program.format}</p><p><strong>Audience:</strong> {program.audience.join(", ")}</p><p><strong>Pricing:</strong> {program.pricing}</p></div>
          </div>
        </section>
        <section className="section alt"><div className="container grid two"><div className="card"><h2>Curriculum</h2>{program.curriculum.map((module) => <div key={module.title}><h3>{module.title}</h3><ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>)}</div><div className="card"><h2>Projects & Technology Stack</h2><ul>{program.projects.map((project) => <li key={project}>{project}</li>)}</ul><div className="tech-list">{program.technologies.map((tech) => <span className="tech-chip" key={tech}>{tech}</span>)}</div></div></div></section>
        <section className="section" id="application"><div className="container grid two"><ProgramApplicationForm programId={program.id} programSlug={program.slug} /><div className="grid"><CalendlyBooking url={program.calendlyUrl} /><PaymentButton url={program.razorpayUrl} /></div></div></section>
      </>
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ProgramPageTracker programId={program.id} programSlug={program.slug} landingPage={landingPage} />
      <StickyProgramCTA programId={program.id} programSlug={program.slug} />

      <section className="program-hero">
        <div className="container program-hero-inner">
          <div>
            <div className="pill-row"><span className="badge live">{detail.badge}</span><span className="badge status-custom">{statusLine}</span></div>
            <h1>{detail.positioning}</h1>
            <p className="program-support">{detail.supportingLine}</p>
            <p>{detail.body}</p>
            <div className="hero-actions">
              <a className="button primary" href="#booking">{primaryCta} <ArrowRight size={18} /></a>
              <a className="button secondary" href="#curriculum">Explore the Curriculum</a>
              <LeadMagnetCTA programId={program.id} programSlug={program.slug} brochureUrl={program.brochureUrl || detail.brochureUrl} />
            </div>
            <div className="trust-line">{detail.trustLine.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="program-visual">
            {["Enterprise Data", "Data Engineering", "AI-Ready Data", "RAG / Retrieval", "LLM Engineering", "Tools / MCP", "Agents", "Multi-Agent Workflows", "Evaluation", "Observability", "Production AI"].map((node, index) => (
              <div className="visual-node" key={node} style={{ animationDelay: `${index * 90}ms` }}><Database size={16} /><span>{node}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-bar"><div className="container"><strong>Built for professionals working with modern technology systems.</strong><div className="pill-row">{detail.audienceTags.map((tag) => <span className="badge" key={tag}>{tag}</span>)}</div></div></section>
      <section className="section"><div className="container grid four">{detail.stats.map((stat) => <div className="card stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">The problem</p><h2 className="section-title">Modern AI Is Not Just an LLM Problem.</h2><p className="section-copy">Production AI depends on the quality of the data, retrieval architecture, tools, workflows, evaluation, security and infrastructure around the model.</p>
          <div className="grid three">{detail.problemCards.map((card) => <article className="card" key={card.title}><span className="eyebrow">{card.label}</span><h3>{card.title}</h3><p>{card.copy}</p></article>)}</div>
          <p className="section-copy transition-copy">That is why this program starts with data and ends with production agents.</p>
        </div>
      </section>

      <section className="section"><div className="container"><p className="eyebrow">Transformation</p><h2 className="section-title">Move From Building Pipelines to Building Intelligent Systems.</h2><div className="grid two"><div className="card"><h3>Traditional Data / Software Professional</h3><div className="tech-list">{detail.before.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div><div className="card after-card"><h3>AI Data / Agentic AI Engineer</h3><div className="tech-list">{detail.after.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div></div></div></section>

      <section className="section alt"><div className="container"><p className="eyebrow">Complete stack</p><h2 className="section-title">One Program. The Complete AI Engineering Stack.</h2><div className="stack-layers">{detail.stackLayers.map((layer, index) => <div className="stack-layer" key={layer}><span>Layer {String(index + 1).padStart(2, "0")}</span><strong>{layer}</strong></div>)}</div></div></section>
      <section className="section"><div className="container"><p className="eyebrow">Architecture</p><h2 className="section-title">From Enterprise Data to Autonomous Workflows.</h2><TechnicalArchitecture nodes={detail.architectureNodes} /></div></section>

      <section className="section alt" id="curriculum">
        <div className="container">
          <p className="eyebrow">Curriculum</p><h2 className="section-title">A {program.duration} Engineering Journey</h2><div className="roadmap">{detail.roadmap.map((step) => <span key={step}>{step}</span>)}</div>
          <div className="curriculum-list">{detail.curriculumModules.map((module) => <details className="card curriculum-module" key={module.module} onToggle={() => trackEvent("curriculum_expand", { programId: program.id, programSlug: program.slug, module: module.module })}><summary><span>{module.module}</span><strong>{module.title}</strong></summary><p>{module.description}</p><div className="tech-list">{module.topics.map((topic) => <span className="tech-chip" key={topic}>{topic}</span>)}</div><p><strong>Hands-on:</strong> {module.handsOn}</p>{module.project && <p><strong>Project:</strong> {module.project}</p>}<p><strong>Estimated duration:</strong> {module.duration}</p></details>)}</div>
        </div>
      </section>

      <section className="section" id="projects"><div className="container"><p className="eyebrow">Project portfolio</p><h2 className="section-title">Build 6 Systems. Graduate With a Portfolio.</h2><div className="grid three">{detail.projectPortfolio.map((project) => <article className="card" key={project.title} onMouseEnter={() => trackEvent("project_view", { programId: program.id, programSlug: program.slug, project: project.title })}><GitBranch /><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map((tech) => <span className="tech-chip" key={tech}>{tech}</span>)}</div>{project.githubUrl && <a className="button secondary" href={project.githubUrl}>GitHub</a>}{project.demoUrl && <a className="button secondary" href={project.demoUrl}>Live Demo</a>}</article>)}</div></div></section>

      <section className="section alt"><div className="container grid two"><div><p className="eyebrow">Technology stack</p><h2 className="section-title">Architecture first. Framework second.</h2><p className="section-copy">Models change. Frameworks change. Engineering principles remain. The program teaches state, tools, orchestration, memory, evaluation, security, observability and deployment beyond one framework syntax.</p></div><div className="grid">{detail.technologyStack.map((group) => <div className="card" key={group.group}><h3>{group.group}</h3><div className="tech-list">{group.items.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div>)}</div></div></section>
      <section className="section"><div className="container grid three"><div className="card"><h2>From Prototype to Production</h2><p>Anyone can build an AI demo. Production AI requires workflow design, reliability, evaluation, security, observability, cost control and deployment.</p></div><div className="card"><h2>AI Systems Must Be Economically Viable.</h2><p>Learn token economics, model selection, caching, batching, routing, fallbacks, context management, latency and cost per workflow.</p></div><div className="card"><h2>Autonomy With Control.</h2><p>Students learn when agents should act autonomously and when humans must remain in control through approval and audit logs.</p></div></div></section>

      <section className="section alt"><div className="container grid two"><SkillAssessment programId={program.id} programSlug={program.slug} /><div className="card"><h3>Prerequisites</h3><p><strong>Required:</strong></p><div className="tech-list">{detail.prerequisites.required.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div><p><strong>Recommended:</strong></p><div className="tech-list">{detail.prerequisites.recommended.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div><p><strong>Taught inside:</strong></p><div className="tech-list">{detail.prerequisites.taught.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div></div></section>

      <section className="section"><div className="container"><p className="eyebrow">Learning experience</p><h2 className="section-title">Built around live engineering practice.</h2><div className="grid four">{detail.learningExperience.map((item) => <div className="card" key={item.title}><CheckCircle2 /><h3>{item.title}</h3><p>{item.copy}</p></div>)}</div><div className="grid two schedule-grid"><div className="card"><h3>Weekly Schedule</h3>{detail.weeklySchedule.map((item) => <p key={item.day}><strong>{item.day}:</strong> {item.activity} - {item.time}</p>)}</div><div className="card"><h3>Cohort Information</h3>{detail.cohortInfo.filter((item) => item.value).map((item) => <p key={item.label}><strong>{item.label}:</strong> {item.value}</p>)}</div></div></div></section>
      <section className="section alt"><div className="container"><p className="eyebrow">Outcomes</p><h2 className="section-title">By the End of the Program, You Should Be Able to...</h2><div className="grid three">{detail.outcomes.map((outcome) => <div className="card" key={outcome}><CheckCircle2 /><strong>{outcome}</strong></div>)}</div></div></section>

      <section className="section"><div className="container grid two"><div><p className="eyebrow">Capstone</p><h2 className="section-title">Your Final Project Should Look Like an Engineering System.</h2><p className="section-copy">Enterprise Agentic Data Intelligence Platform with architecture, agent graph, data layer, RAG layer, MCP layer, evaluation, security, observability and deployment.</p><div className="tech-list">{["GitHub", "Architecture diagram", "README", "API", "Evaluation report", "Security checklist", "Demo"].map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div><div onMouseEnter={() => trackEvent("capstone_view", { programId: program.id, programSlug: program.slug })}><TechnicalArchitecture nodes={["User", "AI Supervisor", "SQL Agent", "RAG Agent", "Forecast Agent", "Data Warehouse", "Vector DB", "ML Models", "MCP", "API", "Files", "Database", "Evaluation", "Human Approval", "Production API"]} /></div></div></section>
      <section className="section alt"><div className="container grid two"><div><p className="eyebrow">Career capability</p><h2 className="section-title">Relevant to modern AI engineering roles.</h2><p className="section-copy">Career outcomes depend on your prior experience, portfolio and individual circumstances. There is no guaranteed job placement.</p><div className="tech-list">{detail.careerDirections.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div><div><p className="eyebrow">Principles</p><h2 className="section-title">Learn the Principles, Not Just the Tools.</h2>{detail.principles.map((item) => <p key={item}><ShieldCheck size={16} /> {item}</p>)}</div></div></section>

      <section className="section"><div className="container grid two"><div><p className="eyebrow">Corporate academy</p><h2 className="section-title">Train Your AI & Data Engineering Team.</h2><p className="section-copy">Datamarcos can customize this program for engineering, data and AI teams around your organization&apos;s technology stack, cloud environment and business priorities.</p><div className="tech-list">{detail.corporateCustomization.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div><div className="hero-actions"><Link className="button primary" href="/corporate-training">Request Corporate Training</Link><Link className="button secondary" href="/contact">Book a Corporate Discovery Call</Link></div></div><div className="card"><h3>Delivery Options</h3>{detail.deliveryOptions.map((item) => <p key={item}><strong>{item}</strong></p>)}</div></div></section>

      <section className="section alt" id="booking"><div className="container grid two"><div><p className="eyebrow">Book a consultation</p><h2 className="section-title">Book a Free 1:1 Program Call</h2><p className="section-copy">Understand your background, goals, program fit, curriculum, cohort and enrollment path. No payment is required for the consultation.</p><CalendlyBooking url={program.calendlyUrl} /></div><div id="application"><h2>Apply for the Program</h2><ProgramApplicationForm programId={program.id} programSlug={program.slug} />{program.status === "LIVE" && program.razorpayUrl ? <PaymentButton url={program.razorpayUrl} /> : <p className="muted-note">Enrollment checkout will be enabled soon.</p>}<p className="muted-note">{program.pricing}</p></div></div></section>
      <section className="section"><div className="container"><p className="eyebrow">Testimonials</p><h2 className="section-title">Professionals Who Have Experienced Datamarcos</h2><VideoCarousel testimonials={testimonials} /></div></section>
      <section className="section alt" id="faq"><div className="container"><p className="eyebrow">FAQ</p><h2 className="section-title">Questions before you apply.</h2><div className="grid two">{detail.faq.map((item) => <details className="card" key={item.question}><summary><strong>{item.question}</strong></summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="section final-program-cta"><div className="container"><Network size={44} /><h2>Ready to Build Production AI Systems?</h2><p>Talk with Datamarcos about your background, goals and whether this advanced program is the right fit for you.</p><div className="roadmap compact">{["Data", "AI", "Agents", "Production"].map((step) => <span key={step}>{step}</span>)}</div><p>Do not just learn AI. Learn how to engineer the systems behind it.</p><div className="hero-actions"><a className="button primary" href="#booking">Book a Free 1:1 Call</a><a className="button secondary" href="#curriculum">Explore the Curriculum</a><Link className="button secondary" href="/corporate-training">Train Your Team</Link></div></div></section>
    </>
  );
}
