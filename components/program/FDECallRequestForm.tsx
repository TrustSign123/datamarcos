"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { readAttribution, gaEvent, trackEvent } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success" | "error";

export function FDECallRequestForm({
  programId = "forward-deployed-engineer",
  programSlug = "forward-deployed-engineer",
  programName = "Forward Deployed AI Engineer - 5-Month Executive Program"
}: {
  programId?: string;
  programSlug?: string;
  programName?: string;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");
    const form = event.currentTarget;
    const fields = Object.fromEntries(Array.from(new FormData(form), ([key, value]) => [key, String(value)]));
    trackEvent("application_start", { programId, programSlug });

    try {
      const response = await fetch("/api/fde-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, programId, programSlug, programName, attribution: readAttribution() })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Application submission failed.");
      setState("success");
      trackEvent("application_submit", { programId, programSlug });
      gaEvent("generate_lead", { form_id: "fde_call_request", course: programName || programSlug || programId });
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Application submission failed.");
      setState("error");
    }
  }

  return (
    <form className="fde-brochure-form" onSubmit={onSubmit}>
      <div className="fde-form-honeypot" aria-hidden="true"><label htmlFor="fde-website">Website</label><input id="fde-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="fde-form-grid">
        <div className="fde-form-field"><label htmlFor="fde-lead-name">Full name</label><input id="fde-lead-name" name="fullName" autoComplete="name" required placeholder="Your name" /></div>
        <div className="fde-form-field"><label htmlFor="fde-lead-email">Email</label><input id="fde-lead-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></div>
        <div className="fde-form-field"><label htmlFor="fde-lead-phone">Phone number</label><input id="fde-lead-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+91 00000 00000" /></div>
        <div className="fde-form-field"><label htmlFor="fde-lead-degree">Degree</label><input id="fde-lead-degree" name="degree" required placeholder="B.Tech, BCA, MSc..." /></div>
        <div className="fde-form-field"><label htmlFor="fde-lead-year">Graduation year</label><input id="fde-lead-year" name="graduationYear" inputMode="numeric" required placeholder="2022" /></div>
        <div className="fde-form-field"><label htmlFor="fde-lead-designation">Current designation</label><input id="fde-lead-designation" name="designation" required placeholder="Software Engineer" /></div>
        <div className="fde-form-field fde-form-wide"><label htmlFor="fde-lead-company">Company</label><input id="fde-lead-company" name="companyName" required placeholder="Your current company" /></div>
      </div>
      <label className="fde-form-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted by DataMarcos about this program and understand my details will be used to respond to this request.</span></label>
      <button className="fde-brochure-submit" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Sending request..." : "Request a call"}<ArrowRight size={17} />
      </button>
      {state === "success" && <p className="fde-form-success" role="status">Thanks. The admissions team will contact you about cohort dates and program fit.</p>}
      {state === "error" && <p className="fde-form-error" role="alert">{errorMessage || "We couldn&apos;t send the request. Please try again or contact Datamarcos directly."}</p>}
      <p className="fde-form-note">Admissions will share the next cohort date, fees and scholarship details on request.</p>
    </form>
  );
}