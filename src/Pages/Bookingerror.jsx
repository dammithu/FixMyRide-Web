import React from "react";

const BookingErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6">
        {/* Error Icon Circle */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-indigo-900 font-bold">
            Booking Error
          </h1>
          <p className="text-sm text-indigo-900">
            Something went wrong
            <br />
            Keep calm and try again
          </p>
        </div>

        {/* Try Again Button */}
        <button className="bg-blue-500 text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
          Try again
        </button>
      </div>
    </div>
  );
};

export default BookingErrorPage;