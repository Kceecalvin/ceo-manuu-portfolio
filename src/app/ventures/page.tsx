'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Stethoscope, 
  GlassWater, 
  Building2, 
  Ship, 
  Scissors, 
  Truck, 
  Cpu, 
  Music,
  ArrowRight
} from 'lucide-react';
import VentureCard from '@/components/Home/VentureCard';
import Link from 'next/link';

const ventures = [
  {
    title: 'Automotive Division',
    description: 'Monarch Performance Studio and Pulsewave Garage - diagnostics, repair, upgrades, and premium automotive experiences.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop',
    href: '/ventures/automotive'
  },
  {
    title: 'Healthcare Division',
    description: 'Pulsewave Medical & Dental Centre - modern healthcare services focused on quality, trust, and accessibility.',
    icon: Stethoscope,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    href: '/ventures/healthcare'
  },
  {
    title: 'Lifestyle & Hospitality',
    description: 'Liquor Hub, hotels, and restaurants - premium experiences in nightlife, dining, and accommodation.',
    icon: GlassWater,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/lifestyle'
  },
  {
    title: 'Real Estate',
    description: 'Property development, rental investments, and large-scale projects including future city concepts.',
    icon: Building2,
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/real-estate'
  },
  {
    title: 'Imports & Global Trade',
    description: 'Auto parts, medical equipment, electronics, and machinery - forming the supply chain backbone.',
    icon: Ship,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/imports'
  },
  {
    title: 'Beauty & Wellness',
    description: 'Beauty shops, spas, and Royale Cuts - grooming and wellness services focused on modern needs.',
    icon: Scissors,
    imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/wellness'
  },
  {
    title: 'Transport & Logistics',
    description: 'Fleet management, delivery systems, and operational support across all business divisions.',
    icon: Truck,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/logistics'
  },
  {
    title: 'Digital Products & Systems',
    description: 'Apps, automation tools, and digital platforms supporting business operations and scalability.',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/digital'
  },
  {
    title: 'Seroxide',
    description: 'Media, events, talent development, and creative influence shaping African culture.',
    icon: Music,
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    href: '/seroxide'
  }
];

const VenturesPage = () => {
  return (
    <main className="min-h-screen pt-32 sm:pt-40 pb-20 bg-transparent relative overflow-visible text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Header with Split-Text Animation */}
        <header className="mb-24 sm:mb-32 text-center max-w-4xl mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-electric-blue font-black text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] mb-6 sm:mb-8 block underline decoration-2 underline-offset-8 decoration-electric-blue/20"
          >
            Institutional Portfolio
          </motion.span>
          <h1 className="text-6xl sm:text-8xl lg:text-[8.5vw] font-black uppercase tracking-[-0.07em] leading-[1.1] text-white overflow-visible mb-10 sm:mb-12 pt-16 sm:pt-20">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block pb-3 sm:pb-4"
            >
              Business
            </motion.span>
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/5 italic pb-6 sm:pb-8"
            >
              Portfolio
            </motion.span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto px-4">
            A diversified multi-industry ecosystem engineered for sustainable scalability, operational excellence, and global growth.
          </p>
        </header>

        {/* Cinematic Grid with Staggered Snappy Entry */}
        <section className="mb-40 sm:mb-60">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {ventures.map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: (i % 3) * 0.1 
                }}
                className="w-full h-[400px] sm:h-[500px]"
              >
                <VentureCard {...v} />
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Dynamic Partner CTA with Glassmorphism */}
        <section className="pb-32 sm:pb-40 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="glass-panel p-12 sm:p-28 rounded-[48px] sm:rounded-[80px] border-electric-blue/10 relative overflow-hidden shadow-[0_0_150px_-40px_oklch(50%_0.28_255_/_20%)]"
          >
            <span className="text-electric-blue font-black text-[9px] sm:text-[10px] uppercase tracking-[0.5em] mb-8 sm:mb-10 block underline decoration-2 underline-offset-[10px] decoration-electric-blue/20 uppercase">Global Expansion</span>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-[-0.06em] leading-[0.85] text-white max-w-3xl mx-auto mb-10 sm:mb-12">
              Seeking <br />
              <span className="text-white/20 italic">Elite Business</span> <br />
              Partnerships.
            </h2>
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-white text-black px-10 sm:px-14 py-5 sm:py-6 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              Direct Inquiry
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(50%_0.28_255_/_5%)_0%,transparent_75%)]" />
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default VenturesPage;
