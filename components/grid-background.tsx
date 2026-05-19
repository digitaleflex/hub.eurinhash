'use client'

import { motion } from 'framer-motion'

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px]"
      />
      
      {/* Floating architectural elements */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Diagonal lines */}
        <motion.line
          x1="0" y1="100%" x2="100%" y2="0"
          stroke="url(#grid-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.line
          x1="20%" y1="100%" x2="100%" y2="20%"
          stroke="var(--border)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>
      
      {/* Corner architectural brackets */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-border/30" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-border/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-border/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-border/30" />
    </div>
  )
}
