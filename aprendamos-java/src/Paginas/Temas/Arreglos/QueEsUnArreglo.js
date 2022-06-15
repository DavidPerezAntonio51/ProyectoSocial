import * as React from 'react';
import { Grid, List, ListItem, Typography} from "@mui/material";
import { Box, Container } from "@mui/system";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Super1 from '../../../assets/img/ImgListaSuper1.jpg';


function Arreglo() {
    return ( 
        <>
            <Container>
                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                        }}>
                            <Typography variant = "h4" component = "h2" sx={{ textAlign : "center" }}>
                                ¿QUE ES UN ARREGLO?
                            </Typography>
                            <br/>
                            <Typography variant = "h5" component = "h3">
                                Introducción teórica
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
                                            <Avatar alt="Remy Sharp" src={Super1} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 1.- Sopa spaguetti"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="../assets/imgListaSuper2" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 2.- Leche"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="../assets/imgListaSuper3" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 3.- Galletas"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="../assets/imgListaSuper4" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary=" 4.- Jabon para la ropa"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="../assets/imgListaSuper5" />
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
                                    0.- Sopa spaguetti<br/>
                                    1.- Leche<br/>
                                    2.- Galletas<br/>
                                    3.- Jabon para la ropa<br/>
                                    4.- Papel aluminio<br/>
                                    <br/>
                                A la posición que ocupan los elementos en el arreglo se le llama indice, por ejemplo en el arreglo lista del super el elemento
                                Galletas es el elemento con el indice 2 del arreglo.
                                <br/><br/>
                                Antes de pasar al codigo tambien es importante entender que como en la lista de supermercado, podemos identificar cada
                                elemento por el numero que ocupa en la lista, pero al igual que en la vida real no tendria sentido listar elementos de la ferreteria
                                en la lista del super, ya que nunca encontrariamos esos elementos ahi, con los arreglos en JAVA es lo mismo, EN LOS ARREGLOS EN JAVA
                                SOLO PODEMOS ALMACENAR DATOS DEL MISMO TIPO, es decir en un arreglo puedes almacenar los numeros enteros que quieras ya sean 2, 10 o hasta 1000
                                pero todos deben ser numeros enteros y asi para todos los tipos de dato.
                                <br/><br/>
                                En conclusión, ve los arreglos como listas de cosas y numeralas, eso es un arreglo no hay mas ciencia. Esa colección de elementos
                                la vamos a recorrer con un bucle, para poder pasar por todos los elementos y poder acceder al valor de cada uno de ellos, pero dejemonos 
                                de rodeos y vayamos a la aplicacion del codigo para que esto se entienda mejor. 
                            </Typography>
                            <br/>

                            <Typography variant = "h5" component = "h3">
                                Ejemplos con JAVA
                            </Typography>
                            <br/>

                            <Typography variant = "h5" component = "h3">
                                Ejercicios propuestos
                            </Typography>
                            <br/>

                            <Typography variant = "h5" component = "h3">
                                Despues de todo lo visto ha llegado el momento para que pruebes todo lo que has aprendido en esta lección,
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
                                    <li> 
                                        Un arreglo de 5 cadenas de texto que deben ser: 
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
        </>
     );
}

export default Arreglo;