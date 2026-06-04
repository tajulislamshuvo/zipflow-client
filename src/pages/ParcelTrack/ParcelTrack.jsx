import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaCheckCircle, FaTruck } from "react-icons/fa";
// import { FaBox, FaWarehouse, FaTruck, FaCheckCircle } from "react-icons";

const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();
  const { data: trackings = [], isPending } = useQuery({
    queryKey: [trackingId, "tracking"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Parcel Tracking</h2>
            <p className="text-base-content/60 mt-1">
              Tracking ID:{" "}
              <span className="font-semibold text-[#CAEB66]">{trackingId}</span>
            </p>
          </div>

          <div className="badge badge-lg bg-[#CAEB66] text-black border-none">
            {trackings[trackings.length - 1]?.status.split("_").join(" ") ||
              "Processing"}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-6">Shipment History</h3>
        {trackings.length < 1 ? (
          <>
            <div className="flex flex-col items-center justify-center py-20">
              <FaBox className="text-6xl text-base-300 mb-4" />

              <h3 className="text-xl font-bold">
                No Tracking Information Found
              </h3>

              <p className="text-base-content/60 mt-2">
                We couldn't find any updates for this tracking ID.
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            {trackings.map((tracking, index) => (
              <div key={tracking._id} className="flex gap-4">
                {/* Icon & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#CAEB66] flex items-center justify-center text-black">
                    {index === trackings.length - 1 ? (
                      <FaCheckCircle />
                    ) : (
                      <FaTruck />
                    )}
                  </div>

                  {index !== trackings.length - 1 && (
                    <div className="w-0.5 flex-1 bg-base-300 min-h-12"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-base-200 rounded-xl p-4">
                    <h4 className="font-semibold text-lg">{tracking.status}</h4>

                    <p className="text-base-content/70 mt-1">
                      {tracking.details}
                    </p>

                    <p className="text-sm text-base-content/50 mt-3">
                      {new Date(tracking.createdAt).toLocaleString("en-BD", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParcelTrack;
