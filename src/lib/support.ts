export const supportTopics = ["General question", "Existing enquiry", "Website issue", "Business service", "Privacy request"] as const;
export type SupportRequest = { name: string; email: string; business: string; topic: string; message: string; requestId: string; token: string };
export type SupportMode = "form" | "email" | "unavailable";
export const validMailbox = (value: string) => value.length <= 254 && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);

export function validateSupportRequest(input: unknown, businessNames: string[]): { request: SupportRequest; error?: never } | { error: string; request?: never } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { error: "Please complete your support request." };
  const fields = input as Record<string, unknown>;
  if (fields.website) return { error: "Unable to accept this request." };
  const field = (key: string) => typeof fields[key] === "string" ? fields[key].trim() : "";
  const request = { name: field("name"), email: field("email"), business: field("business"), topic: field("topic"), message: field("message"), requestId: field("requestId"), token: field("token") };
  if (request.name.length < 2 || request.name.length > 100 || /[\r\n]/.test(request.name)) return { error: "Enter your name (2–100 characters)." };
  if (!validMailbox(request.email)) return { error: "Enter a valid email address." };
  if (!["Manuu Spaces / General", ...businessNames].includes(request.business)) return { error: "Choose a business from the list." };
  if (!(supportTopics as readonly string[]).includes(request.topic)) return { error: "Choose a support topic." };
  if (request.message.length < 20 || request.message.length > 5000) return { error: "Please describe your request in 20–5,000 characters." };
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(request.requestId)) return { error: "Please refresh the page and try again." };
  if (request.token.length > 2048) return { error: "Please complete the verification again." };
  return { request };
}

export function supportText(request: Pick<SupportRequest, "name" | "email" | "business" | "topic" | "message">, reference?: string) {
  return `${reference ? `Reference: ${reference}\n` : ""}Name: ${request.name}\nEmail: ${request.email}\nBusiness: ${request.business}\nTopic: ${request.topic}\n\n${request.message}`;
}
