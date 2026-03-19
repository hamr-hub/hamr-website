import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Grid } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import ParticleField from './ParticleField'
import FloatingOrb from './FloatingOrb'
import AudioRings from './AudioRings'

interface HeroSceneProps {
  faceX?: number
  faceY?: number
  audioLevel?: number
}

function getPerformanceTier(): 'high' | 'mid' | 'low' {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)
  const cores = navigator.hardwareConcurrency ?? 4
  if (isMobile || cores <= 2) return 'low'
  if (cores <= 4) return 'mid'
  return 'high'
}

export default function HeroScene({ faceX = 0, faceY = 0, audioLevel = 0 }: HeroSceneProps) {
  const tier = useMemo(() => getPerformanceTier(), [])
  const particleCount = tier === 'high' ? 2500 : tier === 'mid' ? 1200 : 600
  const starCount = tier === 'high' ? 4000 : tier === 'mid' ? 2000 : 800

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: tier !== 'low', alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      frameloop={tier === 'low' ? 'demand' : 'always'}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#c4b5fd" />
        <pointLight position={[-10, -5, -5]} intensity={1.2} color="#fbbf24" />
        <pointLight position={[0, -10, 5]} intensity={0.8} color="#818cf8" />

        <Stars radius={80} depth={50} count={starCount} factor={3} fade speed={0.4} />

        <Grid
          position={[0, -3, 0]}
          args={[20, 20]}
          cellSize={0.8}
          cellThickness={0.5}
          cellColor="#4c1d95"
          sectionSize={3}
          sectionThickness={1}
          sectionColor="#7c3aed"
          fadeDistance={18}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid
        />

        <ParticleField count={particleCount} audioLevel={audioLevel} />
        <AudioRings audioLevel={audioLevel} />

        <FloatingOrb position={[-3.5, 1.5, -2]} color="#7c3aed" size={0.7} speed={0.7} distort={0.5} />
        <FloatingOrb position={[3.5, -1, -2]} color="#f59e0b" size={0.55} speed={1.1} distort={0.45} />
        {tier !== 'low' && (
          <>
            <FloatingOrb position={[1, 2.5, -3]} color="#6366f1" size={0.45} speed={0.5} distort={0.6} />
            <FloatingOrb position={[-2, -2.5, -1]} color="#a78bfa" size={0.38} speed={1.4} distort={0.35} />
          </>
        )}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          target={[faceX * 2, faceY * -2, 0]}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  )
}

