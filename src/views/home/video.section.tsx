'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { BsFillCalendarCheckFill, BsFillPlayFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';
// import { getBucketFile } from '@/lib/gcs';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
    const [ useControllers, setControllers ] = useState(false); 

    useEffect(() => {
        // getBucketFile("video-homepage.mov");
    });

    const videoWidth = {
        base: "1240px",
        md: "",
        lg: "1240px"
    }

    return (
        <Flex
            marginTop={{ base: "15vh", md : "10vh"}}
            marginBottom={{ base: "5vh", md : "0"}}
            padding={{base: "0 2vh", md: "2vh" }}
            h={{ base: "auto", md: "80vh"}}
            alignItems={"flex-start"}
            justifyContent={"center"}
            w={'full'}
        >
            <Box
                w={"1240px"}
                h={"698px"}
                position={"relative"}
            >
                {/* <iframe src="https://player.vimeo.com/video/858244973?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                    style={{
                        position: "relative",
                        width: "100%",
                        height:"100%"
                    }} 
                    title="Apresentação">
                    
                </iframe> */}
                
                <ReactPlayer 
                    playing
                    url='https://storage.googleapis.com/douz_bucket_go/video-homepage.mov'
                    width={"100%"}
                    height={"100%"}
                    playIcon={<PlayButton />}
                    onClickPreview={() => { setControllers(true) }}
                    controls={true}
                    light="https://storage.googleapis.com/douz_bucket_go/video01.png"
                />

                {/* <video src={"./videos/capture_page.mov"} /> */}
                {/* <Image 
                    src="https://via.placeholder.com/1240x698"
                    alt=""
                    // boxSize=""
                /> */}
            </Box>
        </Flex>
    )
}

const PlayButton = () => {
    const buttonPlay = { base: "100px", md: "225px"}

    return (
        <Box>
            <Flex>
                <Icon as={BsFillPlayFill} boxSize={buttonPlay} color={"white"} />
            </Flex>
        </Box>
    )
}


export default Video;