"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import type { LearnerVideo } from "@/config/home";

/**
 * Click-to-play learner video. Nothing from Instagram loads until the visitor presses play,
 * so the homepage stays fast. Self-hosted MP4s (kind "video") use preload="none" the same way.
 */
export function LearnerVideoCard({ video }: { video: LearnerVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="dmh-reel">
      <div className="dmh-reel-media">
        {playing ? (
          video.kind === "instagram" ? (
            <iframe
              title={`${video.name} – learner feedback video`}
              src={`https://www.instagram.com/reel/${video.source}/embed/`}
              allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            // Starts only after the visitor taps play (a user gesture), never on page load.
            <video src={video.source} poster={video.poster} controls autoPlay playsInline preload="none" />
          )
        ) : (
          <button type="button" className={`dmh-reel-poster${video.kind === "video" ? " is-video" : ""}`} onClick={() => setPlaying(true)} aria-label={`${video.course ? `${video.course}: ` : ""}play ${video.name}'s feedback video`}>
            <Image src={video.poster} alt="" fill sizes="(max-width: 700px) 86vw, 300px" />
            <span className="dmh-reel-play" aria-hidden="true"><Play size={26} fill="currentColor" /></span>
            {video.course && <span className="dmh-reel-course">{video.course}</span>}
          </button>
        )}
      </div>
      <div className="dmh-reel-body">
        <p className="dmh-reel-headline">{video.headline}</p>
        <blockquote>“{video.quote}”</blockquote>
        <p className="dmh-reel-person"><b>{video.name}</b><small>{video.role}</small></p>
        {video.url && (
          <a className="dmh-reel-link" href={video.url} target="_blank" rel="noreferrer">
            Watch on Instagram <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
