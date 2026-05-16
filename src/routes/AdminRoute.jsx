import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Forbidden from "../components/Forbidden/Forbidden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { isPending, role } = useRole();

  if (loading || isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default AdminRoute;
