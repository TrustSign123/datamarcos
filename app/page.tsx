import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, MessageCircle } from "lucide-react";
import { LearnerSpotlight } from "@/components/home/LearnerSpotlight";
import { LearnerVideoCard } from "@/components/home/LearnerVideoCard";
import { AlumniOutcomes } from "@/components/home/AlumniOutcomes";
import { EMI_NOTE, homeFaqs, homePrograms, learnerFeedback, learnerVideos } from "@/config/home";
import { env, site } from "@/config/site";

const ogTitle = "Live AI & Data Engineering Courses with Deepesh Mishra | Datamarcos";
const ogDescription = "Live online GenAI, Agentic AI, Data Engineering and Forward Deployed AI programs for working professionals and graduates. Real projects, mentor-led by Deepesh Mishra.";

export const metadata: Metadata = {
  title: "Live AI, GenAI & Data Engineering Courses Online | Datamarcos",
  description: "Live online courses in Generative AI, Agentic AI, Data Engineering and Forward Deployed AI Engineering, mentor-led by Deepesh Mishra. Real projects, 4 programs, fees from ₹40,000 with EMI options.",
  alternates: { canonical: "/" },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og/datamarcos-home.jpg", width: 1200, height: 630, alt: "Datamarcos – live AI and data engineering programs with Deepesh Mishra" }]
  },
  twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: ["/og/datamarcos-home.jpg"] }
};

/** Real Datamarcos learners. Employer is shown only where the learner's profile names one. */
const learnerProfiles = [
  { name: "Richard Leclézio", role: "Professional learner", image: "/images/student-placements/richard-leclezio.jpeg", link: "https://www.linkedin.com/in/richard-leclezio/" },
  { name: "Lakshan J", role: "Software Engineer", employer: "Hexaware Technologies", image: "/images/student-placements/lakshan-j.png", link: "https://www.linkedin.com/in/lakshan013/" },
  { name: "Uphar Tandon", role: "Technology professional", employer: "Microsoft", image: "/images/student-placements/uphar-tandon.png", link: "https://www.linkedin.com/in/uphar-tandon-2563a636/" },
  { name: "Sharoz Farhan Afridi", role: "Technology professional", image: "/images/student-placements/sharoz-farhan-afridi.jpeg", link: "https://www.linkedin.com/in/sharoz-farhan-afridi/" }
];

/** Short quotes for the community strip. People featured in the learner report (AlumniOutcomes) are kept there only. */
const learnerQuotes = [
  { initials: "GT", name: "Gourav Thadhani", role: "Data Science and AI, ZS Associates", quote: "Many thanks for the great Databricks training at ZS!" }
];

type MarqueeItem =
  | ({ kind: "learner" } & (typeof learnerProfiles)[number])
  | ({ kind: "quote" } & (typeof learnerQuotes)[number]);

const marqueeItems: MarqueeItem[] = learnerProfiles.flatMap((learner, i) => {
  const items: MarqueeItem[] = [{ kind: "learner", ...learner }];
  if (learnerQuotes[i - 1]) items.push({ kind: "quote", ...learnerQuotes[i - 1] });
  return items;
});

/** Learner-relevant numbers that are already published on the site. */
const heroStats = [
  { value: "4", label: "Live online programs" },
  { value: "25,000+", label: "Professionals trained" },
  { value: "18+", label: "Years of industry experience" }
];

const learningSteps = [
  ["Build the data foundation", "Pipelines, cloud data platforms, orchestration and quality."],
  ["Engineer with language models", "RAG, evaluation, model integration and useful AI applications."],
  ["Create agentic workflows", "Tool use, MCP, multi-step reasoning and human oversight."],
  ["Take systems to production", "Security, deployment, monitoring and enterprise context."]
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.link ? `${item.a} ${site.url.replace(/\/$/, "")}${item.link.href}` : item.a }
  }))
};

const careerCallCta = "Not sure which program fits? Book a free 15-min career call";

