import { useEffect } from "react";

function InfoDetail(props) {

  let objectCard = JSON.parse(localStorage.getItem("cardSelected"));



  return (
    <div className="div-info-detail">
      <div className="name-origin">
        <p className="name">{objectCard.nombre}</p>
        <p className="origin">{objectCard.origin}</p>
        <p className="description">{objectCard.description}</p>
      </div>
    </div>
  );
}
export default InfoDetail;
