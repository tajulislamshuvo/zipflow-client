import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role = "user", isPending } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      return res.data.role;
    },
  });
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return { role, isPending };
};

export default useRole;
