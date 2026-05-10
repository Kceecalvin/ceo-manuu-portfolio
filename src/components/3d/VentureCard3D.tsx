'use client'

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface VentureCard3DProps {
  id: string
  name: string
  category: string
  icon: string
  color: string
  position: [number, number, number]
  isSelected: boolean
  onClick: () => void
}

export default function VentureCard3D({
  name,
  category,
  icon,
  color,
  position,
  isSelected,
  onClick
}: VentureCard3DProps) {
  const meshRef = useRef<THREE.Group>(null)
  const cardRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const cardWidth = 1.8
  const cardHeight = 1.2

  useFrame((state, delta) => {
    if (meshRef.current && cardRef.current) {
      // Smooth hover animation
      const targetScale = hovered || isSelected ? 1.1 : 1
      const targetY = hovered ? position[1] + 0.3 : position[1]

      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 3
      )

      meshRef.current.position.y = THREE.MathUtils.lerp(
        position[1],
        targetY,
        delta * 3
      )

      // Subtle rotation based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        0,
        (state.mouse.y * 0.1) + (isSelected ? 0.15 : 0),
        delta * 2
      )

      // Make card face camera slightly
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        0,
        (state.mouse.x * 0.05),
        delta * 2
      )
    }
  })

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHovered(false)
      }}
      onPointerMissed={(e) => {
        e.stopPropagation()
        setHovered(false)
      }}
    >
      {/* Card Backplate with Glow */}
      <mesh
        ref={cardRef}
        position={[0, 0, -0.05]}
        rotation={[0.02, 0, 0]}
      >
        <boxGeometry args={[cardWidth, cardHeight, 0.02]} />
        <meshStandardMaterial
          color={hovered || isSelected ? color : '#1a1a2e'}
          metalness={0.6}
          roughness={0.4}
          emissive={color}
          emissiveIntensity={hovered || isSelected ? 0.3 : 0.1}
        />
      </mesh>

      {/* Main Card Surface */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[cardWidth, cardHeight, 0.05]} />
        <meshStandardMaterial
          color="#0d0d1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Border/Glow Edge */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[cardWidth - 0.1, cardHeight - 0.1, 0.01]} />
        <meshStandardMaterial
          color={hovered || isSelected ? color : '#2a2a4e'}
          emissive={color}
          emissiveIntensity={hovered || isSelected ? 0.5 : 0.2}
        />
      </mesh>

      {/* Icon */}
      <Text
        position={[0, 0.25, 0.1]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor={color}
      >
        {icon}
      </Text>

      {/* Venture Name */}
      <Text
        position={[0, -0.15, 0.1]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        fontWeight={600}
      >
        {name.toUpperCase()}
      </Text>

      {/* Category Label */}
      <Text
        position={[0, -0.28, 0.1]}
        fontSize={0.05}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight={400}
      >
        {category}
      </Text>

      {/* Selection Ring */}
      {(hovered || isSelected) && (
        <mesh position={[0, 0, 0.08]}>
          <ringGeometry args={[cardWidth / 2 + 0.1, cardWidth / 2 + 0.15, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  )
}