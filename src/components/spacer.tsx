import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const spacerVariants = cva('', {
  variants: {
    size: {
      '3xs': 'h-6 lg:h-8',
      '2xs': 'h-10 lg:h-12',
      xs: 'h-20 lg:h-24',
      sm: 'h-32 lg:h-36',
      base: 'h-40 lg:h-48',
      lg: 'h-56 lg:h-64',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

interface SpacerProps extends VariantProps<typeof spacerVariants> {
  className?: string
}

function Spacer({ size, className }: SpacerProps) {
  return <div className={cn(spacerVariants({ size, className }))} />
}

export default Spacer
