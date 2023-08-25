'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { useEffect } from "react";

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Forms = () => {

	const bgList = useColorModeValue('white', 'whiteAlpha.100');
	const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');


    // useEffect(() => {
    //     if (window.RDStationForms){
    //         new window.RDStationForms('inglesetal-505172d0d430f57f828c', '').createForm()
    //     }
    // }, [])

    return (
        <Flex
            marginTop={"4vh"}
            w={'full'}
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={"4vh"}
        >
            <Box
                borderBottom={"2px solid var(--color-primary)"}
                w={`full`}
            >
                Inscrição
            </Box>

        </Flex>
    )
}

export default Forms;