import "./adminNavbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='adminBox'>
     <Link to={"/adminLayout/products"}>products</Link>
     <Link to={"/"}>Main site</Link>
     <Link to={"/adminLayout/addProducts"}>Add products</Link>
    </div>
  )
}

export default Navbar
