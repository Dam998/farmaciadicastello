import type { Metadata } from 'next'
import type React from 'react'

import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  description:
    'La Farmacia Di Castello, condotta dalla famiglia Piemontese dal 1932, offre professionalità ed esperienza. Vasto assortimento di medicinali, prodotti omeopatici ed articoli sanitari.',
  title: 'Farmacia di Castello - Firenze | Dal 1932',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={geist.className}>
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
