import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// TODO: set STRIPE_SECRET_KEY in your environment before going live.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  const { priceId, mode } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: mode ?? "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/membership?canceled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: "Stripe non configuré" }, { status: 500 });
  }
}
