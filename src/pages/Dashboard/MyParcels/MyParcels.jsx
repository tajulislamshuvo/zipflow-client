import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { Link } from "react-router";
const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-base-content/60">{label}</p>

    <p className="font-medium wrap-break-word">{value || "N/A"}</p>
  </div>
);
const MyParcels = () => {
  const modalRef = useRef();
  const [modalParcelData, setModalParcelData] = useState(null);
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
      trackingId: parcel.trackingId,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);

    // window.location.href = res.data.url;
    window.location.assign(res.data.url);
  };
  const openParcelModal = (parcel) => {
    modalRef.current.showModal();
    setModalParcelData(parcel);
  };
  console.log(modalParcelData);

  if (isPending || loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div>
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Payment</th>
                <th>Tracking ID</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <td>{index + 1}</td>
                  <td>{parcel.parcelName}</td>
                  <td>৳ {parcel.cost}</td>

                  <td>
                    {parcel.paymentStatus === "paid" ? (
                      <span className="text-green-600 badge font-bold">
                        Paid
                      </span>
                    ) : (
                      <button
                        onClick={() => handlePayment(parcel)}
                        className="btn btn-sm bg-[#CAEB66] border-none text-black"
                      >
                        Pay
                      </button>
                    )}
                  </td>

                  <td>
                    <Link
                      to={`/parcel-track/${parcel.trackingId}`}
                      className="font-medium hover:text-[#CAEB66]"
                    >
                      {parcel.trackingId}
                    </Link>
                  </td>

                  <td>
                    {parcel.deliveryStatus
                      ?.split("_")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ") || "Unpaid"}
                  </td>

                  <td className="space-x-2">
                    <Link
                      to={`/parcel-track/${parcel.trackingId}`}
                      className="btn btn-xs bg-[#CAEB66] text-black border-none"
                    >
                      Track
                    </Link>

                    <button
                      className="btn btn-xs"
                      onClick={() => openParcelModal(parcel)}
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-xs btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid gap-4 lg:hidden">
          {parcels.map((parcel, index) => (
            <div
              key={parcel._id}
              className="bg-base-100 border border-base-300 rounded-2xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{parcel.parcelName}</h3>

                  <p className="text-sm text-base-content/60">#{index + 1}</p>
                </div>

                <span
                  className={`badge ${
                    parcel.paymentStatus === "paid"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {parcel.paymentStatus == "paid" ? "Paid" : "Unpaid"}
                </span>
              </div>

              <div className="divider my-3"></div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-base-content/60">Cost</span>
                  <span className="font-semibold">৳ {parcel.cost}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-base-content/60">Tracking ID</span>

                  <Link
                    to={`/parcel-track/${parcel.trackingId}`}
                    className="font-medium text-[#CAEB66]"
                  >
                    {parcel.trackingId}
                  </Link>
                </div>

                <div className="flex justify-between">
                  <span className="text-base-content/60">Status</span>

                  <span>
                    {parcel.deliveryStatus
                      ?.split("_")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ") || "Unpaid"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5">
                <Link
                  to={`/parcel-track/${parcel.trackingId}`}
                  className="btn btn-sm bg-[#CAEB66] text-black border-none"
                >
                  Track
                </Link>

                <button
                  className="btn btn-sm"
                  onClick={() => openParcelModal(parcel)}
                >
                  View
                </button>

                <button
                  onClick={() => handleParcelDelete(parcel._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>
              </div>

              {parcel.paymentStatus !== "paid" && (
                <button
                  onClick={() => handlePayment(parcel)}
                  className="btn w-full mt-3 bg-[#CAEB66] text-black border-none"
                >
                  Pay for parcel
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box max-w-4xl p-0">
          {/* Header */}
          <div className="bg-[#CAEB66] p-6">
            <h2 className="text-2xl font-bold text-black">Parcel Details</h2>

            <p className="text-black/70 mt-1">
              Tracking ID: {modalParcelData?.trackingId}
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-lg badge-success">
                {modalParcelData?.paymentStatus}
              </span>

              <span className="badge badge-lg badge-warning">
                {modalParcelData?.deliveryStatus}
              </span>
            </div>

            {/* Parcel Info */}
            <div className="bg-base-200 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4">Parcel Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <Info label="Parcel Name" value={modalParcelData?.parcelName} />
                {/* <p>{modalParcelData?.parcelName}</p> */}

                <Info label="Parcel Type" value={modalParcelData?.parcelType} />

                <Info
                  label="Weight"
                  value={`${modalParcelData?.parcelWeight} KG`}
                />

                <Info label="Cost" value={`৳ ${modalParcelData?.cost}`} />

                <Info
                  label="Created At"
                  value={new Date(modalParcelData?.createdAt).toLocaleString()}
                />
              </div>
            </div>

            {/* Sender & Receiver */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Sender */}
              <div className="bg-base-200 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-4">Sender Information</h3>

                <div className="space-y-3">
                  <Info label="Name" value={modalParcelData?.senderName} />

                  <Info
                    label="Phone"
                    value={modalParcelData?.senderPhoneNumber}
                  />

                  <Info label="Email" value={modalParcelData?.senderEmail} />

                  <Info
                    label="Address"
                    value={`${modalParcelData?.senderAddress}, ${modalParcelData?.senderDistrict}, ${modalParcelData?.senderRegion}`}
                  />
                </div>
              </div>

              {/* Receiver */}
              <div className="bg-base-200 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-4">Receiver Information</h3>

                <div className="space-y-3">
                  <Info label="Name" value={modalParcelData?.recieverName} />

                  <Info
                    label="Phone"
                    value={modalParcelData?.recieverPhoneNumber}
                  />

                  <Info label="Email" value={modalParcelData?.recieverEmail} />

                  <Info
                    label="Address"
                    value={`${modalParcelData?.recieverAddress}, ${modalParcelData?.recieverDistrict}, ${modalParcelData?.recieverRegion}`}
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-base-200 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4">Instructions</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">Pickup Instruction</p>
                  <p className="text-base-content/70">
                    {modalParcelData?.pickupInstruction || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="font-medium">Delivery Instruction</p>
                  <p className="text-base-content/70">
                    {modalParcelData?.deliveryInstruction || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-action mt-4">
              <form method="dialog">
                <button className="btn bg-[#CAEB66] text-black border-none">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyParcels;
