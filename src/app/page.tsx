import Ventures from "@/components/Home/Ventures";
import SeroxideFeature from "@/components/Home/SeroxideFeature";
import PartnershipCTA from "@/components/Home/PartnershipCTA";
import QuickIntro from "@/components/Home/QuickIntro";
import FounderStrip from "@/components/Home/FounderStrip";
import { HeroSection } from "@/components/ui/hero-section-5";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickIntro />
      <Ventures />
      <SeroxideFeature />
      <FounderStrip />
      <PartnershipCTA />
    </>
  );
}
