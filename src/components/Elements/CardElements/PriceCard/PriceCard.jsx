import "./PriceCard.css"
import React from "react";
function PriceCard(props){
    return(
        <p className="price-card">{props.precio}</p>

    )
}
export default PriceCard;