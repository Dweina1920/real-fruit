import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx";
import ImageDetail from "../components/Elements/DetailFruit/ImageDetail/ImageDetail";
import InfoDetail from "../components/Elements/DetailFruit/InfoDetail/InfoDetail.jsx"
import "../components/Elements/DetailFruit/InfoDetail/InfoDetail.css"
import CartDetail from "../components/Elements/DetailFruit/CartDetail/CartDetail.jsx";
import {useState} from "react";
import frutas from "../application/dataFruits.js";

function DetailFruit(){

    return(
        <>
        <Header/>
        <div className="div-detail-fruit">
        
        <InfoDetail
                    id="1"
                    origin="Canadá"
                    nombre="Mango"
                    precio="5€/Kg"
                    description="Fruta tropical"/>
                   
       

        <ImageDetail/>
        <CartDetail/>
        </div>
        <Footer/>
    
        </>
    )
}

export default DetailFruit;