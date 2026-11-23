/**
 * Trainers shown on the Forward Deployed AI Engineer Meta-ads landing page
 * (/fde-ai-engineer).
 *
 * HOW TO ADD A TRAINER
 *  1. Put the photo in /public/images/trainers/ as a webp (square, ~600–800px).
 *  2. Fill one of the placeholder slots below, or append a new object, with at
 *     least `id`, `name` and `title`. Empty slots (no `name`) are not rendered.
 *  3. Only add facts that are already on the site or confirmed in writing.
 *     Do not invent titles, employers, credentials or quotes.
 *
 * Order is display order: Deepesh, Eshank Agarwal (homepage spelling), Anshu Pandey, then any later additions.
 */

import { DEEPESH_LINKEDIN } from "@/config/home";
import { site } from "@/config/site";

export type FdeAdTrainer = {
  id: string;
  name: string;
  /** Short badge, copied from an existing site source when there is one. */
  tag?: string;
  /** One-line role / title. Required for a slot to render. */
  title: string;
  /** Extra verified lines (location, tenure, published bio sentences). */
  lines?: string[];
  photo?: string;
  photoAlt?: string;
  linkedin?: string;
  /** Organisation page, when a personal LinkedIn is not provided. */
  companyLinkedIn?: string;
  companyLinkedInLabel?: string;
  aboutHref?: string;
  aboutLabel?: string;
};

/** A slot with no `name` is a reserved place for a future trainer and stays hidden. */
export type FdeAdTrainerSlot = Partial<FdeAdTrainer> & { id: string };

export const fdeAdTrainerSlots: FdeAdTrainerSlot[] = [
  {
    id: "deepesh-kumar-mishra",
    name: "Deepesh Kumar Mishra",
    tag: "Founder & CEO",
    title: "Founder & CEO, Datamarcos",
    lines: [
      "BITS Pilani alumnus · Solution architect · Corporate trainer",
      "18+ years in technology. Has trained 25,000+ professionals across 200+ organizations."
    ],
    photo: site.founder.image,
    photoAlt: site.founder.imageAlt,
    linkedin: DEEPESH_LINKEDIN,
    aboutHref: "/about",
    aboutLabel: "About Deepesh"
  },
  {
    // Name, tag, title, photo and LinkedIn are copied exactly from the homepage mentors section.
    id: "eshank-agarwal",
    name: "Eshank Agarwal",
    tag: "Industry expert · GenAI",
    title: "Founder & CEO, GenAI consultant and Data Science corporate trainer.",
    photo: "/images/trainers/eshank-agarwal.jpeg",
    photoAlt: "Eshank Agarwal",
    linkedin: "https://www.linkedin.com/in/eshankagarwal/"
  },
  {
    // Photo confirmed as Anshu Pandey (user, 23 Nov 2026). Only these facts are confirmed: role, company, location, tenure, company LinkedIn.
    id: "anshu-pandey",
    name: "Anshu Pandey",
    tag: "Co-Founder",
    title: "Co-Founder, Blue Data Digital SDN BHD",
    lines: ["Kuala Lumpur, Malaysia · Nov 2023 to present"],
    photo: "/images/trainers/anshu-pandey.webp",
    photoAlt: "Anshu Pandey",
    companyLinkedIn: "https://www.linkedin.com/company/102943915/",
    companyLinkedInLabel: "Company LinkedIn"
  },
  // --- Placeholder slots. Add name, title and (optional) photo to show them. ---
  { id: "slot-4" },
  { id: "slot-5" },
  { id: "slot-6" }
];

export function visibleFdeAdTrainers(): FdeAdTrainer[] {
  return fdeAdTrainerSlots.filter((slot): slot is FdeAdTrainer => Boolean(slot.name && slot.title));
}
