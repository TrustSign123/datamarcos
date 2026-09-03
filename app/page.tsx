import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, CircuitBoard, Globe2, GraduationCap, Network, ShieldCheck, Users } from "lucide-react";
import { CorporateCTA } from "@/components/CTA";
import { LeadCaptureForm } from "@/components/Forms";
import { VideoCarousel } from "@/components/Video";
import { caseStudies } from "@/config/case-studies";
import { industries } from "@/config/industries";
import { featuredPrograms } from "@/config/programs";
import { resources } from "@/config/resources";
import { site } from "@/config/site";
import { technologies, technologyCategories } from "@/config/technologies";
import { testimonials } from "@/config/testimonials";

const process = [
  ["Discover", "Understand business goals and capability gaps."],
  ["Map", "Identify roles, skills and technology requirements."],
  ["Design", "Build a customized learning journey."],
  ["Match", "Deploy the right trainer or subject matter expert."],
  ["Deliver", "Live, remote, onsite or hybrid training."],
  ["Measure", "Assess learning, projects and capability outcomes."]
];

const solutions = [
  "Technology Upskilling", "Reskilling Programs", "Role-Based Academies", "Custom Bootcamps", "Executive Technology Workshops", "Project-Based Learning", "Trainer-on-Demand", "Assessment & Skill Gap Analysis", "AI Transformation Learning", "Cloud & Data Transformation"
];

const why = [
  ["Right Trainer", "Access specialized technology experts."],
  ["Right Program", "Learning mapped to business roles."],
  ["Right Delivery", "Remote, onsite or hybrid."],
  ["Right Time", "Fast-moving technology capability requirements."],
  ["Real Projects", "Hands-on, business-relevant learning."],
  ["Measurable Learning", "Assessments and project outcomes."]
];

