"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle, Mail } from "lucide-react";
import { founder, ventures } from "@/lib/portfolio";
import { inquiryTypes, validateBrief, briefText } from "@/lib/contact";
export default function ContactForm({
  initialVenture,
  initialSubject = inquiryTypes[0],
  emailEnabled,
  initialMessage = "",
  businessName,
}: {
  initialVenture: string;
  initialSubject?: string;
  emailEnabled: boolean;
  initialMessage?: string;
  businessName?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [mailDraft, setMailDraft] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const result = validateBrief(fields);
    if (result.error) {
      setError(result.error);
      setStatus("error");
      return;
    }
    const brief = result.brief!;
    if (!emailEnabled) {
      const url = `mailto:${founder.email}?subject=${encodeURIComponent(`[Portfolio] ${brief.subject}`)}&body=${encodeURIComponent(briefText(brief))}`;
      setMailDraft(url);
      setStatus("idle");
      window.location.href = url;
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.message ||
            "Your message could not be sent. Please try email instead.",
        );
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Your message could not be sent. Please try email instead.",
      );
      setStatus("error");
    }
  }
  return (
    <div className="contact-form">
      {status === "success" ? (
        <div className="form-success" role="status">
          <CheckCircle2 aria-hidden="true" size={40} />
          <h2>
            Message sent.
            <br />
            Let’s see what’s possible.
          </h2>
          <p>
            Thanks for sharing your idea. Your brief has been sent, with your
            email address included for a reply.
          </p>
          <button className="button" onClick={() => setStatus("idle")}>
            Start another conversation{" "}
            <ArrowUpRight aria-hidden="true" size={17} />
          </button>
        </div>
      ) : (
        <form onSubmit={submit} action="/api/contact" method="post">
          {businessName && <p className="form-note" style={{ marginBottom: 24 }}>Your enquiry for <strong>{businessName}</strong>. Add your requirements below.</p>}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="What’s your name?"
                minLength={2}
                maxLength={100}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                maxLength={254}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="subject">What do you have in mind?</label>
            <select id="subject" name="subject" defaultValue={initialSubject}>
              {inquiryTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="venture">Which business area?</label>
            <select id="venture" name="venture" defaultValue={initialVenture}>
              <option value="">General / Manuu Spaces</option>
              {ventures.map((v) => (
                <option key={v.slug} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="message">Tell me a little about your idea</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              defaultValue={initialMessage}
              placeholder="The idea, what you need, and when you’d like to get started…"
              minLength={20}
              maxLength={5000}
              aria-describedby="brief-hint"
              required
            />
            <p className="form-note" id="brief-hint">
              A few useful details help us start the right conversation.
              20–5,000 characters.
            </p>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Leave this empty</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          {status === "error" && (
            <p className="form-alert" role="alert">
              {error}{" "}
              <a href={`mailto:${founder.email}`}>Email directly instead.</a>
            </p>
          )}
          <button
            className="button"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                Sending your brief <LoaderCircle aria-hidden="true" size={17} />
              </>
            ) : emailEnabled ? (
              <>
                Send your brief <ArrowUpRight aria-hidden="true" size={17} />
              </>
            ) : (
              <>
                Continue in email <Mail aria-hidden="true" size={17} />
              </>
            )}
          </button>
          {mailDraft ? (
            <p className="form-note" role="status">
              Your email draft is ready. Review it and press Send in your email
              app.{" "}
              <a href={mailDraft} className="text-link">
                Open the draft again{" "}
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            </p>
          ) : (
            <p className="form-note">
              {emailEnabled
                ? "Your details are used to respond to this inquiry. No mailing list sign-up."
                : "Opens your email app with your brief filled in. You review it before sending."}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
