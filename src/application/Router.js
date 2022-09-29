import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import LogIn from '../pages/LogIn/LogIn'
import Home from "../pages/Home"
import Products from "../pages/Products/Products"
import Registrate from '../pages/Registrate/Registrate'
import DetailFruit from "../pages/DetailFruit"
import { CartPage } from '../pages/CartPage'
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros'

function Router() {
    
    
    
    return (
        <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Home/>} />
            <Route path='/detalle-fruta' element={<DetailFruit/>} />
            <Route path='/productos' element={<Products/>}/>
            <Route path='/registrate' element={<Registrate/>}/>
            <Route path='/log-in' element={<LogIn/>}/>
            <Route path='/sobre-nosotros' element={<SobreNosotros/>}/>

         
         
        </Routes>
    </BrowserRouter>
)
}
export default Router