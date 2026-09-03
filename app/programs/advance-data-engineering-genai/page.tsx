import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowDownToLine, ArrowRight, Bot, Braces, CheckCircle2, Database, Menu, MessageCircle, Network, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import { LandingCtaLink } from "@/components/program/LandingCtaLink";

const whatsappNumber = "918442032741";
const brochureUrl = "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf";

const messages = {
  brochure: "Hi Datamarcos! I'd like to get the brochure for the Advance Data Engineering with Applied GenAI & Agentic AI program. Please share the details.",
  consultation: "Hi Datamarcos! I'd like to book a free 1:1 consultation for the Advance Data Engineering with Applied GenAI & Agentic AI program.",
  general: "Hi Datamarcos! I want to know more about the Advance Data Engineering with Applied GenAI & Agentic AI course."
};

function whatsappLink(variant: keyof typeof messages) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[variant])}`;
}

export const metadata: Metadata = {
  title: "Advance Data Engineering with Applied GenAI & Agentic AI | Datamarcos",
  description: "Build AI-ready data platforms, production RAG systems, LangChain and LangGraph workflows, CrewAI and MCP agents with Datamarcos.",
  alternates: { canonical: "/programs/advance-data-engineering-genai" },
  openGraph: {
    title: "Advance Data Engineering with Applied GenAI & Agentic AI",
    description: "Build the Data Foundation. Engineer the Intelligence. Deploy the Agents.",
    url: `${site.url}/programs/advance-data-engineering-genai`,
    siteName: site.name,
    images: [{ url: "/images/programs/advance-data-engineering-genai-og.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advance Data Engineering with Applied GenAI & Agentic AI",
    description: "Build AI-ready data platforms, production RAG systems and agentic AI applications.",
    images: ["/images/programs/advance-data-engineering-genai-og.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

const stats = ["25,000+ Professionals Trained", "200+ Corporate Clients", "18+ Years Mentor Experience", "10+ Countries"];
const curriculum = ["Azure Data Lake", "PySpark & Spark Streaming", "Azure Data Factory", "AWS & Databricks", "LangChain & LangGraph", "RAG Pipelines", "CrewAI & MCP Agents", "Snowflake Cortex AI / Databricks Mosaic AI"];
const testimonials = [
  ["Thank you so much sir, for making me a Data Engineer.", "Raghul K", "Program Graduate"],
  ["All my doubts were dispelled. He is truly a great mentor.", "Ansh Ranjan", "Data Engineer Trainee, Hexaware"],
  ["His deep understanding made complex GenAI concepts easy to grasp.", "Kumar Gaurav", "Senior Azure Data Engineer @ PwC"]
];
const faqs = [
  ["Do I need a tech background to join?", "Yes. This is designed for working IT and technology professionals with basic comfort in data, software, cloud or analytics."],
  ["What's the difference between the Foundation and Advanced track?", "The foundation track builds modern data engineering depth. The advanced track applies GenAI, RAG, LangChain, LangGraph, CrewAI and MCP agents on top of that foundation."],
  ["Is this live or self-paced?", "The program is built as a live cohort with guided projects, mentoring and practical implementation."],
  ["Do I get a certificate?", "Yes, eligible learners receive a Datamarcos program certificate after completing the required work."],
  ["How do I get the fee & batch details?", "Tap Download Brochure or Book a Consultation below and our team will WhatsApp you the full brochure with fees and next batch dates."]
];
const visualItems: [string, LucideIcon][] = [
  ["Data Foundation", Database],
  ["RAG Systems", Network],
  ["LLM Engineering", Braces],
  ["Tool-Using Agents", Bot],
  ["MCP Workflows", Workflow],
  ["Production AI", Sparkles]
];

function WhatsAppButton({ variant, children, secondary = false }: { variant: keyof typeof messages; children: React.ReactNode; secondary?: boolean }) {
  return (
    <LandingCtaLink className={`ade-button ${secondary ? "ade-button-secondary" : ""}`} href={whatsappLink(variant)} target="_blank" rel="noopener noreferrer" aria-label={`${children} via WhatsApp`} eventName="WhatsAppClick" eventLabel={variant}>
      {children}
      <ArrowRight size={18} />
    </LandingCtaLink>
  );
}

function BrochureButton({ children, secondary = true }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <LandingCtaLink className={`ade-button ${secondary ? "ade-button-secondary" : ""}`} href={brochureUrl} download target="_blank" rel="noopener noreferrer" aria-label="Download brochure PDF" eventName="BrochureDownload" eventLabel="advance-data-engineering-genai">
      {children}
      <ArrowDownToLine size={18} />
    </LandingCtaLink>
  );
}

export default function AdvanceDataEngineeringGenAIPage() {
  return (
    <section className="ade-page">
      <Script id="ade-view-content" strategy="afterInteractive">{`window.fbq&&window.fbq('track','ViewContent',{content_name:'Advance Data Engineering with Applied GenAI & Agentic AI'});`}</Script>
      <header className="ade-header">
        <Link className="ade-brand" href="/">
          <span>DM</span>
          <strong>DATAMARCOS</strong>
        </Link>
        <a className="ade-menu" href="#faq" aria-label="Jump to FAQ">
          <Menu size={22} />
        </a>
      </header>

      <section className="ade-hero">
        <div className="ade-container ade-hero-grid">
          <div>
            <div className="ade-badges">
              <span className="ade-badge ade-badge-green">Flagship Advanced Program</span>
              <span className="ade-badge ade-badge-pink">Next Cohort - Applications Open</span>
            </div>
            <h1>
              <span className="ade-desktop-line">Build the Data Foundation.</span>
              <span className="ade-mobile-line">Build the Data<br />Foundation.</span>
              <span className="ade-desktop-line">Engineer the Intelligence.</span>
              <span className="ade-mobile-line">Engineer the<br />Intelligence.</span>
              <span>Deploy the Agents.</span>
            </h1>
            <p className="ade-lead">Advanced Data Engineering, RAG, Agentic AI, MCP and Production AI taught as one complete engineering discipline.</p>
            <p>Go beyond notebooks and chatbots. Learn to build AI-ready data platforms, production RAG systems, tool-using agents, multi-agent workflows, and deployable AI applications.</p>
            <div className="ade-actions">
              <WhatsAppButton variant="consultation">Book a Free 1:1 Program Consultation</WhatsAppButton>
              <BrochureButton>Download Brochure</BrochureButton>
            </div>
          </div>
          <div className="ade-visual">
            {visualItems.map(([item, Icon]) => (
              <span key={item as string}><Icon size={18} /> {item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="ade-stat-strip">{stats.map((stat) => <span key={stat}>{stat}</span>)}</div>

      <section className="ade-section">
        <div className="ade-container">
          <p className="ade-eyebrow">Why This Program</p>
          <h2>Stuck after years in IT and don&apos;t know the next leap?</h2>
          <p>You have built the skills. You have shipped the projects. But the market has moved from traditional data pipelines to AI-powered, agentic data systems, and the professionals who adapt first are the ones who get promoted, hired, and paid more.</p>
        </div>
      </section>

      <section className="ade-section">
        <div className="ade-container ade-grid-two">
          <article className="ade-card">
            <CheckCircle2 size={24} />
            <p className="ade-eyebrow">Track 1 - 4-Month Foundation</p>
            <h3>Modern Data Engineering</h3>
            <p>Data lakes, pipelines, orchestration, streaming, and cloud platforms across Azure, AWS, Snowflake and Databricks.</p>
          </article>
          <article className="ade-card ade-card-featured">
            <Sparkles size={24} />
            <p className="ade-eyebrow">Track 2 - Advanced GenAI & Agentic AI</p>
            <h3>Production Agentic Systems</h3>
            <p>LangChain, LangGraph, RAG, CrewAI, MCP, Snowflake Cortex AI and Databricks Mosaic AI on real data platforms.</p>
          </article>
        </div>
      </section>

      <section className="ade-section">
        <div className="ade-container">
          <p className="ade-eyebrow">What You&apos;ll Learn</p>
          <h2>Curriculum Highlights</h2>
          <div className="ade-chip-grid">{curriculum.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="ade-section">
        <div className="ade-container ade-mentor">
          <Image src={site.founder.image} alt={site.founder.imageAlt} width={520} height={650} />
          <div>
            <p className="ade-eyebrow">Mentor</p>
            <h2>Deepesh Mishra</h2>
            <p className="ade-lead">Founder, Datamarcos</p>
            <p>BITS Pilani Alumni. 18+ years experience. Trained 25,000+ professionals. Worked with Deloitte, EY, Adobe, HSBC and Boeing.</p>
            <blockquote>His deep understanding made complex GenAI concepts easy to grasp.</blockquote>
          </div>
        </div>
      </section>

      <section className="ade-section">
        <div className="ade-container">
          <p className="ade-eyebrow">Student Voices</p>
          <h2>Professionals who learned with Datamarcos</h2>
          <div className="ade-testimonials">{testimonials.map(([quote, name, role]) => <article className="ade-card" key={name}><p>&quot;{quote}&quot;</p><strong>{name}</strong><span>{role}</span></article>)}</div>
        </div>
      </section>

      <section className="ade-section ade-urgency">
        <div className="ade-container">
          <span className="ade-badge ade-badge-pink">Next Cohort - Applications Open</span>
          <h2>Limited seats per cohort to keep mentorship 1:1.</h2>
          <p>Applications reviewed on a rolling basis.</p>
          <WhatsAppButton variant="consultation">Book a Free 1:1 Program Consultation</WhatsAppButton>
        </div>
      </section>

      <section className="ade-section" id="faq">
        <div className="ade-container">
          <p className="ade-eyebrow">FAQ</p>
          <h2>Questions before you join</h2>
          <div className="ade-faq">{faqs.map(([question, answer]) => <details className="ade-card" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="ade-final">
        <div className="ade-container">
          <h2>Learn. Apply. Grow. Succeed.</h2>
          <div className="ade-actions">
            <BrochureButton>Download Brochure</BrochureButton>
            <WhatsAppButton variant="consultation">Book a Free 1:1 Program Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      <footer className="ade-footer">
        <strong>DATAMARCOS</strong>
        <span>C-908, Sector 62, Noida, Uttar Pradesh, India</span>
        <span>www.datamarcos.com</span>
        <span>&copy; Datamarcos IT Consulting Firm. All rights reserved.</span>
      </footer>

      <LandingCtaLink className="ade-floating" href={whatsappLink("general")} target="_blank" rel="noopener noreferrer" aria-label="Contact Datamarcos on WhatsApp" eventName="WhatsAppClick" eventLabel="general">
        <MessageCircle size={20} />
        Contact
      </LandingCtaLink>
    </section>
  );
}
