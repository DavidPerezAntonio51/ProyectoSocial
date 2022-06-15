import { Box, Container, Grid, Typography } from "@mui/material";

function Ciclos() {
    return (
        <Container>
            <Grid container>
                <Box sx={{
                    backgroundColor: "boticelli.main",
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop:5
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
                        maxWidth: "100%",
                        paddingY:5
                        }}>
                    <Typography variant="h6" component="p">
                        Con lo aprendido hasta ahora es posible que te hayas dado cuenta de que al momento de estar programando
                        hay algunas instrucciones o códigos que es necesario estar repitiendo muchas veces. Seguramente has intentado 
                        copiar y pegar varias veces este código usando el típico "CTRL+C" y "CTRL+V", es una solución lógica
                        y no está mal ya que aun estas aprendiendo, pero no es la mejor manera.
                    </Typography>
                    <Typography variant="h6" component="p">
                        Duplicar el código de esa forma puede traer varios problemas consigo. El primero de estos problemas es 
                        que los archivos fuente de tu código se harán innecesariamente grandes; en el caso de requerirse hacer 
                        modificaciones en un futuro a tu código será muy complicado, muy tardado y muy cansado poder llevarlas 
                        a cabo.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Ciclos;