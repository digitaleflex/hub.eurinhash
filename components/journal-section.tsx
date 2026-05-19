'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const articles = [
  {
    id: 1,
    title: 'Building Resilient Distributed Systems: Lessons from the Field',
    excerpt: 'Insights from architecting systems that handle millions of requests while maintaining 99.99% uptime across African infrastructure.',
    category: 'System Architecture',
    readTime: '12 min',
    date: 'May 2026',
    featured: true,
  },
  {
    id: 2,
    title: 'The African Tech Ecosystem: Challenges and Opportunities',
    excerpt: 'An analysis of the unique challenges facing African tech and the architectural decisions that address them.',
    category: 'Industry Insights',
    readTime: '8 min',
    date: 'April 2026',
    featured: true,
  },
  {
    id: 3,
    title: 'Zero-Trust Architecture: Beyond the Buzzword',
    excerpt: 'A practical guide to implementing zero-trust security in enterprise environments with real-world examples.',
    category: 'Cybersecurity',
    readTime: '15 min',
    date: 'March 2026',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Integration Patterns for Enterprise Applications',
    excerpt: 'Architectural patterns for safely and effectively integrating AI capabilities into existing systems.',
    category: 'AI Systems',
    readTime: '10 min',
    date: 'February 2026',
    featured: false,
  },
  {
    id: 5,
    title: 'Cloud Cost Optimization: An Architectural Approach',
    excerpt: 'How thoughtful architecture decisions can reduce cloud spending by 40% without sacrificing performance.',
    category: 'Cloud Infrastructure',
    readTime: '9 min',
    date: 'January 2026',
    featured: false,
  },
  {
    id: 6,
    title: 'Digital Sovereignty: Building for Data Residency',
    excerpt: 'Designing systems that respect data sovereignty requirements while maintaining global functionality.',
    category: 'Industry Insights',
    readTime: '11 min',
    date: 'December 2025',
    featured: false,
  },
]

const topics = [
  'System Architecture',
  'African Tech',
  'Cybersecurity',
  'AI Systems',
  'Cloud Infrastructure',
  'Digital Sovereignty',
  'Startup Engineering',
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

export function JournalSection() {
  const featuredArticles = articles.filter(a => a.featured)
  const recentArticles = articles.filter(a => !a.featured)
  
  return (
    <section id="journal" className="relative py-24 md:py-32">
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
            Knowledge Hub
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Journal &
            <span className="gradient-text"> Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Deep dives into system architecture, technology trends, and lessons learned 
            from building at scale.
          </p>
        </motion.div>
        
        {/* Topics filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {topics.map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 text-sm rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              {topic}
            </button>
          ))}
        </motion.div>
        
        {/* Featured articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className={`
                group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden
                hover:border-primary/30 hover:bg-card transition-all duration-300 cursor-pointer
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
              `}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`relative z-10 p-6 md:p-8 h-full flex flex-col ${index === 0 ? 'lg:p-10' : ''}`}>
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="font-mono text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className={`text-muted-foreground leading-relaxed flex-grow ${index === 0 ? 'text-base' : 'text-sm line-clamp-3'}`}>
                  {article.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* Recent articles list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <h3 className="text-lg font-semibold mb-6">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-primary font-mono">{article.category}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
