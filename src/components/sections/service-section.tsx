import Image from 'next/image'

import decoImage from '../../../public/images/home-service.webp'
import { H2, H3, Paragraph } from '../typography'
import { ButtonLink } from '../button'

function ServiceSection() {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="bg-background px-8 py-16 text-foreground lg:ml-auto lg:w-5/6">
        <div className="space-y-6 lg:ml-auto lg:w-1/2">
          {/* Content */}
          <div className="space-y-4">
            <H2>our approach</H2>
            <H3 as="p">tried and true</H3>
            <Paragraph>
              We craft custom homes that look and feel like only you could live
              there. And we do it by working hand-in-hand with you throughout
              the entire experience.
            </Paragraph>
          </div>

          {/* Call to action */}
          <div className="flex flex-row justify-center lg:justify-start">
            <ButtonLink
              href="/service"
              variant={'secondary'}
              icon="pencilRuler"
            >
              discover our approach
            </ButtonLink>
          </div>
        </div>

        {/* Decoration image */}
        <div className="relative z-10 mt-16 aspect-[3/2] lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-1/2 lg:-translate-y-1/2">
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

export default ServiceSection
