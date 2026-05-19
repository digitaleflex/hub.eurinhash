'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Journal', href: '#journal' },
  { label: 'Services', href: '#services' },
]

export function Navigation() {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Nav')

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en'
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = navLinks.map(link => link.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }
  
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 glass' 
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">EH</span>
              </div>
              <span className="font-semibold hidden sm:block">Eurin Hash</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {t(link.href.slice(1))}
                </button>
              ))}
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-mono text-xs hover:text-primary gap-1 flex items-center justify-center border border-border/40 px-3 py-1.5 rounded-lg"
                onClick={toggleLanguage}
              >
                <span>🌐</span>
                <span className="uppercase font-semibold">{locale}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <Command className="w-4 h-4" />
                <span className="text-xs">Ctrl+K</span>
              </Button>
              <Button size="sm">{t('getInTouch')}</Button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-center z-50 text-foreground"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between relative">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-current rounded-full absolute top-0 left-0"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-current rounded-full absolute top-[7px] left-0"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-current rounded-full absolute bottom-0 left-0"
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-20 left-4 right-4 p-5 rounded-2xl glass border border-border bg-card/95 shadow-2xl"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {t(link.href.slice(1))}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full font-mono text-xs flex items-center justify-center gap-2 border border-border bg-muted/20"
                  onClick={toggleLanguage}
                >
                  <span>🌐</span>
                  <span>{locale === 'en' ? 'Language: English (Switch)' : 'Langue : Français (Changer)'}</span>
                </Button>
                <Button className="w-full">{t('getInTouch')}</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
