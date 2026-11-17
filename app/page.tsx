import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, BadgeCheck, Briefcase, Building2, CalendarClock, Check, ChevronDown, Clock3, Gauge, GraduationCap, Hammer, Linkedin, MessageCircle, MessageSquareQuote, PhoneCall, RotateCcw, ShieldCheck, Sparkles, UserRoundCheck, UsersRound } from "lucide-react";
import { LearnerSpotlight, type SpotlightLearner } from "@/components/home/LearnerSpotlight";
import { HeroSyllabusMenu } from "@/components/home/HeroSyllabusMenu";
import { LearnerVideoCard } from "@/components/home/LearnerVideoCard";
import { DEEPESH_LINKEDIN, homeFaqs, homePrograms, learnerStories, learnerVideos } from "@/config/home";
import { faqsWithProgramFees } from "@/config/fees";
import { intlProgramCards } from "@/config/intl-courses";
import { faqsForJsonLd, faqsForMarket, isIndiaMarket } from "@/lib/geo";
import { brochureHrefForMarket } from "@/config/lead";
import { getMarket } from "@/lib/geo-server";
import { env, site } from "@/config/site";
import { corporateProgrammes, programmeLabel } from "@/config/corporate";
import { NEXT_COHORT_LONG } from "@/config/cohort";
import { PLACEMENT_DISCLAIMER, PLACEMENT_LABEL, PLACEMENT_URL, placementSteps } from "@/config/placement";
import { SectionHead } from "@/components/ds/Section";
import { LogoMarquee } from "@/components/ds/LogoMarquee";
import { StoryCard } from "@/components/ds/StoryCard";
import { Placeholder } from "@/components/ds/Placeholder";
import { WhyDatamarcos } from "@/components/ds/WhyDatamarcos";
import { LearnersNow } from "@/components/ds/LearnersNow";
import { DsTabs } from "@/components/ds/Tabs";

const ogTitle = "4 Live Online AI & Data Engineering Courses with Deepesh Mishra | Datamarcos";
const ogDescription = "Forward Deployed AI Engineer, Generative AI & Agentic AI Engineer, Applied Agentic AI Certification and Advance Data Engineering with Applied GenAI & Agentic AI. Live online courses for students and working professionals, mentor-led by Deepesh Mishra.";

