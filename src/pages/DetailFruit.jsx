import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx";
import ImageDetail from "../components/Elements/DetailFruit/ImageDetail/ImageDetail";
import InfoDetail from "../components/Elements/DetailFruit/InfoDetail/InfoDetail.jsx"
import "../components/Elements/DetailFruit/InfoDetail/InfoDetail.css"
import CartDetail from "../components/Elements/DetailFruit/CartDetail/CartDetail.jsx";
import {useState} from "react";

function DetailFruit(){
    const frutas=[
        {id: 1, nombre: 'Mango', precio:"3€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Ana"},
        {id: 2, nombre: 'Pera', precio: "1.5€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Raquel"},
        {id: 3, nombre: 'Manzana', precio: "2€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Leila"},
        {id: 4, nombre: 'Platano', precio: "3€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Clara"},
        {id: 5, nombre: 'Uvas', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Sandra"},
        {id: 6, nombre: 'Naranjas', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Paula"},
        {id: 7, nombre: 'Mandarina', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Marta"}
  ];
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