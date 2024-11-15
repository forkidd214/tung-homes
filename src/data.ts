import { StaticImageData } from 'next/image'

/**
 * common images
 */
import homeHeroImage from '../public/images/home-hero.webp'
import homeServiceImage from '../public/images/home-service.webp'
import homeAboutImage from '../public/images/home-about.webp'

export { homeHeroImage, homeServiceImage, homeAboutImage }

/**
 * project images
 */
import moderOasisImage1 from '../public/projects/modern-oasis/image-1.webp'
import moderOasisImage2 from '../public/projects/modern-oasis/image-2.webp'
import moderOasisImage3 from '../public/projects/modern-oasis/image-3.webp'
import moderOasisImage4 from '../public/projects/modern-oasis/image-4.webp'

import contempoRetreatImage1 from '../public/projects/contempo-retreat/image-1.webp'
import contempoRetreatImage2 from '../public/projects/contempo-retreat/image-2.webp'

import skylineHavenImage1 from '../public/projects/skyline-haven/image-1.webp'
import skylineHavenImage2 from '../public/projects/skyline-haven/image-2.webp'
import skylineHavenImage3 from '../public/projects/skyline-haven/image-3.webp'

import baysideImage1 from '../public/projects/bayside/image-1.webp'
import baysideImage2 from '../public/projects/bayside/image-2.webp'
import baysideImage3 from '../public/projects/bayside/image-3.webp'

export type Image = StaticImageData & {
  slug: string
  src: string
  alt: string
}

export type Project = {
  slug: string
  name: string
  description: string
  images: Image[]
  details: {
    type: 'house' | 'townhouse' | 'apartment & unit' | 'villa'
    floorCount: number
    landSize: number // sqm
    bedroomCount: number
    bathroomCount: number
    carSpaceCount: number
    location: string // Suburb, State
    buildDuration: number // how many months
  }
}

function makeProjectImages(projectName: string, images: StaticImageData[]) {
  return images.map((image, index) => ({
    ...image,
    slug: `${projectName}-image-${index + 1}`,
    alt: `${projectName} image ${index + 1}`,
  }))
}

export const PROJECTS: Project[] = [
  {
    slug: 'modern-oasis',
    name: 'Modern Oasis',
    description:
      'This modern home features frontline elegance, open-plan living, culinary haven, intimate dining areas, luxurious private spaces and outdoor oasis.',
    images: makeProjectImages('modern-oasis', [
      moderOasisImage1,
      moderOasisImage2,
      moderOasisImage3,
      moderOasisImage4,
    ]),
    details: {
      type: 'house',
      floorCount: 2,
      landSize: 214,
      bedroomCount: 3,
      bathroomCount: 2,
      carSpaceCount: 2,
      location: 'Mitchell Park, SA',
      buildDuration: 8,
    },
  },
  {
    slug: 'contempo-retreat',
    name: 'Contempo Retreat',
    description:
      'Brimming with high quality finishes and lofty space, this light-infused home blends all the looks you love with premium functionality for a carefree living experience close to the beach while still handy to the city.',
    images: makeProjectImages('contempo-retreat', [
      contempoRetreatImage1,
      contempoRetreatImage2,
    ]),
    details: {
      type: 'house',
      floorCount: 1,
      landSize: 141,
      bedroomCount: 3,
      bathroomCount: 2,
      carSpaceCount: 1,
      location: 'Seaton, SA',
      buildDuration: 6,
    },
  },
  {
    slug: 'skyline-haven',
    name: 'Skyline Haven',
    description:
      'A stunning two-story home that combines modern elegance with comfort. Featuring large windows for natural light and skyline views, it offers open-concept living spaces, spacious bedrooms, a gourmet kitchen, and landscaped outdoor areas.',
    images: makeProjectImages('skyline-haven', [
      skylineHavenImage1,
      skylineHavenImage2,
      skylineHavenImage3,
    ]),
    details: {
      type: 'townhouse',
      floorCount: 2,
      landSize: 118,
      bedroomCount: 3,
      bathroomCount: 2,
      carSpaceCount: 2,
      location: 'St Clair, SA',
      buildDuration: 10,
    },
  },
  {
    slug: 'bayside',
    name: 'Bayside',
    description:
      'A charming coastal residence designed to embrace the beauty of waterfront living. This home features an open-concept layout with expansive windows that offer breathtaking views of the bay.',
    images: makeProjectImages('bayside', [
      baysideImage1,
      baysideImage2,
      baysideImage3,
    ]),
    details: {
      type: 'house',
      floorCount: 1,
      landSize: 180,
      bedroomCount: 3,
      bathroomCount: 2,
      carSpaceCount: 2,
      location: 'Seaton, SA',
      buildDuration: 8,
    },
  },
]
