'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps {
  icon: LucideIcon
  size?: number
  className?: string
}

export function Icon({ icon: Icon, size = 24, className }: IconProps) {
  return (
    <Icon
      size={size}
      className={cn('text-gray-400', className)}
    />
  )
} 