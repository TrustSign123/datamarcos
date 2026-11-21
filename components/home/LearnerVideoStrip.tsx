"use client";

import { useEffect, useRef, useState } from "react";
import { LearnerVideoCard } from "@/components/home/LearnerVideoCard";
import type { LearnerVideo } from "@/config/home";

/**
 * Homepage "Hear from our learners" strip. Desktop: one row of cards. Tablet/mobile: a swipeable
 * scroll-snap row with dot indicators (same pattern as the flagship program carousel).
 * Each card is click-to-play: posters only, MP4s use preload="none", Instagram iframes load on tap.
 */
export function LearnerVideoStrip({ videos }: { videos: LearnerVideo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setActive(atEnd ? videos.length - 1 : Math.max(0, Math.min(videos.length - 1, Math.round(el.scrollLeft / step))));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [videos.length]);

  const go = (i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <>
      <div className="ds-vstrip" ref={ref}>
        {videos.map((video) => <LearnerVideoCard key={video.id} video={video} />)}
      </div>
      <div className="ds-vdots" role="tablist" aria-label="Learner videos">
        {videos.map((video, i) => (
          <button key={video.id} type="button" role="tab" aria-selected={active === i} aria-label={`Show ${video.name}'s video`} onClick={() => go(i)}><span /></button>
        ))}
      </div>
    </>
  );
}
