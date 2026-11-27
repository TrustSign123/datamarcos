"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ImageLoader } from "next/image";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ArrowUpRight, Linkedin, Play, X } from "lucide-react";
import type { LearnerVideo } from "@/config/home";

function videoLinkLabel(video: LearnerVideo): string {
  if (video.urlLabel) return video.urlLabel;
  if (video.url?.includes("linkedin.com")) return "View on LinkedIn";
  if (video.url?.includes("instagram.com")) return "Watch on Instagram";
  return "View source";
}

const posterLoader: ImageLoader = ({ src, width }) => {
  if (!src.endsWith(".webp")) return src;
  const base = src.slice(0, -5);
  if (width <= 480) return `${base}-480.webp`;
  if (width <= 640) return `${base}-640.webp`;
  return src;
};

/**
 * Click-to-play learner video (facade). The poster is shown until a click; the player
 * is created only then, inside a lightbox, so nothing heavy loads on page view.
 * Instagram reels use the official embed in the modal (with a clear fallback link).
 */
export function LearnerVideoCard({ video }: { video: LearnerVideo }) {
  const [open, setOpen] = useState(false);
  const linkedIn = Boolean(video.url?.includes("linkedin.com"));
  const instagram = video.kind === "instagram";

  return (
    <article className="dmh-reel">
      <div className="dmh-reel-media">
        <button
          type="button"
          className="dmh-reel-poster"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${video.course ? `${video.course}: ` : ""}play ${video.name}'s feedback video`}
        >
          <Image
            src={video.poster}
            alt=""
            fill
            sizes="(max-width: 700px) 78vw, (max-width: 1100px) 30vw, 240px"
            loader={posterLoader}
          />
          <span className="dmh-reel-shade" aria-hidden="true" />
          <span className="dmh-reel-play" aria-hidden="true">
            <Play size={26} fill="currentColor" />
          </span>
          {video.course ? <span className="dmh-reel-course">{video.course}</span> : null}
          <span className="dmh-reel-meta">
            <b>{video.name}</b>
            <small>{video.role}</small>
          </span>
        </button>
      </div>
      <div className="dmh-reel-body">
        {video.headline ? <p className="dmh-reel-headline">{video.headline}</p> : null}
        {video.quote ? <blockquote>“{video.quote}”</blockquote> : <span className="dmh-reel-quote-slot" aria-hidden="true" />}
        <div className="dmh-reel-foot">
          <p className="dmh-reel-person">
            <b>{video.name}</b>
            <small>{video.role}</small>
          </p>
          <div className="dmh-reel-actions">
            <button type="button" className="dmh-reel-watch" onClick={() => setOpen(true)}>
              <Play size={13} fill="currentColor" aria-hidden="true" /> Watch
            </button>
            {video.url ? (
              <a className="dmh-reel-link" href={video.url} target="_blank" rel="noreferrer">
                {videoLinkLabel(video)} {linkedIn ? <Linkedin size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {open ? (
        <LearnerVideoModal video={video} onClose={() => setOpen(false)} instagram={instagram} linkedIn={linkedIn} />
      ) : null}
    </article>
  );
}

function LearnerVideoModal({
  video,
  onClose,
  instagram,
  linkedIn
}: {
  video: LearnerVideo;
  onClose: () => void;
  instagram: boolean;
  linkedIn: boolean;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const vertical = instagram || Boolean(video.vertical);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const focusables = () => {
      const root = panelRef.current;
      if (!root) return [] as HTMLElement[];
      return Array.from(root.querySelectorAll<HTMLElement>("button, [href], video, iframe")).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
      );
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  return createPortal(
    <div
      className="dmh-vmodal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`dmh-vmodal-panel${vertical ? " is-vertical" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="dmh-vmodal-bar">
          <p id={titleId} className="dmh-vmodal-title">
            <b>{video.name}</b>
            {video.course ? <span>{video.course}</span> : null}
          </p>
          <button ref={closeRef} type="button" className="dmh-vmodal-close" onClick={onClose} aria-label="Close video">
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>
        <div className={`dmh-vmodal-player${vertical ? " is-vertical" : ""}`}>
          {instagram ? (
            <iframe
              title={`${video.name} – learner feedback video`}
              src={`https://www.instagram.com/reel/${video.source}/embed/`}
              allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video src={video.source} poster={video.poster} controls autoPlay playsInline preload="metadata" />
          )}
        </div>
        {video.url ? (
          <a className="dmh-vmodal-source" href={video.url} target="_blank" rel="noreferrer">
            {videoLinkLabel(video)} {linkedIn ? <Linkedin size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}
          </a>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
