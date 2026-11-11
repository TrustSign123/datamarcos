"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CalendarClock, RotateCcw, Wallet, Bookmark } from "lucide-react";
import { FEES_SECTION_ID, paymentIntentLabel, type FeeQuote, type PaymentType } from "@/config/fees";
import { NEXT_COHORT_LONG } from "@/config/cohort";

type RazorpaySuccess = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayInstance = { open: () => void };
type RazorpayCtor = new (options: Record<string, unknown>) => RazorpayInstance;

const COUNTRY_CODES = [
  ["+91", "🇮🇳 +91"], ["+1", "🇺🇸 +1"], ["+44", "🇬🇧 +44"], ["+971", "🇦🇪 +971"],
  ["+65", "🇸🇬 +65"], ["+61", "🇦🇺 +61"], ["+966", "🇸🇦 +966"], ["+49", "🇩🇪 +49"]
] as const;

function loadCheckout(): Promise<RazorpayCtor> {
  const existing = (window as Window & { Razorpay?: RazorpayCtor }).Razorpay;
  if (existing) return Promise.resolve(existing);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const ctor = (window as Window & { Razorpay?: RazorpayCtor }).Razorpay;
      if (ctor) resolve(ctor);
      else reject(new Error("Checkout did not load."));
    };
    script.onerror = () => reject(new Error("Checkout did not load."));
    document.body.appendChild(script);
  });
}

function openLeadFallback(course: string, type: PaymentType) {
  const intent = paymentIntentLabel(type, course);
  const api = (window as Window & { DMLead?: { open: (opts: Record<string, string>) => void } }).DMLead;
  if (api?.open) {
    api.open({ course, cta: intent, intent, title: type === "seat" ? "Book your seat" : "Pay the program fee" });
    return;
  }
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("data-dm-lead", "");
  button.setAttribute("data-course", course);
  button.setAttribute("data-cta", intent);
  button.setAttribute("data-intent", intent);
  button.style.display = "none";
  document.body.appendChild(button);
  button.click();
  button.remove();
}

