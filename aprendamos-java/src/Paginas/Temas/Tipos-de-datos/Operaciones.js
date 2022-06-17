import { Box, Container, Grid, Typography } from "@mui/material";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
//import UserContext from "../../../Contextos/UserContext";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('+', 'Operador de Suma. Concatena cadenas para la suma de String'),
    createData('-', 'Operador de Resta'),
    createData('*', 'Operador de Multiplicación'),
    createData('/', 'Operador de División'),
    createData('%', 'Operador de Resto'),
];

export default function Operaciones() {


    return (
        <Container sx={{ paddingY: 6}}>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop: 5,
                    borderRadius: 2
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center", mb: 3}}>
                            Estructuras secuenciales
                            <br />
                            (Manejo de los tipos de dato)
                        </Typography>
                    </Grid>
                </Box>
                <Grid item container>
                    <Box sx={{
                        paddingX: 7,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,                        
                        borderRadius: 2
                    }}>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            El operador Java más sencillo es el operador de asignación. Mediante este operador se asigna un valor a una variable. El operador de asignación es el símbolo igual.
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            La estructura del operador de asignación es:                            
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify", border: "2px solid", borderRadius: "0.5rem", padding: "0.5rem", width: "8.5rem", marginTop: "1rem"}}
                            variant="h6" component="p">
                            variable = valor;                         
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            Así podemos asignar valores a variables de tipo entero, cadena, booleano, etc.                         
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "start", border: "2px solid", padding: "0.6rem", width: "18rem", marginTop: "1rem", borderRadius: "0.5rem"}}
                            variant="h6" component="p">
                            int numero = 3;<br />
                            String cadena = "Hola Mundo"; <br />
                            double decimal = 4.5; <br />
                            boolean verdad = true; <br />                       
                        </Typography>
                        <br />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{backgroundColor:"regalBlue.main"}}>
                                        <TableCell sx={{fontSize: "1.1rem"}}>Operador</TableCell>
                                        <TableCell sx={{fontSize: "1.1rem"}}>Descripción</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{backgroundColor: "regalBlue.main"}}>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            Los operadores aritméticos en Java los utilizaremos entre dos literales o variables y el resultado, normalmente lo asignaremos a una variable o bien lo evaluamos.                     
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "start", border: "2px solid", padding: "0.6rem", width: "30.5rem", marginTop: "1rem", borderRadius: "0.5rem"}}
                            variant="h6" component="p">
                            variable = (valor1|variable1) operador (valor2|variable2);                    
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            Así podemos tener los siguientes usos en el caso de que queramos asignar su valor.                     
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "start", border: "2px solid", padding: "0.6rem", width: "19rem", marginTop: "1rem", borderRadius: "0.5rem"}}
                            variant="h6" component="p">
                            suma = 3 + 7;             // Retorna 10<br />
                            resta = 5 - 2;            // Retorna 3<br />
                            multiplicacion = 3 * 2;   // Retorna 6 <br />
                            division = 4 / 2;         // Retorna 2 <br />       
                            resto = 5 % 3;            // Retorna 2 <br />                   
                        </Typography>
                        <br />
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            Ten en cuenta que pueden ser valores o variables:              
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "start", border: "2px solid", padding: "0.6rem", width: "50%", marginTop: "1rem", borderRadius: "0.5rem"}}
                            variant="h6" component="p">
                            suma = vble1 + 3;   // Sumamos 3 al valor de la variable vble1<br />
                            resta = vble1 - 4;  // Restamos 4 al valor de la variable vble1
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            O podríamos utilizarlo en una condición                         
                        </Typography>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "start", border: "2px solid", padding: "0.6rem", width: "18rem", marginTop: "1rem", borderRadius: "0.5rem"}}
                            variant="h6" component="p">
                            if (variable &gt; suma + 3)               
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            En este caso no asignamos el resultado de la suma a una variable, solo lo evaluamos.                  
                        </Typography>

                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}>
                            Para modificar el orden de ejecución de las instrucciones de un programa Java se utilizan las estructuras condicionales y repetitivas, las cuales se verán más adelante.
                        </Typography>
                        <br />
                        <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
                            <Grid item sx={{ paddingY:2}}>
                                <VolverAlMenu />
                            </Grid>
                            <Grid item sx={{ paddingY:2}}>
                                <SiguienteTema />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}