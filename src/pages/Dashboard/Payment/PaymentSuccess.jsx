import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transectionId: res.data.transectionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-black/80 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-7xl text-[#caeb66]" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Payment Successful!
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Thank you for choosing{" "}
          <span className="font-semibold text-gray-900">Zipflow</span>.<br />
          Your payment has been processed successfully.
        </p>

        {/* Details Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10 text-left">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Transaction ID</p>
              <p className="font-mono font-medium text-gray-900">
                {paymentInfo?.transectionId}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tracking Id</p>
              <p className="font-semibold text-xl text-gray-900">
                {paymentInfo?.trackingId}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-gray-900">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/dashboard/my-parcels"
          className="w-full bg-[#caeb66] hover:bg-[#b5d94f] text-gray-900 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200 active:scale-95"
        >
          Go to Dashboard
        </Link>

        <p className="text-gray-500 text-sm mt-6">
          You will receive a confirmation email shortly.
        </p>
      </div>{" "}
    </div>
  );
};

export default PaymentSuccess;
