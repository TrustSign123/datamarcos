import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";
import { FeesEnrolment } from "@/components/program/FeesEnrolment";
import { InlineLeadForm } from "@/components/lead/InlineLeadForm";
import { Logo } from "@/components/Header";
import { FdeAdNav } from "./FdeAdNav";
import { FdeAdCurriculum } from "./FdeAdCurriculum";
import { FdeAdFaq } from "./FdeAdFaq";
import { FdeAdTrainers } from "./FdeAdTrainers";
import {
  FDE_BROCHURE, FDE_COURSE, fdeCareerTimeline, fdeEngagements, fdeFaqs, fdeHiringPaths,
  fdeMarketFacts, fdePhases, fdeReadyRoles
} from "@/config/fde";
import { NEXT_COHORT_STARTS } from "@/config/cohort";
import { brochureHrefForMarket } from "@/config/lead";
import { faqsWithProgramFees } from "@/config/fees";
import { faqsForMarket, faqsPointingToFees } from "@/lib/geo";
import { getMarket } from "@/lib/geo-server";
import { learnerOrgs, outcomeCards, stripLearnerIds, transformationStories, type OutcomeCard } from "@/config/placements";
import { PLACEMENT_DISCLAIMER, PLACEMENT_LABEL, PLACEMENT_URL, placementSteps } from "@/config/placement";
import { REFUND_LABEL, REFUND_POLICY_PATH } from "@/config/refund";
import { site } from "@/config/site";

function SectionBadge({ num, label }: { num: string; label: string }) {
  return (
    <p className="fde-ad-badge">
      <span className="fde-ad-badge-num">{num}</span>
      <span className="fde-ad-badge-label">{label}</span>
    </p>
  );
}

