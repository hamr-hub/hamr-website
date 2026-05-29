import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function PrivacyPage() {
  useSEO({
    title: '隐私政策 - HamR 数据安全与主权承诺',
    description: 'HamR 严肃对待数据安全，坚持端到端加密、本地优先、核心开源透明。了解我们如何保障每个家庭的隐私主权。',
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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: '#080616' }}>
      
      {/* 网格发光叠加背景层 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Hero 区域 ── */}
      <section className="relative py-24 z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6">
              <Shield className="w-3.5 h-3.5" />
              数据安全与家庭隐私主权承诺
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              您的隐私，<span className="gradient-text font-black">坚不可摧</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
              在 HamR，我们不只是在起草一份“隐私政策”，而是在用开源代码与本地化架构，
              为您和家人的数字尊严修筑坚实的高墙。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 安全特性 (4列卡片 - 比例与稳定) ── */}
      <section className="py-16 relative z-10 border-t border-white/5 bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-16 tracking-tight">
            全生命周期的隐私技术支撑
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: '端到端超强加密',
                desc: '所有家庭核心数据均使用 AES-256 加密存储，局域网外传输强制采用 TLS 1.3 级通道，绝无明文泄露隐患。',
                color: 'text-indigo-400',
                glow: 'rgba(99, 102, 241, 0.15)'
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: '本地运行优先',
                desc: '核心计算和数据完全托管于您的家庭网关或服务器上，支持局域网纯离线运作，任何外部云服务皆无法窥探。',
                color: 'text-emerald-400',
                glow: 'rgba(52, 211, 153, 0.15)'
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: '核心开源受审',
                desc: '开源是检验诚实的唯一标准。HamR 核心代码公开透明，全球极客可自由审计代码，从根源消除隐藏后门的可能。',
                color: 'text-purple-400',
                glow: 'rgba(168, 85, 247, 0.15)'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: '自主可控主权',
                desc: '数据完美支持一键导出标准 JSON 归档，决不实施任何商业技术锁定。注销服务即彻底销毁临时云端中转数据。',
                color: 'text-teal-400',
                glow: 'rgba(45, 212, 191, 0.15)'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 relative overflow-hidden group text-left"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: item.glow }} />
                
                <div className={`inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-5 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 隐私政策详文 (简洁与留白 - 高质量黑客风排版) ── */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark p-8 md:p-12 rounded-3xl border border-white/15 text-left relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-10 bg-primary-500" />
            
            <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-emerald-400" /> 隐私政策详细条款
            </h2>
            
            <div className="space-y-10 text-white/80 text-sm md:text-base leading-relaxed font-medium">
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white border-l-2 border-primary-500 pl-3">一、 数据收集原则</h3>
                <p>
                  我们严格遵守 <span className="text-gradient-gold font-bold">最小必要原则</span>。在本地网关运行模式下，
                  我们完全不收集、不汇总、不调阅您的任何家庭生活数据。
                </p>
                <p className="text-white/60 text-xs">
                  注：若您自愿启用我们的云端消息推送（例如微信推送或手机即时通知），我们会对推送报文进行通道加密（中转即刻销毁），
                  且我们无法解密数据包内容。
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white border-l-2 border-primary-500 pl-3">二、 数据存储与加密</h3>
                <p>
                  为了极致的安全，您的健康偏好、家庭大事记、日历和物联网温湿度等隐私数据均直接物理存储在您的本地设备上。
                  在进行设备同步时，HamR 采用最新的 <strong>XChaCha20-Poly1305 加密算法</strong> 进行局域网内点对点极速同步，
                  确保外部嗅探设备绝无解密可能。
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white border-l-2 border-primary-500 pl-3">三、 第三方服务披露</h3>
                <p>
                  我们庄严承诺：<span className="text-red-400 font-bold bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10">我们绝不销售、绝不出租</span> 您的任何家庭数据给广告商或第三方分析机构。
                  HamR 全生态核心模块不内置任何商业性的第三方监测代码（如 Google Analytics 等），保护每个家庭的轨迹不被追踪。
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white border-l-2 border-primary-500 pl-3">四、 用户的隐私主权</h3>
                <p>
                  您对数据拥有全生命周期的绝对主权。您可以随时一键无缝备份和导出完整数据包，或物理擦除所有本地介质上的数据。
                  我们的代码没有任何数据留底或技术挟持。
                </p>
              </div>

              <div className="space-y-3 pb-4">
                <h3 className="text-lg font-bold text-white border-l-2 border-primary-500 pl-3">五、 条款修订与联络</h3>
                <p>
                  我们将根据开源社区的安全发展不定期优化并公示本隐私协议。如果您对家庭隐私在技术层面的防护实施有任何宝贵的建议，
                  欢迎直接在 GitHub 社区提交 Issue 或致信支持团队。
                </p>
              </div>

            </div>

            <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
              <span>生效日期：2026年3月18日</span>
              <a href="mailto:privacy@hamr.store" className="flex items-center gap-1.5 text-primary-300 font-semibold hover:text-white transition-colors duration-200">
                <HelpCircle className="w-4 h-4" /> 隐私保护咨询邮箱 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
