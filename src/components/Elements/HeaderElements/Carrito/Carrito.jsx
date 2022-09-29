import ImagenCarrito from "../../../../img/carrito3.png"
import "../Carrito/Carrito.css"
function Carrito(){
    return(
        <button className="button-cart">
            <img className="icon-shop-cart" src={ImagenCarrito}></img>
        </button>
    )
}

export default Carrito;