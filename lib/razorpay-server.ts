/**
 * Server-only Razorpay helpers. Amounts always come from config/fees.ts.
 * Keys are read from RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET — never commit them
 * or add them to Vercel from this change.
 */
import { createHmac, timingSafeEqual } from "crypto";
import { leadEndpoint } from "@/config/lead";
import {
  feeQuote,
  isFeeSlug,
  paymentAmountMinor,
  paymentIntentLabel,
  type FeeSlug,
  type PaymentType
} from "@/config/fees";
import type { Market } from "@/lib/geo";

const RAZORPAY_ORDERS = "https://api.razorpay.com/v1/orders";

export function razorpayConfigured(): boolean {
  return Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

function credentials() {
  const keyId = process.env.RAZORPAY_KEY_ID || "";
  const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
  if (!keyId || !keySecret) return null;
  return { keyId, keySecret };
}

export function isPaymentType(value: string | null | undefined): value is PaymentType {
  return value === "seat" || value === "full";
}

export type PaymentOrderInput = {
  slug: string;
  type: string;
  market: Market;
  name: string;
  email: string;
  phone: string;
};

export type CreatedOrder = {
  keyId: string;
  orderId: string;
  amount: number;
  currency: "INR" | "USD";
  description: string;
  course: string;
  slug: FeeSlug;
  type: PaymentType;
};

export async function createProgramOrder(input: PaymentOrderInput): Promise<
  | { ok: true; order: CreatedOrder }
  | { ok: false; status: number; error: string; fallback?: "lead"; intent?: string }
> {
  if (!isFeeSlug(input.slug) || !isPaymentType(input.type)) {
    return { ok: false, status: 400, error: "Unknown program or payment type." };
  }
  const auth = credentials();
  const quote = feeQuote(input.slug, input.market);
  const intent = paymentIntentLabel(input.type, quote.leadCourse);
  if (!auth) {
    return { ok: false, status: 503, error: "Online payment is not configured yet.", fallback: "lead", intent };
  }

  const amount = paymentAmountMinor(quote, input.type);
  const description = input.type === "seat"
    ? `Book your seat – ${quote.title}`
    : `Program fee – ${quote.title}`;
  const receipt = `dm-${input.type}-${Date.now().toString(36)}`.slice(0, 40);

  const response = await fetch(RAZORPAY_ORDERS, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${auth.keyId}:${auth.keySecret}`).toString("base64"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount,
      currency: quote.currency,
      receipt,
      notes: {
        slug: input.slug,
        type: input.type,
        market: input.market,
        course: quote.leadCourse,
        name: input.name.slice(0, 200),
        email: input.email.slice(0, 150),
        phone: input.phone.slice(0, 20)
      }
    })
  });

  const body = (await response.json().catch(() => ({}))) as { id?: string; error?: { description?: string } };
  if (!response.ok || !body.id) {
    const message = body.error?.description || "Could not start the payment. Please try again, or talk to a counsellor.";
    return { ok: false, status: 502, error: message, fallback: "lead", intent };
  }

  return {
    ok: true,
    order: {
      keyId: auth.keyId,
      orderId: body.id,
      amount,
      currency: quote.currency,
      description,
      course: quote.leadCourse,
      slug: input.slug,
      type: input.type
    }
  };
}

export function verifyPaymentSignature(orderId: string, paymentId: string, signature: string): boolean {
  const auth = credentials();
  if (!auth || !orderId || !paymentId || !signature) return false;
  const expected = createHmac("sha256", auth.keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const left = Buffer.from(expected, "utf8");
  const right = Buffer.from(signature, "utf8");
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function logSuccessfulPayment(entry: {
  name: string;
  email: string;
  phone: string;
  course: string;
  market: Market;
  type: PaymentType;
  amountMajor: number;
  currency: "INR" | "USD";
  paymentId: string;
  orderId: string;
  page?: string;
}): Promise<void> {
  if (!leadEndpoint) return;
  const amountLabel = entry.currency === "INR"
    ? `₹${entry.amountMajor.toLocaleString("en-IN")}`
    : `$${entry.amountMajor.toLocaleString("en-US")}`;
  const intent = paymentIntentLabel(entry.type, entry.course);
  const cta = `Payment received – ${intent} – ${entry.currency} ${entry.amountMajor} – ${entry.paymentId}`;
  await fetch(leadEndpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      name: entry.name,
      email: entry.email,
      phone: entry.phone,
      course: entry.course,
      cta,
      intent,
      page: entry.page || "",
      market: entry.market,
      type: entry.type,
      amount: entry.amountMajor,
      currency: entry.currency,
      payment_id: entry.paymentId,
      razorpay_order_id: entry.orderId,
      utm_source: "razorpay",
      utm_medium: "checkout",
      utm_campaign: entry.type,
      referrer: ""
    }),
    redirect: "follow"
  });
}

/** Fetch a Razorpay order so verify can trust amount, currency, notes and status — not the client. */
export async function fetchRazorpayOrder(orderId: string): Promise<{
  amount: number;
  currency: string;
  status: string;
  notes: Record<string, string>;
} | null> {
  const auth = credentials();
  if (!auth) return null;
  const response = await fetch(`${RAZORPAY_ORDERS}/${encodeURIComponent(orderId)}`, {
    headers: {
      Authorization: "Basic " + Buffer.from(`${auth.keyId}:${auth.keySecret}`).toString("base64")
    }
  });
  if (!response.ok) return null;
  const body = (await response.json()) as {
    amount?: number;
    currency?: string;
    status?: string;
    notes?: Record<string, string>;
  };
  return {
    amount: Number(body.amount) || 0,
    currency: body.currency || "",
    status: body.status || "",
    notes: body.notes || {}
  };
}
