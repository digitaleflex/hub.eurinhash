import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { EcosystemSection } from '@/components/ecosystem-section'
import { ArchitectureSection } from '@/components/architecture-section'
import { ProjectsSection } from '@/components/projects-section'
import { AILabsSection } from '@/components/ai-labs-section'
import { JournalSection } from '@/components/journal-section'
import { CommunitySection } from '@/components/community-section'
import { ServicesSection } from '@/components/services-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <ArchitectureSection />
      <ProjectsSection />
      <AILabsSection />
      <JournalSection />
      <CommunitySection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
