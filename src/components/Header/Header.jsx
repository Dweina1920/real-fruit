import logo from "../../img/logo.png"
import React from "react"
import "../Header/Header.css"
import Buscador from "../Elements/HeaderElements/Buscador/Buscador"
import Logo from "../Elements/HeaderElements/Logo/Logo"
import FruitsMenu from "../Elements/HeaderElements/FruitsMenu/FruitsMenu"
import Carrito from "../Elements/HeaderElements/Carrito/Carrito"

function Header(){
    return(
        
            <header className="header-fruits">
                
                    <div className="div-logo">
                        <Logo/>
                       
                    </div>

                    <FruitsMenu/>
                    <Buscador/>
                    <Carrito/>
            </header>
        

    )
}

export default Header;