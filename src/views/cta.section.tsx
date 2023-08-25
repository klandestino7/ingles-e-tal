'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Cta = () => {

    return (
        <Flex
            w={'full'}
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={"4vh"}
        >
            <Box
                marginTop={{base: "2vh", md: "0"}}
            >
                <Text
                    fontWeight={"normal"}
                    fontSize={"1.2rem"}
                    fontFamily={"var(--font-monserrat)"}
                    maxW={"500px"}
                    textAlign={"center"}
                >
                    Clique no botão abaixo e dê o primeiro passo para conquista, sua flucência no inglês:
                </Text>
            </Box>

            <Button
                background={"var(--color-primary)"}
                borderRadius={"15px"}
                w={"fit-content"}
                padding={"3.5vh 4vh"}
                fontSize={{base: "1em", md :"1.2em"}}
                fontFamily={"var(--font-monserrat)"}
                fontWeight={"bold"}
                className={"pulse"}
                _hover={{
                    background: "var(--color-secondary)"
                }}
            >
                QUERO SER FLUENTE EM INGLÊS
            </Button>
        </Flex>
    )
}

export default Cta;