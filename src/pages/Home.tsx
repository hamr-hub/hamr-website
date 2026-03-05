import { motion } from 'framer-motion'
import { Users, Clock, CheckSquare, Package, Home, Shield, Lock, GitBranch } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '人员管理',
      description: '成员档案、关系图谱、重要日期提醒',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '时间管理',
      description: '家庭日历、日程同步、时间统计分析',
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: '事务管理',
      description: '待办清单、大事记、决策记录',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: '物品管理',
      description: '家庭资产、物品分类、消耗品管理',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: '环境管理',
      description: '环境监测、场景管理、空间规划',
    },
  ]

  const promises = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: '永久免费',
      description: '核心功能完全免费，无隐藏收费，开源透明',
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: '隐私优先',
      description: '端到端加密，数据不离开你的家，本地优先',
    },
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: '私有部署',
      description: '支持自有服务器部署，完全掌控数据主权',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              让家更聪明，让爱更有温度
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              HamR - 数据主权的家庭智能助理
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-primary-50">
              五维数据管理（人/时/事/物/境）+ AI 智能决策，帮助家庭更好地规划生活、提升幸福感
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.hamr.store"
                className="px-8 py-4 bg-white text-primary-500 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                立即体验
              </a>
              <a
                href="https://demo.hamr.top"
                className="px-8 py-4 bg-primary-700 text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-primary-800 transition-colors duration-200"
              >
                在线演示
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              五维家庭管理
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              全方位管理家庭数据，让每一个维度都井井有条
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}

            {/* JiaBu 决策系统预告卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-white"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  即将推出
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">JiaBu 智能决策</h3>
              <p className="text-primary-50 mb-4">
                基于家庭数据的 AI 分析与幸福感评估
              </p>
              <a href="/features#jiabu" className="text-white underline hover:text-primary-100">
                了解更多 →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              我们的承诺
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              用心守护每一个家庭的数据安全和隐私
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-6 text-primary-500">
                  {promise.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-500 mb-4">
                  {promise.title}
                </h3>
                <p className="text-gray-600 text-lg">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              加入我们，让家庭生活更智能、更温暖
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.hamr.store"
                className="px-8 py-4 bg-white text-primary-500 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                立即体验
              </a>
              <a
                href="https://deploy.hamr.top"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                私有部署
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
