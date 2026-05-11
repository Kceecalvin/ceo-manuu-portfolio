'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface VentureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  href?: string;
}

const VentureCard: React.FC<VentureCardProps> = ({ title, description, icon: Icon, imageUrl, href = "/ventures" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={href} className="block h-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative h-[500px] rounded-[50px] overflow-hidden border border-white/5 bg-white/[0.02] lg:hover:cursor-none group shadow-2xl"
      >
        {/* Runlayer Masking Detail */}
        <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />

        {/* Primary Background Image - Fluid Depth */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
              isHovered ? 'lg:scale-105 grayscale-0 brightness-100' : 'scale-110 grayscale brightness-[0.2]'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent transition-opacity duration-1000 ${isHovered ? 'opacity-40' : 'opacity-90'}`} />
          {/* Professional Glow Effect on Hover */}
          <div className={`absolute inset-0 bg-electric-blue/10 transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Custom Interaction Reveal - Only on Desktop/Hover devices */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                left: mousePos.x,
                top: mousePos.y,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="absolute z-50 pointer-events-none hidden lg:block"
            >
              <div className="w-40 h-40 rounded-[35px] overflow-hidden border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative">
                <Image
                  src={imageUrl}
                  alt="High Fidelity Detail"
                  fill
                  className="object-cover scale-150 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent" />
              </div>
              {/* Fluid "Trailing" Dot */}
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-electric-blue rounded-full blur-sm animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Layer - Professional & Minimal */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="overflow-hidden">
              <motion.h3 
                animate={isHovered ? { y: 0 } : { y: 0 }}
                className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.07em] text-white"
              >
                {title}<span className="text-electric-blue">.</span>
              </motion.h3>
            </div>
            
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium max-w-[320px] opacity-60 sm:opacity-40 group-hover:opacity-100 transition-opacity duration-700">
              {description}
            </p>
            
            <div className="pt-4 sm:pt-6 flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-electric-blue opacity-100 sm:opacity-0 group-hover:opacity-100 translate-y-0 sm:translate-y-6 group-hover:translate-y-0 transition-all duration-1000">
              Explore Division
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Surface Polish Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.03),transparent_100%)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
};

export default VentureCard;
