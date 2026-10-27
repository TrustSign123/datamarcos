import Link from "next/link";
import { ArrowRight, CalendarClock, Check, CreditCard, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { env, site } from "@/config/site";
import { REFUND_TIMELINE, REFUND_UPDATED, REFUND_UPDATED_ISO, REFUND_WINDOW } from "@/config/refund";

export const metadata = pageMetadata({
  path: "/refund-policy",
  title: "7-Day Refund Policy | Datamarcos",
  description: "Not happy with your Datamarcos program? Ask within 7 days of your batch start or payment date, whichever is later, and we'll refund you. Here's how it works."
});

const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;
const ADDRESS = "303-304, Noida One, Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India";

const faqs = [
  {
    q: "Do I have to give a reason?",
    a: "No special reason is needed. If you're having trouble with the learning, or the program isn't right for you for any other reason, you can ask for a refund within the 7 days. A line on what didn't work helps us improve."
  },
  {
    q: "When do my 7 days start?",
    a: `You can ask ${REFUND_WINDOW}. For example, if you pay on 1 March and your batch starts on 10 March, you can ask until 17 March.`
  },
  {
    q: "How long does the refund take?",
    a: REFUND_TIMELINE
  },
  {
    q: "Can I get a refund after 7 days?",
    a: "No. Requests after the 7-day window aren't eligible for a refund. If something isn't working after that, please still talk to us and we'll do our best to help you with your learning."
  },
  {
    q: "I paid in instalments or through EMI. What happens?",
    a: "We refund the amount we received, to the way it was paid. If an EMI or loan partner paid us for you, the refund goes back through that partner and we'll send you a confirmation to close the plan with them. Any interest or charges from the partner are covered by your agreement with them."
  }
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Refund policy", item: `${site.url}/refund-policy` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: REFUND_UPDATED_ISO,
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  }
];

