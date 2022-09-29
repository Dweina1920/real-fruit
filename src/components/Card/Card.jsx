import React from "react";
import "../Card/Card.css"
import mango from "../../img/mango.png";
import InfoCard from "../Elements/CardElements/InfoCard/InfoCard"
import PriceCard from "../Elements/CardElements/PriceCard/PriceCard"



function Card(props){
  
   
    return(
  
          
            <div className="card">
                <div className="div-image-card">
                    <img className="image-card" src={require(`../../img/${props.img}.png`)} alt="imagen de fresas" />
                </div>
                <div className="info-card">
                    <div className="info-fruit">
                     
                       
                        <InfoCard  nombre={props.nombre} origin={props.origin}/>
                        <PriceCard  precio={props.precio}/>
                    </div>
                   
                    

                </div>
            </div>
       
    )
}
export default Card;