import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext, } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import Instrucciones from "../../../Componentes/ComponentesDeLosTemas/Ciclos/ListaForElementos";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";
import UserContext from "../../../Contextos/UserContext";
import whilePreguntas from './dataJson/whilePreguntas.json';

function CicloDoWhile() {
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
                            Ciclo Do While
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
                            Ahora veremos el último de los ciclos que es el do while, este ciclo comparte una gran similitud 
                            con el ciclo while, solo existe una pequeña diferencia a nivel de sintaxis, la palabra "do" antes 
                            del while, ¿esto en que nos afecta?
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Pues este ciclo nos permite evitar un problema que teníamos con los 2 ciclos anteriores, ¿aun 
                            recuerdas cuales eran esos problemas? Así es {Usuario.User} los bucles infinitos y los bucles 
                            inservibles, el problema que se soluciona con este ciclo es el de los bucles inservibles, pues 
                            este ciclo nos asegura la ejecución del código al menos una vez.
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
                                {tab}{tab}{"do{"}
                                <br />
                                {tab}{tab}<span className="comentario">//Todas las instrucciones que se repetiran van aqui</span>
                                <br />
                                {tab}{tab}{"}while(condición);"}<span className="comentario">//condicion que verifica si vuelve a ejecutarse o no</span>
                                <br />
                                {tab}{"}"}
                                <br />
                                {"}"}
                            </Box>
                        </Typography>
                        <br/>
                        <Typography variant="h6" component="p">
                            Ya que este es el único cambio importante respecto al ciclo while, creo que ya estas preparado para 
                            algunos ejercicios, serán los mismos que en la sección anterior, pero adaptados a la nueva sintaxis.
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
                                    {tab}{tab}{"do{"}
                                    <br />
                                    {tab}{tab}{tab}{'if(contador%2==0){'}<span className="comentario">//usando el operador modulo verificamos si es par</span>
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("El número "+ contador + " es par");'}<span className="comentario">//mostramos el numero en consola</span>
                                    <br />
                                    {tab}{tab}{tab}{"}"}
                                    <br />
                                    {tab}{tab}{tab}{"contador++;"}<span className="comentario">//incrementamos el contador</span>
                                    <br />
                                    {tab}{tab}{"}while(contador<fin);"}<span className="comentario">//evaluamos la condicion y sabremos si ejecutamos de nuevo o no</span>
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
                                    {tab}{tab}<span className="comentario">//{"No es necesario iniciar la variable contador pues este ciclo permite que sea el usuario quien la inicie"}</span>
                                    <br />
                                    {tab}{tab}{'int opcion;'}
                                    <br />
                                    {tab}{tab}{'Scanner teclado = new Scanner(System.in);'}<span className="comentario">//declaramos la entrada del teclado para poder usarlo</span>
                                    <br />
                                    {tab}{tab}{"do{"}
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">//primero ejecuta el bloque de codigo y despues revisa la condicion al final</span>
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("1. Opcion 1");'}
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("2. Opcion 2");'}
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("0. Salir");'}
                                    <br />
                                    {tab}{tab}{tab}{'opcion = teclado.nextInt();'}<span className="comentario">//se lee un numero entero desde el teclado y lo guardamos en la variable opcion</span>
                                    <br />
                                    {tab}{tab}{"}while(opcion=!);"}<span className="comentario">//si la opcion fue diferente de 0 el ciclo se repite</span>
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
                                    {tab}{tab}{'int numero; '}<span className="comentario">//{"no es necesario inicializar esta variable, pues se puede hacer dentro del ciclo"}</span>
                                    <br />
                                    {tab}{tab}{'int aleatorio = (int)(Math.random()*30+1);'}
                                    <br />
                                    {tab}{tab}{'Scanner teclado = new Scanner(System.in);'}<span className="comentario">//declaramos la entrada del teclado para poder usarlo</span>
                                    <br />
                                    {tab}{tab}{"do{"}
                                    <br />
                                    {tab}{tab}{tab}<span className="comentario">//Se muestran las opciones del menú</span>
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("Ingrese un numero entre 1 y 30 o un 0 para salir");'}
                                    <br />
                                    {tab}{tab}{tab}{'numero = sc.nextInt();'}
                                    <br />
                                    {tab}{tab}{"}while(numero!=0 && numero != aleatorio);"}<span className="comentario">//se revisa la condicion al final</span>
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
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CicloDoWhile;