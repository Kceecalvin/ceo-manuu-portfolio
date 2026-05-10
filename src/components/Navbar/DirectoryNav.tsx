'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DirectoryNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  {
    number: '01',
    name: 'Empire',
    href: '/ventures',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    number: '02',
    name: 'Vision',
    href: '/about',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    number: '03',
    name: 'Creative',
    href: '/seroxide',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
  },
  {
    number: '04',
    name: 'Inquiry',
    href: '/contact',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  },
];

const DirectoryNav: React.FC<DirectoryNavProps> = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--bg-primary)] text-white"
        >
          {/* Background Image Reveal */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${navLinks[hoveredIndex].image})` }}
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/90 via-transparent to-[var(--bg-primary)]/90" />
          </div>

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between p-8 md:p-12">
            <Link href="/" onClick={onClose} className="text-xl md:text-2xl font-bold tracking-tight">
              CEO <span className="text-[var(--accent-blue)]">MANUU</span>
            </Link>
            <button
              onClick={onClose}
              className="p-3 border border-white/20 rounded-full hover:border-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Directory Links */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-24">
            <div className="space-y-6 md:space-y-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group block"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs font-mono text-[var(--accent-blue)] opacity-60 hidden md:inline">
                      {link.number}
                    </span>
                    <h2 className="text-5xl md:text-8xl font-bold leading-none tracking-tight transition-all duration-300 group-hover:text-[var(--accent-blue)] group-hover:italic">
                      {link.name}
                    </h2>
                  </div>
                  <div className="h-px bg-white/10 mt-4 group-hover:bg-[var(--accent-blue)] transition-colors duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between p-8 md:p-12 border-t border-white/10 text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            <div className="flex gap-8 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">X</a>
            </div>
            <p>2026 MANUU EMPIRE // NAIROBI</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DirectoryNav;