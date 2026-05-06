import React, { useEffect } from "react";
// import { CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => console.log(res.data));
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white border rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          {/* <CheckCircle className="text-[#caeb66] w-16 h-16" /> */}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Successful 🎉
        </h2>

        {/* Message */}
        <p className="text-gray-500 mt-3">
          Your payment has been completed successfully. You can now continue
          using ZipFlow.
        </p>

        {/* Button */}
        <Link
          to="/dashboard"
          className="mt-6 inline-block bg-[#caeb66] text-black font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
