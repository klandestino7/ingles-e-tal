import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Container } from '@chakra-ui/react'
import Script from 'next/script'
import { useState } from 'react'

export const metadata: Metadata = {
  title: "Inglês e Tal",
  description: "Descubra como aprender inglês com o que você ama fazer no dia a dia, saindo do zero à comunicação em 6 meses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" />
      </body>
    </html>
  )
}
