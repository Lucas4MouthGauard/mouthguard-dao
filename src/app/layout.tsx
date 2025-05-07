// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MouthGuardDao',
  description: 'The first AI-powered decentralized science platform for dental health',
  openGraph: {
    title: 'MouthGuardDao',
    description: 'The first AI-powered decentralized science platform for dental health',
    url: 'https://mouthguardonline.com',
    type: 'website',
    images: [
      {
        url: 'https://mouthguardonline.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'MouthGuardDao',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MouthGuardDao',
    description: 'The first AI-powered decentralized science platform for dental health',
    images: ['https://mouthguardonline.com/og.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

