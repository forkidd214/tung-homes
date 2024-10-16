import Link from 'next/link'
import { Button } from '@/components/ui/button'

type CallToActionProps = {}

export default function CallToAction({}: CallToActionProps) {
  return (
    <section className="space-y-8 bg-secondary px-8 py-16 text-center text-secondary-foreground">
      <h3>Have an Idea?</h3>

      <Button asChild variant={'accent'} className="mx-auto flex w-fit">
        <Link href="/contact">
          <span>Let&apos;s Talk!</span>
        </Link>
      </Button>
    </section>
  )
}
