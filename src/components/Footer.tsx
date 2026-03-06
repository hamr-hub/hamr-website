import { Link } from 'react-router-dom'
import { Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const links = {
    product: [
      { name: '产品功能', to: '/features', internal: true },
      { name: '在线演示', href: 'https://demo.hamr.top' },
      { name: '立即使用', href: 'https://app.hamr.store' },
    ],
    developer: [
      { name: '开发者门户', href: 'https://hamr.top' },
      { name: '技术文档', href: 'https://docs.hamr.top' },
      { name: 'API 服务', href: 'https://api.hamr.top' },
      { name: '部署指南', href: 'https://deploy.hamr.top' },
    ],
    support: [
      { name: '帮助中心', href: 'https://help.hamr.store' },
      { name: '服务状态', href: 'https://status.hamr.top' },
      { name: '隐私政策', to: '/privacy', internal: true },
      { name: '联系我们', to: '/about', internal: true },
    ],
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">HamR</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              让家更聪明，让爱更有温度
            </p>
            <div className="flex space-x-3">
              {[
                { href: 'https://github.com/hamr-hub', icon: <Github size={18} /> },
                { href: 'https://twitter.com/hamr', icon: <Twitter size={18} /> },
                { href: 'mailto:support@hamr.store', icon: <Mail size={18} /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: '产品', items: links.product },
            { title: '开发者', items: links.developer },
            { title: '支持', items: links.support },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.name}>
                    {'internal' in item && item.internal ? (
                      <Link to={item.to!} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                        {item.name}
                      </Link>
                    ) : (
                      <a href={'href' in item ? item.href : '#'} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2026 HamR Team. All rights reserved.</p>
          <p className="text-gray-600 text-sm">MIT License · Open Source</p>
        </div>
      </div>
    </footer>
  )
}
