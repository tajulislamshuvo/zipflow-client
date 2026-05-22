import React from "react";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isPending } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isPending || loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      {payments.length === 0 ? (
        <>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-100 shadow-xl p-10 text-center">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto rounded-full bg-[#CAEB66]/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-[#9BCB2D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M17 9V7a5 5 0 00-10 0v2M5 9h14l1 10H4L5 9z"
                  />
                </svg>
              </div>

              {/* Text */}
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                No Payment History
              </h2>

              <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                You haven’t made any payments yet. Once a payment is completed,
                your transaction history will appear here.
              </p>

              {/* Optional Button */}
              <Link
                to="/"
                className="mt-6 btn px-6 py-3 rounded-xl bg-[#CAEB66] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-md"
              >
                Back to home
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Parcel name</th>
                <th>Amount</th>

                <th>Paid at</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>{payment?.parcelName}</td>
                  <td>{payment?.amount}</td>
                  <td>
                    {" "}
                    {payment?.paidAt &&
                      new Date(payment.paidAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}{" "}
    </div>
  );
};

export default PaymentHistory;
