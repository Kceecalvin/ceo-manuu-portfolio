'use client'

import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export function ThreeDHero() {
  return (
    <div className="relative w-full h-screen bg-[var(--bg-primary)]">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center text-[var(--accent-blue)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-blue)] mx-auto mb-4"></div>
            <p className="text-sm uppercase tracking-widest">Loading Experience...</p>
          </div>
        </div>
      }>
        <Scene3D />
      </Suspense>

      {/* Overlay UI */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest text-center">
            Drag to explore • Click cards for details
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThreeDHero