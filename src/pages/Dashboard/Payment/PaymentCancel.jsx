import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-100px)] bg-white flex items-center justify-center px-4">
        <div
          className="max-w-md w-full text-center
        border border-gray-200 rounded-2xl p-8 shadow-sm bg-white
        "
        >
          {/* Cancel Icon */}
          <div
            className="mb-10 flex justify-center
          
          "
          >
            <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-7xl">🙁</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>

          <p className="text-gray-600 text-xl mb-12 leading-relaxed">
            No payment was made.
            <br />
            Your account has not been charged.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              to="/dashboard/my-parcels"
              className="w-full bg-[#caeb66] hover:bg-[#b5d94f] text-gray-900 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200 active:scale-95"
            >
              Try Again
            </Link>

            <Link
              to="/"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PaymentCancel;
