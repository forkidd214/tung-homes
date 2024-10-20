import Spacer from '@/components/spacer'
import HeroSection from '@/components/sections/hero-section'
import ProjectSection from '@/components/sections/project-section'
import ServiceSection from '@/components/sections/service-section'
import AboutSection from '@/components/sections/about-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Spacer />
      <ProjectSection />
      <Spacer />
      <ServiceSection />
      <Spacer />
      <AboutSection />
    </div>
  )
}
