import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { LearnerStory } from "@/config/home";

/** Learner success story: verbatim quote, before → after only where the learner's own source says so, and a verify link. */
export function StoryCard({ story }: { story: LearnerStory }) {
  return (
    <figure className="ds-story">
      <figcaption className="ds-story-who">
        {story.image
          ? <Image className="ds-avatar" src={story.image} alt={`${story.name}, Datamarcos learner`} width={44} height={44} sizes="44px" />
          : <span className="ds-avatar ds-avatar-initials" aria-hidden="true">{story.initials}</span>}
        <span><b>{story.name}</b><small>{story.company ? `${story.role} · ${story.company}` : story.role}</small></span>
      </figcaption>
      <blockquote>“{story.quote}”</blockquote>
      {story.move && (
        <div className="ds-move" aria-label={`Before: ${story.move.before}. After: ${story.move.after}.`}>
          <span><small>Before</small><b>{story.move.before}</b></span>
          <ArrowRight size={16} aria-hidden="true" />
          <span className="ds-move-after"><small>After</small><b>{story.move.after}{story.move.afterOrg ? `, ${story.move.afterOrg}` : ""}</b></span>
        </div>
      )}
      <a className="ds-verify" href={story.verify.href} target="_blank" rel="noreferrer" aria-label={`${story.verify.label}: ${story.name}`}><BadgeCheck size={15} aria-hidden="true" /> {story.verify.label}</a>
    </figure>
  );
}
