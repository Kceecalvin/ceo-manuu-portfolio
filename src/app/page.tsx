import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowDown, Globe2 } from "lucide-react";
import HeroArtwork from "@/components/HeroArtwork";
import Reveal from "@/components/Reveal";
import PartnerCTA from "@/components/PartnerCTA";
import BusinessExplorer from "@/components/BusinessExplorer";
import CollaborationBuilder from "@/components/CollaborationBuilder";
export default function Home() {
  return (
    <>
      <section className="shell hero">
        <Reveal className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> NAIROBI ROOTS. A WORLD OF
            POSSIBILITIES.
          </span>
          <h1>
            Building what
            <br />
            comes <em>next.</em>
            <span className="headline-dot">•</span>
          </h1>
          <p className="hero-intro">
            I’m <strong>CEO Manuu.</strong> Founder of Manuu Spaces.
            <br className="desktop-break" /> Bringing business, technology and
            African culture into one connected vision.
          </p>
          <div className="button-row">
            <Link href="/ventures" className="button">
              Explore my ventures <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/about" className="text-link">
              Meet the founder <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <a className="hero-scroll micro" href="#selected">
            <span>
              <ArrowDown aria-hidden="true" size={16} />
            </span>{" "}
            A LITTLE VISION. A LOT OF POSSIBILITY.
          </a>
        </Reveal>
        <HeroArtwork />
      </section>
      <div className="brand-ribbon shell">
        <span className="micro">
          DIFFERENT WORLDS.
          <br />
          SHARED AMBITION.
        </span>
        <span className="ribbon-spaces">Manuu Spaces</span>
        <span className="ribbon-seroxide">
          SEROXIDE<span>✳</span>
        </span>
        <span className="ribbon-serotix">
          serotix<span>↗</span>
        </span>
        <span className="ribbon-more">
          <Globe2 aria-hidden="true" size={20} /> Built to connect.
        </span>
      </div>
      <section id="selected" className="section shell">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">01 / IN FOCUS</span>
            <h2>
              Where vision
              <br />
              meets <em>experience.</em>
            </h2>
          </div>
          <p>
            A closer look at the ideas connecting people, creating experiences
            and opening new possibilities.
          </p>
        </Reveal>
        <Reveal>
          <article className="featured-project">
            <div className="feature-copy">
              <span className="pill">
                <span className="status-dot" /> EXPLORE THE PLATFORM
              </span>
              <div className="feature-title">
                serotix<span>↗</span>
              </div>
              <h3>
                Less scroll.
                <br />
                More soul.
              </h3>
              <p>
                Discover events. Find your vibe. Bring your squad. SeroTix
                brings the next great experience a little closer.
              </p>
              <div className="tag-row">
                <span>Event discovery</span>
                <span>Ticketing</span>
                <span>Community</span>
              </div>
              <a
                className="button button-light"
                href="https://serotix.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                Experience SeroTix <ArrowUpRight aria-hidden="true" size={17} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/seroxide#product" className="feature-demo-link">
                See the product in action{" "}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <div className="feature-preview">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>serotix.co.ke</span>
                <ArrowUpRight aria-hidden="true" size={13} />
              </div>
              <Image
                src="/images/serotix-desktop.png"
                alt="SeroTix event discovery homepage with the headline Less scroll. More soul."
                width={1440}
                height={1000}
                sizes="(max-width: 760px) 90vw, 58vw"
              />
              <span className="preview-caption">
                A SEROXIDE ENTERTAINMENT PLATFORM
              </span>
            </div>
          </article>
        </Reveal>
        <div className="spotlight-grid">
          <Reveal>
            <Link className="spotlight-card" href="/seroxide">
              <span className="eyebrow">CULTURE & ENTERTAINMENT</span>
              <span className="spotlight-symbol red-symbol" aria-hidden="true">
                ✳
              </span>
              <div>
                <h3>
                  Culture deserves
                  <br />a bigger stage.
                </h3>
                <p>Inside the world of Seroxide.</p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="spotlight-arrow"
                size={25}
              />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              className="spotlight-card digital-spotlight"
              href="/ventures/digital"
            >
              <span className="eyebrow">DIGITAL PRODUCTS & SYSTEMS</span>
              <span className="spotlight-symbol code-symbol" aria-hidden="true">
                {"{ }"}
              </span>
              <div>
                <h3>
                  Practical ideas.
                  <br />
                  Digital possibilities.
                </h3>
                <p>Commerce, platforms and useful tools.</p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="spotlight-arrow"
                size={25}
              />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="shell">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">02 / THE BIGGER PICTURE</span>
              <h2>
                Many directions.
                <br />
                <em>One vision.</em>
              </h2>
            </div>
            <div>
              <p>
                Manuu Spaces brings together a broad business vision, from
                everyday essentials to the experiences that make life richer.
              </p>
              <Link className="text-link" href="/ventures">
                Browse the full portfolio{" "}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </Reveal>
          <BusinessExplorer />
        </div>
      </section>
      <section className="shell founder-note section">
        <Reveal className="founder-note-label">
          <span className="eyebrow">03 / THE PERSON BEHIND IT</span>
          <div className="founder-seal" aria-hidden="true">
            m<span>.</span>
          </div>
          <span className="micro">
            CEO MANUU
            <br />
            FOUNDER, MANUU SPACES
          </span>
        </Reveal>
        <Reveal>
          <h2>
            Different industries.
            <br />
            The same curiosity:
            <br />
            <em>what could be better?</em>
          </h2>
          <p>
            I’m Odhiambo Manael Okoth, known as CEO Manuu. My ambition is to
            connect useful businesses, creative ideas and the people who make
            them happen.
          </p>
          <Link href="/about" className="text-link">
            More about my vision <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </Reveal>
      </section>
      <CollaborationBuilder />
      <PartnerCTA />
    </>
  );
}
