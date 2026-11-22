import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, Briefcase, Building2, Check, Hammer, Linkedin, MessageCircle, PhoneCall, Quote, RotateCcw, ShieldCheck, Sprout, Target, UsersRound } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { env, site } from "@/config/site";
import { SectionHead } from "@/components/ds/Section";
import { Placeholder } from "@/components/ds/Placeholder";
import { CareerOSJourney } from "@/components/ds/CareerOSJourney";
import { PLACEMENT_URL, placementSteps } from "@/config/placement";
import { corporateProgrammes, programmeLabel } from "@/config/corporate";
import { REFUND_POLICY_PATH } from "@/config/refund";
import { NEXT_COHORT_LONG } from "@/config/cohort";
import { DEEPESH_LINKEDIN } from "@/config/home";
import { communityLearners, learnerOrgs, outcomeCards, PLACEMENTS_PATH, transformationStories, type OutcomeCard } from "@/config/placements";

const TITLE = "Placements & Learner Outcomes | Datamarcos";
const DESCRIPTION = "Where Datamarcos learners work today, their stories in their own words, and the CareerOS career support that takes you from resume to applications.";

export const metadata = pageMetadata({ path: PLACEMENTS_PATH, title: TITLE, description: DESCRIPTION });

/** Fee-free, claim-free page schema: WebPage + breadcrumb, linked to the homepage Organization. */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${site.url}${PLACEMENTS_PATH}#webpage`,
      url: `${site.url}${PLACEMENTS_PATH}`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
      about: { "@id": `${site.url}/#organization` },
      breadcrumb: { "@id": `${site.url}${PLACEMENTS_PATH}#breadcrumb` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}${PLACEMENTS_PATH}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Placements & learner outcomes", item: `${site.url}${PLACEMENTS_PATH}` }
      ]
    }
  ]
};

const reach = [
  { value: "25,000+", label: "Professionals trained" },
  { value: "200+", label: "Organizations" },
  { value: "18+", label: "Years of experience" },
  { value: "10+", label: "Countries reached" }
];

const DISCLAIMER = "Placement support, not a job guarantee.";
const heroLearners = ["pravince-kumar", "uphar-tandon", "lakshan-sj", "joydip-dutta"].map((id) => outcomeCards.find((c) => c.id === id)!).filter(Boolean);
const shreshtha = outcomeCards.find((c) => c.id === "shreshtha-singh-chauhan");
const hsbc = corporateProgrammes.find((p) => p.org === "HSBC Technology India");

function Avatar({ card, size = 52 }: { card: Pick<OutcomeCard, "name" | "initials" | "image">; size?: number }) {
  return card.image
    ? <Image className="pl-avatar" src={card.image} alt={card.name} width={size} height={size} sizes={`${size}px`} style={{ width: size, height: size }} />
    : <span className="pl-avatar pl-avatar-initials" aria-hidden="true" style={{ width: size, height: size }}>{card.initials}</span>;
}

function ExtLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function OutcomeTile({ card }: { card: OutcomeCard }) {
  return (
    <figure className={`pl-card${card.quote ? " pl-card-quote" : ""}`}>
      <figcaption className="pl-card-who">
        <Avatar card={card} />
        <span><b>{card.name}</b><small>{card.tag}</small></span>
      </figcaption>
      <div className="pl-now">
        <span className="pl-now-label">Now</span>
        <strong>{card.role}</strong>
        {card.org && <span className="pl-now-org">{card.org}</span>}
      </div>
      {card.before && <p className="pl-before"><span>Started as</span> {card.before}</p>}
      {card.highlight && <p className="pl-highlight"><Award size={15} aria-hidden="true" /> {card.highlight}</p>}
      {card.quote && <blockquote>“{card.quote}”</blockquote>}
      <ExtLink className="pl-verify" href={card.link.href}><BadgeCheck size={15} aria-hidden="true" /> {card.link.label}</ExtLink>
    </figure>
  );
}

