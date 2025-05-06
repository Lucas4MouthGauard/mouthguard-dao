'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Globe, Award } from 'lucide-react'

const partners = [
  {
    name: 'Dental Research Institute',
    type: 'Research Partner',
    description:
      'Leading research institution in oral health and dental technology.',
  },
  {
    name: 'HealthTech Solutions',
    type: 'Technology Partner',
    description:
      'Innovative healthcare technology solutions provider.',
  },
  {
    name: 'Global Dental Network',
    type: 'Network Partner',
    description:
      'Worldwide network of dental professionals and clinics.',
  },
  {
    name: 'AI Healthcare Lab',
    type: 'AI Partner',
    description:
      'Specialized in healthcare AI and machine learning solutions.',
  },
]

const ecosystem = [
  {
    title: 'Research Institutions',
    description:
      'Collaborate with leading research institutions worldwide to advance oral health research.',
    icon: Building2,
    count: '50+',
  },
  {
    title: 'Healthcare Providers',
    description:
      'Partner with dental clinics and hospitals to collect and analyze patient data.',
    icon: Users,
    count: '200+',
  },
  {
    title: 'Global Reach',
    description:
      'Active presence in multiple countries, enabling global research collaboration.',
    icon: Globe,
    count: '30+',
  },
  {
    title: 'Industry Recognition',
    description:
      'Award-winning platform recognized for innovation in healthcare technology.',
    icon: Award,
    count: '15+',
  },
]

export default function EcosystemPage() {
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
              Our Ecosystem
              <span className="gradient-text"> Partners</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building a global network of partners to revolutionize oral health
              research and care through decentralized technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystem.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{item.count}</p>
                    <p className="text-sm text-gray-400">{item.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                    <p className="text-sm text-blue-500 mb-2">{partner.type}</p>
                    <p className="text-gray-400">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Ecosystem Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Ecosystem
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Become part of our growing network of partners and help shape the
              future of oral health research and care.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 