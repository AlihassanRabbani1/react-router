import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
            <h1>Router</h1>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink> 
           <NavLink to='/Products'><li>Product</li></NavLink>
            <NavLink to='/About'><li>About</li></NavLink>
            <NavLink to='/Contact'><li>Contact</li></NavLink>
        </ul>
        <button onClick={()=> navigator('/contact')}>Get Started</button>
    </div>
  )
}

export default Navbar