export default function PlacementsPage() {
  return (
    <div className="ds-home pl-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* 1. HERO */}
      <section className="ds-hero pl-hero" aria-labelledby="pl-hero-title">
        <div className="ds-wrap ds-hero-grid">
          <div className="ds-hero-copy">
            <p className="ds-kicker"><span className="ds-dot" aria-hidden="true" /> Placements &amp; learner outcomes</p>
            <h1 id="pl-hero-title">Real learners. <span>Real career moves.</span></h1>
            <p className="ds-lead">See where Datamarcos learners work today, what they built on the way, and the step-by-step career support that helps you make your own move.</p>
            <div className="ds-actions">
              <button type="button" className="ds-btn ds-btn-primary ds-btn-lg" data-dm-lead data-cta="Placements hero - Talk to a counsellor">Talk to a counsellor <ArrowRight size={18} aria-hidden="true" /></button>
              <a className="ds-btn ds-btn-ghost ds-btn-lg" href="#outcomes">See learner outcomes</a>
            </div>
            <p className="pl-disclaimer" role="note"><ShieldCheck size={16} aria-hidden="true" /> {DISCLAIMER}</p>
            <ul className="ds-assure">
              <li><Check size={15} aria-hidden="true" /> Free 15-min counselling call</li>
              <li><Check size={15} aria-hidden="true" /> <Link href={REFUND_POLICY_PATH}>7-day refund policy</Link></li>
              <li><Check size={15} aria-hidden="true" /> Next batch {NEXT_COHORT_LONG}</li>
            </ul>
          </div>
          <div className="pl-board" aria-label="Where some of our learners work today">
            <p className="pl-board-title"><Briefcase size={15} aria-hidden="true" /> Where our learners are today</p>
            <ul>
              {heroLearners.map((c) => (
                <li key={c.id}>
                  <Avatar card={c} size={46} />
                  <span><b>{c.name}</b><small>{c.role}{c.org ? ` · ${c.org}` : ""}</small></span>
                </li>
              ))}
            </ul>
            {shreshtha && (
              <p className="pl-board-medal"><Award size={16} aria-hidden="true" /> <span><b>{shreshtha.name}</b> · {shreshtha.role}, HSBC<small>Medal for Excellence in Performance</small></span></p>
            )}
            <p className="pl-board-note">Roles as shown on each learner’s own LinkedIn.</p>
          </div>
        </div>
      </section>

      <section className="ds-reach" aria-label="Datamarcos in numbers">
        <div className="ds-wrap">
          <dl className="ds-stats">{reach.map((s) => <div key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>)}</dl>
          <p className="ds-fine ds-center">As published by Datamarcos.</p>
        </div>
      </section>

      {/* 2. LEARNER OUTCOMES */}
      <section className="ds-section ds-soft" id="outcomes" aria-labelledby="pl-outcomes-title">
        <div className="ds-wrap">
          <SectionHead id="pl-outcomes-title" eyebrow="Learner outcomes" title={<>Where our learners <em>are today.</em></>} sub="Real people, real roles. Every card links to its source." />
          <div className="pl-grid">{outcomeCards.map((card) => <OutcomeTile key={card.id} card={card} />)}</div>
          <div className="pl-community">
            <span className="pl-community-faces">
              {communityLearners.map((l) => (
                <ExtLink key={l.name} href={l.link}><Image src={l.image} alt={l.name} width={44} height={44} sizes="44px" /></ExtLink>
              ))}
            </span>
            <p>Also learning with us: {communityLearners.map((l) => l.name).join(", ")} and thousands more.</p>
          </div>
          <p className="ds-fine">Current roles as shown on each learner’s public LinkedIn profile, video or message. Not a placement claim. {DISCLAIMER} Outcomes depend on each learner.</p>
        </div>
      </section>

      {/* 3. TRANSFORMATION STORIES */}
      <section className="ds-section" id="stories" aria-labelledby="pl-stories-title">
        <div className="ds-wrap">
          <SectionHead id="pl-stories-title" eyebrow="Transformation stories" title={<>Start. Build. <em>Land.</em></>} sub="Told in the learners’ own words." />
          <div className="pl-stories">
            {transformationStories.map((s) => (
              <article className="pl-story" key={s.id}>
                {s.image && (
                  <ExtLink className="pl-story-media" href={s.link.href}>
                    <Image src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} sizes="(max-width: 760px) 92vw, 220px" />
                  </ExtLink>
                )}
                <div className="pl-story-body">
                  <p className="pl-story-track">{s.track}</p>
                  <h3>{s.name}</h3>
                  <ol className="pl-steps">
                    <li><span className="pl-step-ic"><Sprout size={16} aria-hidden="true" /></span><span><small>Start</small>{s.start}</span></li>
                    <li><span className="pl-step-ic"><Hammer size={16} aria-hidden="true" /></span><span><small>Build</small>{s.build}</span></li>
                    <li><span className="pl-step-ic pl-step-land"><Target size={16} aria-hidden="true" /></span><span><small>Land</small>{s.land}</span></li>
                  </ol>
                  <blockquote><Quote size={16} aria-hidden="true" /> {s.quote}</blockquote>
                  <ExtLink className="pl-verify" href={s.link.href}><BadgeCheck size={15} aria-hidden="true" /> {s.link.label}</ExtLink>
                </div>
              </article>
            ))}
          </div>
          <Placeholder label="More transformation stories" need="learner name, old role, new role and company, LinkedIn link, a quote and their OK to be featured; add each to transformationStories in config/placements.ts" />
        </div>
      </section>

      {/* 4. HOW WE GET YOU THERE */}
      <section className="ds-section ds-soft ds-section-tight" id="how" aria-labelledby="pl-how-title">
        <div className="ds-wrap">
          <SectionHead id="pl-how-title" eyebrow="How we get you there" title={<>A clear path from <em>learning to applying.</em></>} sub="Built into every flagship program." />
          <ol className="pl-path">
            {placementSteps.map((step, i) => (
              <li key={step.title}><span className="pl-path-n">{i + 1}</span><b>{step.title}</b><span>{step.body}</span><small>{step.where}</small></li>
            ))}
          </ol>
        </div>
      </section>
      <CareerOSJourney id="careeros" ctaPrefix="Placements CareerOS" outcomesLink={false} />

      {/* 5. CORPORATE PROOF */}
      <section className="ds-section" id="corporate-proof" aria-labelledby="pl-corp-title">
        <div className="ds-wrap">
          <SectionHead id="pl-corp-title" eyebrow="Proof from the training room" title={<>Trusted by teams. <em>Recognised by learners.</em></>} sub="Datamarcos’s founder-led team trains engineers inside companies, too." />
          <div className="pl-corp">
            <div className="pl-corp-case">
              <span className="pl-corp-tag"><Building2 size={15} aria-hidden="true" /> Corporate training</span>
              <h3>HSBC Technology India</h3>
              <p>Datamarcos, led by Deepesh Kumar Mishra, trained HSBC Technology India’s graduate engineers in data engineering{hsbc?.when ? ` (${hsbc.when})` : ""}.</p>
              <p className="pl-corp-via">Delivered with training partner {hsbc?.via ?? "Neueda"}.</p>
              {hsbc && <ExtLink className="ds-link" href={hsbc.source}>See the LinkedIn post <ArrowUpRight size={14} aria-hidden="true" /></ExtLink>}
            </div>
            {/* CONSENT PENDING: Shreshtha Singh Chauhan has not yet confirmed she is happy to be featured (Deepesh to ask her).
                Corporate training proof only: NOT a Datamarcos placement. Facts confirmed by Deepesh, 22 Nov 2026. */}
            <figure className="pl-corp-quote">
              <span className="pl-avatar pl-avatar-initials pl-avatar-lg" aria-hidden="true">SC</span>
              <blockquote>“Grateful to Deepesh Kumar Mishra for his insightful mentorship.”</blockquote>
              <figcaption>
                <b>Shreshtha Singh Chauhan</b>
                <span>Software Engineer (Data Engineer), HSBC</span>
                <span className="pl-highlight"><Award size={15} aria-hidden="true" /> Received the Medal for Excellence in Performance in the program</span>
                <ExtLink className="pl-verify" href="https://www.linkedin.com/in/shreshthasinghchauhan/"><Linkedin size={15} aria-hidden="true" /> LinkedIn</ExtLink>
              </figcaption>
            </figure>
          </div>
          <p className="pl-corp-more">Teams we’ve trained</p>
          <ul className="ds-chips">{corporateProgrammes.filter((p) => p.strip).map((p) => <li key={p.org}>{programmeLabel(p)}</li>)}</ul>
          <p className="ds-center pl-corp-links"><Link className="ds-link" href="/corporate-training"><Building2 size={15} aria-hidden="true" /> Corporate training <ArrowRight size={14} aria-hidden="true" /></Link></p>
        </div>
      </section>

      {/* 6. COMPANIES */}
      <section className="ds-section ds-soft ds-section-tight" id="companies" aria-labelledby="pl-companies-title">
        <div className="ds-wrap">
          <SectionHead id="pl-companies-title" eyebrow="Company network" title={<>Where our learners work <em>&amp; teams we’ve trained.</em></>} />
          <ul className="pl-orgs">
            {learnerOrgs.map((o) => (
              <li key={o.name} className={o.logo ? "pl-org pl-org-logo" : "pl-org"}>
                {o.logo
                  // eslint-disable-next-line @next/next/no-img-element -- static brand SVGs
                  ? <img src={o.logo.src} alt={o.name} width={o.logo.width} height={o.logo.height} style={{ height: o.logo.h, width: "auto" }} />
                  : <span>{o.name}</span>}
              </li>
            ))}
          </ul>
          <p className="ds-fine ds-center">From learners’ own LinkedIn profiles and teams we’ve trained. Trademarks of their owners; no endorsement implied.</p>
          <p className="ds-center pl-portal"><ExtLink className="ds-btn ds-btn-navy" href={PLACEMENT_URL}><Briefcase size={16} aria-hidden="true" /> Open the placement portal <ArrowUpRight size={16} aria-hidden="true" /></ExtLink></p>
        </div>
      </section>

      {/* 7. RISK REDUCERS + FINAL CTA */}
      <section className="ds-section ds-section-tight" aria-labelledby="pl-risk-title">
        <div className="ds-wrap">
          <SectionHead id="pl-risk-title" eyebrow="Low risk" title={<>Decide with <em>confidence.</em></>} />
          <ul className="pl-risk">
            <li><RotateCcw size={22} aria-hidden="true" /><b>7-day refund</b><span>Not the right fit? Ask within 7 days for a refund.</span><Link className="ds-link" href={REFUND_POLICY_PATH}>Read the policy <ArrowRight size={14} aria-hidden="true" /></Link></li>
            <li><PhoneCall size={22} aria-hidden="true" /><b>Free counselling</b><span>A 15-minute call to check your fit and pick the right track.</span><button type="button" className="ds-link" data-dm-lead data-cta="Placements risk - Talk to a counsellor">Book a call <ArrowRight size={14} aria-hidden="true" /></button></li>
            <li><UsersRound size={22} aria-hidden="true" /><b>Honest expectations</b><span>{DISCLAIMER} Outcomes depend on your effort and the job market.</span><ExtLink className="ds-link" href={DEEPESH_LINKEDIN}>Read recommendations <ArrowUpRight size={14} aria-hidden="true" /></ExtLink></li>
          </ul>
        </div>
      </section>

      <section className="ds-final" aria-labelledby="pl-final-title">
        <div className="ds-wrap ds-final-card">
          <div>
            <h2 id="pl-final-title">Start your own story.</h2>
            <p>Tell us your background and goal. A counsellor will suggest the right program and show you the career support that comes with it.</p>
            <div className="ds-actions">
              <button type="button" className="ds-btn ds-btn-white ds-btn-lg" data-dm-lead data-cta="Placements final - Talk to a counsellor">Talk to a counsellor <ArrowRight size={18} aria-hidden="true" /></button>
              <a className="ds-btn ds-btn-outline-light ds-btn-lg" href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp</a>
            </div>
          </div>
          <ul>
            <li><RotateCcw size={18} aria-hidden="true" /> <Link href={REFUND_POLICY_PATH}>7-day refund policy</Link></li>
            <li><PhoneCall size={18} aria-hidden="true" /> Free 15-min counselling call</li>
            <li><Briefcase size={18} aria-hidden="true" /> <a href={PLACEMENT_URL} target="_blank" rel="noopener noreferrer">Placement portal (CareerOS)</a></li>
            <li><ShieldCheck size={18} aria-hidden="true" /> {DISCLAIMER}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
