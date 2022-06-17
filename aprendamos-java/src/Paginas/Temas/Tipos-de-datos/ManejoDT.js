import { Box, Container, Grid, Typography } from "@mui/material";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
//import UserContext from "../../../Contextos/UserContext";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



export default function ManejoDT() {



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
                            Estructuras secuenciales
                            <br />
                            (Manejo de los tipos de dato)
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
                            Las instrucciones de un programa se ejecutan por defecto en orden secuencial. Esto significa que las instrucciones se ejecutan en secuencia, una después de otra, en el orden en que aparecen escritas dentro del programa.
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            La estructura secuencial es el orden natural de ejecución. Las instrucciones que componen esta estructura se ejecutan en orden una a continuación de la otra. La mayoría de las instrucciones están separadas por el carácter punto y coma.
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}
                            variant="h6" component="p">
                            Las instrucciones se suelen agrupar en bloques. El bloque de sentencias se define por el carácter llave de apertura para marcar el inicio del mismo, y el carácter llave de cierre para marcar el final.
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
                                Ejemplo de programa Java con estructura secuencial
                                </ListSubheader>
                            }
                            >   
                                <ListItem>
                                    <img src="https://i.imgur.com/NojmMdQ.png" alt="Ejemplo de programa Java con estructura secuencial" width="100%" />
                                </ListItem>

              
                            </List>
                        </Typography>
                        <br />
                        <Typography 
                            sx={{fontSize: "1.2rem", textAlign: "justify"  }}>
                            Para modificar el orden de ejecución de las instrucciones de un programa Java se utilizan las estructuras condicionales y repetitivas, las cuales se verán más adelante.
                        </Typography>
                        <br />
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