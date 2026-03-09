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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-200">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-white">HamR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-300 bg-primary-500/10'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <a href="https://app.hamr.store" className="btn-primary text-sm py-2 px-5">
                立即体验
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/8">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-300 bg-primary-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <a href="https://app.hamr.store" className="btn-primary block text-center text-sm">
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
