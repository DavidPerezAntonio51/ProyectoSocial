import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext, } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import Instrucciones from "../../../Componentes/ComponentesDeLosTemas/Ciclos/ListaForElementos";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";
import UserContext from "../../../Contextos/UserContext";
import ElementosFor from "./dataJson/ElementosFor.json";
import whilePreguntas from './dataJson/whilePreguntas.json';
import ExplicacionFor from "./dataJson/ExplicacionFor.json"

function CicloWhile() {
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
                            Ciclo While
                        </Typography>
                    </Grid>
                </Box>
                <Grid item container>
                    <Box sx={{
                        paddingX: 5,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,
                    }}>
                        <Typography variant="h6" component="p">
                            Hola {Usuario.User} ahora es el turno de conocer sobre el ciclo while, while traducido al español
                            significa mientras, como su nombre lo indica es un ciclo que se ejecutara mientras se cumpla una
                            condición, a diferencia del ciclo for este ciclo solo depende de la condición.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                            Pero no debes olvidar que debe haber un mecanismo para evitar que el ciclo se ejecute de manera
                            infinita.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Veamos la sintaxis de este ciclo:
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"while(condición){"}<span className="comentario">//declaracion del ciclo</span>
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
                        <Typography variant="h6" component="p">
                            Quizá ahora tengas algunas preguntas como ¿En que momento uso un ciclo for? ¿En que momento un ciclo
                            while? Aunque un ciclo while puede configurarse para que funcione de manera similar a un ciclo for
                            existe una respuesta fácil a las preguntas planteadas.
                        </Typography>
                        <Instrucciones steps={whilePreguntas.steps} />
                        <br />
                        <Typography variant="h6" component="p">
                            Ahora observa el siguiente ejemlo. El ciclo while se repetirá hasta que el numero aleatorio generado
                            sea igual a uno.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"int numero = 3;"}<span className="comentario">//inicializamos la variable que tendra el numero aleatorio </span>
                                <br />
                                {tab}{tab}{"while(numero != 1){"}<span className="comentario">//definimos que el ciclo se ejecute Mientras el numero sea diferente de 1 </span>
                                <br />
                                {tab}{tab}{tab}{'numero = (int)(Math.random()*10+1);'}<span className="comentario">//generamos un numero aleatorio entre 1 y 10</span>
                                <br />
                                {tab}{tab}{tab}{'System.out.println("El numero aleatorio es: " + numero);'}<span className="comentario">//mostramos el numero generado</span>
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
                            ¡Cuidado con los ciclos infinitos!
                        </Typography>
                        <Typography variant="h6" component="p">
                            En el siguiente código veremos que también en los ciclos while podríamos tener casos en los que
                            nuestros ciclos sean infinitos. Podemos ver que la condición siempre se cumplirá pues los numeros
                            aleatorios siempre seran entre 1 y 10, entonces la condicion simepre sera verdadera y debido a
                            eso el ciclo se quedara en un bucle infinito.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"int numero = 3;"}<span className="comentario">//inicializamos la variable que tendra el numero aleatorio </span>
                                <br />
                                {tab}{tab}{"while(numero != 15){"}<span className="comentario">//definimos que el ciclo se ejecute Mientras el numero sea diferente de 1 </span>
                                <br />
                                {tab}{tab}{tab}{'numero = (int)(Math.random()*10+1);'}<span className="comentario">//generamos un numero aleatorio entre 1 y 10</span>
                                <br />
                                {tab}{tab}{tab}{'System.out.println("El numero aleatorio es: " + numero);'}<span className="comentario">//mostramos el numero generado</span>
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
                            En el siguiente código te mostraremos un ciclo que nunca se ejecuta. Esto ocurre debido a que
                            la condicion sera falsa desde el inicio, por lo tanto no entraremos al ciclo.
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                {"public class Main{"}
                                <br />
                                {tab}{"public static void main(String[] args){"}
                                <br />
                                {tab}{tab}{"int numero = 3;"}<span className="comentario">//inicializamos la variable que tendra el numero aleatorio con un 3 </span>
                                <br />
                                {tab}{tab}{"while(numero == 0){"}<span className="comentario">//definimos que el ciclo se ejecute Mientras el numero sea igual a 0 </span>
                                <br />
                                {tab}{tab}{tab}{'numero = (int)(Math.random()*10+1);'}<span className="comentario">//generamos un numero aleatorio entre 1 y 10</span>
                                <br />
                                {tab}{tab}{tab}{'System.out.println("El numero aleatorio es: " + numero);'}<span className="comentario">//mostramos el numero generado</span>
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
                            Escribir un programa que imprima todos los números pares posibles mientras sean numero menores a un
                            número aleatorio.
                        </Typography>
                        <MostrarRespuesta>
                            <Typography variant="h6" >
                                <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}<span className="comentario">//{"Se declara un numero aleatorio"}</span>
                                    <br />
                                    {tab}{tab}{'int fin = (int)(Math.random()*10+1);'}
                                    <br />
                                    {tab}{tab}{'int contador = 0;'}
                                    <br />
                                    {tab}{tab}{"while(contador<fin){"}<span className="comentario">//definimos la condicion de paro</span>
                                    <br />
                                    {tab}{tab}{tab}{'if(contador%2==0){'}<span className="comentario">//usando el operador modulo verificamos si es par</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El número "+ contador + " es par");'}<span className="comentario">//mostramos el numero en consola</span>
                                    <br />
                                    {tab}{tab}{tab}{"}"}
                                    <br />
                                    {tab}{tab}{tab}{"contador++;"}<span className="comentario">//incrementamos el contador</span>
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </MostrarRespuesta>
                        <br />
                        <Typography variant="h4" component="h3">
                            Ejercicio 2:
                        </Typography>
                        <Typography variant="h6" component="p">
                            Realiza un menú con 3 opciones que se muestre mientras la opcion elegida no sea salir
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
                                    {tab}{tab}{'int opcion = 1;'}
                                    <br />
                                    {tab}{tab}{'Scanner teclado = new Scanner(System.in);'}<span className="comentario">//declaramos la entrada del teclado para poder usarlo</span>
                                    <br />
                                    {tab}{tab}{"while(opcion=!){"}<span className="comentario">//el ciclo solo se ejcuta mientras la opcion sea diferente de 0</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">//Se muestran las opciones del menú</span>
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("1. Opcion 1");'}
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("2. Opcion 2");'}
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("0. Salir");'}
                                    <br />
                                    {tab}{tab}{tab}{'opcion = teclado.nextInt();'}<span className="comentario">//se lee un numero entero desde el teclado y lo guardamos en la variable opcion</span>
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </MostrarRespuesta>
                        <br />
                        <Typography variant="h4" component="h3">
                            Ejercicio 3:
                        </Typography>
                        <Typography variant="h6" component="p">
                            Realiza un juego donde el usuario deberá adivinar el numero aleatorio generado, el numero aleatorio
                            debe ser entre 1 y 30, el usuario tendrá intentos infinitos hasta adivinar o hasta que se rinda
                            presionando 0.
                        </Typography>
                        <MostrarRespuesta>
                            <Typography variant="h6" component="p">
                                Observa un dato curioso, el ciclo while puede contener 2 condiciones, en este caso señalados 
                                por la compuerta '&&' que nos indica que se deben cumplir ambas condiciones al mismo tiempo para ejecutarse, si alguna de las dos falla (es falsa) el ciclo se rompe.
                            </Typography>
                            <Typography variant="h6" >
                                <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX: "auto", overflowY: "unset", whiteSpace: 'nowrap', backgroundColor: "stratos.main", color: "boticelli.main", padding: 2 }}>
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}<span className="comentario">//{"Iniciamos las variables necesarias"}</span>
                                    <br />
                                    {tab}{tab}{'int numero=1; '}
                                    <br />
                                    {tab}{tab}{'int aleatorio = (int)(Math.random()*30+1);'}
                                    <br />
                                    {tab}{tab}{'Scanner teclado = new Scanner(System.in);'}<span className="comentario">//declaramos la entrada del teclado para poder usarlo</span>
                                    <br />
                                    {tab}{tab}{"while(numero!=0 && numero != 7){"}<span className="comentario">//el ciclo solo se ejcuta mientras la opcion sea diferente de 0 o no se haya adivinado el numero</span>
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">//Se muestran las opciones del menú</span>
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("Ingrese un numero entre 1 y 30 o un 0 para salir");'}
                                    <br />
                                    {tab}{tab}{tab}{'numero = sc.nextInt();'}
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{tab}{'System.out.println("¡Has adivinado!");'}
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

export default CicloWhile;