export default function RefundPolicyPage() {
  return (
    <section className="hero-simple legal-page rp-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container rp-wrap">
        <nav className="rp-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Refund policy</span></nav>
        <p className="eyebrow">Datamarcos policy</p>
        <h1 className="section-title">7-day refund policy</h1>
        <p className="rp-lede">We want you to join with confidence. If your program isn&rsquo;t working for you, tell us within 7 days and we&rsquo;ll give you your money back.</p>
        <p className="legal-updated">Last updated: <time dateTime={REFUND_UPDATED_ISO}>{REFUND_UPDATED}</time></p>

        <div className="rp-summary" role="note" aria-label="Refund policy summary">
          <p className="rp-summary-title"><ShieldCheck size={20} aria-hidden="true" /> The short version</p>
          <ul>
            <li><Check size={16} aria-hidden="true" /> <span><b>7 days to decide.</b> Ask {REFUND_WINDOW}.</span></li>
            <li><Check size={16} aria-hidden="true" /> <span><b>Any reason.</b> Trouble with the learning, or anything else that isn&rsquo;t right for you.</span></li>
            <li><Check size={16} aria-hidden="true" /> <span><b>One message.</b> Email or WhatsApp us. No long forms.</span></li>
            <li><Check size={16} aria-hidden="true" /> <span><b>Back to your original payment method.</b> We start the refund within 7 working days.</span></li>
          </ul>
        </div>

        <div className="rp-body legal-copy">
          <h2>Who can get a refund</h2>
          <p>Any learner enrolled in a Datamarcos live online program can ask for a refund within the 7-day window. That includes Forward Deployed AI Engineer, Generative AI &amp; Agentic AI Engineer, Applied Agentic AI Certification, and Advance Data Engineering with Applied GenAI &amp; Agentic AI. For example, you can ask if:</p>
          <ul className="rp-list">
            <li>you&rsquo;re finding it hard to follow the classes or keep up with the pace,</li>
            <li>the teaching style or the program isn&rsquo;t what you expected,</li>
            <li>the schedule doesn&rsquo;t work for you, or</li>
            <li>it isn&rsquo;t right for you for any other reason.</li>
          </ul>

          <h2>How the 7 days are counted</h2>
          <p>You can ask <b>{REFUND_WINDOW}</b>. Day 1 is the day after that date, and you can ask up to the end of day 7.</p>
          <div className="rp-examples">
            <p><CalendarClock size={17} aria-hidden="true" /> <span>Paid on <b>1 March</b>, batch starts <b>10 March</b>: ask by <b>17 March</b>.</span></p>
            <p><CalendarClock size={17} aria-hidden="true" /> <span>Batch started <b>10 March</b>, paid on <b>12 March</b>: ask by <b>19 March</b>.</span></p>
          </div>

          <h2>How to ask for a refund</h2>
          <p>Send us one message by email or WhatsApp. Either one is fine.</p>
          <div className="rp-contact">
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("Refund request")}`}><Mail size={18} aria-hidden="true" /> <span><b>Email</b>{site.email}</span></a>
            <a href={env.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> <span><b>WhatsApp</b>{site.phone}</span></a>
            <a href={phoneHref}><Phone size={18} aria-hidden="true" /> <span><b>Call</b>{site.phone}</span></a>
          </div>
          <p>Please include:</p>
          <ul className="rp-list">
            <li>your full name, and the email and phone number you enrolled with,</li>
            <li>the program and batch you joined,</li>
            <li>your payment date and, if you have it, the Razorpay payment ID or receipt,</li>
            <li>if you&rsquo;re happy to share it, a line on what didn&rsquo;t work for you.</li>
          </ul>
          <p className="rp-safe"><ShieldCheck size={16} aria-hidden="true" /> We will never ask for your card number, CVV, OTP, UPI PIN or passwords to process a refund.</p>

          <h2>What happens next</h2>
          <ol className="rp-steps">
            <li><b>We confirm your request.</b> We reply to let you know we&rsquo;ve received it and that it&rsquo;s within the 7-day window.</li>
            <li><b>We start your refund within 7 working days</b> of your request, to your original payment method through Razorpay (card, UPI, net banking or wallet).</li>
            <li><b>Your bank credits it.</b> Banks and card issuers usually take another 5&ndash;7 working days to show the refund in your account.</li>
          </ol>
          <p>Once your refund is processed, your access to the program&rsquo;s live classes, recordings and materials ends.</p>

          <h2>Instalments, EMI and loans</h2>
          <p>If you paid in instalments, we refund the amount we received from you. If an EMI or loan partner paid us for you, the refund goes back through that partner, and we&rsquo;ll send you a confirmation to close the plan with them. Any interest or charges from the partner are covered by your agreement with them.</p>

          <h2>After the 7 days</h2>
          <p>Requests made after the 7-day window aren&rsquo;t eligible for a refund. If something isn&rsquo;t working after that, please still talk to us. We&rsquo;ll do our best to help you with your learning.</p>

          <h2>Questions</h2>
          <div className="rp-faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <h2>Contact and grievances</h2>
          <p>If you have a question about this policy, or you&rsquo;re not happy with how your refund was handled, contact us. Put &ldquo;Grievance&rdquo; in the subject line and it will be reviewed by our founder, {site.founder.name}.</p>
          <div className="rp-card">
            <p><b>Datamarcos</b></p>
            <p><MapPin size={16} aria-hidden="true" /> {ADDRESS}</p>
            <p><Phone size={16} aria-hidden="true" /> <a href={phoneHref}>{site.phone}</a> (call or WhatsApp)</p>
            <p><Mail size={16} aria-hidden="true" /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>

          <h2>Merchant information</h2>
          <p><strong>Merchant legal entity name:</strong> Datamarcos</p>
          <p><strong>Registered address:</strong> No.3k-1111, Tower, 3k, Rajnagar Extension Nilaya Greens Morta, Ghaziabad UP - 201019, Ghaziabad, Uttar Pradesh 201019</p>
          <p><strong>Operational address:</strong> {ADDRESS}</p>
          <p><CreditCard size={15} aria-hidden="true" /> Payments are processed securely by Razorpay.</p>

          <h2>Shipping and delivery</h2>
          <p>Datamarcos provides digital learning programs, training services and related online access. No physical shipping applies unless it&rsquo;s explicitly stated for a specific offering.</p>

          <p className="rp-foot"><Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/programs">Explore programs <ArrowRight size={14} aria-hidden="true" /></Link></p>
        </div>
      </div>
    </section>
  );
}
