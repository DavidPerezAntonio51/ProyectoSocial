import * as React from 'react';
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import { Grid, List, ListItem, Typography} from "@mui/material";
import { Box, Container} from "@mui/system";
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
import ArreglosInicial from './ArreglosInicial';


function Arreglo() {
    const Usuario = useContext(UserContext);
    return ( 
        <Container padding = "5" sx={{ paddingY: 6 }}>    
            <Grid>
                <Grid item sx={{ minWidth: "100%" }}>
                    <Box sx={{
                        backgroundColor: 'boticelli.main',
                        color: "regalBlue.main",
                        padding : 7
                    }}>
                        <ArreglosInicial nombreUser ={Usuario.User}></ArreglosInicial>
                        <br/>
                        <Typography variant = "h4" component = "h2" sx={{textAlign:"center", paddingBottom:2, paddingTop:0.5}}>
                            ¿QUE ES UN ARREGLO?
                        </Typography>
                        <br/>
                        <Typography variant = "h5" component = "h3">
                            <b>Introducción teórica</b>
                        </Typography>
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
                
                <Grid item sx={{ minWidth: "100%" }}>
                    <Box sx={{
                        backgroundColor: 'boticelli.main',
                        color: "regalBlue.main",
                        paddingX : 7,
                        paddingY : 2
                    }}>
                        <Typography variant = "h5" component = "h3" sx={{textAlign:"center"}}>
                            <b>Ejemplos con JAVA</b><br/>
                        </Typography>
                        <Typography  variant = "h5" component = "h3">
                            <b>¿Como se declara un arreglo?</b><br/>
                            La sintaxis para declarar un arreglo es la siguiente:<br/><br/>
                            tipo_de_dato nombre_del_arreglo[];<br/>
                            nombre_del_arreglo = new tipo_de_dato[tamaño];<br/>
                            <br/>
                            A continuación se muestra el codigo en java para declarar arreglos: 
                        </Typography>
                    </Box>
                </Grid>   
                
                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                                <Box sx={{width:"90%", height:"40%", maxWidth : "calc(60w - 32px)", overflowX : "auto",overflowY : "unset",backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                                    <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaracion de arreglo de 10 numeros enteros
        int arregloEnteros[]; //Declaracion del arreglo con su tipo de dato
        arregloEnteros = new int[10]; //Asignacion de tamaño

        //Declaracion de arreglo de 10 caracteres
        char arregloCaracteres[];
        arregloCaracteres = new char[10];

        //Declaracion de arreglo de 3 cadenas
        String arregloCadenas[];
        arregloCadenas = new String[3];
    }
}`}
                                    </Typography>
                                </Box>
                            </Grid>

                <Grid item sx={{ minWidth: "100%" }}>
                    <Box sx={{
                        backgroundColor: 'boticelli.main',
                        color: "regalBlue.main",
                        paddingX : 7,
                        paddingY : 2
                    }}>
                        <Typography  variant = "h5" component = "h3">
                        Si quisieramos asignar valores iniciales a los arreglos tenemos que hacerlo desde la declaración
                        como se muestra a continuación: 
                        </Typography>
                    </Box>
                </Grid> 

                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                                <Box sx={{width:"90%", height:"40%",maxWidth : "calc(60w - 32px)", overflowX : "auto",overflowY : "unset",backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                                    <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaracion e inicializacion de un arreglo con 10 numeros
        //Comienza por el tipo de dato que almacenara el arreglo
        //Segido de los corchetes caracteristicos de un arreglo
        //Despues el nombre que le queremos poner a nuestro arreglo
        //Se iguala a una lista de numeros entre llaves y separados por comillas
        //Cada numero forma un indice de arreglo
        int [] arregloEnteros = {1,2,3,4,5,6,7,8,9,0};
    }
}`}
                                    </Typography>
                                </Box>
                            </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "regalBlue.main",
                            paddingX : 7,
                            paddingY : 2
                        }}>
                            <Typography variant = "h5" component = "h3">
                            <b>¿Como modificar los valores de un indice en particular?</b><br/>
                            Retomando el ejemplo anterior usameos el arreglo que inicializamos con 10 números enteros
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>

                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                                <Box sx={{width:"90%", height:"40%",maxWidth : "calc(60w - 32px)", overflowX : "auto",overflowY : "unset", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                                    <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaracion e inicializacion de un arreglo con 10 numeros
        int [] arregloEnteros = {1,2,3,4,5,6,7,8,9,0};
        
        //imprimimos el valor de la posicion 0 del arreglo
        System.out.println("El valor del indice 0 del arreglo es: "+arregloEnteros[0]);
        
        /*Asignamos a la posicion 0 del arreglo que contiene inicialmente
        un 1 el numero 5*/
        arregloEnteros[0] = 5;
        
        //imprimimos el valor de la posicion 0 del arreglo despues del cambio
        System.out.println("El nuevo valor del indice 0 del arreglo es: "+arregloEnteros[0]);
        
        
        //Tambien podemos asignarle el valor de una variable
        
        //Declaramos e inicializamos una numero entero
        int nuevoNumero = 10;
        
        //imprimimos el valor de la posicion 5 del arreglo
        System.out.println("El valor del indice 5 del arreglo es: "+arregloEnteros[5]);
        
        /*Asignamos a la posicion 5 del arreglo que contiene inicialmente
        un 6 el valor de la variable nuevoNumero que es 10*/
        arregloEnteros[5] = 10;
        
        //imprimimos el valor de la posicion 5 del arreglo despues del cambio
        System.out.println("El nuevo valor del indice 5 del arreglo es: "+arregloEnteros[5]);
    }
}`}
                                    </Typography>
                                </Box>
                            </Grid>

                    <Grid container>
                        <Grid item sx={{ minWidth: "100%" }}>
                            <Box sx={{
                                backgroundColor: 'boticelli.main',
                                color: "regalBlue.main",
                                paddingX : 7,
                                paddingY : 2
                            }}>
                                <Typography variant = "h5" component = "h3">
                                Resultado en la consola: 
                                </Typography>
                            </Box>
                        </Grid>   
                    </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "regalBlue.main",
                            paddingX : 7,
                            paddingY : 2
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>¿Como se imprime un arreglo?</b><br/>
                                Para imprimir un arreglo tenemos que hacer uso del ciclo for ya que no seria conveniente hacerlo con 
                                10 System.out.println como en el ejemplo anterior porque esto representaria un problema cuando tuvieramos arreglos
                                muy grandes, imagina un arreglo de 10,000 numeros, nunca acabariamos de escribir 10,000 System.out.println pero el ciclo
                                for nos facilita esto, ya veras como: 
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>

                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                                <Box sx={{width:"90%", height:"40%", maxWidth : "calc(60w - 32px)", overflowX : "auto",overflowY : "unset",backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                                    <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaracion e inicializacion de un arreglo con 10 numeros
        int [] arregloEnteros = {1,2,3,4,5,6,7,8,9,0};
        
        /*Creamos un ciclo for que inicie en 0 y termine en 9
          Asi recorremos las 10 posiciones de nuestro arreglo
          Para acceder a la longitud de nuestro arreglo sin tener que contar 
          cuantos elementos tiene dentro usamos el metodo length, que
          devuelve la longitud de nuestro arreglo, en este caso es 10, por ello
          para que vaya de 0 a 9 ponemos el menor que*/
        for(int i = 0; i < arregloEnteros.length; i++){
            /*Podemos un System.out.println dentro del for para que este
            se muestre en la consola el mismo numero de veces que se itera el for*/
            System.out.println("El indice "+i+"del arreglo es el numero: "+arregloEnteros[i]);
            /*Por ultimo y como vemos en la linea de arriba, imprimimos a i que funcionara
            como nuestro indice del arreglo e imprimimos lo que hay en el arreglo en ese indice
            ves que i inicia en 0, pues se imprime el contador de indice 0 y el elemento 0
            del arreglo y asi sucesivamente*/
        
        
}`}
                                    </Typography>
                                </Box>
                            </Grid>

                    <Grid container>
                        <Grid item sx={{ minWidth: "100%" }}>
                            <Box sx={{
                                backgroundColor: 'boticelli.main',
                                color: "regalBlue.main",
                                paddingX : 7,
                                paddingY : 2
                            }}>
                                <Typography variant = "h5" component = "h3">
                                Resultado en la consola: 
                                </Typography>
                            </Box>
                        </Grid>   
                    </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "regalBlue.main",
                            padding : 7
                        }}>
                            <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>
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
                                Declara 3 arreglos con las siguientes caracteristicas: 
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

export default Arreglo;