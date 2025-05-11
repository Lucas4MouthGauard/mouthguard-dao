'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, MessageSquare, Award, Star, TrendingUp } from 'lucide-react'
import Head from 'next/head'

const meta = {
  title: 'Community | MouthGuard DAO',
  description: 'Join our community to connect with experts and enthusiasts in oral health.',
  url: 'https://www.mouthguardonline.com/community',
  image: 'https://api.screenshotone.com/take?url=https://www.mouthguardonline.com/community&full_page=true&format=png&viewport_width=1200&viewport_height=630',
};

export default function Community() {
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
                社区中心
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                加入我们的社区，与口腔健康领域的专家和爱好者一起交流、学习和成长
              </p>
            </motion.div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="glass-effect rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary-400 mb-4">{stat.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
                即将举行的活动
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    className="glass-effect rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary-400">{event.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-400 mb-4">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                          <span className="mx-2">•</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured Members */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
                优秀成员
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="glass-effect rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-400">
                          {member.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-400">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{member.contribution}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{member.achievement}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Discussion Topics */}
            <div>
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
                热门讨论
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {discussionTopics.map((topic, index) => (
                  <motion.div
                    key={topic.title}
                    className="glass-effect rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary-400">{topic.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                        <p className="text-gray-400 mb-4">{topic.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span>{topic.replies} 回复</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-2" />
                            <span>{topic.likes} 点赞</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const communityStats = [
  {
    title: '社区成员',
    value: '10,000+',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: '每月活动',
    value: '20+',
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    title: '讨论话题',
    value: '5,000+',
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    title: '研究成果',
    value: '100+',
    icon: <Award className="w-8 h-8" />,
  },
]

const upcomingEvents = [
  {
    title: '口腔健康研究研讨会',
    description: '探讨最新口腔健康研究进展和AI应用',
    date: '2024年4月15日',
    time: '14:00-17:00',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: 'AI模型训练工作坊',
    description: '学习如何训练和优化口腔健康AI模型',
    date: '2024年4月20日',
    time: '10:00-16:00',
    icon: <Calendar className="w-6 h-6" />,
  },
]

const featuredMembers = [
  {
    name: '张医生',
    role: '口腔科专家',
    contribution: '贡献了超过1000份临床数据，推动了多个研究项目的发展',
    achievement: '年度最佳贡献者',
  },
  {
    name: '李研究员',
    role: 'AI研究员',
    contribution: '开发了多个口腔健康预测模型，准确率达到95%以上',
    achievement: '技术创新奖',
  },
  {
    name: '王教授',
    role: '大学教授',
    contribution: '组织了多次学术交流活动，促进了社区的发展',
    achievement: '社区建设奖',
  },
]

const discussionTopics = [
  {
    title: 'AI在口腔疾病诊断中的应用',
    description: '讨论AI技术如何提高口腔疾病诊断的准确性和效率',
    replies: 128,
    likes: 256,
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: '口腔健康数据标准化',
    description: '探讨如何建立统一的口腔健康数据标准，促进研究合作',
    replies: 96,
    likes: 184,
    icon: <TrendingUp className="w-6 h-6" />,
  },
] 