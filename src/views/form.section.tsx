'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Forms = () => {

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
                maxW={"1300"}
                w={"50%"}
            >
                <FormControl isRequired>
                    <Box>
                        <FormLabel>Nome</FormLabel>
                        <Input placeholder='Seu nome' />
                    </Box>

                    <Box>
                        <FormLabel>Seu melhor email</FormLabel>
                        <Input placeholder='seumelhor@email.com' />
                    </Box>
                </FormControl>
            </Box>
        </Flex>
    )
}

export default Forms;