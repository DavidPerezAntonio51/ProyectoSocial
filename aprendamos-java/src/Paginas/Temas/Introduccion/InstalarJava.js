import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/InstalaJava/img1.png';
import img2 from '../../../assets/InstalaJava/img2.png';
import img3 from '../../../assets/InstalaJava/img3.png';
import img4 from '../../../assets/InstalaJava/img4.png';
import img5 from '../../../assets/InstalaJava/img5.png';
import img6 from '../../../assets/InstalaJava/img6.png';
import img8 from '../../../assets/InstalaJava/img8.png';
import img9 from '../../../assets/InstalaJava/img9.png';
import img11 from '../../../assets/InstalaJava/img11.png';
import img12 from '../../../assets/InstalaJava/img12.png';
import img13 from '../../../assets/InstalaJava/img13.png';

function InstalarJava() {
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
                            ¿Cómo podemos instalar Java?
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
                            Muy bien {Usuario.User}, una vez que hemos visto lo que es un código y cómo es que funciona, ya podemos empezar la parte interesante,
                            que es el proceso de programar, pero antes tenemos que realizar algunas configuraciones, empezando por descargar e instalar el software de Java.
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="p">
                            JAVA SE DEVELOPMENT KIT 17
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Lo primero que debemos hacer acceder a la página de <a href='https://www.oracle.com/java/technologies/downloads/' target='_blank'> <b>descargas</b></a> oficial de Oracle,
                            ahí se nos proveerán diversas opciones para poder descargar el <b>Kit de Desarrollo Estándar (JDK) de Java</b>, este Kit es necesario ya que, sin él,
                            no podremos compilar ningún programa en dicho
                            lenguaje, además sus componentes son necesarios para el <b>IDE NetBeans</b>, el cual explicaremos en la siguiente sección.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img1} height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Como podemos ver en la imagen tenemos diversas opciones y versiones de JDK para instalar, nuestra recomendación es descargar la última versión de <b>Java 17</b>,
                            ya que es la que cuenta con más compatibilidad, y en general es más estable.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Dependiendo de tu sistema operativo, será la versión que tengas que descargar, para este pequeño tutorial nos enfocaremos en la versión de Windows utilizando
                            un archivo ejecutable de tipo EXE.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img2} height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Una vez descargado el ejecutable, procederemos a realizar la instalación, que es muy sencilla, simplemente sigue las instrucciones que se muestran en la ventana.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img4} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Un punto importante es que verifiques donde vas a instalar JDK, ya que vas a necesitar conocer dicha ubicación para un paso posterior, en nuestro caso la dejaremos por
                            defecto dentro de la carpeta de archivos de programa.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img5} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Entonces ahora dejamos que el instalador continue su proceso, cuando haya finalizado tendremos una opción para poder ver la documentación de JDK (<b>Next Steps</b>),
                            que de igual forma puedes acceder haciendo clic <a href='https://docs.oracle.com/en/java/javase/17/index.html' target='_blank'> aquí</a>, nunca está de más revisar
                            documentación oficial de Oracle.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img6} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            ¡Y listo {Usuario.User}! Ya tienes instalado el Kit de desarrollo de Java en tu computadora, ahora solo necesitas asignar las variables de entorno y estarás un paso más cerca de poder
                            crear tu primer programa en este lenguaje.
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="p">
                            VARIABLES DE ENTORNO
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Si ahora tuvieras un pequeño programa en lenguaje Java y quisieras probarlo en la consola, lo más probable es que te encuentres con un error indicándote que el comando para compilarlo es invalido,
                            esto se debe a que Java por defecto no configura sus variables de entorno en tu computadora.
                        </Typography>
                        <Typography variant="body1" component="p">
                            Si quieres comprobar esto, basta con hacer una simple comprobación con el símbolo del sistema, ábrelo y escribe el comando <i>“javac -version”</i>, notarás que Windows no reconoce dicho comando que forma
                            parte de JDK, vamos a solucionar esto.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img3} height="350" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Pero antes de continuar, te estarás preguntando, ¿qué es una <b><i>variable de entorno</i></b>?
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            En palabras simples, una variable de entorno es un valor dinámico cargado en la memoria, que puede ser utilizado por varios procesos que funcionan simultáneamente, en muchos casos durante la carrera, vas a ver la necesidad
                            de utilizarlos al momento de utilizar un nuevo lenguaje de programación en tu computadora, más específicamente, utilizarás la variable <i>PATH</i>, que especifica la ruta de acceso a los archivos ejecutables más
                            importantes del sistema, que en este manual serán los archivos ejecutables de Java.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Bien, una vez explicadas brevemente las variables de entorno, ahora si, vamos a agregar JDK a la lista del <i>PATH</i> para poder utilizar sus comandos.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            ¿Recuerdas que más arriba mencionamos que guardaras la ubicación de tu instalación de JDK?, bien ahora necesitaras ir a dicha dirección y buscar una carpeta especifica, la carpeta con terminación <i>“\bin”</i>, si tu instalación fue correcta,
                            no deberías tener ningún problema encontrándola, abre esta carpeta y ahora simplemente basta con que des clic en la barra de búsqueda superior para que aparezca su ruta especifica, cópiala, ya que la necesitaremos para agregarla al <i>PATH</i>.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img11} height="160" width="650" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Para acceder a la lista de variables de entorno, basta con que escribas las palabras <i>“Variables de entorno”</i> en la barra de búsqueda de Windows, selecciones la opción <b><i>“Editar las variables de entorno del sistema”</i></b>, se abrirá una pequeña ventana de propiedades del sistema,
                            y casi en la esquina inferior derecha estará el botón de <b><i>“Variables de entorno”</i></b>, has clic en él.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img8} height="350" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            En esta nueva ventana veras dos tipos de variables de entorno, las variables de usuario, y las variables de sistema, para que estas variables puedan ser utilizadas por cualquier usuario del equipo sin tener que estar
                            configurándolas cada que se quieran utilizar, utilizaremos las del sistema, y buscamos la sección de <i>“Path”</i>, la seleccionamos y damos clic en editar.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img9} height="340" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Se nos abre una nueva ventana con las variables de entorno del <i>PATH</i> ya existentes, damos clic en el botón nuevo y pegamos la dirección que se copió previamente en los pasos anteriores, aquella que termina en <i>“\bin”</i>,
                            después damos clic en aceptar en todas las ventanas, y listo ya tenemos la variable de entorno de Java configurada.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img12} height="320" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Para probar que todo funciona, simplemente abrimos otra ventana del símbolo del sistema y nuevamente escribimos el comando <i>“javac -version”</i>, si todo funcionó, nos debería indicar la versión de JDK que instalamos.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img13} height="350" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            ¡Y ya está {Usuario.User}! ya tenemos instalado y configurado Java, si tenemos algún código sencillo podemos probarlo sin inconvenientes desde el símbolo del sistema,  o bien si utilizamos algún IDE como NetBeans, podremos utilizarlo
                            sin que nos marque algún error, de hecho en la siguiente sección hablaremos de cómo instalar y configurar dicho IDE.
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

export default InstalarJava;