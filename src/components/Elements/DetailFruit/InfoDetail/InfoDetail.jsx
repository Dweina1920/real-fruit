function InfoDetail(props){
    return(
        <div className="div-info-detail">
            <div className="name-origin">
           
                <p className="name">{props.nombre}</p>
                <p className="origin">{props.origin}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
export default InfoDetail;