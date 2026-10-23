import Image from "next/image";
import type { Metadata } from "next";
import { ArrowDownToLine, ArrowRight, BriefcaseBusiness, Building2, Check, Cloud, Code2, GraduationCap, Handshake, HeartPulse, Landmark, Lightbulb, Radio, ShoppingCart, Truck, Zap } from "lucide-react";
import { FDECallRequestForm } from "@/components/program/FDECallRequestForm";

const brochureUrl = "/brochures/Datamarcos_FDE_Program_Landing_Page.pdf";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineer - 5-Month Executive Program | Datamarcos",
  description: "A 22-week, live online executive program with four client-style engagements, career support and a deployed AI engineering capstone.",
  alternates: { canonical: "/programs/forward-deployed-engineer" },
  openGraph: {
    title: "Forward Deployed AI Engineer - 5-Month Executive Program | Datamarcos",
    description: "Live online. Hands-on. Job-oriented. Learn the complete FDE delivery cycle in 22 weeks.",
    images: [{ url: "/images/forward-deployed-engineer/hero-illustration.png", width: 530, height: 460 }]
  }
};

const facts = [
  { label: "Estimated time", value: "5 months (22 weeks), live online" },
  { label: "Enrollment", value: "Rolling admissions. Ask for the next cohort date." },
  { label: "Prerequisite", value: "Python and 2+ years of engineering experience, or strong projects." }
];

const skills = [
  ["Python and API engineering", "Build and integrate production systems."],
  ["Cloud, networking and DevOps", "Containers, CI/CD and infrastructure as code."],
  ["Applied AI", "LLMs, RAG, agents, evaluation and cost control."],
  ["Security and compliance", "Think clearly about regulated enterprise environments."],
  ["Enterprise integration", "Connect legacy systems, data platforms and tools."],
  ["Customer craft", "Discovery, scoping, ROI and executive communication."]
];

const journey = [
  { icon: GraduationCap, title: "Apply and take the diagnostic", body: "Share your background and complete a readiness diagnostic." },
  { icon: Lightbulb, title: "Learn live from a practising architect", body: "Build strong mental models with live instruction and architecture reviews." },
  { icon: Code2, title: "Build in four client-style engagements", body: "Work through real constraints, stakeholders and business needs." },
  { icon: Cloud, title: "Secure and deploy on real cloud stacks", body: "Move from working prototype to a documented, production-minded system." },
  { icon: Check, title: "Defend your capstone at Demo Day", body: "Present your decisions, system and outcomes to a review panel." },
  { icon: BriefcaseBusiness, title: "Launch with career support", body: "Prepare your portfolio and practise FDE interview loops." }
];

const phases = [
  { name: "Foundation", weeks: "Weeks 1-4", description: "FDE role, discovery and scoping; APIs, cloud and CI/CD." },
  { name: "GenAI systems", weeks: "Weeks 5-9", description: "LLM engineering and evaluations; RAG, graphs and multimodal systems." },
  { name: "Agents & integration", weeks: "Weeks 10-14", description: "Agents, LangGraph and MCP; legacy systems and enterprise integration." },
  { name: "Production & security", weeks: "Weeks 15-19", description: "Databricks, Snowflake and cloud agent platforms; security, governance and LLMOps." },
  { name: "Capstone", weeks: "Weeks 20-22", description: "UAT, handoff, ROI, interview loops and a portfolio-ready capstone." }
];

const roles = [
  "AI Forward Deployed Engineer", "AI Solutions Engineer", "Agentic AI Engineer",
  "GenAI / LLM Application Developer", "Platform FDE (Databricks, Snowflake)", "AI Automation Engineer",
  "AI Solutions Architect", "AI Delivery Lead", "Technical Consultant, AI"
];

const industries = [
  { name: "Banking & finance", icon: Landmark }, { name: "Healthcare & life sciences", icon: HeartPulse },
  { name: "Retail & e-commerce", icon: ShoppingCart }, { name: "Telecom", icon: Radio },
  { name: "Manufacturing", icon: Building2 }, { name: "Logistics", icon: Truck },
  { name: "Energy & utilities", icon: Zap }, { name: "Public sector", icon: Landmark },
  { name: "SaaS & AI labs", icon: Cloud }, { name: "Consulting & GCCs", icon: BriefcaseBusiness }
];