function StatusBadge({ status }: { status: string }) {
  return <span className={`badge ${status === "LIVE" ? "live" : status === "UPCOMING" ? "upcoming" : "status-custom"}`}>{status.replaceAll("_", " ")}</span>;
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Global Technology Learning & Workforce Upskilling Partner</p>
            <h1>Build the Technology Capabilities Your Business Needs.</h1>
            <p>Datamarcos helps organizations identify skill gaps, design role-based learning programs and deliver high-impact training across Data, AI, Cloud, Software Engineering, DevOps and emerging technologies.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/corporate-training#inquiry">Request Corporate Training <ArrowRight size={18} /></Link>
              <Link className="button secondary" href="/programs">Explore Programs</Link>
              <Link className="button secondary" href="/lms"><GraduationCap size={18} /> Learning Hub</Link>
            </div>
            <div className="trust-line"><span>Enterprise Learning</span><span>Professional Upskilling</span><span>Expert-Led Training</span></div>
          </div>
          <div className="ecosystem" aria-label="Connected capability ecosystem visual">
            <div className="node-list">
              {["Business", "Skill Gap", "Learning Path", "Expert Trainer", "Hands-On Labs", "Assessment", "Workforce Capability"].map((node, index) => (
                <div className="node" key={node}>
                  <span className="node-dot" style={{ animationDelay: `${index * 120}ms` }} />
                  <div><strong>{node}</strong><small>Capability system layer {index + 1}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="capability-bar">
        <div className="container">
          <strong>Technology capabilities across the modern enterprise</strong>
          <div className="pill-row">{["AI & GenAI", "Data Engineering", "Cloud", "DevOps", "Cybersecurity", "Software Engineering", "Platform Engineering", "Machine Learning", "Analytics"].map((item) => <span className="badge" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Two learning paths</p>
          <h2 className="section-title">One Technology Partner. Two Learning Paths.</h2>
          <div className="grid two">
            <div className="card"><BriefcaseBusiness /><h3>For Organizations</h3><h2>Transform your workforce.</h2><p>Customized technology learning programs designed around your business, roles, technology stack and transformation priorities.</p><Link className="button primary" href="/corporate-training">Explore Corporate Learning</Link><div className="tech-list">{["Corporate Training", "Customized Bootcamps", "Technology Upskilling", "Reskilling", "Role-Based Academies", "Workshops", "Assessments", "Trainer-on-Demand"].map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div>
            <div className="card"><GraduationCap /><h3>For Professionals</h3><h2>Transform your career.</h2><p>Build modern technology skills through expert-led cohorts, practical projects and structured learning paths.</p><Link className="button primary" href="/programs">Explore Programs</Link><div className="tech-list">{["Live Cohorts", "Self-Paced Learning", "Workshops", "Mentorship", "Projects", "Career Guidance", "Technical Communities"].map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">What Datamarcos does</p>
          <h2 className="section-title">Identify. Design. Deliver. Measure. Transform.</h2>
          <p className="section-copy">From capability assessment to expert-led delivery, Datamarcos combines technology expertise, learning design and practical execution.</p>
          <div className="grid three process">{process.map(([title, copy]) => <div className="card" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <p className="eyebrow">Corporate solutions</p>
          <h2 className="section-title">Training Built Around Your Business.</h2>
          <div className="grid four">{solutions.map((item) => <div className="card" key={item}><CircuitBoard /><h3>{item}</h3><p>Role-specific technical learning designed for your teams, delivery model and transformation priorities.</p><Link className="button ghost" href="/corporate-training">Learn more</Link></div>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Technology landscape</p>
          <h2 className="section-title">Configurable capability catalog.</h2>
          <div className="grid two">
            {technologyCategories.map((category) => (
              <div className="card" key={category}>
                <h3>{category}</h3>
                <div className="tech-list">{technologies.filter((tech) => tech.category === category).slice(0, 16).map((tech) => <span className="tech-chip" key={tech.id}>{tech.name}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Programs</p>
          <h2 className="section-title">Explore Our Programs</h2>
          <div className="grid four">{featuredPrograms.map((program) => <article className="card" key={program.id}><StatusBadge status={program.status} /><p className="eyebrow">{program.category}</p><h3>{program.title}</h3><p>{program.description}</p><p><strong>{program.level}</strong> · {program.duration} · {program.format}</p><div className="tech-list">{program.technologies.slice(0, 4).map((tech) => <span className="tech-chip" key={tech}>{tech}</span>)}</div><Link className="button secondary" href={`/programs/${program.slug}`}>View Program</Link></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div><p className="eyebrow">Projects and outcomes</p><h2 className="section-title">Learning designed around applied work.</h2><p className="section-copy">Programs can include labs, capstone projects, assessments and measurable outcomes tied to the business or professional capability being built.</p></div>
          <div className="grid">{["Hands-on labs", "Business-relevant projects", "Assessments", "Capability reports"].map((item) => <div className="card" key={item}><CheckCircle2 /> <strong>{item}</strong></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Industries</p>
          <h2 className="section-title">Technology Learning Across Industries</h2>
          <div className="grid three">{industries.map((industry) => <div className="card" key={industry}><Globe2 /><h3>{industry}</h3></div>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Why Datamarcos</p>
          <h2 className="section-title">Why Organizations Choose Datamarcos</h2>
          <div className="grid three">{why.map(([title, copy]) => <div className="card" key={title}><ShieldCheck /><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Case studies</p>
          <h2 className="section-title">Learning That Solves Business Problems.</h2>
          <div className="grid three">{caseStudies.map((study) => <article className="card" key={study.id}><h3>{study.clientName}</h3><p><strong>Industry:</strong> {study.industry}</p><p><strong>Challenge:</strong> {study.challenge}</p><p><strong>Solution:</strong> {study.solution}</p><p><strong>Technology:</strong> {study.technology}</p><p><strong>Outcome:</strong> {study.outcome}</p><Link className="button secondary" href={study.href}>View Case Study</Link></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Video testimonials</p>
          <h2 className="section-title">Real stories, ready for verified uploads.</h2>
          <VideoCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div><p className="eyebrow">Trainer network</p><h2 className="section-title">Experts Who Know the Work.</h2><p className="section-copy">Datamarcos works with experienced technology professionals and subject matter experts to match the right trainer to the right learning requirement.</p><Link className="button primary" href="/become-a-trainer">Become a Datamarcos Expert</Link></div>
          <div className="card"><Users /><h3>Right Capability. Right Trainer. Right Time. Right Delivery.</h3></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div className="founder-portrait" aria-label={site.founder.imageAlt}>
            <Image src={site.founder.image} alt={site.founder.imageAlt} width={700} height={875} priority={false} />
          </div>
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">{site.founder.name}</h2>
            <p className="section-copy">{site.founder.title}</p>
            <p className="section-copy">{site.founder.bio}</p>
            <div className="tech-list">{site.founder.capabilities.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
            <div className="grid four founder-stats">{site.stats.map((stat) => <div className="card" key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div>
          </div>
        </div>
        <div className="container founder-proof-grid">
          <div>
            <p className="eyebrow">Worked with</p>
            <div className="tech-list">{site.founder.workedWith.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
          </div>
          <div>
            <p className="eyebrow">What he teaches</p>
            <div className="tech-list">{site.founder.teaches.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
          </div>
          <div>
            <p className="eyebrow">Teaching philosophy</p>
            <div className="tech-list">{site.founder.philosophy.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div><p className="eyebrow">Resources</p><h2 className="section-title">Technology learning content for serious teams.</h2><p className="section-copy">Articles, guides, webinars, events, reports, case studies, roadmaps and free resources for capability planning.</p></div>
          <LeadCaptureForm />
        </div>
        <div className="container grid three" style={{ marginTop: 24 }}>{resources.slice(0, 3).map((resource) => <div className="card" key={resource.id}><BookOpen /><h3>{resource.title}</h3><p>{resource.category}</p></div>)}</div>
      </section>

      <CorporateCTA compact />

      <section className="section">
        <div className="container grid two">
          <div><p className="eyebrow">Professional learning</p><h2 className="section-title">Build the skills the technology industry demands.</h2><p className="section-copy">Explore serious programs for AI, Data, Cloud, DevOps, Software Engineering and emerging technology roles.</p></div>
          <Link className="button primary" href="/programs">Explore Programs</Link>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Common questions</h2>
          <div className="grid two">{["Do you offer onsite training?", "Can programs be customized?", "Are public cohorts available?", "Can we add real testimonials later?"].map((q) => <details className="card" key={q}><summary><strong>{q}</strong></summary><p>Yes. Datamarcos is designed for configurable corporate, professional and content workflows without hardcoded claims.</p></details>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ textAlign: "center" }}>
          <Network size={42} />
          <h2 className="section-title">Let&apos;s Build Your Next Technology Capability.</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}><Link className="button primary" href="/corporate-training#inquiry">Request Corporate Training</Link><Link className="button secondary" href="/programs">Explore Programs</Link><Link className="button secondary" href="/contact">Talk to Datamarcos</Link></div>
        </div>
      </section>
    </>
  );
}
