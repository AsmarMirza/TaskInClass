import React from 'react'
import { useState } from 'react'
function AddProducts() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
 

  return (
    <div>
      <h1>Add Products</h1>
      <form action="">
        <input  type="text" name="" id="" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default AddProducts
