'use client'

import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'

const footerLinks = {
  product: [
    { name: '研究', href: '/research' },
    { name: '技术', href: '/technology' },
    { name: '生态', href: '/ecosystem' },
  ],
  resources: [
    { name: '文档', href: '/docs' },
    { name: 'API', href: '/api' },
    { name: '博客', href: '/blog' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
    { name: '加入我们', href: '/careers' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                MouthGuard DAO
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              一个专注于口腔健康研究的去中心化科学平台，结合 Web3 和 AI 技术，支持用户贡献健康数据、训练 AI 模型并获得激励。
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/mouthguard-dao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/mouthguard-dao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@mouthguard-dao.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              产品
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              资源
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} MouthGuard DAO. 保留所有权利。
          </p>
        </div>
      </Container>
    </footer>
  )
} 