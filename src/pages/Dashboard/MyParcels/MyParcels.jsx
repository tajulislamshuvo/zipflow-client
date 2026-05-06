import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    isPending,
    data: parcels = [],
    refetch,
  } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      parcelId: parcel._id,
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);

    // window.location.href = res.data.url;
    window.location.assign(res.data.url);
  };

  if (isPending || loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      All my parcels {parcels.length}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-400 font-bold px-2 py-1">
                      Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      // to={`/dashboard/payment/${parcel._id}`}
                      className="bg-[#caeb66] hover:bg-primary/85 cursor-pointer hover:text-black/80 text-xs transition text-black/70 font-bold px-3 py-1 rounded-lg  border border-green-200"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="bg-[#caeb66] hover:bg-primary/85 cursor-pointer hover:text-black/80 text-xs transition text-black/70 font-bold px-3 py-1 rounded-lg">
                    View
                  </button>
                  <button className="bg-[#caeb66] hover:bg-primary/85 cursor-pointer transition text-black/70 text-xs hover:text-black/80  font-bold px-3 py-1 rounded-lg mx-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="bg-[#caeb66] hover:bg-primary/85 cursor-pointer transition text-black/70 text-xs hover:text-black/80  font-bold px-3 py-1 rounded-lg"
                  >
                    Delete
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

export default MyParcels;
