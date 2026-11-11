import { NextResponse } from "next/server";
import { fetchRazorpayOrder, logSuccessfulPayment, verifyPaymentSignature } from "@/lib/razorpay-server";
import { feeQuote, isFeeSlug, isPaymentType, paymentAmountMinor } from "@/config/fees";
import { getMarket } from "@/lib/geo-server";

export async function POST(request: Request) {
  let body: {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
    name?: string;
    email?: string;
    phone?: string;
    page?: string;
  };
  try {
    body = await request.json() as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const orderId = String(body.razorpay_order_id || "");
  const paymentId = String(body.razorpay_payment_id || "");
  const signature = String(body.razorpay_signature || "");
  if (!verifyPaymentSignature(orderId, paymentId, signature)) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  const order = await fetchRazorpayOrder(orderId);
  if (!order) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  const slug = order.notes.slug;
  const type = order.notes.type;
  if (!isFeeSlug(slug) || !isPaymentType(type)) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  const market = await getMarket();
  const quote = feeQuote(slug, market);
  const expectedMinor = paymentAmountMinor(quote, type);
  if (order.amount !== expectedMinor || order.currency !== quote.currency) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  const name = String(body.name || order.notes.name || "").trim();
  const email = String(body.email || order.notes.email || "").trim();
  const phone = String(body.phone || order.notes.phone || "").trim();

  try {
    await logSuccessfulPayment({
      name,
      email,
      phone,
      course: quote.leadCourse,
      market,
      type,
      amountMajor: type === "seat" ? quote.seat : quote.fee,
      currency: quote.currency,
      paymentId,
      orderId,
      page: String(body.page || "")
    });
  } catch {
    // Payment already succeeded; do not fail the visitor if the sheet write errors.
  }

  return NextResponse.json({ ok: true, paymentId, course: quote.leadCourse, type });
}
