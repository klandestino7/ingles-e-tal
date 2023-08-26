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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-42TSM0LLHD" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-42TSM0LLHD');
        `}
      </Script>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
