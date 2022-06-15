import * as React from 'react';
import { useContext } from "react";
import { styled } from '@mui/material/styles';
import UserContext from "../../../Contextos/UserContext";
import { Grid, List, ListItem, Typography, Card, CardContent, CardMedia, Paper, TextField } from "@mui/material";
import { Box, Container, textAlign } from "@mui/system";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Super1 from '../../../assets/img/ImgListaSuper1.jpg';
import Super2 from '../../../assets/img/imgListaSuper2.png';
import Super3 from '../../../assets/img/imgListaSuper3.jpg';
import Super4 from '../../../assets/img/imgListaSuper4.jpg';
import Super5 from '../../../assets/img/imgListaSuper5.jpg';
import arre1 from '../../../assets/img/imgArreglos1.jpg';
import arre2 from '../../../assets/img/imgArreglos2.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Arreglo() {
    const Usuario = useContext(UserContext);
    return ( 
        <Container padding = "5" sx={{ paddingY: 6 }}>    
            <Grid>
                <Grid item sx={{ minWidth: "100%" }}>
                    <Box sx={{
                        backgroundColor: 'boticelli.main',
                        color: "black",
                        padding : 7
                    }}>
                        <Typography variant = "h4" component = "h2" sx={{ textAlign : "center" }}>
                            ¿QUE ES UN ARREGLO?
                        </Typography>
                        <br/>
                        <Typography variant = "h5" component = "h3">
                            <b>Introducción teórica</b>
                        </Typography>
                        <br/>
                        <Typography variant = "h5" component = "h3">
                            En términos técnicos un arreglo o tambien llamado vector es una colección ordenada
                            de datos y estos datos como vimos en lecciones anteriores
                            tiene un tipo de dato.
                        </Typography>
                        <br/>
                        <Typography variant = "h5" component = "h3">
                                En términos más simples un arreglo no es más que una "lista"
                                que contiene una serie de datos que nosotros le asignamos
                                desde la declaración del mismo o el el transcurso de la ejecución del
                                programa.
                        </Typography>
                        <br/>
                        <Typography variant = "h5" component = "h3">
                            Como toda lista ya sea la del supermercado o una lista de tareas todas tienen 
                            un numero asociado al elemento que se está listando, por ejemplo, imaginemos 
                            que tenemos la siguiente lista de compras del supermercado: <br/>
                            Lista: 
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src = {Super1} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary=" 1.- Sopa spaguetti"
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src = {Super2} />
                                    </ListItemAvatar>
                                        <ListItemText
                                        primary=" 2.- Leche"
                                        />
                                </ListItem>
                                <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src = {Super3} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 3.- Galletas"
                                        />
                                </ListItem>
                                <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src = {Super4}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 4.- Jabon para la ropa"
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src = {Super5} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary=" 5.- Papel aluminio"
                                    />
                                </ListItem>
                            </List>
                            Bien pues aunque no lo creas esta lista de supermercado comparte muchisimas cosas con los arreglos
                            y tienen el mismo comportamiento ¿como es esto?
                            <br/><br/>
                            Esta lista de supermercado tiene 5 elementos que estan numerados en orden descendente del 1 al 5
                            en los arreglos pasa lo mismo los elementos dentro de la coleccion estan numerados de orden descendente
                            solo que a diferencia de lo que estamos acostumbrados la numeracion de los arreglos inicia en 0, ESTO ES MUY 
                            IMPORTANTE que lo recuerdes, la numeracion de los elementos de los arreglos inicia en 0, es decir 
                            la misma lista de de supermercado dentro de un arreglo estaria numerada asi: <br/>
                                <center>
                                0.- Sopa spaguetti<br/>
                                1.- Leche<br/>
                                2.- Galletas<br/>
                                3.- Jabon para la ropa<br/>
                                4.- Papel aluminio<br/>
                                <br/>
                                </center>
                            A la posición que ocupan los elementos en el arreglo se le llama indice, por ejemplo en el arreglo lista del super el elemento
                            Galletas es el elemento con el indice 2 del arreglo.

                            <Grid sx = {{textAlign : "center", padding : 5}}>
                                <img src = {arre2} height = "300" width = "550"/>
                            </Grid>
                                
                            En la imagen podemos ver como se comporta un arreglo, vemos que inicia en la posición 0 y termina
                            en la n-1 donde n es la longitud del arreglo.
                            <br/><br/>

                            Antes de pasar al codigo tambien es importante entender que como en la lista de supermercado, podemos identificar cada
                            elemento por el numero que ocupa en la lista, pero al igual que en la vida real no tendria sentido listar elementos de la ferreteria
                            en la lista del super, ya que nunca encontrariamos esos elementos ahi, con los arreglos en JAVA es lo mismo, <i>EN LOS ARREGLOS EN JAVA
                            SOLO PODEMOS ALMACENAR DATOS DEL MISMO TIPO</i>, es decir en un arreglo puedes almacenar los numeros enteros que quieras ya sean 2, 10 o hasta 1000
                            pero todos deben ser numeros enteros y asi para todos los tipos de dato.

                            <Grid sx = {{textAlign : "center", padding : 5}}>
                                <img src = {arre1} height = "200" width = "550"/>
                            </Grid>
                                
                                En la imagen vemos otra forma de representar los arreglos como vectores, y observamos nuevamente
                                como se comportan los indices de un arreglo
                                <br/><br/>
                                En conclusión, ve los arreglos como listas de cosas y numeralas, eso es un arreglo no hay mas ciencia. Esa colección de elementos
                                la vamos a recorrer con un bucle, para poder pasar por todos los elementos y poder acceder al valor de cada uno de ellos, pero dejemonos 
                                de rodeos y vayamos a la aplicacion del codigo para que esto se entienda mejor. 
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            padding : 7
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>Ejemplos con JAVA</b><br/>
                                <b>¿Como se declara un arreglo?</b>
                                <Grid item sx={{ p : 0 }}>
                                    <Box sx = { { width : "100%", height : "40%", backgroundColor : "#111111", color : "#e1e7f2", p : 1}}>
                                        <div>
                                            <TextField
                                            id="outlined-read-only-input"
                                            label=""
                                            defaultValue="Hello World"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            />
                                        </div>
                                    </Box>
                                </Grid>
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>
                
                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            padding : 7
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b></b>
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>


                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            padding : 7
                        }}>
                            <Typography variant = "h5" component = "h3">
                            <b>¿Como modificar los valores de un indice en particular?</b>
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            padding : 7
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>¿Como se imprime un arreglo?</b>
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            padding : 7
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>Ejercicios propuestos</b>
                            </Typography>
                            <br/>

                            <Typography variant = "h5" component = "h3">
                                Despues de todo lo visto ha llegado el momento para que tu {Usuario.User} pruebes todo lo que has aprendido en esta lección,
                                recuerda que tendras a la mano las respuestas por si tienes alguna duda pero intenta hacerlos por tu cuenta para 
                                que aprendas. <br/>
                                ¡EXITO!
                            </Typography>

                            <Typography variant = "h5" component = "h3">
                                Ejercicio 1. <br/>
                                Declara 3 arreglos
                                <ul>
                                    <li> Un arreglo de 10 numeros enteros </li>
                                    <li> Un arreglo de las primeras 10 letras del alfabeto </li>
                                    <li> Un arreglo de 5 cadenas de texto que deben ser: 
                                    <ol>
                                        <li> Tu primer nombre </li>
                                        <li> Tu primer apellido </li>
                                        <li> Tu segundo apellido </li>
                                        <li> El numero de tu edad escrito con letras </li>
                                        <li> Tu jobie favorito </li>
                                    </ol>
                                </li>
                            </ul>
                        </Typography>
                        <br/>

                        <Typography variant = "h5" component = "h3">
                            Ejercicio 2. <br/>
                            Con los 3 arreglos declarados del ejercicio 1, imprime lo siguiente: 
                            <ul>
                                <li> Los elementos 0, 5 y 9 del arreglo de numeros enteros </li>
                                <li> Los elementos 0, 1, 7 y 8 del arreglo de las letras del alfabeto </li>
                                <li> Imprime los elementos necesarios del arreglo de cadenas para formar tu nombre completo </li>
                            </ul>
                        </Typography>
                        <br/>

                        <Typography variant = "h5" component = "h3">
                            Ejercicio 3. <br/>
                            Declara 2 arreglos, los dos de 5 elementos, el primero debe contener cadenas correspondientes
                            a los nombres de tus 5 mejores amigos, en el segundo deben ir las edades de cada uno de ellos
                            imprime en consola lo siguiente: <br/>
                            "Hola mi amigo numero 1 es 'NOMBRE DE TU AMIGO' y su edad es: 'EDAD DE TU AMIGO'"
                            Asi hasta listar a tus 5 amigos del 1 al 5.
                        </Typography>
                        <br/>
                    </Box>
                </Grid>   
            </Grid>          
        </Container>
        
    );
}

export default Arreglo;