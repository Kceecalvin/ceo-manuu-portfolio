'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
    { icon: <Github size={18} />, label: 'GitHub', href: '#' }
  ];

  return (
    <footer className="bg-obsidian py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          {/* Logo & Vision */}
          <div className="md:col-span-6">
            <Link href="/" className="flex items-center gap-4 group mb-8">
              <div className="relative w-12 h-12 overflow-hidden rounded-md">
                <Image 
                  src="/logo.png" 
                  alt="Manuu Spaces Logo" 
                  fill 
                  className="object-contain grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <span className="text-2xl font-black tracking-[-0.04em] text-white uppercase">
                Manuu Spaces
              </span>
            </Link>
            <p className="text-xl text-text-secondary leading-relaxed max-w-sm font-medium">
              &quot;Advancing African enterprise through strategic operational excellence and global commercial integration.&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Ventures', 'Seroxide', 'About', 'Contact'].map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/${link.toLowerCase()}`}
                    className="text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Connect</h4>
            <div className="flex flex-col gap-6">
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={social.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-white/40 hover:text-electric-blue transition-colors group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/5 transition-colors"
                    >
                      {social.icon}
                    </motion.div>
                    <span className="text-xs font-black uppercase tracking-widest">{social.label}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
            &copy; {currentYear} MANUU SPACES // EXCELLENCE IS STANDARD
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/5">Strategic Growth</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/5">All Rights Reserved</span>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-electric-blue/5 blur-[120px] rounded-full" />
    </footer>
  );
};

export default Footer;
