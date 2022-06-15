import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        stratos:{
            main: '#001B48',
            contrastText: '#D6E8EE',
        },
        regalBlue:{
            main: '#02457A',
            contrastText: '#D6E8EE',
        },
        bondiBlue:{
            main: '#018ABE',
            contrastText: '#D6E8EE',
        },
        morningGlory:{
            main: '#97cADB',
            contrastText: '#001B48',
        },
        boticelli:{
            main: '#D6E8EE',
            contrastText: '#001B48',
        },
        text:{
            primary: '#D6E8EE',
            secondary: '#001B48'
        }
    },
    contrastThreshold: 10,
    tonalOffset: 0.8,
});

function ThemeContextPersonalizado({children}) {
    return ( 
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
     );
}

export default ThemeContextPersonalizado;