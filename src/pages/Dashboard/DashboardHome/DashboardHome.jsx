import React from "react";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import AdminDashboardHome from "./AdminDashboardHome";
import RiderDashboardHome from "./RiderDashboardHome";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
  const { role, isPending } = useRole();
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (role === "admin") {
    return <AdminDashboardHome></AdminDashboardHome>;
  } else if (role === "rider") {
    return <RiderDashboardHome></RiderDashboardHome>;
  } else if (role === "user") {
    return <UserDashboardHome></UserDashboardHome>;
  }
};

export default DashboardHome;
