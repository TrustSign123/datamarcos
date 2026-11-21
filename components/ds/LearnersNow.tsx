import Image from "next/image";
import { Linkedin } from "lucide-react";
import { learnersNow } from "@/config/home";
import { Placeholder } from "@/components/ds/Placeholder";

/** "Where our learners are today": current role exactly as each learner's public LinkedIn shows. Not a placement claim. */
export function LearnersNow() {
  return (
    <div className="ds-now">
      <h3 className="ds-subhead">Where our learners are today</h3>
      <div className="ds-now-grid">
        {learnersNow.map((l) => (
          <a key={l.name} className="ds-now-card" href={l.linkedin} target="_blank" rel="noreferrer">
            {l.image
              ? <Image className="ds-avatar ds-avatar-lg" src={l.image} alt={l.name} width={56} height={56} sizes="56px" />
              : <span className="ds-avatar ds-avatar-lg ds-avatar-initials" aria-hidden="true">{l.initials}</span>}
            <span className="ds-now-copy">
              <small>Datamarcos learner · now</small>
              <b>{l.name}</b>
              <span>{l.role}</span>
              <strong>{l.org}</strong>
            </span>
            <span className="ds-now-li"><Linkedin size={16} aria-hidden="true" /> Profile</span>
          </a>
        ))}
        {learnersNow.some((l) => !l.image) && <Placeholder className="ds-now-card" label="Learner photos" need="Pravince’s headshot (confirmed by Deepesh) must be re-shared: the file did not reach the box. Drop it in /public/images/student-placements/pravince-kumar.webp and set `image` in config/home.ts" />}
      </div>
      <p className="ds-fine">Current roles as shown on each learner’s public LinkedIn profile. Not a placement claim.</p>
    </div>
  );
}
