import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businesses } from "@/lib/businesses";
import { escapeHtml } from "@/lib/contact";
import { getSupportConfig } from "@/lib/support-config";
import { supportText, validateSupportRequest } from "@/lib/support";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const json = (message: string, status: number) => NextResponse.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
  const url = new URL(request.url);
  // Next may normalise request.url to localhost behind the Node server.
  // The browser's Host header preserves the hostname used to open the form.
  const expectedOrigin = request.headers.get("host") ? `${url.protocol}//${request.headers.get("host")}` : url.origin;
  if (request.headers.get("origin") !== expectedOrigin) return json("Please send your request from this website.", 403);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return json("Send a JSON request.", 415);
  const config = getSupportConfig();
  if (config.mode !== "form") return json("Online support sending is not available. Please use the contact options on the support page.", 503);
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json("Please complete your request.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32768) { await reader.cancel(); return json("Your request is too long.", 413); }
      chunks.push(value);
    }
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return json("Please send a valid request.", 400); }
  const result = validateSupportRequest(input, businesses.map((business) => business.name));
  if (result.error) return json(result.error, 400);
  const brief = result.request!;
  if (!brief.token) return json("Complete the verification before sending.", 400);
  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", body: new URLSearchParams({ secret: config.secret, response: brief.token }), signal: AbortSignal.timeout(10000),
    });
    if (!verification.ok) return json("Verification is unavailable. Please try again.", 503);
    const checked = await verification.json();
    if (!checked.success || checked.action !== "support" || checked.hostname !== new URL(expectedOrigin).hostname) return json("Verification expired or failed. Please try again.", 400);
    const text = supportText(brief);
    const fingerprint = createHash("sha256").update(`${brief.requestId}\n${text}`).digest("hex");
    const reference = `MS-${fingerprint.slice(0, 16).toUpperCase()}`;
    const { data, error } = await new Resend(config.apiKey).emails.send({
      from: config.from, to: [config.mailbox], replyTo: brief.email,
      subject: `[${reference}] ${brief.topic} — ${brief.business}`,
      text: supportText(brief, reference),
      html: `<!doctype html><html lang="en"><body style="margin:0;background:#f4f3ed;font-family:Arial,sans-serif;color:#192532"><table role="presentation" style="width:100%;max-width:600px;margin:auto;background:#fffdf8"><tr><td style="padding:28px;background:#142333;color:white"><p style="font-size:11px;letter-spacing:2px">CEO MANUU / CUSTOMER SUPPORT</p><h1 style="font-size:26px">A customer needs a hand.</h1></td></tr><tr><td style="padding:28px"><p>${escapeHtml(reference)}</p><pre style="font:14px/1.8 Arial,sans-serif;white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(text)}</pre><p style="font-size:12px">Reply to this email to continue the conversation with the customer. Keep the reference in the subject.</p></td></tr></table></body></html>`,
    }, { idempotencyKey: `support/${fingerprint}` });
    if (error || !data?.id) return json("Your request could not be sent. Please try again or email support.", 502);
    return NextResponse.json({ reference, message: "Your request has been sent to support." }, { headers: { "Cache-Control": "no-store" } });
  } catch { return json("Sending is unavailable right now. Please try again or email support.", 502); }
}
