'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';


const Header = () => {
    const textMaxSize = {base: "full", sm: "600px"};
    const flexWidth = {base: 'full', md: 800, lg: 1300};
    const headingFontSize = { base: "30px", md: "35px", lg: "40px" }
    const subHeadingFontSize = { base: "23px", md: "26px", lg: "30px" }
    const bgMobile = { base: "", md: "url('./images/BG02.png')"}
    const bgMobileBox = { base: "block", md: "none" }

    const colorBgMode = useColorModeValue("255,255,255", "18,18,18")

    return(
        <>
        <Flex
            padding={{base: "0 2vh", md: "2vh" }}
            h={"100vh"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
            bg={bgMobile}
            backgroundSize={"contain !important"}
            backgroundRepeat={"no-repeat !important"}
            backgroundPosition={"right !important"}
            position={"relative"}
        >
            <Flex
                width={flexWidth}
                marginTop={{base: "", md: "5vh"}}
                direction={"column"}
                gap={"4vh"}
                alignItems={{base: "center", sm: "flex-start"}}
                justifyContent={"space-between"}
                paddingBottom={"2vh"}
            >
                <Box
                    display={bgMobileBox}
                    h={"10%"}
                    w={"100vw"}
                    marginBottom={"-10vh"}
                >
                    <Image 
                        src={"./images/BGMOBILE.png"}
                        alt=""
                    />
                </Box>

                <Box
                    marginBottom={"2vh"}
                >
                    <Logo />
                </Box>
                
                <Text
                    maxW={textMaxSize}
                    as={"h2"}
                    fontSize={headingFontSize}
                    lineHeight={"1.2em"}
                    fontWeight={"700"}
                    fontFamily={"var(--font-monserrat)"}
                >
                    Descubra como <TextTaged>aprender inglês</TextTaged> com o que você ama fazer no dia a dia, saindo do <TextTaged>zero à comunicação</TextTaged> em 6 meses
                </Text>

                <Text
                    fontSize={subHeadingFontSize}
                    lineHeight={"1.1em"}
                    fontWeight={"700"}
                    textTransform={"uppercase"}
                    // fontFamily={"var(--font-monserrat)"}
                    background={"var(--color-primary)"}
                    w={"fit-content"}
                    paddingInline={"10px"}
                    borderRadius={"3px"}
                    paddingBlock={"2px"}
                >
                    1 aulão <span>ao vivo e gratuito</span>
                </Text>

                <Flex
                    alignItems={"center"}
                    gap={"10px"}
                >
                    <Icon 
                        as={BsFillCalendarCheckFill}
                        boxSize={"30px"}
                        color={"var(--color-secondary)"}
                    />
                    <Text
                        fontSize={"30px"}
                        lineHeight={"1.1em"}
                        fontWeight={"700"}
                        borderBottom={"2px solid var(--color-secondary)"}
                    >
                        13 de Setembro às 20hs
                    </Text>
                </Flex>


                <Text
                    fontSize={"15px"}
                    lineHeight={"1.1em"}
                    fontWeight={"700"}
                >
                    Clique no botão para garantir a sua fluência 👇🏼
                </Text>

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
            
            <Flex
                position={"absolute"}
                bottom={"2vh"}
                justifyContent={"center"}
                minH={"80px"}
                background={{ base: "", md: `linear-gradient(0deg, rgba(${colorBgMode},1) 0%, rgba(${colorBgMode},1) 10%, rgba(${colorBgMode},0) 100%)`}}
                w={"100%"}
                alignItems={"flex-end"}
                marginBottom={{ base: "6vh", md: "-2vh"}}
            >
                <Icon 
                    as={HiOutlineChevronDoubleDown}
                    boxSize={{base: "4vh", md: "3vh"}}
                    className={"arrowDown"}
                    color={"var(--color-secondary)"}
                />
            </Flex>
        </Flex>
        </>
    );
}


export default Header;