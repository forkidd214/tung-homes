'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { PROJECTS } from '@/data'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel'

function ProjectSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [scrollProgress, setScrollProgress] = React.useState(0)

  const onScroll = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }
    const progress = Math.max(0, Math.min(1, api?.scrollProgress()))
    setScrollProgress(progress)
  }, [])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onScroll(api)
    api.on('reInit', onScroll).on('scroll', onScroll).on('slideFocus', onScroll)
  }, [api, onScroll])

  return (
    <div className="w-full overflow-x-hidden">
      <section className={cn('relative isolate mx-auto max-w-7xl px-8 py-16')}>
        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          // '50vw' counting scrollbar width leads to horizontal overflow
          // Solve the issue by adding overflow-x-hidden to the section root
          className="mr-[calc(50%-50vw)] flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:justify-start"
        >
          {/* Title */}
          <div className="mx-auto max-w-sm space-y-4 sm:mt-16 sm:flex-shrink-0 sm:basis-1/3">
            <h2>our homes</h2>
            <h3>built with quality at affordable prices</h3>
          </div>

          {/* Carousel Content */}
          <CarouselContent className="w-full sm:basis-auto">
            {PROJECTS.map((project, index) => (
              <CarouselItem
                key={project.slug}
                // prevent showing all items to make carousel navigation work
                className="basis-5/6 md:basis-2/3 lg:basis-3/5 xl:basis-5/12"
              >
                <ProjectCard
                  className={'h-[25rem] lg:h-[32rem]'}
                  href={`/projects/${project.slug}`}
                  title={project.name}
                  image={{
                    src: project.images[0],
                    alt: project.images[0].alt,
                    sizes:
                      '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
                  }}
                  index={index + 1}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Buttons */}
          <div
            className={cn(
              'relative isolate mr-8 inline-flex min-w-fit max-w-fit flex-row items-center self-center rounded-full shadow ring-1 ring-ring',
              'sm:absolute sm:bottom-0 sm:left-0',
              'text-secondary-foreground',
            )}
          >
            <CarouselPrevious tabIndex={-1} className="rounded-r-none ring-0" />
            <CarouselNext tabIndex={-1} className="rounded-l-none ring-0" />
            <ProgressRing
              width={98}
              height={50}
              strokeWidth={2}
              progress={scrollProgress}
              className="absolute inset-0 -z-10"
            />
          </div>
        </Carousel>
      </section>
    </div>
  )
}

function ProjectCard({
  href,
  title,
  image,
  index,
  className,
}: {
  href: string
  title: string
  image: {
    src: string | StaticImageData
    alt: string
    sizes: string
  }
  index?: number
  className?: string
}) {
  return (
    <Link href={href} aria-label={`Project ${index ?? ''}: ${title}`}>
      <div className={cn('group relative overflow-hidden', className)}>
        <div className="relative h-full transition duration-200 ease-linear group-hover:scale-110 group-hover:duration-1000">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={image.sizes}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute bottom-8 left-0 flex flex-row items-baseline justify-between gap-4 bg-primary/90 px-4 py-2 font-sans uppercase text-primary-foreground backdrop-blur">
          {index !== undefined && (
            <span className="font-semibold text-secondary-foreground brightness-200">
              {index}
            </span>
          )}
          <span>{title}</span>
        </div>
      </div>
    </Link>
  )
}

function ProgressRing({
  progress,
  width = 120,
  height = 60,
  strokeWidth = 2,
  className,
}: {
  progress: number // [0, 1]
  width: number
  height: number
  strokeWidth?: number
  className?: string
}) {
  const radius = height / 2
  const side = width - height
  const circumference = 2 * side + 2 * Math.PI * radius
  const offset = strokeWidth

  return (
    <div className={cn('grid place-content-center', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`${-offset} ${-offset} ${width + 2 * offset} ${height + 2 * offset}`}
      >
        <title>Progress Border</title>
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          rx={radius}
          ry={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={(1 - progress) * circumference}
        />
      </svg>
    </div>
  )
}

export default ProjectSection
