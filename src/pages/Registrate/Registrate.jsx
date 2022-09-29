import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/Footer.css"
import "../Registrate/Registrate.css"
import React from "react";
import { Link } from "react-router-dom";

function Registrate(){
    return(
    <div>
        <Header/>
      
            <h1 className="titulo-registrate">¿Quieres pasar a formar parte de la comunidad más sana de internet? <br/> Pues registrarse en Real Fruit es el primer paso. </h1>
        <div className="div-registrate">
        <div className="form-registrarse">
            <p>Nombre de usuario:</p>
            <input></input>
      </div>
      <div className="form-registrarse">
            <p>Correo electrónico:</p>
            <input></input>
      </div>
      <div className="form-registrarse">
            <p>Contraseña:</p>
            <input></input>
      </div>
      <div className="form-registrarse">
            <p>Por favor, repita la contraseña:</p>
            <input></input>
      </div>
    
        <div className="form-registrarse">
        <Link className="aceptar"  to='/log-in' id="registrarse" >Aceptar</Link>
        </div>
    </div>
        <div className="footer">
        <Footer/>
        </div>
    </div>
    


    )
}
export default Registrate;