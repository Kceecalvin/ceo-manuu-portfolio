'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PartnershipCTA = () => {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="glass-panel p-10 sm:p-24 rounded-[40px] sm:rounded-[64px] border-white/10 relative overflow-hidden group shadow-[0_0_150px_-30px_oklch(60%_0.25_255_/_15%)]"
        >
          {/* Inner Light Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />
          <div className="absolute inset-0 scanline-overlay opacity-[0.03]" />
          
          <span className="text-electric-blue font-black text-[10px] uppercase tracking-[0.5em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-electric-blue/20 relative z-10">Direct Connection</span>
          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-[-0.06em] leading-[0.85] mb-8 sm:mb-10 text-white relative z-10">
            Ready for <br />
            <span className="text-white/20 italic text-3xl sm:text-7xl">Commercial Synergy?</span>
          </h2>
          <p className="text-base sm:text-xl text-text-secondary leading-relaxed mb-10 sm:mb-14 max-w-xl mx-auto font-medium relative z-10 px-4">
            Open to partnerships, collaborations, and global business opportunities. Join the movement building Africa&apos;s next generation of institutional excellence.
          </p>
          
          <div className="flex justify-center relative z-10 px-6">
            <Link 
              href="/contact"
              className="group flex items-center justify-center gap-4 bg-white text-black w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Conversation
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full group-hover:bg-electric-blue/20 transition-colors duration-1000" />
        </motion.div>
      </div>

      {/* Extreme Radial Glows */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-electric-blue/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-soft-pink/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};

export default PartnershipCTA;
