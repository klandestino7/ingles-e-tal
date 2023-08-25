'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Teacher = () => {

    return (
        <Flex
            w={'full'}
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
                    <TextTaged> SUA PROFESSORA </TextTaged>
                </Text>
            </Box>

            <Flex
                w={'full'}
                alignItems={"center"}
                justifyContent={"center"}
                direction={{base: "column", sm: "row"}}
                gap={"4vh"}
            >
                <Box>
                    <Image 
                        src={"./images/antonela.png"}
                        alt={""}
                        borderRadius={"7px"}
                        boxSize={{base: "full", md :"350px"}}
                    />
                </Box>

                <Box>
                    <Heading>
                        Antonella Barbieri
                    </Heading>
                    <Text
                        maxW={{ base : "full", md : "600px"}}
                    >
                    Hi there! Sou Antonella Barbieri, apaixonada pelo inglês desde pequena, amo viajar,
                    gravar conteúdos e ajudar pessoas. Através da minha experiência, traduzo métodos
                    complexos em palavras, atividades e imersões leves para facilitar o aprendizado do
                    inglês para os brasileiros, da mesma forma que eu aprendi. Sou fã da comunicação e
                    das conexões que ela traz. Sempre em busca de novos desafios, estou comprometida em
                    oferecer uma abordagem inovadora para compartilhar o meu conhecimento e promover o seu entendimento
                    abrindo os seus olhos para um inglês que você nunca viu antes. Seja bem-vindo(a) à jornada do Zero à Comunicação!
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}


export default Teacher;