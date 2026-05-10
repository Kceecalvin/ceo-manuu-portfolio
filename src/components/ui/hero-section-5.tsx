'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth fluid fading and scaling
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Business Background"
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      <div className="absolute inset-0 scanline-overlay opacity-[0.03] z-1" />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center"
      >
        {/* Clean Headline - Manuu Spaces */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-black tracking-[-0.08em] uppercase leading-[0.8] mb-12 max-w-[10ch]"
        >
          <span className="text-gradient-grainy">Manuu</span> <br />
          <span className="text-white/5">Spaces</span>
        </motion.h1>

        {/* Professional Mission Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl text-text-secondary max-w-3xl mb-16 leading-relaxed font-medium px-4"
        >
          Advancing African enterprise through strategic investment, <br className="hidden md:block" /> 
          operational excellence, and global capital integration.
        </motion.p>

        {/* Action Vectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto px-6"
        >
          <Link
            href="/ventures"
            className="group flex items-center justify-center gap-4 bg-white text-black w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] hover:scale-[1.05] active:scale-[0.95]"
          >
            Business Portfolio
            <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 glass-panel text-white/80 w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all border-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            Partnership Inquiry
          </Link>
        </motion.div>
      </motion.div>

      {/* Atmospheric Scroll Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-electric-blue via-electric-blue/20 to-transparent" />
      </motion.div>
    </section>
  );
}
