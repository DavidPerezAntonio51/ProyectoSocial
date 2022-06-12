import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        stratos:{
            main: '#001B48',
            contrastText: '#fff',
        },
        regalBlue:{
            main: '#02457A',
            contrastText: '#fff',
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