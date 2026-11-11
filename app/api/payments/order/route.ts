import { NextResponse } from "next/server";
import { createProgramOrder } from "@/lib/razorpay-server";
import { getMarket } from "@/lib/geo-server";

function validName(value: string) {
  return value.length >= 2 && /[a-zA-Z\u0900-\u097F]/.test(value);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validPhone(value: string) {
  const phone = value.replace(/[^\d+]/g, "");
  return phone.length >= 8 && phone.length <= 16;
}

export async function POST(request: Request) {
  let body: { slug?: string; type?: string; name?: string; email?: string; phone?: string };
  try {
    body = await request.json() as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  if (!validName(name) || !validEmail(email) || !validPhone(phone)) {
    return NextResponse.json({ error: "Please enter your name, email and a valid phone number." }, { status: 400 });
  }

  const market = await getMarket();
  const result = await createProgramOrder({
    slug: String(body.slug || ""),
    type: String(body.type || ""),
    market,
    name,
    email,
    phone
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, fallback: result.fallback, intent: result.intent },
      { status: result.status }
    );
  }

  return NextResponse.json({
    ok: true,
    keyId: result.order.keyId,
    orderId: result.order.orderId,
    amount: result.order.amount,
    currency: result.order.currency,
    description: result.order.description,
    course: result.order.course,
    name: "Datamarcos"
  });
}
