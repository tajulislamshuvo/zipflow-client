import { Link, useRouteError } from "react-router";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-[#CAEB66]/20 flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-5xl text-[#CAEB66]" />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-black text-[#CAEB66]">404</h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-base-content/70 max-w-lg mx-auto">
          The page you're looking for doesn't exist, has been moved, or the URL
          may be incorrect.
        </p>

        {/* Error Message */}
        {error?.statusText || error?.message ? (
          <div className="mt-6 bg-base-100 border border-base-300 rounded-xl p-4">
            <p className="text-sm text-error">
              {error?.statusText || error?.message}
            </p>
          </div>
        ) : null}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/"
            className="btn bg-[#CAEB66] hover:bg-[#b9da5a] text-black border-none"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

        {/* Brand */}
        <p className="mt-10 text-sm text-base-content/50">
          ZipFlow Courier Service
        </p>
      </div>
    </div>
  );
};

export default ErrorElement;
