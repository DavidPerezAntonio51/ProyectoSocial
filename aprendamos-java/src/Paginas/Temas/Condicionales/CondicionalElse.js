import {Box, Container} from "@mui/system";
import {Grid, TableContainer, Typography} from "@mui/material";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";

function CondicionalElse(props){
    return(
        <>
        <Container>
            <Grid container>
                <Grid item sx={{minWidth:"100%"}}>
                    <Box sx={{color:'text.secondary'}}>
                        <Typography variant="h3" component="h4" sx={{textAlign:"center"}}>Sentencia ELSE</Typography>
                        <br />
                        <Typography variant="body1" component="p">En hora buena que terminaste <b>{props.objeto}</b>, con el primer condicional y el más importante para comprender el buen uso y funcionamiento de las sentencias basicas de todo lenguaje.</Typography>
                        <Typography variant="body1" component="p">Ahora abordaremos la situación donde aceptamos el caso contrario al principal. Si retomamos el ejemplo de si tus padres te dicen que te portes bien <b>obtendras el dulce que desees</b> pero si haces todo lo contario <b>obtendras un regaño y talvez puedas estar castigad@</b>.</Typography>
                        <br />
                        <Typography variant="body1" component="p">De modo que utilizando este ejemplo ahora tenemos dos posibilidades, una es portarnos bien o hacer caso omiso, en una obtendremos un dulce para la cena y en la otra un castigo que a nadie le llama la atención. De modo que en comparación con el tema anterior es que tenemos un panorama más completo, el cual nos permite tener una idea completa de como se puede mostrar las diferentes posibilidades que dado nuestro comportamiento tendremos.</Typography>
                        <Typography variant="body1" component="p">Con esto podremos tener una estructura condicional mas eficiente y robusta, dado que ahora realizaremos operaciones especificas en casos donde no se satisfaga la condición incial. La cual en contraste con la sentencia IF, no solo tendremos una sola operación por ejecutar, sino que podemos ahora tener dos para capturar los posibles casos.</Typography>
                        <br />
                        <Typography variant="h5" component="h4">Sintaxis</Typography>
                        <Typography variant="body1" component="p">Ahora no creas que lo visto anteriormente ya no lo usaremos, sino que es nuestra base para ir mejorando nuestros conocimientos y con esto tener un mejor desarrollo para entender este lenguaje de programación.</Typography>
                        <Typography variant="body1" component="p">De modo que tendríamos el siguiente ejemplo: </Typography>
                        <br />
                    </Box>
                    <Grid item sx={{p:5}}>
                        <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1}}>
                            <Typography variant="subtitle" component="pre" alignSelf={"center"}>
                            {`public class Main{
    public static void main(String[] args){
        int numero = 2; //Inicializamos el valor de numero con 2
        if(numero > 1){ //preguntamos ¿2 (numero) es mayot a 1?
            //CIERTO
            //imprimos este mensaje
            System.out.println("Numero es mayor a 1, este tiene el valor de: "+numero);
        }
    }
}`}
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{color:'text.secondary'}}>
                        <Typography variant="body1" component="p">Como podemos observar en el ejemplo anterior, vemos que la variable numero esta inicializada en 2 y contamos con un if para probar si numero es mayor a 1, lo cual es cierto y entramos en el <b>segmento de código que contiene el bloque</b> de modo que esa sería toda la implementación.</Typography>
                        <br />
                        <Typography variant="h5" component="h4" sx={{textAlign:"center"}}>Operadores</Typography>
                        <Typography variant="body2" component="h5" sx={{textAlign:"center", color:"#cb4335"}}><b>Nota solo se abordarán los operadores básicos, los demás son los agregados al lenguaje de programación como el de cadenas o elementos especificos del mismo.</b></Typography>
                        <Typography variant="body1" component="p">Para este tipo de condicional contamos con una cantidad suficiente de operadores para realizar operaciones dentro de nuestro programa, esto dependiento de cual es la finalidad que deseamos desarrollar o lograr con el mismo.</Typography>
                        <Typography variant="body1" component="p">La finalidad de los operadores es brindar a los desarrolladores una forma más eficaz de evaluar las expresiones que ellos intentan lograr, utilizando simbolos clave para tener acceso a estas. de modo que a continuación se muestran cuales son los operadores que podemos utilizar en este lenguaje.</Typography>
                        <br />
                        <center>
                        
                        </center>
                        <br />
                        <Typography variant="body1" component="p">Como podemos observar tenemos 3 operadores básicos para aplicarlos en las condiciones, estos representan operaciones binarias, como las vistas en algebra de boole.</Typography>
                        <Typography variant="body1" component="p">De modo que esta sería una de las representaciones de como funciona cada elemento.<br />A continuación se mostrará las tablas de verdad de cada operador previamente mostrado.</Typography>
                        <br /><br />
                        <Grid container spacing={2}  alignItems="center" alignContent='center' justifyContent="center">
                            <Grid item>
                            <img src={require('../../../assets/Condicionales/operAnd.png')} alt="Imagen de la tabla de verdad del operador AND" ></img>
                            </Grid>
                            <Grid item>
                            <img src={require('../../../assets/Condicionales/operOr.png')} alt="Imagen de la tabla de verdad del operador OR"></img>
                            </Grid>
                            <Grid item>
                            <img src={require('../../../assets/Condicionales/operNot.png')} alt="Imagen de la tabla de verdad deñ operador NOT"></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>            
        </Container>
        </>
    );
};

export default CondicionalElse;