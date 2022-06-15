import { useEffect, useState } from "react";
import { createContext } from "react";
import Temario from '../assets/Temario.json';

const ProgressContext = createContext();

function ProgresoContext({ children }) {
    const [DataProgress, setDataProgress] = useState(JSON.parse(window.localStorage.getItem("aprendamos-java:Progress")));
    const incrementarProgreso = (Tema, Subtema) => {
        let data = JSON.parse(window.localStorage.getItem("aprendamos-java:Progress"));
        if (data[Tema].Subtemas[Subtema].Finalizado !== true) {
            data[Tema].Progreso += 1;
            data[Tema].Subtemas[Subtema].Finalizado = true;
            setDataProgress(data);
            window.localStorage.setItem("aprendamos-java:Progress", JSON.stringify(data));
        }
    }
    const reducirProgreso = (Tema, Subtema) => {
        let data = JSON.parse(window.localStorage.getItem("aprendamos-java:Progress"));
        data[Tema].Progreso -= 1;
        data[Tema].Subtemas[Subtema].Finalizado = false;
        setDataProgress(data);
        window.localStorage.setItem("aprendamos-java:Progress", JSON.stringify(data));
    }
    useEffect(() => {
        if (!DataProgress) {
            setDataProgress(Temario.temas);
            window.localStorage.setItem("aprendamos-java:Progress", JSON.stringify(Temario.temas));
        }
    }, [])
    const dataProvided = {
        DataProgress,
        incrementarProgreso,
        reducirProgreso
    }
    return (
        <ProgressContext.Provider value={dataProvided}>
            {children}
        </ProgressContext.Provider>
    );
}
export { ProgresoContext }
export default ProgressContext;