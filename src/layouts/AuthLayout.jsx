import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen p-3  lg:p-4'>
      <div className="pb-4">
      <Logo></Logo>
      </div>
      
      <div className='flex flex-col-reverse gap-4 md:flex-row md:items-center my-12'>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <div>
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;