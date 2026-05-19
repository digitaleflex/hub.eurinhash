'use client'

import { motion } from 'framer-motion'
import { 
  Scale, 
  ShieldCheck, 
  Zap, 
  Boxes, 
  Users, 
  Cloud, 
  Brain,
  ArrowUpRight
} from 'lucide-react'

const principles = [
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Systems designed to handle exponential growth without compromising performance or reliability.',
    metrics: ['Horizontal scaling', 'Auto-provisioning', 'Load distribution'],
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'Zero-trust architecture with defense-in-depth strategies protecting every layer.',
    metrics: ['Zero-trust model', 'End-to-end encryption', 'Continuous monitoring'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed with sub-millisecond response times and efficient resource utilization.',
    metrics: ['Edge computing', 'Caching strategies', 'Query optimization'],
  },
  {
    icon: Boxes,
    title: 'Modularity',
    description: 'Component-based architecture enabling flexibility, maintainability, and rapid iteration.',
    metrics: ['Microservices', 'API-first design', 'Plugin systems'],
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description: 'Clean APIs, comprehensive documentation, and intuitive interfaces for seamless integration.',
    metrics: ['Clear documentation', 'SDK support', 'Dev tooling'],
  },
  {
    icon: Cloud,
    title: 'Cloud-Native',
    description: 'Built for the cloud from the ground up, leveraging containerization and orchestration.',
    metrics: ['Kubernetes native', 'Multi-cloud ready', 'Serverless patterns'],
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Intelligent systems with machine learning capabilities embedded at every level.',
    metrics: ['ML pipelines', 'Predictive analytics', 'Automation'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-24 md:py-32 bg-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
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
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Architectural
            <span className="gradient-text"> Mindset</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Every system is built on foundational principles that ensure longevity, 
            reliability, and the ability to evolve with changing requirements.
          </p>
        </motion.div>
        
        {/* Principles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon
            const isLarge = index === 0 || index === 6
            
            return (
              <motion.div
                key={principle.title}
                variants={cardVariants}
                className={`
                  group relative p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm
                  hover:border-primary/30 hover:bg-card transition-all duration-300
                  ${isLarge && index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {principle.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {principle.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {principle.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Architecture diagram teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 md:p-12 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Deep Systems Thinking
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Every architectural decision is made with a holistic view of the system, 
                considering not just immediate requirements but long-term implications, 
                maintenance overhead, and evolution paths.
              </p>
            </div>
            
            {/* Mini architecture diagram */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ['Client', 'Gateway', 'Services'],
                  ['Cache', 'Queue', 'Database'],
                  ['Monitor', 'Logs', 'Alerts'],
                ].map((row, rowIndex) => (
                  <div key={rowIndex} className="contents">
                    {row.map((item, colIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (rowIndex * 3 + colIndex) * 0.05 }}
                        className="flex items-center justify-center p-3 rounded-lg bg-muted/50 border border-border/50"
                      >
                        <span className="text-xs font-mono text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
