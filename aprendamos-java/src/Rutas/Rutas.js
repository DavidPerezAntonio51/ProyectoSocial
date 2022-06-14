import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import UserContext from "../Contextos/UserContext";
import Inicio from "../Paginas/Inicio";
import Temario from "../Paginas/Temario";


function Rutas() {
    const Usuario = useContext(UserContext);
    return ( 
        <Routes>
            <Route path="/" element={Usuario.User===null?<Inicio/>:<Navigate to={"/temas"}/>}/>
            <Route path="/temas" element={Usuario.User===null?<Navigate to={"/"}/>:<NavBar/>}>
                <Route path="estructuras-repetitivas">
                    <Route path="que-es-un-ciclo/:idTema/:idSubtema"/>
                    <Route path="ciclo-for/:idTema/:idSubtema"/>
                    <Route path="ciclo-while/:idTema/:idSubtema"/>
                    <Route path="ciclo-do-while/:idTema/:idSubtema"/>
                </Route>
                <Route path="arreglos">
                    <Route path="que-es-un-arreglo/:idTema/:idSubtema"/>
                    <Route path="manejo-de-arreglos/:idTema/:idSubtema"/>
                </Route>
                <Route index element={<Temario/>}/>
            </Route>
        </Routes>
     );
}

export default Rutas;