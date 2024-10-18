import * as React from 'react'

import { cn } from '@/lib/utils'

interface GridProps {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  id?: string
  isNested?: boolean
  hasRowGap?: boolean
}

const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ as, children, className, id, isNested, hasRowGap }, ref) => {
    const Tag = as ?? (isNested ? 'div' : 'section')
    return (
      <Tag ref={ref} id={id} className={cn(isNested ? 'w-full' : 'mx-[10vw]')}>
        <div
          className={cn(
            'relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6',
            !isNested && 'mx-auto max-w-7xl',
            hasRowGap && 'gap-y-4 lg:gap-y-6',
            className,
          )}
        >
          {children}
        </div>
      </Tag>
    )
  },
)
Grid.displayName = 'Grid'

/**
 * Use for development only! It renders the grid columns and gaps as page overlay
 */
function GridLines() {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('<GridLines />  should only be used during development')
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 select-none">
      <Grid>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="flex h-screen items-start bg-black/10">
            <div className="w-full pt-4 text-center text-lg text-black/30">
              {idx + 1}
            </div>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export { Grid, GridLines }
