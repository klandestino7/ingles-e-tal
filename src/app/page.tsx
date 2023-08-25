'use client';

import Header from '@/views/first.section'
import styles from './page.module.css'
import { Box, Container, Flex } from '@chakra-ui/react'
import Video from '@/views/video.section';
import Teacher from '@/views/teacher.section';
import Session from '@/views/session.section';
import CallToActionBottom from '@/components/CallToActionBottom';
import Questions from '@/views/questions.section';
import Cta from '@/views/cta.section';
import Forms from '@/views/form.section';
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
                <Header />
                <Video />
                <Teacher />
                <Session />
                {/* <Forms /> */}
                <Questions />
                <Cta />
            </Container>
            
            <CallToActionBottom />
        </main>
    )
}

