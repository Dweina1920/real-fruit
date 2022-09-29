import "./ImageDetail.css";
import mango from "../../../../img/mango.png"
import { useEffect } from "react";

function ImageDetail(props){
    let objectCard = JSON.parse(localStorage.getItem("cardSelected"));

    useEffect(() => {
     
    });
    return(
        <div className="div-image-detail">
            <img className="image-detail" src={require(`../../../../img/${objectCard.img}.png`)}>
           
            </img>
        </div>
    )
}

export default ImageDetail;