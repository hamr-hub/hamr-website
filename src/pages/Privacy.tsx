import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function PrivacyPage() {
  useSEO({
    title: '隐私政策 - HamR 数据安全承诺',
    description: 'HamR 严肃对待数据安全，端到端加密、本地优先、开源透明。了解我们如何保护您的家庭隐私数据。',
    canonical: 'https://hamr.store/privacy',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '隐私政策 - HamR',
      url: 'https://hamr.store/privacy',
      dateModified: '2026-03-18',
    },
  })

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">隐私与安全</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            我们严肃对待数据安全，承诺保护每个家庭的隐私
          </p>
        </div>
      </section>

      {/* 安全特性 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-500 text-center mb-12">安全特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <Shield className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">端到端加密</h3>
              <p className="text-gray-600">
                所有敏感数据采用 AES-256 加密，传输过程使用 TLS 1.3 协议保护
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <Lock className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">本地优先</h3>
              <p className="text-gray-600">
                支持私有部署，数据完全存储在您的服务器上，我们无法访问
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <Eye className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">透明开源</h3>
              <p className="text-gray-600">
                核心代码开源，任何人都可以审计代码，确保没有后门
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <FileText className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-secondary-500 mb-3">数据主权</h3>
              <p className="text-gray-600">
                数据导出/导入无障碍，随时可以迁移，不被平台锁定
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 隐私政策 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-500 mb-8">隐私政策</h2>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">1. 数据收集</h3>
              <p className="leading-relaxed">
                我们仅收集必要的数据以提供服务：账号信息（邮箱）、家庭数据（您主动输入的数据）。
                我们不会收集您的浏览行为、设备信息或其他无关数据。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">2. 数据使用</h3>
              <p className="leading-relaxed">
                您的数据仅用于提供服务功能，不会用于广告、营销或其他商业用途。
                我们承诺永远不会出售您的数据。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">3. 数据存储</h3>
              <p className="leading-relaxed">
                云端版本：数据加密存储在安全的云服务器上，采用多重备份机制。<br />
                私有部署：数据完全存储在您自己的服务器上，我们无法访问。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">4. 用户权利</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>随时查看、修改、删除您的数据</li>
                <li>导出所有数据（JSON/CSV 格式）</li>
                <li>注销账号并彻底删除所有数据</li>
                <li>选择私有部署，完全掌控数据</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">5. 第三方服务</h3>
              <p className="leading-relaxed">
                我们使用少量第三方服务（如 Cloudflare CDN），但这些服务不会访问您的家庭数据。
                所有数据传输均采用加密协议。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">6. 安全审计</h3>
              <p className="leading-relaxed">
                我们定期进行安全审计，并接受社区的安全审查。
                如果您发现安全漏洞，请联系 security@hamr.store。
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-lg font-bold text-secondary-500 mb-2">开源承诺</h3>
            <p className="text-gray-700">
              HamR 核心代码开源在 <a href="https://github.com/hamr-hub" className="text-primary-500 underline">GitHub</a>，
              采用 MIT License。任何人都可以审计代码，确保我们的承诺不只是空谈。
            </p>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>最后更新：2026-03-05</p>
            <p>如有疑问，请联系：privacy@hamr.store</p>
          </div>
        </div>
      </section>
    </div>
  )
}
