// src/app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Microscope, Database, Shield } from 'lucide-react'

const features = [
  {
    title: 'Decentralized Research',
    description: 'Collaborative research platform powered by blockchain technology.',
    icon: Microscope,
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning models for oral health data analysis.',
    icon: Database,
  },
  {
    title: 'Secure Data Sharing',
    description: 'End-to-end encrypted data sharing with privacy protection.',
    icon: Shield,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advancing Oral Health
              <span className="gradient-text"> Research</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join our decentralized science platform to contribute to groundbreaking
              oral health research and help shape the future of dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Join Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Contribute?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our community of researchers, healthcare providers, and data
              scientists to advance oral health research.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

