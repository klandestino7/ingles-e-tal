'use client';

import InstagramCard from '@/components/InstagramCard';
import TextTaged from '@/components/TextTaged';
import WhatsAppCard from '@/components/WhatsAppCard';
import { Box, Container, Flex, Text } from '@chakra-ui/react'


const WhatsApp = () => {
    const textMaxSize = {base: "full", sm: "600px"};
    const flexWidth = {base: 'full', md: 800, lg: 1300};
    const headingFontSize = { base: "30px", md: "35px", lg: "40px" }
    const subHeadingFontSize = { base: "23px", md: "26px", lg: "30px" }
    const bgMobile = { base: "", md: "url('./images/BG02.png')"}
    const bgMobileBox = { base: "block", md: "none" }

    return (
        <Flex
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
            position={"relative"}
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
                    textAlign={"center"}
                >
                    <Text
                        fontSize={"1.3em"}
                        fontFamily={"montserrat"}
                        fontWeight={"bold"}
                        color={"var(--color-primary)"}
                    >
                        Sua vaga está quase confirmada, só falta mais um passo!
                    </Text>

                    <Text>
                        Acesse agora nosso grupo silencioso no WhatsApp para não perder a aula.
                    </Text>

                </Box>

                <Box>
                    <WhatsAppCard 
                        link={""}
                        nome={"@inglesetal - Aulão ao vivo - 13/09"}
                        picture={"./images/whats.jpg"}
                    />
                </Box>

            </Flex>
        </Flex>
    )
}

export default WhatsApp