import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  // console.log(parcelId);
  const { data: parcel, isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);

      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      parcelId: parcel._id,
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  console.log("parcel information", parcel);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      {parcelId}
      <h2 className="font-bold text-3xl">{parcel?.parcelName}</h2>
      <h2 className="font-bold text-3xl">{parcel?.cost}</h2>
      <button className="btn btn-outline" onClick={handlePayment}>
        Pay
      </button>
    </div>
  );
};

export default Payment;
