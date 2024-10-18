import { cva, VariantProps } from 'class-variance-authority'

import { cn, toSentenceCase, transformText } from '@/lib/utils'

const titleVariants = cva('font-serif text-primary', {
  variants: {
    size: {
      h1: 'text-4xl leading-tight md:text-6xl',
      h2: 'text-base font-semibold tracking-wide',
      h3: 'text-2xl font-semibold tracking-tight md:text-3xl',
      h4: 'text-xl font-medium md:text-2xl',
      h5: 'text-lg font-medium md:text-xl',
      h6: 'text-lg font-medium',
    },
  },
})

interface TitleProps
  extends React.ComponentPropsWithoutRef<'h1'>,
    VariantProps<typeof titleVariants> {
  as?: React.ElementType
}

function Title({
  as,
  size,
  className,
  children,
  ...rest
}: TitleProps & {
  size: NonNullable<VariantProps<typeof titleVariants>['size']>
}) {
  const Tag = as ?? size
  return (
    <Tag className={cn(titleVariants({ size, className }))} {...rest}>
      {transformText(children, toSentenceCase)}
    </Tag>
  )
}

function H1(props: TitleProps) {
  return <Title className="text-primary-foreground" {...props} size="h1" />
}

function H2(props: TitleProps) {
  return (
    <Title
      className="font-sans uppercase text-secondary-foreground"
      {...props}
      size="h2"
    />
  )
}

function H3(props: TitleProps) {
  return <Title {...props} size="h3" />
}

function H4(props: TitleProps) {
  return <Title {...props} size="h4" />
}

function H5(props: TitleProps) {
  return <Title {...props} size="h5" />
}

function H6(props: TitleProps) {
  return <Title {...props} size="h6" />
}

interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {
  as?: React.ElementType
  isProse?: boolean
}

function Paragraph({
  className,
  isProse = true,
  as: Tag = 'p',
  ...rest
}: ParagraphProps) {
  return (
    <Tag
      className={cn(
        'max-w-full font-sans text-base text-foreground',
        isProse && 'max-w-prose',
        className,
      )}
      {...rest}
    />
  )
}

export { H1, H2, H3, H4, H5, H6, Paragraph }
