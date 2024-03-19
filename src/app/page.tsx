'use client';

import styles from './page.module.css'
import { Box, Container, Flex, useColorMode } from '@chakra-ui/react'

import CallToActionBottom from '@/components/CallToActionBottom';

import { Toaster } from "react-hot-toast"

import Header from '@/views/home/first.section'
import Video from '@/views/home/video.section';
import Teacher from '@/views/home/teacher.section';
import Session from '@/views/home/session.section';
import Questions from '@/views/home/questions.section';
import Cta from '@/views/home/cta.section';
import Forms from '@/views/home/form.section';

import { useEffect } from "react"

import { NextSeo } from 'next-seo';
import { redirect } from 'next/navigation';

export default function Home() {

    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() =>{
        if (colorMode == "light") 
        {
            toggleColorMode();
        }
    }, [])

    return (
        <main className={styles.main}>
            <NextSeo
                title="Jornada do Zero à Comunicação - Inglês e Tal"
                description="Descubra como aprender inglês com o que você ama fazer no dia a dia, saindo do zero à comunicação em 6 meses."
                canonical="https://www.inglesetal.com/"
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

