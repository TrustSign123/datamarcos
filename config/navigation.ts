export const atsCheckUrl = "https://resume2builder.com/ats-check";

export const navigation = [
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" }
];

export const mobileNavigation = [
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Become a Trainer", href: "/become-a-trainer" },
  { label: "Contact", href: "/contact" }
];

export const resourceMenu = [
  { title: "ATS Resume Check", description: "See how applicant tracking systems read your resume.", href: atsCheckUrl, external: true },
  { title: "Guides", description: "Sourced guides on AI, data and FDE careers and courses.", href: "/guides", external: false },
  { title: "Interview Prep", description: "Real scenario questions and answers for data and AI roles.", href: "/resources/interview-prep", external: false }
  // Roadmaps, Articles, Webinars and Case Studies are placeholders: removed from nav and noindexed (SEO pass 2026-10-26).
];
