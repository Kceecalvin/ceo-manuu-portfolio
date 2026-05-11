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
    <>
      {/* Mobile Top Bar - Minimal Branding */}
      <header className="fixed z-[100] w-full top-0 left-0 px-6 py-4 md:hidden pointer-events-none flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 pointer-events-auto">
          <div className="relative w-8 h-8 overflow-hidden rounded-md">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain grayscale brightness-200"
            />
          </div>
          <span className="text-[14px] font-black text-white uppercase tracking-tighter">Manuu</span>
        </Link>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center pointer-events-auto border-white/10"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Desktop Navigation */}
      <header className="fixed z-[100] w-full top-8 left-0 px-6 pointer-events-none hidden md:block">
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

          <motion.div initial={{ height: 0 }} animate={{ height: 24 }} className="w-px bg-white/10" />

          <div className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
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

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-6">
            <Link href="/contact" className="group flex items-center gap-2 text-white/40 hover:text-electric-blue transition-all duration-300">
              <span className="text-[11px] font-black uppercase tracking-[0.25em]">Connect</span>
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.nav>
      </header>

      {/* Mobile Bottom Navigation Pill - Native Feel */}
      <nav className="fixed md:hidden bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
        <div className="glass-panel px-6 py-4 rounded-[32px] border-white/10 flex justify-around items-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${pathname === item.href ? 'text-electric-blue scale-110' : 'text-white/30'}`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              {pathname === item.href && (
                <motion.div layoutId="nav-dot" className="w-1 h-1 bg-electric-blue rounded-full" />
              )}
            </Link>
          ))}
          <Link 
            href="/contact"
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${pathname === '/contact' ? 'text-soft-pink scale-110' : 'text-white/30'}`}
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
            {pathname === '/contact' && (
              <motion.div layoutId="nav-dot" className="w-1 h-1 bg-soft-pink rounded-full" />
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-obsidian/90 flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-6xl font-black tracking-tighter uppercase text-white/20 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-6xl font-black tracking-tighter uppercase text-electric-blue"
              >
                Connect.
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
