import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {Link} from "react-router-dom";

class EditarVehiculo extends Component{
    constructor(props){
        super(props);
        this.path = window.location.pathname;
        console.log(this.path);
        this.url=this.path.split("/listadovehiculos/editarvehiculo/");
        this.carId = this.url[1];
        console.log(this.carId + "algo")
        this.getCar(this.carId);

    };
    
    path = null;
    url =[];
    carId = null;
    name = React.createRef();
    brand = React.createRef();
    year = React.createRef();
    description = React.createRef();
    payDay = React.createRef();
    link = React.createRef();

    state = {
        car:[],
        car2:[],
        status:null
    };

    getCar = (id) => {
        axios.get("http://localhost:3003/api/car/mostrar/"+id).then(res =>{
                this.setState({                    
                    car:res.data.usuario,
                    car2:res.data.usuario
                });
                console.log(res.data.usuario);

                
            })
    };

    

    actualizarUsuario = (e) =>{
        e.preventDefault();
        var car = {
            name:this.name.current.value,
            brand:this.brand.current.value,
            year:this.year.current.value,
            description:this.description.current.value,
            payDay:this.payDay.current.value,
            link:this.link.current.value

        }
        console.log("acá  "+this.carId)
        console.log(car)
        axios.put("http://localhost:3003/api/car/update/"+this.carId,car).then(
            res =>{
                this.setState({
                    status:"success"
                })
            }).catch(function(error){
                console.log(error)
            });
            
    }
    actualizarUsuario2 = () =>{

        this.setState({
            car2:{
                name:this.name.current.value,
                brand:this.brand.current.value,
                year:this.year.current.value,
                description:this.description.current.value,
                payDay:this.payDay.current.value,
                link:this.link.current.value
    
            }
        })
        console.log(this.state)
    }
    render(){
        if(this.state.status ==="success"){
            return <Navigate to ="/listadovehiculos" />
        }
       
        return(
           
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div className="dividos">
                    <div class="first">
                    <div class="containerEdit">
                        <form onSubmit={this.actualizarUsuario}>
                           <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" defaultValue={this.state.car.name} ref={this.name} onChange={this.actualizarUsuario2}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Marca</label>
                            <input type="text" class="form-control" id="brand"defaultValue={this.state.car.brand} ref={this.brand} onChange={this.actualizarUsuario2}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Año del modelo</label>
                            <input type="text" class="form-control" id="year"defaultValue={this.state.car.year} ref={this.year} onChange={this.actualizarUsuario2}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Descripción</label>
                            <input type="text" class="form-control" id="description"defaultValue={this.state.car.description} ref={this.description}onChange={this.actualizarUsuario2}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">valor del día</label>
                            <input type="text" class="form-control" id="payDay"defaultValue={this.state.car.payDay} ref={this.payDay}onChange={this.actualizarUsuario2}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">link de la foto</label>
                            <input type="text" class="form-control" id="link"defaultValue={this.state.car.link} ref={this.link}onChange={this.actualizarUsuario2}/>
                        </div>
                        <button class="btn2 btn-primary">
                            <span>Actualizar</span>
                            <i class="ri-home-line icon"></i>
                        </button>
                        </form>   
                        
                    </div>
                    </div>
                    
                        <div class="twos">
                        <div class="flip-card2">
                                        <div class="flip-card2-inner">
                                            <div class="flip-card2-front">
                                                <img src={this.state.car2.link} class="card-img-top" alt="..."/>
                                                <h4>{this.state.car2.brand}</h4>
                                                <h5>{this.state.car2.name}</h5>
                                                <h6>{this.state.car2.description}</h6>
                                            </div>
                                            <div class="flip-card2-back">
                                                <img src={this.state.car2.link} class="card-img-top" alt="..."/>
                                                <h3>Desde</h3>
                                                <h1>${this.state.car2.payDay/1000}/ Día</h1>
                                                <Link to={"reservas/"}className="btn btn-light">Reservar</Link>
                                            </div>
                                        </div>
                                    </div> 
                        </div>
                    
                </div>

            </React.Fragment>
            );      
    }    
}

export default EditarVehiculo;