import { useEffect, useRef, useState, useCallback } from 'react'

type Gesture = 'none' | 'open_hand' | 'fist' | 'swipe_left' | 'swipe_right'

export function useGestureControl(enabled: boolean) {
  const streamRef = useRef<MediaStream | null>(null)
  const animFrameRef = useRef<number>(0)
  const prevMotionRef = useRef<number>(0)
  const prevCenterXRef = useRef<number>(0.5)
  const [gesture, setGesture] = useState<Gesture>('none')
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const gestureTimeRef = useRef<number>(0)

  const analyzeFrame = useCallback((
    video: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    prevData: Uint8ClampedArray | null
  ): Uint8ClampedArray | null => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    canvas.width = 160
    canvas.height = 120
    ctx.drawImage(video, 0, 0, 160, 120)
    const current = ctx.getImageData(0, 0, 160, 120)
    const data = current.data

    if (!prevData) return data

    let motionPixels = 0
    let motionSumX = 0

    for (let i = 0; i < data.length; i += 16) {
      const diff = Math.abs(data[i] - prevData[i]) +
        Math.abs(data[i + 1] - prevData[i + 1]) +
        Math.abs(data[i + 2] - prevData[i + 2])
      if (diff > 30) {
        motionPixels++
        const pixelIdx = i / 4
        motionSumX += (pixelIdx % 160) / 160
      }
    }

    const motionRatio = motionPixels / (160 * 120 / 4)
    const now = Date.now()

    if (motionRatio > 0.15) {
      const centerX = motionSumX / motionPixels
      const dx = centerX - prevCenterXRef.current

      if (now - gestureTimeRef.current > 600) {
        if (Math.abs(dx) > 0.2) {
          const g: Gesture = dx > 0 ? 'swipe_right' : 'swipe_left'
          setGesture(g)
          gestureTimeRef.current = now
          setTimeout(() => setGesture('none'), 500)
        } else if (motionRatio > 0.35) {
          setGesture('open_hand')
          gestureTimeRef.current = now
          setTimeout(() => setGesture('none'), 400)
        }
      }
      prevCenterXRef.current = centerX
    } else if (motionRatio > 0.04 && motionRatio < 0.12 && prevMotionRef.current > 0.12) {
      if (now - gestureTimeRef.current > 600) {
        setGesture('fist')
        gestureTimeRef.current = now
        setTimeout(() => setGesture('none'), 400)
      }
    }

    prevMotionRef.current = motionRatio
    return data
  }, [])

  useEffect(() => {
    if (!enabled) return

    const canvas = document.createElement('canvas')
    let prevData: Uint8ClampedArray | null = null
    let video: HTMLVideoElement

    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240, facingMode: 'user' },
        })
        streamRef.current = stream
        setHasPermission(true)

        video = document.createElement('video')
        video.srcObject = stream
        video.autoplay = true
        video.muted = true

        video.onloadedmetadata = () => {
          video.play()
          let frameCount = 0
          const loop = () => {
            frameCount++
            if (frameCount % 2 === 0 && video.readyState >= 2) {
              prevData = analyzeFrame(video, canvas, prevData)
            }
            animFrameRef.current = requestAnimationFrame(loop)
          }
          loop()
        }
      } catch {
        setHasPermission(false)
      }
    }

    start()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      streamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [enabled, analyzeFrame])

  return { gesture, hasPermission }
}
