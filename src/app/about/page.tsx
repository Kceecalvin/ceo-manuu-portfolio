import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PartnerCTA from "@/components/PartnerCTA";
import { founder } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "The founder",
  description:
    "Meet Odhiambo Manael Okoth, known as CEO Manuu. Founder of Manuu Spaces and Seroxide, based in Nairobi, Kenya.",
};
export default function AboutPage() {
  return (
    <>
      <section className="shell page-section">
        <Reveal className="page-heading">
          <span className="eyebrow">THE FOUNDER / THE VISION</span>
          <h1>
            Curiosity is
            <br />
            where it <em>starts.</em>
          </h1>
        </Reveal>
        <div className="about-grid">
          <Reveal className="founder-poster">
            <span className="micro">
              NAIROBI, KENYA / THINKING BEYOND BORDERS
            </span>
            <span className="poster-monogram" aria-hidden="true">
              m<span>.</span>
            </span>
            <div>
              <h2>
                CEO
                <br />
                MANUU
              </h2>
              <span>{founder.name}</span>
            </div>
            <span className="poster-star" aria-hidden="true">
              ✳
            </span>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">A NOTE FROM MANUU</span>
            <h2>
              Business, with
              <br />
              <em>a bigger picture.</em>
            </h2>
            <p>
              I’m Odhiambo Manael Okoth, known as CEO Manuu. I’m the founder
              behind Manuu Spaces and Seroxide, based in Nairobi, Kenya.
            </p>
            <p>
              My interests live at the intersection of business, technology and
              culture. Manuu Spaces is the vision that brings them together: a
              connected portfolio spanning practical services, digital products
              and creative experiences.
            </p>
            <p>
              Through Seroxide and SeroTix, that vision extends to how people
              discover events, connect with culture and share experiences.
              Across the wider portfolio, the question stays the same: how can
              we create something useful and make it better?
            </p>
            <Link href="/contact" className="button">
              Let’s connect <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="shell section values-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE WAY I THINK</span>
            <h2>
              Purpose behind
              <br />
              <em>the possibilities.</em>
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            {
              title: "Start with people.",
              body: "Understand the people a business serves. Build around real needs and the details that shape their experience.",
            },
            {
              title: "Connect the dots.",
              body: "Look beyond a single industry. Useful ideas often come from bringing different perspectives together.",
            },
            {
              title: "Build for the long view.",
              body: "Think about the next step and the bigger picture. Keep learning as an idea becomes something tangible.",
            },
          ].map((v, i) => (
            <Reveal className="value-card" key={v.title} delay={i * 0.07}>
              <span className="micro">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <PartnerCTA />
    </>
  );
}
