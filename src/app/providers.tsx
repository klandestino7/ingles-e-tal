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
                    {children}
                    <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" />
                </ChakraProvider>
            </CacheProvider>
        </QueryClientProvider>
    )
}