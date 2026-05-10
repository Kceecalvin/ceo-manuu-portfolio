'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const FounderStrip = () => {
  return (
    <section className="relative bg-obsidian py-24 sm:py-40 overflow-visible">
      {/* Precise Grid Background for Section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          
          {/* Content - LEFT Side (Scrolling) */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-electric-blue font-black text-[10px] uppercase tracking-[0.5em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-electric-blue/20">Executive Profile</span>
              <h2 className="text-5xl sm:text-[7vw] font-black uppercase tracking-[-0.05em] leading-[0.85] mb-8 sm:mb-12 text-white">
                Odhiambo <br />
                <span className="text-white/10 italic">Manael</span> <br />
                Okoth<span className="text-electric-blue">.</span>
              </h2>

              <div className="space-y-8 sm:space-y-12 text-text-secondary text-lg sm:text-2xl leading-relaxed font-medium max-w-xl">
                <p>
                  As <strong className="text-white font-black uppercase tracking-tighter">CEO MANUU</strong>, I lead a diversified commercial enterprise centered on high-performance operational excellence and strategic growth.
                </p>
                
                <div className="p-6 sm:p-8 border-l-2 border-electric-blue bg-white/5 rounded-r-3xl">
                  <p className="text-white italic font-bold text-base sm:text-lg">
                    &quot;We don&apos;t just build businesses; we design high-performance systems that thrive in the global marketplace.&quot;
                  </p>
                </div>

                <p>
                  My vision is to integrate African enterprise with global markets through institutional strength, strategic investment, and world-class commercial standards.
                </p>
              </div>

              <div className="mt-12 sm:mt-16">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 bg-white text-black w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] justify-center"
                >
                  Professional Background
                  <ArrowUpRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Additional Philosophy blocks */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white/40">Core Philosophy</h3>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
                Every venture within the Manuu Spaces ecosystem is built on a foundation of sustainable growth and operational integrity. We prioritize scalability and absolute commercial excellence above all else.
              </p>
            </motion.div>
          </div>

          {/* Image - RIGHT Side (STICKY on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start order-1 lg:order-2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative aspect-[3/4] sm:aspect-[3/4.5] rounded-[32px] sm:rounded-[60px] overflow-hidden border border-white/10 glass-panel shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop"
                alt="CEO MANUU Portrait"
                fill
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              
              {/* Internal Floating UI Element */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 p-4 sm:p-6 glass-panel rounded-2xl sm:rounded-3xl border-white/10">
                <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">CEO / Founder</div>
                <div className="text-base sm:text-lg font-black uppercase tracking-tighter text-white">Odhiambo Manael Okoth</div>
              </div>
            </motion.div>

            {/* Aesthetic Glow behind sticky element */}
            <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-48 h-48 sm:w-64 sm:h-64 bg-electric-blue/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-soft-pink/5 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none opacity-40" />
    </section>
  );
};

export default FounderStrip;
