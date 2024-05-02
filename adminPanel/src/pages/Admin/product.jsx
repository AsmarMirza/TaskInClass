import React from 'react'
import { useEffect,useState } from 'react'
import "./product.css"
function Product() {
    const [products, setProducts] = useState([])

    async function getAllProducts(){
      const res=await fetch ("http://localhost:3000/products")
      const data=await res.json()
      setProducts(data)
          }
          
    useEffect(() => {
    
    getAllProducts()
    }, [products])
    async function deleteProduct(id){
      const res=await fetch("http://localhost:3000/products/"+id,{method:"delete"})
      const data =await res.json()
     return data
    }
    
  return (
    <div >
      <h1> Admin Products</h1>
   
 
<table >
  <thead>
      
  <tr>
    <th>No</th>
    <th>Name</th>
    <th>Image</th>
    <th>Description</th>
    <th>Click</th>
  </tr>
  </thead>
  <tbody>
     {
      products.map((x)=>(
        <tr>
        <td >{x.id}</td>
        <td>{x.name}</td>
        <td className='td'><img className='adminImg' src={x.img} alt="" /></td>
        <td>{x.description}</td>
        <td><button>update</button>
        <button onClick={()=>deleteProduct(x.id)}>delete</button></td>
      </tr>
      ))
     }
  </tbody>


</table>
    </div>
  )
}

export default Product
