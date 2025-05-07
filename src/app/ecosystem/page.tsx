'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Partner {
  name: string
  image: string
  description: string
  projects: string[]
  category: 'AI' | 'Dental'
  link: string
}

const partners: Partner[] = [
  {
    name: 'DeepMind Health',
    image: '/images/ecosystem/partners/deepmind-ai.jpg',
    description: 'Leading AI research in healthcare, focusing on medical imaging and disease prediction.',
    projects: ['AlphaFold', 'Streams', 'Medical Imaging AI'],
    category: 'AI',
    link: 'https://www.nature.com/articles/s41591-023-02437-x'
  },
  {
    name: 'IBM Watson Health',
    image: '/images/ecosystem/partners/ibm-health.jpg',
    description: 'Advanced healthcare AI solutions for clinical decision support and research.',
    projects: ['Watson for Health', 'Medical Imaging AI', 'Clinical Trials Matching'],
    category: 'AI',
    link: 'https://research.ibm.com'
  },
  {
    name: 'NVIDIA Clara',
    image: '/images/ecosystem/partners/nvidia-clara.jpg',
    description: 'GPU-accelerated healthcare AI platform for medical imaging and genomics.',
    projects: ['Clara Imaging', 'Clara Genomics', 'Clara Holoscan'],
    category: 'AI',
    link: 'https://www.nvidia.com'
  },
  {
    name: 'Pearl AI',
    image: '/images/ecosystem/partners/pearl-ai.jpg',
    description: 'AI-powered dental imaging analysis platform.',
    projects: ['Second Opinion', 'Practice Intelligence', 'Radiology AI'],
    category: 'Dental',
    link: 'https://www.hellopearl.com'
  },
  {
    name: 'VideaHealth',
    image: '/images/ecosystem/partners/videa-health.jpg',
    description: 'Dental AI for improved diagnosis and treatment planning.',
    projects: ['Caries Detection', 'Periodontal Analysis', 'Treatment Planning'],
    category: 'Dental',
    link: 'https://www.videa.ai'
  },
  {
    name: 'Overjet',
    image: '/images/ecosystem/partners/overjet.jpg',
    description: 'AI-powered dental intelligence platform.',
    projects: ['Radiology AI', 'Clinical Support', 'Practice Analytics'],
    category: 'Dental',
    link: 'https://www.overjet.com'
  }
]

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const categoryColors = {
    AI: 'from-blue-500 to-cyan-500',
    Dental: 'from-green-500 to-emerald-500'
  }

  return (
    <motion.a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300 block"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group">
        <Image
          src={partner.image}
          alt={`${partner.name} illustration`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[partner.category]} opacity-20`} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold">{partner.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${categoryColors[partner.category]} text-white`}>
            {partner.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mt-1">{partner.description}</p>
      </div>
      <div className="space-y-2 mt-4">
        {partner.projects.map((project) => (
          <div
            key={project}
            className="flex items-center space-x-2 text-gray-400"
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[partner.category]}`} />
            <span>{project}</span>
          </div>
        ))}
      </div>
    </motion.a>
  )
}

// 在 EcosystemPage 组件的 return 语句前添加新的动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section with enhanced design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"> Ecosystem</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Collaborating with leading institutions and innovators in AI
              and healthcare to advance oral health research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DeSci Integration Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Decentralized Science Integration
            </h2>
            <p className="text-xl text-gray-400">
              Leveraging Web3 and DeSci protocols to revolutionize dental research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Research Data & Governance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Research Data & Governance</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Decentralized Data Storage</h4>
                    <p className="text-gray-400">IPFS-based secure storage for research data with encrypted access control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">DAO Governance</h4>
                    <p className="text-gray-400">Community-driven research direction and fund allocation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Collaboration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400">Research Collaboration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Open Collaboration</h4>
                    <p className="text-gray-400">Seamless collaboration between researchers, clinicians, and AI experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Research Incentives</h4>
                    <p className="text-gray-400">Token-based rewards for valuable research contributions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Research Resources */}
          <div className="mt-12 glass p-8 rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Research Resources</h3>
              <p className="text-gray-400">Access cutting-edge tools and platforms for dental research</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-semibold mb-3">Data Analysis</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Advanced AI Models</li>
                  <li>• Statistical Tools</li>
                  <li>• Visualization Platform</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-semibold mb-3">Collaboration Tools</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Secure Data Sharing</li>
                  <li>• Real-time Communication</li>
                  <li>• Version Control</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-semibold mb-3">Knowledge Base</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Research Papers</li>
                  <li>• Clinical Guidelines</li>
                  <li>• Best Practices</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Add styles to tailwind.config.js */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  )
} 