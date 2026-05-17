import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedParcel, setSelectedParcel] = useState(null);
  const riderModalRef = useRef();
  const {
    data: parcels = [],
    isPending,
    refetch: parcelRefetch,
  } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels?deliveryStatus=pending-pickup`,
      );
      return res.data;
    },
  });

  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    riderModalRef.current.showModal();
  };

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/rider?status=Approved&district=${selectedParcel?.senderDistrict}&workStatus=Available`,
      );
      return res.data;
    },
  });
  console.log(riders);

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider?.email,
      riderName: rider?.name,
      parcelId: selectedParcel?._id,
    };

    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        console.log(res.data);

        if (res.data.modifiedCount) {
          riderModalRef.current.close();
          parcelRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider has been assigned`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-base-300 shadow-md">
          <table className="table table-zebra">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Created At</th>
                <th>Pickup District</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>

                  <td>{parcel.parcelName}</td>

                  <td>৳ {parcel.cost}</td>

                  <td>{new Date(parcel.createdAt).toLocaleDateString()}</td>

                  <td>{parcel.senderDistrict}</td>

                  <td>
                    <button
                      onClick={() => openAssignRiderModal(parcel)}
                      className="btn btn-primary btn-sm text-black"
                    >
                      Assign Rider
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Card Layout */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {parcels.map((parcel, index) => (
            <div
              key={parcel._id}
              className="bg-base-100 border border-base-300 rounded-2xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-lg">{parcel.parcelName}</h2>

                <span className="badge badge-outline">#{index + 1}</span>
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Cost:</span> ৳ {parcel.cost}
                </p>

                <p>
                  <span className="font-semibold">Created:</span>{" "}
                  {new Date(parcel.createdAt).toLocaleDateString()}
                </p>

                <p>
                  <span className="font-semibold">Pickup District:</span>{" "}
                  {parcel.senderDistrict}
                </p>
              </div>

              <button
                onClick={() => openAssignRiderModal(parcel)}
                className="btn btn-primary btn-sm w-full mt-4 text-black"
              >
                Assign Rider
              </button>
            </div>
          ))}
        </div>{" "}
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={riderModalRef}
      >
        <div className="modal-box max-w-3xl rounded-3xl">
          <h3 className="text-xl font-bold mb-5">Rider avaiable</h3>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="table table-zebra">
              <thead className="bg-base-200">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {riders.map((rider, i) => (
                  <tr key={rider._id}>
                    <th>{i + 1}</th>

                    <td className="font-medium">{rider?.name}</td>

                    <td>{rider?.email}</td>

                    <td>
                      <button
                        onClick={() => handleAssignRider(rider)}
                        className="btn btn-primary btn-sm text-black"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {riders.map((rider, i) => (
              <div
                key={rider._id}
                className="border border-base-300 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg">{rider?.name}</h2>

                  <span className="badge badge-outline">#{i + 1}</span>
                </div>

                <p className="text-sm mt-2 break-all">{rider?.email}</p>

                <button
                  onClick={() => handleAssignRider(rider)}
                  className="btn btn-primary btn-sm w-full mt-4 text-black"
                >
                  Assign
                </button>
              </div>
            ))}
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button className="btn w-full sm:w-auto">Close</button>
            </form>
          </div>
        </div>
      </dialog>{" "}
    </div>
  );
};

export default AssignRiders;
