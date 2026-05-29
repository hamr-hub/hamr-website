import { motion } from 'framer-motion'
import { FileText, HelpCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

const sections = [
  {
    title: '1. 服务说明',
    content: `HamR（以下简称"本平台"）是一个开源的家庭智能助理平台，提供五维家庭数据管理（人/时/事/物/境）及 AI 智能决策功能。
本平台核心功能永久免费，支持本地局域网物理隔离私有化部署。使用本平台即表示您同意本服务条款。`,
  },
  {
    title: '2. 账号与使用',
    content: `您需要注册本地或云端中转账号方可使用部分网络互联功能。请确保注册信息真实准确，并妥善保管您的账号密码。
您应当对账号下的一切行为负责。如发现账号被盗用，请立即联系我们。
禁止使用本平台进行任何违法活动、传播有害信息或以任何非正常手段恶意攻击干扰平台服务的正常运营。`,
  },
  {
    title: '3. 数据主权',
    content: `您的家庭数据完全属于您自己。
- 我们坚决不销售、不出租或以任何商业模式向任何第三方机构泄露您的个人数据；
- 平台完全支持无损数据导出，您可随时一键导出全部历史备份 JSON；
- 在私有部署模式下，数据物理存储在您的自建服务器或硬件端，我们完全无法访问；
- 云端临时账号注销后，我们将在 30 天内清除中转服务器上的所有历史中转残留缓存。`,
  },
  {
    title: '4. 开源与知识产权',
    content: `HamR 平台核心代码以 MIT License 许可证完全开源发布，您可依法自由进行商业或非商业性的修改、使用和二次分发。
用户在平台内自主创建的各种家庭日常记录、日历和资产明细数据的知识产权归用户所有。
"HamR"品牌名称及官方 Logo 商标所有权归 HamR 核心团队所有。`,
  },
  {
    title: '5. 免责声明',
    content: `本平台以"现状"提供相关中转或辅助云服务，不对服务的持续不可中断性、绝对准确性或特定适用性作出任何担保。
由于本地私有化部署的服务器安全性、物理介质损坏或操作失误导致的数据丢失，需由用户自行负责。
我们强烈建议您对重要家庭数据进行定期的异地冗余备份。`,
  },
  {
    title: '6. 服务变更与调整',
    content: `我们保留随时修改、暂停或终止部分辅助云端中转服务的权利，但重大调整会通过官网社区提前通知用户。
本服务条款可能根据社区发展随时优化更新，修改后的条款一旦在官网公布即刻生效。继续使用本服务即视为接受调整。`,
  },
  {
    title: '7. 法律管辖',
    content: `本条款受中华人民共和国法律管辖。如发生因本服务引起的任何争议，双方应首先本着友好合作态度进行友好协商解决；协商不成的，应提交至有管辖权的人民法院诉讼解决。`,
  },
  {
    title: '8. 联络与建议',
    content: `如果您对服务条款、开源协议实施有任何技术疑问或商务合作建议，请通过以下方式与我们联系：\n官方服务邮箱：support@hamr.store\nGitHub 项目主页：https://github.com/hamr-hub`,
  },
]

export default function TermsPage() {
  useSEO({
    title: '服务条款 - HamR 用户服务协议',
    description: 'HamR 服务条款与使用规则，了解数据主权承诺、开源协议边界及双方的权利与义务。',
    canonical: 'https://hamr.store/terms',
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
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Hero 区域 ── */}
      <section className="relative py-24 z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-semibold mb-6">
              <FileText className="w-3.5 h-3.5" />
              HamR 用户与开发者服务协议
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              服务条款
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
              请仔细阅读以下条款，了解您在使用 HamR 各种自建、云端辅助服务时的权利与义务。
            </p>
            <p className="text-white/40 text-xs mt-4 font-semibold font-mono">最后更新日期：2026年3月18日</p>
          </motion.div>
        </div>
      </section>

      {/* ── 条款详文 (节奏与韵律 - 极简留白排版) ── */}
      <section className="py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className="card-dark p-6 md:p-8 border-l-4 border-l-primary-500 text-left relative overflow-hidden group hover:border-l-primary-400"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-5 bg-primary-500 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-200">{s.title}</h2>
                <p className="text-white/70 leading-relaxed text-sm md:text-base font-medium whitespace-pre-line">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/5 pt-10 text-center flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-white/40 font-medium">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-primary-400" />
              对条款有异议？欢迎致信我们。
            </span>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-white transition-colors">返回首页</Link>
              <span>·</span>
              <Link to="/privacy" className="hover:text-white transition-colors">隐私安全政策</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
