import Header from "../components/Header/Header.jsx"
import Banner from "../components/Banner/Banner.jsx"
import Card from "../components/Card/Card.jsx"
import Footer from "../components/Footer/Footer"
import "../components/Footer/Footer.css"
import {useState} from "react";
import "../components/Card/Card.css"
import frutas from "../application/dataFruits.js"





     function Home() {

         return (


            <div>
            <Header/>
           
            <Banner/>
           
            <div className="container-card">
            {frutas.map(fruta => (
             
            <Card
            key={fruta.id}
            origin={fruta.origin}
            nombre={fruta.nombre}
            precio={fruta.precio}
            img={fruta.img}
            
          
         
            />
         
          ))}
        
            </div>
            <div className="footer">
            <Footer/>
            </div>
            </div>
       
           
       
    )
 }
 
    export default Home;