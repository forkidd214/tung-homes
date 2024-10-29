import { Roboto_Flex, Roboto_Slab } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
      <body className={cn(`${robotoSans.variable} ${robotoSerif.variable}`)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
