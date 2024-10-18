import Image from 'next/image'

import decoImage from '../../../public/images/home-about.webp'
import { H2, H3, Paragraph } from '../typography'
import { ArrowLink } from '../button'

function AboutSection() {
  return (
    <section className="relative isolate mx-auto max-w-7xl px-8 py-16">
      <div className="absolute inset-0 -z-10 bg-secondary md:w-5/6" />

      <div className="flex flex-col items-stretch justify-start gap-8 md:flex-row md:items-center md:justify-around lg:min-h-[33rem]">
        <div className="mx-auto max-w-sm space-y-6">
          {/* Content */}
          <div className="space-y-4">
            <H2>our story</H2>
            <H3 as="p">Making Dream Homes Come True</H3>
            <Paragraph>
              At Tung Homes, our focus is on YOU and what YOU want to achieve.
              We pride ourselves on forging strong, lasting relationships, which
              help us to continue to thrive and develop.
            </Paragraph>
          </div>

          {/* Call to action */}
          <ArrowLink href="/about">get to know us</ArrowLink>
        </div>

        {/* Decoration image */}
        <div className="relative mx-auto h-64 w-full max-w-sm md:mx-0 md:-mr-8 md:h-96 md:max-w-none md:basis-5/12">
          <Image
            src={decoImage}
            alt=""
            sizes="(min-width: 1024px) 50vw, 100vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
