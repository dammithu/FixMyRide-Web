import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      {/* Success Icon */}
      <div className="w-16 h-16 mb-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Success Text */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Success</h1>

      {/* Message Text */}
      <div className="text-center max-w-md">
        <p className="text-gray-600 mb-2">
          You have successfully created your account with Fix My Ride.
        </p>
        <p className="text-gray-600 mb-8">
          Get relaxed and enjoy your rides with Fix My Ride.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/airport")}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        MAKE A BOOKING
      </button>
    </div>
  );
};

export default SuccessMessage;
