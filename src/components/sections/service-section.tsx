import Image from 'next/image'

import { homeServiceImage as decoImage } from '@/data'
import { cn } from '@/lib/utils'
import { Grid } from '../grid'
import { H2, H3,  H5, Paragraph } from '../typography'
import { ArrowLink } from '../button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../accordion'

function ServiceSection() {
  return (
    <Grid>
      {/* Decoration image */}
      <div className={cn('hidden md:col-span-4 md:block lg:col-span-6')}>
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute -top-20 left-0 h-[50rem] w-full">
            <Image
              src={decoImage}
              alt=""
              sizes="100vw"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          'col-span-full space-y-4 md:col-span-4 lg:col-span-6 xl:col-span-5 xl:-col-end-1',
        )}
      >
        <H2>our approach</H2>
        <H3 as="p">tried and true</H3>
        <Accordion type="single" collapsible>
          {STEPS.map((step, idx) => (
            <AccordionItem
              key={`service-step-${step.name}`}
              value={`step-${idx + 1}`}
            >
              <AccordionTrigger className="group gap-4 overflow-hidden opacity-75 hover:no-underline data-[state=open]:opacity-100">
                <span className="text-lg font-medium text-secondary-foreground md:text-xl">
                  {idx + 1}
                </span>
                <H5
                  as={'span'}
                  className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap text-left group-hover:underline"
                >
                  {step.name}
                </H5>
              </AccordionTrigger>
              <AccordionContent className="pl-7">
                <Paragraph>{step.description}</Paragraph>
                {step.cta && (
                  <ArrowLink href={step.cta.href} className="mt-4">
                    {step.cta.text}
                  </ArrowLink>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Grid>
  )
}

const STEPS: {
  name: string
  description: string
  cta?: {
    href: string
    text: string
  }
}[] = [
  {
    name: 'find a property you love',
    description:
      'It all starts with the perfect property. Whether you seek lakefront living or a mountaintop retreat, spend some time scouting out your ideal building site before we begin the design process.',
    cta: {
      href: '/projects',
      text: 'see our homes',
    },
  },
  {
    name: 'design a unique floorplan',
    description:
      'With your ideas and input, our expert architectural team will draft and design a custom floorplan with appropriate skill and attention. Need a little inspiration? Check out these impressive projects.',
  },
  {
    name: 'outfit the interior',
    description:
      'The only style of home we do not build is Cookie Cutter. Instead, we offer an in-house designer that will transform your ideas into your dream home. From paint and flooring to lighting and more, our in-house interior design team will transform your ideas into a beautiful design for the inside of your home.',
  },
  {
    name: 'bid and finalise plans',
    description:
      "Before we break ground, we'll give you an estimate for the work and make sure every detail of your plan meets expectations.",
  },
  {
    name: 'begin building',
    description:
      'Our team of home designers, interior designers, and project managers are cut from the same cloth. We have open dialogues with clients, deliver what we promise, and value honesty above all else. The result is always the same. Superior quality homes that effortlessly embody the spirit of the Great Northwest and express your personal style.',
  },
  {
    name: 'move in and support',
    description:
      'After your project is complete, we over-deliver by adding our 12-month warranty. This warranty provides you with the assurance that your home is exactly what you imagined it would be.',
  },
]

export default ServiceSection

{
  /* // <section className="relative mx-auto max-w-7xl">
    //   <div className="bg-background px-8 py-16 text-foreground lg:ml-auto lg:w-5/6">
    //     <div className="space-y-6 lg:ml-auto lg:w-1/2">
    //       {/* Content */
}
//       <div className="space-y-4">
//         <H2>our approach</H2>
//         <H3 as="p">tried and true</H3>
//         <Paragraph>
//           We craft custom homes that look and feel like only you could live
//           there. And we do it by working hand-in-hand with you throughout
//           the entire experience.
//         </Paragraph>
//       </div>

//       {/* Call to action */}
//       <div className="flex flex-row justify-center lg:justify-start">
//         <ButtonLink
//           href="/service"
//           variant={'secondary'}
//           icon="pencilRuler"
//         >
//           discover our approach
//         </ButtonLink>
//       </div>
//     </div>

//     {/* Decoration image */}
//     <div className="relative z-10 mt-16 aspect-[3/2] lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-1/2 lg:-translate-y-1/2">
//       <Image
//         src={decoImage}
//         alt=""
//         sizes="(min-width: 1024px) 50vw, 100vw"
//         fill
//         style={{ objectFit: 'cover' }}
//       />
//     </div>
//   </div>
// </section> */}
