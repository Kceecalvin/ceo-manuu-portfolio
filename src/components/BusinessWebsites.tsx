"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { businesses, businessHref } from "@/lib/businesses";
import { groups, ventures, type Group } from "@/lib/portfolio";

export default function BusinessWebsites({ venture }: { venture?: string }) {
  const [active, setActive] = useState<Group>("All ventures");
  const visible = businesses.filter((b) => (!venture || b.venture === venture) && (active === "All ventures" || ventures.find((v) => v.slug === b.venture)?.group === active));
  return <section id="websites" className="website-collection">
    <div className="website-collection-heading"><div><span className="eyebrow">ENTER THEIR WORLD</span><h2>Different businesses.<br /><em>Distinct identities.</em></h2></div><p>Take a look inside. Each brand has its own website experience, visual identity and a way to start a conversation.</p></div>
    {!venture && <div className="website-filter" role="group" aria-label="Filter business websites">{groups.map((group) => <button key={group} aria-pressed={group === active} onClick={() => setActive(group)}>{group}</button>)}<span role="status">{visible.length} websites</span></div>}
    <div className="website-grid">{visible.map((business, index) => <article className="website-card" key={business.slug}>
      <Link className="website-screen" href={businessHref(business)} aria-label={`Open ${business.name} website`}>
        <div className="website-browser"><span aria-hidden="true">● ● ●</span><span>{business.name}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
        <div className="website-screenshot"><Image src={`/images/businesses/${business.slug}.jpg`} alt={`${business.name} website homepage preview`} width={1440} height={1000} loading={index < 2 ? "eager" : "lazy"} sizes="(max-width: 760px) 90vw, 45vw" /><span className="website-open">Explore website <ArrowUpRight size={18} aria-hidden="true" /></span></div>
      </Link>
      <div className="website-card-copy"><div><span className="eyebrow">{business.category}</span><h3><Link href={businessHref(business)}>{business.name}</Link></h3><p>{business.headline} {business.accent}</p></div><span className="website-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
      <div className="website-card-footer"><span>Brand website preview</span><Link href={businessHref(business)}>Visit website <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </article>)}</div>
    {(!venture || ["digital", "seroxide"].includes(venture)) && <a className="website-existing" href="https://serotix.co.ke" target="_blank" rel="noopener noreferrer"><div><span className="eyebrow">ALSO IN THE COLLECTION</span><h3>SeroTix ↗</h3><p>Explore the existing event discovery and ticketing website.</p></div><span className="text-link">serotix.co.ke <ArrowUpRight size={20} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span></a>}
  </section>;
}
