import React from "react";
import { useNavigate } from "react-router-dom";

const PendingApproval = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center max-w-md -mt-16">
        <div className="inline-block mb-6">
          <div className="relative h-20 w-20 mx-auto">
            <div className="absolute inset-0 border-2 border-blue-600 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-yellow-500 mb-2">
          Pending Approval
        </h1>
        <p className="text-gray-800 mb-1">Thank you for your request</p>
        <p className="text-gray-800 mb-8">You will receive an e-mail soon</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full transition duration-200 text-sm uppercase"
        >
          HOME
        </button>
      </div>
    </div>
  );
};

export default PendingApproval;
