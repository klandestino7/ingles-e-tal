'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const methods : Array<string> = [
    "Módulo 1: Cumprimentos e Apresentações",
    "Módulo 2: Conversas Cotidianas em Inglês",
    "Módulo 3: Expressões Idiomáticas e Gírias em Inglês",
    "Módulo 4: Habilidades de Escuta e Compreensão",
    "Módulo 5: Falando sobre Família e Amigos",
    "Módulo 6: Descrevendo Lugares e Ambientes",
    "Módulo 7: Falando sobre Hobbies e Interesses",
    "Módulo 8: Planejamento de Viagens e Férias",
    "Módulo 9: Compras e Negociações em Inglês",
    "Módulo 10: Experiências Culturais e Gastronômicas",
    "Módulo 11: Discutindo Notícias e Atualidades",
    "Módulo 12: Falando sobre Saúde e Bem-Estar",
    "Módulo 13: Expressando Opiniões e Preferências",
    "Módulo 14: Conversando sobre Tecnologia e Inovação",
    "Módulo 15: Apresentando-se Profissionalmente",
    "Módulo 16: Negociações e Reuniões de Negócios",
    "Módulo 17: Conversando sobre o Futuro e Metas",
    "Módulo 18: Expressando Sentimentos e Emoções",
    "Módulo 19: Lidando com Situações Cotidianas em Inglês",
    "Módulo 20: Comunicação em Redes Sociais e Internet",
    "Módulo 21: Inglês com séries",
    "Módulo 22: Inglês com músicas",
    "Módulo 23: Lapidando o Conhecimento Adquirido",
];

const Modules = () => {

    const pictureBoxW = { base: "full", md: "500px" }
    const pictureBoxH = { base: "250px", md: "320px" }

    const bgPicture = useColorModeValue("whiteAlpha.500","blackAlpha.500")

    return (
        <Flex
            w={'full'}
            marginTop={"8vh"}
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={"4vh"}
        >
            <Box>
                <Text
                    fontSize={{base: "1.6em", md: "2.3em"}}
                    lineHeight={"1.2em"}
                    fontWeight={"700"}
                    fontFamily={"var(--font-monserrat)"}
                >
                    <TextTaged> O MÉTODO </TextTaged>
                </Text>
            </Box>

            <Flex
                w={'full'}
                alignItems={"center"}
                justifyContent={"center"}
                direction={{base: "column"}}
                gap={"4vh"}
            >
                <Box
                    maxW={"500px"}
                    border={"2px solid var(--color-primary)"}
                    borderRadius={"15px"}
                    position={"relative"}
                    w={pictureBoxW}
                    h={pictureBoxH}
                    bg={bgPicture}
                >
                    <Image 
                        src={"./images/MOCKUP-GERAL-3.png"}
                        borderRadius={"7px"}
                        position={"absolute"}
                        alt=""

                        style={{
                            transform: "scale(1.1)"
                        }}
                    />
                </Box>
                <Text
                    marginBottom={"2vh"}
                    maxW={"400px"}
                >
                    Descubra com precisão o método que eu utilizei que me levou à comunicação em inglês em apenas 6 meses
                </Text>
                <Box
                    maxW={"80%"}
                >
                   
                    <Grid templateColumns={{
                        base: 'repeat(2, auto)',
                        md: 'repeat(3, auto)',
                        lg: 'repeat(5, auto)'
                    }} gap={6}>
                        {
                            methods.map((item, index) => (
                                <GridItem
                                    borderRadius="15px"
                                    bg={index % 2 ? "var(--color-primary)" : "blackAlpha.200"}
                                    padding={"2vh"}
                                >
                                    {item}
                                </GridItem >
                            ))
                        }
                    </Grid>
                </Box>
            </Flex>
        </Flex>
    )
}


export default Modules;