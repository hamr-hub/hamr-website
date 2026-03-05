import { Link } from 'react-router-dom'
import { Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于 */}
          <div>
            <h3 className="text-lg font-bold mb-4">HamR</h3>
            <p className="text-gray-300 text-sm">
              让家更聪明，让爱更有温度
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/hamr-hub" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/hamr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:support@hamr.store" className="hover:text-primary-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* 产品 */}
          <div>
            <h3 className="text-lg font-bold mb-4">产品</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">产品功能</Link></li>
              <li><a href="https://demo.hamr.top" className="text-gray-300 hover:text-white transition-colors">在线演示</a></li>
              <li><a href="https://app.hamr.store" className="text-gray-300 hover:text-white transition-colors">立即使用</a></li>
            </ul>
          </div>

          {/* 开发者 */}
          <div>
            <h3 className="text-lg font-bold mb-4">开发者</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://hamr.top" className="text-gray-300 hover:text-white transition-colors">开发者门户</a></li>
              <li><a href="https://docs.hamr.top" className="text-gray-300 hover:text-white transition-colors">技术文档</a></li>
              <li><a href="https://api.hamr.top" className="text-gray-300 hover:text-white transition-colors">API 服务</a></li>
              <li><a href="https://deploy.hamr.top" className="text-gray-300 hover:text-white transition-colors">部署指南</a></li>
            </ul>
          </div>

          {/* 支持 */}
          <div>
            <h3 className="text-lg font-bold mb-4">支持</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://help.hamr.store" className="text-gray-300 hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="https://status.hamr.top" className="text-gray-300 hover:text-white transition-colors">服务状态</a></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>
        </div>

        {/* 版权声明 */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 HamR Team. All rights reserved. | MIT License</p>
        </div>
      </div>
    </footer>
  )
}
