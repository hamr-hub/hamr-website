import { motion } from 'framer-motion'
import { Users, Clock, CheckSquare, Package, Home, Brain, TrendingUp, Calendar } from 'lucide-react'

export default function FeaturesPage() {
  const dimensions = [
    {
      icon: <Users className="w-12 h-12" />,
      title: '人 - 成员管理',
      description: '全方位管理家庭成员信息',
      features: ['成员档案管理', '家庭关系图谱', '重要日期提醒', '生日纪念日管理'],
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: '时 - 时间管理',
      description: '合理规划家庭时间',
      features: ['家庭共享日历', '日程同步', '时间统计分析', '时间分配建议'],
    },
    {
      icon: <CheckSquare className="w-12 h-12" />,
      title: '事 - 事务管理',
      description: '高效处理家庭事务',
      features: ['待办清单', '家庭大事记', '决策记录', '任务提醒'],
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: '物 - 物品管理',
      description: '清晰掌握家庭资产',
      features: ['资产管理', '物品分类', '消耗品跟踪', '采购提醒'],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: '境 - 环境管理',
      description: '打造舒适居住环境',
      features: ['环境数据监测', '智能场景管理', '空间布局规划', '设备控制'],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">产品功能</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            五维管理体系 + AI 智能决策，让家庭生活井井有条
          </p>
        </div>
      </section>

      {/* 五维管理详解 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {dimensions.map((dim, index) => (
              <motion.div
                key={dim.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="text-primary-500 mb-6">{dim.icon}</div>
                  <h2 className="text-3xl font-bold text-secondary-500 mb-4">{dim.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{dim.description}</p>
                  <ul className="space-y-3">
                    {dim.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckSquare className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <span className="text-gray-400">功能截图</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JiaBu 决策系统 */}
      <section id="jiabu" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium mb-4">
              即将推出 - Phase 2
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              JiaBu 智能决策系统
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              基于五维数据的 AI 分析引擎，为家庭决策提供智能建议
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Brain className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">数据分析</h3>
              <p className="text-gray-600">
                深度分析五维家庭数据，发现隐藏的模式和趋势
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">幸福感评估</h3>
              <p className="text-gray-600">
                五维幸福指数评分，量化家庭幸福感，提供改进建议
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Calendar className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">智能建议</h3>
              <p className="text-gray-600">
                个性化活动推荐、消耗品补货提醒、决策辅助
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://jiabu.hamr.store" className="btn-primary inline-block">
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            准备好体验完整功能了吗？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            立即注册，开始管理你的家庭数据
          </p>
          <a href="https://app.hamr.store" className="btn-primary">
            立即体验
          </a>
        </div>
      </section>
    </div>
  )
}
