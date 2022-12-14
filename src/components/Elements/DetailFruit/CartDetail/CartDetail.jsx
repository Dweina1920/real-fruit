import "./CartDetail.css";
import "../../CardElements/AddAndDelete/AddAndDelete.css";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CartDetail(){
    let objectCard = JSON.parse(localStorage.getItem("cardSelected"));

   
  
    return(
        <div className="div-cart-detail">
            <p className="price-detail">{objectCard.precio}</p>
      
            <div className="add-fruits">
                <button className="button-card">+</button>
                <p>1</p>
                <button className="button-card">-</button>
            </div>
            <div className="div-button-card-cart">
                <button className="button-card-cart">Ir al carrito</button>
                </div>
                <div>
                <Link to="/" className="volver">Volver</Link>
                
            </div>
        </div>
        
    )
}
export default CartDetail;