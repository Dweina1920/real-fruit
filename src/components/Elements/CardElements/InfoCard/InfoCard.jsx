import "../InfoCard/InfoCard.css";
import React from "react";
import { Link } from "react-router-dom";
function InfoCard(props) {
  return (
    <>
   
      <p className="fruit-creator">{props.origin}</p>
    </>
  );
}
export default InfoCard;
