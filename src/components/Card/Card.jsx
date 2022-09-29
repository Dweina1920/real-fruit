import React from "react";
import "../Card/Card.css";
import mango from "../../img/mango.png";
import InfoCard from "../Elements/CardElements/InfoCard/InfoCard";
import PriceCard from "../Elements/CardElements/PriceCard/PriceCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Elements/CardElements/InfoCard/InfoCard.css";

function Card(props) {
  const addCardSelectedToLocal = () => {
    localStorage.setItem("cardSelected", JSON.stringify(cardSelected));
  };

  const cardSelected = {
    id: props.id,
    origin: props.origin,
    nombre: props.nombre,
    precio: props.precio,
    img: props.img,
    description: props.description,
  };

  return (
    <div className="card">
      <div className="div-image-card">
        <img
          className="image-card"
          src={require(`../../img/${cardSelected.img}.png`)}
          alt="imagen de fresas"
        />
      </div>
      <div className="info-card">
        <div className="info-fruit">
          <InfoCard nombre={cardSelected.nombre} origin={cardSelected.origin} />
          <PriceCard precio={cardSelected.precio} />
        </div>
        <Link   to="/detalle-fruta" >
        <button className="fruit-name" onClick={() => addCardSelectedToLocal()}>
          {" "}
          {cardSelected.nombre}
        </button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
