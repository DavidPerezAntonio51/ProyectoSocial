import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/InstalaNetBeans/IMG1.png';
import img2 from '../../../assets/InstalaNetBeans/IMG2.png';
import img3 from '../../../assets/InstalaNetBeans/IMG3.png';
import img4 from '../../../assets/InstalaNetBeans/IMG4.png';
import img5 from '../../../assets/InstalaNetBeans/IMG5.png';
import img6 from '../../../assets/InstalaNetBeans/IMG6.png';
import img7 from '../../../assets/InstalaNetBeans/IMG7.png';
import img8 from '../../../assets/InstalaNetBeans/IMG8.png';

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
                            ahora podemos pasar a instalar el <b>IDE NetBeans</b>, pero antes de eso, vamos a hablar de que es esta herramienta.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            <b>NetBeans</b> es un entorno de desarrollo integrado libre, hecho principalmente para el lenguaje de
                            programación Java y cuenta con un número importante de módulos para extenderlo.
                            Se trata de un editor de código fuente, junto con recursos de construcción automáticos y un depurador.
                            Igualmente, brinda la función de autocompletado inteligente de código o IntelliSense. Y en el caso de la
                            plataforma de Netbeans IDE, ofrece un compilador y un intérprete.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Sin más que decir, vamos a instalar nuestro IDE favorito, para ello es necesario ingresar su página oficial,
                            la cual puedes acceder en este <a href='https://netbeans.apache.org/download/index.html' target='_blank'> <b>enlace</b></a>.
                            Aquí estará la versión más reciente para descargar, por lo que recomendamos ampliamente que descargues esta última
                            para no tener problemas.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img1} alt="Imagen 1" height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Al igual que como ocurría con <b>Java Development Kit (JDK)</b>, se nos presentan las distintas versiones para Windows,
                            Linux o Mac, descarga la versión que más se adecue a tus necesidades, en nuestro caso por conveniencia seguiremos manejando
                            la instalación para Windows.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img2} alt="Imagen 2" height="360" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Una vez que el archivo ejecutable se haya instalado, ahora lo abrimos, en la primera ventana se nos dará a elegir que es lo que
                            queremos instalar, NetBeans tiene la bondad de ofrecernos más opciones de uso para otros lenguajes, como HTML o PHP, dado que este
                            es un curso de Java, nos centraremos en la instalación de las utilidades necesarias de esta, pero si lo deseas puedes instalar el resto
                            de los módulos para utilizarlos después.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img3} alt="Imagen 3" height="380" width="500" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Como suele suceder con este tipo de software, tendremos que aceptar los términos de la licencia, basta con palomear la casilla correspondiente
                            y dar clic en siguiente.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img4} alt="Imagen 4" height="380" width="500" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Ahora tenemos las direcciones de instalación, la primera es la ubicación donde vamos a instalar el IDE y sus componentes, si deseas puedes
                            cambiarla o dejarla así como está por defecto.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img5} alt="Imagen 5" height="380" width="500" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            En la segunda dirección hay que tener mucho cuidado {Usuario.User}, ¿recuerdas la sección anterior cuando instalaste JDK?, bueno, pues es un buen
                            momento de recordar la ubicación en donde instalaste Java, ya que aquí tendrás que señalar al instalador dicha localización, ya que, de lo contrario,
                            NetBeans no podrá ejecutar los comandos de dicho kit de desarrollo. Si no cambiaste la carpeta por defecto en la instalación de Java JDK, aquí no tendrás
                            que mover nada, ya que detectará automáticamente la ubicación predeterminada, ahora solo da clic en siguiente.
                        </Typography>
                        <Typography variant="body1" component="p">
                            En esta última ventana solo se te preguntará si quieres que NetBeans busque actualizaciones automáticamente, si lo deseas, déjala marcada y da clic en instalar.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img6} alt="Imagen 6" height="380" width="500" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Y después de todo eso, ahora ya solo queda esperar a que se instalen los segmentos clave y los módulos adicionales, y ¡listo! ya tenemos nuestro IDE instalado correctamente.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img7} alt="Imagen 7" height="380" width="500" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            NetBeans es una herramienta muy útil para principiantes o usuarios que no deseen meterse de lleno con la terminal del sistema, ya que como se mencionó al principio, tiene muchas
                            utilidades, como que cuenta con su propio compilador, depurador, asistente para crear proyectos, entre muchas cosas más que pueden facilitar la tarea de crear un proyecto en Java.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img8} alt="Imagen 8" height="380" width="700" />
                        </Grid>
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