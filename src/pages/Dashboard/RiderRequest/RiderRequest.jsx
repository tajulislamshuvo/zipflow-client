import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const RiderRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: riders = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/rider");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/rider/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider request is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (rider, status) => {
    updateRiderStatus(rider, status);
  };
  const handleRejection = (rider, status) => {
    updateRiderStatus(rider, status);
  };

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {riders.map((rider, index) => (
          <div
            key={rider._id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold text-lg text-gray-800">
                  {rider.name}
                </h2>

                <p className="text-sm text-gray-500">{rider.email}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  rider.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : rider.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {rider.status}
              </span>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Rider No</span>
                <span className="font-medium">#{index + 1}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">District</span>
                <span className="font-medium">{rider.district}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => handleApproval(rider, "Approved")}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-medium transition "
              >
                Approve
              </button>

              <button
                onClick={() => handleRejection(rider, "Rejected")}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium transition"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="table">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id} className="hover:bg-gray-50">
                <th>{index + 1}</th>

                <td className="font-semibold">{rider.name}</td>

                <td>{rider.email}</td>

                <td>{rider.district}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      rider.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : rider.status === "Rejected"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {rider.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApproval(rider, "Approved")}
                      className="bg-green-50 hover:bg-green-100 border border-green-200 p-2 rounded-lg tooltip"
                      data-tip="Approve"
                    >
                      <FaCheck className="text-green-600" />
                    </button>

                    <button
                      onClick={() => handleRejection(rider, "Rejected")}
                      className="bg-red-50 hover:bg-red-100 border border-red-200 p-2 rounded-lg tooltip"
                      data-tip="Reject"
                    >
                      <ImCross size={12} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default RiderRequest;
