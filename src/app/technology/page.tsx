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
    icon: (
      <svg className="w-12 h-12 mb-4 animate-pulse" viewBox="0 0 48 48" fill="none">
        <defs>
          <radialGradient id="oral-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#oral-gradient)" fillOpacity="0.7" />
        <ellipse cx="24" cy="28" rx="10" ry="6" fill="#fff" fillOpacity="0.2" />
      </svg>
    ),
    category: 'Oral Health Research & Medical',
    subtitle: 'Empowering digital transformation in oral healthcare',
    description:
      'Cutting-edge digital solutions for dental imaging, remote collaboration, and smart device integration, empowering global oral health research.',
    technologies: [
      { text: 'Digital dental imaging & diagnostics', color: 'from-blue-400 to-purple-400' },
      { text: 'Telemedicine & collaborative case review', color: 'from-pink-400 to-blue-400' },
      { text: 'Smart dental device integration', color: 'from-green-400 to-blue-400' },
      { text: 'Multi-center clinical data interoperability', color: 'from-yellow-400 to-pink-400' },
    ],
    scenario: 'Applied in multi-center clinical research, tele-dentistry, and smart dental clinics.'
  },
  {
    icon: (
      <svg className="w-12 h-12 mb-4 animate-spin-slow" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ai-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="32" height="32" rx="16" fill="url(#ai-gradient)" fillOpacity="0.7" />
        <circle cx="24" cy="24" r="8" fill="#fff" fillOpacity="0.2" />
      </svg>
    ),
    category: 'AI / LLM',
    subtitle: 'Intelligent analysis for next-gen healthcare',
    description:
      'Advanced AI and large language models for medical Q&A, disease prediction, and multimodal data analysis, driving intelligent healthcare innovation.',
    technologies: [
      { text: 'Large language model medical Q&A & decision support', color: 'from-purple-400 to-pink-400' },
      { text: 'AI-driven oral disease prediction', color: 'from-blue-400 to-green-400' },
      { text: 'NLP-powered electronic health records', color: 'from-pink-400 to-yellow-400' },
      { text: 'Multimodal medical image recognition', color: 'from-cyan-400 to-blue-400' },
    ],
    scenario: 'Widely used in intelligent diagnosis, patient triage, and medical data mining.'
  },
  {
    icon: (
      <svg className="w-12 h-12 mb-4 animate-pulse" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="blockchain-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#blockchain-gradient)" fillOpacity="0.7" />
        <rect x="16" y="16" width="16" height="16" rx="4" fill="#fff" fillOpacity="0.2" />
      </svg>
    ),
    category: 'Blockchain',
    subtitle: 'Trustworthy, decentralized medical infrastructure',
    description:
      'Secure, decentralized infrastructure for medical data privacy, smart contract collaboration, and tamper-proof traceability in healthcare.',
    technologies: [
      { text: 'Encrypted & privacy-preserving medical data storage', color: 'from-cyan-400 to-blue-400' },
      { text: 'Smart contract-based research collaboration', color: 'from-purple-400 to-cyan-400' },
      { text: 'Decentralized identity authentication', color: 'from-blue-400 to-green-400' },
      { text: 'Data traceability & immutability', color: 'from-yellow-400 to-pink-400' },
    ],
    scenario: 'Enabling secure data sharing, research collaboration, and regulatory compliance.'
  },
]

const architectureLayers = [
  {
    title: 'Data Layer',
    description: 'Secure storage and encryption of oral health data using blockchain technology.',
    features: [
      {
        title: 'Blockchain Security',
        description: 'End-to-end encryption and decentralized storage ensure your data remains secure and private.',
        icon: Shield,
      },
      {
        title: 'Decentralized Storage',
        description: 'Distributed data storage across multiple nodes ensures high availability and redundancy.',
        icon: Database,
      },
    ],
  },
  {
    title: 'Processing Layer',
    description: 'AI-powered analysis and machine learning for data processing and insights.',
    features: [
      {
        title: 'AI-Powered Analysis',
        description: 'Advanced machine learning models for accurate oral health diagnosis and pattern recognition.',
        icon: Cpu,
      },
      {
        title: 'Real-time Processing',
        description: 'Instant data analysis and feedback for researchers and healthcare providers.',
        icon: Zap,
      },
    ],
  },
  {
    title: 'Application Layer',
    description: 'User-friendly interface for researchers and healthcare providers.',
    features: [
      {
        title: 'Smart Contracts',
        description: 'Automated data sharing agreements and transparent research collaboration.',
        icon: Lock,
      },
      {
        title: 'Global Network',
        description: 'Connect with researchers and institutions worldwide through our decentralized platform.',
        icon: Globe,
      },
    ],
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative glass bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl hover:scale-105 hover:shadow-2xl hover:z-20 transition-all duration-300 backdrop-blur-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  {stack.icon}
                  <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {stack.category}
                  </h3>
                  <div className="text-sm text-blue-300 mb-3 font-medium tracking-wide">{stack.subtitle}</div>
                  <p className="text-gray-400 text-base mb-6 min-h-[64px]">
                    {stack.description}
                  </p>
                  <ul className="space-y-2 w-full mb-4">
                    {stack.technologies.map((tech, i) => (
                      <li key={tech.text} className="flex text-gray-300 text-sm items-start">
                        <span className={`inline-block flex-shrink-0 w-2.5 h-2.5 mt-1 bg-gradient-to-r ${tech.color} rounded-full`} />
                        <span className="ml-2 text-left break-words leading-relaxed">{tech.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-purple-300 italic mt-2 opacity-80">{stack.scenario}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* 已删除 */}

      {/* Architecture Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-10 rounded-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
              System Architecture
            </h2>
            <div className="flex flex-col items-center gap-0">
              {architectureLayers.map((layer, idx) => (
                <>
                  <div
                    key={layer.title}
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center mb-0 ${
                      idx === 0
                        ? 'bg-gradient-to-b from-blue-900/40 to-blue-800/10'
                        : idx === 1
                        ? 'bg-gradient-to-b from-purple-900/40 to-purple-800/10'
                        : 'bg-gradient-to-b from-gray-800/40 to-gray-700/10'
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {layer.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-2 min-h-[48px]">{layer.description}</p>
                  </div>
                  {idx < architectureLayers.length - 1 && (
                    <div className="flex flex-col items-center my-2">
                      <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="arrow-gradient" x1="16" y1="0" x2="16" y2="48" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#60A5FA" />
                            <stop offset="1" stopColor="#A78BFA" />
                          </linearGradient>
                        </defs>
                        <path d="M16 0V40M16 40L4 28M16 40L28 28" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 