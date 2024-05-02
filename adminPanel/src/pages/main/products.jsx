import React from 'react'
import { useEffect,useState } from 'react'
import "./products.css"
function Products() {
    const [products, setProducts] = useState([])
    async function getAllProducts(){
        const res=await fetch ("http://localhost:3000/products")
        const data=await res.json()
        setProducts(data)
            }

            useEffect(() => {
    
                getAllProducts()
                }, [])
  return (
    <div>
       <h1> Main Products</h1>
       <div className='mainProducts'>
      {products.map((x)=>(
        <div key={x.id} className='mainProductsBox'><h5>{x.name}</h5>
        <p>{x.description}</p>
        <div className='imgDiv'>
        <img className='img' src={x.img} alt="" />
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
