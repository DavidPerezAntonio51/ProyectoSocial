import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import UserContext from "../Contextos/UserContext";
import Inicio from "../Paginas/Inicio";
import Temario from "../Paginas/Temario";
import Arreglo from "../Paginas/Temas/Arreglos/QueEsUnArreglo";
import Ciclos from "../Paginas/Temas/Ciclos/QueEsUnCiclo";
import ManejoArray from "../Paginas/Temas/Arreglos/ManejoArreglos";
import ComoCodigo from "../Paginas/Temas/Introduccion/ComoFuncionaCodigo";
import QueEsProgramar from "../Paginas/Temas/Introduccion/QueEsProgramar";
import TuPuedes from "../Paginas/Temas/Introduccion/TuTambienPuedes";
import PseudocodigoDiagramas from "../Paginas/Temas/Introduccion/PsudocodigoDiagramas";
import InstalaJava from "../Paginas/Temas/Introduccion/InstalarJava";
import InstalaNetBeans from "../Paginas/Temas/Introduccion/InstalarNetBeans";
import CondicionalIf from "../Paginas/Temas/Condicionales/CondicionalIf";
import CondicionalElse from "../Paginas/Temas/Condicionales/CondicionalElse";
import CondicionalIfElse from "../Paginas/Temas/Condicionales/CondicionalIfElse";
import CondicionalSwitch from "../Paginas/Temas/Condicionales/CondicionalSwitch";
import CicloFor from "../Paginas/Temas/Ciclos/CicloFor";
import Primitivos from "../Paginas/Temas/Tipos-de-datos/Primitivos";
import ManejoDT from "../Paginas/Temas/Tipos-de-datos/ManejoDT";
import Operaciones from "../Paginas/Temas/Tipos-de-datos/Operaciones";
import HolaMundo from "../Paginas/Temas/Manejo-Consola/HolaMundo";
import ImpresionConsola from "../Paginas/Temas/Manejo-Consola/ImpresionConsola";
import CicloWhile from "../Paginas/Temas/Ciclos/CicloWhile";
import CicloDoWhile from "../Paginas/Temas/Ciclos/CicloDoWhile";

function Rutas() {
    const Usuario = useContext(UserContext);
    return ( 
        <Routes>
            <Route path="/" element={Usuario.User===null?<Inicio/>:<Navigate to={"/temas"}/>}/>
            <Route path="/temas" element={Usuario.User===null?<Navigate to={"/"}/>:<NavBar/>}>
                <Route path="introduccion">
                    <Route path="que-es-programar/:idTema/:idSubtema" element={<QueEsProgramar />}></Route>
                    <Route path="programar-es-facil/:idTema/:idSubtema" element={<TuPuedes />}></Route>
                    <Route path="pseudocodigo-y-diagramas-de-flujo/:idTema/:idSubtema" element={<PseudocodigoDiagramas />}></Route>
                    <Route path="como-funciona-un-codigo/:idTema/:idSubtema" element={<ComoCodigo />}/>
                    <Route path="instalacion-java/:idTema/:idSubtema" element={<InstalaJava />}/>
                    <Route path="instalacion-netBeans/:idTema/:idSubtema" element={<InstalaNetBeans />} />
                </Route>

                <Route path="manejo-consola">
                    <Route path="hola-mundo/:idTema/:idSubtema" element={<HolaMundo/>}/>
                    <Route path="formatos-de-impresion/:idTema/:idSubtema" element={<ImpresionConsola/>}/>
                </Route>

                <Route path="tipos-de-datos">
                    <Route path="primitivos/:idTema/:idSubtema" element={<Primitivos/>}/>
                    <Route path="manejo-tipos-datos/:idTema/:idSubtema" element={<ManejoDT/>}/>
                    <Route path="operacion-datos-primitivos/:idTema/:idSubtema" element={<Operaciones/>} />
                </Route>

                <Route path="condicionales">
                <Route path="sentencia-if/:idTema/:idSubtema" element={<CondicionalIf />}></Route>
                    <Route path="sentencia-else/:idTema/:idSubtema" element={<CondicionalElse />}></Route>
                    <Route path="sentencia-if-else/:idTema/:idSubtema" element={<CondicionalIfElse />}></Route>
                    <Route path="sentencia-switch/:idTema/:idSubtema" element={<CondicionalSwitch />}></Route>
                </Route>

                <Route path="estructuras-repetitivas">
                    <Route path="que-es-un-ciclo/:idTema/:idSubtema" element={<Ciclos/>}/>
                    <Route path="ciclo-for/:idTema/:idSubtema" element={<CicloFor/>}/>
                    <Route path="ciclo-while/:idTema/:idSubtema" element={<CicloWhile/>}/>
                    <Route path="ciclo-do-while/:idTema/:idSubtema" element={<CicloDoWhile/>}/>
                </Route>

                <Route path="arreglos">
                    <Route path="que-es-un-arreglo/:idTema/:idSubtema" element = {<Arreglo/>}/>
                    <Route path="manejo-de-arreglos/:idTema/:idSubtema" element = {<ManejoArray/>}/>
                </Route>

                <Route index element={<Temario/>}/>
            </Route>
        </Routes>
     );
}

export default Rutas;