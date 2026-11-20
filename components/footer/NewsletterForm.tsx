"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { LEAD_NOT_SURE, leadEndpoint } from "@/config/lead";
import { site } from "@/config/site";
import { readAttribution } from "@/lib/analytics";

/**
 * Footer newsletter signup. Posts to the same site-wide lead endpoint (Google Sheet) as every other form,
 * marked with source/intent "newsletter". No new backend.
 */
export function NewsletterForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "")) { setState("done"); return; } // honeypot
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setState("error"); setMessage("Please enter a valid email address."); return; }
    setState("loading"); setMessage("");
    const attribution = readAttribution() as Record<string, string>;
    try {
      // text/plain keeps this a "simple" CORS request (no preflight), which Apps Script requires.
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: "Newsletter subscriber", email, phone: "", course: LEAD_NOT_SURE,
          cta: "Footer - Newsletter Subscribe", intent: "newsletter", source: "newsletter",
          page: window.location.href,
          utm_source: attribution.utm_source || "", utm_medium: attribution.utm_medium || "", utm_campaign: attribution.utm_campaign || "",
          referrer: document.referrer || ""
        }),
        redirect: "follow"
      });
      const result = (await response.json()) as { ok?: boolean };
      if (!result.ok) throw new Error("not ok");
      form.reset();
      setState("done");
    } catch {
      setState("error");
      setMessage(`We couldn't subscribe you right now. Please try again, or email ${site.email}.`);
    }
  }

  if (state === "done") {
    return <p className="dmf-news-ok" role="status"><Check size={18} aria-hidden="true" /> You’re subscribed. Watch your inbox for AI career insights.</p>;
  }

  return (
    <form className="dmf-news-form" onSubmit={onSubmit} noValidate>
      <label className="dmf-sr" htmlFor="dmf-news-email">Email address</label>
      <input id="dmf-news-email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="Enter your email" required aria-invalid={state === "error"} aria-describedby={message ? "dmf-news-msg" : undefined} />
      <input className="dmf-hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? <Loader2 className="dmf-spin" size={16} aria-hidden="true" /> : null}
        Subscribe {state !== "loading" && <ArrowRight size={16} aria-hidden="true" />}
      </button>
      {message && <p id="dmf-news-msg" className="dmf-news-err" role="alert">{message}</p>}
    </form>
  );
}
