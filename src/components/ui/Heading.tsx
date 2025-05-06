'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function Heading({
  title,
  subtitle,
  className,
  align = 'center',
}: HeadingProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('mb-12', alignments[align], className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
} 