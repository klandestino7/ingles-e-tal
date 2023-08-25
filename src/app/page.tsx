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

export default function Home() {

    return (
        <main className={styles.main}>
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

