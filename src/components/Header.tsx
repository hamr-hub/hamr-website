import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [location])

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品功能', path: '/features' },
    { name: '关于我们', path: '/about' },
    { name: '隐私安全', path: '/privacy' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-dark-300/80 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-golden md:px-golden-lg">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-golden-sm group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <span className="text-white font-black text-lg">H</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">HamR</span>
            </Link>
          </div>

          {/* 3. 重复与统一: 导航链接统一采用 golden-xs 间距与规范字体 */}
          <div className="hidden md:flex items-center gap-golden-xs">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-golden-sm py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-300 bg-primary-500/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* 1. 对比与强调: 导航栏中紧凑型主按钮 */}
            <div className="ml-golden-sm">
              <a 
                href="https://app.hamr.store" 
                className="btn-primary inline-flex items-center justify-center text-xs !px-5 !py-2 !rounded-xl shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                立即体验
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-golden border-t border-white/8">
            <div className="flex flex-col gap-golden-xs">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-golden py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-300 bg-primary-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-golden">
                <a href="https://app.hamr.store" className="btn-primary block text-center text-xs !px-5 !py-2.5 !rounded-xl shadow-btn-primary hover:shadow-btn-primary-hover">
                  立即体验
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
