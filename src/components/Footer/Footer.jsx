import "../Header/Header.css"
import "../Elements/HeaderElements/Logo/Logo.css"
import Logo from "../Elements/HeaderElements/Logo/Logo.jsx"
import "../Footer/Footer.css"
import "../Elements/HeaderElements/FruitsMenu/FruitsMenu.css"

function Footer(){
    return(
        <footer className="footer-fruits">
            <Logo/>
        <div className="fruit-menu">
            <p>Contáctanos</p>
            <p>Política de privacidad</p>
            
        </div>
    
</footer>
    )
}
export default Footer;