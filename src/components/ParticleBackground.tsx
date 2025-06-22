import React, { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      // Reduce particles on mobile for better performance
      const particleCount = window.innerWidth < 640 ? 20 : 50
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    const animate = () => {
      setParticles(prev => 
        prev.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY
          
          if (newX > window.innerWidth) newX = 0
          if (newX < 0) newX = window.innerWidth
          if (newY > window.innerHeight) newY = 0
          if (newY < 0) newY = window.innerHeight
          
          return {
            ...particle,
            x: newX,
            y: newY,
          }
        })
      )
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse-slow"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.1}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 grid-pattern opacity-10 sm:opacity-20" />
    </div>
  )
}

export default ParticleBackground 