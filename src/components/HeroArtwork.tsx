"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, AudioLines, Globe2 } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
export default function HeroArtwork() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 90, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 90, damping: 24 });
  return (
    <div
      className="hero-art"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(-((e.clientY - r.top) / r.height - 0.5) * 9);
        y.set(((e.clientX - r.left) / r.width - 0.5) * 9);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <span className="art-coordinates micro">01°17′ S &nbsp; 36°49′ E</span>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <motion.div className="brand-sculpture" style={{ rotateX, rotateY }}>
        <div className="sculpture-back" aria-hidden="true" />
        <div className="sculpture-gold" aria-hidden="true" />
        <div className="sculpture-main">
          <span className="micro">THE CONNECTED VISION</span>
          <Image
            src="/logo.png"
            alt="Manuu Spaces — Unified Growth, Enduring Excellence"
            width={667}
            height={516}
            preload
          />
          <div className="sculpture-caption">
            <span>MANUU SPACES</span>
            <Globe2 aria-hidden="true" size={18} />
          </div>
        </div>
      </motion.div>
      <Link href="/seroxide" className="art-chip culture-chip">
        <span className="chip-icon">
          <AudioLines aria-hidden="true" size={21} />
        </span>
        <span>
          <strong>Seroxide</strong>
          <small>Culture in motion</small>
        </span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
      <a
        href="https://serotix.co.ke"
        className="art-chip ticket-chip"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ticket-mark">s.</span>
        <span>
          <strong>SeroTix</strong>
          <small>Your next experience</small>
        </span>
        <ArrowUpRight aria-hidden="true" size={16} />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <span className="art-bottom micro">BUSINESS × TECHNOLOGY × CULTURE</span>
      <span className="art-spark" aria-hidden="true">
        ✳
      </span>
    </div>
  );
}
