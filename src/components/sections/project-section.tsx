'use client'

import React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { PROJECTS } from '@/data'
import { cn } from '@/lib/utils'
import { Grid } from '../grid'
import { H2, H3, Paragraph } from '../typography'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel'
import ProjectCard from '../project-card'

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
    <Grid className="gap-y-8">
      {/* Title */}
      <GridItemWrapper item="title">
        <div className="space-y-4">
          <H2>our homes</H2>
          <H3 as="p">built with quality at affordable prices</H3>
          <Paragraph>
            Quality is never sacrificed at Tung Homes. We source the best
            products & materials and use only experienced trades.
          </Paragraph>
        </div>
      </GridItemWrapper>

      {/* Carousel Provider */}
      <GridItemWrapper item="carousel">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          {/* Carousel Content */}
          <GridItemWrapper item="carousel-content">
            <CarouselContent className="w-full">
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
          </GridItemWrapper>

          {/* Carousel Control */}
          <GridItemWrapper item="carousel-control">
            <div
              className={cn(
                'relative isolate inline-flex min-w-fit max-w-fit flex-row items-center self-center rounded-full shadow ring-1 ring-ring',
                'text-secondary-foreground',
              )}
            >
              <CarouselPrevious
                tabIndex={-1}
                className="rounded-r-none ring-0"
              />
              <CarouselNext tabIndex={-1} className="rounded-l-none ring-0" />
              <ProgressRing
                width={98}
                height={50}
                strokeWidth={2}
                progress={scrollProgress}
                className="absolute inset-0 -z-10"
              />
            </div>
          </GridItemWrapper>
        </Carousel>
      </GridItemWrapper>
    </Grid>
  )
}

function GridItemWrapper({
  item,
  children,
}: {
  item: 'title' | 'carousel' | 'carousel-content' | 'carousel-control'
  children: React.ReactNode
}) {
  switch (item) {
    case 'title':
      return (
        <div
          className={cn(
            'col-span-full',
            'sm:col-span-2 sm:self-center',
            'md:col-span-3',
            'lg:col-span-4',
          )}
        >
          {children}
        </div>
      )
    case 'carousel':
      return <Slot className={cn('contents')}>{children}</Slot>
    case 'carousel-content':
      return (
        <div
          className={cn(
            'col-span-full mr-[-10vw]',
            'sm:col-span-2 sm:row-span-2',
            'md:col-span-5',
            'lg:col-span-8 lg:mr-[calc(75%-50vw)]',
          )}
        >
          {children}
        </div>
      )
    case 'carousel-control':
      return (
        <div
          className={cn(
            'col-span-full justify-self-center',
            'sm:col-span-2 sm:self-end sm:justify-self-start',
            'md:col-span-3',
            'lg:col-span-4',
          )}
        >
          {children}
        </div>
      )
    default:
      break
  }
  throw new Error(`<GridItemWrapper /> has invalid props ${{ item }}`)
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
