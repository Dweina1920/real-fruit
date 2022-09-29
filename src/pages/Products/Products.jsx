import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Card/Card.css"
import Card from "../../components/Card/Card";
import "../Products/Products.css"

function Products(){
    const frutas =[
        {id: 1, nombre: 'Mango', precio:"3€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Ana", img:"mango"},
        {id: 2, nombre: 'Mandarina', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Marta", img:"mandarina"},
        {id: 3, nombre: 'Manzana', precio: "2€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Leila", img:"manzana"},
        {id: 4, nombre: 'Plátano', precio: "3€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Clara", img:"platano"},
        {id: 5, nombre: 'Uvas', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Sandra", img:"uvas"},
        {id: 6, nombre: 'Naranjas', precio: "4€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Paula", img:"naranjas"},
        {id: 7, nombre: 'Pera', precio: "1.5€/Kg", description:"Es una fruta muy buena", origin:"Cosechada por Raquel", img:"pera"},
  ];
    return(
        
        <div>
        <Header/>
            <div className="div-main">
                <h1>Nuestros productos más frescos al alcance de un click</h1>
            </div>
                <div className="container-card">
            {frutas.map(fruta => (
             
            <Card
            key={fruta.id}
            origin={fruta.origin}
            nombre={fruta.nombre}
            precio={fruta.precio}
            img={fruta.img}
            
          
         
            />
         
          ))}
        
            

            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Products;