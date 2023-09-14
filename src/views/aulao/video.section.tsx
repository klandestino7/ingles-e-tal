'use client';

import InstagramCard from '@/components/InstagramCard';
import TextTaged from '@/components/TextTaged';
import KiwifiCard from '@/components/KiwifiCard';
import { Box, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs';

import { useState } from "react";

import ReactPlayer from 'react-player';

const Video = () => {
    const textMaxSize = {base: "full", sm: "600px"};
    const flexWidth = {base: 'full', md: 800, lg: 1300};
    const headingFontSize = { base: "30px", md: "35px", lg: "40px" }
    const subHeadingFontSize = { base: "23px", md: "26px", lg: "30px" }
    const bgMobile = { base: "", md: "url('./images/BG02.png')"}
    const bgMobileBox = { base: "block", md: "none" }

    const [ useControllers, setControllers ] = useState(false); 

    const videoHeight = {
        base: "180px",
        md: "300px",
        lg: "698px"
    }

    return (
        <Flex
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
            position={"relative"}
            textAlign={"center"}
        >
            <Flex
                maxW={1300}
                w={"full"}
                direction={"column"}
                alignItems={"center"}
                gap={"2vh"}
                marginTop={"4vh"}
            >

                <Flex
                    direction={{base: "column-reverse", lg:"row"}}
                    >
                    <KiwifiCard 
                        link={"https://bit.ly/3EImfnK"}
                        nome={"Inscrição - Método do Zero à Comunicação"}
                        picture={"./images/whats.jpg"}
                    />

                    <Box
                        w={{ base: "100%", sm: "500px",  md: "80vw", lg: "80vw" }}
                        h={{ base: "30vh", sm: "30vh",  md: "45vh", lg: "80vh" }}
                        >
                        <ReactPlayer 
                            playing
                            url='https://www.youtube.com/watch?v=WahlqhFw8pw'
                            width={"100%"}
                            height={"100%"}
                            playIcon={<PlayButton />}
                            onClickPreview={() => { setControllers(true) }}
                            controls={true}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        )
}

const PlayButton = () => {
    const buttonPlay = { base: "100px", md: "225px"}

    return (
        <Box>
            <Flex>
                <Icon as={BsFillPlayFill} boxSize={buttonPlay} color={"white"} />
            </Flex>
        </Box>
    )
}


export default Video