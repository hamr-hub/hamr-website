import { motion } from 'framer-motion'
import { Mail, Github, Twitter, Heart, Code2, Users, Star, ArrowRight, ShieldCheck, Compass } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const team = [
  {
    name: 'HamR Core',
    role: '核心开发团队',
    description: '专注于为家庭打造具备绝对数据主权的智能家庭助理。我们深信技术应该温和、谦逊地融入生活，而非强加控制。',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-primary-500 to-indigo-600',
    glow: 'rgba(168, 85, 247, 0.15)'
  },
  {
    name: '开源社区',
    role: '全球贡献者',
    description: '来自全球的独立开发者、设计师及隐私极客共同参建。正是社区的力量让 HamR 的核心代码无懈可击、完全透明。',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-teal-500',
    glow: 'rgba(56, 189, 248, 0.15)'
  },
  {
    name: '先锋家庭用户',
    role: '共创家庭伙伴',
    description: '数千个早期测试家庭提供了最真实的场景反馈。你们关于日常琐碎的抱怨与期望，指引着 HamR 的迭代方向。',
    icon: <Users className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
    glow: 'rgba(52, 211, 153, 0.15)'
  },
]

const milestones = [
  { date: '2026 Q1', event: '星火启航', desc: 'HamR 项目正式立项。确立了“五维家庭数据管理”核心理念，并完成基于 Web3 级数据加密与私有部署的核心技术选型。' },
  { date: '2026 Q2', event: '品牌官网与公测', desc: '官方展示站 hamr.store 正式上线。核心代码托管至 GitHub，开启全球先锋家庭的封闭式公测。' },
  { date: '2026 Q3', event: 'JiaBu AI 神经中枢', desc: '引入本地 AI 智能决策辅助系统。JiaBu 引擎上线，支持离线自然语言处理与多维家庭幸福感建模分析。' },
  { date: '2026 Q4', event: '多端触达与开放网关', desc: '发布 iOS/Android 原生应用程序。开放智能硬件互联 API 网关，支持米家、HomeAssistant 等主流生态设备本地接入。' },
]

