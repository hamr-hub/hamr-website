import { Link } from 'react-router-dom'
import { Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 relative z-20" style={{ background: 'rgba(0,0,0,0.3)' }}>
      {/* 5. 比例与尺度: 使用 py-golden-xl (~68px) 提供极佳的留白 */}
      <div className="max-w-7xl mx-auto px-golden md:px-golden-lg pt-golden-xl pb-golden-lg">
        
        {/* 2. 平衡与稳定: 对称的 4-Column 排布 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-golden-lg mb-golden-xl">
          <div className="text-left">
            <div className="flex items-center gap-golden-sm mb-golden-sm">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow-sm">
                <span className="text-white font-black text-lg">H</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">HamR</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-golden font-medium">让家更聪明，让爱更有温度</p>
            
            <div className="flex gap-golden-xs">
              {[
                { href: 'https://github.com/hamr-hub', icon: <Github size={16} /> },
                { href: 'https://twitter.com/hamr', icon: <Twitter size={16} /> },
                { href: 'mailto:support@hamr.store', icon: <Mail size={16} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: '产品', items: [
              { name: '产品功能', to: '/features', internal: true },
              { name: '在线演示', href: 'https://demo.hamr.top' },
              { name: '立即使用', href: 'https://app.hamr.store' },
            ]},
            { title: '开发者', items: [
              { name: '开发者门户', href: 'https://hamr.top' },
              { name: '技术文档', href: 'https://docs.hamr.top' },
              { name: 'API 服务', href: 'https://api.hamr.top' },
              { name: '部署指南', href: 'https://deploy.hamr.top' },
            ]},
            { title: '支持', items: [
              { name: '帮助中心', href: 'https://help.hamr.store' },
              { name: '服务状态', href: 'https://status.hamr.top' },
              { name: '隐私政策', to: '/privacy', internal: true },
              { name: '服务条款', to: '/terms', internal: true },
              { name: '联系我们', to: '/about', internal: true },
            ]},
          ].map((col) => (
            <div key={col.title} className="text-left">
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-golden-sm font-mono">{col.title}</h3>
              <ul className="space-y-golden-xs">
                {col.items.map((item) => (
                  <li key={item.name}>
                    {'internal' in item && item.internal
                      ? <Link to={(item as {to: string}).to} className="text-white/50 hover:text-primary-300 text-sm font-semibold transition-colors duration-300">{item.name}</Link>
                      : <a href={'href' in item ? (item as {href: string}).href : '#'} className="text-white/50 hover:text-primary-300 text-sm font-semibold transition-colors duration-300">{item.name}</a>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-golden flex flex-col md:flex-row justify-between items-center gap-golden-sm">
          <p className="text-white/25 text-xs md:text-sm font-medium">© 2026 HamR Team. All rights reserved.</p>
          <p className="text-white/20 text-xs md:text-sm font-bold font-mono">MIT License · Open Source</p>
        </div>
      </div>
    </footer>
  )
}
