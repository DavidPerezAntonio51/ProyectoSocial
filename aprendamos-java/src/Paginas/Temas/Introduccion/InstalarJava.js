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
import img7 from '../../../assets/InstalaJava/img7.png';
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
                            �C�mo podemos instalar Java?
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
                            Muy bien {Usuario.User}, una vez que hemos visto lo que es un codigo y c�mo es que funciona, ya podemos empezar la parte interesante,
                            que es el proceso de programar, pero antes tenemos que realizar algunas configuraciones, empezando por descargar e instalar el software de Java.
                        </Typography>
                        <br></br>   
                        <Typography variant="h5" component="p">
                            JAVA JDK 17
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Lo primero que debemos hacer acceder a la p�gina de <a href='https://www.oracle.com/java/technologies/downloads/' target='_blank'> descargas</a> oficial de Oracle,
                            ah� se nos proveer�n diversas opciones para poder descargar el Kit de Desarrollo Est�ndar (JDK) de Java, este Kit es necesario ya que, sin �l,
                            no podremos compilar ning�n programa en dicho
                            lenguaje, adem�s sus componentes son necesarios para el IDE NetBeans, el cual explicaremos en la siguiente secci�n.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img1} height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Como podemos ver en la imagen tenemos diversas opciones y versiones de JDK para instalar, nuestra recomendaci�n es descargar la �ltima versi�n de Java 17,
                            ya que es la que cuenta con m�s compatibilidad, y en general es m�s estable.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Dependiendo de tu sistema operativo, ser� la versi�n que tengas que descargar, para este peque�o tutorial nos enfocaremos en la versi�n de Windows utilizando
                            un archivo ejecutable de tipo EXE.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img2} height="400" width="800" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Una vez descargado el ejecutable, procederemos a realizar la instalaci�n, que es muy sencilla, simplemente sigue las instrucciones que se muestran en la ventana.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img4} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Un punto importante es que verifiques donde vas a instalar JDK, ya que vas a necesitar conocer dicha ubicaci�n para un paso posterior, en nuestro caso la dejaremos por
                            defecto dentro de la carpeta de archivos de programa.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img5} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Entonces ahora dejamos que el instalador continue su proceso, cuando haya finalizado tendremos una opci�n para poder ver la documentaci�n de JDK (Next Steps),
                            que de igual forma puedes acceder haciendo clic <a href='https://docs.oracle.com/en/java/javase/17/index.html' target='_blank'> aqu�</a>, nunca st� de m�s revisar
                            documentaci�n oficial de Oracle.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img6} height="400" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            �Y listo {Usuario.User}! Ya tienes instalado el Kit de desarrollo de Java en tu computadora, ahora solo necesitas asignar las variables de entorno y estar�s un paso m�s cerca de poder
                            crear tu primer programa en este lenguaje.
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="p">
                            VARIABLES DE ENTORNO
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Si ahora tuvieras un peque�o programa en lenguaje Java y quisieras probarlo en la consola, lo m�s probable es que te encuentres con un error indic�ndote que el comando para compilarlo es invalido,
                            esto se debe a que Java por defecto no configura sus variables de entorno en tu computadora.
                        </Typography>
                        <Typography variant="body1" component="p">
                            Si quieres comprobar esto, basta con hacer una simple comprobaci�n con el s�mbolo del sistema, �brelo y escribe el comando �javac -version�, notar�s que Windows no reconoce dicho comando que forma
                            parte de JDK, vamos a solucionar esto.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img3} height="350" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Pero antes de continuar, �Te estar�s preguntando qu� es una variable de entorno?
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            En palabras simples, una variable de entorno es un valor din�mico cargado en la memoria, que puede ser utilizado por varios procesos que funcionan simult�neamente, en muchos casos durante la carrera, vas a ver la necesidad
                            de utilizarlos al momento de utilizar un nuevo lenguaje de programaci�n en tu computadora, m�s espec�ficamente, utilizar�s la variable PATH, que especifica la ruta de acceso a los archivos ejecutables m�s
                            importantes del sistema, que en este manual ser�n los archivos ejecutables de Java.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            Bien, una vez explicadas brevemente las variables de entorno, ahora si, vamos a agregar JDK a la lista del PATH para poder utilizar sus comandos.
                        </Typography>
                        <br></br>
                        <Typography variant="body1" component="p">
                            �Recuerdas que m�s arriba mencionamos que guardaras la ubicaci�n de tu instalaci�n de JDK?, bien ahora necesitaras ir a dicha direcci�n y buscar una carpeta especifica, la carpeta �\bin�, si tu instalaci�n fue correcta,
                            no deber�as tener ning�n problema encontr�ndola, abre esta carpeta y ahora simplemente basta con que des clic en la barra de b�squeda superior para que aparezca su ruta especifica, c�piala, ya que la necesitaremos para agregarla al PATH.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img11} height="200" width="650" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Para acceder a la lista de variables de entorno, basta con que escribas la palabra variables en la barra de b�squeda de Windows, selecciona la opci�n �Editar las variables de entorno del sistema�, se abrir� una peque�a ventana de propiedades,
                            y casi en la esquina inferior derecha estar� el bot�n de variables de entorno, has clic en �l.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img7} width="500" height="250" />
                            
                            <img src={img8} height="350" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            En esta nueva ventana veras dos tipos de variables de entorno, las variables de usuario, y las variables de sistema, para que estas variables puedan ser utilizadas por cualquier usuario del equipo sin tener que estar
                            configur�ndolas cada que se quieran utilizar, utilizaremos las del sistema, y buscamos la secci�n de �Path�, la seleccionamos y damos clic en editar.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img9} height="350" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Se nos abre una nueva ventana con las variables de entorno del PATH ya existentes, damos clic en el bot�n nuevo y pegamos la direcci�n que se copi� previamente en los pasos anteriores, aquella que termina en �/bin�,
                            despu�s damos clic en aceptar en todas las ventanas, y listo ya tenemos la variable de entorno de Java configurada.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img12} height="350" width="300" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            Para probar que todo funciona, simplemente abrimos otra ventana del s�mbolo del sistema y nuevamente escribimos el comando �javac -version�, si todo funcion�, nos deber�a indicar la versi�n de JDK que instalamos.
                        </Typography>
                        <Grid sx={{ textAlign: "center", padding: 5 }}>
                            <img src={img13} height="350" width="550" />
                        </Grid>
                        <Typography variant="body1" component="p">
                            �Y ya est� {Usuario.User}! ya tenemos instalado y configurado Java, si tenemos alg�n c�digo sencillo podemos probarlo sin inconvenientes desde el s�mbolo del sistema,  o bien si utilizamos alg�n IDE como NetBeans, podremos utilizarlo
                            sin que nos marque alg�n error, de hecho en la siguiente secci�n hablaremos de c�mo instalar y configurar dicho IDE.
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