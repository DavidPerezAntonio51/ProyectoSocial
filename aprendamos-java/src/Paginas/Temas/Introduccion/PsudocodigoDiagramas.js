import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../Contextos/UserContext";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import MostrarRespuesta from "../../../Componentes/ComponentesDeLosTemas/MostrarResppuesta";

const PseudocodigoDiagramas = () => {
    const Usuario = useContext(UserContext);
    return(
        <Container sx={{ paddingY: 6 }}>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop: 5,
                    marginTop: 2
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            Pseudocódigo
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{
                        paddingX: 8,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,
                }}>
                    <Typography align="justify" variant="body1" component="p">
                        En esta ocasión nos enfocaremos al pseudocódigo, que lo podríamos ver como una forma de interpretar los pasos que realizará el programa a realizar haciendo uso de un lenguaje que sea comprensible por las personas. Esto no tiene que ver con codificar aún, sino con análizar la lógica que hay detrás de lo que se va a realizar; véase el siguiente ejemplo <br/> <br/>
                    </Typography>
                    <center>
                    <img src={require("../../../assets/img/pseudo.jpg")}  alt="Imagen pseudocódigo"></img>
                    </center>
                    <Typography align="justify" variant="body1" component="p">
                        <br/> <br/>
                        El ejemplo consta de sumar dos numeros reales, cuyos nombres son A,B y para ello tenemos que darle instrucciones al usuario que utilizará nuestro porgrama para así llevar un seguimiento adecuado y este tenga una agradable experiencia. Posterior a ello, en C se guardará el resultado de la suma y finalmente se imprimirá en pantalla.
                         <br/> <br/>
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            Diagramas de flujo
                        </Typography>
                    </Grid>
                </Box>
                <Box sx={{
                        paddingX: 8,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,
                }}>
                    <Typography align="justify" variant="body1" component="p">
                        Los diagrama de flujo son herramientas muy útiles que solemos utilizar los programadores para describir el funcionamiento de un respectivo algoritmo de forma gráfica, para ello es importante conocer la símbología que nos permitirá hacer un buen uso de estos diagramas.
                    </Typography>
                    <center>
                     <img src={require("../../../assets/img/Simbologia.png")}  alt="Símbolos de los diagramas de flujo"></img>
                    </center>
                    <Typography align="justify" variant="body1" component="p">
                        <br/>
                        Ahora que ya conoces los símbolos {Usuario.User}, veamos como se utilizan en un ejemplo simple y posterior a ello obtener los pasos a realizar. Tenemos el siguiente diagrama
                        <br/>
                    </Typography>
                    <center>
                        <img src={require("../../../assets/img/diagramaEjemplo.png")} alt="Diagrama de ejemplo"></img>
                    </center>
                    <Typography align="justify" variant="body1" component="p">
                        <br/>
                        Primeramente hay que partir desde el símbolo de inicio, posterior a ello dar prioridad a las flechas que señalan continuidad, y así, dar un correcto seguimiento del diagrama, en el caso de que se presente una decisión podríamos interpretarlo en que si no se cumple una condición realiza alguna tarea, en otro caso por defecto se hace otra actividad; es probable que nos encontremos con algunas actividades que realicen una condición, y en caso de no cumplirse regresa a un paso anterior hasta que cierta condición sea cumplida. Un punto importante es que las condiciones siempre deben presentarse como preguntas de Si o No (verdadero o falso también es valido) con el hecho de limitar las actividades que se puedan presentar.
                        Vamos a encontrar la secuencia de pasos del diagrama mostrado
                        <br/> <br/>
                        1 - Se pregunta si el huevo se cocinará friendolo. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; Si - En caso de que se quiera frito lo freimos. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; No - En caso de que se quiera hervido lo hervimos. <br/>
                        2 - Preguntamos si lo quiere salado. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; Si - Agregamos sal  . <br/>
                        3 - Servimos en un plato
                    </Typography>
                    <Typography align="justify" variant="body1" component="p">
                        <br/>
                            Una vez haya concluido estos ejercicios,<b> es hora de poner a prueba lo aprendido </b>, y para ello se pide analizar el siguiente diagrama de flujo y serializar los pasos.   <br/>
                        <br/>
                    </Typography>
                    <center>
                        <img src={require("../../../assets/img/diagramaEjercicio.png")}  alt="Diagrama de ejercicio"></img>
                    </center>
                    <MostrarRespuesta>
                        <Typography align="justify" variant="body1" component="p">
                            1. Se lee un número <br/>
                            2. Se pregunta si el número es par <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; Si el número es impar, se imprime un mensaje y regresa al paso 1. <br/>
                            3. Si el número es par, se divide entre dos.<br/>
                            4. Se imprime el resultado de dividir A/2.<br/> <br/>
                        </Typography>
                    </MostrarRespuesta>
                    <Typography align="justify" variant="body1" component="p">
                        <br/>
                            Si presentaste problemas par realizar la actividad, no te preocupes, puedes intentar experimentar creando diagramas para diferentes actividades que haces en tu rutina como: Cocinar tu platillo favorito, actividades laborales, entre algunas otras, y veras que con esa práctica lograras mejorar en tu interpretación de estas herramientas. Existe Software que te permite realizar estos gráficos de forma gratuita como lo es <b>Lucidchart</b>.
                        <br/>
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
            
        </Container>
    )
}

export default PseudocodigoDiagramas