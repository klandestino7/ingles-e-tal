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

export const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
            },
        }),
    },
    fonts,
    colors,
})