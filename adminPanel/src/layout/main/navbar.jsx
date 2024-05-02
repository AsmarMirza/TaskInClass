import React from 'react'
import "./mainNavbar.css"
import { Link } from 'react-router-dom'
import Home from '../../pages/main/home'
function Navbar() {
  return (
    <div className='mainBox'>
      <Link to={"/"}>Home</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/adminLayout"}>Admin panel</Link>
      <Link to={"/products"}>Products</Link>
    </div>
  )
}

export default Navbar
