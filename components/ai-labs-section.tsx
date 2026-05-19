'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  Cpu, 
  Shield, 
  Cloud, 
  FlaskConical,
  Workflow,
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const experiments = [
  {
    id: 1,
    title: 'Autonomous Code Reviewer',
    category: 'AI Agent',
    description: 'Multi-agent system that performs comprehensive code reviews, security audits, and architectural assessments automatically.',
    status: 'Active',
    icon: Bot,
    metrics: { accuracy: '94%', reviews: '10K+' },
  },
  {
    id: 2,
    title: 'Predictive Infrastructure',
    category: 'Automation',
    description: 'ML models that predict infrastructure failures before they occur and automatically provision resources.',
    status: 'Active',
    icon: Activity,
    metrics: { prediction: '6hr lead', incidents: '-78%' },
  },
  {
    id: 3,
    title: 'Threat Intelligence Network',
    category: 'Cybersecurity',
    description: 'Distributed threat detection system using federated learning across multiple security perimeters.',
    status: 'Research',
    icon: Shield,
    metrics: { threats: '1M+ detected', latency: '50ms' },
  },
  {
    id: 4,
    title: 'Multi-Cloud Orchestrator',
    category: 'Cloud',
    description: 'Intelligent workload distribution across AWS, GCP, and Azure based on cost, latency, and compliance requirements.',
    status: 'Active',
    icon: Cloud,
    metrics: { savings: '40%', regions: '24' },
  },
  {
    id: 5,
    title: 'Context-Aware Assistant',
    category: 'AI Agent',
    description: 'Enterprise assistant that understands organizational context, documentation, and codebase to provide relevant insights.',
    status: 'Beta',
    icon: Sparkles,
    metrics: { accuracy: '89%', queries: '50K/day' },
  },
  {
    id: 6,
    title: 'Self-Healing Pipelines',
    category: 'Automation',
    description: 'CI/CD pipelines that automatically diagnose, repair, and optimize themselves based on failure patterns.',
    status: 'Active',
    icon: Workflow,
    metrics: { mttr: '-65%', success: '99.5%' },
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

const statusColors: Record<string, string> = {
  'Active': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Beta': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Research': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
}

export function AILabsSection() {
  return (
    <section id="labs" className="relative py-24 md:py-32 bg-muted/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              y: [null, '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-mono">Research & Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            AI Labs &
            <span className="gradient-text"> Experiments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Pushing the boundaries of what&apos;s possible with artificial intelligence, 
            automation, and intelligent systems.
          </p>
        </motion.div>
        
        {/* Labs dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-1 rounded-2xl glass glow-md"
        >
          <div className="bg-card rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Research Dashboard</h3>
                  <p className="text-xs text-muted-foreground">Real-time experiment monitoring</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">6 Active</span>
                </div>
              </div>
            </div>
            
            {/* Experiments grid */}
            <div className="p-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {experiments.map((experiment) => {
                  const Icon = experiment.icon
                  
                  return (
                    <motion.div
                      key={experiment.id}
                      variants={cardVariants}
                      className="group p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-mono ${statusColors[experiment.status]}`}
                        >
                          {experiment.status}
                        </Badge>
                      </div>
                      
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {experiment.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                        {experiment.description}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        {Object.entries(experiment.metrics).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-sm font-mono text-primary">{value}</span>
                            <span className="text-xs text-muted-foreground capitalize">{key}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
            
            {/* Terminal output */}
            <div className="px-6 pb-6">
              <div className="bg-background/80 rounded-lg p-4 font-mono text-xs border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">system.log</span>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-400">[OK]</span> Model training completed - accuracy: 94.2%
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-blue-400">[INFO]</span> Deploying to inference cluster...
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-yellow-400">[EXPERIMENT]</span> New hypothesis generated for threat detection
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center gap-1"
                  >
                    <span className="text-primary">{'>'}</span> 
                    <span className="animate-pulse">_</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
