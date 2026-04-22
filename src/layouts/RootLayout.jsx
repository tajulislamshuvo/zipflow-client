import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer/Footer'
import Navbar from '../pages/Shared/Navbar/Navbar'

export default function RootLayout() {
  return (
    <div className=' bg-gray-100 sm:p-3  lg:p-4'>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
          <Navbar></Navbar>
          <div className="flex-1">
             <Outlet></Outlet>
          </div>
         
          <Footer></Footer>
      </div>
     
    </div>
  )
}
