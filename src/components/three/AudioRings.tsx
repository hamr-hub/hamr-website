import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AudioRingsProps {
  audioLevel?: number
}

export default function AudioRings({ audioLevel = 0 }: AudioRingsProps) {
  const groupRef = useRef<THREE.Group>(null)
  const ringsRef = useRef<THREE.Mesh[]>([])

  const rings = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      radius: 1.2 + i * 0.5,
      opacity: 0.6 - i * 0.08,
    }))
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.x = t * 0.15
    groupRef.current.rotation.y = t * 0.1

    ringsRef.current.forEach((ring, i) => {
      if (!ring) return
      const pulse = 1 + audioLevel * (1 - i * 0.1) * 1.5
      const baseScale = 1 + Math.sin(t * 2 + i * 0.5) * 0.05
      ring.scale.setScalar(pulse * baseScale)
      ;(ring.material as THREE.MeshBasicMaterial).opacity =
        (0.5 - i * 0.06) * (1 + audioLevel * 0.8)
    })
  })

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) ringsRef.current[i] = el }}
          rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}
        >
          <torusGeometry args={[ring.radius, 0.015, 8, 128]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#FF6B35' : '#6366f1'}
            transparent
            opacity={ring.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}
