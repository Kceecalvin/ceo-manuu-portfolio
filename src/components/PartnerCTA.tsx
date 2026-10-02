import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
export default function PartnerCTA() {
  return (
    <section className="shell cta-section">
      <Reveal className="partner-cta">
        <div>
          <span className="eyebrow">THE NEXT CHAPTER</span>
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            A business idea. A creative collaboration. Something we haven’t
            imagined yet.
          </p>
        </div>
        <Link href="/contact" className="cta-circle">
          Let’s build
          <br />
          something <ArrowUpRight aria-hidden="true" size={28} />
        </Link>
        <span className="cta-star" aria-hidden="true">
          ✳
        </span>
      </Reveal>
    </section>
  );
}
