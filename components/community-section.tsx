'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  BookOpen, 
  Code, 
  Lightbulb,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react'
import { AnimatedCounter } from './animated-counter'

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Community Members' },
  { icon: BookOpen, value: 500, suffix: '+', label: 'Students Trained' },
  { icon: Code, value: 150, suffix: '+', label: 'Projects Built' },
  { icon: Lightbulb, value: 50, suffix: '+', label: 'Technologies Explored' },
]

const initiatives = [
  {
    title: 'Hashcode Community',
    description: 'A thriving community of developers, designers, and entrepreneurs collaborating to build the future of African tech.',
    impact: '10,000+ members across 15 countries',
    icon: Users,
  },
  {
    title: 'Digital Academy',
    description: 'Free and accessible technical education programs focused on practical skills and real-world project experience.',
    impact: '500+ graduates placed in tech roles',
    icon: BookOpen,
  },
  {
    title: 'Open Source Initiative',
    description: 'Contributing to and maintaining open source projects that solve uniquely African technical challenges.',
    impact: '50+ projects with 1M+ downloads',
    icon: Code,
  },
  {
    title: 'Innovation Labs',
    description: 'Providing resources, mentorship, and infrastructure for early-stage tech startups.',
    impact: '25 startups supported, $2M+ raised',
    icon: Lightbulb,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24 md:py-32 bg-muted/20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono uppercase tracking-wider mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Community &
            <span className="gradient-text"> Empowerment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Building technology is only meaningful when it empowers people. 
            These initiatives represent the human side of digital architecture.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} label="" duration={2} />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Initiatives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {initiatives.map((initiative) => {
            const Icon = initiative.icon
            
            return (
              <motion.div
                key={initiative.title}
                variants={itemVariants}
                className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-green-400 font-medium">{initiative.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* World map / presence indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 md:p-12 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-mono">Global Presence</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Impacting Africa, One System at a Time
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                From Lagos to Nairobi, Cape Town to Cairo — building infrastructure 
                that serves the next billion users coming online.
              </p>
            </div>
            
            {/* Country indicators */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Ghana', 'Rwanda', 'Tanzania', 'Morocco'].map((country, i) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground"
                >
                  {country}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
