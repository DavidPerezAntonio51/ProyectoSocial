import { Checkbox } from "@mui/material";
import { useContext } from "react";
import ProgressContext from "../../Contextos/ProgressContext";

function CheckBoxControlled({ indexTema, Finalizado, SubTema }) {
    const Temas = useContext(ProgressContext);
    const handleClick = () => {
        if (Finalizado) {
            Temas.reducirProgreso(indexTema,SubTema);
        }else{
            Temas.incrementarProgreso(indexTema, SubTema);
        }
    }
    return (
        <Checkbox
            color="boticelli"
            edge="end"
            checked={Finalizado}
            onClick={handleClick}
        />
    );
}

export default CheckBoxControlled;