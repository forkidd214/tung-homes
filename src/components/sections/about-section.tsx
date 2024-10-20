import Image from 'next/image'

import { homeAboutImage as decoImage } from '@/data'
import { cn } from '@/lib/utils'
import { Grid } from '../grid'
import { H2, H3, Paragraph } from '../typography'
import { ArrowLink } from '../button'

function AboutSection() {
  return (
    <Grid className="isolate gap-y-8 py-[10vw] lg:py-28">
      {/* Background */}
      <div
        className={cn(
          'absolute inset-0 -z-10 bg-secondary',
          'mx-[-10vw] md:mr-[10vw] lg:ml-0 lg:mr-[20%]',
        )}
      />

      {/* Content */}
      <div
        className={cn(
          'col-span-full md:col-span-5 md:place-items-center lg:col-start-2 2xl:col-span-4 2xl:col-start-3',
        )}
      >
        <div className="mb-6 space-y-4">
          <H2>our story</H2>
          <H3 as="p">Making Dream Homes Come True</H3>
          <Paragraph>
            At Tung Homes, our focus is on YOU and what YOU want to achieve. We
            pride ourselves on forging strong, lasting relationships, which help
            us to continue to thrive and develop.
          </Paragraph>
        </div>
        <ArrowLink href="/about">get to know us</ArrowLink>
      </div>

      {/* Decoration image */}
      <div
        className={cn(
          'col-span-full md:col-span-3 md:mr-[-10vw] lg:col-span-5 lg:-col-end-1 lg:mr-0',
        )}
      >
        <div className="relative h-64 md:h-80">
          <Image
            src={decoImage}
            alt=""
            sizes="(min-width: 1024px) 50vw, 100vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </Grid>
  )
}

export default AboutSection
