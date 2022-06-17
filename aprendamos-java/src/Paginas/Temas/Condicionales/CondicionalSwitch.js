import {Box, Container} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import { useContext } from "react";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";


function CondicionalSwitch(){
    const Usuario = useContext(UserContext);
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return(
        <Container >
            <Grid container>
                <Grid item sx={{paddingTop: 7}}>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingX: 7}}>
                        <Typography variant="h3" component="h4" sx={{textAlign:"center", paddingBottom:2, paddingTop:0.5}}>Sentencia Switch - Case</Typography>

                        <Typography variant="body1" component="p">¡¡Muy bien <b>{Usuario.User}</b>!!, haz llegado al último tema que abarca condicionales, para este debimos de entender el funcionamiento básico de los condicionales anteriores, esto abarca desde la sintaxis que cada uno usa, hasta el como es su debido uso y con esto manejar de forma eficiente y correcta cada una de las sentencias previamente vistas.</Typography>
                        <Typography variant="body1" component="p">Este condicional nos servirá para tener una estructura definida, la cual nos permite definir todos los posibles casos junto con su respectivo bloque de ejecución. Solo que para este debemos de considerar una estructura un tanto especifica.</Typography>

                        <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >¿Qué es la sentencia Switch - Case?</Typography>

                        <Typography variant="body1" component="p">Es un mecanismo mecanismo de control para realizar selección mediante el valor de una variable o expresión (este haciendo uso de los operadores que vimos en la sentencia IF), la cual permite modificar el flujo de ejecución dependiendo del valor ingresado.</Typography>
                        <Typography variant="body1" component="p">Funciona de una forma similar a los condicionales if else, solo que este, simplifica de forma eficiente y entendible la estructura de declaración.</Typography>
                        <Typography variant="h5" component="h4" sx={{paddingTop:2,paddingBottom:2}}>Sintaxis</Typography>
                        <Grid item sx={{p:1, backgroundColor: "stratos.main"}}>
                            <Typography variant="h6" sx={{paddingX:10}}>
                                <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:12}}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}{"switch(expresión){"}<span className="comentario">&nbsp;{'//Realizamos el condicional switch'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case valor1:"}<span className="comentario">&nbsp;{'//Primer caso considerando a valor1 (este se podría considerar como un resultado de la expresión o variable a considerar)'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}<span className="comentario">&nbsp;{'//Bloque de funcionalidad'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;{'//Siempre que termine el bloque de codigo al que corresponde el caso, ponemos un break'}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{'*'}</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">{'*'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case valorN:"}<span className="comentario">&nbsp;{'//Este sería el ultimo caso que llegamos a tener'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}<span className="comentario">&nbsp;{'//Bloque de funcionalidad'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;{'//Siempre que termine el bloque de codigo al que corresponde el caso, ponemos un break'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"default:"}<span className="comentario">&nbsp;{'//Este lo podemos considerar como el caso base en el que la expresión o variable no encaja en todos los casos'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}<span className="comentario">&nbsp;{'//Bloque de funcionalidad'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"break;"}
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
                                <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:12}}>
                                    {"import java.util.Scanner;"}<span className="comentario">{'//Este es una importación de elementos de Java'}</span>
                                    <br />
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}{"Scanner entrada = new Scanner(System.in);"}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Creamos el objeto para realizar la obtención de la entrada'}</span>
                                    <br />
                                    {tab}{tab}{"int datoUsuario;"}<span className="comentario">&nbsp;&nbsp;{'//creamos la variable que usaremos'}</span>
                                    <br />
                                    {tab}{tab}{'System.out.println("Ingrese un numero del 1 al 7 (para mostrar el día al que corresponde): ");'}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Imprimimos la indicación de lo que el uusario debe de ingresar'}</span>
                                    <br />
                                    {tab}{tab}{"datoUsuario = entrada.nextInt();"}
                                    <br />
                                    {tab}{tab}{"switch(datoUsuario){"}<span className="comentario">&nbsp;&nbsp;{'//Realizamos el condicional switch'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 1:"}<span className="comentario">&nbsp;&nbsp;{'//Primer caso, con el valor 1'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es lunes");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del primer caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 2:"}<span className="comentario">&nbsp;&nbsp;{'//Segundo caso, con el valor 2'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es martes");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del segundo caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 3:"}<span className="comentario">&nbsp;&nbsp;{'//Tercer caso, con el valor 3'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es miércoles");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del tercer caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 4:"}<span className="comentario">&nbsp;&nbsp;{'//Cuarto caso, con el valor 4'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es jueves");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del cuarto caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 5:"}<span className="comentario">&nbsp;&nbsp;{'//Quinto caso, con el valor 5'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es viernes");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del quinto caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 6:"}<span className="comentario">&nbsp;&nbsp;{'//Sexto caso, con el valor 6'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es sábado");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del sexto caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"case 7:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El día que ingresaste es domingo");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"default:"}<span className="comentario">&nbsp;&nbsp;{'//Caso que no corresponde con ninguno de los anteriores'}</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El dato ingresado no corresponde con ninguno de los especificados en la estructura.");'}
                                    <br />
                                    {tab}{tab}{tab}{"break;"}
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </Grid>
                        <br />
                        <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>Ejercicios propuestos</Typography>
                        <Typography variant="body1" component="p">A continuación se mostrará la redacción de los ejercicios que se consideran que los resulvas <b>{Usuario.User}</b>, esperando que puedan ser de ayuda para tu aprendizaje.</Typography>
                        <Typography variant="body1" component="p">
                        <ol>
                            <li>Escribe un programa que obtenga un número del 1 al 12, deberás de comprobar que el número ingresado se encuentra en este rango, a partir de aquí debes de mostrar el numero al que corresponde el mes, por ejemplo, si la entrada es 1, imprimimos Enero, si la entrada es 10, imprimimos Octubre, en este caso no habrá caso default en el switch case, en su lugar cuando no cumple la condición, mostramos un mensaje de que el numero no corresponde con el rango.</li>
                            {tab}<MostrarRespuesta>
                                    <Typography variant="h6" sx={{paddingX:10}}>
                                                    <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:12}}>
                                                    {"import java.util.Scanner;"}<span className="comentario">{'//Este es una importación de elementos de Java'}</span>
                                                    <br />
                                                    {"public class Main{"}
                                                    <br />
                                                    {tab}{"public static void main(String[] args){"}
                                                    <br />
                                                    {tab}{tab}{"Scanner entrada = new Scanner(System.in);"}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Creamos el objeto para realizar la obtención de la entrada'}</span>
                                                    <br />
                                                    {tab}{tab}{"int numero;"}<span className="comentario">&nbsp;&nbsp;{'//creamos la variable que usaremos'}</span>
                                                    <br />
                                                    {tab}{tab}{'System.out.println("Ingrese un numero del 1 al 12: ");'}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Imprimimos la indicación de lo que el uusario debe de ingresar'}</span>
                                                    <br />
                                                    {tab}{tab}{"numero = entrada.nextInt();"}
                                                    <br />
                                                    {tab}{tab}{"if( numero > 0  && numero < 13 ){"}
                                                    <br />
                                                    {tab}{tab}{"switch(datoUsuario){"}<span className="comentario">&nbsp;&nbsp;{'//Realizamos el condicional switch'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{"case 1:"}<span className="comentario">&nbsp;&nbsp;{'//Primer caso, con el valor 1'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Enero");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del primer caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 2:"}<span className="comentario">&nbsp;&nbsp;{'//Segundo caso, con el valor 2'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Febrebro");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del segundo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 3:"}<span className="comentario">&nbsp;&nbsp;{'//Tercer caso, con el valor 3'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Marzo");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del tercer caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 4:"}<span className="comentario">&nbsp;&nbsp;{'//Cuarto caso, con el valor 4'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Abril");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del cuarto caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 5:"}<span className="comentario">&nbsp;&nbsp;{'//Quinto caso, con el valor 5'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Mayo");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Termina la ejecución del quinto caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 6:"}<span className="comentario">&nbsp;&nbsp;&nbsp;&nbsp;{'//Sexto caso, con el valor 6'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Junio");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del sexto caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 7:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Julio");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 8:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Agosto");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 9:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Septiembre");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 10:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Octubre");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 11:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Noviembre");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"case 12:"}<span className="comentario">&nbsp;&nbsp;{'//Séptimo caso, con el valor 7'}</span>
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{tab}{'System.out.println("Diciembre");'}
                                                    <br />
                                                    {tab}{tab}{tab}{tab}{"break;"}<span className="comentario">&nbsp;&nbsp;{'//Termina la ejecución del séptimo caso'}</span>
                                                    <br />
                                                    {tab}{tab}{"}"}
                                                    <br />
                                                    {tab}{tab}{"}else{"}
                                                    <br />
                                                    {tab}{tab}{tab}{'System.out.println("Tu numero no corresponde al rango deseado");'}
                                                    <br />
                                                    {tab}{tab}{"}"}
                                                    <br />
                                                    {tab}{"}"}
                                                    <br />
                                                    {"}"}
                                                    </Box>
                                                </Typography>
                                    </MostrarRespuesta>
                        </ol>
                        </Typography>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{paddingTop:3}}>
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

export default CondicionalSwitch;