export async function FdeAdPage() {
  const market = await getMarket();
  const brochure = brochureHrefForMarket(FDE_BROCHURE, market);
  const faqs = faqsPointingToFees(faqsForMarket(market, faqsWithProgramFees(market, fdeFaqs, "forward-deployed-ai-engineer")));

  return (
    <div className="fde-ad">
      <FdeAdNav />

      <section id="hero_sec" className="fde-ad-hero">
        <div className="fde-ad-wrap fde-ad-hero-grid">
          <div className="fde-ad-hero-copy">
            <p className="fde-ad-proof"><span>25,000+ professionals trained</span></p>
            <h1>
              <em>AI Forward</em>
              <span>Deployed Engineer</span>
            </h1>
            <p className="fde-ad-kicker">{FDE_COURSE} Program</p>
            <p className="fde-ad-lead">
              Ship AI into real enterprises. A 22-week, live, mentor-led program with 170+ live hours
              and four client-style engagements — from the first discovery conversation to production handover.
            </p>
            <p className="fde-ad-cohort">{NEXT_COHORT_STARTS}</p>
            <div className="fde-ad-hero-ctas">
              <button
                type="button"
                className="fde-ad-btn fde-ad-btn-light"
                data-dm-lead
                data-course={FDE_COURSE}
                data-cta="FDE ad LP hero - Apply for the program"
              >
                <span className="fde-ad-ico" aria-hidden="true"><ArrowRight size={16} /></span>
                Apply for the program
              </button>
              <a
                className="fde-ad-btn fde-ad-btn-ghost"
                href={brochure}
                data-cta="FDE ad LP hero - Download brochure"
              >
                <Download size={16} aria-hidden="true" />
                Download brochure
              </a>
            </div>
          </div>
          <div className="fde-ad-hero-visual">
            <Image
              src="/images/forward-deployed-ai-engineer/field-engineer-hero.jpg"
              alt="Engineers collaborating on a live AI deployment workshop"
              width={1600}
              height={1067}
              priority
            />
          </div>
        </div>
      </section>

      <section id="program" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="01" label="The industry signal" />
          <h2>Why Forward Deployed Engineering is a career path to watch</h2>
          <p className="fde-ad-sub">Figures below are from named, dated sources already published on our course page. We do not invent hiring stats.</p>
          <ul className="fde-ad-facts">
            {fdeMarketFacts.slice(0, 3).map((fact, index) => (
              <li key={fact.source} className={index === 1 ? "is-accent" : undefined}>
                <p className="fde-ad-fact-value">{fact.value}</p>
                <p className="fde-ad-fact-label">{fact.label}</p>
                <a href={fact.href} target="_blank" rel="noopener noreferrer">{fact.source} · {fact.date}</a>
              </li>
            ))}
          </ul>
          {fdeMarketFacts[3] ? (
            <p className="fde-ad-fact-extra">
              Also sourced: {fdeMarketFacts[3].value} — {fdeMarketFacts[3].label}{" "}
              <a href={fdeMarketFacts[3].href} target="_blank" rel="noopener noreferrer">{fdeMarketFacts[3].source} · {fdeMarketFacts[3].date}</a>
            </p>
          ) : null}
        </div>
      </section>

      <section id="who" className="fde-ad-section fde-ad-who">
        <div className="fde-ad-wrap">
          <SectionBadge num="02" label="Who is an FDE?" />
          <h2>Who is a Forward Deployed AI Engineer?</h2>
          <p className="fde-ad-sub">
            An FDE embeds with a customer, turns a vague business problem into working software inside
            the customer&apos;s real environment, and stays accountable until it creates value.
          </p>
          <ul className="fde-ad-pillars">
            <li>
              <span>01 — Build</span>
              <strong>Production software</strong>
              <p>Write and extend production code in the customer&apos;s environment, not just a demo.</p>
            </li>
            <li>
              <span>02 — Deploy</span>
              <strong>Ship and operate</strong>
              <p>Get the system live: integrations, security, evaluation, monitoring and handover.</p>
            </li>
            <li>
              <span>03 — Own</span>
              <strong>Stay with the outcome</strong>
              <p>Work through ambiguity with stakeholders until the system is adopted and creating value.</p>
            </li>
          </ul>
          <p className="fde-ad-who-banner">Build · Deploy · Own <strong>Forward Deployed AI Engineer</strong></p>
        </div>
      </section>

      <section id="curriculum" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="03" label="Curriculum overview" />
          <h2>The 22-week FDE curriculum you will follow</h2>
          <p className="fde-ad-sub">
            Five phases, {fdePhases.reduce((sum, phase) => sum + phase.items.length, 0)} weekly studios, and a career track that runs alongside the technical work.
            One program — not separate tracks by years of experience.
          </p>
          <FdeAdCurriculum />
        </div>
      </section>

      <section id="projects" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="04" label="Projects" />
          <h2>Four client-style engagements you will ship</h2>
          <p className="fde-ad-sub">Each engagement has a client brief, real constraints and a panel review. These are studio projects, not a placement assignment.</p>
          <ul className="fde-ad-projects">
            {fdeEngagements.map((item) => (
              <li key={item.code}>
                <p className="fde-ad-proj-code">{item.code} · {item.weeks}</p>
                <h3>{item.name}</h3>
                <p className="fde-ad-proj-client">{item.client}</p>
                <p>{item.brief}</p>
                <p className="fde-ad-curr-meta"><strong>Stack:</strong> {item.stack.join(", ")}</p>
                <p className="fde-ad-curr-meta"><strong>You deliver:</strong> {item.deliverables.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="testimonials_sec" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="05" label="Learner outcomes" />
          <h2>Where our learners work today</h2>
          <p className="fde-ad-sub">
            Real Datamarcos learners, with roles as their own LinkedIn or message shows.
            {` ${PLACEMENT_DISCLAIMER}`}
          </p>
          <ul className="fde-ad-outcomes-grid">
            {stripLearnerIds.map((id) => outcomeCards.find((card) => card.id === id)).filter((card): card is OutcomeCard => Boolean(card)).map((card) => (
              <li key={card.id}>
                {card.image
                  ? <Image className="fde-ad-face" src={card.image} alt="" width={48} height={48} />
                  : <span className="fde-ad-face" aria-hidden="true">{card.initials}</span>}
                <span><b>{card.name}</b><small>{card.role}</small></span>
                <strong>{card.orgShort ?? card.org}</strong>
                {card.quote ? <p>“{card.quote}”</p> : null}
              </li>
            ))}
          </ul>
          <p className="fde-ad-note">{PLACEMENT_DISCLAIMER}</p>
          <p className="fde-ad-center"><Link href="/placements">See all learner outcomes</Link></p>
        </div>
      </section>

      <section id="placements_sec" className="fde-ad-section fde-ad-midcta-wrap">
        <div className="fde-ad-wrap">
          <p className="fde-ad-orgs-label">Organisations where our learners work today, or teams we have trained</p>
          <ul className="fde-ad-orgs">
            {learnerOrgs.map((org) => <li key={org.name}>{org.name}</li>)}
          </ul>
          <div className="fde-ad-midcta">
            <h2>Ready to become a Forward Deployed AI Engineer?</h2>
            <p>Talk to a counsellor about the 22-week program, the next cohort and whether it is a fit for your background.</p>
            <button
              type="button"
              className="fde-ad-btn fde-ad-btn-light"
              data-dm-lead
              data-course={FDE_COURSE}
              data-cta="FDE ad LP mid CTA - Request a callback"
            >
              <span className="fde-ad-ico" aria-hidden="true"><Phone size={16} /></span>
              Request a callback
            </button>
          </div>
        </div>
      </section>

      <section id="mentors" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="06" label="Expert-led training" />
          <h2>Learn from practitioners building in the real world</h2>
          <p className="fde-ad-sub">
            Deepesh leads the program. Additional trainers are listed only with confirmed details — more photos can be added in the trainers config.
          </p>
          <FdeAdTrainers />
        </div>
      </section>

      <section id="way" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="07" label="The Datamarcos way" />
          <h2>How the program and placement support work together</h2>
          <p className="fde-ad-sub">{PLACEMENT_DISCLAIMER}</p>
          <ul className="fde-ad-way">
            <li>
              <h3>Structured curriculum</h3>
              <p>A 22-week roadmap in five phases, designed around how FDEs actually work: discovery, build, security, deployment and handover.</p>
            </li>
            <li>
              <h3>Live, mentor-led classes</h3>
              <p>Weekend live sessions, a weekday evening lab, guided assignments and four client-style engagements you defend to a panel.</p>
            </li>
            <li>
              <h3>Career track</h3>
              <ul className="fde-ad-way-steps">
                {fdeCareerTimeline.map((item) => (
                  <li key={item.weeks}><strong>{item.weeks}.</strong> {item.milestone} — {item.output}</li>
                ))}
              </ul>
            </li>
            <li>
              <h3>Placement support</h3>
              <ul className="fde-ad-way-steps">
                {placementSteps.map((step) => (
                  <li key={step.title}><strong>{step.title}.</strong> {step.body} <em>({step.where})</em></li>
                ))}
              </ul>
              <p><a href={PLACEMENT_URL} target="_blank" rel="noreferrer">{PLACEMENT_LABEL}</a></p>
            </li>
          </ul>
          <div className="fde-ad-paths">
            <h3>Roles you become ready for</h3>
            <ul className="fde-ad-chips">{fdeReadyRoles.map((role) => <li key={role}>{role}</li>)}</ul>
            <ul className="fde-ad-hiring">
              {fdeHiringPaths.map((path) => (
                <li key={path.title}><strong>{path.title}.</strong> {path.body}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="stories" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="08" label="Success stories" />
          <h2>Our learners and their own words</h2>
          <p className="fde-ad-sub">Each story is published only when the learner&apos;s own words cover the start, the work and where they are now. Quotes are verbatim.</p>
          <ul className="fde-ad-stories">
            {transformationStories.map((story) => (
              <li key={story.id}>
                <article>
                  <p className="fde-ad-story-track">{story.track}</p>
                  <h3>{story.name}</h3>
                  <ol>
                    <li><span>Start</span> {story.start}</li>
                    <li><span>Build</span> {story.build}</li>
                    <li><span>Land</span> {story.land}</li>
                  </ol>
                  <blockquote>“{story.quote}”</blockquote>
                  <a href={story.link.href} target={story.link.href.startsWith("http") ? "_blank" : undefined} rel={story.link.href.startsWith("http") ? "noreferrer" : undefined}>
                    {story.link.label}
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <p className="fde-ad-center"><Link href="/placements">See all learner outcomes</Link></p>
        </div>
      </section>

      <section id="fees" className="fde-ad-section">
        <div className="fde-ad-wrap">
          <SectionBadge num="09" label="Fees & enrolment" />
          <h2>Fees and enrolment</h2>
          <p className="fde-ad-sub">
            Program fee is shown only in this section. {NEXT_COHORT_STARTS}. {REFUND_LABEL} — read the{" "}
            <Link href={REFUND_POLICY_PATH}>refund policy</Link>. {PLACEMENT_DISCLAIMER}
          </p>
          <div className="fde-ad-fees">
            <FeesEnrolment slug="forward-deployed-ai-engineer" />
          </div>
        </div>
      </section>

      <section id="faq" className="fde-ad-section fde-ad-faq">
        <div className="fde-ad-wrap">
          <h2>Frequently asked questions</h2>
          <FdeAdFaq faqs={faqs} />
        </div>
      </section>

      <section id="apply" className="fde-ad-section fde-ad-final">
        <div className="fde-ad-wrap fde-ad-final-grid">
          <div>
            <h2>Ready to become an FDE?</h2>
            <p>Build AI, solve real problems, and practise the customer-facing half of the job — with live mentors and a portfolio of four engagements.</p>
            <p className="fde-ad-cohort">{NEXT_COHORT_STARTS}</p>
            <p className="fde-ad-fine">{REFUND_LABEL}. {PLACEMENT_DISCLAIMER}</p>
          </div>
          <InlineLeadForm
            variant="card"
            course={FDE_COURSE}
            lockCourse
            cta="FDE ad LP final - Request a callback"
            submitLabel="Request a callback"
            formId="fde_ad_lp_callback"
            idPrefix="fdead"
            title="Request a callback"
            intro="Share your details and a counsellor will call you about the Forward Deployed AI Engineer program."
            benefits={[NEXT_COHORT_STARTS, REFUND_LABEL, "Brochure sent after you submit"]}
          />
        </div>
      </section>

      <footer className="fde-ad-foot">
        <div className="fde-ad-wrap fde-ad-foot-grid">
          <div>
            <Logo />
            <p>{site.tagline}</p>
            <p>{site.location}</p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a></p>
          </div>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/placements">Learner outcomes</Link></li>
            <li><Link href="/programs/forward-deployed-ai-engineer">Full course page</Link></li>
            <li><Link href={REFUND_POLICY_PATH}>{REFUND_LABEL}</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
        <p className="fde-ad-copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
