'use client';

import React from 'react';
import CopyButton from '@/components/CopyButton';
import { FaBitcoin, FaChartLine, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Head from 'next/head';

const meta = {
  title: '$Mouth | MouthGuard DAO',
  description: 'The First AI-Powered Decentralized Token for Dental Health Innovation.',
  url: 'https://www.mouthguardonline.com/mouth',
  image: 'https://og-image.vercel.app/%24Mouth.png?theme=dark&md=1&fontSize=100px',
};

const MouthPage = () => (
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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-orbitron font-extrabold tracking-widest bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_16px_rgba(80,80,255,0.25)]">
              $Mouth
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The First AI-Powered Decentralized Token for Dental Health Innovation
            </p>
          </div>

          {/* Main Content Section */}
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* CA Address Section */}
            <div className="relative z-10">
              <CopyButton text="Coming soon" />
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative z-10">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaChartLine className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Innovation</h3>
                </div>
                <p className="text-gray-400">Pioneering the future of dental health through AI and blockchain technology</p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaShieldAlt className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Security</h3>
                </div>
                <p className="text-gray-400">Built on secure blockchain technology ensuring transparency and trust</p>
              </div>
            </div>

            {/* BUY Button Section */}
            <div className="mt-12 flex justify-center relative z-10">
              <button
                disabled
                className="relative inline-flex items-center px-10 py-4 rounded-xl bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold opacity-60 cursor-not-allowed select-none"
              >
                <span className="relative z-10">BUY NOW</span>
              </button>
            </div>

            {/* Community Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
              <div className="bg-gray-800/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">10K+</div>
                <div className="text-sm text-gray-400">Local Community Members</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">Active Development</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">Community Driven</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default MouthPage; 