import { Roboto_Flex, Roboto_Slab } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from './_components/header'

const robotoSans = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-sans',
})
const robotoSerif = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
})

export const metadata: Metadata = {
  title: 'Tung Homes',
  description: 'Your reliable local builder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${robotoSans.variable} ${robotoSerif.variable}`,
          'flex min-h-svh flex-col',
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
