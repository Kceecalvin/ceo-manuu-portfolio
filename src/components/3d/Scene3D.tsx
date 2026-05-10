'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Float,
  Text,
  MeshDistortMaterial,
  Sphere,
  Box,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useCursor
} from '@react-three/drei'
import * as THREE from 'three'
import VentureCard3D from './VentureCard3D'

interface Venture {
  id: string
  name: string
  category: string
  icon: string
  color: string
  position: [number, number, number]
}

const ventures: Venture[] = [
  { id: 'automotive', name: 'Automotive', category: 'Business', icon: '🚗', color: '#0044FF', position: [-3, 0, 0] },
  { id: 'healthcare', name: 'Healthcare', category: 'Business', icon: '🏥', color: '#0044FF', position: [0, 0, 0] },
  { id: 'lifestyle', name: 'Lifestyle', category: 'Business', icon: '✈️', color: '#0044FF', position: [3, 0, 0] },
  { id: 'real-estate', name: 'Real Estate', category: 'Business', icon: '🏢', color: '#0044FF', position: [-3, -2, -3] },
  { id: 'imports', name: 'Imports', category: 'Business', icon: '📦', color: '#0044FF', position: [0, -2, -3] },
  { id: 'beauty', name: 'Beauty & Wellness', category: 'Business', icon: '💄', color: '#FF66B2', position: [3, -2, -3] },
  { id: 'transport', name: 'Transport & Logistics', category: 'Business', icon: '🚚', color: '#0044FF', position: [-3, -2, 3] },
  { id: 'digital', name: 'Digital Systems', category: 'Business', icon: '💻', color: '#0044FF', position: [0, -2, 3] },
  { id: 'seroxide', name: 'Seroxide', category: 'Flagship', icon: '⚡', color: '#FF66B2', position: [0, 1, -5] },
]

function FloatingBackground() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.1}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Sphere
            args={[0.02 + Math.random() * 0.05, 16, 16]}
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10 - 5
            ]}
          >
            <MeshDistortMaterial
              color="#0044FF"
              opacity={0.3}
              transparent
              distort={0.3}
              speed={2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0044FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF66B2" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </>
  )
}

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
      <planeGeometry args={[30, 20]} />
      <meshStandardMaterial
        color="#0a0a1a"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

function MainTitle() {
  return (
    <group position={[0, 4, -3]}>
      <Text
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/bodoni-mod/ajXe3kUvw3mHgyltxThjJS0L.pdf"
      >
        CEO MANUU
      </Text>
      <Text
        fontSize={0.3}
        color="#0044FF"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.4, 0]}
      >
        The Empire Architect
      </Text>
    </group>
  )
}

export default function Scene3D() {
  const [selectedVenture, setSelectedVenture] = useState<string | null>(null)

  return (
    <div className="w-full h-screen bg-[var(--bg-primary)]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />

        <SceneLighting />

        <group position={[0, 0, 0]}>
          <MainTitle />
          <GroundPlane />
          <FloatingBackground />

          {ventures.map((venture) => (
            <VentureCard3D
              key={venture.id}
              {...venture}
              isSelected={selectedVenture === venture.id}
              onClick={() => setSelectedVenture(venture.id)}
            />
          ))}
        </group>

        <ContactShadows
          position={[0, -3.9, 0]}
          opacity={0.4}
          scale={30}
          blur={2}
        />

        <Environment preset="city" />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={15}
          dampingFactor={0.05}
        />
      </Canvas>

      {selectedVenture && (
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => setSelectedVenture(null)}
            className="bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}