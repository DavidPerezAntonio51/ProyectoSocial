import { useEffect, useState } from "react";
import { createContext } from "react";
import Temario from '../assets/Temario.json';

const ProgressContext = createContext();

function ProgresoContext({ children }) {
    const [DataProgress, setDataProgress] = useState(JSON.parse(window.localStorage.getItem("aprendamos-java:Progress")));
    useEffect(() => {
      if(!DataProgress){
        setDataProgress(Temario.temas);
        window.localStorage.setItem("aprendamos-java:Progress",JSON.stringify(Temario.temas));
      }
    }, [])
    const dataProvided = {
        DataProgress
    }
    return (
        <ProgressContext.Provider value={dataProvided}>
            {children}
        </ProgressContext.Provider>
    );
}
export {ProgresoContext}
export default ProgressContext;