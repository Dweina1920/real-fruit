import "../Logo/Logo.css"
import logo from "../../../../img/logo.png"
function Logo(){
    return(
        <div className="div-logo-logo">
        <img className="logo-header" src={logo} alt="logo" />
        </div>
    )
}
export default Logo;