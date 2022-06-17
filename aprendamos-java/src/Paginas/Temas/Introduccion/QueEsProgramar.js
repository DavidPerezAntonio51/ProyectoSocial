import { Box, Container, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../Contextos/UserContext";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";

const QueEsProgramar = () => {
    const Usuario = useContext(UserContext);
    return (
        <Container maxWidth="xl">
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
                            ¿Qué es Programar?
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
                        ¡Excelente, {Usuario.User}! Ahora que haz decidido tomar la rienda y entrar al mundo de la programación con Java es importante tener en claro algunos conceptos que explicaremos en este apartado, empezando primeramente con el de <b>programar</b>.  
                    </Typography>
                    <Typography align="justify" variant="body1" component="p">
                        <br/> 
                        La programación es el arte de crear aplicaciones de software haciendo uso de un lenguaje que permita la interacción humano-máquina, siendo el humano el que se encarga de dar instrucciones definidas por medio de un <b>algoritmo</b> para que el dispositivo pueda ejecutar dichos pasos y así obtener el resultado esperado por medio del programada creado. <br/>
                        Hoy en día es muy común el utilizar aplicaciones con el fin de realizar tareas específicas como lo son: Netflix, para ver series y películas en cualquier momento; Facebook, nos permite establecer comunicación con diferentes personas entre algunas otras actividades; Indeed, que permite ver diferentes ofertas laborales, entre muchas otras. Es ahí donde esta la necesidad de hacer crecer la comunidad con este set de habilidades, ya que permitirá brindarles la capacidad para generar sus propias herramientas y asi facilir las actividades que podrían abarcar mucho tiempo en solo unos cuantos segundos con la ayuda de la tecnología, y es ahí donde entras tú {Usuario.User} con tu propósito de conocer más acerca de este mundo, y así, en un futuro puedas facilitar ciertas actividades o desarrolles alguna plataforma de utilidad para un cierto mercado. 
                    </Typography>
                    <center>
                        <img src={require("../../../assets/img/programacion.png")}></img>
                    </center>
                </Box>
            </Grid>
            <Grid container>
                
            </Grid>
            <Grid item>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop: 2,
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            ¿Qué es un algoritmo?
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
                        Un algoritmo se considera una serie de pasos finitos secuenciales que permite la resolución de un cierto problema. Día a día hacemos usos de algoritmos, ya sea para cocinar una receta, lavar los trastes, o inclusive para resolver algunos puzzles como es el cubo Rubik. <br/> <br/>
                        Existen algunas consideraciones para poder definir un algoritmo correctamente, los cuales son:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary = "- Debe ser preciso (No debería presentar errores al resolver un problema)"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary = "- Debe tener un inicio y un final"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary = "- En un punto laboral es imporante que sea legible y cualquier persona pueda comprenderlo"
                            />
                        </ListItem>
                    </List>
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

export default QueEsProgramar;