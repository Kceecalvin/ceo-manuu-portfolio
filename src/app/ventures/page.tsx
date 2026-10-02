import type { Metadata } from "next";
import VentureDirectory from "@/components/VentureDirectory";
import PartnerCTA from "@/components/PartnerCTA";
import Reveal from "@/components/Reveal";
import BusinessWebsites from "@/components/BusinessWebsites";
export const metadata: Metadata = {
  title: "The ventures",
  description:
    "Explore the Manuu Spaces business vision: Seroxide, automotive, healthcare, hospitality, property, trade, wellness, logistics and digital products.",
};
export default function VenturesPage() {
  return (
    <>
      <section className="shell page-section">
        <Reveal className="page-heading">
          <span className="eyebrow">THE MANUU SPACES PORTFOLIO</span>
          <h1>
            A world of
            <br />
            <em>possibilities.</em>
          </h1>
          <p>
            Different industries. Shared ambition. Explore the businesses,
            brands and ideas that make up the Manuu Spaces vision.
          </p>
        </Reveal>
        <BusinessWebsites />
        <div className="section-heading" style={{ marginTop: 80 }}><div><span className="eyebrow">THE BIGGER PICTURE</span><h2>Explore by business area.</h2></div></div>
        <VentureDirectory />
      </section>
      <PartnerCTA />
    </>
  );
}
