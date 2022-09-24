import "../Buscador/Buscador.css"
function Buscador(){
    return(
        <div className="div-searcher" >
        <input className="searcher"  type="search" name="busquedamusica" placeholder="Manzana, pera..."/>
        <input className="searcher-button" type="submit" value="Buscar"/>
    </div>
    )
}

export default Buscador;