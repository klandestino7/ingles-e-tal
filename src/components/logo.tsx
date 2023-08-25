import { Image, useColorMode } from "@chakra-ui/react"

const Logo = () => {
    const { colorMode } = useColorMode()
    return (
        <>
            <Image 
                src={"./images/logo.png"}
                style={{
                    filter: colorMode == "light" ? 'invert(1)' : 'invert(0)'
                }}
                alt=""
            />
        </>
    )
}

export default Logo