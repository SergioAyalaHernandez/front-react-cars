import React from "react";


class Menu extends React.Component{
  
    render(){
        return(            
          <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">CAR - FRONT</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="/listadovehiculos">Listado vehículos</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="/guardarcarro">Guardar vehículo</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        );
    }

}

export default Menu;