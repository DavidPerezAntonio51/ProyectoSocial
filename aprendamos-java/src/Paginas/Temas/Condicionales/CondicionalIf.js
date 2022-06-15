import {Box, Container} from "@mui/system";
import {Grid, TableContainer, Typography} from "@mui/material";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";



function createData(item, repre, sintaxis){
    return {item, repre, sintaxis};
}

const rows = [
    createData("AND (y)", "&&", "A && B"),
    createData("OR (o)", "||", "A || B"),
    createData("NOT (no)", "!", "!A")
];

function CondicionalIf(){
    return(
        <>
        <Container>
            <Grid container>
                <Grid item sx={{minWidth:"100%"}}>
                    <Box sx={{color:'text.secondary'}}>
                        <Typography variant="h3" component="h4" sx={{textAlign:"center"}}>Sentencia IF</Typography>
                        <br />
                        <Typography variant="body1" component="p">En esta sección se abordara el tema de condicionales utilizando la sentencia <Typography variant="b" component="b">IF</Typography>. La cual es una de las mas utilizadas y principales que nosotros como programadores debemos de tener por defecto en nuestro conocimiento.</Typography>
                        <Typography variant="body1" component="p">De modo que aquí te explicaremos un poco de como hacer uso de dicho elemento y el como se debe explear de forma correcta.</Typography>
                        <br />
                        <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >¿Qué es la sentencia IF?</Typography>
                        <br />
                        <Typography variant="body1" component="p">Es un mecanismo el cual nos permite tener un control en la ejcución de nuestro programa, al realizar una pregunta respecto a algun valor que estemos considerando.</Typography>
                        <Typography variant="body1" component="p">Por ejemplo, cuando eras pequeño talvez tus padres te llegaron a poner una condición de "Si te portas bien te compraré el dulce que quieras". De este modo la variable o valor que se medía era tu comportamiento de esta manera sabías que si tenías un buen comportamiento obtendrás el dulce que desees, de esta manera es similar la forma en la que funciona la sentencia if.</Typography>
                        <br />
                        <Typography variant="h5" component="h4">Sintaxis</Typography>
                        <Typography variant="body1" component="p">En todos los casos (o más bien los que conozco) siempre se realizará una comparación de una variable con un valor o de una variable con otra.</Typography>
                        <Typography variant="body1" component="p">Algo como lo siguiente: </Typography>
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
                        <TableContainer sx={{backgroundColor:'text.secondary', width:'70%'}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Nombre operador</TableCell>
                                        <TableCell align="left">Representación</TableCell>
                                        <TableCell align="left">Sintaxis</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{color:'text.secondary'}}>
                                    {rows.map((row, index)=>(
                                        <TableRow key={index}>
                                            <TableCell>{row.item}</TableCell>
                                            <TableCell>{row.repre}</TableCell>
                                            <TableCell>{row.sintaxis}</TableCell>
                                        </TableRow>
                                    ))}    
                                </TableBody>
                            </Table>
                        </TableContainer>
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
}

export default CondicionalIf;