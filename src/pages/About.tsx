import { motion } from 'framer-motion'
import { Mail, Github, Twitter, Heart, Code2, Users, Star } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const team = [
  {
    name: 'HamR Core',
    role: '核心团队',
    description: '专注于为家庭打造数据主权的智能助理，相信技术应该为人服务。',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-primary-500 to-primary-600',
  },
  {
    name: '开源社区',
    role: '贡献者',
    description: '来自全球的开发者共同参与，让 HamR 更加完善和透明。',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: '家庭用户',
    role: '早期用户',
    description: '感谢每一个信任我们的家庭，你们的反馈是我们前进的动力。',
    icon: <Users className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
  },
]

const milestones = [
  { date: '2026 Q1', event: '项目启动', desc: '确立五维家庭管理理念，完成技术选型' },
  { date: '2026 Q2', event: '官网上线', desc: '发布 hamr.store 品牌官网，开启公测' },
  { date: '2026 Q3', event: 'JiaBu AI', desc: '智能决策系统上线，引入幸福感评估' },
  { date: '2026 Q4', event: '移动端', desc: '发布 iOS/Android 原生应用' },
]

export default function AboutPage() {
  useSEO({
    title: '关于我们 - HamR 团队',
    description: '了解 HamR 团队的愿景、使命与核心价值观。我们致力于为家庭打造数据主权的智能助理，开源透明，隐私优先。',
    canonical: 'https://hamr.store/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'HamR Team',
      url: 'https://hamr.store',
      email: 'support@hamr.store',
      sameAs: ['https://github.com/hamr-hub', 'https://twitter.com/hamr'],
    },
  })

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Heart className="w-14 h-14 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              用心打造数据主权的家庭智能助理，让技术真正为家庭服务
            </p>
          </motion.div>
        </div>
      </section>

      {/* 愿景 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我们的愿景</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HamR 诞生于一个简单的愿望：让每个家庭都能更好地管理生活、提升幸福感。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              我们相信，数据应该属于用户自己。在这个数据为王的时代，家庭数据更应该受到严格保护。
              因此，HamR 从设计之初就坚持"数据主权"理念——所有数据可私有部署，完全由用户掌控。
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '用户至上', desc: '以用户需求为导向，持续优化产品体验，让每个功能都真正有用', icon: <Star className="w-6 h-6" />, color: 'text-amber-500' },
              { title: '开源透明', desc: '核心代码开源，接受社区监督，与开发者共同成长', icon: <Code2 className="w-6 h-6" />, color: 'text-blue-500' },
              { title: '隐私安全', desc: '端到端加密，本地优先，用户数据永远不会被滥用', icon: <Heart className="w-6 h-6" />, color: 'text-primary-500' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className={`mb-4 ${v.color}`}>{v.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">团队与社区</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">HamR 由核心团队与开源社区共同驱动，每一位贡献者都是 HamR 家庭的一员</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white mb-5`}>
                  {member.icon}
                </div>
                <div className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">{member.role}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目里程碑 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">发展历程</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-100" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 mb-10 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs text-center leading-tight z-10">
                  {m.date}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{m.event}</h3>
                  <p className="text-gray-600">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-gray-500 mb-12">有任何问题或建议，欢迎随时联系</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:support@hamr.store"
              className="flex flex-col items-center p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all"
            >
              <Mail className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="text-base font-semibold mb-1">邮箱支持</h3>
              <p className="text-gray-500 text-sm">support@hamr.store</p>
            </a>
            <a
              href="https://github.com/hamr-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all"
            >
              <Github className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="text-base font-semibold mb-1">GitHub</h3>
              <p className="text-gray-500 text-sm">github.com/hamr-hub</p>
            </a>
            <a
              href="https://twitter.com/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all"
            >
              <Twitter className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="text-base font-semibold mb-1">Twitter</h3>
              <p className="text-gray-500 text-sm">@hamr</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
