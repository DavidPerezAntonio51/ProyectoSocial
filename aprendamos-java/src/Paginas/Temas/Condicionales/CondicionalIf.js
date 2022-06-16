import {Box, Container} from "@mui/system";
import {Grid, TableContainer, Typography} from "@mui/material";
import {Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import CondicionalesInicial from "./CondicionalesInicial";


function createData(item, repre, sintaxis){
    return {item, repre, sintaxis};
}

const rows = [
    createData("AND (y)", "&&", "A && B"),
    createData("OR (o)", "||", "A || B"),
    createData("NOT (no)", "!", "!A")
];

function CondicionalIf(props){
    return(
        
        <Container >
            <Grid container>
                <Grid item sx={{paddingTop:7}}>
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingX: 7}}>
                    <CondicionalesInicial nombreUser ={props.objeto}></CondicionalesInicial>
                        <Typography variant="h3" component="h4" sx={{textAlign:"center", paddingBottom:2, paddingTop:0.5}}>Sentencia IF</Typography>
                        
                        <Typography variant="body1" component="p">En esta sección se abordara el tema de condicionales utilizando la sentencia <Typography variant="b" component="b">IF</Typography>. La cual es una de las más utilizadas y principales que nosotros como programadores debemos de tener por defecto en nuestro conocimiento.</Typography>
                        <Typography variant="body1" component="p">De modo que aquí te explicaremos un poco de como hacer uso de dicho elemento y el como se debe emplear de forma correcta.</Typography>
                        
                        <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >¿Qué es la sentencia IF?</Typography>
                        
                        <Typography variant="body1" component="p">Es un mecanismo el cual nos permite tener un control en la ejcución de nuestro programa, al realizar una pregunta respecto a algun valor que estemos considerando.</Typography>
                        <Typography variant="body1" component="p">Por ejemplo, cuando eras pequeño talvez tus padres te llegaron a poner una condición de "Si te portas bien te compraré el dulce que quieras". De este modo la variable o valor que se medía era tu comportamiento de esta manera sabías que si tenías un buen comportamiento obtendrás el dulce que desees, de esta manera es similar la forma en la que funciona la sentencia if.</Typography>
                        
                        <Typography variant="h5" component="h4" sx={{paddingTop:2,paddingBottom:2}}>Sintaxis</Typography>
                        <Typography variant="body1" component="p">En todos los casos (o más bien los que conozco) siempre se realizará una comparación de una variable con un valor o de una variable con otra.</Typography>
                        <Typography variant="body1" component="p" sx={{paddingBottom:1}}>Algo como lo siguiente: </Typography>
                        
                    </Box>
                    <Grid item sx={{p:5, backgroundColor: "stratos.main"}}>
                        <Box sx={{width:"90%", height:"40%", backgroundColor:'#111111', color:'#e1e7f2', p:1, fontSize:"70%", padding:"0 0 0 5%"}}>
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
                    <Box sx={{color:'regalBlue.main', backgroundColor: "boticelli.main", paddingY: 5, paddingX: 7}}>
                    <Typography variant="body1" component="p">Como podemos observar en el ejemplo anterior, vemos que la variable numero esta inicializada en 2 y contamos con un if para probar si numero es mayor a 1, lo cual es cierto y entramos en el <b>segmento de código que contiene el bloque</b> de modo que esa sería toda la implementación.</Typography>
                        
                        <Typography variant="h5" component="h4" sx={{textAlign:"center", paddingBottom: 1}}>Operadores</Typography>
                        <Typography variant="body2" component="h5" sx={{textAlign:"left", color:"#cb4335", paddingBottom: 1}}><b>Nota solo se abordarán los operadores básicos, los demás son los agregados al lenguaje de programación como el de cadenas o elementos especificos del mismo, los cuales no se abordarán.</b></Typography>
                        <Typography variant="body1" component="p">Para este tipo de condicional contamos con una cantidad suficiente de operadores para realizar operaciones dentro de nuestro programa, esto dependiento de cual es la finalidad que deseamos desarrollar o lograr con el mismo.</Typography>
                        <Typography variant="body1" component="p" sx={{paddingBottom: 1}}>La finalidad de los operadores es brindar a los desarrolladores una forma más eficaz de evaluar las expresiones que ellos intentan lograr, utilizando simbolos clave para tener acceso a estas. de modo que a continuación se muestran cuales son los operadores que podemos utilizar en este lenguaje.</Typography>
                        
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
                        
                        <Typography variant="body1" component="p" sx={{paddingTop: 1}}>Como podemos observar tenemos 3 operadores básicos para aplicarlos en las condiciones, estos representan operaciones binarias, como las vistas en algebra de boole.</Typography>
                        <Typography variant="body1" component="p">De modo que esta sería una de las representaciones de como funciona cada elemento.<br />A continuación se mostrará las tablas de verdad de cada operador previamente mostrado.</Typography> 
                        <center>
                        <TableContainer sx={{backgroundColor:'text.primary', width:'90%'}}>
                            <Table>
                                <TableBody>
                                        <TableRow key={1}>
                                            <TableCell><img src={require('../../../assets/Condicionales/operAnd.png')} alt="Imagen de la tabla de verdad del operador AND" ></img></TableCell>
                                            <TableCell><img src={require('../../../assets/Condicionales/operOr.png')} alt="Imagen de la tabla de verdad del operador OR"></img></TableCell>
                                            <TableCell><img src={require('../../../assets/Condicionales/operNot.png')} alt="Imagen de la tabla de verdad deñ operador NOT"></img></TableCell>
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </center>
                        <Typography variant="h4" component="h2" sx={{textAlign:'center'}}>Ejercicios propuestos</Typography>
                        <Typography variant="body1" component="p">A continuación se mostrará la redacción de los ejercicios que se consideran que los resulvas <b>{props.objeto}</b>, con la finalidad de tener los temas claros y listos para que hagas uso de estos.</Typography>
                        <Typography variant="body1" component="p">
                            <ol>
                                <li>Escribe un programa que le pregunte al usuario su edad, a partir de esta imprimir en pantalla si es mayor a 18 y menor a 50 años.</li>
                                <li>Escribe un programa que pida al usuario 2 números y que imprima en pantalla la diferencia de estos si es menor a cero.</li>
                                <li>Escribe un programa que pida al usuario un número, debe imprimir en pantalla si el numero es par, mayor a 2 y menor a 100</li>
                            </ol>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>            
        </Container>
        
    );
}

export default CondicionalIf;