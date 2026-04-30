import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState(false);
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const {registerUser,updateUserProfile} = useAuth();

  const handleRegister = (data) =>{
    console.log('after register',data.photo[0]);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
    .then(result =>{
      // store the image and get the photo url
      const formData = new FormData();
      formData.append('image', profileImage);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

      axios.post(image_API_URL, formData)
      .then(res =>{
        const photoUrl = res.data.data.url;


        // update user profile
        const userProfile = {
          displayName: data.name,
          photoURL: photoUrl
        }

        updateUserProfile(userProfile)
        .then(() =>{
          console.log("user profile updated done.",res)
          navigate(location?.state || "/")
        })

      }).catch(error => console.log(error.message))
      
      console.log(result.user)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="flex justify-center items-center">
  <div className="card w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center">Create an Account</h2>
      <p className='font-semibold text-center mb-2'>Register with ZipFlow</p>

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset w-full">
        {/* name field */}
        <label className="label">Name</label>
          <input type="text" {...register('name', {required:true})} className="input input-bordered w-full" placeholder="Your name" />
          {errors.name?.type === "required" && (
            <p role="alert" className='text-red-500 font-bold'>Name is required</p>
            )}

        {/* image upload field */}
        <label className="label">Image</label>
          <input type="file" {...register('photo')} className="file-input input-bordered w-full" placeholder="Upload your image" />
         

          {/* email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input input-bordered w-full" placeholder="Email" />
          {errors.email?.type === "required" && (
            <p role="alert" className='text-red-500 font-bold'>Email is required</p>
            )}


          <div className="relative">

          <label className="label mt-2">Password</label>

          <input type={show ? 'text' : 'password'} {...register('password', {required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/ })} className="input input-bordered w-full" placeholder="Password" />

          <span onClick={() => setShow(!show)} className='absolute right-2 top-10 cursor-pointer z-50'>
              {show ?<IoEyeOff></IoEyeOff> :<FaEye></FaEye> }
          </span>
          {errors.password?.type === "required" && (
            <p role="alert" className='text-red-500 font-bold'>Password is required</p>
            )}
          {errors.password?.type === "pattern" && (
            <p role="alert" className='text-red-500 font-bold'>Password must be 6-15 characters, include uppercase, lowercase, and a number</p>
            )}
            </div>
          

           <div className="mt-1 text-left">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </fieldset>
        <p className='mt-1'>Allready Have An Account  <Link className="underline text-red-400" to="/login" state={location?.state}>Login</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
  );
};

export default Register;