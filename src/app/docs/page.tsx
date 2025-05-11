'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'

const meta = {
  title: 'Docs | MouthGuard DAO',
  description: 'Read documentation and guides for MouthGuard DAO platform.',
  url: 'https://www.mouthguardonline.com/docs',
  image: 'https://api.screenshotone.com/take?url=https://www.mouthguardonline.com/docs&full_page=true&format=png&viewport_width=1200&viewport_height=630',
};

export default function DocsPage() {
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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We are preparing detailed documentation content, stay tuned...
          </p>
          <div className="relative w-16 h-16 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-orange-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.a
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-full text-white bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 hover:from-orange-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.a>
        </motion.div>
      </div>
    </>
  )
} 