'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'

const meta = {
  title: 'Privacy Policy | MouthGuard DAO',
  description: 'Read our privacy policy to learn how we protect your data at MouthGuard DAO.',
  url: 'https://www.mouthguardonline.com/privacy',
  image: 'https://api.screenshotone.com/take?url=https://www.mouthguardonline.com/privacy&full_page=true&format=png&viewport_width=1200&viewport_height=630',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl shadow-xl"
          >
            <h1 className="text-3xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
            <p className="text-gray-300 mb-4">
              At MouthGuard DAO, we are committed to protecting your privacy and ensuring the security of your personal and health data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">1. Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-400 mb-4">
              <li>Personal identification information (name, email, etc.)</li>
              <li>Health and research data you choose to contribute</li>
              <li>Usage data and analytics (device, browser, IP address, etc.)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-400 mb-4">
              <li>To facilitate decentralized oral health research and data sharing</li>
              <li>To improve our AI models and platform features</li>
              <li>To communicate with you about research opportunities and updates</li>
              <li>To ensure platform security and compliance with regulations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">3. Data Security</h2>
            <p className="text-gray-400 mb-4">
              We use industry-standard encryption, access controls, and privacy protocols to protect your data. All sensitive health data is anonymized and securely stored. Only authorized personnel and research partners may access your data, and only for approved research purposes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">4. Data Sharing & Consent</h2>
            <p className="text-gray-400 mb-4">
              We will never sell your personal or health data. Data may be shared with trusted research partners only with your explicit consent and in compliance with applicable laws (such as HIPAA, GDPR). You may withdraw your consent at any time.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">5. Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-400 mb-4">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request information about how your data is used</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">6. Changes to This Policy</h2>
            <p className="text-gray-400 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes via our website or email.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">7. Contact Us</h2>
            <p className="text-gray-400 mb-2">
              If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
            </p>
            <p className="text-gray-300 font-mono">contact@mouthguardonline.com</p>
          </motion.div>
        </div>
      </div>
    </>
  )
} 