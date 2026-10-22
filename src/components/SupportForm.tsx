"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Mail, LoaderCircle } from "lucide-react";
import { businesses } from "@/lib/businesses";
import { supportTopics, supportText, validateSupportRequest, type SupportMode } from "@/lib/support";
type Turnstile = { render: (element: HTMLElement, options: Record<string, unknown>) => string; remove: (id: string) => void; reset: (id: string) => void };
declare global { interface Window { turnstile?: Turnstile } }

export default function SupportForm({ mode, mailbox, siteKey }: { mode: SupportMode; mailbox: string; siteKey: string }) {
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState("");
  const [draft, setDraft] = useState("");
  const challenge = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const submission = useRef({ content: "", id: "" });
  useEffect(() => {
    if (!ready || !challenge.current || !window.turnstile || mode !== "form" || reference) return;
    widget.current = window.turnstile.render(challenge.current, { sitekey: siteKey, action: "support", size: "flexible", "response-field": false, callback: (value: string) => setToken(value), "expired-callback": () => setToken(""), "error-callback": () => { setToken(""); setError("Verification could not load. Please refresh or email support directly."); } });
    return () => { if (widget.current) window.turnstile?.remove(widget.current); widget.current = null; };
  }, [ready, siteKey, mode, reference]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || mode === "unavailable") return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const content = JSON.stringify(fields);
    if (submission.current.content !== content) submission.current = { content, id: crypto.randomUUID() };
    const result = validateSupportRequest({ ...fields, requestId: submission.current.id, token }, businesses.map((b) => b.name));
    if (result.error) { setError(result.error); return; }
    const brief = result.request!;
    setError("");
    if (mode === "email") {
      const href = `mailto:${mailbox}?subject=${encodeURIComponent(`[Support] ${brief.topic} — ${brief.business}`)}&body=${encodeURIComponent(supportText(brief))}`;
      setDraft(href);
      window.location.href = href;
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/support", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, requestId: submission.current.id, token }), signal: AbortSignal.timeout(25000) });
      const data = await response.json();
      if (!response.ok || !data.reference) throw new Error(data.message || "Your request could not be sent.");
      setReference(data.reference);
    } catch (error) { setError(error instanceof Error ? error.message : "Please try again or email support."); }
    finally { setSending(false); setToken(""); if (widget.current) window.turnstile?.reset(widget.current); }
  }

  if (reference) return <div className="support-receipt" role="status"><CheckCircle2 size={38} aria-hidden="true" /><h2>Your request is on its way.</h2><p>Keep this reference for your conversation with the team.</p><strong className="support-reference">{reference}</strong><p>We’ll reply to the email address you provided.</p><Link className="text-link" href="/ventures">Explore the businesses <ArrowUpRight size={16} aria-hidden="true" /></Link></div>;
  return <div className="contact-form support-form">
    {mode === "unavailable" && <div className="support-notice"><strong>Our support inbox is being set up.</strong><p>You can prepare your request below. For help now, <Link href="/contact">use the existing contact page</Link>.</p></div>}
    <form onSubmit={submit}>
      <div className="form-row"><div className="form-field"><label htmlFor="support-name">Your name</label><input id="support-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" /></div><div className="form-field"><label htmlFor="support-email">Email address</label><input id="support-email" name="email" autoComplete="email" type="email" maxLength={254} required placeholder="Where should we reply?" /></div></div>
      <div className="form-field"><label htmlFor="support-business">Which business?</label><select id="support-business" name="business"><option>Manuu Spaces / General</option>{businesses.map((b) => <option key={b.slug}>{b.name}</option>)}</select></div>
      <div className="form-field"><label htmlFor="support-topic">What can we help with?</label><select id="support-topic" name="topic">{supportTopics.map((topic) => <option key={topic}>{topic}</option>)}</select></div>
      <div className="form-field"><label htmlFor="support-message">Tell us what happened</label><textarea id="support-message" name="message" rows={6} minLength={20} maxLength={5000} required aria-describedby="support-privacy" placeholder="Tell us what you need help with and include an existing enquiry reference if you have one." /><p className="form-note" id="support-privacy">Include the details needed to help you. Please leave out passwords, payment card details and medical records.</p></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="support-website">Leave empty</label><input id="support-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      {mode === "form" && <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setReady(true)} onError={() => setError("Verification could not load. Please email support directly.")} /><div ref={challenge} className="support-verification" /></>}
      {error && <p className="form-alert" role="alert">{error}</p>}
      <button className="button" type="submit" disabled={mode === "unavailable" || sending || (mode === "form" && !token)}>{sending ? <>Sending request <LoaderCircle size={16} aria-hidden="true" /></> : mode === "email" ? <>Continue in email <Mail size={16} aria-hidden="true" /></> : <>Send support request <ArrowUpRight size={16} aria-hidden="true" /></>}</button>
      <p className="form-note">{mode === "form" ? "Your details are used to respond to this request. We’ll show a reference once it has been sent." : mode === "email" ? "Opens a draft in your email app. Review it and press Send there." : "Online support sending will be available once the inbox is ready."}</p>
      {draft && <p className="form-note" role="status">Your draft is ready. It has not been sent by this website. <a href={draft} className="text-link">Open email draft again</a></p>}
      {mailbox && <a className="text-link" href={`mailto:${mailbox}`}>Email {mailbox} <ArrowUpRight size={15} aria-hidden="true" /></a>}
    </form>
  </div>;
}
