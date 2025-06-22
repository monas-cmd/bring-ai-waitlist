import React from 'react'

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border border-neon-blue/30 rounded-full animate-float opacity-20" />
      <div className="hidden sm:block absolute top-40 right-20 w-24 h-24 border border-neon-purple/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="hidden sm:block absolute bottom-32 left-1/4 w-16 h-16 border border-neon-blue/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-20 h-20 border border-neon-purple/20 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
      <div className="hidden sm:block absolute bottom-20 right-10 w-28 h-28 border border-neon-blue/25 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Holographic lines - simplified for mobile */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-20 sm:opacity-30" />
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-20 sm:opacity-30" />
      <div className="hidden sm:block absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-20" />
      
      {/* Vertical lines - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-20" />
      <div className="hidden sm:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-20" />
    </div>
  )
}

export default FloatingShapes 