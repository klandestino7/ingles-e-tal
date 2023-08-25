import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"


const WhatsAppCard = ({
    link,
    picture,
    nome,
}: {
    link: string,
    picture: string,
    nome: string
}) => {
    return (
        <Flex
            bg={"rgba(200,200,200, 0.1)"}

            borderRadius={"12px"}

            justifyContent={"center"}
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
                {nome}
            </Text>

            <Button
                bg={"linear-gradient(120deg, #128C7E 0%, #075E54 100%)"}
                as={"a"}

                href={link}
                target="_blank"
            >
                Acessar agora o grupo
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
                bg={"radial-gradient(circle at 30% 107%, #128C7E 0%, #075E54 5%, #25D366 45%,#075E54 60%,#128C7E 90%)"}
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

export default WhatsAppCard

