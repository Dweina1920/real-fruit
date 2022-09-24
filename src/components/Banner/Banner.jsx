import React from "react";
import "../Banner/Banner.css"
import imageBanner from "../../img/banner.png"


function Banner(){
    return(
        <section className="div-banner-fruit">
            <h1 className="frase">Loving the <span>real fruit</span></h1>
            <img className="banner-fruit" src={imageBanner} alt="banner"></img>
        </section>
    )
}

export default Banner;