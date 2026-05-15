import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import { TfiMenu } from "react-icons/tfi";
import { FaTasks, FaHome, FaUsers } from "react-icons/fa";
import { MdOutlinePayment, MdDirectionsBike } from "react-icons/md";
const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-gray-50 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* 🔝 NAVBAR */}
        <div className="navbar bg-white  px-4 shadow sticky top-0 z-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-square"
            >
              <TfiMenu size={20} />
            </label>
          </div>

          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-700">
              ZipFlow Dashboard
            </h1>
          </div>

          {/* RIGHT */}
        </div>

        {/* PAGE */}
        <div className="p-6 flex-1">
          <div className="bg-white rounded-2xl shadow-sm p-5 min-h-[80vh]">
            <Outlet />
          </div>
        </div>
      </div>

      {/* 📚 SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        {/* ✅ FULL HEIGHT FIX */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col min-h-screen">
          {/* LOGO */}
          <div className="px-5 py-2 text-xl font-bold  shadow">
            <Logo></Logo>
          </div>

          {/* MENU */}
          <ul className="menu p-4 space-y-2 flex-1">
            {/* HOME */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#caeb66] text-black font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <FaHome size={18} />
                Homepage
              </NavLink>
            </li>

            {/* PARCEL */}
            <li>
              <NavLink
                to="/dashboard/my-parcels"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#caeb66] text-black font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <FaTasks />
                My Parcels
              </NavLink>
            </li>

            {/* payment history */}
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#caeb66] text-black font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <MdOutlinePayment size={18} />
                Payment History
              </NavLink>
            </li>

            {/* approve Rider request  */}
            <li>
              <NavLink
                to="/dashboard/rider-request"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#caeb66] text-black font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <MdDirectionsBike size={18} />
                Rider request
              </NavLink>
            </li>

            {/* user management */}
            <li>
              <NavLink
                to="/dashboard/users-management"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#caeb66] text-black font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <FaUsers size={18} />
                Users management
              </NavLink>
            </li>
          </ul>

          {/* FOOTER */}
          <div className="p-4 text-xs text-gray-400 border-t">
            © 2026 ZipFlow
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
