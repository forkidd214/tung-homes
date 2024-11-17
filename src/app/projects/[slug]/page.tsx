import NextImage from 'next/image'
import {
  type LucideIcon,
  Bath,
  BedDouble,
  Grid2x2Plus,
  Hourglass,
  MapPin,
} from 'lucide-react'

import { Grid } from '@/components/grid'
import Spacer from '@/components/spacer'
import { H2, H3, Paragraph } from '@/components/typography'
import ProjectCard from '@/components/project-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/carousel'
import { PROJECTS, type Image, type Project, projectCTAImage } from '@/data'
import { ButtonLink } from '@/components/button'

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug == slug)

  if (!project) return null

  return (
    <div>
      <Spacer className="h-28 bg-primary lg:h-28" />
      <div className="bg-primary">
        <Grid className="gap-y-8 pt-8">
          {/* Brief */}
          <div className="col-span-full">
            <div className="space-y-4">
              <H2>project</H2>
              <H3 as="p" className="text-primary-foreground">
                {project.name}
              </H3>
              <Paragraph className="text-primary-foreground">
                {project.description}
              </Paragraph>
            </div>
          </div>

          {/* Gallery */}
          <div className="col-span-full">
            <ProjectGallery images={project.images} />
          </div>

          {/* Details */}
          <div className="col-span-full">
            <div className="relative isolate mt-4">
              <div className="bg-primary-dark p-4 text-primary-foreground">
                <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly">
                  {[
                    'landSize',
                    'bedroomCount',
                    'bathroomCount',
                    'location',
                    'buildDuration',
                  ].map((item) => (
                    <li key={item}>
                      <ProjectDetails
                        item={item as keyof typeof project.details}
                        value={
                          project.details[item as keyof typeof project.details]
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-0.5 left-1/2 -z-10 h-1/2 w-svw -translate-x-1/2 bg-background" />
            </div>
          </div>
        </Grid>
      </div>

      {/* ProjectCTA */}
      <Spacer />
      <ProjectCTA />
      <Spacer />

      {/* Inspiration if have any */}
      <div className="bg-secondary">
        <ProjectInspiration curProject={project} />
      </div>
    </div>
  )
}

/**
 * ProjectGallery
 */
function ProjectGallery({ images }: { images: Image[] }) {
  return (
    <Carousel className="">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.slug} className="basis-full">
            <div className="relative aspect-[3/2] min-h-52">
              <NextImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-8 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full text-primary-foreground md:-left-12" />
      <CarouselNext className="absolute -right-8 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full text-primary-foreground md:-right-12" />
    </Carousel>
  )
}

/**
 * ProjectDetails
 */
type Item = keyof Project['details']

const icons: {
  [K in Item]?: LucideIcon
} = {
  landSize: Grid2x2Plus,
  bedroomCount: BedDouble,
  bathroomCount: Bath,
  location: MapPin,
  buildDuration: Hourglass,
}

function ProjectDetails({
  item,
  value,
}: {
  item: Item
  value: string | number
}) {
  const Icon = icons[item]

  if (!Icon) return null

  return (
    <div className="flex flex-row items-center gap-2 px-4 py-2">
      <Icon className="text-secondary-foreground" />
      <span className="text-primary-foreground">
        {item == 'landSize'
          ? `${value} Sq. Meter`
          : item == 'bedroomCount'
            ? `${value} Bedroom${Number(value) > 1 && 's'}`
            : item == 'bathroomCount'
              ? `${value} Bathroom${Number(value) > 1 && 's'}`
              : item == 'location'
                ? `${value}`
                : item == 'buildDuration'
                  ? `${value} Month${Number(value) > 1 && 's'} Built`
                  : null}
      </span>
    </div>
  )
}

/**
 * ProjectCTA
 */
function ProjectCTA() {
  return (
    <Grid className="gap-y-8">
      <div className="col-span-full md:col-span-4 lg:col-span-6">
        <div>
          <H3>ready to begin making your dream home a reality?</H3>
          <Paragraph className="mt-4">
            We&apos;d love to help turn your wild ideas into a place your family
            can call home. Let&apos;s get started with a quick call or email, so
            we can set up a consultation.
          </Paragraph>
          <div className="mt-6 text-center md:mt-10 lg:mt-16">
            <ButtonLink
              href={'tel:+10086'}
              icon="receiptText"
              variant={'primary'}
              size={'lg'}
            >
              get a quote
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-span-4 lg:col-span-6">
        <div className="relative h-64 md:h-80">
          <NextImage
            src={projectCTAImage}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </Grid>
  )
}

/**
 * ProjectInspiration
 */
function ProjectInspiration({ curProject }: { curProject: Project }) {
  const { type } = curProject.details

  /**
   * TODO: exclude currentProject from similarProjects when having enough data
   */
  const similarProjects = PROJECTS.filter((p) => p.details.type === type)

  if (similarProjects.length < 2) return null

  return (
    <Grid className="gap-y-8 py-[10vw] lg:py-28">
      <div className="col-span-full">
        <H3>get inspired by these one-of-a-kind designs</H3>
      </div>
      {similarProjects.slice(0, 2).map((project) => (
        <div
          key={project.slug}
          className="col-span-full md:col-span-4 lg:col-span-6"
        >
          <ProjectCard
            className={'h-64 lg:h-96'}
            href={`/projects/${project.slug}`}
            title={project.name}
            image={{
              src: project.images[0],
              alt: project.images[0].alt,
              sizes: '(min-width: 768px) 50vw, 100vw',
            }}
          />
        </div>
      ))}
    </Grid>
  )
}
