import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: parcels = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["percels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`,
      );
      return res.data;
    },
  });

  const handleStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
    };
    let message = `Parcel status is updated with ${status.split("_").join(" ")}`;

    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleRejectDelivery = (parcel) => {
    const statusInfo = { deliveryStatus: "pending-pickup" };
    axiosSecure
      .patch(`/reject-parcel/${parcel?._id}`, statusInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Parcel rejected successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  if (isPending) {
    <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
              <th>Other action</th>
            </tr>
          </thead>
          <tbody>
            {parcels?.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel?.deliveryStatus === "driver_assigned" ? (
                    <>
                      <button
                        onClick={() =>
                          handleStatusUpdate(parcel, "rider_arriving")
                        }
                        className="btn btn-primary py-0 text-black"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRejectDelivery(parcel)}
                        className="btn btn-warning ml-1 text-black"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-green-600 font-bold text-wider">
                      Accepted
                    </span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_picked_up")
                    }
                    className="btn btn-primary  text-black"
                  >
                    Mark as picked up
                  </button>
                  <button
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="btn btn-primary ml-1 text-black"
                  >
                    Mark as delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
