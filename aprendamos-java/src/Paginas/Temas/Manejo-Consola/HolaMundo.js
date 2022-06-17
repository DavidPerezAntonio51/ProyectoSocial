import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/Netbeans/1.jpg';
import img2 from '../../../assets/Netbeans/2.jpg';
import img3 from '../../../assets/Netbeans/3.jpg';
import img4 from '../../../assets/Netbeans/4.jpg';
import img5 from '../../../assets/Netbeans/5.jpg';
import img6 from '../../../assets/cmd/9.jpg';
import img7 from '../../../assets/cmd/101.JPG';
import img8 from '../../../assets/cmd/111.jpg';
import img9 from '../../../assets/cmd/12.jpg';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CodeIcon from '@mui/icons-material/Code';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function HolaMundo(props){
    const Usuario = useContext(UserContext);
    
    const [open1, setOpen1] = React.useState(false);
  
    const handleClick1 = () => {
      setOpen1(!open1);
    }

    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!open2);
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
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            Estructura básica para un programa en Java
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
                            {Usuario.User} ahora que tienes instalado Netbeans y configurado la terminal, estamos listos para crear nuestro primer archivo Java en las dos formas, esta lección te dira como generar el archivo de la siguiente forma: 
                        </Typography>
                        <br></br>
                        <List
                            sx={{ width: '100%', maxWidth: '70vw', border: 1, borderColor: 'primary.main', borderRadius: 2, p: 2, textAlign: 'justify'  }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader 
                                 sx={{ textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2, m: 2, backgroundColor: "boticelli.main", color: "regalBlue.main", fontSize: "1.2rem", fontWeight: "bold", p: 2 }}
                                 component="div" id="nested-list-subheader">
                                Escoge cual quieres conocer, dandole un click para desplegar la información.
                                </ListSubheader>
                            }
                            >
                                 <ListItemButton onClick={handleClick1}>
                                    <ListItemIcon>
                                    <CodeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Netbeans" />
                                    {open1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemText primary={<Typography style={{ color: "black" }}>Así se estructura el entorno de Netbeans: <br></br><br></br>
                                        <center><img src={img1} height="400" width="800"/></center></Typography>}/>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Damos en la pestaña "File", posteriormente damos en la opción "New project: "</Typography>
                                        <br></br><br></br>
                                        <center><img src={img2} height="400" width="800" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Se nos abrirá una ventana como la siguiente, seleccionaremos "Java with Ant" en la sección de Categories y posteriormente "Java Application" en la sección de Projects y finalmente daremos en "Next"</Typography>
                                        <br></br><br></br>
                                        <center><img src={img3} height="400" width="800" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Se nos abrirá esta nueva ventana y en la parte de "Project Name" le daremos un nombre, en este caso {Usuario.User} yo recomiendo poner el mismo nombre y finalmente dar en el botón Finish</Typography>
                                        <br></br><br></br>
                                        <center><img src={img4} height="400" width="800" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Muy bien {Usuario.User} has terminado de crear tu primer archivo Java en Netbeans, en la siguiente sesión veremos como ejecutar nuestro primer Hola Mundo</Typography>
                                        <br></br><br></br>
                                        <center><img src={img5} height="400" width="800" /></center>
                                        <br></br><br></br>
                                    </List>
                                </Collapse>
                                
                                <ListItemButton onClick={handleClick2}>
                                    <ListItemIcon>
                                    < CodeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="CMD" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemText primary={<Typography style={{ color: "black" }}>Buscaremos la aplicación de "Bloc de notas" y lo abriremos: <br></br><br></br>
                                        <img src={img6} height="400" width="800" /></Typography>}/>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Copiaremos este código inicial para poder hacer un archivo Java</Typography>
                                        <br></br><br></br>
                                        <center><img src={img7} height="500" width="500" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Posteriormente, guardaremos el archivo yendo a la pestaña "Archivo"</Typography>
                                        <br></br><br></br>
                                        <center><img src={img8} height="400" width="800" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Se nos abrirá esta nueva donde podremos escoger donde guardarlo, pero antes {Usuario.User} le pondremos en el recuadro después de "Nombre de archivo:" HolaMundo.java, le damos guardar y con esto ya tendremos nuestro primer archivo Java.</Typography>
                                        <br></br><br></br>
                                        <center><img src={img9} height="400" width="800" /></center>
                                        <br></br><br></br>
                                    </List>
                                </Collapse>
                            <Typography variant="h5" sx={{ textAlign: "center" }}>¡Te ivitamos a intentarlo {Usuario.User} como forma de practicar!</Typography>
                            </List><Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
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

export default HolaMundo;