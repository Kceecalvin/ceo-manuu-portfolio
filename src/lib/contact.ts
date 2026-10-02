export const inquiryTypes = [
  "Business partnership",
  "Creative collaboration",
  "Digital project",
  "Press & media",
  "Something else",
  "Business enquiry",
] as const;
export type ContactBrief = {
  name: string;
  email: string;
  subject: string;
  venture: string;
  message: string;
};
export function validateBrief(
  input: unknown,
): { brief: ContactBrief; error?: never } | { error: string; brief?: never } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { error: "Please complete the brief." };
  const data = input as Record<string, unknown>;
  if (data.website) return { error: "Unable to accept this submission." };
  const field = (key: string) =>
    typeof data[key] === "string" ? data[key].trim() : "";
  const brief = {
    name: field("name"),
    email: field("email"),
    subject: field("subject"),
    venture: field("venture"),
    message: field("message"),
  };
  if (
    brief.name.length < 2 ||
    brief.name.length > 100 ||
    /[\r\n]/.test(brief.name)
  )
    return { error: "Enter a name between 2 and 100 characters." };
  if (
    brief.email.length > 254 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(brief.email)
  )
    return { error: "Enter a valid email address." };
  if (!(inquiryTypes as readonly string[]).includes(brief.subject))
    return { error: "Choose an inquiry type from the list." };
  if (brief.venture.length > 100 || /[\r\n]/.test(brief.venture))
    return { error: "Choose a business area from the list." };
  if (brief.message.length < 20 || brief.message.length > 5000)
    return { error: "Please write a brief between 20 and 5,000 characters." };
  return { brief };
}
export function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
}
export function briefText(brief: ContactBrief) {
  return `Name: ${brief.name}\nEmail: ${brief.email}\nInquiry: ${brief.subject}\nBusiness area: ${brief.venture || "General / Manuu Spaces"}\n\n${brief.message}`;
}
export function briefHtml(brief: ContactBrief) {
  const safe = Object.fromEntries(
    Object.entries(brief).map(([key, value]) => [key, escapeHtml(value)]),
  );
  return `<!doctype html><html lang="en"><body style="margin:0;padding:32px 16px;background:#f1f0eb;color:#192532;font-family:Arial,sans-serif"><table role="presentation" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;background:#fffdfa"><tr><td style="padding:32px;background:#122332;color:#ffffff"><p style="margin:0;font-size:12px;letter-spacing:2px">CEO MANUU / MANUU SPACES</p><h1 style="font-size:30px;font-weight:400;margin:24px 0 0">A new conversation.</h1></td></tr><tr><td style="padding:32px"><p style="color:#244ce5;font-size:11px;letter-spacing:1px">${safe.subject.toUpperCase()}</p><h2 style="font-size:23px;font-weight:400;margin:18px 0">${safe.name}</h2><p style="font-size:14px;line-height:1.7">Reply to: ${safe.email}<br>Business area: ${safe.venture || "General / Manuu Spaces"}</p><div style="background:#f2f3f0;padding:24px;border-left:3px solid #244ce5;font-size:15px;line-height:1.8;overflow-wrap:anywhere">${safe.message.replace(/\n/g, "<br>")}</div><p style="font-size:12px;color:#626970;margin-top:26px">Use Reply to continue the conversation with ${safe.name}.</p></td></tr><tr><td style="border-top:1px solid #dddeda;padding:22px 32px;font-size:10px;color:#626970">Sent from the CEO Manuu portfolio contact form.</td></tr></table></body></html>`;
}
