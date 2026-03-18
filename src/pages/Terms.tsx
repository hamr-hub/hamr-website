import { motion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'

const sections = [
  {
    title: '1. 服务说明',
    content: `HamR（以下简称"本平台"）是一个开源的家庭智能助理平台，提供五维家庭数据管理（人/时/事/物/境）及 AI 智能决策功能。
本平台核心功能永久免费，支持私有部署。使用本平台即表示您同意本服务条款。`,
  },
  {
    title: '2. 账号与使用',
    content: `您需要注册账号方可使用完整功能。请确保注册信息真实准确，并妥善保管您的账号密码。
您应当对账号下的一切行为负责。如发现账号被盗用，请立即联系我们。
禁止使用本平台进行任何违法活动、传播有害信息或干扰平台正常运营。`,
  },
  {
    title: '3. 数据主权',
    content: `您的家庭数据属于您自己。
- 我们不会出售、出租或以任何形式向第三方提供您的个人数据
- 支持数据导出，您可随时导出全部数据
- 私有部署模式下，数据完全存储在您的设备或服务器上
- 账号注销后，我们将在 30 天内删除服务器上的所有相关数据`,
  },
  {
    title: '4. 知识产权',
    content: `HamR 平台代码以 MIT License 开源发布，您可自由使用、修改和分发。
用户创建的内容（家庭数据、记录等）的知识产权归用户所有。
"HamR"品牌名称及相关 Logo 的商标权归 HamR Team 所有。`,
  },
  {
    title: '5. 免责声明',
    content: `本平台以"现状"提供服务，不对服务的持续可用性、准确性或适用性作出明确保证。
对于因使用本平台导致的数据丢失、业务中断或其他损失，本平台在法律允许的最大范围内不承担责任。
建议您定期备份重要数据。私有部署用户需自行负责服务器安全和数据备份。`,
  },
  {
    title: '6. 服务变更',
    content: `我们保留随时修改、暂停或终止服务的权利，但会提前通知用户（紧急安全情况除外）。
本服务条款可能随时更新，修改后的条款将在官网公布。继续使用本平台视为接受修改后的条款。`,
  },
  {
    title: '7. 适用法律',
    content: `本条款受中华人民共和国法律管辖。如发生争议，双方应友好协商解决；协商不成的，提交有管辖权的人民法院诉讼解决。`,
  },
  {
    title: '8. 联系我们',
    content: `如有任何问题或建议，请通过以下方式联系：\n邮箱：support@hamr.store\nGitHub：https://github.com/hamr-hub`,
  },
]

export default function TermsPage() {
  useSEO({
    title: '服务条款 - HamR',
    description: 'HamR 服务条款，了解平台使用规则、数据主权政策及用户权利义务。',
    canonical: 'https://hamr.store/terms',
  })

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">服务条款</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            请仔细阅读以下条款，了解您使用 HamR 的权利与义务
          </p>
          <p className="text-primary-200 text-sm mt-4">最后更新：2026-03-18</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
