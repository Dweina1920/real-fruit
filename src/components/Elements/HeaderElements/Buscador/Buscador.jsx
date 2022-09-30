import "../Buscador/Buscador.css";
import lupa from "../../../../img/busqueda.png";
import { useState } from "react";
import frutas from "../../../../application/frutas.json";
import { json } from "react-router-dom";
function Buscador() {
  const [inputValue, setInputValue] = useState("");
  const fruits = frutas;
  const [frutaMatch, setFrutaMatch] = useState({});
  function Filter() {
    fruits.map((fruta) => {
      if (inputValue.toLowerCase() === fruta.nombre.toLowerCase()) {
        setFrutaMatch(fruta);
      } localStorage.setItem("frutaMatch", JSON.stringify(frutaMatch));
    });
  }

  return (
    <div className="div-searcher">
      <input
        onInput={(e) => setInputValue(e.target.value)}
        className="searcher"
        type="search"
        name="busquedfruta"
        placeholder="Buscador..."
      />
      <button onClick={() => Filter()} className="searcher-button">
        <img className="icon-searcher" src={lupa}></img>
      </button>
    </div>
  );
}

export default Buscador;
