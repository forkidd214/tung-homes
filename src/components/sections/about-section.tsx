import Link from 'next/link'
import { ArrowLink, Button } from '@/components/button'
import decoImage from '../../../public/images/home-about.webp'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

function AboutSection() {
  return (
    <section className="relative isolate mx-auto max-w-7xl px-8 py-16">
      <div className="absolute inset-0 -z-10 bg-secondary md:w-5/6" />

      <div className="flex flex-col items-stretch justify-start gap-8 md:flex-row md:items-center md:justify-around lg:min-h-[33rem]">
        <div className="mx-auto max-w-sm space-y-6">
          {/* Content */}
          <div className="space-y-4 text-primary">
            <h2>our story</h2>
            <h3>Making Dream Homes Come True</h3>
            <p>
              At Tung Homes, our focus is on YOU and what YOU want to achieve.
              We pride ourselves on forging strong, lasting relationships, which
              help us to continue to thrive and develop.
            </p>
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
