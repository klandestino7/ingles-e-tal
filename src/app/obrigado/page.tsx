'use client';

import Header from '@/views/obrigado/header.section';

import styles from '../page.module.css'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import CallToActionBottom from '@/components/CallToActionBottom';
import { NextSeo } from 'next-seo';
import SimpleFooter from '@/views/footer/simple';

export default function Home() {

    return (
        <main className={styles.main}>
            <NextSeo
                title="Obrigado - Inglês e Tal"
                description="Descubra como aprender inglês com o que você ama fazer no dia a dia, saindo do zero à comunicação em 6 meses."
                canonical="https://www.inglesetal.com/"
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <Container
                maxWidth={"full"} m={0} p={0}  paddingBottom={{base: "12vh", md : "10vh"}} 
                minH={"99vh"}
            >
                <Header />
            </Container>
            
            <SimpleFooter />
        </main>
    )
}