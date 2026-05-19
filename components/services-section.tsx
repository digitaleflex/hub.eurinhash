'use client'

import { motion } from 'framer-motion'
import { 
  Layers, 
  Cloud, 
  Server, 
  Shield, 
  Brain, 
  Compass,
  ArrowRight,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Layers,
    title: 'Solution Architecture',
    description: 'End-to-end system design that scales with your business, from initial concept to production deployment.',
    features: [
      'System design & documentation',
      'Technology stack selection',
      'Scalability planning',
      'Integration architecture',
    ],
    highlight: true,
  },
  {
    icon: Cloud,
    title: 'Cloud Systems',
    description: 'Multi-cloud and hybrid infrastructure design optimized for performance, cost, and compliance.',
    features: [
      'Cloud migration strategy',
      'Infrastructure as Code',
      'Cost optimization',
      'Disaster recovery',
    ],
    highlight: false,
  },
  {
    icon: Server,
    title: 'Platform Engineering',
    description: 'Building internal developer platforms that accelerate delivery and improve developer experience.',
    features: [
      'CI/CD pipeline design',
      'Developer tooling',
      'Observability setup',
      'Platform standardization',
    ],
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Cybersecurity Audits',
    description: 'Comprehensive security assessments and implementation of enterprise-grade security measures.',
    features: [
      'Penetration testing',
      'Security architecture review',
      'Compliance assessment',
      'Incident response planning',
    ],
    highlight: false,
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Strategic integration of AI capabilities into existing systems with focus on practical business value.',
    features: [
      'Use case identification',
      'ML infrastructure setup',
      'Model deployment pipelines',
      'AI governance frameworks',
    ],
    highlight: false,
  },
  {
    icon: Compass,
    title: 'Technical Strategy',
    description: 'Executive advisory on technology decisions, digital transformation, and technical due diligence.',
    features: [
      'Technology roadmapping',
      'Build vs buy analysis',
      'Technical due diligence',
      'Team structure advisory',
    ],
    highlight: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            Strategic Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Enterprise
            <span className="gradient-text"> Consulting</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            High-value architectural consulting for organizations building 
            systems that need to scale, secure, and succeed.
          </p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`
                  group relative p-6 md:p-8 rounded-2xl border bg-card/50 backdrop-blur-sm
                  hover:bg-card transition-all duration-300 cursor-pointer
                  ${service.highlight 
                    ? 'border-primary/50 md:col-span-2 lg:col-span-1' 
                    : 'border-border hover:border-primary/30'
                  }
                `}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-full">
                    Most Requested
                  </div>
                )}
                
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.highlight ? 'bg-primary/10' : 'bg-primary/5'}`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${service.highlight ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Engagement note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Engagements are strategic partnerships, not transactional projects. 
            <br className="hidden md:block" />
            Each engagement begins with a discovery session to understand your unique challenges.
          </p>
          <Button size="lg" className="gap-2">
            Schedule Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
