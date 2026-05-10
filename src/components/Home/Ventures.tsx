'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Stethoscope, Building2, Music, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import VentureCard from './VentureCard';

const venturesData = [
  {
    title: 'Automotive',
    category: 'Manuu Spaces',
    description: 'Providing elite automotive performance, specialized diagnostics, and premium logistics solutions.',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop',
    href: '/ventures/automotive'
  },
  {
    title: 'Healthcare',
    category: 'Manuu Spaces',
    description: 'Developing professional medical and dental services centered on accessibility and absolute quality.',
    icon: Stethoscope,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    href: '/ventures/healthcare'
  },
  {
    title: 'Real Estate',
    category: 'Manuu Spaces',
    description: 'Architecting high-value property developments and large-scale urban infrastructure projects.',
    icon: Building2,
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop',
    href: '/ventures/real-estate'
  },
  {
    title: 'Seroxide',
    category: 'Manuu Spaces',
    description: 'Leading African culture through high-impact talent development and world-class media production.',
    icon: Music,
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    href: '/seroxide'
  }
];

export default function Ventures() {
  return (
    <section className="section-padding bg-transparent relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Project Grid with Side-Sticky Header */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Sticky Header Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 self-start mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-electric-blue font-black text-[10px] uppercase tracking-[0.5em] mb-6 block underline decoration-2 underline-offset-8 decoration-electric-blue/20">Institutional Portfolio</span>
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-[-0.06em] leading-[0.85] text-white mb-8 sm:mb-10">
                Business <br />
                <span className="text-white/10 italic">Portfolio.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium mb-10 sm:mb-12">
                A diversified commercial ecosystem built for sustainable growth and global expansion through professional excellence.
              </p>
              <Link href="/ventures" className="group inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto justify-center">
                View All Business Units
                <ArrowUpRight size={16} strokeWidth={3} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Scrolling Project Matrix */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-10">
            {venturesData.map((venture, i) => (
              <motion.div
                key={venture.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[400px] sm:h-[550px]"
              >
                <VentureCard {...venture} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmospheric Energy Glow */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-electric-blue/5 blur-[160px] rounded-full pointer-events-none opacity-30" />
    </section>
  );
}
