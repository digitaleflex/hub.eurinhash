'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  ecosystem: [
    { label: 'Hashcode Community', href: '#' },
    { label: 'EHAF Framework', href: '#' },
    { label: 'AI Labs', href: '#' },
    { label: 'Digital Academy', href: '#' },
  ],
  resources: [
    { label: 'Journal', href: '#journal' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Documentation', href: '#' },
    { label: 'Open Source', href: '#' },
  ],
  services: [
    { label: 'Solution Architecture', href: '#services' },
    { label: 'Cloud Systems', href: '#services' },
    { label: 'Technical Strategy', href: '#services' },
    { label: 'AI Integration', href: '#services' },
  ],
}

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold">EH</span>
              </div>
              <span className="text-xl font-semibold">Eurin Hash</span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Architecting the digital infrastructure of tomorrow. Building scalable systems 
              and intelligent platforms for Africa&apos;s technological future.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
          
          {/* Ecosystem links */}
          <div>
            <h4 className="font-semibold mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eurin Hash. Architecting tomorrow, today.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  )
}
