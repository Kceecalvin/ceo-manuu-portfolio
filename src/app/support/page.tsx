import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessagesSquare, Ticket, BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/Reveal";
import SupportForm from "@/components/SupportForm";
import { getSupportConfig } from "@/lib/support-config";
import "./support.css";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Customer support", description: "Find the right contact for a Manuu Spaces business, ask a question or follow up on an existing enquiry." };

export default function SupportPage() {
  const { mode, mailbox, siteKey } = getSupportConfig();
  return <section className="shell page-section support-page">
    <Reveal className="support-heading"><span className="eyebrow">THE MANUU SPACES HELP DESK</span><h1>A little help.<br /><em>A clear next step.</em></h1><p>Questions happen. Tell us what you need and which business it’s about, so the conversation starts in the right place.</p><a className="button" href="#support-request">Start a request <ArrowUpRight size={17} aria-hidden="true" /></a></Reveal>
    <div className="support-paths">
      <a className="support-path" href="#support-request"><MessagesSquare aria-hidden="true" /><span className="eyebrow">CUSTOMER HELP</span><h2>Let’s work it out.</h2><p>Ask a question or follow up on an existing enquiry.</p><span className="text-link">Prepare a request <ArrowUpRight size={16} aria-hidden="true" /></span></a>
      <Link className="support-path" href="/contact"><BriefcaseBusiness aria-hidden="true" /><span className="eyebrow">A NEW OPPORTUNITY</span><h2>Something in mind?</h2><p>Introduce a project, collaboration or business partnership.</p><span className="text-link">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></span></Link>
      <a className="support-path" href="https://serotix.co.ke" target="_blank" rel="noopener noreferrer"><Ticket aria-hidden="true" /><span className="eyebrow">EVENTS & TICKETS</span><h2>Your next experience.</h2><p>Use SeroTix for event discovery, ticket orders and its help options.</p><span className="text-link">Open SeroTix <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span></a>
    </div>
    <div id="support-request" className="support-request-grid"><div><span className="eyebrow">TELL US A LITTLE MORE</span><h2>What can we<br /><em>help you with?</em></h2><p>A business name, a clear description and any existing enquiry reference help us understand your request.</p><div className="support-expectations"><span className="eyebrow">HOW IT WORKS</span><ol><li>Choose the business and topic.</li><li>Describe what you need help with.</li><li>Continue the conversation by email.</li></ol></div></div><SupportForm mode={mode} mailbox={mailbox} siteKey={siteKey} /></div>
    <section className="support-faq"><span className="eyebrow">A FEW USEFUL ANSWERS</span><h2>Before you send.</h2>
      <details><summary>What should I include in my request?</summary><p>Your business or service name, a short description of the issue and a previous enquiry reference if you have one. Share only the information needed to understand the request.</p></details>
      <details><summary>How will I receive a reply?</summary><p>Replies go to the email address you provide. If the form opens your email app, review the draft and send it there to start the conversation.</p></details>
      <details><summary>Does a request confirm a booking or purchase?</summary><p>No. A support request starts a conversation. The relevant team confirms service availability, booking details or purchase information separately.</p></details>
      <details><summary>Where do I go for SeroTix tickets?</summary><p>Visit <a href="https://serotix.co.ke" target="_blank" rel="noopener noreferrer">SeroTix<span className="sr-only"> (opens in a new tab)</span></a> and use the contact or help options provided there. This portfolio does not access your ticket account or payment records.</p></details>
    </section>
  </section>;
}
