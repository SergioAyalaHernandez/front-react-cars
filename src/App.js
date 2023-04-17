import './App.css';
import Rutas from "./Rutas";
import Menu from './Componentes/Menu';
import{BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"

function App() {


  return (
    <div className="App">
      <Menu />
      <div>
        <Rutas/>
      </div>
    </div>
  );
}

export default App;
