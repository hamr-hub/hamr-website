import { motion } from 'framer-motion'
import { Users, Clock, CheckSquare, Package, Home, Brain, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function FeaturesPage() {
  useSEO({
    title: '产品功能 - HamR 五维家庭管理系统',
    description: '了解 HamR 的五大核心功能：人员管理、时间管理、事务管理、物品管理、环境管理，以及 JiaBu AI 智能决策系统。',
    canonical: 'https://hamr.store/features',
    ogImage: 'https://hamr.store/og-image.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '产品功能 - HamR',
      url: 'https://hamr.store/features',
      description: 'HamR 五维家庭管理系统功能详解',
    },
  })

  const dimensions = [
    {
      icon: <Users className="w-10 h-10" />,
      title: '人 · 成员管理',
      description: '全方位管理家庭成员信息，建立深度关系档案',
      features: ['成员档案管理', '家庭关系图谱', '重要日期提醒', '生日纪念日管理'],
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      accent: 'bg-blue-500',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '时 · 时间管理',
      description: '合理规划家庭时间，让每一刻都充满意义',
      features: ['家庭共享日历', '日程同步', '时间统计分析', '时间分配建议'],
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      accent: 'bg-purple-500',
    },
    {
      icon: <CheckSquare className="w-10 h-10" />,
      title: '事 · 事务管理',
      description: '高效处理家庭事务，告别混乱无序的生活',
      features: ['待办清单', '家庭大事记', '决策记录', '任务提醒'],
      color: 'from-green-500 to-emerald-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      accent: 'bg-green-500',
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: '物 · 物品管理',
      description: '清晰掌握家庭资产，物尽其用不再浪费',
      features: ['资产管理', '物品分类', '消耗品跟踪', '采购提醒'],
      color: 'from-yellow-500 to-orange-500',
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      accent: 'bg-yellow-500',
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: '境 · 环境管理',
      description: '打造舒适居住环境，智能监测家庭生态',
      features: ['环境数据监测', '智能场景管理', '空间布局规划', '设备控制'],
      color: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      accent: 'bg-teal-500',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-purple-50" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-800 mb-6">
              产品<span className="gradient-text">功能</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              五维管理体系 + AI 智能决策，让家庭生活井井有条
            </p>
          </motion.div>
        </div>
      </section>

      {/* 五维管理详解 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {dimensions.map((dim, index) => (
              <motion.div
                key={dim.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl ${dim.bg} ${dim.text}`}>
                    {dim.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-secondary-800 mb-3">{dim.title}</h2>
                    <p className="text-lg text-gray-500 leading-relaxed">{dim.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {dim.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${dim.accent} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`relative rounded-2xl overflow-hidden ${dim.bg} h-72 flex items-center justify-center`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${dim.color} opacity-5`} />
                    <div className={`${dim.text} opacity-20`}>
                      {dim.icon}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 bg-gradient-to-br ${dim.color} rounded-3xl flex items-center justify-center shadow-2xl text-white opacity-80`}>
                        {dim.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JiaBu 决策系统 */}
      <section id="jiabu" className="py-24 bg-secondary-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full text-sm font-medium mb-6">
              即将推出 · Phase 2
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              JiaBu 智能决策系统
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              基于五维数据的 AI 分析引擎，为家庭决策提供智能建议
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, title: '数据分析', desc: '深度分析五维家庭数据，发现隐藏的模式和趋势', color: 'from-primary-500 to-orange-400' },
              { icon: <TrendingUp className="w-8 h-8" />, title: '幸福感评估', desc: '五维幸福指数评分，量化家庭幸福感，提供改进建议', color: 'from-blue-500 to-blue-600' },
              { icon: <Calendar className="w-8 h-8" />, title: '智能建议', desc: '个性化活动推荐、消耗品补货提醒、决策辅助', color: 'from-purple-500 to-purple-600' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://jiabu.hamr.store" className="btn-primary inline-flex items-center gap-2">
              了解更多 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">准备好体验完整功能了吗？</h2>
            <p className="section-subtitle mb-10">立即注册，开始管理你的家庭数据</p>
            <a href="https://app.hamr.store" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              立即体验 <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
