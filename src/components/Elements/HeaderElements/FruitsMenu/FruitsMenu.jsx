import "../FruitsMenu/FruitsMenu.css"
import React from "react";
import { Link } from "react-router-dom";
function FruitsMenu(){
    return(
        <div className="fruit-menu">
                        
        <Link to='/' id="MENU-FRUIT" >HOME</Link>
        <Link to='/sobre-nosotros' id="MENU-FRUIT" >SOBRE NOSOTRS</Link>
        <Link to='/registrate' id="MENU-FRUIT" >REGÍSTRATE</Link>
        <Link to='/log-in' id="MENU-FRUIT" >LOG IN</Link>
        <Link to='/productos' id="MENU-FRUIT" >PRODUCTOS</Link>
     
    
</div>
    
    )
}

export default FruitsMenu;