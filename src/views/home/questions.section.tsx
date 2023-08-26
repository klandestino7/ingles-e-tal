'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';


const QuestionsArr = [
    {
        title:  "Isso é muito difícil de entender?",
        description: `Não, a Jornada do Zero à comunicação é um evento online e gratuito onde vou te ajudar
        te dando todas explicações necessárias para sua melhor compreensão de todas as informações entregues na Jornada. `
    },
    {
        title:  "Não sei se isso é pra mim!",
        description: `A Jornada do Zero à Comunicação é para quem está querendo aprender de uma vez por todas a se comunicar em inglês. `
    },
    {
        title:  "Preciso ter algum conhecimento básico com inglês?",
        description: `A Jornada do Zero à Comunicação é para pessoas do zero ao intermediário, vamos lhe ajudar a
        se comunicar com segurança e tranquilidade para conduzir uma conversa em inglês.`
    },
    {
        title:  "Não tenho tempo para assistir ao vivo",
        description: `A Jornada ficará disponível por tempo limitado, mas você poderá assistir no dia seguinte ao evento gravado.`
    },
    {
        title:  "Estou inseguro se vou conseguir aprender ou não!",
        description: `A Jornada do Zero à Comunicação é um evento ao vivo e gratuito focado em te ajudar de uma forma clara
        e pratica, você terá todo suporte para tirar suas dúvidas facilitando o seu aprendizado.`
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

	const bgList = useColorModeValue('blackAlpha.200', 'whiteAlpha.100');
	const bgExpdanded = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
	const colorExpanded = useColorModeValue('white', 'black');

    return (
        <AccordionItem
            w={"full"}
        >
        <AccordionButton
            bg={bgList}
            _hover={{
                background: "whiteAlpha.400"
            }}
            _expanded={{ bg: bgExpdanded, color: colorExpanded }}
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