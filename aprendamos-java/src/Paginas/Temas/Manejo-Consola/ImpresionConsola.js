import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/Netbeans/6.jpg';
import img2 from '../../../assets/Netbeans/7.jpg';
import img3 from '../../../assets/Netbeans/8.jpg';
import img4 from '../../../assets/cmd/13.jpg';
import img5 from '../../../assets/cmd/14.jpg';
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

function ImpresionConsola(props){
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
                            {Usuario.User} ahora que tienes los archivos iniciales, te diremos como correrlos y hacer tu primer Hola Mundo 
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
                                    <ListItemText primary={<Typography style={{ color: "black" }}>Le damos click en el botón que parece un triánngulo para poder correr el programa inicial y poder ver si funciona correctamente. En la parte de abajo tiene que aparecer ese mensaje:<br></br><br></br>
                                        <center><img src={img1} height="400" width="800" alt="netbeans1"/></center></Typography>}/>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Le agregamos "System.out.println("Hola Mundo");" al programa y guardamos los cambios</Typography>
                                        <br></br><br></br>
                                        <center><img src={img2} height="400" width="800" alt="netbeans2" /></center>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Finalmente le daremos click al botón en forma de triángulo para su compilación y ejecución, nos tiene que mostrar algo en la parte inferior:</Typography>
                                        <br></br><br></br>
                                        <center><img src={img3} height="400" width="800" alt="netbeans5"/></center>
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
                                        <ListItemText primary={<Typography style={{ color: "black" }}>Buscaremos la carpeta en donde esta nuestro archivo Java, una vez estando ahi {Usuario.User} le daremos click en la barra de direcciones y escribiremos cmd, le damos enter<br></br><br></br>
                                        <img src={img4} height="400" width="800" alt="netbeans4"/></Typography>}/>
                                        <br></br><br></br>
                                        <Typography style={{ color: "black" }}>Abrimos la consola con la teclas "windows + r", escribiremos cmd y estando adentro escribiremos la primera instrucción:
                                        "javac HolaMundo.java", damos enter y después escribiremos "java HolaMundo", se nos mostrará algo así:</Typography>
                                        <br></br><br></br>
                                        <center><img src={img5} height="500" width="800" alt="netbeans3" /></center>
                                        <br></br><br></br>
                                    </List>
                                </Collapse>
                            <Typography variant="h5" sx={{ textAlign: "center" }}>¡Te ivitamos a intentarlo {Usuario.User} como forma de practicar!</Typography>
                            </List><Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
                            <Grid item sx={{ paddingY: 2 }}>
                                <VolverAlMenu />
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
}

export default ImpresionConsola;