import {Box, Container} from "@mui/system";
import {Grid, Typography} from "@mui/material";

function CondicionalElse(props){
    return(
        <>
        <Container >
            <Grid container>
                <Grid item sx={{minWidth:"100%", paddingTop:5}}>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingY: 1, paddingX: 7}}>
                    <Typography variant="h3" component="h4" sx={{textAlign:"center"}}>Sentencia ELSE</Typography>
                        <br />
                        <Typography variant="body1" component="p">En hora buena que terminaste <b>{props.objeto}</b>, con el primer condicional y el más importante para comprender el buen uso y funcionamiento de las sentencias básicas de todo lenguaje.</Typography>
                        <Typography variant="body1" component="p">Ahora abordaremos la situación donde aceptamos el caso contrario al principal. Si retomamos el ejemplo de si tus padres te dicen que te portes bien <b>obtendras el dulce que desees</b> pero si haces todo lo contario <b>obtendras un regaño y talvez puedas estar castigad@</b>.</Typography>
                        <br />
                        <Typography variant="body1" component="p">De modo que utilizando este ejemplo ahora tenemos dos posibilidades, una es portarnos bien o hacer caso omiso, en una obtendremos un dulce para la cena y en la otra un castigo que a nadie le llama la atención. De modo que en comparación con el tema anterior es que tenemos un panorama más completo, el cual nos permite tener una idea completa de como se puede mostrar las diferentes posibilidades que dado nuestro comportamiento tendremos.</Typography>
                        <Typography variant="body1" component="p">Con esto podremos tener una estructura condicional más eficiente y robusta, dado que ahora realizaremos operaciones especificas en casos donde no se satisfaga la condición incial. La cual en contraste con la sentencia IF, no solo tendremos una sola operación por ejecutar, sino que podemos ahora tener dos para capturar los posibles casos.</Typography>
                        <br />
                        <Typography variant="h5" component="h4">Sintaxis</Typography>
                        <Typography variant="body1" component="p">Ahora no creas que lo visto anteriormente ya no lo usaremos, sino que es nuestra base para ir mejorando nuestros conocimientos y con esto tener un mejor desarrollo para entender este lenguaje de programación.</Typography>
                        <Typography variant="body1" component="p">De modo que tendríamos el siguiente ejemplo: </Typography>
                        <br />
                    </Box>
                    <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                        <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
                            <pre >
                            {`public class Main{
    public static void main(String[] args){
        int numero = 5; //Inicializamos el valor de numero con 2
        if(numero > 0 && numero < 3){ //preguntamos ¿numero es mayor a 0 y menor a 3?
            /*  FALSO
            *   Bloque de desarrollo en caso de que sea verdadero
            */
        }else{//caso cuando numero es menor a cero o mayor a 3
            /*  VERDADERO - dado que numero es inicializado en 5
            *   Bloque de desarrollo en caso de que sea falsa la condición
            */
        }
    }
}`}
                            </pre>
                        </Box>
                    </Grid>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingY: 5, paddingX: 7}}>
                        <Typography variant="body1" component="p">Dado el ejemplo anterior, vemos que creamos una variable llamada "numero", la cual es inicializada con el valor de 5, el bloque condicional IF-ELSE, tiene como condición de que si numero esta entre los valores de 0 y 3, en caso de que no, procede a realizar el otro bloque de código que corresponde al ELSE.</Typography>
                        <Typography variant="body1" component="p">Debemos de considerar que tanto este tema como el anterior (Sentencia IF), se pueden realizar sentencias anidadas, esto con la finalidad de considerar todos los posibles casos que una opción puede seguir.</Typography>
                        <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>Ejercicios propuestos</Typography>
                        <Typography variant="body1" component="p">A continuación se mostrará la redacción de los ejercicios básicos que se consideran que los resulvas <b>{props.objeto}</b>, con la finalidad de tener los temas claros y listos para que hagas uso de estos, nota la dificultad de estos es solo para que comprendas el como implementar esta sentencia.</Typography>
                        <Typography variant="body1" component="p">
                            <ol>
                                <li>Escribe un programa que le pida al usuario su edad, si es menor a 18 tendrá que colocar el mensaje de que “Aún no tiene mayoría de edad”, pero el otro caso, tendrá que colocar el mensaje de “Cuenta con la mayoría de edad”.</li>
                                <li>Escribir un programa que le pida un número al usuario, deberá de delimitar si el número es par y mayor a 20, mostrando el mensaje de “Tu número cumple con las condiciones”, en otro caso, deberá mostrar “Tu número puede que no cumpla con las condiciones o solo con una, verifica tu entrada.”.</li>
                                
                            </ol>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>            
        </Container>
        </>
    );
};

export default CondicionalElse;