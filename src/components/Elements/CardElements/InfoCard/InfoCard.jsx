import "../InfoCard/InfoCard.css"
import React from "react";
import { Link } from "react-router-dom";
function InfoCard(props){
    return(
        <>
        
        <Link to='/detalle-fruta' className="fruit-name" id="name-fruit" >{props.nombre}</Link>
        <p className="fruit-creator">{props.origin}</p>
        </>
    )
}
export default InfoCard;