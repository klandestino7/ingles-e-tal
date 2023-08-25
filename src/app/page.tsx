'use client';

import styles from './page.module.css'
import { Box, Container, Flex } from '@chakra-ui/react'

import CallToActionBottom from '@/components/CallToActionBottom';

import { Toaster } from "react-hot-toast"

import Header from '@/views/home/first.section'
import Video from '@/views/home/video.section';
import Teacher from '@/views/home/teacher.section';
import Session from '@/views/home/session.section';
import Questions from '@/views/home/questions.section';
import Cta from '@/views/home/cta.section';
import Forms from '@/views/home/form.section';

import { NextSeo } from 'next-seo';

export default function Home() {

    return (
        <main className={styles.main}>
            <NextSeo
                title="Inglês e Tal"
                description="Descubra como aprender inglês com o que você ama fazer no dia a dia, saindo do zero à comunicação em 6 meses."
                canonical="https://www.inglesetal.com/"
                // openGraph={{
                //     url: 'https://www.url.ie/a',
                //     title: 'Open Graph Title',
                //     description: 'Open Graph Description',
                //     images: [
                //     {
                //         url: 'https://www.example.ie/og-image-01.jpg',
                //         width: 800,
                //         height: 600,
                //         alt: 'Og Image Alt',
                //         type: 'image/jpeg',
                //     },
                //     { url: 'https://www.example.ie/og-image-03.jpg' },
                //     { url: 'https://www.example.ie/og-image-04.jpg' },
                //     ],
                //     siteName: 'SiteName',
                // }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <Container maxWidth={"full"} m={0} p={0}  paddingBottom={{base: "12vh", md : "10vh"}} >
                <Toaster containerClassName="!top-16 sm:!top-3.5 !bottom-16 sm:!bottom-3.5" position="top-right" />
                <Header />
                <Video />
                <Teacher />
                <Session />
                <Cta />
                {/* <Forms /> */}
                <Questions />
            </Container>
            
            <CallToActionBottom />
        </main>
    )
}