const testimonials = [
  { initials: "KG", name: "Kumar Gaurav", role: "Senior Azure Data Engineer, PwC", quote: "His deep understanding of the subject, combined with a clear and engaging teaching style, made complex concepts easy to grasp, even for those new to the field." },
  { initials: "AR", name: "Ansh Ranjan", role: "Data Engineer Trainee, Hexaware", quote: "Learning under Deepesh Sir has been a great opportunity. He is truly a great mentor." },
  { initials: "GT", name: "Gourav Thadhani", role: "Data Science and AI, ZS Associates", quote: "Many thanks for the great Databricks training at ZS! Let&apos;s stay connected." }
];

const learningModes = [
  { label: "Learn", title: "Live architecture sessions", body: "Mentor-led sessions on the why, the trade-offs and platform internals. Bring questions, review architecture and learn alongside a peer cohort." },
  { label: "Build", title: "Hands-on delivery labs", body: "Weekly labs and code reviews using your own work and realistic data, with feedback on design, security and tests." },
  { label: "Deploy", title: "Client-style engagements", body: "Four engagements with stakeholders, constraints and panel reviews. Practise discovery through deployment and handoff." }
];

export default function ForwardDeployedEngineerLandingPage() {
  return (
    <article className="fde-brochure-page">
      <nav className="fde-brochure-nav" aria-label="Program sections">
        <div className="fde-brochure-container">
          <a className="fde-brochure-brand" href="#top" aria-label="Datamarcos program home">DM<span>DATAMARCOS</span></a>
          <div className="fde-brochure-navlinks">
            <a href="#about">About</a><a href="#program-skeleton">Program skeleton</a><a href="#career-support">Career support</a><a href="#alumni">Alumni</a>
          </div>
          <a className="fde-nav-cta" href="#apply" data-dm-lead>Request a call <ArrowRight size={15} /></a>
        </div>
      </nav>

      <section className="fde-brochure-hero" id="top">
        <div className="fde-brochure-container fde-brochure-hero-grid">
          <div className="fde-brochure-hero-copy">
            <p className="fde-orange-eyebrow">5-month executive program · Live online</p>
            <h1>Become a Forward Deployed <span>AI Engineer</span></h1>
            <p className="fde-hero-promise">A 5-month executive program from industry experts</p>
            <p className="fde-hero-meta">Live online <span /> Hands-on <span /> Job-oriented</p>
            <div className="fde-cohort-proof"><strong>Learners and corporate cohorts from</strong><div>{["PwC", "Hexaware", "Microsoft", "ZS Associates", "Sigmoid", "Novartis"].map((name) => <span key={name}>{name}</span>)}</div></div>
          </div>
          <div className="fde-hero-form-wrap" id="apply">
            <div className="fde-hero-form-banner">Rolling admissions · Request program details</div>
            <div className="fde-hero-form-body">
              <p className="fde-hero-form-label">Forward Deployed AI Engineer</p>
              <h2>Talk to admissions</h2>
              <p className="fde-hero-form-intro">Get the next cohort date, fees and scholarship details.</p>
              <FDECallRequestForm />
            </div>
          </div>
        </div>
        <div className="fde-brochure-container fde-facts-row">{facts.map((fact) => <div className="fde-fact" key={fact.label}><strong>{fact.label}</strong><span>{fact.value}</span></div>)}</div>
      </section>

      <section className="fde-brochure-section" id="about">
        <div className="fde-brochure-container">
          <div className="fde-section-title"><p className="fde-orange-eyebrow">The role</p><h2>AI pilots are everywhere. Production deployments are rare.</h2></div>
          <div className="fde-intro-copy"><p>Companies need engineers who can sit with the customer, scope an ambiguous problem, build the system, deploy it into a secured enterprise environment and own the result. That engineer is the Forward Deployed Engineer (FDE).</p><p>DataMarcos built this program around the real job: discovery, build, secure, deploy and hand over. It is taught live by a practising architect with 18+ years of experience who has trained 25,000+ professionals.</p></div>
          <div className="fde-skills-layout"><div><p className="fde-orange-eyebrow">What the role demands</p><h3>Skills required to become a Forward Deployed Engineer</h3><Image src="/images/forward-deployed-engineer/hero-illustration.png" alt="Engineer discussing a production system with colleagues" width={530} height={460} /></div><ul>{skills.map(([skill, detail]) => <li key={skill}><Check size={18} /><span><strong>{skill}</strong> {detail}</span></li>)}</ul></div>
        </div>
      </section>

      <section className="fde-brochure-section fde-tint-section">
        <div className="fde-brochure-container">
          <div className="fde-section-title"><p className="fde-orange-eyebrow">The learner journey</p><h2>Your journey in six steps</h2><p>From application to a deployed portfolio and a job-ready profile.</p></div>
          <div className="fde-journey-grid">{journey.map((step, index) => <article className="fde-journey-step" key={step.title}><span className="fde-journey-icon"><step.icon size={24} /></span><span className="fde-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
          <div className="fde-workshop-block"><div className="fde-workshop-copy"><p className="fde-orange-eyebrow">Learn with a live cohort</p><h2>Glimpse of our workshops</h2><p>Live online sessions bring the cohort together for teaching, working sessions and discussion. Weekday labs put the ideas to work.</p><a className="fde-text-cta" href="#apply" data-dm-lead>Ask about the next cohort <ArrowRight size={16} /></a></div><figure><Image src="/images/forward-deployed-engineer/workshop-cohort.png" alt="DataMarcos learners gathered for a live technology workshop" width={740} height={300} /><figcaption>Live cohort with remote participants joining on screen</figcaption></figure></div>
        </div>
      </section>

      <section className="fde-brochure-section" id="program-skeleton">
        <div className="fde-brochure-container">
          <div className="fde-section-title"><p className="fde-orange-eyebrow">Curriculum overview</p><h2>Program skeleton</h2><p>Delivered over 22 weeks in five phases: foundation, GenAI systems, agents and integration, production and security, capstone.</p></div>
          <div className="fde-phase-cards">{phases.map((phase, index) => <article className="fde-phase-card" key={phase.name}><span>0{index + 1} <i>{phase.weeks}</i></span><h3>{phase.name}</h3><p>{phase.description}</p></article>)}</div>
          <div className="fde-program-toolbelt"><span>FDE role & discovery</span><span>APIs & cloud</span><span>LLM & evaluation</span><span>RAG & graphs</span><span>Agents & MCP</span><span>Security & governance</span><span>LLMOps</span><span>UAT & handoff</span><span>Portfolio & interviews</span></div>
        </div>
      </section>

      <section className="fde-brochure-section fde-tint-section">
        <div className="fde-brochure-container">
          <div className="fde-section-title"><p className="fde-orange-eyebrow">Career direction</p><h2>Roles you become ready for</h2><p>Role readiness, not a placement guarantee. Hiring outcomes depend on your effort and the market.</p></div>
          <div className="fde-role-grid">{roles.map((role) => <div className="fde-role-chip" key={role}><span><Code2 size={19} /></span><strong>{role}</strong></div>)}</div>
          <div className="fde-industries-title"><h2>Industries that need Forward Deployed Engineers</h2><p>FDEs work wherever AI has to run inside real, regulated, messy environments.</p></div>
          <div className="fde-industry-grid">{industries.map((industry) => <div className="fde-industry-chip" key={industry.name}><span><industry.icon size={22} /></span><strong>{industry.name}</strong></div>)}</div>
          <div className="fde-career-statement"><h2>Future-proof your career</h2><p>FDEs sit where engineering, AI and the customer meet. Tools and models will keep changing. The ability to scope a problem, build the system, secure it and own the outcome keeps its value. Every phase is built around real engagements rather than slides.</p></div>
        </div>
      </section>

      <section className="fde-brochure-section">
        <div className="fde-brochure-container">
          <div className="fde-section-title"><p className="fde-orange-eyebrow">Learning methodology</p><h2>Learn it, build it, deploy it</h2></div>
          <div className="fde-learning-grid">{learningModes.map((mode, index) => <article className="fde-learning-card" key={mode.label}><div className={`fde-learning-art fde-learning-art-${index + 1}`}><span>{mode.label}</span><div className="fde-art-screen"><i /><i /><i /><i /><i /></div></div><p className="fde-orange-eyebrow">{mode.label}</p><h3>{mode.title}</h3><p>{mode.body}</p></article>)}</div>
          <div className="fde-why-strip"><p className="fde-orange-eyebrow">Why DataMarcos</p><div><article><strong>Expert instruction</strong><span>Learn from a practising architect with 18+ years of experience and 25,000+ professionals trained.</span></article><article><strong>Real engagements</strong><span>Four client-style engagements reviewed by a panel, with a toolkit you keep.</span></article><article><strong>Flexible, serious schedule</strong><span>Weekend sessions with weekday labs, designed for working professionals.</span></article></div></div>
        </div>
      </section>

      <section className="fde-brochure-section fde-tint-section" id="career-support">
        <div className="fde-brochure-container fde-career-support-grid"><div><p className="fde-orange-eyebrow">Career support</p><h2>Be ready to tell the story of what you built.</h2><p>Career support is focused on clear evidence of delivery and your ability to explain design decisions.</p></div><div><p><BriefcaseBusiness size={21} /><strong>FDE interview loops and mock rounds</strong></p><p><Code2 size={21} /><strong>Resume, LinkedIn and portfolio reviews</strong></p><p><Handshake size={21} /><strong>Referral and outreach playbook</strong></p><small>We do not promise placements, salaries or hikes. We promise deployed, secured, documented systems and the ability to explain every design decision.</small></div></div>
      </section>

      <section className="fde-brochure-section" id="alumni">
        <div className="fde-brochure-container"><div className="fde-section-title"><p className="fde-orange-eyebrow">Learner feedback</p><h2>What our alumni say</h2><p>Feedback shared by learners across DataMarcos data, GenAI and AI programs.</p></div><div className="fde-testimonial-grid">{testimonials.map((item) => <blockquote key={item.initials}><span>{item.initials}</span><strong>{item.name}</strong><small>{item.role}</small><p>{item.quote.replace("&apos;", "'")}</p></blockquote>)}</div></div>
      </section>

      <section className="fde-certificate-section"><div className="fde-brochure-container fde-certificate-layout"><div className="fde-certificate-art" aria-hidden="true"><GraduationCap size={64} /><span>FDE</span></div><div><p className="fde-orange-eyebrow">Earn your certificate</p><h2>DataMarcos Executive Certificate in Forward Deployed AI Engineering</h2><p>Awarded on completing the program and defending your capstone. It validates hands-on proficiency in AI engineering, enterprise integration, security and delivery, backed by a portfolio of deployed engagements.</p><a className="fde-orange-button" href="#apply" data-dm-lead>Request a call <ArrowRight size={18} /></a></div></div></section>

      <section className="fde-apply-section"><div className="fde-brochure-container fde-final-enquiry"><div><p className="fde-orange-eyebrow">Rolling admissions</p><h2>Your future starts now.</h2><p>Our admissions team can help with cohort dates, fees, scholarships and program fit.</p></div><div className="fde-final-enquiry-actions"><a className="fde-orange-button" href="#apply" data-dm-lead>Request a call <ArrowRight size={18} /></a><a className="fde-download-link" href={brochureUrl} download><ArrowDownToLine size={16} /> Download the five-page program guide</a></div></div></section>

      <section className="fde-full-brochure"><div className="fde-brochure-container"><div><p className="fde-orange-eyebrow">The complete program guide</p><h2>Explore the brochure</h2></div><a className="fde-orange-button" href={brochureUrl} target="_blank" rel="noreferrer"><ArrowDownToLine size={17} /> Open PDF</a></div><div className="fde-brochure-container"><iframe src={brochureUrl} title="DataMarcos Forward Deployed AI Engineer program brochure" loading="lazy" /></div></section>
    </article>
  );
}