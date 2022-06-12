import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserContext from "../Contextos/UserContext";
import Inicio from "../Paginas/Inicio";
import Temas from "../Paginas/Temario";


function Rutas() {
    const Usuario = useContext(UserContext);
    return ( 
        <Routes>
            <Route path="/" element={Usuario.User===null?<Inicio/>:<Navigate to={"/temas"}/>}/>
            <Route path="/temas" element={Usuario.User===null?<Navigate to={"/"}/>:<Temas/>}/>
        </Routes>
     );
}

export default Rutas;