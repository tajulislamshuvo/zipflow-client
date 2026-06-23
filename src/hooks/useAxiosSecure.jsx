import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: "https://zip-flow-server.vercel.app",
});
const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // console.log(user);

  useEffect(() => {
    // interceptor request
    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }

        return config;
      },
    );

    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        const statusCode = error.response?.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut().then(() => {
            toast.error("Unauthorized access");
            navigate("/login");
          });
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
