import { motion } from 'framer-motion'
import { Users, Clock, CheckSquare, Package, Home, Shield, Lock, GitBranch, ArrowRight, Star, Zap } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '人员管理',
      description: '成员档案、关系图谱、重要日期提醒',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '时间管理',
      description: '家庭日历、日程同步、时间统计分析',
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: '事务管理',
      description: '待办清单、大事记、决策记录',
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: '物品管理',
      description: '家庭资产、物品分类、消耗品管理',
      color: 'from-yellow-500 to-orange-500',
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: '环境管理',
      description: '环境监测、场景管理、空间规划',
      color: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-50',
      text: 'text-teal-600',
    },
  ]

  const promises = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '永久免费',
      description: '核心功能完全免费，无隐藏收费，开源透明',
      color: 'from-primary-500 to-orange-400',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: '隐私优先',
      description: '端到端加密，数据不离开你的家，本地优先',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: '私有部署',
      description: '支持自有服务器部署，完全掌控数据主权',
      color: 'from-purple-500 to-purple-600',
    },
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 text-primary-600 rounded-full text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                五维家庭管理 · AI 智能决策
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-secondary-800 mb-6 leading-tight"
            >
              让家更聪明<br />
              <span className="gradient-text">让爱更有温度</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
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
                立即体验
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://demo.hamr.top" className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
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
      </section>

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

      {/* Features Section */}
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card p-6 group cursor-default"
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.bg} ${feature.text} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}

            {/* JiaBu 卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-orange-400 text-white group cursor-default"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">
                  即将推出
                </span>
                <h3 className="text-lg font-semibold mb-2">JiaBu 智能决策</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  基于家庭数据的 AI 分析与幸福感评估
                </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-xl mb-10 text-gray-300">
              加入我们，让家庭生活更智能、更温暖
            </p>
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
    </div>
  )
}
