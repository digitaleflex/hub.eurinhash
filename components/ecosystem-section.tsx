'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Users, 
  Cpu, 
  Brain, 
  Cloud, 
  GraduationCap, 
  Shield, 
  Lightbulb,
  ArrowRight
} from 'lucide-react'

const ecosystemNodes = [
  {
    id: 'community',
    label: 'Hashcode Community',
    description: 'A thriving developer ecosystem fostering collaboration and innovation across Africa.',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    position: { x: 50, y: 15 },
  },
  {
    id: 'framework',
    label: 'EHAF Framework',
    description: 'Enterprise-grade architectural patterns for building resilient, scalable systems.',
    icon: Cpu,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    position: { x: 85, y: 35 },
  },
  {
    id: 'ai',
    label: 'AI Labs',
    description: 'Cutting-edge research in machine learning, automation, and intelligent systems.',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/30',
    position: { x: 75, y: 65 },
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    description: 'Robust, secure, and infinitely scalable cloud architecture solutions.',
    icon: Cloud,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    position: { x: 50, y: 85 },
  },
  {
    id: 'academy',
    label: 'Digital Academy',
    description: 'Empowering the next generation of African tech leaders through education.',
    icon: GraduationCap,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/30',
    position: { x: 25, y: 65 },
  },
  {
    id: 'security',
    label: 'Cybersecurity Systems',
    description: 'Enterprise security solutions protecting digital assets and infrastructure.',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
    borderColor: 'border-red-400/30',
    position: { x: 15, y: 35 },
  },
  {
    id: 'research',
    label: 'Innovation Research',
    description: 'Pioneering research into emerging technologies and future systems.',
    icon: Lightbulb,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/30',
    position: { x: 50, y: 50 },
  },
]

const connections = [
  ['community', 'framework'],
  ['community', 'academy'],
  ['community', 'research'],
  ['framework', 'ai'],
  ['framework', 'cloud'],
  ['ai', 'cloud'],
  ['ai', 'research'],
  ['cloud', 'security'],
  ['academy', 'security'],
  ['academy', 'research'],
  ['security', 'research'],
  ['research', 'framework'],
]

export function EcosystemSection() {
  const [activeNode, setActiveNode] = useState<string | null>('research')
  
  const getNodePosition = (id: string) => {
    const node = ecosystemNodes.find(n => n.id === id)
    return node?.position || { x: 50, y: 50 }
  }
  
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
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
            The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Interconnected Systems,
            <br />
            <span className="gradient-text">Unified Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive digital ecosystem where each platform strengthens the others, 
            creating exponential value for Africa&apos;s technological advancement.
          </p>
        </motion.div>
        
        {/* Ecosystem visualization */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Connection lines - SVG */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {connections.map(([from, to], index) => {
              const fromPos = getNodePosition(from)
              const toPos = getNodePosition(to)
              const isActive = activeNode === from || activeNode === to
              
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={`${fromPos.x}%`}
                  y1={`${fromPos.y}%`}
                  x2={`${toPos.x}%`}
                  y2={`${toPos.y}%`}
                  stroke={isActive ? 'var(--primary)' : 'var(--border)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.6 : 0.3}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              )
            })}
          </svg>
          
          {/* Nodes */}
          {ecosystemNodes.map((node, index) => {
            const Icon = node.icon
            const isActive = activeNode === node.id
            const isCenterNode = node.id === 'research'
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ 
                  left: `${node.position.x}%`, 
                  top: `${node.position.y}%`,
                  zIndex: isActive ? 20 : 10,
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode('research')}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    relative flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border
                    ${isActive ? `${node.bgColor} ${node.borderColor}` : 'bg-card border-border'}
                    ${isCenterNode ? 'p-4 md:p-6' : ''}
                    transition-all duration-300
                  `}
                >
                  {/* Glow effect when active */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-xl ${node.bgColor} blur-xl opacity-50`} />
                  )}
                  
                  <div className={`relative ${isCenterNode ? 'p-3 md:p-4' : 'p-2 md:p-3'} rounded-lg ${node.bgColor}`}>
                    <Icon className={`${isCenterNode ? 'w-6 h-6 md:w-8 md:h-8' : 'w-4 h-4 md:w-6 md:h-6'} ${node.color}`} />
                  </div>
                  
                  <span className={`relative text-xs md:text-sm font-medium text-center whitespace-nowrap ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {node.label}
                  </span>
                  
                  {/* Expanded info on hover */}
                  {isActive && !isCenterNode && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 p-3 bg-card border border-border rounded-lg w-48 md:w-56 z-30"
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
          
          {/* Center node description */}
          {activeNode === 'research' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-16 md:translate-y-20 text-center max-w-xs z-10"
            >
              <p className="text-sm text-muted-foreground">
                Hover over nodes to explore the ecosystem
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
