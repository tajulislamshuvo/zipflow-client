import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, LogOut, User, Truck } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";

const MobileMenu = ({ user, handleLogOut }) => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/pricing", label: "Pricing" },
    { path: "/send-parcel", label: "Send Parcel" },
    { path: "/rider", label: "Be a Rider" },
    { path: "/coverage", label: "Coverage" },
  ];

  if (user) {
    navLinks.push({
      path: "/dashboard",
      label: "Dashboard",
    });
  }

  return (
    <>
      {/* Menu Button */}
      <button onClick={() => setOpen(true)} className="btn btn-ghost lg:hidden">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
              className="fixed top-0 left-0 w-[300px] h-screen bg-base-100 z-50 shadow-md flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-500">
                <div>
                  <Logo></Logo>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-ghost btn-circle"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `
          flex items-center
          px-4 py-3
          rounded-xl
          transition-all duration-300
          ${
            isActive
              ? "bg-primary text-black font-semibold"
              : "hover:bg-base-200"
          }
        `
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 border-t space-y-3">
                <Link
                  to="/rider"
                  className="btn btn-primary text-gray-800 w-full"
                >
                  <Truck size={18} />
                  Be a Rider
                </Link>

                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline w-full"
                  >
                    <LogOut size={18} />
                    Log Out
                  </button>
                ) : (
                  <Link to="/login" className="btn btn-outline w-full">
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
