import { Avatar, Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react"


const InstagramCard = ({
    username,
    picture
}: {
    username: string,
    picture: string
}) => {
    const bgColor = useColorModeValue("rgba(20,20,20, 0.1)", "rgba(200,200,200, 0.1)")
    
    return (
        <Flex

            bg={bgColor}

            borderRadius={"12px"}

            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"3vh 4vh"}

            direction={"column"}

            gap={"2vh"}
        >
            <Flex    
                position={"relative"}
                w={"150px"}
                h={"150px"}

                justifyContent={"center"}
                alignItems={"center"}
            >
                <UserAvatar
                    url={picture}
                />
            </Flex>

            <Text
            
            >
                @{username}
            </Text>

            <Button
                bg={"linear-gradient(120deg, #C128BF 0%, #EA3C54 100%)"}
                as={"a"}

                href={`https://instagram.com/${username}`}
                target="_blank"
            >
                Seguir @{username}
            </Button>
        </Flex>
    )
}

const UserAvatar = ({
    url
}: {
    url: string
}) => {


    return (
        <>
            <Flex
                borderRadius={"50%"}

                scale={"1.2"}

                w={"100%"}
                h={"100%"}
                position={"absolute"}
                backgroundColor={"#d6249f"}
                bg={"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}
            >

            </Flex>

            <Avatar
                backdropFilter='blur(20px)'
                boxSize={"140px"}
                border={"5px solid #121212"}
                src={url}
            />
        </>
    )
}

export default InstagramCard

