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

export function courseForSlug(slug?: string) {
  return slug ? slugToCourse[slug] : undefined;
}

/** Works for /programs/<slug> and the /lp/<slug> landing pages. */
export function courseForPath(pathname: string) {
  const match = pathname.match(/^\/(?:programs|lp)\/([^/?#]+)/);
  return courseForSlug(match?.[1]);
}
