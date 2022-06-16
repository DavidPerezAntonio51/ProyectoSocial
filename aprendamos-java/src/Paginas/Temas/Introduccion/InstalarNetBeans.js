import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";

function InstalarNetBeans() {
    const Usuario = useContext(UserContext);
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
                            ¿Cómo instalamos NetBeans?
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
                        <Typography variant="body1" component="p">
                            Con todos los componentes del kit de desarrollo de Java ya configurados,
                            ahora podemos pasar a instalar el IDE NetBeans, pero antes de eso, vamos a hablar de que es esto.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            NetBeans es un entorno de desarrollo integrado libre, hecho principalmente para el lenguaje de
                            programación Java y cuenta con un número importante de módulos para extenderlo.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Se trata de un editor de código fuente, junto con recursos de construcción automáticos y un depurador.
                            Igualmente, brinda la función de autocompletado inteligente de código o IntelliSense. Y en el caso de la
                            plataforma de Netbeans IDE, ofrece un compilador y un intérprete.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">

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


export default InstalarNetBeans;