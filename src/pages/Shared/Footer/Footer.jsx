import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import Logo from '../../../components/Logo/Logo'

// const icon =[
//   {index:1, logo: <FaFacebook />},
//   {index:2, logo: <BsTwitterX />},
//   {index:3, logo: <FaLinkedin />},
//   {index:4, logo: <IoLogoYoutube />},
  
// ]

export default function Footer() {
  return (
    <footer className="footer sm:rounded-2xl footer-horizontal footer-center bg-black text-primary-content p-10 ">
  <aside>
    <Logo></Logo>
    <p className=" text-center text-[16px] font-light max-w-182.5 text-[#DADADA]">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
    </p>
    <div>
      <div className="flex md:flex-row flex-col flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 items-center md:mt-4 py-7 font-medium text-[#DADADA]">
        <a href="" className='hover:underline'>Services</a>
        <a href="" className='hover:underline'>Coverage</a>
        <a href="" className='hover:underline'>About Us</a>
        <a href="" className='hover:underline'>Pricing</a>
        <a href="" className='hover:underline'>Blog</a>
        <a href="" className='hover:underline'>Contact</a>
      </div>
    </div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <FaLinkedinIn size={25} className='text-white bg-blue-500  rounded p-0.5 hover:scale-110 hoverEffect'/>
      </a>
      
      <a>
         <BsTwitterX size={25} className='bg-white text-black rounded p-0.5 hover:scale-110 hoverEffect'/>
      </a>
      <a>
         <FaFacebookF size={25} className='text-white p-0.5 py-1 bg-blue-500 rounded hover:scale-110 hoverEffect'/>
      </a>
      <a>
        <IoLogoYoutube size={25} className='text-red-600 bg-white p-0.5 rounded hover:scale-110 hoverEffect'/>
      </a>
    </div>
  </nav>
</footer>
  )
}
