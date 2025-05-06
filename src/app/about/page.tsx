'use client'

import { motion } from 'framer-motion'
import { Target, Users, Heart, Lightbulb, Award, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-dark-100">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-100" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              关于我们
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我们致力于通过区块链和人工智能技术，推动口腔健康研究的发展
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="glass-effect rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-400 mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
                <p className="text-gray-400">
                  通过区块链技术实现口腔健康数据的安全共享，利用人工智能推动口腔疾病诊断和治疗的创新，
                  为全球口腔健康事业做出贡献。
                </p>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-400 mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">我们的愿景</h2>
                <p className="text-gray-400">
                  成为全球领先的口腔健康研究平台，连接医疗机构、研究者和患者，
                  通过技术创新改善口腔健康服务，让每个人都能获得更好的口腔健康。
                </p>
              </motion.div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              核心价值观
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-effect rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-400 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              核心团队
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="glass-effect rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-400">
                        {member.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{member.expertise}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Impact */}
          <div>
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              全球影响
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {globalImpact.map((impact, index) => (
                <motion.div
                  key={impact.title}
                  className="glass-effect rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary-400">{impact.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                      <p className="text-gray-400">{impact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const coreValues = [
  {
    title: '创新驱动',
    description: '持续探索新技术，推动口腔健康领域的创新发展',
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: '合作共赢',
    description: '建立开放的合作生态，促进多方共赢发展',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: '以人为本',
    description: '始终以改善人类口腔健康为最终目标',
    icon: <Heart className="w-8 h-8" />,
  },
]

const teamMembers = [
  {
    name: '陈博士',
    role: '创始人 & CEO',
    bio: '拥有20年口腔医学研究经验，致力于将AI技术应用于口腔健康领域',
    expertise: '口腔医学、人工智能、区块链',
  },
  {
    name: '林教授',
    role: '首席技术官',
    bio: '前谷歌AI研究员，专注于医疗AI模型的开发和应用',
    expertise: '人工智能、机器学习、医疗技术',
  },
  {
    name: '张医生',
    role: '医学总监',
    bio: '资深口腔科专家，推动AI技术在临床实践中的应用',
    expertise: '口腔医学、临床研究、医疗创新',
  },
]

const globalImpact = [
  {
    title: '全球合作网络',
    description: '已与50多个国家的医疗机构建立合作关系，共同推进口腔健康研究',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: '研究成果',
    description: '发表多篇高水平研究论文，获得多项国际专利',
    icon: <Award className="w-6 h-6" />,
  },
] 