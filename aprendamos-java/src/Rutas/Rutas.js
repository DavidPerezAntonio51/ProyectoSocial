import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import UserContext from "../Contextos/UserContext";
import Inicio from "../Paginas/Inicio";
import Temario from "../Paginas/Temario";
import Arreglo from "../Paginas/Temas/Arreglos/QueEsUnArreglo";
import Ciclos from "../Paginas/Temas/Ciclos/QueEsUnCiclo";
import manejoArreglos from "../Paginas/Temas/Arreglos/ManejoArreglos";

function Rutas() {
    const Usuario = useContext(UserContext);
    return ( 
        <Routes>
            <Route path="/" element={Usuario.User===null?<Inicio/>:<Navigate to={"/temas"}/>}/>
            <Route path="/temas" element={Usuario.User===null?<Navigate to={"/"}/>:<NavBar/>}>
                <Route path="introduccion">
                    <Route path="que-es-programar/:idTema/idSubtema"></Route>
                    <Route path="programar-es-fácil/:idTema/idSubtema"></Route>
                    <Route path="pseudocodigo-y-diagramas-de-flujo/:idTema/idSubtema"></Route>
                    <Route path="como-funciona-un-codigo/:idTema/idSubtema"></Route>
                    <Route path="instalacion-java/:idTema/idSubtema"></Route>
                    <Route path="instalacion-netBeans/:idTema/idSubtema"></Route>
                </Route>

                <Route path="manejo-consola">
                    <Route path="hola-mundo/:idTema/:idSubtema"></Route>
                    <Route path="formatos-de-impresion/:idTema/:idSubtema"></Route>
                </Route>

                <Route path="tipos-de-datos">
                    <Route path="primitivos/:idTema/:idSubtema"></Route>
                    <Route path="manejo-tipos-datos/:idTema/:idSubtema"></Route>
                    <Route path="operacion-datos-primitivos/:idTema/:idSubtema"></Route>
                </Route>

                <Route path="condicionales">
                    <Route path="sentencia-if/:idTema/:idSubtema"></Route>
                    <Route path="sentencia-else/:idTema/:idSubtema"></Route>
                    <Route path="sentencia-if-else/:idTema/:idSubtema"></Route>
                    <Route path="sentencia-switch/:idTema/:idSubtema"></Route>
                </Route>

                <Route path="estructuras-repetitivas">
                    <Route path="que-es-un-ciclo/:idTema/:idSubtema" element={<Ciclos/>}/>
                    <Route path="ciclo-for/:idTema/:idSubtema"/>
                    <Route path="ciclo-while/:idTema/:idSubtema"/>
                    <Route path="ciclo-do-while/:idTema/:idSubtema"/>
                </Route>

                <Route path="arreglos">
                    <Route path="que-es-un-arreglo/:idTema/:idSubtema" element = {<Arreglo/>}/>
                    <Route path="manejo-de-arreglos/:idTema/:idSubtema" element = {<manejoArreglos/>}/>
                </Route>

                <Route index element={<Temario/>}/>
            </Route>
        </Routes>
     );
}

export default Rutas;