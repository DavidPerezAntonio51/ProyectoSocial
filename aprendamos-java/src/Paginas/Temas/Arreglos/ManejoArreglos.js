import * as React from 'react';
import { useContext } from "react";
import { styled } from '@mui/material/styles';
import UserContext from "../../../Contextos/UserContext";
import { Grid, List, ListItem, Typography, Card, CardContent, CardMedia, Paper, TextField } from "@mui/material";
import { Box, Container, textAlign } from "@mui/system";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function ManejoArray() {
    return ( 
        <Container padding = "5" sx={{ paddingY: 6 }}>
            <Grid item sx={{ minWidth: "100%" }}>
                <Box sx={{
                    backgroundColor: 'boticelli.main',
                    color: "black",
                    padding : 7
                }}>
                    <Typography variant = "h4" component = "h2" sx={{ textAlign : "center" }}>
                        ¿COMO MANEJAMOS LOS ARREGLOS?
                    </Typography>
                    <br/>
                    <Typography variant = "h5" component = "h3">
                        <b>Introducción teórica</b>
                    </Typography>
                    <Typography variant = "h5" component = "h3">
                    En la lección pasada vimos lo básico acerca de los arreglos. Vimos que son, para que sirven, como usarlos, 
                    y como acceder y manipular los valores que hay dentro de estos, pero ahora en esta lección veremos más afondo como podemos 
                    movernos entre los arreglos y lo útiles que son estos para muchas tareas dentro de la programación. 
                    Algo fundamental que hay que saber es que para la mayoría de los casos en que queramos trabajar con arreglos será indispensable 
                    el uso de un ciclo FOR ya que este es el que mas se adapta al comportamiento de los arreglos.
                    <br/>
                    <br/>
                    De igual manera para empezar a manipular los arreglos y comenzar a hacer operaciones y un uso mas especializado de 
                    ellos también tendrás que hacer uso de las condicionales ya sea dentro del ciclo que recorre el arreglo o fuera de el 
                    o ambos según tus necesidades, recuerda que la programación es como pintar, la computadora es tu lienzo y tus líneas 
                    de código tus trazos, tu le das la forma a tu código como te creatividad te lo dice, no hay una forma estricta de hacer 
                    las cosas cuando se trata de manejos mas complicados de arreglos o de cualquier otra cosa en la programación. 
                    <br/>
                    <br/>
                    Además de usar ciclos y condicionales, para manipular los arreglos en JAVA es indispensable que utilices algo llamado 
                    “METODOS DE LOS ARREGLOS”, estos no son más que “funciones” que ya están cargadas por default en la librería java.until.Arrays 
                    y nos sirven para con una sola línea de código hacer operaciones y manipulaciones de los elementos de una arreglo, un de los mas famosos 
                    es el método “length” que devuelve un entero con la longitud del arreglo o numero de elementos que caben dentro de el y como este 
                    hay más de 100 métodos diferentes que no pueden ser enseñados en una lección ya que tomaría muchísimo tiempo, pero no es necesario que te aprendas todo esto, 
                    para eso sirven las documentaciones, solo necesitas ir y buscar el método que mas se adapte a tus necesidades. 
                    <br/>
                    <br/>
                    Aquí esta el link de la documentación de los arreglos en JAVA <a href='https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html'>METODOS DE ARREGLOS EN JAVA, DOCUMENTACION OFICIAL</a>, 
                    consúltala siempre que tengas una duda o busques un método para facilitarte alguna actividad. 
                    </Typography>
                </Box>
            </Grid>   
        </Container>
     );
}

export default ManejoArray;