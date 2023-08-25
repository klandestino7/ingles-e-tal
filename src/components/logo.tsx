import { Image } from "@chakra-ui/react"

const Logo = () => {
    return (
        <>
            <Image 
                src={"./images/logo.png"}
                // style={{
                //     filter: "invert(1)"
                // }}
                alt=""
            />
        </>
    )
}

export default Logo