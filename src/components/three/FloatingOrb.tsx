import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingOrbProps {
  position: [number, number, number]
  color: string
  size?: number
  speed?: number
  distort?: number
}

export default function FloatingOrb({ position, color, size = 0.5, speed = 1, distort = 0.4 }: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.3
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.z = t * 0.1
  })

  return (
    <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.85}
      />
    </Sphere>
  )
}
