import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ProgressContext from "../../Contextos/ProgressContext";

function SiguienteTema() {
    const Progress = useContext(ProgressContext);
    const { idTema, idSubtema } = useParams();
    let redireccionar = useNavigate();
    const handlerClickNext = () => {
        if(Progress.DataProgress[idTema].Subtemas.length-1>idSubtema){
            Progress.incrementarProgreso(idTema,idSubtema);
            let siguienteSubtema = Number.parseInt(idSubtema)+1;
            let nextLink = Progress.DataProgress[idTema].Subtemas[siguienteSubtema].Link;
            redireccionar("/temas"+nextLink+"/"+idTema+"/"+"/"+siguienteSubtema);
        }
    }
    return (
        <Button
            color="stratos"
            variant="contained"
            endIcon={<ArrowForwardIcon/>}
            onClick={handlerClickNext}
        >
            Siguiente Tema
        </Button>
    );
}

export default SiguienteTema;