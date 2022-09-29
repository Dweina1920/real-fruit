import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/Footer.css"
import "../Registrate/Registrate.css"
import React from "react";
import "./SobreNosotros.css"

function SobreNosotros(){
    return(
    <div>
        <Header/>
      
           
            <h1 className="titulo-registrate">¡Estamos encantados de conoceros y veros por aquí!</h1><br/>
        <div className="div-form-registrarse">

      
            <p className="texto-sobrenosotros">¡Hola! Somos Dina y Ana, dos hermanas de Barcelona que llevan toda la vida dedicándose a la venta de producto alimentario. Hace más de 15 años abrimos la primera Real Fruit en la calle del Carme de Esplugues del Llobregat y desde entonces hemos ido creciendo hasta el día de hoy, que contamos con 6 establecimientos.  </p><br/>
            <p className="texto-sobrenosotros">
            La voluntad de ofrecer un buen producto y un buen servicio a los clientes nos viene de familia, ya que empezamos hace más de 40 años ayudando a nuestros padres en sus negocios. Por eso, entendemos lo importante que es que nuestros clientes encuentren lo que buscan y que podamos ofrecérselo con la mayor cercanía posible.
            </p><br/>

            <p className="texto-sobrenosotros">
            Con todo ello, Real Fruit pretende seguir creciendo y llenar las despensas de todos aquellos que quieran hacerlo con productos naturales y de calidad, siempre con cercanía y con un trato personal. Queremos que nuestros clientes puedan encontrar en nosotros el cuidado por el producto y la atención que intentamos transmitir a través de una filosofía de negocio que se basa en la idea de que hacer la compra es algo más que llenar un carro con comida. Cada cliente se merece poder confiar en el producto que está adquiriendo y ese es nuestro compromiso: ofrecer siempre lo mejor. ¡Pásate por Real Fruit!</p><br/>
                    
      </div>
     </div>
    )}
    export default SobreNosotros;