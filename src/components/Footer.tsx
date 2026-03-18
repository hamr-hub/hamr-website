import { Link } from 'react-router-dom'
import { Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/8" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow-sm">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-white">HamR</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">让家更聪明，让爱更有温度</p>
            <div className="flex space-x-2">
              {[
                { href: 'https://github.com/hamr-hub', icon: <Github size={16} /> },
                { href: 'https://twitter.com/hamr', icon: <Twitter size={16} /> },
                { href: 'mailto:support@hamr.store', icon: <Mail size={16} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-200">
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
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.name}>
                    {'internal' in item && item.internal
                      ? <Link to={(item as {to: string}).to} className="text-white/50 hover:text-white text-sm transition-colors">{item.name}</Link>
                      : <a href={'href' in item ? (item as {href: string}).href : '#'} className="text-white/50 hover:text-white text-sm transition-colors">{item.name}</a>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-sm">© 2026 HamR Team. All rights reserved.</p>
          <p className="text-white/20 text-sm">MIT License · Open Source</p>
        </div>
      </div>
    </footer>
  )
}
