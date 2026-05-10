'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const QuickIntro = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for the creative module
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const introImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop";

  return (
    <section ref={containerRef} className="section-padding bg-transparent relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Parallax Image Module */}
          <div className="md:col-span-6 relative order-2 md:order-1">
            <motion.div
              style={{ y: imageY }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              className="relative aspect-square sm:aspect-[4/5] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-white/10 glass-panel shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] cursor-none group"
            >
              <Image 
                src={introImage}
                alt="Architecture and Design"
                fill
                className={`object-cover transition-all duration-[2000ms] ${
                  isHovered ? 'scale-105 grayscale-0 brightness-[0.4]' : 'scale-110 grayscale brightness-[0.2]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-transparent opacity-80" />

              {/* Floating Detail Reveal */}
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
                        src={introImage}
                        alt="Macro Detail"
                        fill
                        className="object-cover scale-150 brightness-110"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Aesthetic Label */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 p-4 sm:p-6 glass-panel rounded-2xl sm:rounded-3xl border-white/10 group-hover:border-electric-blue/30 transition-all">
                <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">Perspective</div>
                <div className="text-xs sm:text-sm font-black uppercase tracking-tighter text-white">Strategic Infrastructure</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Brand Statement & Stats */}
          <div className="md:col-span-6 order-1 md:order-2">
            <motion.div style={{ y: textY }}>
              <span className="text-soft-pink font-black text-[10px] uppercase tracking-[0.5em] mb-6 sm:mb-10 block underline decoration-2 underline-offset-8 decoration-soft-pink/20 uppercase">Strategic Approach</span>
              
              {/* Creative Text Animation Header */}
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-[-0.07em] leading-[1.2] mb-8 sm:mb-12 text-white overflow-visible pt-16">
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block pb-2"
                >
                  Scaling
                </motion.span>
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white/10 italic pb-2"
                >
                  Sustainable
                </motion.span>
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Growth.
                </motion.span>
              </h2>

              <div className="space-y-8 sm:space-y-12 text-lg sm:text-xl text-text-secondary leading-relaxed font-medium mb-12 sm:mb-16">
                <p>
                  I am Odhiambo Manael Okoth — developing high-performance business ecosystems where strategic vision meets operational excellence.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: '09+', label: 'Strategic Units' },
                    { val: '20+', label: 'Global Partners' }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 sm:p-8 rounded-3xl glass-panel border-white/5 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white/80">{stat.val}</div>
                      <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;
