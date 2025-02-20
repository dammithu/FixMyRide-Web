import React from "react";

const BookingSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center max-w-md">
        {/* Success Circle Icon */}
        <div className="mx-auto w-16 h-16 mb-6 relative">
          <div className="absolute inset-0 rounded-full border-2 border-blue-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-teal-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12L10 17L19 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">Success</h1>
        <p className="text-indigo-900 mb-1 text-center font-bold">
          Your booking has been recorded successfully.
        </p>

        {/* Booking Reference */}
        <div className="mb-6">
          <span className="text-indigo-900 mb-1 font-bold">Booking </span>
          <span className="text-blue-600 font-medium">#17345DF56</span>
        </div>

        {/* View Summary Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors">
          VIEW BOOKING SUMMARY
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;