/** Organization JSON-LD: homepage only (moved out of the root layout). Facts come from config/site.ts. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/apple-icon.png`,
  image: `${site.url}/apple-icon.png`,
  description: "Datamarcos runs four live, mentor-led online courses for students and working professionals: Forward Deployed AI Engineer, Generative AI & Agentic AI Engineer, Applied Agentic AI Certification, and Advance Data Engineering with Applied GenAI & Agentic AI. It also offers technology training for teams.",
  email: site.email,
  telephone: "+91-88519-30644",
  address: { "@type": "PostalAddress", streetAddress: "Noida One, 303-304, Rasoolpur Nawada, Industrial Area, Sector 62", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201309", addressCountry: "IN" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "21:00" }],
  areaServed: "IN",
  contactPoint: [{ "@type": "ContactPoint", contactType: "admissions", telephone: "+91-88519-30644", email: site.email, areaServed: "IN", availableLanguage: ["en", "hi"] }],
  founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.title, image: `${site.url}${site.founder.image}` },
  sameAs: [
    "https://www.linkedin.com/company/90980108/",
    "https://www.instagram.com/datamarcos_official/",
    "https://www.quora.com/profile/Deepesh-Mishra-125",
    "https://www.slideshare.net/deepeshdatamarcos",
    "https://www.google.com/maps/place/Datamarcos/data=!4m2!3m1!1s0x0:0x748fc73adb2dbf52"
  ]
};

const HOME_TITLE = "FDE, GenAI, Agentic AI & Data Engineering Courses | Datamarcos";
const HOME_DESCRIPTION = "4 live online courses for students and working professionals: FDE, GenAI & Agentic AI, Applied Agentic AI and Data Engineering. Live online, learn from anywhere. Fees and EMI options shared on a counsellor call.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
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
const learnerProfiles: SpotlightLearner[] = [
  { name: "Richard Leclézio", role: "Professional learner", image: "/images/student-placements/richard-leclezio.jpeg", link: "https://www.linkedin.com/in/richard-leclezio/" },
  { name: "Lakshan J", role: "Software Engineer", employer: "Hexaware Technologies", image: "/images/student-placements/lakshan-j.png", link: "https://www.linkedin.com/in/lakshan013/" },
  { name: "Uphar Tandon", role: "Technology professional", employer: "Microsoft", image: "/images/student-placements/uphar-tandon.png", link: "https://www.linkedin.com/in/uphar-tandon-2563a636/" },
  { name: "Sharoz Farhan Afridi", role: "Technology professional", image: "/images/student-placements/sharoz-farhan-afridi.jpeg", link: "https://www.linkedin.com/in/sharoz-farhan-afridi/" },
  // Added 31 Oct 2026 at Deepesh's request. No role/employer: none confirmed by Deepesh, so the card shows "Datamarcos learner" only.
  { name: "Manav Chhouda", image: "/images/student-placements/manav-chhouda.webp", link: "https://www.linkedin.com/in/manav-chhouda-738784268/" }
];



function faqSchemaFor(faqs: typeof homeFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.link ? `${item.a} ${site.url.replace(/\/$/, "")}${item.link.href}` : item.a }
    }))
  };
}

const careerCallCta = "Not sure which program fits? Book a free 15-min career call";

/** "Is this for me?" Each line restates the program's own who-it's-for copy (config/home.ts). */
const pathFinder = [
  { who: "Java, backend or full-stack engineer (2+ years)", goal: "Ship AI inside real companies", slug: "forward-deployed-ai-engineer" },
  { who: "Python developer, QA or DevOps engineer", goal: "Build LLM apps, RAG and agents", slug: "genai-agentic-ai-engineer" },
  { who: "Data, SQL or analytics professional", goal: "Become a modern data engineer", slug: "advance-data-engineering-genai" },
  { who: "Working professional, any role", goal: "Build practical AI workflows and agents", slug: "applied-agentic-ai-certification" }
] as const;

/** Real reach figures (config/site.ts). Kept exactly as published. */
const reach = [
  { value: "25,000+", label: "Professionals trained" },
  { value: "200+", label: "Organizations" },
  { value: "18+", label: "Years of experience" },
  { value: "10+", label: "Countries reached" }
];

/** The learning experience, in four lines. Facts from the program pages. */
const experience = [
  { icon: UsersRound, title: "Live, mentor-led classes", body: "Weekend and evening live batches. Ask questions as you learn." },
  { icon: Hammer, title: "Real projects and capstones", body: "Build systems you can show in an interview." },
  { icon: GraduationCap, title: "Career track", body: "Resume, LinkedIn, portfolio and mock interviews." },
  { icon: BadgeCheck, title: "Placement support", body: "Verified capstone, then CareerOS for live openings." }
];

