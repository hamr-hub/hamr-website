import { useState } from 'react'
import { Camera, Mic, Hand, X, Check, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface InteractiveControlsProps {
  faceEnabled: boolean
  micEnabled: boolean
  gestureEnabled: boolean
  onToggleFace: () => void
  onToggleMic: () => void
  onToggleGesture: () => void
  faceDetected: boolean
  audioLevel: number
  gesture: string
  facePermission: boolean | null
  micPermission: boolean | null
  gesturePermission: boolean | null
}

export default function InteractiveControls({
  faceEnabled, micEnabled, gestureEnabled,
  onToggleFace, onToggleMic, onToggleGesture,
  faceDetected, audioLevel, gesture,
  facePermission, micPermission, gesturePermission,
}: InteractiveControlsProps) {
  const [expanded, setExpanded] = useState(false)

  const gestureLabels: Record<string, string> = {
    none: '待机',
    open_hand: '张开手掌 ✋',
    fist: '握拳 ✊',
    swipe_left: '左滑 👈',
    swipe_right: '右滑 👉',
  }

  const controls = [
    {
      key: 'face',
      icon: <Camera className="w-4 h-4" />,
      label: '人脸追踪',
      enabled: faceEnabled,
      onToggle: onToggleFace,
      permission: facePermission,
      status: faceEnabled ? (faceDetected ? '已检测到' : '寻找中...') : '关闭',
    },
    {
      key: 'mic',
      icon: <Mic className="w-4 h-4" />,
      label: '音量感应',
      enabled: micEnabled,
      onToggle: onToggleMic,
      permission: micPermission,
      status: micEnabled ? `音量: ${Math.round(audioLevel * 100)}%` : '关闭',
    },
    {
      key: 'gesture',
      icon: <Hand className="w-4 h-4" />,
      label: '手势识别',
      enabled: gestureEnabled,
      onToggle: onToggleGesture,
      permission: gesturePermission,
      status: gestureEnabled ? gestureLabels[gesture] || '待机' : '关闭',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-secondary-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-64 shadow-2xl"
          >
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
              互动控制
            </div>
            <div className="space-y-3">
              {controls.map((ctrl) => (
                <div key={ctrl.key} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <button
                      onClick={ctrl.onToggle}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex-1 ${
                        ctrl.enabled
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {ctrl.icon}
                      <span>{ctrl.label}</span>
                      {ctrl.enabled && ctrl.permission === false && (
                        <AlertCircle className="w-3 h-3 text-red-400 ml-auto" />
                      )}
                      {ctrl.enabled && ctrl.permission === true && (
                        <Check className="w-3 h-3 text-green-400 ml-auto" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {(faceEnabled || micEnabled || gestureEnabled) && (
              <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
                {controls.filter(c => c.enabled).map(ctrl => (
                  <div key={ctrl.key} className="flex justify-between text-xs">
                    <span className="text-gray-500">{ctrl.label}</span>
                    <span className="text-primary-400">{ctrl.status}</span>
                  </div>
                ))}
                {micEnabled && (
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-orange-400 rounded-full"
                      animate={{ width: `${audioLevel * 100}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-500">
              🔒 所有数据仅在本地处理，不上传
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-200 ${
          expanded
            ? 'bg-secondary-800 border border-white/20 text-white'
            : 'bg-gradient-to-br from-primary-500 to-orange-400 text-white shadow-primary-500/40'
        }`}
      >
        {expanded ? <X className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
      </motion.button>
    </div>
  )
}
