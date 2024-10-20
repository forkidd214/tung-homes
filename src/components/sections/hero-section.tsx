import Image from 'next/image'

import { homeHeroImage as bgImage } from '@/data'
import { Grid } from '../grid'
import { H1 } from '../typography'
import { ButtonLink } from '../button'
import Spacer from '../spacer'

function HeroSection() {
  return (
    <div className="relative isolate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 brightness-[60%]">
        <Image
          alt=""
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </div>

      {/* Content */}
      <Grid className="h-svh place-content-center">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          <div className="text-center text-primary-foreground">
            <span className="mb-4 block font-sans text-sm uppercase tracking-wide sm:text-base">
              Custom Home Building in Adelaide, SA
            </span>
            <H1>Building More Than Your Dream Home</H1>
            <Spacer size={'xs'} />
            <ButtonLink
              href={'tel:+10086'}
              icon="receiptText"
              variant={'primary'}
              size={'lg'}
            >
              get a quote
            </ButtonLink>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default HeroSection
