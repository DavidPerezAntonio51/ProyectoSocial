import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import img14 from '../../../assets/InstalaJava/img14.png';
import img15 from '../../../assets/InstalaJava/img15.png';
import img16 from '../../../assets/InstalaJava/img16.png';
import img17 from '../../../assets/InstalaJava/img17.png';

function ComoFuncionaCodigo() {
    const Usuario = useContext(UserContext);
    const [open1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!open2);
    }

    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(!open3);
    }

    const [open4, setOpen4] = React.useState(false);

    const handleClick4 = () => {
        setOpen4(!open4);
    }

    const [open5, setOpen5] = React.useState(false);

    const handleClick5 = () => {
        setOpen5(!open5);
    }

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
                        <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
                            ??C??mo funciona un c??digo?
                        </Typography>
                    </Grid>
                </Box>
                <Grid item container>
                    <Box sx={{
                        paddingX: 7,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5
                    }}>
                        <Typography variant="body1" component="p">
                            Bien {Usuario.User}, ahora que ya explicamos lo que es el pseudoc??digo y los diagramas de flujo,
                            vamos a revisar de manera m??s formal el c??digo y c??mo es que funciona en tu computadora. ??O es que a caso cre??as que
                            los c??digos se compilaban y ejecutaban con mag??a?.
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" >
                            <List
                                sx={{ width: '100%', maxWidth: '70vw', border: 1, borderColor: 'primary.main', borderRadius: 2, p: 2, textAlign: 'justify' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader
                                        sx={{ textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2, m: 2, backgroundColor: "boticelli.main", color: "regalBlue.main", fontWeight: "bold", fontSize: "h3", p: 2 }}
                                        component="div" id="nested-list-subheader">
                                        Vamos a revisar qu?? es un c??digo y qu?? es lo que pasa cuando lo queremos ejecutar.
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton onClick={handleClick1}>
                                    <ListItemIcon>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Concepto de c??digo" />
                                    {open1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Un c??digo es el conjunto de instrucciones que un desarrollador ordena ejecutar a un computador.
                                                                    Dicho c??digo est?? estructurado seg??n las gu??as correspondientes a un lenguaje de programaci??n espec??fico.
                                                                    La traducci??n del lenguaje de programaci??n a las instrucciones binarias que entienden las m??quinas a bajo
                                                                    nivel se realiza o bien mediante compiladores de c??digo o mediante int??rpretes de c??digo, seg??n el lenguaje
                                                                    de programaci??n y el entorno elegido." />
                                        </ListItemButton>
                                        <Typography><center><img src={img15} alt="Imagen 1" height="250" width="400" /></center></Typography>
                                        <br></br>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick2}>
                                    <ListItemIcon>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="C??digo de un lenguaje de alto nivel" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Java es un lenguaje de alto nivel, ??qu?? significa esto? muy simple, es un lenguaje cuyas instrucciones y algoritmos
                                                                    pueden ser interpretados por un humano, donde podemos ver f??cilmente las variables, matrices, objetos, aritm??tica
                                                                    compleja o expresiones booleanas, subrutinas y funciones, bucles, hilos, cierres y otros conceptos de inform??tica abstracta.
                                                                    Ahora bien, aunque tu puedas entender que es lo que hacen estas instrucciones, tu computadora no es cap??z de procesar
                                                                    por si sola lo que le est??s pidiendo, es aqui donde entra el trabajo de un compilador" />
                                        </ListItemButton>
                                        <Typography><center><img src={img14} alt="Imagen 2" height="350" width="400" /></center></Typography>
                                        <br></br>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick3}>
                                    <ListItemIcon>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Compilaci??n de un c??digo" />
                                    {open3 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open3} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Cuando ya se tiene el c??digo bien hecho, se necesita un compilador, el cual es un traductor inform??tico que analiza
                                                                    el programa fuente y lo traduce a otro equivalente escrito en otro lenguaje (por ejemplo, en lenguaje m??quina). Su acci??n
                                                                    equivale a la de un traductor humano, que toma un libro y produce otro equivalente escrito en otra lengua." />
                                        </ListItemButton>
                                        <Typography><center><img src={img16} alt="Imagen 3" height="250" width="400" /></center></Typography>

                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick4}>
                                    <ListItemIcon>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="C??digo de un lenguaje de bajo nivel" />
                                    {open4 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open4} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Despu??s de que el c??digo fuente ya est?? traducido a un lenguaje de bajo nivel, es aqu?? cuando la CPU puede leer las instrucciones para poder
                                                                    ejecutarlas, cabe mencionar que muchas veces estas instrucciones no son mas que una serie de cadenas binarias que si se intentaran leer,
                                                                    el usuario ??nicamente ver??a grandes cantidades de s??mbolos sin ning??n sentido, de ah?? que se denominen de bajo nivel. El resultado de
                                                                    este proceso suele ser un archivo que el usuario pueda ejecutar." />
                                        </ListItemButton>
                                        <Typography><center><img src={img17} alt="Imagen 4" height="200" width="600" /></center></Typography>
                                        <br></br>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick5}>
                                    <ListItemIcon>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Compilaci??n de c??digos de Java" />
                                    {open5 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open5} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Para poder compilar un programa de Java existen diversos m??todos, la manera m??s tradicional es utilizando la consola de comandos,
                                                                    escribendo el comando javac, seguido del nombre del archivo a compilar. Tambi??n existen los Entornos de desarrollo integrado (IDE),
                                                                    los cuales muchas veces suelen contar con sus propios compiladores, adem??s de que pueden englobar diversas herramientas necesarias
                                                                    para los desarrolladores y as?? aceleran el flujo de trabajo, como un ejemplo de IDE est?? NetBeans, del cual hablaremos m??s adelante." />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Typography>
                        <br />
                        <Typography variant="body1" component="p">
                            A grandes rasgos, as?? es como funciona un c??digo, conforme vayas cursando las materias del plan de estudios de ESCOM,
                            ver??s m??s detalladamente todo el proceso, lo importante aqu?? es saber el por qu?? es necesario instalar el kit de desarrollo
                            de Java en tu equipo: su importancia radica en que te brindar?? el compilador que podr?? traducir todos tus programas para que
                            tu computadora pueda ejecutarlos, adem??s de ofrecerte m??s herramientas de desarrollo que se explicar??n en las siguientes secciones.
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

export default ComoFuncionaCodigo;