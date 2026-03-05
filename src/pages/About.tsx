import { motion } from 'framer-motion'
import { Mail, Github, Twitter, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            用心打造数据主权的家庭智能助理
          </p>
        </div>
      </section>

      {/* 团队愿景 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Heart className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary-500 mb-6">我们的愿景</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HamR 诞生于一个简单的愿望：让每个家庭都能更好地管理生活、提升幸福感。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              我们相信，数据应该属于用户自己。在这个数据为王的时代，家庭数据更应该受到严格保护。
              因此，HamR 从设计之初就坚持"数据主权"理念——所有数据都可以私有部署，完全由用户掌控。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我们希望通过开源、透明的方式，与社区一起打造一个真正属于家庭的智能助理。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-500 text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-secondary-500 mb-4">用户至上</h3>
              <p className="text-gray-600">
                以用户需求为导向，持续优化产品体验，让每个功能都真正有用
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-secondary-500 mb-4">开源透明</h3>
              <p className="text-gray-600">
                核心代码开源，接受社区监督，与开发者共同成长
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-secondary-500 mb-4">隐私安全</h3>
              <p className="text-gray-600">
                端到端加密，本地优先，用户数据永远不会被滥用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:support@hamr.store"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Mail className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">邮箱</h3>
              <p className="text-gray-600">support@hamr.store</p>
            </a>
            <a
              href="https://github.com/hamr-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Github className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-gray-600">hamr-hub</p>
            </a>
            <a
              href="https://twitter.com/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Twitter className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Twitter</h3>
              <p className="text-gray-600">@hamr</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
