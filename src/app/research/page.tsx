'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Microscope, Database, Shield, Upload, BarChart3, Users, Award } from 'lucide-react'
import { ResearchForm } from '@/components/ui/ResearchForm'
import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import Head from 'next/head'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  role: z.enum(['doctor', 'researcher', 'patient', 'other']),
  institution: z.string().min(2, 'Institution name must be at least 2 characters'),
  dataType: z.enum(['clinical', 'imaging', 'genetic', 'other']),
  dataDescription: z.string().min(10, 'Please describe the data in detail'),
  privacyLevel: z.enum(['public', 'private', 'restricted']),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the data usage terms',
  }),
})

type FormData = z.infer<typeof formSchema>

const stats = [
  {
    title: 'Research Papers',
    value: '12+',
    icon: BarChart3,
    description: 'Published in top journals',
  },
  {
    title: 'Contributors',
    value: '500+',
    icon: Users,
    description: 'Global research community',
  },
  {
    title: 'Awards',
    value: '8',
    icon: Award,
    description: 'Industry recognition',
  },
  {
    title: 'Data Points',
    value: '1M+',
    icon: Shield,
    description: 'Securely collected',
  },
]

const researchAreas = [
  {
    title: 'Oral Health Patterns',
    description:
      'Analysis of dental health patterns across different demographics and regions.',
    progress: 75,
  },
  {
    title: 'AI Diagnosis Models',
    description:
      'Development of AI models for early detection of oral health issues.',
    progress: 60,
  },
  {
    title: 'Treatment Outcomes',
    description:
      'Study of treatment effectiveness and patient recovery patterns.',
    progress: 45,
  },
]

const researchers = [
  // 网络头像素材
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/women/22.jpg',
  'https://randomuser.me/api/portraits/men/23.jpg',
  'https://randomuser.me/api/portraits/women/33.jpg',
]

// 合并所有案例
const cases = [
  {
    img: '/researchers/1.jpg',
    title: 'Oral Health Special Topic',
    desc: 'Resources on oral health, disease research, and care provided by the NIH National Institute of Dental and Craniofacial Research.',
    link: 'https://www.nidcr.nih.gov/health-info',
    tags: ['Oral Health', 'NIH', 'Research']
  },
  {
    img: '/researchers/2.jpg',
    title: 'AI Applications in Dental Care',
    desc: 'AI technology is revolutionizing dental care, improving diagnostic accuracy and efficiency.',
    link: 'https://stories.tamu.edu/news/2025/03/12/revolutionizing-dental-surgery-with-ai',
    tags: ['AI', 'Dental', 'Innovation']
  },
  {
    img: '/researchers/3.jpg',
    title: 'Preventing Oral Diseases with Daily Care',
    desc: 'Regular brushing, flossing, and mouthwash help maintain oral health and prevent cavities and periodontal diseases.',
    link: 'https://www.nidcr.nih.gov/health-info/oral-hygiene',
    tags: ['Prevention', 'Oral Care', 'Daily Hygiene']
  },
]

function ScienceCarousel({ items }: { items: typeof cases }) {
  const [index, setIndex] = useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % items.length), 5000)
    return () => clearInterval(timer)
  }, [items.length])
  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
  const next = () => setIndex(i => (i + 1) % items.length)
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
            x: i === index ? 0 : i < index ? -80 : 80,
            scale: i === index ? 1 : 0.96,
            zIndex: i === index ? 10 : 0,
          }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`absolute left-0 right-0 mx-auto flex flex-col items-center justify-end h-80 w-full md:w-[420px] rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 ${i === index ? 'z-10' : 'z-0 pointer-events-none'}`}
        >
          <div className="relative w-full h-48 p-3 flex items-center justify-center">
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl" />
            <div className="absolute bottom-3 left-0 w-full px-4">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white text-xl font-bold drop-shadow-lg text-left hover:underline">
                {item.title}
              </a>
            </div>
          </div>
          <div className="w-full px-4 py-3 flex flex-col gap-2">
            <div className="text-gray-200 text-sm mb-1 min-h-[40px]">{item.desc}</div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-xs text-white font-semibold shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      {/* 左右切换按钮 */}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all z-20">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all z-20">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* 指示器 */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
        {items.map((_, i) => (
          <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg' : 'bg-white/30'} transition-all`} />
        ))}
      </div>
    </div>
  )
}

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

const meta = {
  title: 'Research | MouthGuard DAO',
  description: 'Advance oral health research with MouthGuard DAO. Join our global network of researchers.',
  url: 'https://www.mouthguardonline.com/research',
  image: 'https://api.screenshotone.com/take?url=https://www.mouthguardonline.com/research&full_page=true&format=png&viewport_width=1200&viewport_height=630',
};

export default function ResearchPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // TODO: 实现数据提交逻辑
    console.log(data)
    setIsSubmitting(false)
  }

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
      <div className="min-h-screen">
        {/* Advancing Oral Health Research Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-900)] via-[var(--neutral-800)] to-[var(--neutral-900)]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-500)]/10 to-[var(--accent-500)]/10 mix-blend-overlay"></div>
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-500)]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-500)]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <Container>
            <div className="relative">
              {/* Section Header */}
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <span className="text-sm font-semibold text-[var(--primary-400)] tracking-wider uppercase mb-2 block">
                    Research Platform
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--neutral-50)] to-[var(--neutral-400)]"
                >
                  Advancing Oral Health Research
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-[var(--neutral-400)] max-w-3xl mx-auto"
                >
                  Join our global network of researchers and contribute to the future of oral healthcare
                </motion.p>
              </div>

              {/* Research Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Research Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-500)]/20 to-[var(--accent-500)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-[var(--neutral-800)]">
                    <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[var(--neutral-50)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--neutral-50)] to-[var(--neutral-400)]">AI-Powered Analysis</h3>
                    <p className="text-[var(--neutral-400)] text-lg leading-relaxed">
                      Leverage advanced machine learning algorithms to analyze oral health data and identify patterns
                    </p>
                  </div>
                </motion.div>

                {/* Research Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-500)]/20 to-[var(--accent-500)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-[var(--neutral-800)]">
                    <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[var(--neutral-50)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--neutral-50)] to-[var(--neutral-400)]">Global Collaboration</h3>
                    <p className="text-[var(--neutral-400)] text-lg leading-relaxed">
                      Connect with researchers worldwide and contribute to collaborative studies
                    </p>
                  </div>
                </motion.div>

                {/* Research Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-500)]/20 to-[var(--accent-500)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-[var(--neutral-800)]">
                    <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[var(--neutral-50)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--neutral-50)] to-[var(--neutral-400)]">Data Security</h3>
                    <p className="text-[var(--neutral-400)] text-lg leading-relaxed">
                      Advanced encryption and blockchain technology ensure your research data remains secure
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-20 text-center"
              >
                <Link
                  href="/#contribute-section"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] text-[var(--neutral-50)] rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Start Contributing
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
} 