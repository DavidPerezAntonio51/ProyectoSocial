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
                                    {tab}{tab}{'int inicio = 0'}
                                    <br />
                                    {tab}{tab}{'int fin = 50'}
                                    <br/>
                                    {tab}{tab}{}
                                    <br/>
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
                        </MostrarRespuesta>
                        <Typography variant="h4" component="h3">
                            Ejercicio 2:
                        </Typography>
                        <Typography variant="h4" component="h3">
                            Ejercicio 3:
                        </Typography>
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