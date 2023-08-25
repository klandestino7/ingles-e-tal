import { extendTheme, DeepPartial, Theme  } from "@chakra-ui/react"

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const fonts: DeepPartial<Theme['fonts']> = {
    heading: 'Satisfy, cursive',
    body: 'Titillium Web, sans-serif',
};

const colorMode = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

export const theme = extendTheme({
    colorMode,
    styles: {
        global: (props: any) => ({
            body: {
            },
        }),
    },
    fonts,
    colors,
})