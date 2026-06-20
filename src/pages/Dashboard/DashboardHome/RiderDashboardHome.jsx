import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RiderDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: deliveryData = [], isPending } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders/delivery-per-day?email=${user?.email}`,
      );
      console.log(res.data);

      return res.data;
    },
  });

  const chartData = deliveryData.map((item) => ({
    date: item._id,
    deliveries: item.deliveredCount,
  }));
  console.log(chartData);

  if (isPending || loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome Back{" "}
          <span className="text-green-500">{user?.displayName}</span>👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's your delivery performance overview for this month.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Total Deliveries</h3>
          <p className="text-3xl font-bold text-primary mt-2">124</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">This Month Earnings</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">৳18,500</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Pending Deliveries</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">8</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Success Rate</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">98%</p>
        </div>
      </div>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar fill="#caeb66" dataKey="deliveries" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiderDashboardHome;
