"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { groups, ventures, ventureHref, type Group } from "@/lib/portfolio";
import { businessesFor, businessHref } from "@/lib/businesses";
export default function VentureDirectory() {
  const [active, setActive] = useState<Group>("All ventures");
  const reduced = useReducedMotion();
  const visible = ventures.filter(
    (v) => active === "All ventures" || v.group === active,
  );
  return (
    <div className="venture-directory">
      <div className="directory-toolbar">
        <div
          className="filter-tabs"
          role="group"
          aria-label="Filter business areas"
        >
          {groups.map((group) => (
            <button
              key={group}
              aria-pressed={active === group}
              onClick={() => setActive(group)}
            >
              {group}
              {group === "All ventures" && (
                <span>{ventures.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <span className="result-count micro" role="status">
          {visible.length} business areas
        </span>
      </div>
      <div className="venture-grid" id="venture-results">
        {visible.map((venture, i) => (
          <motion.article
            className="venture-card"
            key={venture.slug}
            initial={false}
            animate={reduced ? { opacity: 1, y: 0 } : { opacity: [0.5, 1], y: [10, 0] }}
            transition={{ duration: 0.35, delay: i * 0.025 }}
          >
            <Link
              href={ventureHref(venture)}
              aria-label={`Explore ${venture.name}`}
            >
              <div
                className={`venture-art tone-${venture.color}`}
                aria-hidden="true"
              >
                <span className="micro">MANUU SPACES / {venture.group}</span>
                <span className="venture-mark">{venture.mark}</span>
                <span className="venture-orbit" />
                <span className="art-label">{venture.descriptor}</span>
                <span className="card-arrow">
                  <ArrowUpRight aria-hidden="true" size={21} />
                </span>
              </div>
              <div className="venture-copy">
                <span className="eyebrow">{venture.group}</span>
                <h3>{venture.name}</h3>
                <p>{venture.summary}</p>
                <span className="text-link">
                  Explore the vision <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
            <div className="venture-site-links">{businessesFor(venture.slug).map((business) => <Link href={businessHref(business)} key={business.slug}>{business.name} <ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
