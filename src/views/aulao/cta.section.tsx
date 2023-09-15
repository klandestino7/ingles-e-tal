'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, FormControl, useColorModeValue, Spinner } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

import { useState, useEffect} from "react";

import { FaLongArrowAltRight } from "react-icons/fa"
import { FormProvider, useForm } from 'react-hook-form';
import { SubscribeProps } from '@/types';
import { useSubscribeEmail } from '@/data/email';
import { emailClient } from '@/data/client/email';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Cta = () => {

    const bgList = useColorModeValue('blackAlpha.200', 'whiteAlpha.100');
    const inputBorderColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');
    const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');

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
            <Flex
                marginTop={{base: "2vh", md: "0"}}
                maxW={"1300"}
                >
                <Flex
                    padding={"2vh"}
                    id={"subscription"}

                    border='transparent'
                    backdropFilter='blur(20px)'
                    bg={bgList}
                    boxShadow={bgShadow}
                    direction={"column"}
                    borderRadius={"7px"}

                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                    >

                    <Text
                        fontWeight={"normal"}
                        fontSize={"1.2rem"}
                        fontFamily={"var(--font-monserrat)"}
                        textAlign={"center"}
                        marginBottom={"2vh"}
                        maxW={"500px"}
                    >
                        Inscreva-se agora no método que eu utilizei que me levou à comunicação em inglês em apenas 6 meses
                    </Text>

        
                    <Flex
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"2vh"}
                    >
                        <Button
                            background={"var(--color-primary)"}
                            borderRadius={"15px"}
                            padding={"3.5vh 4vh"}
                            fontSize={{base: "1em", md :"1.2em"}}
                            fontFamily={"var(--font-monserrat)"}
                            fontWeight={"bold"}
                            className={"pulse"}
                            _hover={{
                                background: "var(--color-secondary)"
                            }}
                            as={"a"}
                            href={"https://bit.ly/3EImfnK"}
                            target={"_blank"}
                        >
                            QUERO ME INSCREVER AGORA <Icon marginLeft={"1vh"} as={FaLongArrowAltRight} />
                        </Button>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        )
}

export default Cta;