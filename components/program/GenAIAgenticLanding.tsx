import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Braces, Check, Cloud, Code2, Database, GitBranch, Network, ShieldCheck, Sparkles, Workflow, type LucideIcon, RotateCcw } from "lucide-react";
import { FDECallRequestForm } from "@/components/program/FDECallRequestForm";
import { ProgramFee } from "@/components/program/ProgramFee";
import { GatedBrochureFrame } from "@/components/lead/GatedBrochureFrame";
import { RelatedGuides } from "@/components/guides/RelatedGuides";

const brochureUrl = "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf";

const tracks = [
  { number: "TRACK 01", duration: "4 months · weeks 1-16", title: "Data Engineering Foundation", summary: "Build modern data engineering capability across cloud data lakes, pipelines, orchestration, streaming and data quality.", topics: ["Python & SQL", "Azure Data Lake", "PySpark", "Azure Data Factory", "AWS & Databricks", "Streaming, dbt & quality"] },
  { number: "TRACK 02", duration: "Advanced specialization", title: "Applied GenAI & Agentic AI", summary: "Build LLM-powered applications on real data platforms, from grounded RAG to tool-using agents and a production-style capstone.", topics: ["LLM foundations", "Embeddings & vector search", "LangChain RAG", "LangGraph & CrewAI", "MCP integration", "Snowflake Cortex & Mosaic AI"] }
];

const phases = [
  { number: "01", title: "Foundations & cloud data lakes", weeks: "Foundation · Month 1 · Weeks 1-4", summary: "Refresh Python and SQL, core data concepts and cloud foundations.", topics: ["Python and SQL refresher", "Files, formats, joins and aggregations", "Azure Data Lake fundamentals", "Data modeling and first cloud environment"], ship: "Set up a cloud data environment and prepare a structured dataset." },
  { number: "02", title: "Pipelines, PySpark & orchestration", weeks: "Foundation · Month 2 · Weeks 5-8", summary: "Process larger datasets and build orchestrated pipelines.", topics: ["PySpark for distributed processing", "Data structuring and cleaning", "Azure Data Factory pipelines", "Delta Lake and workflow orchestration"], ship: "Build a repeatable pipeline with transformation and orchestration." },
  { number: "03", title: "Multi-cloud, Databricks & streaming", weeks: "Foundation · Month 3 · Weeks 9-12", summary: "Expand into lakehouse patterns, streaming and data quality.", topics: ["AWS data services", "Databricks lakehouse architecture", "Spark Structured Streaming", "Great Expectations and dbt-style transformations"], ship: "Develop a streaming-ready, quality-checked data workflow." },
  { number: "04", title: "Foundation capstone & GenAI introduction", weeks: "Foundation · Month 4 · Weeks 13-16", summary: "Bring the foundation together and prepare for the advanced track.", topics: ["Ingest, process, store and analyze a real dataset", "Introduction to GenAI-powered data applications", "End-to-end data engineering capstone", "Resume and interview preparation"], ship: "Present an end-to-end data engineering capstone." },
  { number: "05", title: "Applied GenAI foundations", weeks: "Advanced track · Module 1", summary: "Connect language models to useful workflows and real data.", topics: ["LLM fundamentals and prompting", "Embeddings and vector databases", "Model connections to data pipelines", "Applied GenAI patterns"], ship: "Create a grounded LLM workflow using real data." },
  { number: "06", title: "Retrieval-augmented generation", weeks: "Advanced track · Module 2", summary: "Build retrieval systems that ground responses in enterprise knowledge.", topics: ["RAG architecture", "Chunking and retrieval strategies", "LangChain pipelines", "Grounded responses and source context"], ship: "Build a RAG assistant over a knowledge collection." },
  { number: "07", title: "Agentic AI systems", weeks: "Advanced track · Module 3", summary: "Design multi-step agents that use tools and connect to enterprise data.", topics: ["Tool-using agent design", "LangGraph workflows", "CrewAI orchestration patterns", "Agent connections to enterprise data systems"], ship: "Prototype an agentic workflow with tools and clear task boundaries." },
  { number: "08", title: "Enterprise AI platforms & capstone", weeks: "Advanced track · Module 4", summary: "Apply platform-native AI capabilities and integrate the complete system.", topics: ["Snowflake Cortex AI", "Databricks Mosaic AI", "Evaluation and integration", "End-to-end production-style capstone"], ship: "Build and present an integrated Agentic AI data application." }
];

