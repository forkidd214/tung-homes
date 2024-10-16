import Link from 'next/link'
import { Button } from '@/components/ui/button'
import heroImage from '../../../../public/images/hero-story.webp'
import Image from 'next/image'

type OurStoryProps = {}

export default function OurStory({}: OurStoryProps) {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="bg-background px-8 py-16 text-foreground lg:mr-auto lg:w-5/6">
        <div className="space-y-16 lg:mr-auto lg:w-1/2">
          {/* Title */}
          <div className="space-y-8">
            <h2>our story</h2>
            <h3>Making Dream Homes Come True</h3>
            <p>
              At Tung Homes, our focus is on YOU and what YOU want to achieve.
              We pride ourselves on forging strong, lasting relationships, which
              help us to continue to thrive and develop.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-row justify-center lg:justify-start">
            <Button asChild variant={'default'} className="space-x-2">
              <Link href="/service">
                <span>get to know us</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Decoration image */}
        <div className="relative z-10 mt-16 aspect-[3/2] lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-1/2 lg:-translate-y-1/2">
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
