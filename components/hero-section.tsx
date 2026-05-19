'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { GridBackground } from './grid-background'
import { AnimatedCounter } from './animated-counter'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Terminal, Layers, Shield } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const metrics = [
  { end: 50, suffix: '+', label: 'Systems Architected' },
  { end: 10, suffix: 'K+', label: 'Community Members' },
  { end: 99.9, suffix: '%', label: 'Uptime Delivered' },
  { end: 15, suffix: '+', label: 'Years Experience' },
]

const trustIndicators = [
  { icon: Terminal, label: 'Cloud Native' },
  { icon: Layers, label: 'Scalable Systems' },
  { icon: Shield, label: 'Security First' },
]

export function HeroSection() {
  const t = useTranslations('Hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 flex-wrap justify-center">
            {trustIndicators.map((indicator) => (
              <div key={indicator.label} className="flex items-center gap-2 text-muted-foreground">
                <indicator.icon className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-wider">{indicator.label}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Main headline */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">{t('titlePrefix')}</span>
              <br />
              <span className="gradient-text">{t('titleHighlight')}</span>
              <br />
              <span className="text-foreground">{t('titleSuffix')}</span>
            </h1>
          </motion.div>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance"
          >
            {t('description')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button size="lg" className="group gap-2 px-8 h-12 text-base glow-sm">
              {t('ctaGetStarted')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group gap-2 px-8 h-12 text-base">
              <Play className="w-4 h-4" />
              {t('ctaViewArchitecture')}
            </Button>
          </motion.div>
          
          {/* Floating dashboard preview */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 w-full max-w-4xl"
          >
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="glass rounded-xl p-1 glow-md">
                <div className="bg-card rounded-lg overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">eurin@architect ~ /systems</span>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['API Gateway', 'Database Cluster', 'CDN Edge', 'AI Pipeline'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30 border border-border/50"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 mb-2 animate-pulse" />
                          <span className="text-xs text-muted-foreground text-center">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Code snippet */}
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-xs text-muted-foreground overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        <span className="text-primary">const</span> architecture = <span className="text-green-400">{`{`}</span>
                        <br />
                        <span className="ml-4">scalability: <span className="text-yellow-400">{`"infinite"`}</span>,</span>
                        <br />
                        <span className="ml-4">security: <span className="text-yellow-400">{`"enterprise-grade"`}</span>,</span>
                        <br />
                        <span className="ml-4">vision: <span className="text-yellow-400">{`"Africa's Digital Future"`}</span></span>
                        <br />
                        <span className="text-green-400">{`}`}</span>;
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute -left-4 md:-left-12 top-1/4 glass rounded-lg px-3 py-2 hidden md:block"
              >
                <span className="text-xs text-muted-foreground font-mono">latency: 12ms</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="absolute -right-4 md:-right-12 top-1/3 glass rounded-lg px-3 py-2 hidden md:block"
              >
                <span className="text-xs text-muted-foreground font-mono">requests: 1.2M/s</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-3xl"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
              >
                <AnimatedCounter
                  end={metric.end}
                  suffix={metric.suffix}
                  label={metric.label}
                  duration={2.5}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
