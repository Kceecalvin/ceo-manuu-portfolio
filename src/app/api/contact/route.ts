import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateBrief, briefText, briefHtml } from "@/lib/contact";
export const runtime = "nodejs";
const MAX_BODY = 16384;
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { message: "Please send your brief from this website." },
      { status: 403 },
    );
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return NextResponse.json(
      { message: "Send a JSON brief." },
      { status: 415 },
    );
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader)
      return NextResponse.json(
        { message: "Please complete your brief." },
        { status: 400 },
      );
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY) {
        await reader.cancel();
        return NextResponse.json(
          { message: "Your brief is too long." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const body = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.length;
    }
    input = JSON.parse(new TextDecoder().decode(body));
  } catch {
    return NextResponse.json(
      { message: "Please send a valid brief." },
      { status: 400 },
    );
  }
  const result = validateBrief(input);
  if (result.error)
    return NextResponse.json({ message: result.error }, { status: 400 });
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL)
    return NextResponse.json(
      {
        message:
          "Sending is unavailable right now. Please use the email option on the contact page.",
      },
      { status: 503 },
    );
  const brief = result.brief!;
  try {
    const { data, error } = await new Resend(RESEND_API_KEY).emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: brief.email,
      subject: `[CEO Manuu] ${brief.subject} — ${brief.name}`,
      text: briefText(brief),
      html: briefHtml(brief),
    });
    if (error || !data?.id)
      return NextResponse.json(
        {
          message: "Your message could not be sent. Please try email instead.",
        },
        { status: 502 },
      );
    return NextResponse.json({ message: "Your brief has been sent." });
  } catch {
    return NextResponse.json(
      { message: "Your message could not be sent. Please try email instead." },
      { status: 502 },
    );
  }
}
