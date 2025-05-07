'use client'

import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">MouthGuard DAO</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Revolutionizing oral health research through decentralized technology and AI innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/docs" className="text-base text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-base text-gray-300 hover:text-white">
                    API (Coming Soon)
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-base text-gray-300 hover:text-white">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} MouthGuard DAO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 