'use client'

import Link from 'next/link'
import { Twitter } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ReactNode } from 'react'
import { useState } from 'react'

type FooterLink = {
  name: string
  href: string
  icon?: any
  comingSoon?: boolean
}

const footerLinks: Record<string, FooterLink[]> = {
  product: [
    { name: 'Research', href: '/research' },
    { name: 'Technology', href: '/technology' },
    { name: 'Ecosystem', href: '/ecosystem' },
  ],
  resources: [
    { name: 'Docs', href: '/docs' },
    { name: 'API', href: '/api', comingSoon: true },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  community: [
    { name: 'Twitter', href: 'https://x.com/MouthGuard_Dao', icon: Twitter },
  ],
}

export function Footer() {
  const [subscribing, setSubscribing] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribing(true)
    setTimeout(() => {
      setSubscribing(false)
      setShowToast(true)
      setEmail('')
      setTimeout(() => setShowToast(false), 2000)
    }, 800)
  }

  return (
    <footer className="bg-[var(--neutral-900)]/70 backdrop-blur-lg border-t border-[var(--neutral-800)] pt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* Brand & Slogan */}
          <div className="col-span-1 flex flex-col space-y-4">
            <Link href="/" className="flex items-center mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] bg-clip-text text-transparent">
                MouthGuard DAO
              </span>
            </Link>
            <span className="text-sm text-[var(--primary-400)] font-semibold tracking-wide">Empowering Global Oral Health Research</span>
            <p className="text-[var(--neutral-400)] text-sm max-w-xs">
              A next-generation decentralized science platform for oral health, leveraging AI and Web3 to accelerate research, data sharing, and innovation worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--neutral-300)] uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--neutral-300)] uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.comingSoon ? (
                    <span className="text-[var(--neutral-500)] cursor-not-allowed select-none opacity-60">
                      {link.name}
                      <span className="text-xs ml-1">(Coming Soon)</span>
                    </span>
                  ) : (
                    <Link href={link.href} className="text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Newsletter */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[var(--neutral-300)] uppercase tracking-wider mb-4">Community</h3>
              <div className="flex space-x-4">
                {footerLinks.community.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors"
                  >
                    <item.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--neutral-300)] uppercase tracking-wider mb-2">Subscribe</h3>
              <form className="flex items-center space-x-2" onSubmit={handleSubscribe}>
                <input
                  type="text"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-lg bg-[var(--neutral-900)]/40 border border-[var(--neutral-800)] text-sm text-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)]"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] text-[var(--neutral-50)] rounded-lg text-sm font-semibold transition flex items-center justify-center ${subscribing ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                  disabled={subscribing}
                >
                  <span className={subscribing ? 'animate-spin-slow' : ''} style={subscribing ? {display:'inline-block',transition:'transform 0.8s'} : {}}>
                    {subscribing ? (
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                      </svg>
                    ) : null}
                  </span>
                  Subscribe
                </button>
              </form>
              {error && (
                <div className="mt-2 text-[var(--error)] text-sm">{error}</div>
              )}
              {showToast && (
                <div className="fixed bottom-8 right-8 bg-[var(--neutral-900)]/90 text-[var(--neutral-50)] px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                  Subscription successful!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-500)] via-[var(--accent-500)] to-[var(--primary-500)] rounded-full mb-6 opacity-60" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-[var(--neutral-400)] text-sm">
          <span>© {new Date().getFullYear()} MouthGuard DAO. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--primary-400)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--primary-400)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
} 