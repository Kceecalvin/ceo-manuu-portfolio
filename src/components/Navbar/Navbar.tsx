'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Ventures', href: '/ventures' },
    { label: 'Seroxide', href: '/seroxide' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="fixed z-[100] w-full top-8 left-0 px-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[fit-content] mx-auto flex items-center gap-10 glass-panel px-10 py-4 rounded-full pointer-events-auto border-white/[0.08] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)]"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="relative w-12 h-12 overflow-hidden rounded-md"
          >
            <Image 
              src="/logo.png" 
              alt="Manuu Spaces Logo" 
              fill 
              className="object-contain grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <span className="text-[20px] font-black tracking-[-0.04em] text-white uppercase whitespace-nowrap">
            Manuu Spaces
          </span>
        </Link>

        {/* Precise Separator */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 24 }}
          className="w-px bg-white/10 hidden md:block" 
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:text-white relative group ${
                  pathname === item.href ? 'text-white' : 'text-white/40'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-electric-blue transition-all duration-500 group-hover:w-full ${pathname === item.href ? 'w-full' : ''}`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-white/40 hover:text-electric-blue transition-all duration-300"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.25em]">Connect</span>
            <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/40 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay - Precise Runlayer Style */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-20 left-6 right-6 glass-panel rounded-3xl p-10 pointer-events-auto md:hidden border-white/[0.08]"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-black tracking-[-0.05em] uppercase text-white/40 hover:text-electric-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
              >
                Connect With CEO
                <ArrowRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
