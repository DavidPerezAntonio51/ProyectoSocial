import { Box, Container, Grid, Typography } from "@mui/material";
import { minWidth } from "@mui/system";

function Ciclos() {
    return (
        <Container>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ textAlign: "center" }}>
                            ¿Qué es un Ciclo en programación?
                        </Typography>
                    </Grid>
                </Box>
                <Grid item>
                    <Box sx={{ 
                        paddingX:7,
                        backgroundColor:"boticelli.main",
                        color:"regalBlue.main",
                        minWidth: "100%"
                        }}>
                    <Typography variant="h6" component="p">
                        Un ciclo en programacion es un conjunto de secuencias 
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Ciclos;