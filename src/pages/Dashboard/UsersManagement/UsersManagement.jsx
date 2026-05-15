import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { loading } = useAuth();
  const {
    data: users = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user?._id}`, roleInfo).then((res) => {
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
  };

  const handleMakeUser = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user?._id}`, roleInfo).then((res) => {
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
  };

  if (isPending || loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
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
