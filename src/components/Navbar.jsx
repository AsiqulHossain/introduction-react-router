import React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'



const  Navbar = () => {
  const navigate=useNavigate();

  return (
    <div className='navbar'> 
       <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/product'><li>Product</li> </NavLink>
        <NavLink to='/about'><li>About</li> </NavLink>
        <NavLink to='/contact'><li>Contact</li> </NavLink> 
       </ul>
       <button onClick={()=> navigate ('/contact')}> Get Started </button>
    </div>
  )
}

export default  Navbar