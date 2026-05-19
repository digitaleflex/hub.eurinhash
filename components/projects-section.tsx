'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ArrowUpRight, 
  TrendingUp, 
  Shield, 
  Layers,
  Server,
  Database,
  Globe,
  Lock
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Continental Payment Gateway',
    category: 'Fintech Infrastructure',
    problem: 'Fragmented payment systems across African markets created barriers to cross-border commerce and financial inclusion.',
    architecture: 'Microservices-based architecture with event-driven payment processing, real-time fraud detection, and multi-currency support.',
    stack: ['Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'gRPC'],
    impact: {
      transactions: '2M+ daily',
      uptime: '99.99%',
      latency: '<100ms',
    },
    security: ['PCI-DSS Level 1', 'End-to-end encryption', 'Tokenization'],
    scalability: 'Horizontal auto-scaling with peak capacity of 10K TPS',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Agriculture Platform',
    category: 'AgriTech',
    problem: 'Smallholder farmers lacked access to real-time data for crop management, weather predictions, and market pricing.',
    architecture: 'IoT-first architecture with edge computing for sensor data processing and ML models for yield prediction.',
    stack: ['Python', 'TensorFlow', 'TimescaleDB', 'MQTT', 'React Native'],
    impact: {
      farmers: '50K+ users',
      yield: '+35% increase',
      coverage: '12 countries',
    },
    security: ['Data encryption', 'Secure device provisioning', 'API authentication'],
    scalability: 'Offline-first with sync capabilities for low-connectivity areas',
    featured: true,
  },
  {
    id: 3,
    title: 'Healthcare Data Exchange',
    category: 'HealthTech',
    problem: 'Patient data siloed across institutions prevented continuity of care and efficient health system operations.',
    architecture: 'FHIR-compliant data mesh with federated identity management and consent-based access controls.',
    stack: ['Node.js', 'GraphQL', 'MongoDB', 'Elasticsearch', 'HL7 FHIR'],
    impact: {
      records: '5M+ patients',
      integrations: '200+ facilities',
      queries: '1M daily',
    },
    security: ['HIPAA compliant', 'Zero-knowledge proofs', 'Audit logging'],
    scalability: 'Multi-tenant architecture with data residency compliance',
    featured: true,
  },
  {
    id: 4,
    title: 'Logistics Optimization Engine',
    category: 'Supply Chain',
    problem: 'Inefficient last-mile delivery routes increased costs and delivery times across urban centers.',
    architecture: 'Real-time route optimization using genetic algorithms with live traffic integration.',
    stack: ['Rust', 'PostGIS', 'Apache Spark', 'OpenStreetMap', 'WebSocket'],
    impact: {
      efficiency: '+45% routes',
      savings: '$2M annual',
      deliveries: '100K daily',
    },
    security: ['Driver verification', 'Package tracking encryption', 'Geofencing'],
    scalability: 'City-by-city deployment with centralized optimization engine',
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const featuredProjects = projects.filter(p => p.featured)
  
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Enterprise-grade solutions architected for scale, security, and lasting impact 
            across critical sectors.
          </p>
        </motion.div>
        
        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className={`
                relative p-6 md:p-8 lg:p-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm
                hover:border-primary/30 hover:bg-card transition-all duration-500
                ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}
              `}>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Project info */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <Badge variant="secondary" className="mb-4 font-mono text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors flex items-center gap-3">
                        {project.title}
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                    
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    
                    {/* Architecture */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Architecture
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg bg-muted/50 border border-border/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Metrics and details */}
                  <div className="space-y-6">
                    {/* Impact metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-4 rounded-xl bg-muted/30 border border-border/50 text-center"
                        >
                          <div className="text-lg md:text-xl font-bold text-primary font-mono">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Security */}
                    <div className="p-4 rounded-xl bg-muted/20 border border-border/50">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        Security
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.security.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-green-500/10 text-green-400 border border-green-500/20"
                          >
                            <Lock className="w-3 h-3" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Scalability */}
                    <div className="p-4 rounded-xl bg-muted/20 border border-border/50">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        Scalability
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.scalability}
                      </p>
                    </div>
                    
                    {/* View case study button */}
                    <Button variant="outline" className="w-full group/btn">
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            Explore All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
