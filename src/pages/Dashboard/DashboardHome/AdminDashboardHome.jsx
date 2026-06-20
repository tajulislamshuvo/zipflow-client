import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryStatus = [], isPending } = useQuery({
    queryKey: ["delivery-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });
  const getPieChartData = (data) => {
    return data.map((item) => ({ name: item.status, value: item.count }));
  };
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-base-content">
            Admin Dashboard
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliveryStatus.map((stat) => (
            <div
              key={stat._id}
              className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 capitalize">
                      {stat?._id === null
                        ? "In Delivery"
                        : stat?._id.split("_").join(" ")}
                    </h3>

                    <p className="text-3xl font-bold mt-2">{stat?.count}</p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-xs text-gray-500">
                    Total parcels in this status
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold">
                Parcel Distribution Overview
              </h3>
              <p className="text-sm text-gray-500">
                Visual breakdown of all parcel statuses.
              </p>
            </div>

            {/* Chart */}
            <div className="w-full h-[360px] sm:h-[400px] lg:h-[470px] flex justify-center">
              <PieChart width={500} height={350}>
                <Pie
                  data={getPieChartData(deliveryStatus)}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fill="#caeb66"
                  outerRadius={120}
                  label
                  isAnimationActive
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconSize={12}
                  wrapperStyle={{
                    fontSize: "12px",
                    paddingTop: "10px",
                    width: "100%",
                  }}
                  formatter={(value) => (
                    <span className="text-black/80 font-medium text-xs sm:text-sm">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default AdminDashboardHome;
