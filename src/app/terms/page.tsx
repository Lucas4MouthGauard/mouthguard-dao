'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-6 text-blue-400">Terms of Service</h1>
          <p className="text-gray-300 mb-4">
            Welcome to MouthGuard DAO. By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">1. Use of the Platform</h2>
          <ul className="list-disc pl-6 text-gray-400 mb-4">
            <li>You must be at least 18 years old or have legal capacity in your jurisdiction.</li>
            <li>You agree to use the platform for lawful purposes only.</li>
            <li>You are responsible for the accuracy and legality of any data you submit.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">2. User Data & Contributions</h2>
          <ul className="list-disc pl-6 text-gray-400 mb-4">
            <li>By submitting data, you grant us the right to use it for research and platform improvement, in accordance with our Privacy Policy.</li>
            <li>You retain ownership of your data, but grant us a non-exclusive, worldwide, royalty-free license to use, store, and process it.</li>
            <li>You must not submit data that infringes on the rights of others or violates any law.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">3. Intellectual Property</h2>
          <p className="text-gray-400 mb-4">
            All content, trademarks, and technology on this platform are the property of MouthGuard DAO or its licensors. You may not copy, modify, or distribute any part of the platform without permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">4. Disclaimers</h2>
          <ul className="list-disc pl-6 text-gray-400 mb-4">
            <li>The platform is provided "as is" without warranties of any kind.</li>
            <li>We do not guarantee the accuracy, completeness, or reliability of any information or AI model output.</li>
            <li>The platform is not a substitute for professional medical advice, diagnosis, or treatment.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">5. Limitation of Liability</h2>
          <p className="text-gray-400 mb-4">
            MouthGuard DAO is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">6. Changes to Terms</h2>
          <p className="text-gray-400 mb-4">
            We may update these Terms of Service at any time. Continued use of the platform constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">7. Governing Law</h2>
          <p className="text-gray-400 mb-4">
            These terms are governed by the laws of the applicable jurisdiction. Any disputes will be resolved in the courts of that jurisdiction.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-400">8. Contact</h2>
          <p className="text-gray-400 mb-2">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-300 font-mono">contact@mouthguardonline.com</p>
        </motion.div>
      </div>
    </div>
  )
} 