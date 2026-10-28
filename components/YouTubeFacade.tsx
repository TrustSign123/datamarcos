"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Lightweight click-to-play YouTube embed (lite-youtube pattern).
 * Renders only a self-hosted poster + play button; the youtube-nocookie iframe (≈1 MB of player JS)
 * is created on click, with autoplay. Fills its parent, so the parent sets the size/aspect ratio.
 */
export function YouTubeFacade({ id, title, poster, width = 1280, height = 720, sizes = "(max-width: 700px) 100vw, 640px", priority = false }: {
  id: string;
  title: string;
  /** Self-hosted poster, full size (e.g. 1280×720 WebP). next/image serves resized copies from it. */
  poster: string;
  width?: number;
  height?: number;
  /** Rendered width of the poster at each breakpoint, so phones don't download the 1280 px file. */
  sizes?: string;
  /** Above the fold and the page's LCP image: preload it with high fetch priority. */
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="yt-facade-frame"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        width={width}
        height={height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="yt-facade" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      <Image src={poster} alt="" width={width} height={height} sizes={sizes} priority={priority} quality={70} />
      <span className="yt-facade-play" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 0 0 6 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" /><path d="M45 24 27 14v20z" fill="#fff" /></svg>
      </span>
    </button>
  );
}
