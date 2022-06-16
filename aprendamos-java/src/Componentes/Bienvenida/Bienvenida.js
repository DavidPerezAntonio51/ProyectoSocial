import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import UserContext from "../../Contextos/UserContext";

function Bienvenida() {
    const Usuario = useContext(UserContext);
    return (
        <Container sx={{paddingY:5}}>
            <Grid container>
                <Box sx={{
                    backgroundColor: 'boticelli.main',
                    color: "regalBlue.main",
                    minWidth: "100%",
                    paddingTop:5
                }}>
                    <Grid item>
                        <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>
                            Hola, {Usuario.User}, bienvenido a Aprendamos Java
                        </Typography>
                    </Grid>
                </Box>
                <Box sx={{
                    backgroundColor: 'boticelli.main',
                    color: "regalBlue.main",
                    maxWidth: "100%",
                    paddingX: 7,
                    paddingY: 5
                }}>
                    <Grid item>
                        <Typography variant="h4" component="h3">
                            ¿Quienes somos?
                        </Typography>
                        <Typography variant="h6">
                            Somo alumnos de la Escuela Superior de Computo (ESCOM) y formamos parte del
                            Instituto Politecnico Nacional
                        </Typography>
                        <Typography variant="h4" component="h3">
                            ¿Cuál es nuestro Objetivo?
                        </Typography>
                        <Typography variant="h6">
                            Queremos crear un ambiente para ayudar a muchos aficionados a la programación y a quienes
                            inicien en esta carrera a de verdad aprender
                            a programar desde lo más fundamental y paso a paso, tratando de eliminar a medida de lo posible
                            la frustración que muchas veces provoca el empezar a trabajar estas habilidades.
                        </Typography>
                        <Typography variant="h4" component="h3">
                            ¿Porqué hacemos esto?
                        </Typography>
                        <Typography variant="h6">
                            Hacemos esto porque queremos contribuir de manera positiva en la vida de todos aquellos
                            que desean incursionar en el mundo de la programación, queremos ayudarte a que des tus primeros
                            pasos y sobre todo te olvides de que la programación es algo muy dificil, veras que si quieres
                            puedes y este pequeo curso te ayudara a que inicies.
                            <br></br>
                            Hacemos esto porque creemos firmemente que el mundo mejorará a través de la educación y que los
                            sueños pueden realizarse si se les pone el suficiente empeño.
                            <br></br>
                            Deseamos de todo corazón que este curso logre el objetivo en tu vida que es aprender a programar
                            y que esto abra oportunidades profesionales que mejoren tu calidad de vida.
                            <br></br>
                            APRENDAMOS A PROGRAMAR EN JAVA...
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
}

export default Bienvenida;