import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class GuardarCarro extends Component{
    name = React.createRef();
    brand = React.createRef();
    year = React.createRef();
    description = React.createRef();
    payDay = React.createRef();
    link = React.createRef();
        
    state ={
        car : {},
        status:null
    }

    changeState = () =>{
        this.setState({
            car:{
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

    guardarCar = (e) => {
        e.preventDefault();
        console.log(this.name.current.value);
        this.changeState();
        console.log(this.state.car);
        axios.post("http://localhost:3003/api/car/save",this.state.car).then(res=>{ 
            this.setState({
                status:"success"
            })
            
        }).catch(function(error){
            console.log(error)
        })
    }

    render(){
        if(this.state.status === "success"){
            return <Navigate to="/" />
        }
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="containerEdit">
                    <form onSubmit={this.guardarCar}>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Nombre</label>
                        <input type="text" className="form-control" id="name" name ="name" ref={this.name} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Marca</label>
                        <input type="text" className="form-control" id="brand" name ="brand" ref={this.brand} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Año del modelo</label>
                        <input type="text" className="form-control" id="year" name ="year" ref={this.year} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Descripción de linea</label>
                        <input type="text" className="form-control" id="description" name ="description" ref={this.description} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" > Valor día</label>
                        <input type="text" className="form-control" id="payDay" name ="payDay" ref={this.payDay} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" > Link imagen</label>
                        <input type="text" className="form-control" id="link" name ="link" ref={this.link} onChange={this.changeState}/>
                    </div>
                    <button class="btn2 btn-primary">
                        <span>Agregar vehículo</span>
                        <i class="ri-home-line icon"></i>
                    </button>
                    </form>   
                </div>

            </React.Fragment>
            );      
    }    
}

export default GuardarCarro;