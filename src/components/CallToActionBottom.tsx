'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import {  useEffect, useState } from "react";

import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const CallToActionBottom = () => {
    const [ display, setDisplay ] = useState(false);

	const bgList = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
	const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');

    const handleScroll = () => {
        const position = window.pageYOffset;
        setDisplay( position >= 700);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <Flex
            display={display ? "flex" : "none"}
            position={"fixed"}
            padding={{base: "1vh", md: "2vh" }}
            h={"fit-content"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
            bottom={"0"}

            border='transparent'
            backdropFilter='blur(20px)'
            bg={bgList}
            boxShadow={bgShadow}

            borderTop={"2px solid"}

            style={{
                borderImageSlice: 1,
                borderImageSource: "radial-gradient(circle, rgba(91, 140, 229,1) 0%, rgba(18,18,18,0) 100%)"
            }}
        >
            <Button
                color={"white"}
                background={"var(--color-secondary)"}
                _focus={{
                    background: "white",
                    color: "var(--color-secondary)"
                }}
                as={"a"}
                href={"https://bit.ly/3EImfnK"}
                target={"_blank"}
            >
                Quero me inscrever agora
            </Button>
        </Flex>
    )
}

export default CallToActionBottom;