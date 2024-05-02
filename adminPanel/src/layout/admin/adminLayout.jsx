import React from 'react'
import Navbar from './navbar'

import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  )
}

export default AdminLayout
