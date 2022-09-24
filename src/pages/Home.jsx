import Header from "../components/Header/Header.jsx"
import Banner from "../components/Banner/Banner.jsx"
import Card from "../components/Card/Card.jsx"
import Footer from "../components/Footer/Footer"
import "../components/Footer/Footer.css"



     function Home() {
         return (
            <div>
            <Header/>
            <Banner/>
            <Card/>
            <div className="footer">
            <Footer/>
            </div>
            </div>
       
           
       
    )
 }
 
    export default Home;