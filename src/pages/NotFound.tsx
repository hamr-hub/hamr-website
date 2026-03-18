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
    <div className="min-h-[70vh] flex items-center justify-center bg-dark-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <div className="text-8xl font-black gradient-text mb-6">404</div>
        <h1 className="text-2xl font-bold text-white mb-4">页面未找到</h1>
        <p className="text-white/50 mb-10 max-w-sm mx-auto">
          您访问的页面不存在或已被移除，请返回首页重新探索。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl">
            <Home className="w-4 h-4" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            上一页
          </button>
        </div>
      </motion.div>
    </div>
  )
}
