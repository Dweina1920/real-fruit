import "../FruitsMenu/FruitsMenu.css"
import React from "react";
import { Link } from "react-router-dom";
function FruitsMenu(){
    return(
        <div className="fruit-menu">
                        
        <Link className="link-header" to='/' id="MENU-FRUIT" >HOME</Link>
        <Link className="link-header" to='/sobre-nosotros' id="MENU-FRUIT" >SOBRE NOSOTROS</Link>
        <Link className="link-header" to='/registrate' id="MENU-FRUIT" >REGÍSTRATE</Link>
        <Link className="link-header" to='/log-in' id="MENU-FRUIT" >LOG IN</Link>
        <Link className="link-header" to='/productos' id="MENU-FRUIT" >PRODUCTOS</Link>
     
    
</div>
    
    )
}

export default FruitsMenu;