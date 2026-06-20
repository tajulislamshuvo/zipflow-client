import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthticating] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const { signInUser, sendPassResetEmailFunc, setLoading } = useAuth();

  const handleSignIn = (data) => {
    console.log(data);
    setIsAuthticating(true);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful");

        navigate(location?.state || "/");
        setIsAuthticating(false);
      })
      .catch((error) => {
        setIsAuthticating(false);
        console.log(error);
        toast.error("Password incorrect");
      });
  };

  const handleForgetPassword = () => {
    const email = watch("email");
    console.log(email);
    sendPassResetEmailFunc(email)
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("Check your email to reset password");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleDemoLogin = (role) => {
    if (role === "admin") {
      setValue("email", "shuvo42@gmail.com");
      setValue("password", "Test1234@");
    } else if (role === "user") {
      setValue("email", "mamun22@gmail.com");
      setValue("password", "Test1234@");
    } else if (role === "rider") {
      setValue("email", "humayunkabir21@gmail.com");
      setValue("password", "Test1234@");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
          <p className="font-semibold text-center mb-2">Login with ZipFlow</p>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="fieldset w-full">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 font-bold">
                  Email is required
                </p>
              )}

              <div className="relative">
                <label className="label mt-2">Password</label>
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/,
                  })}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-10 cursor-pointer z-50"
                >
                  {show ? <IoEyeOff></IoEyeOff> : <FaEye></FaEye>}
                </span>
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500 font-bold">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-500 font-bold">
                    Password must be 6-15 characters, include uppercase,
                    lowercase, and a number
                  </p>
                )}
              </div>

              <div className="mt-1 text-left">
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover text-sm"
                >
                  Forgot password?
                </button>
              </div>

              <button className="btn bg-[#caeb66] mt-4 w-full">
                {isAuthenticating ? "Logging In..." : "Log in"}
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("user")}
                className="btn bg-gray-200 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Demo User
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("rider")}
                className="btn bg-gray-200 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Demo Rider
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("admin")}
                className="btn bg-gray-200 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Demo Admin
              </button>
            </fieldset>
            <p className="mt-1">
              New to zipFlow?{" "}
              <Link
                className="underline text-red-400"
                to="/register"
                state={location?.state}
              >
                Register
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
