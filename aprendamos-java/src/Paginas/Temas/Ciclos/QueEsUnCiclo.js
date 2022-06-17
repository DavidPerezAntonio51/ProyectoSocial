import { Box, Container, Grid, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";

function Ciclos() {
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
                            ¿Qué es un Ciclo en programación?
                        </Typography>
                    </Grid>
                </Box>
                <Grid item>
                    <Box sx={{
                        paddingX: 7,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,
                    }}>
                        <Typography variant="h6" component="p">
                            Con lo aprendido hasta ahora es posible que te hayas dado cuenta de que al momento de estar programando
                            hay algunas instrucciones o códigos que es necesario estar repitiendo muchas veces. Seguramente has intentado
                            copiar y pegar varias veces este código usando el típico "CTRL+C" y "CTRL+V", es una solución lógica
                            y no está mal ya que aun estas aprendiendo, pero no es la mejor manera.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Duplicar el código de esa forma puede traer varios problemas consigo. El primero de estos problemas es
                            que los archivos fuente de tu código se harán innecesariamente grandes; en el caso de requerirse hacer
                            modificaciones en un futuro a tu código será muy complicado, muy tardado y muy cansado poder llevarlas
                            a cabo. A continuación te mostraremos un ejemplo de lo que no se debe hacer
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" sx={{fontWeight: "bold"}}>
                            Supongamos que te solicitamos un código que imprima tu nombre 600 veces
                        </Typography>
                        <Typography variant="h6" >
                            <Box sx={{ maxWidth: "calc(60vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace: 'nowrap', backgroundColor:"stratos.main", color:"boticelli.main", padding:2}}>
                                {"public class Main{"}
                                <br/>
                                {tab}{"public static void main(String[] args){"}
                                <br/>
                                {tab}{tab}{'String nombre = "'}{Usuario.User}{'";'}
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 1 vez el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 2 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 4 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 5 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 6 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 7 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 8 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 9 veces el nombre"}</span>
                                <br/>
                                {tab}{tab}{"System.out.println(nombre);"}<span className="comentario">{"// imprimimos 10 veces el nombre"}</span>
                                <br/>
                                {tab}{"}"}
                                <br/>
                                {"}"}
                            </Box>
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Como puedes observar solo con haberlo hecho 10 veces el código a crecido bastante.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Pero no te preocupes {Usuario.User} para eso existen los llamados bucles o ciclos. Comencemos por lo
                            primero, la definición. Intenta aprenderla, ya que puede ser una pregunta de examen si estas cursando
                            esta materia en una escuela.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                            Definición: Un bucle o ciclo es una secuencia de instrucciones de código que se ejecuta repetidas veces,
                            hasta que la condición asignada a dicho bucle deja de cumplirse.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Muy bien {Usuario.User} ahora que ya conoces la definición hay que tener en cuenta unas recomendaciones
                            sobre los bucles, deben estar construidos de manera tal que se pueda tener control de la cantidad de
                            repeticiones a realizar, de lo contrario se generaría un ciclo de ejecución infinita que podría desencadenar
                            un desborde de memoria y en consecuencia un fallo de la aplicación, o un bloqueo de la misma porque el flujo
                            de ejecución quedaría estancado en el ciclo, sobrecargando de tareas al procesador de la máquina que ejecuta
                            el programa.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p">
                            Excelente ahora ya sabes a nivel teórico cual es la función de los ciclos en la programación, en los siguientes
                            temas conocerás mas a fondo los ciclos for, while y doWhile a nivel teórico y a nivel practico en Java.
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

export default Ciclos;