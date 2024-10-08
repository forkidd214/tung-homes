import Image from 'next/image'
import hero from '../../../../public/images/hero.webp'
import { cn } from '@/lib/utils'

type HeroProps = {}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative isolate">
      <div className="relative -z-10 h-svh brightness-50">
        <Image
          alt=""
          src={hero}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className={cn(
          'absolute inset-0 z-10',
          'mx-auto flex max-w-3xl flex-col items-center justify-center gap-16 px-10',
          'text-center text-primary-foreground',
        )}
      >
        <div className="space-y-4">
          <span className="block font-sans text-sm uppercase lg:text-base">
            Custom Home Building in Adelaide, SA
          </span>
          <h1 className="font-serif text-4xl leading-tight lg:text-7xl">
            Building More Than Your Dream Home
          </h1>
        </div>
        <button className="text-accent-foreground-foreground rounded-full bg-accent px-8 py-4 font-sans uppercase">
          Talk to our team
        </button>
      </div>
    </section>
  )
}