export default function Home() {
  return (
    <div className="dmh-page">
      <section className="dmh-hero" aria-labelledby="home-hero-title">
        <div className="container dmh-hero-grid">
          <div className="dmh-hero-copy">
            <p className="dmh-eyebrow">Live online courses · For working professionals &amp; graduates</p>
            <h1 id="home-hero-title">Become the engineer who <span>ships real AI &amp; data systems.</span></h1>
            <p className="dmh-sub">Learn live with <b>Deepesh Mishra</b> (18+ years, 25,000+ professionals trained) and build real projects in one of <b>4 tracks</b>: GenAI &amp; Agentic AI, Data Engineering, Applied Agentic AI or Forward Deployed AI.</p>
            <div className="dmh-actions">
              <Link className="button primary dmh-apply" href="/programs" data-dm-lead data-cta="Home hero - Apply Now">Apply Now <ArrowRight size={18} /></Link>
              <Link className="dmh-syllabus" href="/programs" data-dm-download data-cta="Download Syllabus"><ArrowDownToLine size={18} /> Download Syllabus</Link>
            </div>
            <p className="dmh-proof"><span>Live online classes</span><span>Real projects &amp; capstones</span><span>Fees from ₹40,000 · EMI options</span></p>
          </div>
          <LearnerSpotlight learners={learnerProfiles} />
        </div>
        <div className="container dmh-stats">
          {heroStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="dmh-marquee" aria-labelledby="home-marquee-title">
        <div className="container dmh-marquee-head"><h2 id="home-marquee-title">Learners from the Datamarcos community</h2></div>
        <div className="dmh-marquee-viewport">
          <div className="dmh-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => {
              const clone = index >= marqueeItems.length;
              return item.kind === "learner" ? (
                <a key={`${item.name}-${index}`} className="dmh-chip" href={item.link} target="_blank" rel="noreferrer" aria-hidden={clone || undefined} tabIndex={clone ? -1 : undefined}>
                  <Image src={item.image} alt={clone ? "" : item.name} width={52} height={52} sizes="52px" />
                  <span><b>{item.name}</b><small>{item.employer ? `${item.role} · ${item.employer}` : `${item.role} · Datamarcos learner`}</small></span>
                </a>
              ) : (
                <figure key={`${item.name}-${index}`} className="dmh-quote" aria-hidden={clone || undefined}>
                  <blockquote>“{item.quote}”</blockquote>
                  <figcaption><span className="dmh-initials">{item.initials}</span><span><b>{item.name}</b><small>{item.role}</small></span></figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <nav className="dmh-tracks" aria-label="Our live programs">
        <div className="container">
          <strong>Explore our 4 live programs</strong>
          <div className="dmh-track-row">
            {homePrograms.map((program) => <Link key={program.slug} href={`/programs/${program.slug}`}>{program.title}</Link>)}
          </div>
        </div>
      </nav>

      <section className="dmh-section" id="programs" aria-labelledby="home-programs-title">
        <div className="container">
          <div className="dmh-section-head">
            <div>
              <p className="dmh-kicker">Programs · live online · mentor-led</p>
              <h2 id="home-programs-title">Choose your program.</h2>
              <p>Four live programs mentor-led by Deepesh Mishra, each built around real projects. Download the syllabus or open the program for the full roadmap.</p>
            </div>
            <Link className="dmh-ghost" href="/programs">All programs <ArrowRight size={16} /></Link>
          </div>
          <div className="dmh-prog-grid">
            {homePrograms.map((program) => (
              <article className="dmh-prog" key={program.slug}>
                <Link className="dmh-prog-poster" href={`/programs/${program.slug}`} tabIndex={-1} aria-hidden="true">
                  <Image src={program.image} alt="" width={720} height={720} sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 290px" quality={70} />
                  <span className="dmh-prog-tag">{program.tag}</span>
                </Link>
                <div className="dmh-prog-body">
                  <h3><Link href={`/programs/${program.slug}`}>{program.title}</Link></h3>
                  <ul className="dmh-prog-facts">{program.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                  <p className="dmh-prog-summary">{program.summary}</p>
                  <p className="dmh-prog-who"><b>Who it’s for:</b> {program.whoFor}</p>
                  <div className="dmh-prog-fee">
                    <span className="dmh-prog-fee-label">Program fee</span>
                    <strong>{program.fee}</strong>
                    <small>{EMI_NOTE}</small>
                  </div>
                  <div className="dmh-prog-actions">
                    <a className="dmh-btn dmh-btn-solid" href={program.brochure} data-dm-download data-course={program.leadCourse} data-cta={`Home program card - Download Syllabus - ${program.leadCourse}`}><ArrowDownToLine size={16} /> Download Syllabus</a>
                    <Link className="dmh-btn dmh-btn-line" href={`/programs/${program.slug}`}>View Program <ArrowUpRight size={16} /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dmh-section dmh-reels-section" id="learner-stories" aria-labelledby="home-reels-title">
        <div className="container">
          <div className="dmh-section-head">
            <div>
              <p className="dmh-kicker">Alumni outcomes · Learner report</p>
              <h2 id="home-reels-title">Where our learners are now.</h2>
              <p>Real learners and teams who trained with Deepesh Mishra, in their own words. Every story links to its source.</p>
            </div>
          </div>
          <AlumniOutcomes />
          <div className="dmh-section-head dmh-reels-head">
            <div>
              <h3 className="dmh-subhead">Hear from our learners.</h3>
              <p>Real Datamarcos learners on what they built and how the live sessions helped. Tap a card to play; videos load only when you press play.</p>
            </div>
            <a className="dmh-ghost" href="https://www.instagram.com/datamarcos_official/" target="_blank" rel="noreferrer">More on Instagram <ArrowUpRight size={16} /></a>
          </div>
          <div className="dmh-reels">
            {learnerVideos.map((video) => <LearnerVideoCard key={video.id} video={video} />)}
          </div>
          <div className="dmh-wall" aria-label="Written learner feedback">
            {learnerFeedback.map((item) => (
              <figure className="dmh-wall-card" key={item.id}>
                <span className="dmh-wall-source">{item.source}</span>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <span><b>{item.name}</b><small>{item.role}</small></span>
                  {item.image && (
                    <a className="dmh-wall-original" href={item.image} target="_blank" rel="noreferrer" aria-label={`See the original: ${item.imageAlt}`}>
                      <Image src={item.image} alt="" width={56} height={56} sizes="56px" />
                      <span>See original</span>
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="dmh-section" aria-labelledby="home-stack-title">
        <div className="container dmh-split">
          <div>
            <p className="dmh-kicker">What you’ll learn to build</p>
            <h2 id="home-stack-title">Understand the stack. Build what runs on it.</h2>
            <p>Strong AI work starts with good data and ends with systems people can use. Our programs connect the layers in between.</p>
            <Link className="dmh-ghost" href="/programs/advance-data-engineering-genai">See the Data + AI pathway <ArrowRight size={16} /></Link>
          </div>
          <div className="dmh-steps">
            {learningSteps.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className="dmh-section dmh-mentor-section" id="mentor" aria-labelledby="home-mentor-title">
        <div className="container dmh-mentor">
          <div className="dmh-mentor-photo"><Image src={site.founder.image} alt={site.founder.imageAlt} width={620} height={691} sizes="(max-width: 900px) 70vw, 420px" /></div>
          <div className="dmh-mentor-copy">
            <p className="dmh-kicker">Your mentor</p>
            <h2 id="home-mentor-title">Learn live with Deepesh Mishra.</h2>
            <p className="dmh-mentor-role">{site.founder.title} · BITS Pilani alumnus · Technology trainer and solution architect</p>
            <p>Deepesh has 18+ years in technology and has trained 25,000+ professionals across 200+ corporate and academic clients. His teaching connects clear concepts with hands-on work and real-world examples.</p>
            <div className="dmh-chips">{site.founder.teaches.slice(0, 6).map((item) => <span key={item}>{item}</span>)}</div>
            <div className="dmh-mentor-stats">
              <div><strong>18+</strong><span>Years of experience</span></div>
              <div><strong>25,000+</strong><span>Professionals trained</span></div>
              <div><strong>200+</strong><span>Corporate &amp; academic clients</span></div>
            </div>
            <Link href="/about" className="dmh-ghost">More about Deepesh <ArrowUpRight size={16} /></Link>
            <div className="dmh-expert">
              <Image src="/images/trainers/eshank-agarwal.jpeg" alt="Eshank Agarwal" width={72} height={72} sizes="72px" />
              <div>
                <p className="dmh-expert-label">Industry expert · GenAI</p>
                <h3>Eshank Agarwal</h3>
                <p>Founder &amp; CEO, GenAI consultant and Data Science corporate trainer.</p>
              </div>
              <a href="https://www.linkedin.com/in/eshankagarwal/" target="_blank" rel="noreferrer" className="dmh-ghost">LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="dmh-section dmh-faq-section" id="faq" aria-labelledby="home-faq-title">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <div className="container dmh-faq-grid">
          <div>
            <p className="dmh-kicker">FAQ</p>
            <h2 id="home-faq-title">Questions learners ask before joining.</h2>
            <p>Still unsure? Our counsellor can walk you through prerequisites, batch dates and EMI options.</p>
            <a className="dmh-ghost" href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Ask on WhatsApp</a>
          </div>
          <div className="dmh-faq">
            {homeFaqs.map((item) => (
              <details key={item.q}>
                <summary><span>{item.q}</span><ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{item.a}</p>
                {item.link && <p><Link href={item.link.href}>{item.link.label} <ArrowRight size={14} /></Link></p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dmh-final" aria-labelledby="home-final-title">
        <div className="container dmh-final-card">
          <h2 id="home-final-title">Not sure which program fits?</h2>
          <p>Book a free 15-minute career call. We’ll look at your background and goals and suggest the right track.</p>
          <div className="dmh-final-actions">
            <button type="button" className="button primary dmh-apply" data-dm-lead data-cta={careerCallCta}>Book a free 15-min career call <ArrowRight size={18} /></button>
            <a className="dmh-btn dmh-btn-wa" href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a>
          </div>
          <ul className="dmh-final-points">
            <li><Check size={15} /> Live online</li><li><Check size={15} /> Real projects</li><li><Check size={15} /> EMI options available</li>
          </ul>
        </div>
      </section>

      <aside className="dmh-team-strip" aria-label="Team training">
        <div className="container">
          <Building2 size={20} aria-hidden="true" />
          <p><b>Training a team?</b> Role-based AI, data and cloud programs for organizations.</p>
          <Link href="/corporate-training#inquiry">Talk to us <ArrowRight size={16} /></Link>
        </div>
      </aside>

      <div className="dmh-mobilebar" role="region" aria-label="Quick actions">
        <button type="button" className="dmh-mobilebar-apply" data-dm-lead data-cta="Mobile sticky bar - Apply Now">Apply Now <ArrowRight size={18} /></button>
        <a className="dmh-mobilebar-wa" href={env.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
      </div>
    </div>
  );
}
