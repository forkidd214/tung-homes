import Link from 'next/link'

import Logo from './logo'
import { Grid } from './grid'
import { Button } from './button'
import { toSentenceCase } from '@/lib/utils'

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Grid className="py-16">
        {/* logo and contact */}
        <div className="col-span-4 space-y-4">
          <Link href={'/'} aria-label="Tung Homes">
            <Logo className="h-12 w-auto lg:h-14" />
          </Link>

          <div>
            <p>123 Woodville Rd, St Clair, SA 5011</p>
            <Link href={'tel:+10086'} className="space-x-1">
              <span>Call</span>
              <strong className="text-white">10086</strong>
            </Link>
          </div>
        </div>

        {/* nav */}
        <div className="col-span-4 hidden self-end justify-self-center lg:block">
          <nav>
            <ul className="flex flex-col">
              {[
                { href: '/projects', text: 'our homes' },
                { href: '/service', text: 'our approach' },
                { href: '/about', text: 'our story' },
              ].map(({ href, text }) => (
                <li key={`footer${href}`}>
                  <Button
                    asChild
                    variant={'link'}
                    className="text-primary-foreground"
                  >
                    <Link href={href}>{toSentenceCase(text)}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* legal */}
        <div className="col-span-4 -col-end-1 mt-16 self-end text-sm font-medium opacity-55 md:text-right">
          <p className="">Builders Licence No. 10086</p>
          <p>© 2024 Tung Homes, LLC. All Rights Reserved</p>
        </div>
      </Grid>
    </footer>
  )
}

export default Footer
