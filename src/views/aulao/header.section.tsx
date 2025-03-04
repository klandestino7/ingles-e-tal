'use client';

import InstagramCard from '@/components/InstagramCard';
import TextTaged from '@/components/TextTaged';
import KiwifiCard from '@/components/KiwifiCard';
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
                    REVISÃO DO <TextTaged background={"var(--color-secondary)"}>AULÃO</TextTaged>
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
                        Assista abaixo nosso aulão que foi transmitido ao vivo.
                    </Text>

                    {/* <Text>
                        Acesse agora nosso grupo silencioso no WhatsApp para não perder a aula.
                    </Text> */}

                </Box>
            </Flex>
        </Flex>
    )
}

export default Header