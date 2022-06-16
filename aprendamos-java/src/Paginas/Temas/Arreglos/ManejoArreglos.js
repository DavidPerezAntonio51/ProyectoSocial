import * as React from 'react';
import { useContext } from "react";
import UserContext from "../../../Contextos/UserContext";
import { Grid, Typography } from "@mui/material";
import { Box, Container} from "@mui/system";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import ArreglosInicial from './ArreglosInicial';
function ManejoArray() {
    const Usuario = useContext(UserContext);
    return ( 
        <Container padding = "5" sx={{ paddingY: 6 }}>
            <Grid item sx={{ minWidth: "100%" }}>
                <Box sx={{
                    backgroundColor: 'boticelli.main',
                    color: "black",
                    padding : 7
                }}>
                    <ArreglosInicial nombreUser ={Usuario.User}></ArreglosInicial>
                        <br/>
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

            <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
                            paddingX : 7,
                            paddingY : 2
                        }}>
                            <Typography variant = "h5" component = "h3" sx={{textAlign:"center"}}>
                                <b>Ejemplos con JAVA</b><br/>
                            </Typography>
                            <Typography variant = "h5" component = "h3">
                                <b>Encontrar en un arreglo de 10 números enteros el número mas grande</b><br/>
                                Para este ejercicio haremos uso de los arreglos evidentemente y de las condicionales 
                                como se muestra a continuación: 
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>

                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                    <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                        <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaramos e inicializamos un arreglo de 10 numeros
        int[] numeros = new int[] { 28, 50, 40, 200, 20, 44, 100, 153, 10, 1 };
        
	//Declaramos una variable donde guardamos el elemento 0 del arreglo
        //Y asumimos que ese es el mas grande del arreglo
	int mayor = numeros[0];
        
        //Inicializamos un for que recorra todo el arreglo y ver si no es asi
	// (comenzar desde el 1 porque el 0 ya lo tenemos contemplado arriba)
	for (int x = 1; x < numeros.length; x++) {
            //Comparamos el elemento que en ese momento se itera en el for con la variable mayor
            if (numeros[x] > mayor) {
                //De cumplirse la condicion asignamos a mayor el nuevo valor
                //del elemento que en ese momento se itera
		mayor = numeros[x];
            }
	}
    
    //Imprimimos el elemento mayor resultado del proceso de arriba
	System.out.println("El elemento mayor del arreglo es: " + mayor);
    }
}`}
                        </Typography>
                    </Box>
                </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
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
                            color: "black",
                            paddingX : 7,
                            paddingY : 2
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>Imprimir la suma y multiplicación de un arreglo de 10 numeros enteros</b><br/>
                                Para este ejercicio usaremos acumuladores para almacenar la iteracion de la suma
                                y multiplicación de los elementos del arreglo, como se muestra a continuación:
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>
                
                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                    <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                        <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    //Declaramos e inicializamos un arreglo de 10 numeros
    int[] numeros = new int[] { 1,2,3,4,5,6,7,8,9,10 };
    
    /*Declaramos una variable donde se acumulara la suma
    La inicializamos en 0 para que acumule desde el primer valor de arreglo*/
    int suma = 0;
    
     /*Declaramos una variable donde se acumulara la multiplicacion
    La inicializamos en 1 para que acumule desde el primer valor de arreglo*/
    int multiplicacion = 1;
    
    //Inicializamos un for que recorra el arreglo
    for(int i = 0; i < numeros.length; i++){
        //Acumulamos la suma, vemos que aqui se acumulara elemento 0 + elemento 1.....
        suma = suma + numeros[i];
        
        //Acumulamos la multiplicacion, vemos que aqui se acumulara elemento 0 * elemento 1.....
        multiplicacion = multiplicacion * numeros[i];
    }

    //Imprimimos el resultado de ambos acumuladores
    System.out.println("La suma de todos los elementos del arreglo es: "+suma);
    System.out.println("La multiplicacion de todos los elementos del arreglo es: "+multiplicacion);
    }
}`}
                        </Typography>
                    </Box>
                </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
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
                            color: "black",
                            paddingX : 7,
                            paddingY : 2
                        }}>
                            <Typography variant = "h5" component = "h3">
                                <b>Que el usuario ingrese a traves del teclado 5 numeros enteros y ordenarlos de manera ascendente</b><br/>
                                Para este ejercicio recurriremos a lecciones pasadas como el Scanner de JAVA y tambien recurriremos a 
                                el uso delos metodos de los arreglos, como se muestra a continuación: 
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid>
                <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                    <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                        <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        //Declaracion de arreglo de 5 numeros enteros
        int arregloEnteros[]; //Declaracion del arreglo con su tipo de dato
        arregloEnteros = new int[5]; //Asignacion de tamaño
        
        //Declaramos el Scanner que nos servira para ingresar valores por el teclado
        Scanner sc = new Scanner(System.in);
        
        //Inicializamos un for que recorra todo el arreglo
        for(int i = 0; i < arregloEnteros.length; i++){
            //Pedimos los valores al usuario
            System.out.println("Ingresa un numero: ");
            arregloEnteros[i] = sc.nextInt();
        }
        
        System.out.println("El arreglo ya con valores es: ");
        //Inicializamos un for que recorra todo el arreglo
        for(int i = 0; i < arregloEnteros.length; i++){
            //Imprimimos el arreglo lleno
            System.out.println("Indice "+i+" Valor: "+arregloEnteros[i]);
        }
        
        //Llamamos al metodo sort que ordenara los datos por nosotros
        //Vease en la documentacion de JAVA
        Arrays.sort(arregloEnteros);
        
        System.out.println("El arreglo ordenado de forma ascendente es: ");
        //Inicializamos un for que recorra todo el arreglo
        for(int i = 0; i < arregloEnteros.length; i++){
            //Imprimimos el arreglo ordenado
            System.out.println("Indice "+i+" Valor: "+arregloEnteros[i]);
        }
    }
}`}
                        </Typography>
                    </Box>
                </Grid>

                <Grid container>
                    <Grid item sx={{ minWidth: "100%" }}>
                        <Box sx={{
                            backgroundColor: 'boticelli.main',
                            color: "black",
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
                                Que el usuario llene un arreglo de 5 numeros y que el programa imprima los 
                                elementos ordenados de manera ascendente, descendente y el numero elevado a la potencia 2
                        </Typography>
                        <br/>

                        <Typography variant = "h5" component = "h3">
                            Ejercicio 2. <br/>
                            Crear un arreglo con 5 cadenas, unir las 5 cadenas en una sola e imprimir cuantos caracteres tiene
                            la nueva cadena
                        </Typography>
                        <br/>

                        <Typography variant = "h5" component = "h3">
                            Ejercicio 3. <br/>
                            Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres. 
                            Puedes hacer con o sin métodos de String.
                        </Typography>

                        <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
                            <Grid item sx={{ paddingY:2}}>
                                <VolverAlMenu />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>   
            </Grid> 
        </Container>
     );
}

export default ManejoArray;