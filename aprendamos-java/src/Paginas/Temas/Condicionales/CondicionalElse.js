import {Box, Container} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";
import { useContext } from "react";


function CondicionalElse(){
    const Usuario = useContext(UserContext);
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return(
        <>
        <Container >
            <Grid container>
                <Grid item sx={{minWidth:"100%", paddingTop:5}}>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingY: 1, paddingX: 7}}>
                    <Typography variant="h3" component="h4" sx={{textAlign:"center"}}>Sentencia ELSE</Typography>
                        <br />
                        <Typography variant="body1" component="p">En hora buena que terminaste <b>{Usuario.User}</b>, con el primer condicional y el más importante para comprender el buen uso y funcionamiento de las sentencias básicas de todo lenguaje.</Typography>
                        <Typography variant="body1" component="p">Ahora abordaremos la situación donde aceptamos el caso contrario al principal. Si retomamos el ejemplo de si tus padres te dicen que te portes bien <b>obtendras el dulce que desees</b> pero si haces todo lo contario <b>obtendras un regaño y talvez puedas estar castigad@</b>.</Typography>
                        <br />
                        <Typography variant="body1" component="p">De modo que utilizando este ejemplo ahora tenemos dos posibilidades, una es portarnos bien o hacer caso omiso, en una obtendremos un dulce para la cena y en la otra un castigo que a nadie le llama la atención. De modo que en comparación con el tema anterior es que tenemos un panorama más completo, el cual nos permite tener una idea completa de como se puede mostrar las diferentes posibilidades que dado nuestro comportamiento tendremos.</Typography>
                        <Typography variant="body1" component="p">Con esto podremos tener una estructura condicional más eficiente y robusta, dado que ahora realizaremos operaciones especificas en casos donde no se satisfaga la condición incial. La cual en contraste con la sentencia IF, no solo tendremos una sola operación por ejecutar, sino que podemos ahora tener dos para capturar los posibles casos.</Typography>
                        <br />
                        <Typography variant="h5" component="h4">Sintaxis</Typography>
                        <Typography variant="body1" component="p">Ahora no creas que lo visto anteriormente ya no lo usaremos, sino que es nuestra base para ir mejorando nuestros conocimientos y con esto tener un mejor desarrollo para entender este lenguaje de programación.</Typography>
                        <Typography variant="body1" component="p">De modo que tendríamos el siguiente ejemplo: </Typography>
                        <br />
                        <Grid item sx={{p:1, backgroundColor: "stratos.main"}}>
                            <Typography variant="h6" sx={{paddingX:4, paddingY:1}}>
                                <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:15}}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}{"int numero;"}
                                    <br />
                                    {tab}{tab}{"if(expresion){"}
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"/* VERDADERO"}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"* Bloque de desarrollo en caso de que sea verdadero"}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"*/"}</span>
                                    <br />
                                    {tab}{tab}{"}else{"}<span className="comentario">{'//caso contrario a la expresion ungresada'}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"/* FALSO"}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"* Bloque de desarrollo en caso de que sea falsa la condición"}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{"*/"}</span>
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </Grid>
                        <Typography variant="h5" component="h4" sx={{paddingTop:2,paddingBottom:2, paddingY:2}}>Ejemplo:</Typography>
                        <br />
                        <Grid item sx={{p:1, backgroundColor: "stratos.main"}}>
                            <Typography variant="h6" sx={{paddingX:4, paddingY:1}}>
                                <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:15}}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}{"int numero = 5;"}&nbsp;&nbsp;<span className="comentario">{'//Inicializamos el valor de numero con 2'}</span>
                                    <br />
                                    {tab}{tab}{"if(numero > 0 && numero < 3){"}&nbsp;&nbsp;<span className="comentario">{'//preguntamos ¿numero es mayor a 0 y menor a 3?'}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"/* FALSO"}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"* Bloque de desarrollo en caso de que sea verdadero"}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"*/"}</span>
                                    <br />
                                    {tab}{tab}{"}else{"}&nbsp;&nbsp;<span className="comentario">{'//caso cuendo numero es menor a cero o mayor a 3'}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"/* VERDADERO - dado que numero es inicializado con 3"}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"* Bloque de desarrollo en caso de que sea falsa la condición"}</span>
                                    <br />
                                    {tab}{tab}{tab}&nbsp;&nbsp;<span className="comentario">{"*/"}</span>
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </Grid>
                    </Box>
                    
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingY: 5, paddingX: 7}}>
                        <Typography variant="body1" component="p">Dado el ejemplo anterior, vemos que creamos una variable llamada "numero", la cual es inicializada con el valor de 5, el bloque condicional IF-ELSE, tiene como condición de que si numero esta entre los valores de 0 y 3, en caso de que no, procede a realizar el otro bloque de código que corresponde al ELSE.</Typography>
                        <Typography variant="body1" component="p">Debemos de considerar que tanto este tema como el anterior (Sentencia IF), se pueden realizar sentencias anidadas, esto con la finalidad de considerar todos los posibles casos que una opción puede seguir.</Typography>
                        <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>Ejercicios propuestos</Typography>
                        <Typography variant="body1" component="p">A continuación se mostrará la redacción de los ejercicios básicos que se consideran que los resulvas <b>{Usuario.User}</b>, con la finalidad de tener los temas claros y listos para que hagas uso de estos, nota la dificultad de estos es solo para que comprendas el como implementar esta sentencia.</Typography>
                        <Typography variant="body1" component="p">
                            <ol>
                                <li>Escribe un programa que le pida al usuario su edad, si es menor a 18 tendrá que colocar el mensaje de que “Aún no tiene mayoría de edad”, pero el otro caso, tendrá que colocar el mensaje de “Cuenta con la mayoría de edad”.</li>
                                {tab}<MostrarRespuesta>
                                                <Typography variant="h6" sx={{paddingX:10}}>
                                                    <Box sx={{maxWidth:"calc(60vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:12}}>
                                                        {"import java.util.Scanner;"}
                                                        <br />
                                                        {"public class Main{"}
                                                        <br/>
                                                        {tab}{"public static void main(String[] args){"}
                                                        <br />
                                                        {tab}{'int edad;'}&nbsp;&nbsp;<span className="comentario">{'//creamos la variable para obtener el numero'}</span>
                                                        <br />
                                                        {tab}{'Scanner entrada = new Scanner(System.in);'}&nbsp;&nbsp;<span className="comentario">{'//creamos el objeto para obtener la entrada del usuario'}</span>
                                                        <br />
                                                        {tab}{'System.out.println("Ingrese su edad: ");'}&nbsp;&nbsp;<span className="comentario">{'//Imprimimos la indicación que el usuario debe hacer'}</span>
                                                        <br />
                                                        {tab}{'edad = entrada.nextInt();'}&nbsp;&nbsp;<span className="comentario">{'//Almacenamos la entrada del usuario'}</span>
                                                        <br />
                                                        {tab}{tab}{"if( edad < 18 ){"}&nbsp;&nbsp;<span className="comentario">{"//preguntamos ¿la edad es menor a 18?"}</span>
                                                        <br />
                                                        {tab}{tab}{tab}{`//CASO donde sea cierto`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//imprimos este mensaje`}
                                                        <br />
                                                        {tab}{tab}{tab}{`System.out.println("Aun no tiene la mayoria de edad: "+edad);`}
                                                        <br />
                                                        {tab}{tab}{`}else{`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//CASO donde sea falso`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//imprimos este mensaje`}
                                                        <br />
                                                        {tab}{tab}{tab}{`System.out.println("Cuenta con la mayoria de edad: "+edad);`}
                                                        <br />
                                                        {tab}{tab}{`}`}
                                                        <br />
                                                        {tab}{`}`}
                                                        <br />
                                                        {`}`}
                                                    </Box>
                                                </Typography>
                                        </MostrarRespuesta>
                                    
                                <li>Escribir un programa que le pida un número al usuario, deberá de delimitar si el número es par y mayor a 20, mostrando el mensaje de “Tu número cumple con las condiciones”, en otro caso, deberá mostrar “Tu número puede que no cumpla con las condiciones o solo con una, verifica tu entrada.”.</li>
                                {tab}<MostrarRespuesta>
                                                <Typography variant="h6" sx={{paddingX:10}}>
                                                    <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:12}}>
                                                        {"import java.util.Scanner;"}
                                                        <br />
                                                        {"public class Main{"}
                                                        <br/>
                                                        {tab}{"public static void main(String[] args){"}
                                                        <br />
                                                        {tab}{'int numero;'}&nbsp;&nbsp;<span className="comentario">{'//creamos la variable para obtener el numero'}</span>
                                                        <br />
                                                        {tab}{'Scanner entrada = new Scanner(System.in);'}&nbsp;&nbsp;<span className="comentario">{'//creamos el objeto para obtener la entrada del usuario'}</span>
                                                        <br />
                                                        {tab}{'System.out.println("Ingrese el numero: ");'}&nbsp;&nbsp;<span className="comentario">{'//Imprimimos la indicación que el usuario debe hacer'}</span>
                                                        <br />
                                                        {tab}{'numero = entrada.nextInt();'}&nbsp;&nbsp;<span className="comentario">{'//Almacenamos la entrada del usuario'}</span>
                                                        <br />
                                                        {tab}{tab}{"if( (numero % 2 == 0) && numero > 20 ){"}&nbsp;&nbsp;<span className="comentario">{"//preguntamos ¿la edad es menor a 18?"}</span>
                                                        <br />
                                                        {tab}{tab}{tab}{`//CASO donde sea cierto`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//imprimos este mensaje`}
                                                        <br />
                                                        {tab}{tab}{tab}{`System.out.println("Tu numero cumple con las condiciones: "+numero);`}
                                                        <br />
                                                        {tab}{tab}{`}else{`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//CASO donde sea falso`}
                                                        <br />
                                                        {tab}{tab}{tab}{`//imprimos este mensaje`}
                                                        <br />
                                                        {tab}{tab}{tab}{`System.out.println("Tu número puede que no cumpla con las condiciones o solo con una, verifica tu entrada: "+numero);`}
                                                        <br />
                                                        {tab}{tab}{`}`}
                                                        <br />
                                                        {tab}{`}`}
                                                        <br />
                                                        {`}`}
                                                    </Box>
                                                </Typography>
                                        </MostrarRespuesta>
                                    
                            </ol>
                        </Typography>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{paddingTop:3}}>
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
        </>
    );
};

export default CondicionalElse;