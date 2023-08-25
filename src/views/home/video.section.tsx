'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

const Video = () => {

    return (
        <Flex
            marginTop={{ base: "10vh", md : "5vh"}}
            marginBottom={{ base: "5vh", md : "0"}}
            padding={{base: "0 2vh", md: "2vh" }}
            h={{ base: "auto", md: "80vh"}}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
        >
            <Box>
                <Image 
                    src="https://via.placeholder.com/1240x698"
                    alt=""
                    // boxSize=""
                />
            </Box>
        </Flex>
    )
}


export default Video;