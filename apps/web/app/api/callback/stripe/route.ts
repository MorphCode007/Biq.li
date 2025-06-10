import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // This is a placeholder for the self-hosted version.
  // The original functionality is part of the Enterprise Edition and has been removed.
  console.log("Stripe webhook callback received (self-hosted version - no-op).");
  return NextResponse.json({ received: true });
}
