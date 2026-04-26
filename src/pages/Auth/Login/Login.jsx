import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const {signInUser} = useAuth();

    const handleSignIn = (data) =>{
      console.log(data)
      signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      }).catch(error =>{
        console.log(error)
      })
    }

  return (
    <div className="flex justify-center items-center">
  <div className="card w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
      <p className='font-semibold text-center mb-2'>Login with ZipFlow</p>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <fieldset className="fieldset w-full">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input input-bordered w-full" placeholder="Email" />
          {errors.email?.type === "required" && (
            <p role="alert" className='text-red-500 font-bold'>Email is required</p>
            )}

          <label className="label mt-2">Password</label>
          <input type="password" {...register('password', {required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/ })} className="input input-bordered w-full" placeholder="Password" />
          {errors.password?.type === "required" && (
            <p role="alert" className='text-red-500 font-bold'>Password is required</p>
            )}
          {errors.password?.type === "pattern" && (
            <p role="alert" className='text-red-500 font-bold'>Password must be 6-15 characters, include uppercase, lowercase, and a number</p>
            )}


          <div className="mt-1 text-left">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </fieldset>
        <p className='mt-1'>New to zipFlow? <Link className="underline text-red-400" to="/register">Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
  );
};

export default Login;