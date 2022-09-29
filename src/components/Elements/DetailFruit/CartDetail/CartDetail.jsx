import "./CartDetail.css";
import "../../CardElements/AddAndDelete/AddAndDelete.css";
import React from "react";
import { Link } from "react-router-dom";

function CartDetail(){
    return(
        <div className="div-cart-detail">
            <p className="price-detail">5€/Kg</p>
      
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