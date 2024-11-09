import React from 'react'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import About from './pages/About'
import Products from './pages/products'
import Contact from './pages/contact'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>

        <Navbar/>
              <div className="container">        
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
              </Routes>
              </div>
    </div>
  )
}

export default App