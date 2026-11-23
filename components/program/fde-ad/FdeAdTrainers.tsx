"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { visibleFdeAdTrainers, type FdeAdTrainer } from "@/config/fde-ad-trainers";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}

function TrainerCard({ trainer }: { trainer: FdeAdTrainer }) {
  const profileHref = trainer.linkedin || trainer.companyLinkedIn;
  return (
    <article className="fde-ad-trainer">
      <div className="fde-ad-trainer-photo">
        {trainer.photo ? (
          <Image
            src={trainer.photo}
            alt={trainer.photoAlt || trainer.name}
            width={480}
            height={560}
            sizes="220px"
          />
        ) : (
          <span className="fde-ad-trainer-initials" aria-hidden="true">{initials(trainer.name)}</span>
        )}
      </div>
      <h3 className="fde-ad-trainer-name">
        <span>{trainer.name}</span>
        {profileHref ? (
          <a href={profileHref} target="_blank" rel="noreferrer" aria-label={`${trainer.name} on LinkedIn`}>
            <Linkedin size={16} aria-hidden="true" />
          </a>
        ) : null}
      </h3>
      <p className="fde-ad-trainer-title">{trainer.title}</p>
      {trainer.lines?.slice(0, 1).map((line) => <p key={line} className="fde-ad-trainer-line">{line}</p>)}
      {trainer.aboutHref ? (
        <Link className="fde-ad-trainer-about" href={trainer.aboutHref}>{trainer.aboutLabel || "About"}</Link>
      ) : null}
    </article>
  );
}

export function FdeAdTrainers() {
  const trainers = visibleFdeAdTrainers();
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>(".fde-ad-trainer");
    const amount = (card?.offsetWidth ?? 220) + 20;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="fde-ad-trainer-carousel">
      <div className="fde-ad-trainer-arrows">
        <button type="button" aria-label="Previous trainers" onClick={() => scrollByCard(-1)}><ChevronLeft size={18} /></button>
        <button type="button" aria-label="Next trainers" onClick={() => scrollByCard(1)}><ChevronRight size={18} /></button>
      </div>
      <div className="fde-ad-trainers" ref={scroller}>
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}
