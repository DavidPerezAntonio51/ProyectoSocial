import { Button } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ProgressContext from "../../Contextos/ProgressContext";

function VolverAlMenu() {
    const Progress = useContext(ProgressContext);
    const {idTema, idSubtema} = useParams();
    let redireccionar = useNavigate();
    const handlerClickNext = () => {
            Progress.incrementarProgreso(idTema,idSubtema);
            redireccionar("/temas");
    }
    return (
        <Button
            color="stratos"
            variant="contained"
            startIcon={<ListIcon/>}
            onClick={handlerClickNext}
        >
            Volver al Menú
        </Button>
    );
}

export default VolverAlMenu;