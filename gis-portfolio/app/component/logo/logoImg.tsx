"use client"
import { motion } from "framer-motion"

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3 cursor-pointer group"
    >
      {/* Initials Badge */}
      <div className="relative">
        {/* Glassmorphic circle */}
        <div className="w-14 h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-purple-600/20 transition-all duration-300">
          {/* Initials - Unique styling */}
          <span className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}>NO</span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10" />
      </div>
      
      {/* Full Name - appears on larger screens */}
      <div className="hidden md:flex flex-col justify-center">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="leading-none"
        >
          <div className="text-base font-black text-white tracking-tight" style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.01em' }}>Nelson</div>
          <div className="text-xs font-semibold text-purple-400 mt-0.5">OKOSUN</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Logo


export const Logo1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3 cursor-pointer group"
    >
      {/* Initials Badge - Larger for loader */}
      <div className="relative">
        {/* Glassmorphic circle */}
        <div className="w-20 h-20 rounded-full backdrop-blur-md bg-white/5 border-2 border-gray-300 flex items-center justify-center group-hover:bg-purple-600/10 transition-all duration-300">
          {/* Initials - Unique styling */}
          <span className="text-gray-900 font-black text-3xl tracking-tighter" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, letterSpacing: '-0.04em' }}>NO</span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10" />
      </div>
      
      {/* Full Name - for loader screen */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="leading-none"
        >
          <div className="text-2xl font-black text-gray-900 tracking-tighter" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>Nelson</div>
          <div className="text-sm font-bold text-purple-600 mt-1">OKOSUN</div>
        </motion.div>
      </div>
    </motion.div>
  )
}
