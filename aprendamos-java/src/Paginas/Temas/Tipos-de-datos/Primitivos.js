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

export default function Primitivos() {
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

    const [open6, setOpen6] = React.useState(false);
    
    const handleClick6 = () => {
        setOpen6(!open6);
    }

    const [open7, setOpen7] = React.useState(false);
    
    const handleClick7 = () => {
        setOpen7(!open7);
    }

    const [open8, setOpen8] = React.useState(false);
    
    const handleClick8= () => {
        setOpen8(!open8);
    }


    return (
        <Container sx={{ paddingY: 6}}>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop: 5,
                    borderRadius: 2
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center", mb: 3}}>
                            Datos Primitivos
                        </Typography>
                    </Grid>
                </Box>
                <Grid item container>
                    <Box sx={{
                        paddingX: 7,
                        backgroundColor: "boticelli.main",
                        color: "regalBlue.main",
                        maxWidth: "100%",
                        paddingY: 5,                        
                        borderRadius: 2
                    }}>
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            El lenguaje Java es de tipo estático. Es decir, se define el tipo de dato de una variable a la variable a la hora de definir esta. Es por ello que todas las variables tendrán un tipo de dato asignado. 
                        </Typography>
                        <br />
                        <Typography variant="h6" component="p" >
                            <List
                            sx={{ width: '100%', maxWidth: '70vw', border: 1, borderColor: 'primary.main', borderRadius: 2, p: 2, textAlign: 'justify'  }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader 
                                 sx={{ textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2, m: 2, backgroundColor: "boticelli.main", color: "regalBlue.main", fontSize: "1.2rem", fontWeight: "bold", p: 2 }}
                                 component="div" id="nested-list-subheader">
                                Tipos de datos primitivos en Java
                                </ListSubheader>
                            }
                            >
                                 <ListItemButton onClick={handleClick1}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="byte" />
                                    {open1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4  }}>
                                        <ListItemText primary="Representa un tipo de dato de 8 bits con signo. De tal manera que puede almacenar los valores numéricos de -128 a 127 (ambos inclusive)." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick2}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="short" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Representa un tipo de dato de 16 bits con signo. De esta manera almacena valores numéricos de -32.768 a 32.767." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick3}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="int" />
                                    {open3 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open3} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Es un tipo de dato de 32 bits con signo para almacenar valores numéricos. Cuyo valor mínimo es -2^31 y el valor máximo (2^31)-1." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick4}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="long" />
                                    {open4 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open4} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Es un tipo de dato de 64 bits con signo que almacena valores numéricos entre -2^63 a (2^63)-1" />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick5}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="float" />
                                    {open5 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open5} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Es un tipo dato para almacenar números en coma flotante con precisión simple de 32 bits." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick6}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="double" />
                                    {open6 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open6} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Es un tipo de dato para almacenar números en coma flotante con doble precisión de 64 bits." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick7}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Boolean" />
                                    {open7 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open7} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Sirve para definir tipos de datos booleanos. Es decir, aquellos que tienen un valor de true o false. Ocupa 1 bit de información." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClick8}>
                                    <ListItemIcon>
                                    <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="char" />
                                    {open8 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open8} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Es un tipo de datos que representa a un carácter Unicode sencillo de 16 bits." />
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}>
                            Bien, {Usuario.User}, ahora ya sabes los tipos de datos primitivos del lenguaje Java, esto es algo básico en casi cualquier lenguaje, pues no sólo estos son palabras recervadas, también pueden generar problemas a la hora de hacerlos interactuar entre si, si es que no conocemos el tipo de dato que estamos utilizando. 
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}>
                            Existen más tipos de datos, pero son derivados de estos o implementados con el paso del tiempo para funciones especificas, pero por ahora, estos son todos los que ocupan para iniciar en el mundo de la programación
                        </Typography>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingTop: 3 }}>
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