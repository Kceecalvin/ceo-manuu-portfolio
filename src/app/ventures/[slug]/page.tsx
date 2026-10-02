import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { ventures, ventureHref } from "@/lib/portfolio";
import Reveal from "@/components/Reveal";
import PartnerCTA from "@/components/PartnerCTA";
import BusinessWebsites from "@/components/BusinessWebsites";
export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = ventures.find((v) => v.slug === slug);
  return { title: v?.name || "Venture not found", description: v?.summary };
}
export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = ventures.find((v) => v.slug === slug);
  if (!venture) notFound();
  if (slug === "seroxide") redirect("/seroxide");
  const next = ventures[(ventures.indexOf(venture) + 1) % ventures.length];
  return (
    <>
      <section className="shell page-section">
        <Link href="/ventures" className="back-link">
          <ArrowLeft aria-hidden="true" size={16} /> All ventures
        </Link>
        <div className="detail-heading">
          <Reveal className="page-heading">
            <span className="eyebrow">MANUU SPACES / {venture.group}</span>
            <h1>{venture.name}</h1>
            <p>{venture.summary}</p>
            <Link className="button" href={`/contact?venture=${venture.slug}`}>
              Discuss a collaboration{" "}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Reveal>
          <div
            className={`detail-art venture-art tone-${venture.color}`}
            aria-hidden="true"
          >
            <span className="micro">THE CONNECTED VISION</span>
            <span className="venture-mark">{venture.mark}</span>
            <span className="venture-orbit" />
            <span className="art-label">{venture.descriptor}</span>
          </div>
        </div>
        <div className="detail-body">
          <div>
            <span className="eyebrow">THE VISION</span>
            <h2>{venture.descriptor}</h2>
            <p>{venture.vision}</p>
            <div className="brand-tags">
              {venture.brands.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">AREAS OF FOCUS</span>
            <ul className="focus-list">
              {venture.focus.map((f, i) => (
                <li key={f}>
                  <span className="micro">0{i + 1}</span>
                  {f}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {slug === "digital" && (
          <div className="digital-projects">
            <h2>Explore the projects.</h2>
            <a
              href="https://serotix.co.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h3>SeroTix</h3>
                <p>Event discovery, ticketing and experiences.</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        )}
        <BusinessWebsites venture={venture.slug} />
        <Link className="next-venture" href={ventureHref(next)}>
          <span className="eyebrow">KEEP EXPLORING</span>
          <h3>{next.name}</h3>
          <ArrowRight aria-hidden="true" />
        </Link>
      </section>
      <PartnerCTA />
    </>
  );
}
