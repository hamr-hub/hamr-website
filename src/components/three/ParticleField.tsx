import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** 粒子场的固定随机种子 —— 保证每次挂载生成同一片粒子分布 */
const PARTICLE_SEED = 0x9e3779b9

/**
 * mulberry32 —— 确定性伪随机数生成器。
 *
 * 渲染路径上不能用 `Math.random()`（React 纯度规则），而这里又需要一份
 * 随机分布来铺粒子。确定性 PRNG 同时满足两点：纯函数 + 可复现。
 */
function seededRandom(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface ParticleFieldProps {
  count?: number
  audioLevel?: number
}

export default function ParticleField({ count = 2000, audioLevel = 0 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    // 渲染期不能用 Math.random —— React 19 的纯度规则（react-hooks/purity）
    // 禁止在渲染路径上调用 impure 函数。改用确定性 PRNG：同一 seed 永远
    // 生成同一片粒子场，既满足纯度规则，也让粒子分布可复现。
    const rand = seededRandom(PARTICLE_SEED)
    for (let i = 0; i < count; i++) {
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(2 * rand() - 1)
      const r = 2.5 + rand() * 3

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const t = rand()
      if (t < 0.5) {
        colors[i * 3] = 0.5 + t * 0.5
        colors[i * 3 + 1] = 0.2 + t * 0.4
        colors[i * 3 + 2] = 0.8 + t * 0.2
      } else {
        colors[i * 3] = 0.9 + t * 0.1
        colors[i * 3 + 1] = 0.7 + t * 0.1
        colors[i * 3 + 2] = 0.1 + t * 0.2
      }
    }
    return [positions, colors]
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    const pulse = 1 + audioLevel * 0.8
    meshRef.current.rotation.y = t * 0.05
    meshRef.current.rotation.x = Math.sin(t * 0.03) * 0.1
    meshRef.current.scale.setScalar(pulse)
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}
