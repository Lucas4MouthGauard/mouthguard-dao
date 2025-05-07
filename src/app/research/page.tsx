'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Microscope, Database, Shield, Upload, BarChart3, Users, Award } from 'lucide-react'
import { ResearchForm } from '@/components/ui/ResearchForm'
import React from 'react'

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-gray-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* 左侧内容 */}
          <div className="md:w-1/2 w-full flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
              Join Our Research Community
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Contribute to groundbreaking oral health research and help shape the future of dental care through decentralized science.
            </p>
            <div className="flex items-center mb-6">
              <div className="flex -space-x-3">
                {researchers.map((src, i) => (
                  <img key={i} src={src} alt="avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-md bg-gray-200 object-cover" style={{zIndex: researchers.length - i}} />
                ))}
              </div>
              <span className="ml-4 text-2xl font-bold text-blue-400">100+</span>
              <span className="ml-2 text-gray-400">Researchers & Institutions Joined</span>
            </div>
          </div>
          {/* 右侧轮播 */}
          <div className="md:w-1/2 w-full flex flex-col gap-8">
            <ScienceCarousel items={cases} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative glass bg-white/10 border-2 border-white/10 rounded-2xl p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-lg group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1 text-white/90 tracking-wide">
                  {stat.title}
                </div>
                <div className="text-sm text-gray-300 mb-2 min-h-[32px]">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Current Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <div className="w-full bg-black/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${area.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {area.progress}% Complete
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12" id="contribute-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Contribute to Research
              </h2>
              <p className="text-gray-400 mb-6">
                Share your data and help advance oral health research. Your
                contribution will be encrypted and used to improve dental care
                worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm">End-to-end encryption</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm">Recognition in research papers</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm">Join our research community</p>
                </div>
              </div>
            </div>
            <ResearchForm />
          </div>
        </div>
      </section>
    </div>
  )
} 