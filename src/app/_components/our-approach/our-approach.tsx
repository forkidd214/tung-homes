import Link from 'next/link'
import { Button } from '@/components/ui/button'
import heroImage from '../../../../public/images/hero-approach.webp'
import Image from 'next/image'

type OurApproachProps = {}

export default function OurApproach({}: OurApproachProps) {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="bg-secondary px-8 py-16 text-secondary-foreground lg:ml-auto lg:w-5/6">
        <div className="space-y-16 lg:ml-auto lg:w-1/2">
          {/* Title */}
          <div className="space-y-8">
            <h2>our approach</h2>
            <h3>Uniquely Designed for What Matters to You</h3>
            <p>
              We craft custom homes that look and feel like only you could live
              there. And we do it by working hand-in-hand with you throughout
              the entire experience.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-row justify-center lg:justify-start">
            <Button asChild variant={'default'} className="space-x-2">
              <Link href="/service">
                <span>discover our approach</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Decoration image */}
        <div className="relative z-10 mt-16 aspect-[3/2] lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-1/2 lg:-translate-y-1/2">
          <Image
            src={heroImage}
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
