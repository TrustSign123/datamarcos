import Image from "next/image";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import {
  DEEPESH_LINKEDIN,
  OUTCOMES_DISCLAIMER,
  OUTCOMES_PILL,
  learnerStories,
  orgLogos,
  outcomeStats,
  type LearnerStory
} from "@/config/home";

function StoryCard({ story }: { story: LearnerStory }) {
  return (
    <figure className={`dma-story dma-accent-${story.accent}`}>
      <figcaption className="dma-story-head">
        {story.image ? (
          <Image className="dma-avatar" src={story.image} alt="" width={48} height={48} sizes="48px" />
        ) : (
          <span className="dma-avatar dma-avatar-initials" aria-hidden="true">{story.initials}</span>
        )}
        <span className="dma-story-who">
          <b>{story.name}</b>
          <small>{story.company ? `${story.role} (${story.company})` : story.role}</small>
        </span>
      </figcaption>

      {story.move && (
        <div className="dma-move" aria-label={`Before: ${story.move.before}. After: ${story.move.after}.`}>
          <div className="dma-move-side">
            <span className="dma-move-label">Before</span>
            <strong>{story.move.before}</strong>
            {story.move.beforeOrg && <small>{story.move.beforeOrg}</small>}
          </div>
          <div className="dma-move-mid" aria-hidden="true">
            <span className="dma-move-badge">{story.move.badge}</span>
            <ArrowRight size={18} />
          </div>
          <div className="dma-move-side dma-move-after">
            <span className="dma-move-label">After</span>
            <strong>{story.move.after}</strong>
            {story.move.afterOrg && <small>{story.move.afterOrg}</small>}
          </div>
        </div>
      )}

      <blockquote className="dma-quote">“{story.quote}”</blockquote>

      <div className="dma-story-foot">
        <span className="dma-context">{story.context}</span>
        <a
          className="dma-verify"
          href={story.verify.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${story.verify.label}: ${story.name}`}
        >
          <BadgeCheck size={15} aria-hidden="true" /> {story.verify.label}
        </a>
      </div>
    </figure>
  );
}

/** Alumni outcomes / learner report: reach stats, organisation strip and verified learner stories. */
export function AlumniOutcomes() {
  const logos = [...orgLogos, ...orgLogos];
  const learners = learnerStories.filter((story) => story.kind !== "peer");
  const peers = learnerStories.filter((story) => story.kind === "peer");
  return (
    <div className="dma">
      <div className="dma-report">
        <p className="dma-pill"><ShieldCheck size={14} aria-hidden="true" /> {OUTCOMES_PILL}</p>
        <dl className="dma-stats">
          {outcomeStats.map((stat) => (
            <div key={stat.label} className={`dma-stat dma-stat-${stat.kind}`} title={stat.source}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="dma-disclaimer">{OUTCOMES_DISCLAIMER}</p>
      </div>

      <div className="dma-network" aria-labelledby="dma-network-title">
        <p className="dma-network-kicker">Company network</p>
        <h3 id="dma-network-title">Where our learners work &amp; teams we’ve trained</h3>
        <div className="dma-logos" role="list" aria-label="Organisations">
          <div className="dma-logos-track">
            {logos.map((logo, index) => {
              const clone = index >= orgLogos.length;
              return (
                <span
                  key={`${logo.name}-${index}`}
                  role={clone ? undefined : "listitem"}
                  aria-hidden={clone || undefined}
                  className={`dma-logo dma-logo-${logo.style ?? "bold"}`}
                >
                  {logo.name}
                </span>
              );
            })}
          </div>
        </div>
        <p className="dma-network-note">Based on learners’ own LinkedIn profiles, corporate trainings and Deepesh Mishra’s career. Names are trademarks of their owners and do not imply endorsement.</p>
      </div>

      <div className="dma-stories-head">
        <h3>Learner report: in their own words</h3>
        <a className="dma-verify dma-verify-all" href={DEEPESH_LINKEDIN} target="_blank" rel="noreferrer">
          <BadgeCheck size={15} aria-hidden="true" /> All recommendations on LinkedIn
        </a>
      </div>
      <div className="dma-stories">
        {learners.map((story) => <StoryCard key={story.id} story={story} />)}
      </div>
      {peers.map((peer) => (
        <figure className="dma-peer" key={peer.id}>
          <span className="dma-peer-label">Industry peer</span>
          <blockquote>“{peer.quote}”</blockquote>
          <figcaption>
            <cite><b>{peer.name}</b> · {peer.company ? `${peer.role}, ${peer.company}` : peer.role}</cite>{" "}
            <a className="dma-verify" href={peer.verify.href} target="_blank" rel="noreferrer" aria-label={`${peer.verify.label}: ${peer.name}`}>
              <BadgeCheck size={15} aria-hidden="true" /> {peer.verify.label}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
