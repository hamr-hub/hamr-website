import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function NotFoundPage() {
  useSEO({
    title: '页面未找到 - HamR',
    description: '您访问的页面不存在，请返回首页。',
  })

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#080616' }}>
      
      {/* 黄金分割比微光网格背景 */}
      <div className="grid-glow-overlay" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center px-4 relative z-10"
      >
        <div className="text-8xl md:text-9xl font-black gradient-text mb-golden">404</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-4">页面未找到</h1>
        <p className="text-white/50 mb-golden-lg max-w-sm mx-auto font-medium">
          您访问的页面不存在或已被移除，请返回首页重新探索。
        </p>
        <div className="flex flex-col sm:flex-row gap-golden justify-center items-center">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            上一页
          </button>
        </div>
      </motion.div>
    </div>
  )
}
