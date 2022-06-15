import * as React from 'react';
import { Grid, List, ListItem, Typography} from "@mui/material";
import { Box, Container } from "@mui/system";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


function Arreglo() {
    return ( 
        <>
            <Container>
                <Grid Container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            color: "black",
                        }}>
                            <Typography variant = "h4" component = "h2" sx={{ textAlign : "center" }}>
                                ¿QUE ES UN ARREGLO?
                            </Typography>

                            <Typography variant = "h5" component = "h3">
                                En términos técnicos un arreglo o tambien llamado vector es una colección ordenada
                                de datos y estos datos como vimos en lecciones anteriores
                                tiene un tipo de dato.

                            </Typography>

                            <Typography variant = "h5" component = "h3">
                                En términos más simples un arreglo no es más que una "lista"
                                que contiene una serie de datos que nosotros le asignamos
                                desde la declaración del mismo o el el transcurso de la ejecución del
                                programa.
                            </Typography>

                            <Typography variant = "h5" component = "h3">
                                Como toda lista ya sea la del supermercado o una lista de tareas todas tienen 
                                un numero asociado al elemento que se está listando, por ejemplo, imaginemos 
                                que tenemos la siguiente lista de compras del supermercado: 
                                <br/>
                                Lista: 
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="..\assets\" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 1.- Sopa spaguetti"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 2.- Leche"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 3.- Galletas"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 4.- Jabon para la ropa"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 5.- Papel aluminio"
                                        />
                                    </ListItem>
                                </List>
                                Bien pues aunque no lo creas esta lista de supermercado comparte muchisimas cosas con los arreglos
                                y tienen el mismo comportamiento ¿como es esto?
                                <br/>
                                Esta lista de supermercado tiene 5 elementos que estan numerados en orden descendente del 1 al 5
                                en los arreglos pasa lo mismo los elementos dentro de la coleccion estan numerados de orden descendente
                                solo que a diferencia de lo que estamos acostumbrados la numeracion de los arreglos inicia en 0, ESTO ES MUY 
                                IMPORTANTE que lo recuerdes, la numeracion de los elementos de los arreglos inicia en 0, es decir 
                                la misma lista de de supermercado dentro de un arreglo estaria numerada asi: <br/>
                                    0.- Sopa spaguetti<br/>
                                    1.- Leche<br/>
                                    2.- Galletas<br/>
                                    3.- Jabon para la ropa<br/>
                                    4.- Papel aluminio<br/>
                                    <br/>
                                A la posicion que ocupan los elementos en el arreglo se le llama indice, por ejemplo en el arreglo lista del super el elemento
                                Galletas es el elemento con el indice 2 del arreglo.
                                <br/>
                                Antes de pasar al codigo tambien es importante entender que como en la lista de supermercado, podemos identificar cada
                                elemento por el numero que ocupa en la lista, pero al igual que en la vida real no tendria sentido listar elementos de la ferreteria
                                en la lista del super, ya que nunca encontrariamos esos elementos ahi, con los arreglos en JAVA es lo mismo, EN LOS ARREGLOS EN JAVA
                                SOLO PODEMOS ALMACENAR DATOS DEL MISMO TIPO, es decir en un arreglo puedes almacenar los numeros enteros que quieras ya sean 2, 10 o hasta 1000
                                pero todos deben ser numeros enteros y asi para todos los tipos de dato.
                                <br/>
                                En conclusión, ve los arreglos como listas de cosas y numeralas, eso es un arreglo no hay mas ciencia. Esa colección de elementos
                                la vamos a recorrer con un bucle, para poder pasar por todos los elementos y poder acceder al valor de cada uno de ellos, pero dejemonos 
                                de rodeos y vayamos a la aplicacion del codigo para que esto se entienda mejor. 
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
     );
}

export default Arreglo;