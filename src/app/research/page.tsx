'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Microscope, Database, Shield, Upload, BarChart3, Users, Award } from 'lucide-react'
import { ResearchForm } from '@/components/ui/ResearchForm'

const formSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  role: z.enum(['doctor', 'researcher', 'patient', 'other']),
  institution: z.string().min(2, '机构名称至少2个字符'),
  dataType: z.enum(['clinical', 'imaging', 'genetic', 'other']),
  dataDescription: z.string().min(10, '请详细描述数据内容'),
  privacyLevel: z.enum(['public', 'private', 'restricted']),
  consent: z.boolean().refine((val) => val === true, {
    message: '必须同意数据使用条款',
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
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Research
              <span className="gradient-text"> Community</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contribute to groundbreaking oral health research and help shape the
              future of dental care through decentralized science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">{stat.description}</p>
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
      <section className="py-12">
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