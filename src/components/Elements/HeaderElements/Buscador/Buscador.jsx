import "../Buscador/Buscador.css"
import lupa from "../../../../img/busqueda.png"
function Buscador(){
    return(
        <div className="div-searcher" >
        <input className="searcher"  type="search" name="busquedfruta" placeholder="Buscador..."/>
        <button className="searcher-button" >
        <img className="icon-searcher" src={lupa}></img>
        </button>
    </div>
    )
}

export default Buscador;