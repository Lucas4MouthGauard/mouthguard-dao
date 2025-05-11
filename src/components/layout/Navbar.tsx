'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Microscope, Brain, Network, Mail } from 'lucide-react'
import { Container } from './Container'
import { FaBitcoin } from 'react-icons/fa'

const navigation = [
  {
    name: 'Research',
    href: '/research',
    icon: Microscope,
  },
  {
    name: 'Technology',
    href: '/technology',
    icon: Brain,
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    icon: Network,
  },
  {
    name: '$Mouth',
    href: '/mouth',
    icon: FaBitcoin,
    special: true,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--neutral-900)]/95 backdrop-blur-lg border-b border-[var(--neutral-800)]'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-2xl font-bold text-white">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary-400)] to-[var(--accent-400)] bg-clip-text text-transparent">
              MouthGuard DAO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 group ${
                  item.special
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-400 hover:to-yellow-500 shadow-lg hover:shadow-yellow-500/25'
                    : 'text-[var(--neutral-300)] hover:text-[var(--neutral-50)] hover:bg-[var(--neutral-800)]/50'
                }`}
              >
                <item.icon className={`w-4 h-4 ${item.special ? 'text-white' : 'opacity-70 group-hover:opacity-100'}`} />
                <span className={item.special ? 'font-semibold' : ''}>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--neutral-800)]/50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[var(--neutral-50)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--neutral-50)]" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-[var(--neutral-800)]"
            >
              <div className="py-4 space-y-1 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      item.special
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                        : 'text-[var(--neutral-300)] hover:text-[var(--neutral-50)] hover:bg-[var(--neutral-800)]/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className={`w-5 h-5 ${item.special ? 'text-white' : 'opacity-70'}`} />
                    <span className={`font-medium ${item.special ? 'text-white' : ''}`}>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
} 