export function FeesEnrolmentClient({ quote, paymentsEnabled }: { quote: FeeQuote; paymentsEnabled: boolean }) {
  const [paying, setPaying] = useState<PaymentType | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");
  const emiLine = quote.india
    ? `EMI from ${quote.emiFormatted}/month`
    : `Flexible instalments — from ${quote.emiFormatted}/month over 24 months`;
  const emiNote = quote.india
    ? "Up to 24 months, subject to approval. EMI via partner."
    : "Up to 24 months, subject to approval. Instalment options; ask our counsellor.";

  function startPayment(type: PaymentType) {
    if (!paymentsEnabled) {
      openLeadFallback(quote.leadCourse, type);
      return;
    }
    setDone("");
    setError("");
    setPaying(type);
  }

  async function onContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!paying) return;
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const cc = String(data.get("cc") || "+91");
    let phone = String(data.get("phone") || "").replace(/\D/g, "");
    if (cc === "+91" && phone.length === 11 && phone.startsWith("0")) phone = phone.slice(1);
    if (name.length < 2 || !/[a-zA-Z\u0900-\u097F]/.test(name) || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    if (cc === "+91" ? !/^[6-9]\d{9}$/.test(phone) : phone.length < 6 || phone.length > 13) {
      setError("Please enter a valid phone number.");
      return;
    }
    const contact = cc + phone;
    setBusy(true);
    try {
      const orderRes = await fetch("/api/payments/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: quote.slug, type: paying, name, email, phone: contact })
      });
      const order = (await orderRes.json()) as {
        ok?: boolean;
        error?: string;
        fallback?: string;
        intent?: string;
        keyId?: string;
        orderId?: string;
        amount?: number;
        currency?: string;
        description?: string;
      };
      if (!orderRes.ok || !order.ok || !order.keyId || !order.orderId) {
        if (order.fallback === "lead") {
          setPaying(null);
          openLeadFallback(quote.leadCourse, paying);
          return;
        }
        throw new Error(order.error || "Could not start the payment.");
      }
      const Razorpay = await loadCheckout();
      const checkout = new Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Datamarcos",
        description: order.description,
        order_id: order.orderId,
        prefill: { name, email, contact },
        theme: { color: "#ff7043" },
        handler: async (response: RazorpaySuccess) => {
          try {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name,
                email,
                phone: contact,
                page: window.location.href
              })
            });
            const verify = (await verifyRes.json()) as { ok?: boolean; error?: string };
            if (!verifyRes.ok || !verify.ok) throw new Error(verify.error || "Payment could not be verified.");
            setPaying(null);
            setDone("Payment received. We’ll be in touch shortly about your enrolment.");
          } catch (err) {
            setError(err instanceof Error ? err.message : "Payment could not be verified. Please talk to a counsellor if you were charged.");
          }
        },
        modal: {
          ondismiss: () => setBusy(false)
        }
      });
      checkout.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start the payment. You can talk to a counsellor instead.");
    } finally {
      setBusy(false);
    }
  }

  const payLabel = paying === "seat" ? `Pay ${quote.seatFormatted} to book your seat` : `Pay ${quote.feeFormatted}`;

  const counsellorCta = useMemo(() => ({
    course: quote.leadCourse,
    cta: `Talk to a counsellor – ${quote.leadCourse}`
  }), [quote.leadCourse]);

  return (
    <section className="dm-fees" id={FEES_SECTION_ID} aria-labelledby="dm-fees-title">
      <div className="dm-fees-wrap">
        <header className="dm-fees-head">
          <p className="dm-fees-eyebrow">Fees &amp; enrolment</p>
          <h2 id="dm-fees-title">Book a seat, pay the fee, or choose EMI.</h2>
          <p>Prices below are for this program. The 5% seat booking is adjusted against the full fee. No discounts are shown here — the figure is the current program fee.</p>
          <p className="dm-fees-start"><CalendarClock size={15} aria-hidden="true" /> Next batch starts {NEXT_COHORT_LONG}.</p>
        </header>
        {done && <p className="dm-fees-done" role="status">{done}</p>}
        <div className="dm-fees-grid">
          <article className="dm-fees-card">
            <p className="dm-fees-kicker"><Bookmark size={16} aria-hidden="true" /> Book your seat</p>
            <p className="dm-fees-amount">{quote.seatFormatted}</p>
            <p className="dm-fees-sub">5% of the program fee, adjusted against the full fee.</p>
            <button type="button" className="dm-fees-btn dm-fees-btn-primary" onClick={() => startPayment("seat")} data-course={quote.leadCourse}>
              Book your seat <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>
          <article className="dm-fees-card">
            <p className="dm-fees-kicker"><Wallet size={16} aria-hidden="true" /> Program fee</p>
            <p className="dm-fees-amount">{quote.feeFormatted}</p>
            <p className="dm-fees-sub">
              {quote.india ? <span>incl. GST</span> : null}
              {quote.india ? " · " : null}
              Live online · <Link href="/refund-policy">7-day refund policy</Link>
            </p>
            <button type="button" className="dm-fees-btn dm-fees-btn-primary" onClick={() => startPayment("full")}>
              Pay full fee <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>
          <article className="dm-fees-card">
            <p className="dm-fees-kicker"><CalendarClock size={16} aria-hidden="true" /> Easy EMI</p>
            <p className="dm-fees-amount">{emiLine}</p>
            <p className="dm-fees-sub">{emiNote}</p>
            <button
              type="button"
              className="dm-fees-btn dm-fees-btn-ghost"
              data-dm-lead
              data-course={counsellorCta.course}
              data-cta={counsellorCta.cta}
            >
              Talk to a counsellor <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>
        </div>
        <p className="dm-fees-refund">
          <RotateCcw size={15} aria-hidden="true" />
          <span>Not right for you? Ask within 7 days for a refund under our <Link href="/refund-policy">7-day refund policy</Link>.</span>
        </p>
      </div>

      {paying && (
        <div className="dm-fees-overlay" onClick={(event) => { if (event.target === event.currentTarget && !busy) setPaying(null); }}>
          <div className="dm-fees-modal" role="dialog" aria-modal="true" aria-labelledby="dm-pay-title">
            <button type="button" className="dm-fees-close" aria-label="Close" onClick={() => !busy && setPaying(null)}>&times;</button>
            <p className="dm-fees-eyebrow">Secure checkout</p>
            <h3 id="dm-pay-title">{paying === "seat" ? "Book your seat" : "Pay the program fee"}</h3>
            <p className="dm-fees-modal-copy">Share your details, then pay <strong>{paying === "seat" ? quote.seatFormatted : quote.feeFormatted}</strong> {paying === "seat" ? "to book your seat" : "as the full program fee"} for {quote.title}.</p>
            <form onSubmit={onContact}>
              <label>
                Full name <span aria-hidden="true">*</span>
                <input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your full name" autoFocus />
              </label>
              <label>
                Email <span aria-hidden="true">*</span>
                <input name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@example.com" />
              </label>
              <label>
                Phone number <span aria-hidden="true">*</span>
                <span className="dm-fees-phone">
                  <select name="cc" aria-label="Country code" defaultValue={quote.india ? "+91" : "+1"}>
                    {COUNTRY_CODES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                  </select>
                  <input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" required maxLength={14} placeholder="Mobile number" />
                </span>
              </label>
              {error && <p className="dm-fees-error" role="alert">{error}</p>}
              <button type="submit" className="dm-fees-btn dm-fees-btn-primary" disabled={busy}>
                {busy ? "Starting checkout…" : payLabel}
              </button>
              <button type="button" className="dm-fees-btn dm-fees-btn-ghost" disabled={busy} onClick={() => { setPaying(null); openLeadFallback(quote.leadCourse, paying); }}>
                Prefer to talk to a counsellor?
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
