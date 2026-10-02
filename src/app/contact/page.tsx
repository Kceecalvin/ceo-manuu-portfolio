import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { collaborations } from "@/lib/collaborations";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { founder, ventures } from "@/lib/portfolio";
import { businesses } from "@/lib/businesses";
export const metadata: Metadata = {
  title: "Let’s talk",
  description:
    "Start a conversation with CEO Manuu about a business partnership, creative collaboration or digital project.",
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    venture?: string | string[];
    intent?: string | string[];
    business?: string | string[];
    service?: string | string[];
  }>;
}) {
  const { venture, intent, business: businessSlug, service } = await searchParams;
  const business = businesses.find((b) => b.slug === businessSlug);
  const selectedService = business?.services.find((item) => item.name === service);
  const collaboration = collaborations.find((c) => c.id === intent);
  const selected = ventures.find(
    (v) => v.slug === (business?.venture || venture || collaboration?.venture),
  );
  const emailEnabled = Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_FROM_EMAIL &&
    process.env.CONTACT_TO_EMAIL,
  );
  return (
    <section className="shell page-section">
      <Reveal className="page-heading">
        <span className="eyebrow">LET’S MAKE A CONNECTION</span>
        <h1>
          What could we
          <br />
          <em>build together?</em>
        </h1>
        <p>
          Tell me what you’re thinking. A partnership, a creative idea or a
          useful product—the next chapter starts here.
        </p>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="contact-info">
          <h2>
            Big idea?
            <br />
            Small introduction?
          </h2>
          <p>
            Both are welcome. Share a little about yourself, the business area
            you’re interested in and what you’d like to make happen.
          </p>
          <div className="contact-method">
            <Mail aria-hidden="true" size={22} />
            <div>
              <small>Email</small>
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
            </div>
            <ArrowUpRight aria-hidden="true" size={15} />
          </div>
          <div className="contact-method">
            <MapPin aria-hidden="true" size={22} />
            <div>
              <small>Based in</small>
              <span>{founder.location}</span>
            </div>
          </div>
          <p className="form-note">
            For event discovery and tickets, visit{" "}
            <a
              className="text-link"
              href="https://serotix.co.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              SeroTix <ArrowUpRight aria-hidden="true" size={14} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </Reveal>
        <ContactForm
          key={`${selected?.slug || "general"}-${collaboration?.id || "general"}-${business?.slug || ""}-${selectedService?.name || ""}`}
          initialVenture={selected?.name || ""}
          initialSubject={business ? "Business enquiry" : collaboration?.subject}
          emailEnabled={emailEnabled}
          initialMessage={business ? `Hello, I’m interested in ${business.name}${selectedService ? ` — ${selectedService.name}` : ""}.\n\nHere’s what I have in mind:\n` : ""}
          businessName={business?.name}
        />
      </div>
    </section>
  );
}
