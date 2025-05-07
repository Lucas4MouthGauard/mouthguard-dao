'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Check } from 'lucide-react'

const roles = [
  'Researcher',
  'Doctor',
  'Developer',
  'Student',
  'User',
  'Partner Organization',
]

export function ResearchForm() {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    organization: '',
    dataType: '',
    agreement: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    role: '',
    email: '',
    organization: '',
    dataType: '',
    agreement: '',
  })

  const validate = () => {
    const newErrors: typeof errors = { role: '', email: '', organization: '', dataType: '', agreement: '' }
    if (!formData.role) newErrors.role = 'Please select your role.'
    if (!formData.email) newErrors.email = 'Please enter your email.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.'
    if (!formData.organization || formData.organization.length < 2) newErrors.organization = 'Organization name must be at least 2 characters.'
    if (!formData.dataType) newErrors.dataType = 'Please select a data type.'
    if (!formData.agreement) newErrors.agreement = 'You must agree to the terms.'
    setErrors(newErrors)
    return Object.values(newErrors).every(v => !v)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 rounded-xl text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-400">
          Your submission has been received. Our research team will contact you
          within 72 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-xl"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Role</label>
          <select
            className="w-full px-4 py-2 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="">Select your role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <div className="mt-1 text-red-400 text-sm">{errors.role}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <div className="mt-1 text-red-400 text-sm">{errors.email}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {formData.role === 'Doctor'
              ? 'Hospital/Clinic'
              : formData.role === 'Student'
              ? 'University'
              : formData.role === 'Partner Organization'
              ? 'Organization Name'
              : 'Organization'}
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          />
          {errors.organization && <div className="mt-1 text-red-400 text-sm">{errors.organization}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Data Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['X-ray Images', 'Questionnaire', 'Structured Data'].map(
              (type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 p-4 bg-black/50 rounded-lg border border-white/10 cursor-pointer hover:bg-black/70 transition-colors"
                >
                  <input
                    type="radio"
                    name="dataType"
                    value={type}
                    checked={formData.dataType === type}
                    onChange={(e) => setFormData({ ...formData, dataType: e.target.value })}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span>{type}</span>
                </label>
              )
            )}
          </div>
          {errors.dataType && <div className="mt-1 text-red-400 text-sm">{errors.dataType}</div>}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={formData.agreement}
            onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
            className="mt-1 text-blue-500 focus:ring-blue-500"
          />
          <label className="text-sm text-gray-400">
            I have read and agree to the data usage terms and conditions. I
            understand that my data will be encrypted and used for research
            purposes only.
          </label>
        </div>
        {errors.agreement && <div className="mt-1 text-red-400 text-sm">{errors.agreement}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Data'}
        </button>
      </div>
    </motion.form>
  )
} 