const buildItems = [
  { id: "01", title: "Scalable data pipelines", detail: "Ingest, transform and orchestrate data across cloud platforms." },
  { id: "02", title: "Production RAG assistant", detail: "Ground model responses in searchable business knowledge." },
  { id: "03", title: "Tool-using agent", detail: "Connect an agent to APIs, data and a defined workflow." },
  { id: "04", title: "Integrated capstone", detail: "Bring data engineering, GenAI and agentic patterns together." }
];

const stack: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Data platforms", icon: Database, color: "#69c6f2" },
  { label: "LLM systems", icon: Braces, color: "#8be2d9" },
  { label: "RAG pipelines", icon: Network, color: "#84b7ff" },
  { label: "Agent workflows", icon: Workflow, color: "#f8a16a" },
  { label: "Cloud delivery", icon: Cloud, color: "#79d4c9" },
  { label: "Evaluation & safety", icon: ShieldCheck, color: "#e8c57b" },
  { label: "Python engineering", icon: Code2, color: "#89b8f5" },
  { label: "MCP integration", icon: GitBranch, color: "#f2967c" }
];

const feedback = [
  { quote: "Without you it wouldn't have been possible sir. Thank you so much for making me a Data Engineer.", name: "Raghul K", role: "Learner, Data Engineering Track" },
  { quote: "Learning under Deepesh Sir has been a great opportunity — all my doubts were dispelled and I honed my skills with hands-on activities and industry insights.", name: "Ansh Ranjan", role: "Data Engineer Trainee, Hexaware Technologies" },
  { quote: "His deep understanding, combined with a clear and engaging teaching style, made complex concepts easy to grasp.", name: "Kumar Gaurav", role: "Senior Azure Data Engineer, PwC" }
];

const audience = [
  "Analytics and BI professionals moving beyond dashboards",
  "ETL and integration engineers modernizing their stack",
  "Software and backend developers expanding into data systems",
  "Database administrators moving toward data platforms and AI"
];

