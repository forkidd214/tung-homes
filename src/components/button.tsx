import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { ArrowRight, PencilRuler, Phone, ReceiptText } from 'lucide-react'

import { cn, toSentenceCase, transformText } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-sans font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'bg-transparent text-inherit ring-1 ring-primary/10 hover:bg-white/20 hover:ring-primary/15',
        link: 'text-secondary-foreground underline-offset-4 hover:underline',
      },
      size: {
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

/**
 * A link with an animated arrow icon
 */
function ArrowLink({
  children,
  ...rest
}: React.ComponentPropsWithRef<typeof Link>) {
  return (
    <Button
      asChild
      variant={'link'}
      className="group h-auto gap-1 p-0 text-base"
    >
      <Link {...rest}>
        {transformText(children, toSentenceCase)}
        <ArrowRight
          className="inline-block h-4 w-4 opacity-25 transition group-hover:translate-x-0.5 group-hover:scale-105 group-hover:opacity-75"
          strokeWidth={4}
        />
      </Link>
    </Button>
  )
}

/**
 * A link that looks like a button
 */
const icons = {
  phone: Phone,
  receiptText: ReceiptText,
  pencilRuler: PencilRuler,
}

function ButtonLink({
  variant,
  size,
  icon,
  children,
  ...rest
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    icon?: keyof typeof icons
  }) {
  const Icon = icon && icons[icon]

  return (
    <Button asChild variant={variant} size={size} className={'gap-1'}>
      <Link {...rest}>
        {Icon && <Icon className="p-1 opacity-80" strokeWidth={3} />}
        {transformText(children, toSentenceCase)}
      </Link>
    </Button>
  )
}

export { Button, buttonVariants, ArrowLink, ButtonLink }
