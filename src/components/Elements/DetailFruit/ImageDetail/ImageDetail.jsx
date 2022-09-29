import "./ImageDetail.css";
import mango from "../../../../img/mango.png"

function ImageDetail(){
    return(
        <div className="div-image-detail">
            <img className="image-detail" src={mango}></img>
        </div>
    )
}

export default ImageDetail;