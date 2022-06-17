import { Box, Container, Grid, Typography} from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../Contextos/UserContext";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";

const TuTambienPuedes = () => {
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
                            Veras que programar es fácil y lo puedes hacer
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
                    <Typography align="justify" component="p" variant="body1">
                        ¡Bien, {Usuario.User}! Estas avanzando y eso es lo importante. <br/> <br/>
                        Hoy discutiremos un tema importates, y es el que programar es una actividad que podría resultar sencilla en cuanto al hecho de aprender sintáxis, aspectos del lenguaje, entre otros puntos. No te preocupes, todos estos temas los veras más adelante. Pero si realmente quieres destacar en este bello mundo hace falta mucho esfuerzo de por medio y dedicación en el aprendizaje (especialmente en la práctica), aquí nos encargaremos de que recibas unas bases sólidas para que seas capaz de interpretar código de otros lados, o incluso, puedas adentrarte en diferentes complementos de Java para que puedas trabajar aplicaciones cada vez más complejas. <br/> <br/>
                        Puede que todo esto resulte abrumador, pero no te preocupes, programar no es una actividad que se aprende de la noche a la mañana, eso es super claro, pero si dedicas tiempo y dedicación, podrás convertirte en un programador con un gran set de conocimientos. ¡Tú puedes, {Usuario.User} no te rindas! 
                    </Typography>
                    <center>
                        <img src={require("../../../assets/img/Success.png")}  alt="Imagen motivacional"></img>
                    </center>
                    <Typography align="center" component="p" variant="body1">
                        "El exito es dependiente del esfuerzo"
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

export default TuTambienPuedes;