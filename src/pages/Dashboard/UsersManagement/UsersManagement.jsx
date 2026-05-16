import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const { loading } = useAuth();
  const {
    data: users = [],

    refetch,
  } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchUser=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/${user?._id}/role`, roleInfo)
            .then((res) => {
              if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user?.displayName} marked as admin`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleMakeUser = (user) => {
    const roleInfo = { role: "user" };
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make user",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/${user?._id}/role`, roleInfo)
            .then((res) => {
              if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user?.displayName} marked as user`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
        }
      })
      .catch((err) => toast.error(err.message));
  };
  const handleMakeRider = (user) => {
    const roleInfo = { role: "rider" };
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make rider",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user?._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user?.displayName} marked as rider`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <form action="" className="flex items-center justify-start gap-1.5 mb-4">
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input w-50 h-8 rounded-2xl "
          placeholder="Search user"
        />
      </form>
      <hr className="text-gray-300 my-6" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <div className="flex flex-wrap gap-2">
                    {/* User Button */}
                    <button
                      onClick={() => handleMakeUser(user)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                        user?.role === "user"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } cursor-pointer`}
                    >
                      User
                    </button>

                    {/* Rider Button */}
                    <button
                      onClick={() => handleMakeRider(user)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                        user?.role === "rider"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      } cursor-pointer`}
                    >
                      Rider
                    </button>

                    {/* Admin Button */}
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                        user?.role === "admin"
                          ? "bg-green-600 text-white"
                          : "bg-green-50 text-green-700 hover:bg-green-100"
                      } cursor-pointer`}
                    >
                      Admin
                    </button>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
