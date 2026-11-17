/**
 * Placement journey (blue/white redesign, 17 Nov 2026).
 * Every step restates what is already published on our own sites:
 *  - CareerOS (career.datamarcos.com): verified-capstone entry, live public job feeds, AI mock interviews,
 *    tailored materials and an application tracker. CareerOS says plainly it is placement support, not a job promise.
 *  - Program pages / brochures: weekly career track, resume / LinkedIn / portfolio teardowns,
 *    mock interview loops, referral and outreach playbook.
 * NOTE: Deepesh referred to "placement.datamarcos.com". On 17 Nov 2026 that host had no DNS record (NXDOMAIN),
 * so links point at the live CareerOS host. Change PLACEMENT_URL once placement.datamarcos.com is pointed at it.
 * No placement %, salary or hike figures: none are verified.
 */
export const PLACEMENT_URL = "https://career.datamarcos.com";

export const PLACEMENT_DISCLAIMER = "Placement support, not a placement guarantee. Outcomes depend on each learner and the job market.";

export type PlacementStep = { title: string; body: string; where: string };

export const placementSteps: PlacementStep[] = [
  { title: "Learn live, build real projects", body: "Live mentor-led classes and hands-on projects you can show.", where: "Your program" },
  { title: "Get your capstone verified", body: "An instructor reviews your capstone. Verified work earns the “Capstone verified by Datamarcos” badge.", where: "Datamarcos Learn" },
  { title: "Career prep", body: "Resume, LinkedIn and portfolio reviews, plus mock interview loops.", where: "Career track" },
  { title: "Match live openings", body: "CareerOS matches public AI and data job postings to your skills and lets you practise mock interviews.", where: "CareerOS" },
  { title: "Apply and track", body: "Use the referral and outreach playbook, apply on the employer’s site and track every application to offer.", where: "CareerOS tracker" }
];
