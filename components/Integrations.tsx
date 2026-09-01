import { env } from "@/config/site";

export function CalendlyBooking({ url = env.calendlyUrl }: { url?: string }) {
  if (!url) {
    return <div className="card" aria-live="polite">1:1 booking will appear here once Calendly is connected. <a className="button secondary" href="/contact">Contact Datamarcos</a></div>;
  }
  return <iframe title="Book a Datamarcos consultation" src={url} loading="lazy" style={{ width: "100%", minHeight: 680, border: "1px solid var(--border)", borderRadius: 8 }} />;
}

export function PaymentButton({ url = env.razorpayCheckoutUrl }: { url?: string }) {
  if (!url) return <button className="button secondary" type="button" disabled>Enrollment checkout will be enabled soon.</button>;
  return <a className="button primary" href={url}>Continue to Enrollment</a>;
}

export function WhatsAppCTA() {
  if (!env.whatsappUrl) return null;
  return <a className="button primary whatsapp" href={env.whatsappUrl} target="_blank" rel="noreferrer"><span>Chat with Datamarcos</span></a>;
}
