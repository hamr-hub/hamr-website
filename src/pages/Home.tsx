import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users, Clock, CheckSquare, Package, Home,
  Shield, Lock, GitBranch, ArrowRight, ChevronLeft, ChevronRight, Sparkles
} from 'lucide-react'
import { useFaceTracking } from '../hooks/useFaceTracking'
import { useMicrophone } from '../hooks/useMicrophone'
import { useGestureControl } from '../hooks/useGestureControl'
import InteractiveControls from '../components/InteractiveControls'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

const features = [
  { icon: <Users className="w-5 h-5" />, title: '人员管理', description: '成员档案、关系图谱、重要日期提醒', color: '#818cf8', bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.25)' },
  { icon: <Clock className="w-5 h-5" />, title: '时间管理', description: '家庭日历、日程同步、时间统计分析', color: '#c084fc', bg: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.25)' },
  { icon: <CheckSquare className="w-5 h-5" />, title: '事务管理', description: '待办清单、大事记、决策记录', color: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)' },
  { icon: <Package className="w-5 h-5" />, title: '物品管理', description: '家庭资产、物品分类、消耗品管理', color: '#fbbf24', bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.25)' },
  { icon: <Home className="w-5 h-5" />, title: '环境管理', description: '环境监测、场景管理、空间规划', color: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.25)' },
]

const promises = [
  { icon: <Shield className="w-7 h-7" />, title: '永久免费', description: '核心功能完全免费，无隐藏收费，开源透明', color: '#a855f7', glow: 'rgba(168,85,247,0.2)' },
  { icon: <Lock className="w-7 h-7" />, title: '隐私优先', description: '端到端加密，数据不离开你的家，本地优先', color: '#fbbf24', glow: 'rgba(251,191,36,0.2)' },
  { icon: <GitBranch className="w-7 h-7" />, title: '私有部署', description: '支持自有服务器部署，完全掌控数据主权', color: '#38bdf8', glow: 'rgba(56,189,248,0.2)' },
]

const stats = [
  { value: '5', unit: '个维度', label: '全方位家庭管理' },
  { value: '100%', unit: '数据自主', label: '完全掌控隐私' },
  { value: '0', unit: '元费用', label: '永久免费使用' },
  { value: '24/7', unit: '智能守护', label: 'AI 全天候服务' },
]

