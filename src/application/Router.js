import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"


import Home from "../pages/Home"
import App from "../App"
import DetailFruit from "../pages/DetailFruit"

function Router() {
    
    
    
    return (
        <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<App/>} />
            <Route path='/detalle-fruta' element={<DetailFruit/>} />
            <Route path='/Home' element={<Home/>}/>
         
         
        </Routes>
    </BrowserRouter>
)
}
export default Router