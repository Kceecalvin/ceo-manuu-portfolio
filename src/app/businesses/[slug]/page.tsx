import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, ArrowDown, Asterisk } from "lucide-react";
import { businesses, businessHref, businessInquiryHref } from "@/lib/businesses";
import BusinessArtwork from "@/components/BusinessArtwork";
import BusinessServices from "@/components/BusinessServices";
import Reveal from "@/components/Reveal";

export function generateStaticParams() { return businesses.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) return { title: "Business not found" };
  return { title: { absolute: `${business.name} — ${business.headline} ${business.accent}` }, description: business.intro,
    alternates: { canonical: businessHref(business) },
    openGraph: { title: business.name, description: business.intro, images: [{ url: `/images/businesses/${business.slug}.jpg`, width: 1440, height: 1000 }] },
  };
}
export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) notFound();
  const related = businesses[(businesses.indexOf(business) + 1) % businesses.length];
  const hasProduct = ["seroxide", "manuu-digital"].includes(slug);
  return <div className={`business-site biz-theme-${business.theme}`}>
    <div className="biz-portfolio-bar"><Link href="/ventures#websites"><ArrowLeft size={13} aria-hidden="true" /> CEO Manuu’s portfolio</Link><span>Brand concept · Enquiries welcome</span></div>
    <header className="biz-nav biz-shell">
      <a href="#top" className="biz-wordmark" aria-label={`${business.name} home`}>{business.wordmark}</a>
      <nav aria-label={`${business.name} navigation`}><a href="#explore">Explore</a><a href="#approach">Our vision</a><a href="#connect" className="biz-nav-cta">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
    </header>
    <section className="biz-hero biz-shell">
      <Reveal className="biz-hero-copy"><span className="biz-kicker"><span className="biz-dot" />{business.category}</span>
        <h1>{business.headline}<br /><em>{business.accent}</em></h1>
        <p>{business.intro}</p><Link className="biz-button" href={businessInquiryHref(business)}>{business.action}<ArrowUpRight size={19} aria-hidden="true" /></Link>
        <a className="biz-scroll biz-kicker" href="#explore"><ArrowDown size={16} aria-hidden="true" /> A closer look</a>
      </Reveal>
      <div className="biz-hero-art"><div className="biz-art-halo" /><BusinessArtwork business={business} /><div className="biz-art-caption"><span>THE MANUU SPACES COLLECTION</span><span>{String(businesses.indexOf(business) + 1).padStart(2, "0")}</span></div></div>
    </section>
    <div className="biz-ticker" aria-hidden="true">{business.services.map((service) => <span key={service.name}><Asterisk size={22} />{service.name}</span>)}</div>
    <section id="explore" className="biz-shell biz-section biz-explore">
      <Reveal><span className="biz-kicker">01 / Explore the possibilities</span><h2>{business.art === "care" ? "People at the centre." : business.art === "car" ? "It starts with the details." : business.art === "building" ? "A place for your vision." : business.art === "grooming" ? "Make time for yourself." : "Find your starting point."}</h2><p>Choose an area to explore, then tell us what you have in mind.</p></Reveal>
      <BusinessServices business={business} />
    </section>
    {hasProduct && <section className="biz-product biz-shell">
      <div><span className="biz-kicker">A product you can explore</span><h2>Meet SeroTix.</h2><p>Event discovery, a vibe quiz and a place for your squad’s next plan. See the product for yourself.</p><a className="biz-button" href="https://serotix.co.ke" target="_blank" rel="noopener noreferrer">Visit SeroTix <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div>
      <a href="https://serotix.co.ke" target="_blank" rel="noopener noreferrer" aria-label="Visit SeroTix (opens in a new tab)"><Image src="/images/serotix-desktop.png" width={1440} height={1000} alt="SeroTix event discovery website" sizes="(max-width: 760px) 90vw, 55vw" /></a>
    </section>}
    <section id="approach" className="biz-story"><div className="biz-shell"><span className="biz-kicker">02 / The thinking behind it</span><Reveal><h2>{business.story}</h2></Reveal><div className="biz-story-bottom"><span>A MANUU SPACES VENTURE</span><Link href="/about">Meet the founder <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></section>
    <section id="connect" className="biz-shell biz-section biz-connect"><span className="biz-kicker">03 / Your next move</span><h2>Good things begin<br /><em>with a conversation.</em></h2><Link className="biz-button" href={businessInquiryHref(business)}>{business.action}<ArrowUpRight size={20} aria-hidden="true" /></Link><p>{slug === "pulsewave-medical" ? "General enquiries only. Please do not include medical records or personal health information." : "Share your idea. The team will confirm the scope, availability and next steps directly."}</p></section>
    <footer className="biz-footer biz-shell"><div className="biz-footer-top"><span className="biz-wordmark">{business.wordmark}</span><Link href={businessHref(related)}>Discover {related.name}<ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="biz-footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><Link href="/ventures#websites">The Manuu Spaces collection</Link><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