export default function HomePage() {
  const [faceEnabled, setFaceEnabled] = useState(false)
  const [micEnabled, setMicEnabled] = useState(false)
  const [gestureEnabled, setGestureEnabled] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [gestureHint, setGestureHint] = useState<string | null>(null)

  const { face, hasPermission: facePermission } = useFaceTracking(faceEnabled)
  const { audioLevel, hasPermission: micPermission } = useMicrophone(micEnabled)
  const { gesture, hasPermission: gesturePermission } = useGestureControl(gestureEnabled)

  useEffect(() => {
    if (gesture === 'swipe_left') { setActiveFeature(p => (p + 1) % features.length); setGestureHint('👈 下一个') }
    else if (gesture === 'swipe_right') { setActiveFeature(p => (p - 1 + features.length) % features.length); setGestureHint('👉 上一个') }
    else if (gesture === 'open_hand') { setGestureHint('✋ 张开手掌') }
    else if (gesture === 'fist') { setGestureHint('✊ 握拳') }
    if (gesture !== 'none') {
      const t = setTimeout(() => setGestureHint(null), 1500)
      return () => clearTimeout(t)
    }
  }, [gesture])

  const cur = features[activeFeature]

  return (
    <div style={{ background: '#080616' }}>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D 背景 */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full" style={{ background: '#080616' }} />}>
            <HeroScene faceX={face.x} faceY={face.y} audioLevel={audioLevel} />
          </Suspense>
        </div>

        {/* 底部渐变过渡 */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(8,6,22,0.85) 85%, #080616 100%)'
        }} />
        {/* 两侧晕染 */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: 'linear-gradient(to right, rgba(8,6,22,0.5) 0%, transparent 30%, transparent 70%, rgba(8,6,22,0.5) 100%)'
        }} />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              五维家庭管理 · AI 智能决策
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              让家更聪明<br />
              <span className="gradient-text">让爱更有温度</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              数据主权的家庭智能助理，五维数据管理 + AI 智能决策，
              帮助每个家庭更好地规划生活、提升幸福感
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.hamr.store" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                立即体验 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://demo.hamr.top" className="btn-ghost inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                在线演示
              </a>
            </div>
          </motion.div>

          {/* 麦克风波形 */}
          {micEnabled && audioLevel > 0.05 && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-end gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div key={i} className="w-1 rounded-full"
                  style={{ background: `hsl(${270 + i * 4}, 80%, 65%)` }}
                  animate={{ height: `${6 + Math.random() * audioLevel * 36}px` }}
                  transition={{ duration: 0.08 }}
                />
              ))}
            </div>
          )}

          {/* 人脸状态 */}
          {faceEnabled && face.detected && (
            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                已检测到人脸
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 手势提示 */}
      <AnimatePresence>
        {gestureHint && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl border border-white/15 bg-dark-300/90 backdrop-blur-xl text-white text-sm font-medium shadow-2xl"
          >
            {gestureHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Stats ── */}
      <section className="py-16 border-y border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {s.value}<span className="text-gradient-gold text-xl md:text-2xl ml-1">{s.unit}</span>
                </div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14"
          >
            <h2 className="section-title">五维家庭管理</h2>
            <p className="section-subtitle">全方位管理家庭数据，让每一个维度都井井有条</p>
            {gestureEnabled && <p className="text-xs text-white/25 mt-2">💡 左右挥手切换卡片</p>}
          </motion.div>

          {/* 大卡片轮播 */}
          <div className="mb-10">
            <AnimatePresence mode="wait">
              <motion.div key={activeFeature}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl p-8 md:p-12 border"
                style={{ background: cur.bg, borderColor: cur.border }}
              >
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30"
                  style={{ background: cur.color }} />
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cur.color}20`, border: `1px solid ${cur.color}40`, color: cur.color }}>
                    <div className="scale-[2.5]">{cur.icon}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-sm mb-2">{activeFeature + 1} / {features.length}</div>
                    <h3 className="text-3xl font-bold text-white mb-2">{cur.title}</h3>
                    <p className="text-white/60 text-lg">{cur.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-3 mt-5">
              <button onClick={() => setActiveFeature(p => (p - 1 + features.length) % features.length)}
                className="p-2 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {features.map((_, i) => (
                <button key={i} onClick={() => setActiveFeature(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === activeFeature ? '24px' : '6px', background: i === activeFeature ? features[i].color : 'rgba(255,255,255,0.2)' }}
                />
              ))}
              <button onClick={() => setActiveFeature(p => (p + 1) % features.length)}
                className="p-2 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 小卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }}
                onClick={() => setActiveFeature(i)}
                className="card-dark p-5 cursor-pointer group"
                style={activeFeature === i ? { borderColor: f.border, background: f.bg } : {}}
              >
                <div className="inline-flex p-2.5 rounded-xl mb-3 transition-all duration-200 group-hover:scale-110"
                  style={{ background: f.bg, color: f.color }}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-white/40 text-sm">{f.description}</p>
              </motion.div>
            ))}

            {/* JiaBu 卡片 */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }} viewport={{ once: true }}
              className="relative overflow-hidden p-5 rounded-2xl border cursor-default"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(251,191,36,0.1))', borderColor: 'rgba(168,85,247,0.3)' }}
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-40"
                style={{ background: '#a855f7' }} />
              <div className="relative">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 border"
                  style={{ background: 'rgba(168,85,247,0.2)', borderColor: 'rgba(168,85,247,0.4)', color: '#c084fc' }}>
                  即将推出
                </span>
                <h3 className="font-semibold text-white mb-1">JiaBu 智能决策</h3>
                <p className="text-white/40 text-sm mb-3">基于家庭数据的 AI 分析与幸福感评估</p>
                <a href="/features#jiabu" className="inline-flex items-center gap-1 text-sm text-primary-300 hover:gap-2 transition-all">
                  了解更多 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Promises ── */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14"
          >
            <h2 className="section-title">我们的承诺</h2>
            <p className="section-subtitle">用心守护每一个家庭的数据安全和隐私</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                className="card-dark p-8 relative overflow-hidden group"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: p.glow }} />
                <div className="inline-flex p-4 rounded-2xl mb-5" style={{ background: p.glow, color: p.color }}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/50 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 50%, rgba(245,158,11,0.1) 100%)' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#7c3aed' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: '#f59e0b' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              准备好开始了吗？
            </h2>
            <p className="text-lg text-white/50 mb-10">加入我们，让家庭生活更智能、更温暖</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.hamr.store" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                立即体验 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://deploy.hamr.top" className="btn-ghost inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                私有部署
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <InteractiveControls
        faceEnabled={faceEnabled} micEnabled={micEnabled} gestureEnabled={gestureEnabled}
        onToggleFace={() => setFaceEnabled(v => !v)}
        onToggleMic={() => setMicEnabled(v => !v)}
        onToggleGesture={() => setGestureEnabled(v => !v)}
        faceDetected={face.detected} audioLevel={audioLevel} gesture={gesture}
        facePermission={facePermission} micPermission={micPermission} gesturePermission={gesturePermission}
      />
    </div>
  )
}
