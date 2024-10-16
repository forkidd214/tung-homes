import Hero from './_components/hero'
import OurHomes from './_components/our-homes'
import OurApproach from './_components/our-approach'
import OurStory from './_components/our-story'
import CallToAction from './_components/call-to-action'

export default function Home() {
  return (
    <div className="lg:space-y-32">
      <Hero />
      <OurHomes />
      <OurApproach />
      <OurStory />
      <CallToAction />
    </div>
  )
}
