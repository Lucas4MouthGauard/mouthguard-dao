'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'
import { Button } from './Button'
import { Heading } from './Heading'
import { Icon } from './Icon'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Github, Twitter, Mail } from 'lucide-react'

export function StyleShowcase() {
  return (
    <Section>
      <Container>
        <Heading 
          title="样式展示" 
          subtitle="展示我们预定义的样式和组件"
          align="center"
        />

        {/* 卡片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            title="基础卡片"
            description="使用 glass 效果的卡片组件"
            icon={<Icon icon={Github} />}
          />
          <Card
            title="渐变边框"
            description="使用 gradient-border 类的卡片"
            className="gradient-border"
            icon={<Icon icon={Twitter} />}
          />
          <Card
            title="玻璃效果"
            description="使用 glass-effect 类的卡片"
            className="glass-effect"
            icon={<Icon icon={Mail} />}
          />
        </div>

        {/* 按钮展示 */}
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-semibold mb-4">按钮样式</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
          </div>
        </div>

        {/* 动画展示 */}
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-semibold mb-4">动画效果</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              className="p-4 glass rounded-lg text-center animate-float"
              whileHover={{ scale: 1.05 }}
            >
              浮动动画
            </motion.div>
            <motion.div
              className="p-4 glass rounded-lg text-center animate-pulse"
              whileHover={{ scale: 1.05 }}
            >
              脉冲动画
            </motion.div>
            <motion.div
              className="p-4 glass rounded-lg text-center animate-slide-up"
              whileHover={{ scale: 1.05 }}
            >
              上滑动画
            </motion.div>
            <motion.div
              className="p-4 glass rounded-lg text-center animate-fade-in"
              whileHover={{ scale: 1.05 }}
            >
              淡入动画
            </motion.div>
          </div>
        </div>

        {/* 文本样式展示 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">文本样式</h3>
          <div className="space-y-4">
            <h2 className="gradient-text text-4xl font-bold">
              渐变文本效果
            </h2>
            <p className="text-muted-foreground">
              使用 text-muted-foreground 类的文本
            </p>
            <p className="text-primary">
              使用 text-primary 类的文本
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
} 