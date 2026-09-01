"use client";

import { FormEvent, useState } from "react";
import { env } from "@/config/site";
import { readAttribution, trackEvent } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success" | "error";

function TextField({ label, name, type = "text", required = true, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder || label} />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} required>
        <option value="">Select</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}

async function submitForm(endpoint: string | undefined, data: FormData) {
  if (!endpoint) {
    if (process.env.NODE_ENV === "development") return { ok: true };
    throw new Error("Form endpoint is not configured.");
  }
  const response = await fetch(endpoint, { method: "POST", body: data });
  if (!response.ok) throw new Error("Submission failed.");
  return response;
}

export function CorporateInquiryForm() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    trackEvent("corporate_form_start");
    try {
      await submitForm(env.corporateFormEndpoint, new FormData(event.currentTarget));
      setState("success");
      trackEvent("corporate_form_submit");
      event.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="form card" onSubmit={onSubmit}>
      <div className="grid two">
        <TextField label="Full Name" name="fullName" placeholder="Your full name" />
        <TextField label="Work Email" name="email" type="email" placeholder="name@company.com" />
        <TextField label="Company" name="company" placeholder="Company name" />
        <TextField label="Job Title" name="jobTitle" placeholder="L&D Lead, CTO, Engineering Manager" />
        <TextField label="Country" name="country" placeholder="Country" />
        <SelectField label="Company Size" name="companySize" options={["1-50", "51-200", "201-1000", "1000+"]} />
        <SelectField label="Industry" name="industry" options={["Pharmaceutical", "Banking", "Technology", "Manufacturing", "Consulting", "Healthcare", "Retail", "Telecommunications", "Other"]} />
        <SelectField label="Training Need" name="trainingNeed" options={["Upskilling", "Reskilling", "Bootcamp", "Workshop", "Academy", "Trainer-on-demand", "Custom program"]} />
        <TextField label="Technology" name="technology" placeholder="AI, Data, Cloud, DevOps..." />
        <TextField label="Number of Learners" name="learners" placeholder="Approx. learner count" />
        <SelectField label="Delivery Preference" name="delivery" options={["Remote", "Onsite", "Hybrid"]} />
        <TextField label="Target Timeline" name="timeline" placeholder="This quarter, next month..." />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="button primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Submitting..." : "Talk to Datamarcos"}</button>
      {state === "success" && <p role="status">Thanks. Your inquiry has been captured for follow-up.</p>}
      {state === "error" && <p role="alert">The form endpoint is not configured. Please contact Datamarcos directly.</p>}
    </form>
  );
}

export function TrainerApplicationForm() {
  return (
    <form className="form card">
      <div className="grid two">
        {["Name", "Email", "Phone", "Country", "Primary Expertise", "Years Experience", "Current Role", "LinkedIn", "Resume", "Availability", "Preferred Delivery", "Hourly / Program Rate"].map((label) => (
          <TextField key={label} label={label} name={label.toLowerCase().replace(/[^a-z0-9]+/g, "-")} required={label !== "Resume"} />
        ))}
      </div>
      <div className="field"><label htmlFor="bio">Bio</label><textarea id="bio" name="bio" /></div>
      <button className="button primary" type="button" onClick={() => trackEvent("trainer_application")}>Submit Trainer Profile</button>
    </form>
  );
}

export function LeadCaptureForm() {
  return (
    <form className="form card">
      <div className="grid two">
        <TextField label="Name" name="name" />
        <TextField label="Email" name="email" type="email" placeholder="you@example.com" />
        <TextField label="Company" name="company" required={false} placeholder="Company, optional" />
        <TextField label="Role" name="role" required={false} />
      </div>
      <button className="button primary" type="button" onClick={() => trackEvent("resource_download")}>Get the Free Guide</button>
    </form>
  );
}

export function ProfessionalApplicationForm() {
  return (
    <form className="form card">
      <div className="grid two">
        <TextField label="Name" name="name" />
        <TextField label="Email" name="email" type="email" placeholder="you@example.com" />
        <TextField label="Program Interest" name="programInterest" />
        <TextField label="Experience Level" name="experience" />
      </div>
      <button className="button primary" type="button">Apply / Book Consultation</button>
    </form>
  );
}

export function ProgramApplicationForm({ programId, programSlug }: { programId: string; programSlug: string }) {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("programId", programId);
    data.set("programSlug", programSlug);
    data.set("attribution", JSON.stringify(readAttribution()));
    trackEvent("application_start", { programId, programSlug });
    try {
      await submitForm(env.leadEndpoint, data);
      setState("success");
      trackEvent("application_submit", { programId, programSlug });
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="form card" onSubmit={onSubmit}>
      <div className="grid two">
        <TextField label="Full Name" name="fullName" placeholder="Your full name" />
        <TextField label="Email" name="email" type="email" placeholder="you@example.com" />
        <TextField label="Phone / WhatsApp" name="phone" type="tel" placeholder="+1 555 000 0000" />
        <TextField label="Country" name="country" placeholder="Country" />
        <TextField label="Current Role" name="currentRole" placeholder="Data Engineer, Software Engineer..." />
        <TextField label="Years of Experience" name="yearsExperience" placeholder="3 years" />
        <SelectField label="Python Level" name="pythonLevel" options={["Foundation", "Working knowledge", "Advanced"]} />
        <SelectField label="SQL Level" name="sqlLevel" options={["Foundation", "Working knowledge", "Advanced"]} />
        <SelectField label="Data Engineering Experience" name="dataEngineeringExperience" options={["None", "Some project experience", "Professional experience"]} />
        <SelectField label="AI / GenAI Experience" name="aiExperience" options={["None", "Experimented with APIs", "Built applications"]} />
        <SelectField label="Cloud Experience" name="cloudExperience" options={["None", "Basic familiarity", "Professional experience"]} />
        <TextField label="Preferred Cohort" name="preferredCohort" required={false} placeholder="Next available cohort" />
        <TextField label="How did you hear about Datamarcos?" name="source" required={false} placeholder="LinkedIn, Google, referral..." />
      </div>
      <div className="field">
        <label htmlFor="careerGoal">Career Goal</label>
        <textarea id="careerGoal" name="careerGoal" required />
      </div>
      <button className="button primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Submitting..." : "Submit Application"}</button>
      {state === "success" && <p role="status">Thanks. Your application has been captured for follow-up.</p>}
      {state === "error" && <p role="alert">The application endpoint is not configured. Please contact Datamarcos directly.</p>}
    </form>
  );
}
