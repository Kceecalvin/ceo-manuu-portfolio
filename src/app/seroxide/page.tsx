import type { Metadata } from "next";
import ProductShowcase from "@/components/ProductShowcase";
import Link from "next/link";
import {
  ArrowUpRight,
  AudioLines,
  Ticket,
  Mic2,
  Clapperboard,
  Radio,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PartnerCTA from "@/components/PartnerCTA";
import BusinessWebsites from "@/components/BusinessWebsites";
export const metadata: Metadata = {
  title: "Seroxide & SeroTix",
  description:
    "Explore Seroxide Entertainment and SeroTix: events, talent, music, media and a platform for discovering your next experience.",
};
const areas = [
  {
    icon: Ticket,
    name: "Events & experiences",
    text: "Live moments, creative gatherings and lifestyle activations.",
  },
  {
    icon: Mic2,
    name: "Talent & music",
    text: "A focus on artists, their work and the audiences around them.",
  },
  {
    icon: Clapperboard,
    name: "Media & production",
    text: "Stories, visual content and creative production.",
  },
  {
    icon: Radio,
    name: "Digital distribution",
    text: "Platforms and channels that help ideas reach an audience.",
  },
  {
    icon: GraduationCap,
    name: "Creative development",
    text: "A vision for learning, collaboration and opportunities for creatives.",
  },
  {
    icon: AudioLines,
    name: "Creative studio",
    text: "Space for music, production and the process of making things.",
  },
];
export default function SeroxidePage() {
  return (
    <>
      <section className="seroxide-intro">
        <div className="shell">
          <Reveal className="page-heading">
            <span className="eyebrow">THE CREATIVE SIDE OF MANUU SPACES</span>
            <h1>
              Culture in
              <br />
              <em>full colour.</em>
              <span className="seroxide-star" aria-hidden="true">
                ✳
              </span>
            </h1>
            <p>
              Seroxide Entertainment brings together events, talent, music and
              media—with a vision for African creativity to reach further.
            </p>
            <div className="button-row">
              <a
                href="https://serotix.co.ke"
                className="button button-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore SeroTix <ArrowUpRight aria-hidden="true" size={18} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/contact?venture=seroxide" className="text-link">
                Create with us <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="shell section">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">MEET SEROTIX</span>
            <h2>
              Find your vibe.
              <br />
              <em>Make a memory.</em>
            </h2>
          </div>
          <p>
            A platform for discovering events and getting tickets, with a quick
            vibe quiz and a squad shortlist to help you make a plan.
          </p>
        </Reveal>
        <ProductShowcase />
        <div className="values-grid">
          <div className="value-card">
            <span className="micro">01 / DISCOVER</span>
            <h3>Find your kind of out.</h3>
            <p>Explore experiences by category, date and location.</p>
          </div>
          <div className="value-card">
            <span className="micro">02 / CONNECT</span>
            <h3>Start with the feeling.</h3>
            <p>Use Find My Vibe to turn your mood into event ideas.</p>
          </div>
          <div className="value-card">
            <span className="micro">03 / GO TOGETHER</span>
            <h3>Bring your people.</h3>
            <p>Collect ideas in a squad shortlist and make a plan.</p>
          </div>
        </div>
        <div className="button-row">
          <a
            href="https://serotix.co.ke"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find your next experience{" "}
            <ArrowUpRight aria-hidden="true" size={18} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/contact?venture=seroxide" className="text-link">
            Discuss an event partnership{" "}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE SEROXIDE VISION</span>
              <h2>
                More ways
                <br />
                <em>to create.</em>
              </h2>
            </div>
            <p>
              A creative vision spanning the stage, the studio and the screen.
            </p>
          </div>
          <div className="creative-grid">
            {areas.map(({ icon: Icon, name, text }) => (
              <Reveal key={name} className="creative-card">
                <Icon aria-hidden="true" size={27} strokeWidth={1.4} />
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="shell"><BusinessWebsites venture="seroxide" /></div>
      <PartnerCTA />
    </>
  );
}
function ArrowRightIcon() {
  return <ArrowUpRight aria-hidden="true" size={18} />;
}
