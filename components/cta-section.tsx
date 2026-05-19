'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Globe, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.line
            x1="0" y1="50%" x2="100%" y2="50%"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.line
            x1="50%" y1="0" x2="50%" y2="100%"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-mono">Ready to Build</span>
        </motion.div>
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Let&apos;s Architect
          <br />
          <span className="gradient-text">Something Remarkable</span>
        </motion.h2>
        
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Whether you&apos;re building the next continental platform or transforming 
          legacy systems, every great architecture starts with a conversation.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="gap-2 px-8 h-14 text-base glow-md">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 h-14 text-base">
            <Globe className="w-5 h-5" />
            Explore the Ecosystem
          </Button>
        </motion.div>
        
        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by forward-thinking organizations across Africa
          </p>
          
          {/* Company logos placeholder */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="h-8 w-24 bg-muted/50 rounded-md"
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-border/20" />
      <div className="absolute top-12 right-12 w-24 h-24 border-r-2 border-t-2 border-border/20" />
      <div className="absolute bottom-12 left-12 w-24 h-24 border-l-2 border-b-2 border-border/20" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-border/20" />
    </section>
  )
}