export default function AboutPage() {
  useSEO({
    title: '关于我们 - HamR 团队与品牌愿景',
    description: '了解 HamR 团队的愿景、使命与核心价值观。我们致力于为家庭打造开源、隐私优先、支持私有部署的数据主权家庭助理。',
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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: '#080616' }}>
      
      {/* 网格发光叠加背景层 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Hero 区域 ── */}
      <section className="relative py-24 z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Heart className="w-14 h-14 mx-auto mb-6 text-primary-400 animate-pulse-slow filter drop-shadow-sm" />
            <span className="text-[10px] tracking-widest uppercase opacity-40 font-mono">OUR MISSION & BRAND</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight">
              让技术充满<span className="gradient-text font-black">家的温度</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100/70 max-w-3xl mx-auto leading-relaxed font-medium">
              用心打造数据主权的家庭智能助理，我们坚守隐私底线，将冰冷的算法转化为守护家庭幸福的脉脉微光。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 愿景与起因 (简洁与留白) ── */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex p-2.5 rounded-2xl bg-white/5 border border-white/10 text-primary-300 mb-2">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">我们的起源与愿景</h2>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
              HamR 诞生于一个极其纯粹的直觉：随着万物互联，我们的家庭日常——从每一次亲人团聚的时间，
              到家里的温度、甚至每一件库存消耗——都在被转化为数据。然而，这些极具私密性的家庭资产，
              目前几乎全部托管在各大云厂商的商业数据库中，沦为被分析和变现的数字脚印。
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
              我们相信，<strong>家庭的数据主权应百分之百属于家庭自己</strong>。隐私不应该是只有极客才能享受的奢侈品，
              而应是每个普通家庭天然拥有的尊严。因此，我们创建了 HamR。
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
              通过端到端加密、无网私有部署和全面的核心开源，我们为现代家庭提供了一个永不妥协的数据安全港湾，
              并以此为根基，构筑充满爱与理解的智能管家。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 核心价值观 (对称平衡与比例) ── */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-16 tracking-tight">三项不妥协的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '绝对隐私优先', desc: '坚持本地局域网隔离运作，采用军工级端到端加密，您的生活细节，我们及外部黑客绝无可能触碰窥视。', icon: <ShieldCheck className="w-6 h-6" />, color: 'text-emerald-400', glow: 'rgba(52, 211, 153, 0.15)' },
              { title: '完全开源透明', desc: '核心代码全部向公众开源，接受全球安全专家的漏洞审计，坚决不在任何地方设立后门，建立绝对信任。', icon: <Code2 className="w-6 h-6" />, color: 'text-indigo-400', glow: 'rgba(99, 102, 241, 0.15)' },
              { title: '以爱人为准则', desc: '功能设计始终关照家庭成员之间的情感纽带，不堆砌繁复技术，不为连接而连接，用科技服务于幸福本身。', icon: <Heart className="w-6 h-6" />, color: 'text-pink-400', glow: 'rgba(236, 72, 153, 0.15)' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-8 relative overflow-hidden group text-left"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: v.glow }} />
                
                <div className={`inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-5 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-200">{v.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 团队与社区 ── */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4 tracking-tight">我们由谁驱动？</h2>
          <p className="text-center text-white/50 mb-16 max-w-2xl mx-auto font-medium">HamR 是一个融合了核心团队梦想与全球开源社区力量的温暖家园</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="card-dark p-8 relative overflow-hidden group text-left"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: member.glow }} />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  {member.icon}
                </div>
                <div className="text-[10px] font-bold text-primary-300 uppercase tracking-widest mb-1.5 font-mono">{member.role}</div>
                <h3 className="text-xl font-extrabold text-white mb-3">{member.name}</h3>
                <p className="text-white/60 leading-relaxed text-sm font-medium">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 发展历程 (节奏与韵律 - 发光时间轴) ── */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-16 tracking-tight">我们的发展历程</h2>
          
          <div className="relative">
            {/* 时间轴中线发光渐变导轨 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-indigo-500 to-teal-500 opacity-30 -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.date}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-6 md:gap-12`}
                >
                  {/* 发光球体节点 */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-dark-500 bg-gradient-to-br from-primary-500 to-indigo-500 -translate-x-1/2 flex items-center justify-center shadow-glow-sm z-10" />
                  
                  {/* 空白占位块 (在桌面端让每侧占 50%) */}
                  <div className="hidden md:block w-1/2" />
                  
                  {/* 卡片内容块 */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 text-left">
                    <div className="card-dark p-6 rounded-2xl relative overflow-hidden group">
                      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-10 bg-primary-500" />
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-primary-500/10 text-primary-300 border border-primary-500/20 mb-3">
                        {m.date}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-200">{m.event}</h3>
                      <p className="text-white/60 text-sm leading-relaxed font-medium">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 联系方式 (对比与强调) ── */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.005]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">与我们建立连接</h2>
          <p className="text-white/50 mb-16 font-medium">无论是建议、吐槽还是代码合并，我们随时倾听您的声音</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: 'mailto:support@hamr.store',
                icon: <Mail className="w-8 h-8" />,
                title: '官方邮件支持',
                desc: 'support@hamr.store',
                glow: 'rgba(168, 85, 247, 0.15)'
              },
              {
                href: 'https://github.com/hamr-hub',
                icon: <Github className="w-8 h-8" />,
                title: 'GitHub 开源社区',
                desc: 'github.com/hamr-hub',
                glow: 'rgba(56, 189, 248, 0.15)'
              },
              {
                href: 'https://twitter.com/hamr',
                icon: <Twitter className="w-8 h-8" />,
                title: 'Twitter 联络站',
                desc: '@hamr',
                glow: 'rgba(236, 72, 153, 0.15)'
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-6 flex flex-col items-center group relative overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: item.glow }} />
                
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-primary-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <span className="text-sm text-primary-300 font-semibold font-mono flex items-center gap-1 group-hover:gap-2 transition-all">
                  {item.desc} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
