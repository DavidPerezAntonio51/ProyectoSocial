import { IconButton, TextField, Typography } from "@mui/material";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { useContext, useState } from "react";
import UserContext from "../../Contextos/UserContext";
import SaveIcon from '@mui/icons-material/Save';

function NombreUsuario() {
    const Usuario = useContext(UserContext);
    const [Editando, setEditando] = useState(false);
    const [Nombre, setNombre] = useState(Usuario.User);
    const handleEditNombre = () => {
        setEditando(!Editando);
    }
    const handlerKeyPress = (e) => {
        if(e.key==="Escape"){
            setEditando(!Editando);
            setNombre(Usuario.User);
        }
        if(e.key==="Enter"){
            saveNewName();
        }
    }
    const saveNewName = () => {
        Usuario.handlerUpdateNameUser(Nombre);
        setEditando(!Editando);
    }
    return (
        <>
            <IconButton
                size="large"
                aria-label="Editar Nombre"
                aria-haspopup="true"
                onClick={!Editando ? handleEditNombre : saveNewName}
            >
                {
                    !Editando
                        ?
                        <EditTwoToneIcon color="morningGlory" />
                        :
                        <SaveIcon color="morningGlory" />
                }
            </IconButton>
            {
                !Editando
                    ?
                    <Typography variant="h5">
                        {Usuario.User}
                    </Typography>
                    :
                    <TextField
                        id="nombreUsuario"
                        label="Nuevo Nombre"
                        color="boticelli"
                        helperText={Nombre === "" ? "Por Favor no dejes el campo Vacío" : ""}
                        variant="standard"
                        autoFocus={true}
                        onChange={(e)=>setNombre(e.target.value)}
                        value={Nombre}
                        FormHelperTextProps={{ error: Nombre === "" }}
                        InputProps={{ inputProps: { onKeyDown: handlerKeyPress} }}
                    />
            }

        </>
    );
}

export default NombreUsuario;