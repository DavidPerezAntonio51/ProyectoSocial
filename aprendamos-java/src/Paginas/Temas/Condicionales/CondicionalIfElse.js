import {Box, Container} from "@mui/system";
import {Grid, TableContainer, Typography} from "@mui/material";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import { useContext } from "react";

function CondicionalIfElse(){
    const Usuario = useContext(UserContext);
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return(
        <Container >
            <Grid container>
                <Grid item sx={{paddingTop: 7}}>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingX: 7}}>
                        <Typography variant="h3" component="h4" sx={{textAlign:"center", paddingBottom:2, paddingTop:0.5}}>Sentencia If - Else</Typography>

                        <Typography variant="body1" component="p"><b>¡En hora buena, {Usuario.User}!</b>, acabas de terminar con los temas fundamentales de los condicionales, de momento puedes realizar cualquier programa que te soliciten haciendo uso de estos, en este apartado se buscará explicar la concatenación de condicionales utilizando la estructura <Typography variant="b" component="b">IF ELSE</Typography>. La cual es una de las más utilizadas y principalmente será una a la que llegues a recurrir mucho a lo largo de tu carrera.</Typography>
                        <Typography variant="body1" component="p">De modo que se presentará un ejemplo y con ello la explicación de este, donde al final se proponen ejercicios de práctica para mejorar el entedimiento y tener una base más solida.</Typography>

                        <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >¿Cuál es la principal funcionalidad de esta sentencia?</Typography>

                        <Typography variant="body1" component="p">Como tal es el aplicar los conocimientos previos para realizar un código más robusto el cuál nos permita obtener todos los posibles casos en los que el programa que estamos desarrollando funcione de forma correcta y sin errores durante y después de la ejecución.</Typography>
                        <Typography variant="body1" component="p">Un ejemplo en donde lo podríamos aplicar es cuando estamos realizando un programa de tabulador de impuestos para determinar el impuesto sobre la renta que el usuario tendrá que pagar en la próxima declaración de impuestos. Esto practicamente se aplica dado que dependiendo de la renta será la cantidad o porcentaje que cada uno tendría que pagar.</Typography>

                        <Typography variant="h5" component="h4" sx={{paddingTop:2,paddingBottom:2}}>Sintaxis</Typography>
                        <Typography variant="body1" component="p">La sintaxis será similar a la que hemos estando trabajando, iniciamos abriendo un condicional if y seguido a este podemos tener la sentencia Else o hasta podemos llegar a contenar los mismos conficionaes.</Typography>
                        <Typography variant="body1" component="p" sx={{paddingBottom:1}}>Se desarrollará el ejemplo anteriormente mencionado: </Typography>
                        <Grid item sx={{p:1, backgroundColor: "stratos.main"}}>
                            <Typography variant="h6" sx={{paddingX:10}}>
                                <Box sx={{maxWidth:"calc(90vw - 32px)", overflowX:"auto", overflowY:"unset", whiteSpace:"nowrap", backgroundColor:"#111111", color:"#e1e7f2", paddingY:3, paddingTop:3, paddingX:3, fontSize:15}}>
                                    {"import java.util.Scanner;"}<span className="comentario">{'//Este es una importación de elementos de Java'}</span>
                                    <br />
                                    {"public class Main{"}
                                    <br />
                                    {tab}{"public static void main(String[] args){"}
                                    <br />
                                    {tab}{tab}{"Scanner entrada = new Scanner(System.in);"}<span className="comentario">{'//Creamos el objeto para realizar la obtención de la entrada'}</span>
                                    <br />
                                    {tab}{tab}{"float datoUsuario;"}<span className="comentario">{'//Creamos la variable que usaremos para almacenar la entrada'}</span>
                                    <br />
                                    {tab}{tab}{'System.out.println("Ingresa el valor de tu renta anual: ");'}<span className="comentario">{'//Almacenamos el valor desde la entrada'}</span>
                                    <br />
                                    {tab}{tab}{"entrada.nextFloat(datoUsuario);"}
                                    <br />
                                    {tab}{tab}{"if(datoUsuario > 0){"}<span className="comentario">{'//Comprobamos que la entrada seá correcta'}</span>
                                    <br />
                                    {tab}{tab}{tab}{"if(datoUsuario >= 0.01 && datoUsuario <= 7735){"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Aplicamos un porcentaje de 1.92");'}
                                    <br />
                                    {tab}{tab}{tab}{"}else if(datoUsuario > 7735 && datoUsuario <= 65651.07){"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Aplicamos un porcentaje de 6.40");'}
                                    <br />
                                    {tab}{tab}{tab}{"}else if(datoUsuario > 65651.08 && datoUsuario <= 115375.90){"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Aplicamos un porcentaje de 10.88");'}
                                    <br />
                                    {tab}{tab}{tab}{"}else if(datoUsuario > 115375.91 && datoUsuario <= 134119.41){"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Aplicamos un porcentaje de 16");'}
                                    <br />
                                    {tab}{tab}{tab}{"}else if(datoUsuario > 134119.42 && datoUsuario <= 160577.65){"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Aplicamos un porcentaje de 17.92");'}
                                    <br />
                                    {tab}{tab}{tab}{"}else{"}
                                    <br />
                                    {tab}{tab}{tab}{tab}{'System.out.println("Ingresa un dato flotante entre 0.001 y 160577.65 .");'}
                                    <br />
                                    {tab}{tab}{tab}{"}"}
                                    <br />
                                    {tab}{tab}{"}else{"}
                                    <br />
                                    {tab}{tab}{tab}{'System.out.println("Corrobora tu entrada, no corresponde con una valor correcto.");'}
                                    <br />
                                    {tab}{tab}{"}"}
                                    <br />
                                    {tab}{"}"}
                                    <br />
                                    {"}"}
                                </Box>
                            </Typography>
                        </Grid>
                    <br />
                        <Typography variant="body2" component="p" xs={{color:"#FF2629"}}>Nota estos datos fueron extraidos de la siguiente liga: <a href="https://contaduriaccii.com.mx/isr-impuesto-sobre-la-renta-tablas-2022/" target="_blank">solo fue para representar un ejemplo con datos</a>, nota que estos datos mostrados estan truncados, con la finalidad de no mostrar un código muy largo y tedioso.</Typography>
                        <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>Ejercicios propuestos</Typography>
                        <Typography variant="body1" component="p">A continuación se mostrará la redacción de los ejercicios que se consideran que los resulvas <b>{Usuario.User}</b>, esperando que puedan ser de ayuda para tu aprendizaje, recuerda que debería ser ahora más sencillo el resolverlos.</Typography>
                        <Typography variant="body1" component="p">
                            <ol>
                                <li>Escribir un programa que le pida un número al usuario, deberá de delimitar si el número es par y mayor a 20, mostrando el mensaje de “Tu número cumple con las condiciones”, en caso de que sea par pero menor a 20, deberá enseñar el mensaje de “Tu número solo cumple con una condición revisa de nuevo tu entrada” y el caso de que no cumpla ninguna de las opciones, deberá mostrar “Tu número no cumple con ninguna condición, se termina la ejecución…”.</li>
                                <li>Escribir un programa que le pida el número celular al usuario, este debera corroborarse que la longitud del número sea de 10 digitos, apartir de este se debe de comprobar que sus elementos sean diferentes.</li>
                            </ol>
                        </Typography>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{paddingTop:3}}>
                            <Grid item sx={{ paddingY:2}}>
                                <VolverAlMenu />
                            </Grid>
                            <Grid item sx={{ paddingY:2}}>
                                <SiguienteTema />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CondicionalIfElse;