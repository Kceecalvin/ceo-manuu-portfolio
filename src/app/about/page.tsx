'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Target, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const portraitUrl = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop";

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <main ref={containerRef} className="min-h-[200vh] pt-32 sm:pt-40 pb-20 bg-transparent relative overflow-visible text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Header with Split-Text Animation */}
        <header className="mb-24 sm:mb-40 text-left px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-electric-blue font-black text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-electric-blue/20"
          >
            Executive Profile
          </motion.span>
          <h1 className="text-6xl sm:text-8xl lg:text-[12vw] font-black uppercase tracking-[-0.07em] leading-[1.1] text-white overflow-visible pt-10 sm:pt-16">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block pb-3 sm:pb-4"
            >
              Odhiambo
            </motion.span>
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/5 italic pb-3 sm:pb-4"
            >
              Manael
            </motion.span>
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Okoth
            </motion.span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 sm:gap-20 lg:gap-32 items-start px-4">
          
          {/* LEFT: Scrolling Narrative */}
          <div className="lg:col-span-7 space-y-24 sm:space-y-40 order-2 lg:order-1">
            <section className="space-y-8 sm:space-y-12">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/40 border-l-2 border-electric-blue pl-6 sm:pl-8"
              >
                Vision & Strategic Approach
              </motion.h2>
              <div className="space-y-8 sm:space-y-10 text-lg sm:text-3xl text-text-secondary leading-relaxed font-medium max-w-2xl">
                <p>
                  Commonly referred to as <strong className="text-white font-black uppercase tracking-tighter">CEO MANUU</strong>, I am a strategic architect of high-performance commercial institutions.
                </p>
                <p>
                  My vision centers on the belief that African enterprise must be built on scalable, high-integrity foundations that excel in the global marketplace.
                </p>
              </div>
            </section>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop", 
                  title: 'Strategy', 
                  desc: 'Precision-led operational excellence.' 
                },
                { 
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
                  title: 'Structure', 
                  desc: 'Resilient and sustainable institutions.' 
                },
                { 
                  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", 
                  title: 'Innovation', 
                  desc: 'A forward-thinking, commercial mindset.' 
                },
                { 
                  img: "https://images.unsplash.com/photo-1549423150-1d87f7396443?q=80&w=2070&auto=format&fit=crop", 
                  title: 'Expansion', 
                  desc: 'Connecting African enterprise to global capital.' 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/3] rounded-[40px] sm:rounded-[50px] overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl transition-all duration-700"
                >
                  {/* Background Image - Clears on Hover */}
                  <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover grayscale brightness-[0.25] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-700" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-electric-blue transition-colors duration-500">{item.title}</h4>
                    <p className="text-[10px] sm:text-[11px] text-white/40 group-hover:text-white uppercase font-bold leading-relaxed tracking-widest transition-colors duration-500">{item.desc}</p>
                  </div>

                  {/* Interaction Glow Layer */}
                  <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            <section className="space-y-8 sm:space-y-12">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/40 border-l-2 border-soft-pink pl-6 sm:pl-8"
              >
                The Commercial Ecosystem
              </motion.h2>
              <p className="text-lg sm:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl">
                I lead interconnected commercial architectures across automotive, healthcare, lifestyle, and media — designed as a unified ecosystem where each division amplifies the strength of the whole.
              </p>
              <div className="pt-8 sm:pt-10">
                <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-soft-pink to-transparent" />
              </div>
            </section>
          </div>
          
          {/* RIGHT: Sticky Interactive Portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 self-start order-1 lg:order-2 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              className="relative aspect-[3/4] sm:aspect-[3/4.5] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-white/10 glass-panel shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group cursor-none"
            >
              <Image 
                src={portraitUrl} 
                alt="CEO MANUU"
                fill
                className={`object-cover transition-all duration-[2000ms] ${
                  isHovered ? 'scale-105 grayscale-0 brightness-[0.4]' : 'scale-110 grayscale brightness-[0.9]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              
              {/* Invisible Cursor Lens Reveal - Desktop Only */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    style={{
                      left: mousePos.x,
                      top: mousePos.y,
                      translateX: '-50%',
                      translateY: '-50%',
                    }}
                    className="absolute z-50 pointer-events-none hidden lg:block"
                  >
                    <div className="w-48 h-48 rounded-[40px] overflow-hidden border-2 border-electric-blue/40 shadow-2xl relative">
                      <Image
                        src={portraitUrl}
                        alt="Portrait Detail"
                        fill
                        className="object-cover scale-150 brightness-110"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 p-4 sm:p-6 glass-panel rounded-2xl sm:rounded-3xl border-white/10 group-hover:border-electric-blue/30 transition-all">
                <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Role</div>
                <div className="text-sm sm:text-base font-black uppercase tracking-tighter text-white">CEO / Founder</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Final Signature */}
        <section className="mt-40 sm:mt-60 text-center pb-20 sm:pb-40 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="glass-panel p-12 sm:p-32 rounded-[60px] sm:rounded-[80px] border-electric-blue/10 relative overflow-hidden shadow-[0_0_150px_-40px_oklch(50%_0.28_255_/_20%)] group"
          >
            <span className="text-electric-blue font-black text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] mb-10 sm:mb-12 block underline decoration-2 underline-offset-[12px] decoration-electric-blue/20 uppercase">Signature Mandate</span>
            <h3 className="text-3xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.07em] leading-[0.85] text-white max-w-5xl mx-auto group-hover:scale-[1.01] transition-transform duration-700">
              Scaling African <br />
              <span className="text-white/20 italic text-2xl sm:text-7xl">Commercial Excellence</span> <br />
              Globally.
            </h3>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(50%_0.28_255_/_5%)_0%,transparent_80%)]" />
            
            <div className="mt-12 sm:mt-16 flex justify-center">
              <div className="h-px w-32 sm:w-40 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
