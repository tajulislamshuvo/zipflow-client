import React from "react";
import ActionCard from "./ActionCard";
import { Link } from "react-router";

const UserDashboardHome = () => {
  return (
    <div>
      <div className="rounded-3xl bg-gradient-to-r from-primary to-lime-300 p-10 text-white">
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

        <p className="mt-4 max-w-2xl text-lg text-black/70">
          Manage your shipments, track deliveries, and send parcels anywhere in
          Bangladesh with ZipFlow.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/send-parcel" className="btn btn-neutral">
            Send Parcel
          </Link>

          <Link
            to="/parcel-track"
            className="btn btn-outline border-white text-gray-800 hover:text-black"
          >
            Track Parcel
          </Link>
        </div>
      </div>
      <div className="grid items-center justify-between md:grid-cols-2 xl:grid-cols-3 mt-7 gap-6">
        <Link to="/send-parcel">
          <ActionCard
            title="Send a Parcel"
            description="Create a new shipment and schedule delivery."
          />
        </Link>

        <Link to="/parcel-track">
          <ActionCard
            title="Track Shipment"
            description="Monitor parcel progress from pickup to delivery."
          />
        </Link>
        <Link to="/dashboard/my-parcels">
          <ActionCard
            title="Delivery History"
            description="Access your previous shipment records."
          />
        </Link>
      </div>
    </div>
  );
};

export default UserDashboardHome;
