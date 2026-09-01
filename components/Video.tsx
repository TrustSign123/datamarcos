"use client";

import { Play, Volume2, Maximize2 } from "lucide-react";
import { Testimonial } from "@/config/testimonials";
import { trackEvent } from "@/lib/analytics";

export function VideoPlayer({ testimonial }: { testimonial: Testimonial }) {
  const playable = testimonial.videoUrl && !testimonial.videoUrl.includes("[");

  if (!playable) {
    return (
      <div className="empty-media card">
        <span>Video testimonial slot</span>
        <p>Real YouTube, Vimeo or MP4 testimonials will appear here once uploaded.</p>
      </div>
    );
  }

  if (testimonial.type === "mp4") {
    return <video controls preload="metadata" src={testimonial.videoUrl} poster={testimonial.thumbnailUrl} style={{ borderRadius: 8, width: "100%" }} />;
  }

  return <iframe title={`${testimonial.name} testimonial`} src={testimonial.videoUrl} loading="lazy" allow="fullscreen; picture-in-picture" style={{ border: 0, borderRadius: 8, width: "100%", aspectRatio: "16 / 9" }} />;
}

export function VideoTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card">
      <VideoPlayer testimonial={testimonial} />
      <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{testimonial.quote}</p>
      <strong>{testimonial.name}</strong>
      <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>{testimonial.role}, {testimonial.company}</p>
      <div className="hero-actions" aria-label="Video controls preview">
        <button className="button secondary" type="button" onClick={() => trackEvent("video_play", { id: testimonial.id })}><Play size={16} /> Play</button>
        <button className="button secondary" type="button"><Volume2 size={16} /> Mute</button>
        <button className="button secondary" type="button"><Maximize2 size={16} /> Fullscreen</button>
      </div>
    </article>
  );
}

export function VideoCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return <div className="grid three">{testimonials.map((item) => <VideoTestimonial key={item.id} testimonial={item} />)}</div>;
}

export function VideoModal() {
  return null;
}
