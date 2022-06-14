import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import UserContext from "../../Contextos/UserContext";

function Bienvenida() {
    const Usuario = useContext(UserContext);
    return (
        <Container>
            <Grid container>
                <Grid item sx={{ minWidth: "100%" }}>
                    <Box sx={{
                        backgroundColor: 'boticelli.main',
                        color: "regalBlue.main",
                    }}>
                        <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>
                            Hola {Usuario.User} bienvenido a Aprendamos Java
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="h4" component="h1">
                            ¿Quienes somos?
                        </Typography>
                        <Typography variant="h6">
                            Somo alumnos de la Escuela Superior de Computo (ESCOM) y formamos parte del
                            Instituto Politecnico Nacional
                        </Typography>
                        <Typography variant="h4" component="h1">
                            ¿Cuál es nuestro Objetivo?
                        </Typography>
                        <Typography variant="h6">
                            Queremos crear un ambiente para ayudar a muchos aficionados a la programación y a quienes
                            inicien en esta carrera a de verdad aprender
                            a programar desde lo más fundamental y paso a paso, tratando de eliminar a medida de lo posible
                            la frustración que muchas veces provoca el empezar a trabajar estas habilidades.
                        </Typography>
                        <Typography variant="h4" component="h1">
                            ¿Porqué hacemos esto?
                        </Typography>
                        <Typography variant="h6">

                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Bienvenida;