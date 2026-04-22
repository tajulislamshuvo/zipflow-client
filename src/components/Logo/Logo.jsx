import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link>
    <div className='flex items-end'>
      <img src={logo} alt="logo" className=' w-8'/>
      <h3 className='text-2xl font-extrabold -ms-2 tracking-wide'>zipFlow</h3>
    </div>
    </Link>
  );
};

export default Logo;