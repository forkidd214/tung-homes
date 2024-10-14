'use client'

import React from 'react'
import Image from 'next/image'
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
} from '@/components/ui/carousel'

type OurHomesProps = {}

export default function OurHomes({}: OurHomesProps) {
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
    <section className={cn('relative isolate mx-auto max-w-7xl px-8 py-16')}>
      {/* Title */}
      <div className="z-10 mb-16 space-y-8 lg:absolute lg:left-8 lg:top-40 lg:w-[calc(33%-2rem)]">
        <span className="block font-sans text-base font-semibold uppercase text-accent">
          our homes
        </span>
        <h2 className="font-serif text-3xl lg:text-5xl">
          Beautifully Built and Crafted with Care
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        // '50vw' counting scrollbar width leads to horizontal overflow
        // Solve the issue by adding overflow-x-hidden to body
        className="mr-[calc(50%-50vw)] flex flex-col items-center gap-16 lg:flex-row-reverse lg:items-end lg:justify-between"
      >
        {/* Carousel Content */}
        <CarouselContent className="w-full lg:basis-2/3">
          {PROJECTS.map((project, index) => (
            <CarouselItem key={project.slug} className="basis-5/6 lg:basis-96">
              <ProjectCard
                className={'aspect-[4/5]'}
                href={`/projects/${project.slug}`}
                title={project.name}
                index={index + 1}
              >
                <Image
                  src={project.images[0]}
                  alt={project.images[0].alt}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  className="lg:transition lg:duration-200 lg:ease-linear lg:hover:scale-110 lg:hover:duration-1000"
                />
              </ProjectCard>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Buttons */}
        <div
          // TODO: Add progress animation
          className={cn(
            'relative isolate mr-8 w-fit space-x-0 rounded-full border shadow',
            '*:border-0 *:text-accent hover:*:bg-background hover:*:text-accent',
          )}
        >
          <CarouselPrevious className="rounded-r-none" />
          <CarouselNext className="rounded-l-none" />
          <ProgressBorder
            progress={scrollProgress}
            className="absolute inset-0 -z-10 grid place-content-center"
          />
        </div>
      </Carousel>
    </section>
  )
}

type ProjectCardProps = {
  href: string
  children: React.ReactNode
  title: string
  index?: number
  className?: string
}

function ProjectCard({
  href,
  children,
  title,
  index,
  className,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className={cn('relative overflow-hidden', className)}>
        <div className="h-full">{children}</div>
        <div className="absolute bottom-8 left-0 flex flex-row items-baseline justify-between gap-4 bg-primary/75 px-4 py-2 font-sans uppercase text-primary-foreground backdrop-blur">
          {index !== undefined && <span className="text-accent">{index}</span>}
          <span>{title}</span>
        </div>
      </div>
    </Link>
  )
}

type ProgressBorderProps = {
  className?: string
  progress: number // [0, 1]
}

function ProgressBorder({ progress, className }: ProgressBorderProps) {
  return (
    <div className={cn(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="60"
        viewBox="-2 -2 116 60"
      >
        <title>Progress Border</title>
        <rect
          x="0"
          y="0"
          width="112"
          height="56"
          rx="28"
          ry="28"
          fill="transparent"
          strokeWidth="4"
          stroke="currentColor"
          strokeDasharray="288"
          strokeDashoffset={288 - progress * 288}
        />
      </svg>
    </div>
  )
}
