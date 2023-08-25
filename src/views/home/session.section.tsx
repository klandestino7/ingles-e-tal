'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Session = () => {

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
                    <TextTaged> O AULÃO </TextTaged>
                </Text>
            </Box>

            <Flex
                w={'full'}
                alignItems={"center"}
                justifyContent={"center"}
                direction={{base: "column", sm: "row"}}
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

                <Box
                    maxW={"400px"}
                >
                    <Text
                        marginBottom={"2vh"}
                    >
                        Descubra com precisão o método que utilizei que me levou à comunicação em inglês em apenas 6 meses
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={HiPlus} color='var(--color-secondary)' />
                            Como começar a aprender inglês sem perder o foco
                        </ListItem>
                        <ListItem>
                            <ListIcon as={HiPlus} color='var(--color-secondary)' />
                            Quais caminhos eu trilhei que me permitiram falar inglês em 6 meses
                        </ListItem>
                        <ListItem>
                            <ListIcon as={HiPlus} color='var(--color-secondary)' />
                            O que você precisa fazer para sair do zero e alcançar a comunicação
                        </ListItem>
                        <ListItem>
                            <ListIcon as={HiPlus} color='var(--color-secondary)' />
                            Passo a passo para aprender inglês com coisas que você já faz no dia a dia
                        </ListItem>
                        <ListItem>
                            <ListIcon as={HiPlus} color='var(--color-secondary)' />
                            Como imergir no inglês mesmo estando no Brasil
                        </ListItem>
                    </List>
                </Box>
            </Flex>
        </Flex>
    )
}


export default Session;