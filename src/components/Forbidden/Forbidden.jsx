import { ShieldX, ArrowLeft, Home } from "lucide-react";

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Large Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "#CAEB66" }}
            >
              <ShieldX size={64} className="text-zinc-950" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              403
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-7xl font-bold text-black/80 mb-2 tracking-tighter">
          FORBIDDEN
        </h1>

        <p className="text-2xl font-semibold text-[#CAEB66] mb-4">
          Access Denied
        </p>

        {/* Message */}
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Sorry, you don't have permission to access this page. Please contact
          your administrator if you believe this is a mistake.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-2xl text-white font-medium"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 px-8 py-4 text-zinc-950 font-semibold rounded-2xl transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#CAEB66" }}
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>

        {/* Footer */}
        <p className="text-zinc-500 text-sm mt-12">
          Zipflow © {new Date().getFullYear()} • All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Forbidden;
