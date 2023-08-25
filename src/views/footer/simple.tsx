import { Box } from "@chakra-ui/react"


const SimpleFooter = () => {

    return (
        <Box
            w={"full"}
            bg={"var(--color-primary)"}
            textAlign={"center"}
            padding={"2vh"}
            color={"black"}
            fontSize={"1.1em"}
        >
            Inglês e Tal - Todos os direitos reservados.
        </Box>
    )
}

export default SimpleFooter;