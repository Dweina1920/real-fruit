import React from "react";
import "../Card/Card.css"
import mango from "../../img/mango.png";
import InfoCard from "../Elements/CardElements/InfoCard/InfoCard"
import PriceCard from "../Elements/CardElements/PriceCard/PriceCard"
import AddAndDelete from "../Elements/CardElements/AddAndDelete/AddAndDelete"


function Card(){
    return(
        <div className="container-card">
            <div className="card">
                <div className="div-image-card">
                    <img className="image-card" src={mango} alt="imagen de fresas" />
                </div>
                <div className="info-card">
                    <div className="info-fruit">
                        <InfoCard/>
                        <PriceCard/>
                    </div>
                    <AddAndDelete/>
                    

                </div>
            </div>
        </div>
    )
}
export default Card;