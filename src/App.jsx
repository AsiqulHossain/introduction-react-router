import React from 'react'
import Navbar from './Components/ Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
     <Navbar/>
     
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App