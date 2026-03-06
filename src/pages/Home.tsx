import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Clock, CheckSquare, Package, Home, Shield, Lock, GitBranch, ArrowRight, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { useFaceTracking } from '../hooks/useFaceTracking'
import { useMicrophone } from '../hooks/useMicrophone'
import { useGestureControl } from '../hooks/useGestureControl'
import InteractiveControls from '../components/InteractiveControls'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

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
    if (gesture === 'swipe_left') {
      setActiveFeature(prev => (prev + 1) % features.length)
      setGestureHint('👈 切换到下一个功能')
    } else if (gesture === 'swipe_right') {
      setActiveFeature(prev => (prev - 1 + features.length) % features.length)
      setGestureHint('👉 切换到上一个功能')
    } else if (gesture === 'open_hand') {
      setGestureHint('✋ 打开手掌')
    } else if (gesture === 'fist') {
      setGestureHint('✊ 握拳')
    }
    if (gesture !== 'none') {
      const timer = setTimeout(() => setGestureHint(null), 1500)
      return () => clearTimeout(timer)
    }
  }, [gesture])

  const features = [
    { icon: <Users className="w-6 h-6" />, title: '人员管理', description: '成员档案、关系图谱、重要日期提醒', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600' },
    { icon: <Clock className="w-6 h-6" />, title: '时间管理', description: '家庭日历、日程同步、时间统计分析', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', text: 'text-purple-600' },
    { icon: <CheckSquare className="w-6 h-6" />, title: '事务管理', description: '待办清单、大事记、决策记录', color: 'from-green-500 to-emerald-600', bg: 'bg-green-50', text: 'text-green-600' },
    { icon: <Package className="w-6 h-6" />, title: '物品管理', description: '家庭资产、物品分类、消耗品管理', color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50', text: 'text-yellow-600' },
    { icon: <Home className="w-6 h-6" />, title: '环境管理', description: '环境监测、场景管理、空间规划', color: 'from-teal-500 to-teal-600', bg: 'bg-teal-50', text: 'text-teal-600' },
  ]

  const promises = [
    { icon: <Shield className="w-8 h-8" />, title: '永久免费', description: '核心功能完全免费，无隐藏收费，开源透明', color: 'from-primary-500 to-orange-400' },
    { icon: <Lock className="w-8 h-8" />, title: '隐私优先', description: '端到端加密，数据不离开你的家，本地优先', color: 'from-blue-500 to-blue-600' },
    { icon: <GitBranch className="w-8 h-8" />, title: '私有部署', description: '支持自有服务器部署，完全掌控数据主权', color: 'from-purple-500 to-purple-600' },
  ]

  const stats = [
    { value: '5', unit: '个维度', label: '全方位家庭管理' },
    { value: '100%', unit: '数据自主', label: '完全掌控隐私' },
    { value: '0', unit: '元费用', label: '永久免费使用' },
    { value: '24/7', unit: '智能守护', label: 'AI 全天候服务' },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* 3D Canvas 背景 */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-orange-50 via-slate-900 to-indigo-950" />
          }>
            <HeroScene
              faceX={face.x}
              faceY={face.y}
              audioLevel={audioLevel}
            />
          </Suspense>
        </div>

        {/* 遮罩层 */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-white/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60" />

        {/* 内容 */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-orange-300 rounded-full text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                五维家庭管理 · AI 智能决策
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            >
              让家更聪明<br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                让爱更有温度
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              HamR 是数据主权的家庭智能助理，五维数据管理 + AI 智能决策，
              帮助每个家庭更好地规划生活、提升幸福感
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://app.hamr.store" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                立即体验 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://demo.hamr.top" className="btn-ghost inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                在线演示
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>完全免费 · 开源透明 · 数据自主</span>
            </motion.div>
          </div>
        </div>

        {/* 麦克风音量可视化 */}
        {micEnabled && audioLevel > 0.05 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-end gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-gradient-to-t from-primary-500 to-orange-300 rounded-full"
                animate={{
                  height: `${8 + Math.random() * audioLevel * 40 * (0.5 + Math.sin(i * 0.5) * 0.5)}px`,
                }}
                transition={{ duration: 0.1, type: 'spring' }}
              />
            ))}
          </div>
        )}

        {/* 人脸追踪状态 */}
        {faceEnabled && face.detected && (
          <div className="absolute top-24 right-6 z-20">
            <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl text-xs backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              已检测到人脸
            </div>
          </div>
        )}
      </section>

      {/* 手势提示 */}
      <AnimatePresence>
        {gestureHint && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-secondary-900/90 backdrop-blur-xl border border-white/20 text-white rounded-2xl text-sm font-medium shadow-2xl"
          >
            {gestureHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-primary-400 text-2xl ml-1">{stat.unit}</span>
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - 支持手势滑动切换 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">五维家庭管理</h2>
            <p className="section-subtitle">全方位管理家庭数据，让每一个维度都井井有条</p>
            {gestureEnabled && (
              <p className="text-xs text-gray-400 mt-2">💡 左右挥手切换功能卡片</p>
            )}
          </motion.div>

          {/* 大卡片轮播（手势驱动） */}
          <div className="relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br ${features[activeFeature].color} text-white min-h-48`}
              >
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <div className="scale-[2]">{features[activeFeature].icon}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-2">{activeFeature + 1} / {features.length}</div>
                    <h3 className="text-3xl font-bold mb-2">{features[activeFeature].title}</h3>
                    <p className="text-white/80 text-lg">{features[activeFeature].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => setActiveFeature(prev => (prev - 1 + features.length) % features.length)}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeFeature ? 'bg-primary-500 w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveFeature(prev => (prev + 1) % features.length)}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* 小卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(index)}
                className={`card p-6 group cursor-pointer ${activeFeature === index ? 'border-primary-300 shadow-lg shadow-primary-100' : ''}`}
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.bg} ${feature.text} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-orange-400 text-white group cursor-default"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">即将推出</span>
                <h3 className="text-lg font-semibold mb-2">JiaBu 智能决策</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">基于家庭数据的 AI 分析与幸福感评估</p>
                <a href="/features#jiabu" className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
                  了解更多 <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">我们的承诺</h2>
            <p className="section-subtitle">用心守护每一个家庭的数据安全和隐私</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${promise.color} rounded-bl-full`} />
                </div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${promise.color} text-white mb-6 shadow-lg`}>
                  {promise.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3">{promise.title}</h3>
                <p className="text-gray-500 leading-relaxed">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-900" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">准备好开始了吗？</h2>
            <p className="text-xl mb-10 text-gray-300">加入我们，让家庭生活更智能、更温暖</p>
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

      {/* 互动控制面板 */}
      <InteractiveControls
        faceEnabled={faceEnabled}
        micEnabled={micEnabled}
        gestureEnabled={gestureEnabled}
        onToggleFace={() => setFaceEnabled(v => !v)}
        onToggleMic={() => setMicEnabled(v => !v)}
        onToggleGesture={() => setGestureEnabled(v => !v)}
        faceDetected={face.detected}
        audioLevel={audioLevel}
        gesture={gesture}
        facePermission={facePermission}
        micPermission={micPermission}
        gesturePermission={gesturePermission}
      />
    </div>
  )
}
