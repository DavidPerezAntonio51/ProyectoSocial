import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import SiguienteTema from "../../../Componentes/ComponentesDeLosTemas/BotonSiguienteTema";
import VolverAlMenu from "../../../Componentes/ComponentesDeLosTemas/BotonVolver";
import UserContext from "../../../Contextos/UserContext";

function ComoFuncionaCodigo() {
    const Usuario = useContext(UserContext);
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
                            ¿Cómo funciona un código?
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
                            Bien {Usuario.User}, ahora que ya explicamos lo que es el pseudocódigo y los diagramas de flujo, vamos a revisar de manera
                            más formal el código y cómo es que funciona.
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