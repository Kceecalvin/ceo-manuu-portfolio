"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ventures, ventureHref } from "@/lib/portfolio";
import { businessesFor, businessHref } from "@/lib/businesses";

export default function BusinessExplorer() {
  const [active, setActive] = useState(0);
  const venture = ventures[active];
  const sites = businessesFor(venture.slug);
  const featured = sites[0];
  return (
    <div className="business-explorer">
      <div
        className="explorer-controls"
        role="group"
        aria-label="Choose a business to explore"
      >
        {ventures.map((v, i) => (
          <button
            key={v.slug}
            aria-pressed={i === active}
            aria-controls="business-preview"
            onClick={() => setActive(i)}
          >
            <span className="micro">{String(i + 1).padStart(2, "0")}</span>
            <span className={`index-dot tone-${v.color}`} />
            <span>{v.name}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </button>
        ))}
      </div>
      <div
        className="explorer-preview"
        id="business-preview"
        aria-live="polite"
        aria-atomic="true"
      >
        <div key={venture.slug} className="explorer-entry">
          <div className={`explorer-visual tone-${venture.color}`}>
            <span className="micro">
              MANUU SPACES / {String(active + 1).padStart(2, "0")}
            </span>
            {featured ? (
              <div className="explorer-product">
                <span>
                  {featured.name} <ArrowUpRight aria-hidden="true" size={12} />
                </span>
                <Link href={businessHref(featured)} aria-label={`Open ${featured.name} website`}><Image
                  src={`/images/businesses/${featured.slug}.jpg`}
                  alt={`${featured.name} website preview`}
                  width={1440}
                  height={1000}
                  sizes="(max-width: 760px) 90vw, 45vw"
                /></Link>
              </div>
            ) : (
              <>
                <span className="explorer-letter" aria-hidden="true">
                  {venture.mark}
                </span>
                <span className="explorer-rings" aria-hidden="true" />
              </>
            )}
            <span className="explorer-visual-caption">
              {venture.descriptor}
            </span>
          </div>
          <div className="explorer-copy">
            <span className="eyebrow">{venture.group}</span>
            <h3>{venture.name}</h3>
            <p>{venture.summary}</p>
            <div className="explorer-brands">
              {venture.brands.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
            <div className="explorer-site-links">{sites.map((business) => <Link href={businessHref(business)} key={business.slug}>Visit {business.name} <ArrowUpRight size={15} aria-hidden="true" /></Link>)}</div>
            <Link className="text-link" href={ventureHref(venture)}>
              Inside this business <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
