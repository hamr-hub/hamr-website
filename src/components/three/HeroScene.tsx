import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import ParticleField from './ParticleField'
import FloatingOrb from './FloatingOrb'
import AudioRings from './AudioRings'

interface HeroSceneProps {
  faceX?: number
  faceY?: number
  audioLevel?: number
}

export default function HeroScene({ faceX = 0, faceY = 0, audioLevel = 0 }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF6B35" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#6366f1" />
        <spotLight position={[0, 10, 5]} intensity={1} color="#ffffff" />

        <Stars radius={80} depth={50} count={3000} factor={3} fade speed={0.5} />

        <ParticleField count={2500} audioLevel={audioLevel} />
        <AudioRings audioLevel={audioLevel} />

        <FloatingOrb position={[-3, 1, -1]} color="#FF6B35" size={0.6} speed={0.8} distort={0.5} />
        <FloatingOrb position={[3, -1, -2]} color="#6366f1" size={0.5} speed={1.2} distort={0.4} />
        <FloatingOrb position={[0, 2, -3]} color="#0ea5e9" size={0.4} speed={0.6} distort={0.6} />
        <FloatingOrb position={[-2, -2, -1]} color="#10b981" size={0.35} speed={1.5} distort={0.3} />

        <Environment preset="night" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          target={[faceX * 2, faceY * -2, 0]}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  )
}
