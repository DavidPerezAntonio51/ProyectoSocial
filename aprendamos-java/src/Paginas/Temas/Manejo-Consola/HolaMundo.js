import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";
import img1 from '../../../assets/InstalaJava/img1.png';
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
                            Java: Primer "Hola Mundo"
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
                            {Usuario.User} ahora que tienes instalado y configurado todo para compilar y ejecutar archivos Java tanto en Netbeans y en consola, veremos de que forma se debe hacer: 
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
                                Formas de compilar y ejecutar programas Java:
                                </ListSubheader>
                            }
                            >
                                 <ListItemButton onClick={handleClick1}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Netbeans" />
                                    {open1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemText primary="Representa un tipo de dato de 8 bits con signo. De tal manera que puede almacenar los valores numéricos de -128 a 127 (ambos inclusive)." />
                                    </List>
                                </Collapse>
                                
                                <ListItemButton onClick={handleClick2}>
                                    <ListItemIcon>
                                    < DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="CMD" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemText primary={<Typography style={{ color: "black" }}>Apertura de una consola: <br></br><br></br><img src={img1} height="400" width="800" /></Typography>}/>
                                    </List>
                                </Collapse>
                            
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