export default async function Home() {
  const market = await getMarket();
  const india = isIndiaMarket(market);
  const faqs = faqsForMarket(market, faqsWithProgramFees(market, homeFaqs));
  const learners = learnerStories.filter((story) => story.kind !== "peer");
  const peer = learnerStories.find((story) => story.kind === "peer");
  const programBySlug = Object.fromEntries(homePrograms.map((program) => [program.slug, program]));
  const worries = [
    { q: "“I work full time.”", a: "Live classes run on weekends and evenings. Plan about 8–14 hours a week, depending on the program." },
    { q: "“I’m not sure I’m ready.”", a: "Each program states who it is for. FDE includes bridge pre-work in Python, Linux, Git and SQL. A counsellor checks your fit first." },
    { q: "“Is it worth the money?”", a: `Live mentors, real projects and career prep. ${india ? "EMI options available" : "Flexible instalments available"}, and a 7-day refund policy.` }
  ];
  return (
    <div className="ds-home">
      {/* 1. HERO: outcome, who it's for, two clear next steps, low-risk line */}
      <section className="ds-hero" aria-labelledby="home-hero-title">
        <div className="ds-wrap ds-hero-grid">
          <div className="ds-hero-copy">
            <p className="ds-kicker"><span className="ds-dot" aria-hidden="true" /> Admissions open · All batches start {NEXT_COHORT_LONG}</p>
            <h1 id="home-hero-title">AI is changing tech jobs. <span>Be the one who builds it.</span></h1>
            <p className="ds-lead">Turn your Java, backend, data, DevOps or Python experience into an AI role. Live, mentor-led programs in <b>Forward Deployed AI</b>, <b>GenAI &amp; Agentic AI</b> and <b>Data Engineering</b>.</p>
            <div className="ds-actions">
              <button type="button" className="ds-btn ds-btn-primary ds-btn-lg" data-dm-lead data-cta="Home hero - Book a free career call">Book a free career call <ArrowRight size={18} aria-hidden="true" /></button>
              <HeroSyllabusMenu files={[...homePrograms, ...intlProgramCards].map((program) => ({ course: program.leadCourse, title: program.title, href: brochureHrefForMarket(program.brochure, market) }))} />
            </div>
            <ul className="ds-assure">
              <li><Check size={15} aria-hidden="true" /> Free 15-min call</li>
              <li><Check size={15} aria-hidden="true" /> {india ? "EMI options" : "Flexible instalments"}</li>
              <li><Check size={15} aria-hidden="true" /> <Link href="/refund-policy">7-day refund policy</Link></li>
            </ul>
            <p className="ds-hero-links">
              <Link className="ds-link" href="/programs/forward-deployed-ai-engineer#readiness" data-cta="Home hero - Check my readiness"><Gauge size={15} aria-hidden="true" /> Check your readiness in 30 seconds <ArrowRight size={14} aria-hidden="true" /></Link>
              <a className="ds-link" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer"><Briefcase size={15} aria-hidden="true" /> {PLACEMENT_LABEL} <ArrowUpRight size={14} aria-hidden="true" /></a>
            </p>
          </div>
          <div className="ds-hero-visual">
            <LearnerSpotlight learners={learnerProfiles} />
            <a className="ds-hero-proof" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer">
              <span className="ds-hero-proof-icon" aria-hidden="true"><Linkedin size={18} /></span>
              <span><b>Learner recommendations</b><small>Read them on LinkedIn</small></span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. BRAND CREDIBILITY: reach + company network */}
      <section className="ds-reach" aria-label="Datamarcos in numbers">
        <div className="ds-wrap">
          <dl className="ds-stats">
            {reach.map((stat) => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt></div>)}
          </dl>
          <p className="ds-fine ds-center">As published by Datamarcos.</p>
          <LogoMarquee />
        </div>
      </section>

      {/* 3. EXPLORE: one tabbed section (programs, stories, placement, mentors, why us) */}
      <section className="ds-section ds-soft ds-tabs-sec" aria-labelledby="home-tabs-title">
        <div className="ds-wrap">
          <SectionHead id="home-tabs-title" eyebrow="Explore Datamarcos" title={<>Everything you need <em>to decide.</em></>} />
        </div>
        <DsTabs
          label="Explore Datamarcos"
          tabs={[
            { id: "programs", label: "Programs", icon: <GraduationCap size={17} aria-hidden="true" />, content: (
      <section className="ds-section" aria-labelledby="home-programs-title">
        <div className="ds-wrap">
          <SectionHead id="home-programs-title" eyebrow="Find your program" title={<>Is this for you? <em>Start from your role.</em></>} sub="Pick your background. We’ll point you to the right AI program." />
          <ul className="ds-finder">
            {pathFinder.map((item) => (
              <li key={item.slug}>
                <Link href={`/programs/${item.slug}`}>
                  <small>I am a</small>
                  <b>{item.who}</b>
                  <span className="ds-finder-goal">{item.goal}</span>
                  <span className="ds-finder-to">{programBySlug[item.slug]?.title} <ArrowRight size={15} aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ds-programs">
            {homePrograms.map((program) => (
              <article className="ds-program" key={program.slug}>
                <Link className="ds-program-img" href={`/programs/${program.slug}`} tabIndex={-1} aria-hidden="true">
                  <Image src={program.image} alt={program.imageAlt} width={720} height={720} sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 280px" quality={70} />
                </Link>
                <div className="ds-program-body">
                  <span className="ds-tag">{program.tag}</span>
                  <h3><Link href={`/programs/${program.slug}`}>{program.title}</Link></h3>
                  <ul className="ds-meta">{program.facts.slice(0, 3).map((fact) => <li key={fact}>{fact}</li>)}</ul>
                  <p>{program.summary}</p>
                  <div className="ds-program-actions">
                    <Link className="ds-btn ds-btn-primary" href={`/programs/${program.slug}`}>{program.slug === "forward-deployed-ai-engineer" ? "Explore FDE" : "Explore"} <ArrowUpRight size={16} aria-hidden="true" /></Link>
                    <a className="ds-btn ds-btn-ghost" href={brochureHrefForMarket(program.brochure, market)} download data-course={program.leadCourse} data-cta={`Home program card - Download Syllabus - ${program.leadCourse}`} aria-label={`Download the ${program.title} syllabus`}><ArrowDownToLine size={16} aria-hidden="true" /> Syllabus</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="ds-more">
            <strong>More live courses</strong>
            <div>{intlProgramCards.map((program) => <Link key={program.slug} href={`/programs/${program.slug}`}>{program.title}</Link>)}</div>
          </div>
          <div className="ds-callbar">
            <p><PhoneCall size={18} aria-hidden="true" /> Not sure which program is right for you?</p>
            <button type="button" className="ds-btn ds-btn-navy" data-dm-lead data-cta={careerCallCta}>Get a free career call <ArrowRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
      </section>
            ) },
            { id: "learner-stories", label: "Learner stories", icon: <MessageSquareQuote size={17} aria-hidden="true" />, aliases: ["stories"], content: (
      <section className="ds-section" aria-labelledby="home-stories-title">
        <div className="ds-wrap">
          <SectionHead id="home-stories-title" eyebrow="Success stories" title={<>Real learners. <em>Their own words.</em></>} sub="Every story links to its source." action={<a className="ds-link" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer">All recommendations on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>} align="left" />
          <div className="ds-stories">{learners.map((story) => <StoryCard key={story.id} story={story} />)}</div>
          <LearnersNow />
          <h3 className="ds-subhead">Hear from our learners</h3>
          <div className="ds-reels">{learnerVideos.map((video) => <LearnerVideoCard key={video.id} video={video} />)}</div>
          {peer && <p className="ds-peer"><b>Industry peer · {peer.name}, {peer.role}{peer.company ? `, ${peer.company}` : ""}:</b> “{peer.quote}” <a href={peer.verify.href} target="_blank" rel="noreferrer">{peer.verify.label}</a></p>}
          <p className="ds-soft-cta"><button type="button" className="ds-link" data-dm-lead data-cta="Home stories - Start your story">Start your own story: book a free career call <ArrowRight size={14} aria-hidden="true" /></button></p>
          <p className="ds-fine">Learner stories are shared by the learners themselves. No placement, salary or hike is guaranteed; outcomes depend on each learner.</p>
        </div>
      </section>
            ) },
            { id: "placement", label: "Placement journey", icon: <Briefcase size={17} aria-hidden="true" />, aliases: ["placements", "careeros"], content: (
      <section className="ds-section" aria-labelledby="home-placement-title">
        <div className="ds-wrap">
          <SectionHead id="home-placement-title" eyebrow="Placement support" title={<>Your path <em>from class to job.</em></>} sub="Five steps. Real support at each one." />
          <ol className="ds-journey">
            {placementSteps.map((step, index) => (
              <li key={step.title}>
                <span className="ds-journey-n">{index + 1}</span>
                <small>{step.where}</small>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="ds-careeros">
            <div>
              <span className="ds-tag">CareerOS by Datamarcos</span>
              <h3>Live AI &amp; data openings, mock interviews and your job tracker. In one place.</h3>
              <p className="ds-fine">{PLACEMENT_DISCLAIMER}</p>
            </div>
            <a className="ds-btn ds-btn-primary" href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">Open the placement portal <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
            ) },
            { id: "mentor", label: "Mentors", icon: <UserRoundCheck size={17} aria-hidden="true" />, aliases: ["mentors"], content: (
      <section className="ds-section" aria-labelledby="home-mentor-title">
        <div className="ds-wrap">
          <SectionHead id="home-mentor-title" eyebrow="Instructors & mentors" title={<>Learn from <em>practitioners.</em></>} />
          <div className="ds-mentors">
            <article className="ds-mentor ds-mentor-lead">
              <div className="ds-mentor-photo"><Image src={site.founder.image} alt={site.founder.imageAlt} width={620} height={691} sizes="(max-width: 900px) 80vw, 340px" /></div>
              <div className="ds-mentor-copy">
                <span className="ds-tag">Founder &amp; lead mentor</span>
                <h3>Deepesh Mishra</h3>
                <p className="ds-mentor-role">BITS Pilani alumnus · Solution architect · Corporate trainer</p>
                <p>18+ years in technology. Has trained 25,000+ professionals across 200+ organizations.</p>
                <p className="ds-mentor-ex"><small>Worked with</small> {site.founder.workedWith.slice(0, 6).join(" · ")}</p>
                <div className="ds-row">
                  <a className="ds-btn ds-btn-ghost" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
                  <Link className="ds-btn ds-btn-ghost" href="/about">About Deepesh <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
            <article className="ds-mentor">
              <Image className="ds-mentor-avatar" src="/images/trainers/eshank-agarwal.jpeg" alt="Eshank Agarwal" width={88} height={88} sizes="88px" />
              <span className="ds-tag">Industry expert · GenAI</span>
              <h3>Eshank Agarwal</h3>
              <p>Founder &amp; CEO, GenAI consultant and Data Science corporate trainer.</p>
              <a className="ds-link" href="https://www.linkedin.com/in/eshankagarwal/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </article>
            <Placeholder className="ds-mentor" label="More mentor profiles" need="names, photos, roles and LinkedIn links of the other mentors" />
            <Placeholder className="ds-mentor" label="Mentor intro video" need="a 60–90 s intro video from Deepesh (and each mentor)" />
          </div>
          <p className="ds-soft-cta"><button type="button" className="ds-link" data-dm-lead data-cta="Home mentors - Talk to the team">Talk to our team about your goals <ArrowRight size={14} aria-hidden="true" /></button></p>
        </div>
      </section>
            ) },
            { id: "why", label: "Why Datamarcos", icon: <Sparkles size={17} aria-hidden="true" />, aliases: ["why-datamarcos"], content: (
<WhyDatamarcos />
            ) }
          ]}
        />
      </section>


      {/* 6. HOW YOU LEARN: the experience in one band */}
      <section className="ds-experience" aria-labelledby="home-exp-title">
        <div className="ds-wrap ds-experience-grid">
          <div className="ds-experience-big">
            <p className="ds-eyebrow ds-eyebrow-light">Trusted by professionals</p>
            <strong>25,000+</strong>
            <span>professionals trained</span>
          </div>
          <div>
            <h2 id="home-exp-title">The Datamarcos learning experience</h2>
            <ul>{experience.map((item) => <li key={item.title}><item.icon size={20} aria-hidden="true" /><span><b>{item.title}</b>{item.body}</span></li>)}</ul>
            <button type="button" className="ds-btn ds-btn-white ds-exp-cta" data-dm-lead data-cta="Home experience - Check my fit">Check which program fits me <ArrowRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
      </section>

      {/* 8. INSTITUTIONAL CREDIBILITY: teams trained */}
      <section className="ds-section ds-soft ds-section-tight" aria-labelledby="home-teams-title">
        <div className="ds-wrap">
          <SectionHead id="home-teams-title" eyebrow="Trusted by teams" title={<>Teams we’ve <em>trained.</em></>} sub="Our founder-led team has trained teams across 200+ organizations, including:" />
          <ul className="ds-chips">{corporateProgrammes.filter((p) => p.strip).map((p) => <li key={p.org}>{programmeLabel(p)}</li>)}</ul>
          <p className="ds-center ds-teams-links">
            <a className="ds-link" href="https://g.page/r/CVK_Lds6x490EBM/review" target="_blank" rel="noopener noreferrer">Review us on Google <ArrowUpRight size={14} aria-hidden="true" /></a>
            <Link className="ds-link" href="/corporate-training"><Building2 size={15} aria-hidden="true" /> Corporate training <ArrowRight size={14} aria-hidden="true" /></Link>
          </p>
          <Placeholder label="Recognitions & accreditations" need="any certificates of recognition or partnerships Datamarcos actually holds (none are on the site today)" />
        </div>
      </section>

      {/* 9. OBJECTIONS + FAQ */}
      <section className="ds-section" id="faq" aria-labelledby="home-faq-title">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFor(faqsForJsonLd(faqsWithProgramFees("in", homeFaqs)))) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <div className="ds-wrap ds-faq-grid">
          <div>
            <SectionHead id="home-faq-title" eyebrow="Before you join" title={<>Questions, <em>answered.</em></>} align="left" />
            <ul className="ds-worries">{worries.map((w) => <li key={w.q}><b>{w.q}</b><span>{w.a}</span></li>)}</ul>
            <a className="ds-btn ds-btn-ghost" href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp</a>
          </div>
          <div className="ds-faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary><span>{item.q}</span><ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{item.a}</p>
                {item.link && <p><Link href={item.link.href}>{item.link.label} <ArrowRight size={14} aria-hidden="true" /></Link></p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA with risk reversal */}
      <section className="ds-final" aria-labelledby="home-final-title">
        <div className="ds-wrap ds-final-card">
          <div>
            <h2 id="home-final-title">Not sure which program fits?</h2>
            <p>Book a free 15-minute career call. We’ll look at your background and goals and suggest the right track.</p>
            <div className="ds-actions">
              <button type="button" className="ds-btn ds-btn-white ds-btn-lg" data-dm-lead data-cta={careerCallCta}>Book a free career call <ArrowRight size={18} aria-hidden="true" /></button>
              <a className="ds-btn ds-btn-outline-light ds-btn-lg" href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp</a>
            </div>
          </div>
          <ul>
            <li><CalendarClock size={18} aria-hidden="true" /> All batches start {NEXT_COHORT_LONG}</li>
            <li><Clock3 size={18} aria-hidden="true" /> {india ? "Live online, weekend & evening batches" : "Live online, learn from anywhere"}</li>
            <li><ShieldCheck size={18} aria-hidden="true" /> {india ? "EMI options available" : "Flexible instalments available"}</li>
            <li><RotateCcw size={18} aria-hidden="true" /> <Link href="/refund-policy">7-day refund policy</Link></li>
            <li><Gauge size={18} aria-hidden="true" /> <Link href="/programs/forward-deployed-ai-engineer#readiness">Check your FDE readiness</Link></li>
            <li><Briefcase size={18} aria-hidden="true" /> <a href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">{PLACEMENT_LABEL} (CareerOS)</a></li>
          </ul>
        </div>
      </section>

      <div className="ds-mobilebar" role="region" aria-label="Quick actions">
        <button type="button" className="ds-btn ds-btn-primary" data-dm-lead data-cta="Mobile sticky bar - Book a free career call">Book a free career call</button>
        <a className="ds-mobilebar-wa" href={env.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
      </div>
    </div>
  );
}
