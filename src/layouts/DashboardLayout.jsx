import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import { TfiMenu } from "react-icons/tfi";
import { FaTasks, FaHome } from "react-icons/fa";
const DashboardLayout = () => {
  return (
    // <div className="drawer lg:drawer-open">
    //   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content bg-gray-100">
    //     {/* Navbar */}
    //     <nav className="navbar w-full bg-white">
    //       <label
    //         htmlFor="my-drawer-4"
    //         aria-label="open sidebar"
    //         className="btn btn-square btn-ghost"
    //       >
    //         <TfiMenu size="20" />
    //       </label>
    //       <div className="px-3">Zip flow dashboard</div>
    //     </nav>
    //     {/* Page content here */}

    //     <div className="p-4">
    //       <Outlet></Outlet>
    //     </div>
    //   </div>

    //   <div className="drawer-side is-drawer-close:overflow-visible">
    //     <label
    //       htmlFor="my-drawer-4"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <div className="flex min-h-full flex-col items-start bg-white is-drawer-close:w-14 is-drawer-open:w-64">
    //       {/* Sidebar content here */}

    //       <div className="p-2 is-drawer-close:hidden">
    //         <Logo></Logo>
    //       </div>

    //       <ul className="menu w-full grow">
    //         {/* List item */}
    //         <li>
    //           <Link
    //             to="/"
    //             className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
    //             data-tip="Homepage"
    //           >
    //             {/* Home icon */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               strokeLinejoin="round"
    //               strokeLinecap="round"
    //               strokeWidth="2"
    //               fill="none"
    //               stroke="currentColor"
    //               className="my-1.5 inline-block size-4"
    //             >
    //               <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
    //               <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    //             </svg>
    //             <span className="is-drawer-close:hidden">Homepage</span>
    //           </Link>
    //         </li>

    //         {/* our dashboard link */}
    //         <li>
    //           <NavLink
    //             to="/dashboard/my-parcels"
    //             className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
    //             data-tip="My Parcel"
    //           >
    //             <FaTasks size="16" />
    //             <span className="is-drawer-close:hidden">My Parcel</span>
    //           </NavLink>
    //         </li>

    //         {/* List item */}
    //         <li>
    //           <button
    //             className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
    //             data-tip="Settings"
    //           >
    //             {/* Settings icon */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               strokeLinejoin="round"
    //               strokeLinecap="round"
    //               strokeWidth="2"
    //               fill="none"
    //               stroke="currentColor"
    //               className="my-1.5 inline-block size-4"
    //             >
    //               <path d="M20 7h-9"></path>
    //               <path d="M14 17H5"></path>
    //               <circle cx="17" cy="17" r="3"></circle>
    //               <circle cx="7" cy="7" r="3"></circle>
    //             </svg>
    //             <span className="is-drawer-close:hidden">Settings</span>
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
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
                <FaHome />
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

            {/* SETTINGS */}
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
