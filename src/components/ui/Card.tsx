'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function Card({
  title,
  description,
  icon,
  className,
  children,
  onClick,
}: CardProps) {
  const Component = onClick ? motion.button : motion.div

  return (
    <Component
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'glass p-6 rounded-xl',
        onClick && 'w-full text-left',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-gray-400">{description}</p>
      )}
      {children}
    </Component>
  )
} 