export function GenAIAgenticLanding() {
  return (
    <article className="fde-page fde-genai-page">
      <section className="fde-hero fde-genai-hero" id="top">
        <div className="container fde-hero-grid">
          <div className="fde-hero-copy">
            <p className="fde-kicker"><span>Flagship certification program</span><span>Foundation + advanced AI track</span></p>
            <h1><span className="fde-title-line fde-title-line-one">Build the data</span><span className="fde-title-line fde-title-line-two">foundation.</span><span className="fde-title-line fde-title-line-three">Engineer the</span><span className="fde-title-line fde-title-line-four"><em>intelligence.</em></span></h1>
            <p className="fde-deck">Advanced Data Engineering with Applied GenAI & Agentic AI.</p>
            <p className="fde-intro">A structured, mentor-led journey from modern data engineering foundations to production-style RAG, agentic workflows and an integrated capstone, taught by Deepesh Mishra.</p>
            <div className="fde-hero-facts"><span><strong>4</strong> month foundation</span><span><strong>2</strong> connected tracks</span><span><strong>1</strong> integrated capstone</span></div>
            <div className="fde-actions"><a className="fde-button fde-button-orange" href="#apply" data-dm-lead>Discuss the program <ArrowRight size={17} /></a><a className="fde-button fde-button-light" href={brochureUrl} download><ArrowDownToLine size={17} /> Download brochure</a></div>
            <p className="fde-note"><Sparkles size={15} /> Live mentor-led learning · Weekend/evening sessions · Cohort dates shared by admissions</p>
            <ProgramFee slug="advance-data-engineering-genai" />
          </div>
          <div className="fde-genai-hero-visual" aria-label="Data engineering to GenAI and agentic AI program progression">
            <div className="fde-genai-hero-topline"><span>THE ENGINEERING PATH</span><span>DATA → INTELLIGENCE → ACTION</span></div>
            <div className="fde-genai-flow">
              {stack.slice(0, 4).map((item, index) => <div className="fde-genai-flow-node" key={item.label} style={{ "--node-delay": `${index * 150}ms` } as React.CSSProperties}><span style={{ color: item.color }}><item.icon size={20} /></span><div><small>0{index + 1}</small><strong>{item.label}</strong></div><i /></div>)}
            </div>
            <div className="fde-genai-flow-caption"><span /> <strong>Build the data foundation.</strong><strong>Deploy the agents.</strong></div>
          </div>
        </div>
        <a className="fde-hero-scroll" href="#tracks"><span /> Explore the program</a>
      </section>

      <section className="fde-proof" aria-label="Datamarcos training experience"><div className="container fde-proof-row"><div><strong>18+</strong><span>years of experience</span></div><div><strong>25,000+</strong><span>professionals trained</span></div><div><strong>200+</strong><span>organizations</span></div><div><strong>10+</strong><span>countries</span></div><p>Live mentorship.<br />Projects that connect the stack.</p></div></section>

      <section className="fde-orbit-showcase fde-genai-stack" aria-labelledby="genai-stack-title">
        <div className="container fde-orbit-layout">
          <div className="fde-orbit-copy"><p className="fde-eyebrow">One connected discipline</p><h2 id="genai-stack-title">From dependable data<br /><em>to useful AI systems.</em></h2><p>Build the layers in sequence: cloud data foundations, retrieval grounded in real information, agents that use tools, and a capstone that brings the pieces together.</p><div className="fde-orbit-caption"><span /> Data engineering + GenAI + Agentic AI</div></div>
          <div className="fde-orbit-scene" aria-label="Interactive animated curriculum technology orbit">
            <div className="fde-orbit-halo fde-orbit-halo-one" /><div className="fde-orbit-halo fde-orbit-halo-two" /><div className="fde-orbit-path fde-orbit-path-one" /><div className="fde-orbit-path fde-orbit-path-two" />
            <div className="fde-orbit-wheel">{stack.map((item, index) => <span className="fde-orbit-node" key={item.label} style={{ "--orbit-angle": `${index * 45}deg`, "--orbit-counter": `${index * -45}deg`, "--orbit-color": item.color } as React.CSSProperties}><span className="fde-orbit-chip"><item.icon size={22} /><small>{item.label}</small></span></span>)}</div>
            <div className="fde-orbit-core"><span className="fde-orbit-core-icon"><Sparkles size={46} /></span><span className="fde-orbit-core-label">DATA + AI</span><span className="fde-orbit-core-sub">production systems</span></div><span className="fde-orbit-spark fde-orbit-spark-one" /><span className="fde-orbit-spark fde-orbit-spark-two" />
          </div>
        </div>
      </section>

      <section className="fde-section fde-genai-tracks" id="tracks">
        <div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">Program structure</p><h2>Two tracks.<br />One connected skill path.</h2></div><p>The foundation builds modern data engineering capability. The advanced specialization applies GenAI and agents on top of that foundation.</p></div>
          <div className="fde-genai-track-grid">{tracks.map((track) => <article className="fde-genai-track" key={track.number}><div className="fde-genai-track-top"><span>{track.number}</span><small>{track.duration}</small></div><h3>{track.title}</h3><p>{track.summary}</p><div className="fde-genai-track-topics">{track.topics.map((topic) => <span key={topic}>{topic}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section className="fde-day-section fde-genai-build" aria-labelledby="genai-build-title"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">Build as you learn</p><h2 id="genai-build-title">Projects move from data to action.</h2></div><p>Hands-on labs run through both tracks. Each capstone grows from a working data foundation toward an integrated AI application.</p></div><div className="fde-day-rail">{buildItems.map((item, index) => <article className="fde-day-stop" key={item.id} style={{ "--fde-delay": `${index * 110}ms` } as React.CSSProperties}><span className="fde-day-time">{item.id}</span><span className="fde-day-dot" /><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></div></section>

      <section className="fde-engagements fde-genai-work"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">Applied work</p><h2>Build the systems in the brochure.</h2></div><p>Use these project formats to practise the ideas: data ingestion, grounded retrieval, useful agents and an integrated application.</p></div><div className="fde-engagement-list">{buildItems.map((item) => <article className="fde-engagement" key={item.id}><span className="fde-engagement-number">{item.id}</span><div><p>PROJECT BUILD</p><h3>{item.title}</h3></div><p className="fde-engagement-description">{item.detail}</p><ArrowRight className="fde-engagement-arrow" size={19} /></article>)}</div></div></section>

      <section className="fde-section fde-curriculum fde-genai-curriculum" id="curriculum"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">The roadmap · two tracks</p><h2>From data foundations<br />to agentic applications.</h2></div><p>Follow the month-by-month foundation and then move into the advanced GenAI modules. The brochure describes the advanced track as a specialization; admissions can confirm its cohort schedule.</p></div><div className="fde-phase-list">{phases.map((phase, index) => <details className="fde-phase" key={phase.number} open={index === 0 || index === 4}><summary><span className="fde-phase-number">{phase.number}</span><span className="fde-phase-title"><small>{phase.weeks}</small><strong>{phase.title}</strong></span><span className="fde-phase-summary">{phase.summary}</span><span className="fde-phase-toggle" aria-hidden="true">+</span></summary><div className="fde-phase-content"><ul>{phase.topics.map((topic) => <li key={topic}><Check size={15} />{topic}</li>)}</ul><p><strong>You build</strong>{phase.ship}</p></div></details>)}</div></div></section>

      <section className="fde-toolkit fde-genai-toolkit"><div className="container"><div className="fde-toolkit-heading"><div><p className="fde-eyebrow">Technologies & tools</p><h2>The stack across both tracks.</h2></div><p>Tools and platforms named in the program brochure, used for cloud data engineering, GenAI applications and agent workflows.</p></div><div className="fde-genai-tool-list">{["Azure", "AWS", "Snowflake", "Databricks", "PySpark", "Delta Lake", "Kafka", "Airflow", "dbt", "Great Expectations", "SQL", "Python", "Git", "LangChain", "LangGraph", "CrewAI", "RAG", "Vector Databases", "Snowflake Cortex AI", "Databricks Mosaic AI"].map((tool) => <span key={tool}>{tool}</span>)}</div></div></section>

      <section className="fde-outcomes fde-genai-outcomes"><div className="container fde-outcome-grid"><div><p className="fde-eyebrow">Who it serves</p><h2>Built for people ready to grow their data and AI practice.</h2><p>Designed for professionals already working with data, building data products, or moving from related analytics, software and database roles.</p><a className="fde-text-link" href="#apply" data-dm-lead>Ask about fit and prerequisites <ArrowRight size={16} /></a></div><ul>{audience.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></section>

      <section className="fde-section fde-genai-prereq"><div className="container fde-fit-grid"><div><p className="fde-eyebrow">Prerequisites</p><h2>Start with core data comfort. Build forward from there.</h2><p>Cloud knowledge is helpful but not mandatory. The brochure includes Python and SQL refreshers before the program work.</p></div><div className="fde-fit-checks"><h3>Helpful foundations</h3><p><Check size={16} /> Basic understanding of databases; SQL is required.</p><p><Check size={16} /> Familiarity with a programming language; Python is preferred.</p><p><Check size={16} /> Comfort with data concepts such as files, formats, joins and aggregations.</p><p><Check size={16} /> Experience working with data in any role is useful.</p><div className="fde-admission"><strong>Not sure where you fit?</strong><span>Ask admissions about the foundation track, advanced track and prerequisites.</span></div></div></div></section>

      <section className="fde-mentor fde-genai-mentor"><div className="container fde-mentor-grid"><Image src="/images/advance-data-engineering-genai/mentor-deepesh.jpg" alt="Deepesh Mishra, founder and mentor at Datamarcos" width={521} height={580} /><div><p className="fde-eyebrow">Founder & program mentor</p><h2>Deepesh Mishra</h2><p className="fde-mentor-role">Founder, Datamarcos · Corporate Trainer · Solution Architect</p><p>Deepesh is a BITS Pilani alumnus with 18+ years of experience spanning AI/ML, Data Engineering and Cloud Architecture. The brochure describes his approach as practical: make concepts clear, build on real work, and continue mentoring beyond the classroom.</p><div className="fde-mentor-stats"><span><strong>25,000+</strong> professionals trained</span><span><strong>200+</strong> organizations</span><span><strong>18+</strong> years</span></div><div className="fde-genai-mentor-links"><Image src="/images/trainers/eshank-agarwal.jpeg" alt="Eshank Agarwal, GenAI consultant and corporate trainer" width={72} height={72} /><span><strong>Industry expert</strong><small>Eshank Agarwal · GenAI consultant & Data Science corporate trainer</small></span><a href="https://www.linkedin.com/in/eshankagarwal/" target="_blank" rel="noreferrer">Profile <ArrowRight size={14} /></a></div></div></div></section>

      <section className="fde-section fde-genai-classroom"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">Training in action</p><h2>Real sessions. Real learners.</h2></div><p>Classroom and cohort imagery from the supplied Datamarcos program brochure.</p></div><div className="fde-genai-photo-grid"><figure><Image src="/images/advance-data-engineering-genai/classroom-live.jpg" alt="Live instructor-led data and AI classroom session" width={1280} height={960} /><figcaption>Live classroom · guided practice and discussion</figcaption></figure><figure><Image src="/images/advance-data-engineering-genai/classroom-cohort.jpg" alt="Datamarcos learner cohort after a training session" width={2304} height={1028} /><figcaption>Cohort learning · shared projects and feedback</figcaption></figure><figure><Image src="/images/advance-data-engineering-genai/classroom-lab.jpg" alt="Small-group hands-on technology training" width={1280} height={960} /><figcaption>Hands-on lab · learn by building</figcaption></figure></div></div></section>

      <section className="fde-section fde-genai-testimonials"><div className="container"><div className="fde-section-heading"><div><p className="fde-eyebrow">Learner feedback</p><h2>What learners say about Deepesh’s training.</h2></div><p>Quotes reproduced from the supplied brochure, with each speaker and role identified there.</p></div><div className="fde-genai-feedback-grid">{feedback.map((item) => <article key={item.name}><span aria-label="5 out of 5 stars">★★★★★</span><blockquote>“{item.quote}”</blockquote><strong>{item.name}</strong><small>{item.role}</small></article>)}</div></div></section>

      <RelatedGuides slugs={["data-engineering-courses-with-genai-india-compared-2026", "rag-vs-fine-tuning"]} wrapClassName="container" />
      <section className="fde-brochure fde-genai-brochure" id="brochure"><div className="container fde-brochure-head"><div><p className="fde-eyebrow">Program guide · 2026</p><h2>Read the full brochure.</h2></div><a className="fde-button fde-button-dark" href={brochureUrl} download><ArrowDownToLine size={17} /> Download PDF</a></div><div className="container fde-pdf-frame"><GatedBrochureFrame src={brochureUrl} title="Advanced Data Engineering with Applied GenAI and Agentic AI brochure" course="Advance Data Engineering with Applied GenAI & Agentic AI" cover="/images/program-thumbnails/data-engineering-genai.webp" /></div></section>

      <section className="fde-apply fde-genai-apply" id="apply"><div className="container fde-apply-grid"><div><p className="fde-eyebrow">Take the next step</p><h2>Plan your data + AI learning path.</h2><p>Ask about foundation-track dates, advanced specialization scheduling, fees and admissions. The program brochure lists both tracks; the team can confirm the current cohort plan.</p><a className="fde-apply-brochure" href={brochureUrl} download><ArrowDownToLine size={16} /> Download the full program brochure</a><p className="fde-apply-refund"><RotateCcw size={16} aria-hidden="true" /> <span><Link href="/refund-policy">7-day refund policy</Link>: not right for you? Ask within 7 days for a refund.</span></p><p className="fde-apply-next">Data engineers who want a customer-facing AI role can continue with the <Link href="/programs/forward-deployed-ai-engineer">Forward Deployed AI Engineer</Link> program.</p></div><FDECallRequestForm programId="advance-data-engineering-genai" programSlug="advance-data-engineering-genai" programName="Advance Data Engineering with Applied GenAI & Agentic AI" /></div></section>

      <section className="fde-genai-final"><div className="container"><p className="fde-eyebrow">Learn. Apply. Grow. Succeed.</p><h2>Build your future with the power of AI.</h2><div><a className="fde-button fde-button-orange" href="#apply" data-dm-lead>Talk to admissions <ArrowRight size={17} /></a><Link className="fde-button fde-button-light" href="/programs">Explore all programs</Link></div></div></section>
    </article>
  );
}
