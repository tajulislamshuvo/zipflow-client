import React from 'react'
import Logo from '../../../components/Logo/Logo'
import { Link, NavLink } from 'react-router'
import useAuth from '../../../hooks/useAuth'

export default function Navbar() {

  const {user, logOut} = useAuth();

  const handleLogOut = () =>{
    logOut()
    .then(result=>{
      console.log(result)
    }).catch(error => {
      console.log(error.message);
      
    })
  }

  const links = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='services'>Services</NavLink></li>
  <li><NavLink to='/about'>About Us</NavLink></li>
  <li><NavLink to='/pricing'>Pricing</NavLink></li>
  <li><NavLink to='/send-parcel'>Send Parcel</NavLink></li>
  <li><NavLink to="/coverage">Coverage</NavLink></li>


  
  </>
  return (
   <div className="navbar bg-base-100  shadow-sm p-3 sm:rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn px-1 btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
           {
      user ? <a onClick={handleLogOut} className="btn">Log Out</a> : <Link to="/login" className="btn">Login</Link>
    }
    <Link className='btn btn-primary text-black mt-2' to="/rider">Be a rider</Link>

      </ul>
    </div>
      <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
    {
      user ? <a onClick={handleLogOut} className="btn">Log Out</a> : <Link to="/login" className="btn">Login</Link>
    }
    <Link className='btn btn-primary text-black ml-1.5' to="/rider">Be a rider</Link>
  </div>
</div>
  )
}
