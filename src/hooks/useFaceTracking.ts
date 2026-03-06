import { useEffect, useRef, useState, useCallback } from 'react'

interface FacePosition {
  x: number
  y: number
  detected: boolean
}

export function useFaceTracking(enabled: boolean) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animFrameRef = useRef<number>(0)
  const [face, setFace] = useState<FacePosition>({ x: 0, y: 0, detected: false })
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)

  const detectFace = useCallback((video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.drawImage(video, 0, 0)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    let sumX = 0, sumY = 0, count = 0
    const w = canvas.width
    const h = canvas.height

    for (let y = 0; y < h; y += 4) {
      for (let x = 0; x < w; x += 4) {
        const i = (y * w + x) * 4
        const r = data[i], g = data[i + 1], b = data[i + 2]
        if (r > 100 && g > 60 && b > 40 && r > g && r > b && (r - g) > 15) {
          sumX += x
          sumY += y
          count++
        }
      }
    }

    if (count > 500) {
      const cx = sumX / count / w
      const cy = sumY / count / h
      setFace({ x: cx * 2 - 1, y: -(cy * 2 - 1), detected: true })
    } else {
      setFace(prev => ({ ...prev, detected: false }))
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const canvas = document.createElement('canvas')
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
        videoRef.current = video

        video.onloadedmetadata = () => {
          video.play()
          const loop = () => {
            if (video.readyState >= 2) detectFace(video, canvas)
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
  }, [enabled, detectFace])

  return { face, hasPermission }
}
