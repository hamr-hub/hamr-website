import { motion } from 'framer-motion'
import {
  Users, Clock, CheckSquare, Package, Home, Brain, TrendingUp, Calendar, ArrowRight,
  UserCheck, ShieldCheck, Heart, Sparkles, Activity, Eye, RefreshCw
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function FeaturesPage() {
  useSEO({
    title: '产品功能 - HamR 五维家庭管理系统',
    description: '了解 HamR 的五大核心功能：人员管理、时间管理、事务管理、物品管理、环境管理，以及 JiaBu AI 智能决策系统。数据主权，隐私优先，私有部署。',
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
      icon: <Users className="w-8 h-8" />,
      title: '人 · 成员管理',
      subtitle: 'FAMILY RELATIONSHIPS',
      description: '以家庭成员为核心，建立深度的个人档案与关系网。记录家人的健康状况、偏好特长、教育背景及社交脉络。HamR 能自动挖掘关系纽带，并生成可视化家庭树。',
      features: ['成员专属健康与偏好档案', '多代际关系网图谱生成', '重要纪念日与日程自动联动', '亲属社交与来访事务追踪'],
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      bg: 'rgba(99, 102, 241, 0.12)',
      border: 'rgba(99, 102, 241, 0.3)',
      text: 'text-indigo-400',
      accent: 'bg-indigo-500',
      glow: 'rgba(99, 102, 241, 0.2)',
      visual: (
        <div className="w-full h-full flex flex-col justify-center items-center p-golden relative">
          <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent blur-2xl pointer-events-none" />
          
          {/* 家庭关系关系图谱 Mockup */}
          <div className="relative flex flex-col gap-golden-md w-full max-w-[280px]">
            {/* 顶层父母节点 */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-golden-sm bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-lg">
                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">爸</div>
                <span className="text-white text-xs font-semibold">父亲 (42)</span>
              </div>
              <div className="w-12 h-0.5 bg-white/10 border-t border-dashed border-white/20 flex-grow mx-2" />
              <div className="flex items-center gap-golden-sm bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-lg">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-[10px] font-bold">妈</div>
                <span className="text-white text-xs font-semibold">母亲 (39)</span>
              </div>
            </div>

            {/* 连接线条 */}
            <div className="absolute left-1/2 top-4 w-0.5 h-16 bg-gradient-to-b from-indigo-500/30 to-pink-500/30 -translate-x-1/2" />

            {/* 子代节点 */}
            <div className="flex justify-center z-10">
              <div className="flex items-center gap-golden-sm bg-white/10 backdrop-blur-md border border-indigo-500/30 px-4 py-2.5 rounded-xl shadow-glow-sm relative">
                <span className="absolute -top-1 right-1 w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">宝</div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-xs font-bold">孩子 (10)</span>
                  <span className="text-[10px] text-white/50">今天生日 🎉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '时 · 时间管理',
      subtitle: 'FAMILY TIME SCHEDULE',
      description: '协调家庭成员的日程冲突，打造高效温暖的公共时间表。支持多终端日历实时同步，自动提取学校日程与工作事务，并推荐最佳的家庭欢聚时段。',
      features: ['智能防冲突共享家庭日历', '自动提取教务与工作日程', '家庭专属活动与纪念日推荐', '时间统计分析与平衡指数报告'],
      color: 'from-purple-500 to-violet-600',
      bg: 'rgba(168, 85, 247, 0.12)',
      border: 'rgba(168, 85, 247, 0.3)',
      text: 'text-purple-400',
      accent: 'bg-purple-500',
      glow: 'rgba(168, 85, 247, 0.2)',
      visual: (
        <div className="w-full h-full flex flex-col justify-center items-center p-golden relative">
          <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 to-transparent blur-2xl pointer-events-none" />
          
          {/* 日历卡片 Mockup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-golden-md w-full max-w-[280px] shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-white/5 pb-2.5 mb-3">
              <span className="text-white text-xs font-bold">家庭日历 (5月29日)</span>
              <span className="text-purple-400 text-[10px] font-medium bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">周五</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-2 rounded-lg bg-white/5 border-l-2 border-purple-500">
                <div className="text-[10px] text-white/40 pt-0.5 font-mono">18:00</div>
                <div className="text-left">
                  <div className="text-white text-xs font-semibold">家庭聚餐 🍽️</div>
                  <div className="text-[10px] text-white/50">庆祝孩子十岁生日 · 欢乐颂餐厅</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 rounded-lg bg-white/3 border-l-2 border-white/20">
                <div className="text-[10px] text-white/40 pt-0.5 font-mono">20:30</div>
                <div className="text-left">
                  <div className="text-white/60 text-xs">家庭观影会 🎬</div>
                  <div className="text-[10px] text-white/30">客厅 · 选片：《玩具总动员》</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: '事 · 事务管理',
      subtitle: 'FAMILY TASK TRACKING',
      description: '将繁杂琐碎的家务与重要决定结构化管理。通过独特的决策记录系统，沉淀家庭大事件的决策背景与过程。智能提醒与协同，让每个人都是家庭的参与者。',
      features: ['家务自动排班与进度追踪', '家庭重大决策记录（买房、择校等）', '多级提醒与待办清单共享', '大事记与回忆时间轴自动生成'],
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      bg: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.3)',
      text: 'text-emerald-400',
      accent: 'bg-emerald-500',
      glow: 'rgba(16, 185, 129, 0.2)',
      visual: (
        <div className="w-full h-full flex flex-col justify-center items-center p-golden relative">
          <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent blur-2xl pointer-events-none" />
          
          {/* 事务待办 Mockup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-golden-md w-full max-w-[280px] shadow-2xl relative">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
              <span className="text-white text-xs font-bold">待办与家务清单</span>
              <span className="text-[10px] text-emerald-400 font-mono">已完成 2/3</span>
            </div>
            
            <div className="space-y-2.5 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-emerald-400" />
                </div>
                <span className="text-white/80 text-xs line-through decoration-white/20">给客厅绿植浇水 🌱</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40 ml-auto">爸爸</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-emerald-400" />
                </div>
                <span className="text-white/80 text-xs line-through decoration-white/20">准备生日蜡烛与气球 🎂</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 ml-auto">妈妈</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded border border-white/20 bg-white/3 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-transparent" />
                </div>
                <span className="text-white text-xs font-semibold">挑选周末露营装备 🏕️</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 ml-auto">待办</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: '物 · 物品管理',
      subtitle: 'ASSETS & CONSUMABLES',
      description: '告别丢三落四，让家里的每件物品都有迹可循。分类记录贵重资产、电子发票与保修期限，实时跟踪消耗品库存，智能预测补货周期，让生活平稳无忧。',
      features: ['一维/二维码扫码快速入库记录', '贵重资产与保修期到期智能提醒', '常用日消品库存跟踪与补给算法', '家庭储物空间收纳可视化映射'],
      color: 'from-amber-500 via-orange-500 to-yellow-500',
      bg: 'rgba(245, 158, 11, 0.12)',
      border: 'rgba(245, 158, 11, 0.3)',
      text: 'text-amber-400',
      accent: 'bg-amber-500',
      glow: 'rgba(245, 158, 11, 0.2)',
      visual: (
        <div className="w-full h-full flex flex-col justify-center items-center p-golden relative">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent blur-2xl pointer-events-none" />
          
          {/* 消耗品管理 Mockup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-golden-md w-full max-w-[280px] shadow-2xl relative text-left">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white text-xs font-bold">消耗品余量监视</span>
              <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">智能预警</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/80 font-medium">新鲜全脂牛奶 (2L)</span>
                  <span className="text-red-400 font-bold font-mono">余 15% · 建议购买</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse" style={{ width: '15%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/80 font-medium">洗碗机专用洗涤块 (60P)</span>
                  <span className="text-amber-400 font-bold font-mono">余 35% · 适中</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: '境 · 环境管理',
      subtitle: 'HOME ENVIRONMENT HUB',
      description: '接入家庭物联网设备，实时监测温湿度、空气质量与环境噪音。运用科学的模型评估居住舒适度，为换气、除湿、空调调节提供温和的指导方案。',
      features: ['多传感终端温湿度与空气监测', '综合舒适度（PM2.5/噪音/温湿）评估', '智能设备运行数据记录分析', '极端气候家庭防灾防护智能指南'],
      color: 'from-teal-400 via-emerald-400 to-blue-500',
      bg: 'rgba(45, 212, 191, 0.12)',
      border: 'rgba(45, 212, 191, 0.3)',
      text: 'text-teal-400',
      accent: 'bg-teal-500',
      glow: 'rgba(45, 212, 191, 0.2)',
      visual: (
        <div className="w-full h-full flex flex-col justify-center items-center p-golden relative">
          <div className="absolute inset-0 bg-radial-gradient from-teal-500/10 to-transparent blur-2xl pointer-events-none" />
          
          {/* 环境控制中心 Mockup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-golden-md w-full max-w-[280px] shadow-2xl relative text-left">
            <div className="flex justify-between items-center mb-3.5">
              <span className="text-white text-xs font-bold">空气品质监测站</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] text-emerald-400 font-semibold">优良</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col">
                <span className="text-[9px] text-white/40 font-semibold">室内温度</span>
                <span className="text-white text-base font-bold font-mono">24.5 °C</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col">
                <span className="text-[9px] text-white/40 font-semibold">室内湿度</span>
                <span className="text-teal-400 text-base font-bold font-mono">45.0 %</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col col-span-2">
                <div className="flex justify-between text-[9px] text-white/40 mb-1">
                  <span>PM2.5 (微克/m³)</span>
                  <span className="text-emerald-400 font-bold font-mono">12 Excellent</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400" style={{ width: '12%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ]

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: '#080616' }}>
      
      {/* 黄金分割比微光网格背景 */}
      <div className="grid-glow-overlay" />
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ── Hero 区 ── */}
      <section className="relative py-golden-3xl z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* 3. 重复与统一: 统一的 Header Badges */}
            <div className="section-badge mb-golden-md">
              <Sparkles className="w-3.5 h-3.5 text-primary-300" />
              <span>探索 HamR 卓越的技术与功能模块</span>
            </div>
            
            {/* 5. 比例与尺度: display-xl 尺寸 */}
            <h1 className="text-display-sm md:text-display-xl font-extrabold text-white mb-golden leading-tight tracking-tight">
              五维管理体系<br />
              <span className="gradient-text font-black">构筑温暖智能家</span>
            </h1>
            
            <p className="text-subheading text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
              摒弃传统智能单品的孤立运作，HamR 从人、时、事、物、境五个相互贯通的维度，
              为家庭提供完整、安全、具备绝对数据主权的数据枢纽与智能助理。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 五维管理详解 ── */}
      <section className="py-golden-xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-golden-3xl">
            {dimensions.map((dim, index) => (
              <motion.div
                key={dim.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-golden-xl items-center`}
              >
                {/* 文字介绍面板 */}
                <div className="flex-1 space-y-6 text-left">
                  <div className="flex items-center gap-golden">
                    <div className="p-3.5 rounded-2xl flex items-center justify-center"
                      style={{ background: `${dim.glow}`, border: `1px solid ${dim.border}`, color: 'white', boxShadow: `0 0 20px ${dim.glow}` }}>
                      <span className={dim.text}>{dim.icon}</span>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase opacity-40 font-bold font-mono">{dim.subtitle}</span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-0.5">{dim.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed text-base md:text-lg font-medium">
                    {dim.description}
                  </p>
                  
                  {/* 4. 节奏与韵律: 精致的特征点交互列表 */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-golden-sm pt-2">
                    {dim.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/60 text-sm font-semibold hover:text-white transition-colors duration-300">
                        <div className={`w-2 h-2 rounded-full ${dim.accent} flex-shrink-0 shadow-glow-sm`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 右侧拟态视觉交互展示卡片 (2. 平衡与稳定: 非对称的巧妙视觉比重) */}
                <div className="flex-1 w-full max-w-[500px]">
                  <div className="relative rounded-3xl overflow-hidden p-0.5 group shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    {/* 背景流动渐变边框效果 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${dim.color} opacity-20 group-hover:opacity-45 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* 主卡片体 */}
                    <div className="relative bg-dark-400/90 backdrop-blur-md rounded-3xl border border-white/5 aspect-[4/3] flex items-center justify-center overflow-hidden">
                      {/* 发光斑点 */}
                      <div className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ background: `linear-gradient(to right, ${dim.glow}, transparent)` }} />
                      
                      {dim.visual}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── JiaBu 智能决策系统 ── */}
      <section id="jiabu" className="py-golden-2xl relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary-500/5 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-golden-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-500/15 text-primary-300 border border-primary-500/30 rounded-full text-xs font-bold mb-6 shadow-glow-sm">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>即将推出 · Phase 2 智能决策</span>
            </span>
            <h2 className="section-title">JiaBu 智能决策系统</h2>
            <p className="section-subtitle">
              基于五维隐私数据的本地 AI 分析引擎，为您的家庭生活与长远决策提供智能、温和的指导方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-golden-md">
            {[
              {
                icon: <Brain className="w-7 h-7" />,
                title: '深度数据分析',
                desc: '在确保数据安全不出户的前提下，本地分析家庭成员的日常行为、时间分配与消耗品使用情况，揭示习惯背后的深层规律。',
                color: 'text-purple-400',
                glow: 'rgba(168, 85, 247, 0.2)'
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: '五维幸福感评估',
                desc: '科学量化家庭在社交、健康、环境等维度的幸福指数，生成易读的幸福分析报告，并提供渐进式的家庭氛围改善建议。',
                color: 'text-indigo-400',
                glow: 'rgba(99, 102, 241, 0.2)'
              },
              {
                icon: <Calendar className="w-7 h-7" />,
                title: '温和的智能推荐',
                desc: '自动识别换季保养需要、家务堆积状态，并结合家庭成员时间表推荐个性化周末出游活动、健康食谱或智能家务排班建议。',
                color: 'text-teal-400',
                glow: 'rgba(45, 212, 191, 0.2)'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-golden-lg relative overflow-hidden group text-left"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: item.glow }} />
                
                <div className={`inline-flex p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6 transition-all duration-300 group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-200">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 1. 对比与强调: 核心大按钮高对比设计 */}
          <div className="text-center mt-golden-xl">
            <a href="https://jiabu.hamr.store" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base shadow-btn-primary hover:shadow-btn-primary-hover">
              <Sparkles className="w-4 h-4 animate-pulse" /> 了解 JiaBu 技术细节 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 极致的隐私与部署承诺 ── */}
      <section className="py-golden-2xl relative z-10 bg-white/[0.005]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6 shadow-glow-sm animate-pulse-slow">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-heading font-extrabold text-white mb-4">
            开源代码与数据主权承诺
          </h2>
          <p className="text-subheading text-white/70 mb-10 leading-relaxed font-medium">
            与市面上所有依赖云端解析的智能助理不同，HamR 坚持核心架构全面开源，支持端到端加密和本地局域网隔离运行。
            您的家，您的数据，永远由您掌控，我们没有任何途径和权限窥探您的任何家庭生活数据。
          </p>
          <div className="flex flex-wrap gap-golden justify-center">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-white/80 text-xs font-bold">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              本地加密存储
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-white/80 text-xs font-bold">
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              核心开源透明
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-white/80 text-xs font-bold">
              <RefreshCw className="w-3.5 h-3.5 text-teal-400 animate-spin-slow" />
              无网独立运行
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 底部 CTA ── */}
      <section className="py-golden-2xl relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-teal-500/10 -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-dark p-golden-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-heading font-extrabold text-white mb-5 tracking-tight">
              立即重塑您的家庭管理体验
            </h2>
            <p className="text-subheading text-white/60 mb-golden-lg max-w-lg mx-auto font-medium">
              开启全新维度，让家庭里的每个人、时间、物品、环境都融入温暖智能的轨道。
            </p>
            <div className="flex flex-col sm:flex-row gap-golden justify-center items-center">
              <a href="https://app.hamr.store" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4 shadow-btn-primary hover:shadow-btn-primary-hover">
                立即免费体验 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://deploy.hamr.top" className="btn-ghost inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                阅读部署指南
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
