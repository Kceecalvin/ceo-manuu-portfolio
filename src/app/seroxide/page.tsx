'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const seroxideItems = [
  { 
    name: 'Events', 
    description: 'High-level experiences and lifestyle activations.', 
    img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Talent & Music', 
    description: 'Developing and promoting artists into recognized brands.', 
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Media & Productions', 
    description: 'Content creation and premium visual production.', 
    img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Digital Distribution', 
    description: 'Strategic platforms for global content reach.', 
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Creative Academy', 
    description: 'Professional development programs for creatives.', 
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Creative Studio', 
    description: 'Professional production environments.', 
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop' 
  }
];

const SeroxidePage = () => {
  return (
    <main className="min-h-screen pt-32 sm:pt-40 pb-20 bg-transparent relative overflow-visible text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 sm:mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-soft-pink font-black text-[9px] sm:text-[10px] uppercase tracking-[0.4em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-soft-pink/20"
          >
            Commercial Excellence
          </motion.span>
          <h1 className="text-6xl sm:text-8xl lg:text-[8vw] font-black uppercase tracking-[-0.07em] leading-[1.2] text-white overflow-visible mb-10 sm:mb-12 pt-16 sm:pt-20">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block pb-3 sm:pb-6"
            >
              Seroxide
            </motion.span>
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/5 italic pb-6 sm:pb-10"
            >
              Entertainment
            </motion.span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto px-4">
            Advancing African culture through high-performance media, strategic talent development, and commercial expansion.
          </p>
        </header>

        <section className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 mb-40 sm:mb-60 items-start px-4">
          <div className="lg:col-span-5 space-y-8 sm:space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-[40px] sm:rounded-[50px] glass-panel border-soft-pink/10 relative overflow-hidden group shadow-[0_0_120px_-30px_oklch(65%_0.21_340_/_15%)]"
            >
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-none">Scaling <br /><span className="text-soft-pink italic">Culture.</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
                Seroxide Entertainment is a commercial powerhouse built to drive cultural influence and connect African enterprise to global markets. We build more than content; we engineer commercial value.
              </p>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-soft-pink/10 blur-3xl rounded-full group-hover:bg-soft-pink/20 transition-colors" />
            </motion.div>
            
            <div className="p-8 sm:p-10 border-l-2 border-soft-pink bg-white/[0.02] rounded-r-[32px]">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3 sm:mb-4 uppercase">Direct Mandate</p>
              <p className="text-xl sm:text-2xl font-black tracking-tight italic text-white/90 leading-tight">Establishing Africa as a dominant force in global commercial entertainment.</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {seroxideItems.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.05 }}
                className="group relative aspect-square rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/10 transition-all duration-700 shadow-xl"
              >
                {/* Background Image - Clears on Hover */}
                <Image 
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover grayscale brightness-[0.25] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1)"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent group-hover:from-obsidian/40 transition-all duration-700" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-soft-pink transition-colors">{item.name}</h3>
                  <p className="text-[10px] sm:text-[11px] text-white/40 group-hover:text-white leading-relaxed font-medium uppercase tracking-widest transition-colors">{item.description}</p>
                </div>
                
                {/* Interaction Glow Layer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,178,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="text-center pb-20 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="glass-panel p-12 sm:p-32 rounded-[60px] sm:rounded-[80px] border-electric-blue/10 relative overflow-hidden shadow-[0_0_150px_-40px_oklch(50%_0.28_255_/_20%)]"
          >
            <span className="text-electric-blue font-black text-[9px] sm:text-[10px] uppercase tracking-[0.6em] mb-8 sm:mb-10 block underline decoration-2 underline-offset-[12px] decoration-electric-blue/20 uppercase">The Horizon</span>
            <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-[-0.07em] leading-[0.8] mb-10 sm:mb-12 text-white">
              Manuu <br />
              <span className="text-white/20 italic">Spaces.</span>
            </h2>
            <p className="text-lg sm:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16 font-medium">
              Integrating African excellence with global commercial standards across physical and digital platforms.
            </p>
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-white text-black px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(255,255,255,0.2)] hover:scale-[1.02] w-full sm:w-auto"
            >
              Direct Inquiry
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(50%_0.28_255_/_5%)_0%,transparent_80%)]" />
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default SeroxidePage;
