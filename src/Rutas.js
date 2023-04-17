import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./Componentes/Cars";
import EditarVehiculo from "./Componentes/EditarVehiculo";
import GuardarCarro from "./Componentes/GuardarCarro";
import Inicio from "./Componentes/Inicio";

class Routeres extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Inicio/>}/>
                    <Route path="/listadovehiculos" element = {<Cars/>}/>
                    <Route path="/listadovehiculos/editarvehiculo/:id" element = {<EditarVehiculo/>}/>
                    <Route path="/guardarcarro" element = {<GuardarCarro/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routeres;