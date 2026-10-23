/**
 * Lead-capture popup configuration.
 *
 * Submissions go to the Google Apps Script web app deployed from the
 * "Datamarcos Leads" sheet. Set NEXT_PUBLIC_LEAD_ENDPOINT in Vercel
 * (Project → Settings → Environment Variables) or paste the /exec URL into
 * LEAD_ENDPOINT below (the env var wins when set). If both are empty the popup still opens and shows
 * a friendly "please WhatsApp/email us" message on submit.
 */
export const LEAD_ENDPOINT = "https://script.google.com/macros/s/AKfycbyFT9ZQ8oeRL4VKPVOTubWh__GffnEJQ8Fu6svFoQNDtX-0MpQ9sHrNNoSWlUsp6rU/exec";

export const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || LEAD_ENDPOINT;

export const LEAD_COURSES = [
  "Generative AI & Agentic AI Engineer",
  "Advance Data Engineering with Applied GenAI & Agentic AI",
  "Applied Agentic AI",
  "Forward Deployed AI Engineer"
] as const;

export const LEAD_NOT_SURE = "Not sure yet";

/** Program slug → course name, used to preselect the course on program pages. */
const slugToCourse: Record<string, (typeof LEAD_COURSES)[number]> = {
  "genai-agentic-ai-engineer": "Generative AI & Agentic AI Engineer",
  "advance-data-engineering-genai": "Advance Data Engineering with Applied GenAI & Agentic AI",
  "advanced-ai-data-engineering-agentic-ai": "Advance Data Engineering with Applied GenAI & Agentic AI",
  "applied-agentic-ai-certification": "Applied Agentic AI",
  "forward-deployed-ai-engineer": "Forward Deployed AI Engineer",
  "forward-deployed-engineer": "Forward Deployed AI Engineer",
  "forward-deployed-engineering": "Forward Deployed AI Engineer"
};

/**
 * Brochure / syllabus PDF per course. Every link to /brochures/*.pdf on the site is gated by the
 * lead popup (see components/lead/LeadModal.tsx); the file is released only after a successful submit.
 * A course without a file gets a "we'll WhatsApp/email it" success message instead.
 */
export const COURSE_BROCHURES: Partial<Record<(typeof LEAD_COURSES)[number], string>> = {
  "Generative AI & Agentic AI Engineer": "/brochures/DataMarcos_GenAI_Agentic_AI_Engineer_Brochure.pdf",
  "Advance Data Engineering with Applied GenAI & Agentic AI": "/brochures/datamarcos-advance-data-engineering-genai-brochure.pdf",
  "Applied Agentic AI": "/brochures/DataMarcos_Applied_Agentic_AI_Brochure.pdf",
  "Forward Deployed AI Engineer": "/brochures/Datamarcos_Forward_Deployed_AI_Engineer_Brochure.pdf"
};

/** Older / alternate files that still belong to a course (used to work out the course from a link). */
const extraBrochureCourses: Record<string, (typeof LEAD_COURSES)[number]> = {
  "/brochures/Datamarcos_FDE_Program_Landing_Page.pdf": "Forward Deployed AI Engineer",
  "/brochures/Datamarcos_Applied_Agentic_AI_Certification_Brochure.pdf": "Applied Agentic AI"
};

export function brochureForCourse(course?: string) {
  return course ? COURSE_BROCHURES[course as (typeof LEAD_COURSES)[number]] : undefined;
}

export function courseForBrochure(href?: string | null) {
  if (!href) return undefined;
  let path = href;
  try { path = new URL(href, "https://www.datamarcos.com").pathname; } catch { /* keep as-is */ }
  path = decodeURIComponent(path);
  const match = Object.entries(COURSE_BROCHURES).find(([, file]) => file === path);
  return match ? match[0] : extraBrochureCourses[path];
}

export function courseForSlug(slug?: string) {
  return slug ? slugToCourse[slug] : undefined;
}

/** Works for /programs/<slug> and the /lp/<slug> landing pages. */
export function courseForPath(pathname: string) {
  const match = pathname.match(/^\/(?:programs|lp)\/([^/?#]+)/);
  return courseForSlug(match?.[1]);
}
