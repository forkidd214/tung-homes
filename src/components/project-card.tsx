import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

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

export default ProjectCard
