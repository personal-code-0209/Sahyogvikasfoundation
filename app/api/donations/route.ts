import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { donationSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid pledge." }, { status: 400 });
  }

  const parsed = donationSchema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check your details. Contributions must be between ₹100 and ₹1,00,00,000." },
      { status: 400 },
    );
  }

  try {
    await prisma.donationPledge.create({ data: parsed.data });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Unable to save donation pledge:", error);
    return NextResponse.json(
      { error: "We could not save your pledge right now. Please try again later." },
      { status: 500 },
    );
  }
}
