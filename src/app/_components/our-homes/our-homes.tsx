import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { PROJECTS } from '@/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type OurHomesProps = {}

export default function OurHomes({}: OurHomesProps) {
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
            'mr-8 w-fit space-x-0 rounded-full border',
            'shadow *:border-0 *:text-accent hover:*:bg-background hover:*:text-accent',
          )}
        >
          <CarouselPrevious className="rounded-r-none" />
          <CarouselNext className="rounded-l-none" />
        </div>
      </Carousel>
    </section>
  )
}

type ProjectCardProps = {
  href: string
  children: React.ReactNode
  title: string
  index: number
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
          <span className="text-accent">{index}</span>
          <span>{title}</span>
        </div>
      </div>
    </Link>
  )
}
