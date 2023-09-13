'use client';

import InstagramCard from '@/components/InstagramCard';
import TextTaged from '@/components/TextTaged';
import WhatsAppCard from '@/components/WhatsAppCard';
import { Box, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs';

import { useState } from "react";

import ReactPlayer from 'react-player';

const Header = () => {
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
                <Text
                    as={"h2"}
                    fontSize={headingFontSize}
                    lineHeight={"1.2em"}
                    fontWeight={"700"}
                    fontFamily={"var(--font-monserrat)"}
                >
                    CADASTRO REALIZADO COM <TextTaged background={"var(--color-secondary)"}>SUCESSO</TextTaged>
                </Text>

                <Box
                    maxW={"800px"}
                    fontSize={"1.2em"}
                >
                    <Text
                        fontSize={"1.3em"}
                        fontFamily={"montserrat"}
                        fontWeight={"bold"}
                        color={"var(--color-primary)"}
                    >
                        Sua vaga está <TextTaged>quase confirmada</TextTaged>, só falta mais um passo!
                    </Text>

                    <Text>
                        Acesse agora nosso grupo silencioso no WhatsApp para não perder a aula.
                    </Text>

                </Box>

                <Flex
                    direction={{base: "column-reverse", lg:"row"}}
                >
                    <WhatsAppCard 
                        link={"https://chat.whatsapp.com/Bi8tocymZg1JNAAFdMTBfu"}
                        nome={"@inglesetal - Aulão ao vivo - 13/09"}
                        picture={"./images/whats.jpg"}
                    />

                    <Box
                        w={{ base: "100%", sm: "500px",  md: "80vw", lg: "80vw" }}
                        h={{ base: "30vh", sm: "30vh",  md: "45vh", lg: "80vh" }}
                    >
                        <ReactPlayer 
                            playing
                            url='https://www.youtube.com/watch?v=xOzZ05fXAEc'
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


export default Header