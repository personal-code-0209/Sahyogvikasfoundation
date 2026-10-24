import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid form submission." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check your details and make sure your message is at least 10 characters long." },
      { status: 400 },
    );
  }

  try {
    await prisma.contactSubmission.create({ data: parsed.data });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Unable to save contact submission:", error);
    return NextResponse.json(
      { error: "We could not save your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
