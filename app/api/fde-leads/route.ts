import { NextResponse } from "next/server";

type FDELead = {
  programId?: string;
  programSlug?: string;
  programName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  degree?: string;
  graduationYear?: string;
  designation?: string;
  companyName?: string;
  consent?: string;
  website?: string;
  attribution?: Record<string, string>;
};

const requiredFields: (keyof FDELead)[] = [
  "fullName", "email", "phone", "degree", "graduationYear", "designation", "companyName"
];

const programs: Record<string, { slug: string; name: string }> = {
  "advance-data-engineering-genai": {
    slug: "advance-data-engineering-genai",
    name: "Advance Data Engineering with Applied GenAI & Agentic AI"
  },
  "forward-deployed-engineer": {
    slug: "forward-deployed-engineer",
    name: "Forward Deployed AI Engineer - 5-Month Executive Program"
  },
  "forward-deployed-ai-engineer": {
    slug: "forward-deployed-ai-engineer",
    name: "Forward Deployed AI Engineer - GenAI & Agentic AI Program"
  }
};

export async function POST(request: Request) {
  let lead: FDELead;
  try {
    lead = await request.json() as FDELead;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (lead.website) return NextResponse.json({ ok: true });
  const program = lead.programId ? programs[lead.programId] : undefined;
  if (!program || lead.programSlug !== program.slug) {
    return NextResponse.json({ error: "Unknown program selection." }, { status: 400 });
  }
  if (lead.consent !== "yes" || requiredFields.some((field) => typeof lead[field] !== "string" || !lead[field]?.trim())) {
    return NextResponse.json({ error: "Complete every required field and agree to follow-up." }, { status: 400 });
  }

  const webhookUrl = process.env.FDE_GOOGLE_SHEETS_WEBHOOK_URL;
  const sharedToken = process.env.FDE_GOOGLE_SHEETS_SHARED_TOKEN;
  if (!webhookUrl || !sharedToken) {
    return NextResponse.json({ error: "The admissions form is not connected yet. Please try again later or contact DataMarcos." }, { status: 503 });
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    programId: lead.programId,
    programName: program.name,
    fullName: lead.fullName!.trim(),
    email: lead.email!.trim(),
    phone: lead.phone!.trim(),
    degree: lead.degree!.trim(),
    graduationYear: lead.graduationYear!.trim(),
    designation: lead.designation!.trim(),
    companyName: lead.companyName!.trim(),
    consent: lead.consent,
    attribution: lead.attribution || {},
    token: sharedToken
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow"
    });
    if (!response.ok) throw new Error("Sheets webhook request failed.");
    const result = await response.json() as { ok?: boolean };
    if (!result.ok) throw new Error("Sheets did not confirm the submission.");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not save your request. Please try again or contact DataMarcos." }, { status: 502 });
  }
}