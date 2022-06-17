import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/InstalaJava/img1.png';
function ImpresionConsola(props){
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
                            ¿Cómo podemos imprimir en la consola?
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
                            Muy bien {Usuario.User}, una vez que hemos visto lo que es un codigo y cómo es que funciona, ya podemos empezar la parte interesante,
                            que es el proceso de programar, pero antes tenemos que realizar algunas configuraciones, empezando por descargar e instalar el software de Java.
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="p">
                            JAVA JDK 17
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Lo primero que debemos hacer acceder a la página de <a href='https://www.oracle.com/java/technologies/downloads/' target='_blank'> descargas</a> oficial de Oracle,
                            ahí se nos proveerán diversas opciones para poder descargar el Kit de Desarrollo Estándar (JDK) de Java, este Kit es necesario ya que, sin él,
                            no podremos compilar ningún programa en dicho
                            lenguaje, además sus componentes son necesarios para el IDE NetBeans, el cual explicaremos en la siguiente sección.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img1} height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Como podemos ver en la imagen tenemos diversas opciones y versiones de JDK para instalar, nuestra recomendación es descargar la última versión de Java 17,
                            ya que es la que cuenta con más compatibilidad, y en general es más estable.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Dependiendo de tu sistema operativo, será la versión que tengas que descargar, para este pequeño tutorial nos enfocaremos en la versión de Windows utilizando
                            un archivo ejecutable de tipo EXE.
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

export default ImpresionConsola;