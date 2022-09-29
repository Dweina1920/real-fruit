import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/Footer.css"
import "../Registrate/Registrate.css"
import React from "react";
import { Link } from "react-router-dom";

function LogIn(){
    return(
    <div>
        <Header/>
      
            <h1 className="titulo-registrate">¿A qué esperas? </h1>
            <h1 className="titulo-registrate">Accede ahora mismo y disfruta de todas nuestras ventajas. </h1>
        <div className="div-registrate">

      <div className="form-registrarse">
            <p>Correo electrónico:</p>
            <input></input>
      </div>
      <div className="form-registrarse">
            <p>Contraseña:</p>
            <input></input>
      </div>

    
        <div className="form-registrarse">
        <Link className="aceptar"  to='/' id="registrarse" >Acceder</Link>
        </div>
    </div>
        <div className="footer-login">
        <Footer/>
        </div>
    </div>
    


    )
}
export default LogIn;