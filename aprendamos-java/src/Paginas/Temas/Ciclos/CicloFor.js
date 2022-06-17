import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext, } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import Instrucciones from "../../../Componentes/ComponentesDeLosTemas/Ciclos/ListaForElementos";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";
import UserContext from "../../../Contextos/UserContext";
import ElementosFor from "./dataJson/ElementosFor.json";
import ExplicacionFor from "./dataJson/ExplicacionFor.json"

function CicloFor() {
    const Usuario = useContext(UserContext);
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return (
        <Container sx={{ paddingY: 6 }}>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop: 5
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            Ciclo for
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
                    }}>
                        <Typography variant="h6" component="p">
                            Hola {Usuario.User} ya que ahora conoces la importancia de los ciclos en la programación es momento de
                            mostrarte el ciclo for. Este ciclo depende de 3 elementos importantes
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Este ciclo es de los mas utilizados, a continuacion te mostramos la sintaxis usada para este ciclo:
                        </Typography>
                        <br />
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"for(inicializacion; condición; modificador){"}<span className="comentario">//aqui se declara todo lo necesario para el ciclo</span>
                                <br />
                                {tab}{tab}<span className="comentario">//Todas las instrucciones que se repetiran van aqui</span>
                                <br />
                                {tab}{tab}{"}"}
                                <br />
                                {tab}{"}"}
                                <br />
                                {"}"}
                            </Box>
                        </Typography>
                        <Instrucciones steps={ElementosFor.steps} />
                        <br />
                        <Typography variant="h6" component="p">
                            Como recordaras te pedimos imprimir tu nombre 600 veces, ahora te mostraremos ese mismo código
                            utilizando ciclos y veras lo fácil que es utilizarlos.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}<span className="comentario">//{"inicializacion;condición;(modificador)"}</span>
                                <br />
                                {tab}{tab}{"for(int i = 0; i<600; i++){"}
                                <br />
                                {tab}{tab}{tab}{'System.out.println("'}{Usuario.User}{'");'}<span className="comentario">//Escribimos la linea que muestra el nombre solo una vez</span>
                                <br />
                                {tab}{tab}{"}"}
                                <br />
                                {tab}{"}"}
                                <br />
                                {"}"}
                            </Box>
                        </Typography>
                        <Instrucciones steps={ExplicacionFor.steps} />
                        <br />
                        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                            ¡Cuidado con los ciclos infinitos!
                        </Typography>
                        <Typography variant="h6" component="p">
                            En el código a continuación tenemos un ciclo infinito, pues no importa cuando se decremente la
                            variable i, esta variable nunca será mayor que 600 asi que la condición siempre será verdadera
                            y tendremos un ciclo infinito.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"for(int i = 300; i>600; i--){"}
                                <br />
                                {tab}{tab}{tab}{'System.out.println("'}{Usuario.User}{'");'}
                                <br />
                                {tab}{tab}{"}"}
                                <br />
                                {tab}{"}"}
                                <br />
                                {"}"}
                            </Box>
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                            ¡Cuidado con los ciclos inservibles!
                        </Typography>
                        <Typography variant="h6" component="p">
                            En el siguiente código te mostraremos un ciclo que nunca se ejecuta. El problema
                            ocurre cuando iniciamos la variable con un 1, y la condición pide que la variable
                            i sea menor que 1, así que una vez que se detecta la condición falsa automáticamente
                            se salta el cuerpo del ciclo. Así que siempre ten cuidado con las condiciones que uses.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"for(int i = 1; i<1; i++){"}
                                <br />
                                {tab}{tab}{tab}{'System.out.println("'}{Usuario.User}{'");'}
                                <br />
                                {tab}{tab}{"}"}
                                <br />
                                {tab}{"}"}
                                <br />
                                {"}"}
                            </Box>
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                            Ahora {Usuario.User} es momento de poner a prueba lo aprendido con los siguientes ejercicios,
                            no te preocupes si no lo logras a la primera, es importante que hagas el intento de resolverlos.
                        </Typography>
                        <br />
                        <Typography variant="h4" component="h3">
                            Ejercicio 1:
                        </Typography>
                        <Typography variant="h6" component="p">
                            Escribir un programa que imprima todos los números pares entre dos números
                        </Typography>
                        <MostrarRespuesta>
                            <Typography variant="h6" >
                                <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}<span className="comentario">//{"Iniciamos las variables de inicio y fin"}</span>
                                    <br />
                                    {tab}{tab}{'int inicio = 30'}
                                    <br />
                                    {tab}{tab}{'int fin = 600'}
                                    <br/>
                                    {tab}{tab}{"for(int i = inicio; i<=fin; i++){"}<span className="comentario">//definimos el ciclo</span>
                                    <br />
                                    {tab}{tab}{tab}{'if(i%2==0){'}<span className="comentario">//usando el operador modulo verificamos si es par</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El número "+ i + " es par");'}<span className="comentario">//mostramos el numero en consola</span>
                                    <br />
                                    {tab}{tab}{tab}{"}"}
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </MostrarRespuesta>
                        <br/>
                        <Typography variant="h4" component="h3">
                            Ejercicio 2:
                        </Typography>
                        <Typography variant="h6" component="p">
                            Realice un programa en el que se pueda imprimir un rectángulo en consola utilizando el 
                            símbolo '*', debe usar 2 ciclos for.
                        </Typography>
                        <MostrarRespuesta>
                            <Typography variant="h6" component="p">
                                Como dato curioso podemos tener ciclos dentro de ciclos, se le conoce como ciclos anidados. 
                                El ciclo interno se repetirá tantas veces como lo solicite el ciclo externo
                            </Typography>
                            <Typography variant="h6" >
                                <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}<span className="comentario">//{"Iniciamos las variables necesarias"}</span>
                                    <br />
                                    {tab}{tab}{'int largo = 20'}
                                    <br/>
                                    {tab}{tab}{'int alto = 10'}
                                    <br/>
                                    {tab}{tab}{"for(int i = 1; i<=alto; i++){"}<span className="comentario">//el primer </span>
                                    <br/>
                                    {tab}{tab}{tab}{"for(int j = 1; i<=ancho; i++){"}
                                    <br/>
                                    {tab}{tab}{tab}{'}'}
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br/>
                                    {tab}{tab}{'System.out.println("El total a pagar es: " + total);'}<span className="comentario">//mostramos el total a pagar</span>
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </MostrarRespuesta>
                        <br/>
                        <Typography variant="h4" component="h3">
                            Ejercicio 3:
                        </Typography>
                        <Typography variant="h6" component="p">
                            Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $10 ,el segundo $20, 
                            el tercero $40 y así sucesivamente. Realizar un programa para determinar cuánto debe pagar 
                            mensualmente y el total de lo que pagará después de los 20 meses.
                        </Typography>
                        <MostrarRespuesta>
                            <Typography variant="h6" >
                                <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}<span className="comentario">//{"Iniciamos las variables necesarias"}</span>
                                    <br />
                                    {tab}{tab}{'int meses = 20'}
                                    <br/>
                                    {tab}{tab}{'int MontoPago = 10'}
                                    <br/>
                                    {tab}{tab}{'int total = 0'}
                                    <br/>
                                    {tab}{tab}{"for(int i = 1; i<=meses; i++){"}<span className="comentario">//el ciclo se repetirá la cantidad de meses a pagar</span>
                                    <br/>
                                    {tab}{tab}{tab}{'System.out.println("El monto del mes "+ i + " es: "+ MontoPago);'}<span className="comentario">//mostramos el monto a pagar este mes</span>
                                    <br />
                                    {tab}{tab}{tab}{'total=total+MontoPago'}<span className="comentario">//el monto a pagar de este mes se agrega al total a pagar</span>
                                    <br />
                                    {tab}{tab}{tab}{'MontoPago*=2'}<span className="comentario">//despues de mostrar el monto y sumarlo al total se duplica el monto a pagar para el siguiente mes</span>
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br/>
                                    {tab}{tab}{'System.out.println("El total a pagar es: " + total);'}<span className="comentario">//mostramos el total a pagar</span>
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </MostrarRespuesta>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
                            <Grid item sx={{ paddingY: 2 }}>
                                <VolverAlMenu />
                            </Grid>
                            <Grid item sx={{ paddingY: 2 }}>
                                <SiguienteTema />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CicloFor;