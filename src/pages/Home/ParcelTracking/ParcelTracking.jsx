import React, { useState } from "react";
import { FaSearch, FaBoxOpen } from "react-icons/fa";
import { useNavigate } from "react-router";

const ParcelTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!trackingId.trim()) return;

    navigate(`/parcel-track/${trackingId}`);
  };
  return (
    <div>
      {" "}
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="bg-base-100 border border-base-300 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#CAEB66]/20 text-[#CAEB66] px-4 py-2 rounded-full w-fit mb-6">
                  <FaBoxOpen />
                  <span className="font-medium">
                    Real-Time Shipment Tracking
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Track Your Parcel
                </h1>

                <p className="mt-5 text-base-content/70 text-lg">
                  Enter your tracking ID to get the latest shipment updates,
                  delivery progress, and parcel location instantly.
                </p>

                <form
                  onSubmit={handleSearch}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter Tracking ID"
                    className="input input-bordered w-full h-14 rounded-xl"
                  />

                  <button
                    type="submit"
                    className="btn h-14 px-8 bg-[#CAEB66] hover:bg-[#b7da4f] border-none text-black rounded-xl"
                  >
                    <FaSearch />
                    Track
                  </button>
                </form>

                <div className="mt-6 text-sm text-base-content/50">
                  Example: ZF-2026-001245
                </div>
              </div>

              {/* Right Content */}
              <div className="bg-[#CAEB66] flex items-center justify-center p-10">
                <div className="text-center">
                  <FaBoxOpen className="text-8xl text-black mx-auto mb-6" />

                  <h2 className="text-3xl font-bold text-black">
                    Fast & Reliable
                  </h2>

                  <p className="text-black/80 mt-3 max-w-sm">
                    Stay updated with every movement of your shipment from
                    pickup to delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <div className="bg-base-100 border border-base-300 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Real-Time Updates</h3>
              <p className="text-base-content/60 mt-2">
                Track shipment activity as it happens.
              </p>
            </div>

            <div className="bg-base-100 border border-base-300 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Delivery Progress</h3>
              <p className="text-base-content/60 mt-2">
                View every stage from pickup to delivery.
              </p>
            </div>

            <div className="bg-base-100 border border-base-300 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Secure Tracking</h3>
              <p className="text-base-content/60 mt-2">
                Access shipment information safely anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelTracking;
