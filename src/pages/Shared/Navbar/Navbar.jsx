import React, { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import userImg from "/image.png";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogOut } from "react-icons/io5";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a rider</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100  shadow-sm p-3 sm:rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn px-1 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth=""
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            {user ? (
              <a onClick={handleLogOut} className="btn">
                Log Out
              </a>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
            <Link className="btn btn-primary text-black mt-2" to="/rider">
              Be a rider
            </Link>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          // <div className="dropdown dropdown-end z-50 ">
          //   <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
          //     <div className="w-10 border-2 border-blue-300 rounded-full">
          //       <img src={user.photoURL || userImg} alt="user" />
          //     </div>
          //   </div>

          //   <motion.ul
          //     initial={{ opacity: 0, scale: 0.95, y: -10 }}
          //     animate={{ opacity: 1, scale: 1, y: 0 }}
          //     transition={{ duration: 1, ease: "easeOut" }}
          //     className="menu menu-sm dropdown-content bg-[#0f1f3d] text-white rounded-box mt-3 w-52 p-2 shadow space-y-2"
          //   >
          //     <li className="font-bold">{user.displayName}</li>
          //     <li className="text-xs">{user.email}</li>
          //     <li className="mt-2 hover:bg-[#09327e88] transition hover: rounded-md">
          //       <Link to="/dashboard">Dashboard</Link>
          //     </li>
          //     <li>
          //       <button
          //         onClick={handleLogOut}
          //         className="btn btn-primary mt-2 text-black font-bold"
          //       >
          //         <IoLogOut /> Logout
          //       </button>
          //     </li>
          //   </motion.ul>
          // </div>

          // <div className="relative">
          //   <button
          //     onClick={() => setOpen(!open)}
          //     className="btn btn-ghost btn-circle avatar"
          //   >
          //     <div className="w-10 border-2 border-blue-300 rounded-full">
          //       <img src={user.photoURL || userImg} alt="user" />
          //     </div>
          //   </button>

          <div
            onClick={() => setOpen(!open)}
            className="dropdown dropdown-end z-50 "
          >
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border-2 border-blue-300 rounded-full">
                <img src={user.photoURL || userImg} alt="user" />
              </div>
            </div>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="menu menu-sm dropdown-content bg-[#0f1f3d] text-white rounded-box mt-3 w-52 p-2 shadow space-y-2"
                >
                  <li className="font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>

                  <li className="mt-2 hover:bg-[#09327e88] rounded-md">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-primary mt-2 text-black font-bold"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link className="btn btn-primary text-black ml-1.5" to="/rider">
              Be a rider
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
