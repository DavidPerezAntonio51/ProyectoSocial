import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../Contextos/UserContext";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

function Inicio() {
    const Usuario = useContext(UserContext);
    const [Nombre, setNombre] = useState(null);
    let redireccionar = useNavigate();
    const handlerSubmitName = () => {
        Usuario.handlerSetUser(Nombre);
        redireccionar("/temas");
    }
    const handlerOnChangeNombre = (e) => {
        setNombre(e.target.value);
    }
    const handlerKeyPress = (e) => {
        if(e.key==='Enter'){
            handlerSubmitName();
        }
    }
    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="InicioPading"
            >
                <Grid item>
                    <Stack spacing={2} >
                        <TextField
                            id="nombreUsuario"
                            label="Introduce tu Nombre"
                            color="boticelli"
                            helperText={Nombre === "" ? "Por Favor no dejes el campo Vacío" : ""}
                            variant="filled"
                            autoFocus={true}
                            onChange={handlerOnChangeNombre}
                            value={Nombre}
                            FormHelperTextProps={{ error: Nombre === "" }}
                            InputProps={{inputProps:{onKeyDown:handlerKeyPress}}}
                        />
                        <Button
                            color="regalBlue"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            disabled={Nombre === "" || Nombre === null}
                            onClick={handlerSubmitName}
                            >
                            Continuar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Inicio;