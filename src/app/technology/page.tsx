'use client'

import { motion } from 'framer-motion'
import { Shield, Cpu, Database, Lock, Zap, Globe } from 'lucide-react'

const features = [
  {
    title: 'Blockchain Security',
    description:
      'End-to-end encryption and decentralized storage ensure your data remains secure and private.',
    icon: Shield,
  },
  {
    title: 'AI-Powered Analysis',
    description:
      'Advanced machine learning models for accurate oral health diagnosis and pattern recognition.',
    icon: Cpu,
  },
  {
    title: 'Decentralized Storage',
    description:
      'Distributed data storage across multiple nodes ensures high availability and redundancy.',
    icon: Database,
  },
  {
    title: 'Smart Contracts',
    description:
      'Automated data sharing agreements and transparent research collaboration.',
    icon: Lock,
  },
  {
    title: 'Real-time Processing',
    description:
      'Instant data analysis and feedback for researchers and healthcare providers.',
    icon: Zap,
  },
  {
    title: 'Global Network',
    description:
      'Connect with researchers and institutions worldwide through our decentralized platform.',
    icon: Globe,
  },
]

const techStack = [
  {
    category: 'Frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Solidity', 'IPFS'],
  },
  {
    category: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
  },
  {
    category: 'Blockchain',
    technologies: ['Ethereum', 'IPFS', 'Web3.js', 'Hardhat'],
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Technology
              <span className="gradient-text"> Stack</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combining cutting-edge blockchain technology with advanced AI to
              revolutionize oral health research and data sharing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Tech Stack Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              System Architecture
            </h2>
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">
                  Architecture diagram will be displayed here
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Layer</h3>
                <p className="text-gray-400">
                  Secure storage and encryption of oral health data using
                  blockchain technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Processing Layer</h3>
                <p className="text-gray-400">
                  AI-powered analysis and machine learning for data processing
                  and insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Application Layer</h3>
                <p className="text-gray-400">
                  User-friendly interface for researchers and healthcare
                  providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 