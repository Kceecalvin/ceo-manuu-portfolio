import { validMailbox, type SupportMode } from "./support";

export function getSupportConfig() {
  const rawMailbox = process.env.SUPPORT_MAILBOX?.trim() || "";
  const mailbox = validMailbox(rawMailbox) ? rawMailbox : "";
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const secret = process.env.TURNSTILE_SECRET_KEY || "";
  const from = process.env.SUPPORT_FROM_EMAIL || "";
  const apiKey = process.env.RESEND_API_KEY || "";
  const mode: SupportMode = !mailbox ? "unavailable" : from && apiKey && siteKey && secret ? "form" : "email";
  return { mailbox, siteKey, secret, from, apiKey, mode };
}
