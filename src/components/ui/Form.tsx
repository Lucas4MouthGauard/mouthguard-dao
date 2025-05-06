'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'select' | 'checkbox' | 'radio' | 'textarea'
  required?: boolean
  options?: { label: string; value: string }[]
  placeholder?: string
  validation?: (value: string) => boolean
  errorMessage?: string
}

interface FormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, any>) => Promise<void>
  submitText?: string
  className?: string
}

export function Form({ fields, onSubmit, submitText = '提交', className }: FormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateField = (field: FormField, value: any): boolean => {
    if (field.required && !value) {
      setErrors(prev => ({
        ...prev,
        [field.name]: '此字段为必填项'
      }))
      return false
    }

    if (field.validation && !field.validation(value)) {
      setErrors(prev => ({
        ...prev,
        [field.name]: field.errorMessage || '输入无效'
      }))
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const isValid = fields.every(field => 
      validateField(field, formData[field.name])
    )

    if (!isValid) {
      setIsSubmitting(false)
      return
    }

    try {
      await onSubmit(formData)
      setIsSuccess(true)
      setFormData({})
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 glass rounded-xl"
      >
        <h3 className="text-2xl font-bold mb-4">提交成功！</h3>
        <p className="text-gray-400">
          我们将在72小时内与您联系。
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={e => handleChange(field.name, e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">请选择...</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={e => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          ) : field.type === 'checkbox' ? (
            <div className="flex items-center">
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] || false}
                onChange={e => handleChange(field.name, e.target.checked)}
                className="w-4 h-4 text-blue-500 border-white/10 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-400">
                {field.placeholder}
              </span>
            </div>
          ) : field.type === 'radio' ? (
            <div className="space-y-2">
              {field.options?.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={e => handleChange(field.name, e.target.value)}
                    className="w-4 h-4 text-blue-500 border-white/10 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-400">
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={e => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {errors[field.name] && (
            <p className="text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? '提交中...' : submitText}
      </motion.button>
    </form>
  )
} 