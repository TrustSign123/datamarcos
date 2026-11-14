"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Play } from "lucide-react";
import type { LearnerVideo } from "@/config/home";

function videoLinkLabel(video: LearnerVideo): string {
  if (video.urlLabel) return video.urlLabel;
  if (video.url?.includes("linkedin.com")) return "View on LinkedIn";
  if (video.url?.includes("instagram.com")) return "Watch on Instagram";
  return "View source";
}

/**
 * Click-to-play learner video. Nothing from Instagram loads until the visitor presses play,
 * so the homepage stays fast. Self-hosted MP4s (kind "video") use preload="none" the same way.
 * Playback starts only after a click; the poster stays on screen until then (no muted autoplay).
 */
export function LearnerVideoCard({ video }: { video: LearnerVideo }) {
  const [playing, setPlaying] = useState(false);
  const vertical = Boolean(video.vertical);
  const linkedIn = Boolean(video.url?.includes("linkedin.com"));

  return (
    <article className={`dmh-reel${vertical ? " is-vertical" : ""}`}>
      <div className={`dmh-reel-media${vertical ? " is-vertical" : ""}`}>
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
            <Image src={video.poster} alt={`${video.name} feedback video thumbnail`} fill sizes="(max-width: 700px) 86vw, 300px" />
            <span className="dmh-reel-play" aria-hidden="true"><Play size={26} fill="currentColor" /></span>
            {video.course && <span className="dmh-reel-course">{video.course}</span>}
          </button>
        )}
      </div>
      <div className="dmh-reel-body">
        {video.headline ? <p className="dmh-reel-headline">{video.headline}</p> : null}
        {video.quote ? <blockquote>“{video.quote}”</blockquote> : null}
        <p className="dmh-reel-person"><b>{video.name}</b><small>{video.role}</small></p>
        {video.url && (
          <a className="dmh-reel-link" href={video.url} target="_blank" rel="noreferrer">
            {videoLinkLabel(video)} {linkedIn ? <Linkedin size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}
          </a>
        )}
      </div>
    </article>
  );
}
