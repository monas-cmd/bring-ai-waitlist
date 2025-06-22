import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

const EmailSignup = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [signupCount, setSignupCount] = useState(0)

  const fetchSignupCount = async () => {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })

      if (!error && count !== null) {
        setSignupCount(count)
      }
    } catch (err) {
      console.error('Error fetching signup count:', err)
    }
  }

  useEffect(() => {
    fetchSignupCount()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, status: 'pending' }])

      if (error) {
        if (error.code === '23505') {
          setError('This email is already on our waiting list!')
        } else {
          setError('Something went wrong. Please try again.')
        }
      } else {
        setIsSubmitted(true)
        setEmail('')
        // Update the count after successful submission
        fetchSignupCount()
      }
    } catch (err) {
      setError('Network error. Please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-6 sm:p-8 text-center max-w-md mx-auto"
      >
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-neon-blue mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold mb-2 neon-glow">Welcome to the Future</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          You're now on our exclusive waiting list. We'll notify you as soon as Bring AI is ready.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-panel p-6 sm:p-8 max-w-md mx-auto w-full"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-sm opacity-30" />
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Mail className="w-5 h-5 text-neon-blue" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full pl-12 pr-4 py-4 sm:py-4 bg-glass-dark/50 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 text-base"
            style={{
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
            }}
          />
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mb-4 text-center"
        >
          {error}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 px-6 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-lg hover:shadow-neon-blue/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-base min-h-[48px] sm:min-h-[56px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative flex items-center justify-center">
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            'Get Early Access'
          )}
        </span>
      </motion.button>

      <p className="text-xs text-gray-400 text-center mt-4">
        Join {signupCount.toLocaleString()}+ people already waiting
      </p>
    </motion.form>
  )
}

export default EmailSignup 