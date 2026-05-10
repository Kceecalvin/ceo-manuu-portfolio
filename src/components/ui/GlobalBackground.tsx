'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      {/* High-End Cinematic Base Texture */}
      <div className="absolute inset-0 opacity-[0.25] scale-[1.1] rotate-[-2deg]">
        <Image 
          src="https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?q=80&w=2532&auto=format&fit=crop" 
          alt="Cinematic Abstract Atmosphere"
          fill
          priority
          className="object-cover grayscale brightness-[0.3] contrast-[1.2] blur-[2px]"
        />
      </div>
      
      {/* Deep Spatial Gradients (Mesh Gradient Orbs) */}
      <motion.div 
        animate={{ 
          x: ['-20%', '20%', '-20%'],
          y: ['-20%', '10%', '-20%'],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle,oklch(50%_0.28_255_/_25%)_0%,transparent_70%)] blur-[120px]" 
      />
      
      <motion.div 
        animate={{ 
          x: ['20%', '-15%', '20%'],
          y: ['20%', '-10%', '20%'],
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle,oklch(65%_0.21_340_/_20%)_0%,transparent_70%)] blur-[120px]" 
      />

      <motion.div 
        animate={{ 
          x: ['-10%', '10%', '-10%'],
          y: ['10%', '-10%', '10%'],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,oklch(100%_0_0_/_5%)_0%,transparent_60%)] blur-[100px]" 
      />

      {/* High Fidelity Grid System */}
      <div className="absolute inset-0 z-0 opacity-[0.04] grid-background mix-blend-overlay" />
      
      {/* Noise Texture Overlay for Premium Physical Feel */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Vignette for Cinematic Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
};

export default GlobalBackground;
