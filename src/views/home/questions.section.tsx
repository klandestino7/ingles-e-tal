'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';


const QuestionsArr = [
    {
        title:  "Isso é muito difícil de entender?",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`
    },
    {
        title:  "Não sei se isso é pra mim!",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`
    },
    {
        title:  "Preciso ter algum conhecimento básico com inglês?",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`
    },
    {
        title:  "Não tenho tempo para me dedicar!",
        description: `Sem problemas! Você pode fazer isso em paralelo com o seu trabalho atual ou estudos…
        tudo que você precisa é separar 1 hora do seu dia para estudar e aplicar os conteúdos.`
    },
    {
        title:  "Estou inseguro se vou coseguir aprender ou não!",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`
    },
]

const Questions = () => {

    return (
        <Flex
            w={'full'}
            marginTop={"5vh"}
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
                    PERGUNTAS FREQUENTES
                </Text>
            </Box>

            <Flex
                maxWidth={1300}
                w={"100%"}
                justifyContent={"center"}
            >
                <Accordion
                    w={"800px"}
                    allowToggle
                    allowMultiple
                >
                    {
                        QuestionsArr.map((item, index) => <AccItem key={index} {...item} />
                        )
                    }
                </Accordion>
            </Flex>
        </Flex>
    )
}


const AccItem = ({
    title,
    description
}: {
    title: string,
    description: string
}) => {
    return (
        <AccordionItem
            w={"full"}
        >
        <AccordionButton
            bg={"whiteAlpha.200"}
            _hover={{
                background: "whiteAlpha.400"
            }}
            _expanded={{ bg: 'whiteAlpha.800', color: 'black' }}
        >
            <Box as="span" flex='1' textAlign='left'>
                <Text
                    fontSize={"1em"}
                    fontWeight={"700"}
                    textTransform={"uppercase"}
                    fontFamily={"var(--font-monserrat)"}
                    w={"fit-content"}
                    paddingInline={"10px"}
                    borderRadius={"3px"}
                    paddingBlock={"2px"}
                >
                    {title}
                </Text>
            </Box>
            <AccordionIcon />
        </AccordionButton>
        
        <AccordionPanel pb={4}>
            {description}
        </AccordionPanel>
    </AccordionItem>    
    )
}

export default Questions;