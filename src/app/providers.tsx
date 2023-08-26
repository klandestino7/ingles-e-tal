// app/providers.tsx
'use client'
import theme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { QueryClient, QueryClientProvider } from 'react-query';

import React, { useState } from "react"
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SGFPSN2KPW" /> */}
                    <Script id="google-analytics">
                        {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','G-SGFPSN2KPW');
                        `}
                    </Script>

                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-SGFPSN2KPW"
                        height="0" width="0" style={{
                            display: "none", visibility: "hidden"
                        }}></iframe>
                    </noscript>

                    {children}
                    <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" />
                </ChakraProvider>
            </CacheProvider>
        </QueryClientProvider>
    )
}