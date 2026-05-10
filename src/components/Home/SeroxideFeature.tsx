'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mic, Camera, Rocket, ArrowRight } from 'lucide-react';

const SeroxideFeature = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const imageUrl = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop";

  return (
    <section ref={containerRef} className="relative min-h-[120vh] sm:min-h-[150vh] bg-transparent overflow-visible py-24 sm:py-40">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-visible">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center overflow-visible">
            
            {/* Image - STICKY LEFT Side */}
            <motion.div
              style={{ scale, opacity }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              className="relative lg:col-span-6 lg:cursor-none order-2 lg:order-1"
            >
              <div className="relative aspect-square sm:aspect-[4/5] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-white/10 glass-panel shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group">
                <Image
                  src={imageUrl}
                  alt="Seroxide Creative Engine"
                  fill
                  className={`object-cover transition-all duration-[2000ms] ${
                    isHovered ? 'lg:scale-105 grayscale-0 lg:brightness-100 brightness-[0.4]' : 'scale-110 grayscale brightness-[0.3]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                
                {/* Floating Detail Reveal - Desktop Only */}
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
                      <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-soft-pink/50 shadow-2xl relative">
                        <Image
                          src={imageUrl}
                          alt="Detail"
                          fill
                          className="object-cover scale-150"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Float UI Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 p-4 sm:p-8 glass-panel rounded-2xl sm:rounded-3xl border-white/20 z-20"
              >
                <div className="text-soft-pink font-black text-2xl sm:text-3xl">92%</div>
                <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Market Expansion</div>
              </motion.div>
            </motion.div>

            {/* Content - SCROLLING Side */}
            <div className="lg:col-span-6 lg:order-2 overflow-visible">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="overflow-visible"
              >
                <span className="text-soft-pink font-black text-[10px] uppercase tracking-[0.5em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-soft-pink/20 uppercase">Core Initiative</span>
                <h2 className="text-5xl sm:text-[6.5vw] font-black uppercase tracking-[-0.05em] leading-[1.1] mb-8 sm:mb-12 text-white overflow-visible pt-14">
                  Seroxide <br />
                  <span className="text-white/10 italic pb-6 block">Entertainment</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-8 sm:mb-12 max-w-xl">
                  A high-impact entertainment engine focused on talent development, professional media production, and scaling cultural influence across global markets.
                </p>

                {/* Immersive Image-Text Overlay Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {[
                    { 
                      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop", 
                      title: 'Artistic Development', 
                      desc: 'Cultivating the next generation of global icons.'
                    },
                    { 
                      img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2070&auto=format&fit=crop", 
                      title: 'Cinematic Production', 
                      desc: 'World-class visual storytelling and sonic excellence.'
                    }
                  ].map((item, i) => (
                    <div key={i} className="group relative aspect-square rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 transition-all duration-700 shadow-2xl">
                      {/* Background Image - Clears on Hover */}
                      <Image 
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover grayscale brightness-[0.25] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1)"
                      />
                      
                      {/* Artistic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent group-hover:from-obsidian/60 transition-all duration-700" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
                        <div className="mb-3 sm:mb-4 w-8 h-[2px] bg-soft-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        <h4 className="text-lg sm:text-xl font-black uppercase tracking-widest mb-1 sm:mb-2 text-white group-hover:text-soft-pink transition-colors duration-500">{item.title}</h4>
                        <p className="text-[9px] sm:text-[10px] text-white/40 group-hover:text-white uppercase font-bold tracking-[0.2em] leading-relaxed transition-colors duration-500 max-w-[20ch]">{item.desc}</p>
                      </div>

                      {/* Interaction Glow Layer */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,178,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    </div>
                  ))}
                </div>

                <div className="flex pt-6 pb-20 overflow-visible">
                  <Link href="/seroxide" className="group flex items-center justify-center gap-4 bg-soft-pink text-white w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-7 min-h-[64px] sm:min-h-[72px] rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(255,102,178,0.4)] relative z-10">
                    Explore Venture
                    <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeroxideFeature;
