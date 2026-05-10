'use client';

import React from 'react';
import { ThreeDHero } from '@/components/3d/ThreeDHero';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function ThreeDShowcase() {
  return (
    <>
      <style jsx global>{`
        html, body {
          overflow: auto;
        }
      `}</style>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <ThreeDHero />
      </main>
      <Footer />
    </>
  );
}