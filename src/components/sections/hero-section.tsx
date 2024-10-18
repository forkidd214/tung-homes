import Image from 'next/image'

import bgImage from '../../../public/images/home-hero.webp'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/button'
import { H1 } from '../typography'

function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="relative -z-10 h-svh brightness-[60%]">
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
      <div
        className={cn(
          'absolute inset-0 z-10',
          'mx-auto flex max-w-2xl flex-col items-center justify-center gap-16 px-10',
          'text-center text-primary-foreground',
        )}
      >
        <div className="space-y-4">
          <span className="block font-sans text-sm uppercase tracking-wide sm:text-base">
            Custom Home Building in Adelaide, SA
          </span>
          <H1>Building More Than Your Dream Home</H1>
        </div>
        <ButtonLink
          href={'tel:+10086'}
          icon="receiptText"
          variant={'primary'}
          size={'lg'}
        >
          get a quote
        </ButtonLink>
      </div>
    </section>
  )
}

export default HeroSection
