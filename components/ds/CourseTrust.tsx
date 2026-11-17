import Link from "next/link";
import { ArrowRight, ArrowUpRight, PhoneCall, RotateCcw, ShieldCheck } from "lucide-react";
import { SectionHead } from "@/components/ds/Section";
import { StoryCard } from "@/components/ds/StoryCard";
import { LearnersNow } from "@/components/ds/LearnersNow";
import { WhyDatamarcos } from "@/components/ds/WhyDatamarcos";
import { learnerStories } from "@/config/home";
import { PLACEMENT_DISCLAIMER, PLACEMENT_URL, placementSteps } from "@/config/placement";

/** Shared course-page proof blocks: why us, learner stories, the placement journey. Same content as the homepage. */
export function CourseProof({ course, ctaPrefix, courseName }: { course: string; ctaPrefix: string; courseName: string }) {
  const stories = learnerStories.filter((story) => story.kind !== "peer").slice(0, 3);
  return (
    <div className="ds-course-proof">
      <WhyDatamarcos variant="course" title={<>Why learn {courseName} <em>with us.</em></>} />
      <section className="ds-section ds-soft" id="learner-stories" aria-labelledby={`${ctaPrefix}-stories-title`}>
        <div className="ds-wrap">
          <SectionHead id={`${ctaPrefix}-stories-title`} eyebrow="Learner stories" title={<>Learners who trained <em>with Deepesh.</em></>} sub="In their own words. Every story links to its source." />
          <div className="ds-stories">{stories.map((story) => <StoryCard key={story.id} story={story} />)}</div>
          <LearnersNow />
          <p className="ds-soft-cta"><button type="button" className="ds-link" data-dm-lead data-course={course} data-cta={`${ctaPrefix} stories - Talk to a counsellor`}>Ask a counsellor about learner journeys <ArrowRight size={14} aria-hidden="true" /></button></p>
          <p className="ds-fine">Stories are shared by learners. No placement, salary or hike is guaranteed; outcomes depend on each learner.</p>
        </div>
      </section>
      <section className="ds-section" id="placement" aria-labelledby={`${ctaPrefix}-placement-title`}>
        <div className="ds-wrap">
          <SectionHead id={`${ctaPrefix}-placement-title`} eyebrow="Placement support" title={<>Your path <em>from class to job.</em></>} sub="Five steps. Real support at each one." />
          <ol className="ds-journey">
            {placementSteps.map((step, index) => (
              <li key={step.title}><span className="ds-journey-n">{index + 1}</span><small>{step.where}</small><h3>{step.title}</h3><p>{step.body}</p></li>
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
    </div>
  );
}

/** Risk reducers shown right above Fees & enrolment. */
export function RiskStrip({ course, ctaPrefix, india }: { course: string; ctaPrefix: string; india: boolean }) {
  return (
    <div className="ds-risk" role="note" aria-label="Before you pay">
      <div className="ds-wrap">
        <span><RotateCcw size={17} aria-hidden="true" /> <Link href="/refund-policy">7-day refund policy</Link></span>
        <span><ShieldCheck size={17} aria-hidden="true" /> {india ? "EMI options, subject to approval" : "Flexible instalments, subject to approval"}</span>
        <span><PhoneCall size={17} aria-hidden="true" /> <button type="button" className="ds-link" data-dm-lead data-course={course} data-cta={`${ctaPrefix} fees - Free counselling call`}>Free counselling call first</button></span>
      </div>
    </div>
  );
}
