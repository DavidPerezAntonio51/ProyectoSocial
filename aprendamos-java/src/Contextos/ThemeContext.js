import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        stratos:{
            main: '#001B48',
            contrastText: '#fff',
        },
        regalBlue:{
            main: '#02457A',
        },
        bondiBlue:{
            main: '#018ABE',
        },
        morningGlory:{
            main: '#97cADB',
        },
        boticelli:{
            main: '#D6E8EE',
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.3,
});

function ThemeContextPersonalizado({children}) {
    return ( 
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
     );
}

export default ThemeContextPersonalizado;