import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './components/ParticleBackground'
import FloatingShapes from './components/FloatingShapes'
import EmailSignup from './components/EmailSignup'
import SocialProof from './components/SocialProof'

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 neon-glow leading-tight"
            >
              Join the{' '}
              <span className="holographic-gradient bg-clip-text text-transparent">
                AI Revolution
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Experience the future of emotional comfort with Bring AI. 
              Create a digital replica of your loved one and communicate through video calls.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-sm text-gray-400 px-4"
            >
              <span className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                <span>AI-Powered Video Calls</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                <span>Emotional Intelligence</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                <span>Privacy First</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <div className="px-4 mb-6 sm:mb-8">
            <SocialProof />
          </div>

          {/* Email Signup */}
          <div className="px-4">
            <EmailSignup />
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 text-center px-4"
          >
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Bring AI. The future of emotional companionship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements - hidden on mobile */}
      <div className="hidden sm:block fixed top-10 left-10 w-20 h-20 border border-neon-blue/20 rounded-full animate-pulse-slow" />
      <div className="hidden sm:block fixed bottom-10 right-10 w-16 h-16 border border-neon-purple/20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  )
}

export default App 