"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** `role` is optional: leave it out when the learner has not confirmed one (the chip then reads "Datamarcos learner" only). */
export type SpotlightLearner = { name: string; role?: string; employer?: string; image: string; link: string };

/** Hero story card: cycles through real Datamarcos learners (pauses on hover / reduced motion). */
export function LearnerSpotlight({ learners, interval = 4500 }: { learners: SpotlightLearner[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || learners.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % learners.length), interval);
    return () => window.clearTimeout(timer);
  }, [index, paused, learners.length, interval]);

  return (
    <div className="dmh-spotlight" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="dmh-spotlight-bars" role="tablist" aria-label="Learner stories">
        {learners.map((learner, i) => (
          <button key={learner.name} type="button" role="tab" aria-selected={i === index} aria-label={`Show ${learner.name}`} onClick={() => setIndex(i)}
            className={i === index ? "active" : i < index ? "seen" : ""} style={{ ["--dmh-interval" as string]: `${interval}ms` }}>
            <span className={paused ? "paused" : ""} />
          </button>
        ))}
      </div>
      {learners.map((learner, i) => (
        <a key={learner.name} href={learner.link} target="_blank" rel="noopener noreferrer" className={`dmh-spotlight-slide${i === index ? " active" : ""}`} aria-hidden={i !== index} tabIndex={i === index ? 0 : -1}>
          <Image src={learner.image} alt={learner.name} fill sizes="(max-width: 900px) 92vw, 440px" priority={i === 0} />
          <span className="dmh-spotlight-shade" />
          <strong className="dmh-spotlight-name">{learner.name}</strong>
          <span className="dmh-spotlight-chip">
            <small>{learner.employer ? "Currently" : "Datamarcos learner"}</small>
            {learner.employer && learner.role ? `${learner.role} at ${learner.employer}` : learner.role}
          </span>
          <span className="dmh-spotlight-tag">Our learner community</span>
        </a>
      ))}
    </div>
  );
}
