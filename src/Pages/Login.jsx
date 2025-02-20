import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/home1.jpg";
import img2 from "../assets/img/airport.jpg";

const LoginSelection = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginType, setLoginType] = useState("");
  const navigate = useNavigate();

  const openModal = (type) => {
    setLoginType(type);
    setShowModal(true);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">
      {/* Close button */}
      <button
        className="fixed top-4 right-4 z-20 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-colors"
        onClick={() => navigate("/")}
        aria-label="Return to homepage"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Left Section (Rider) */}
      <div className="flex-1 relative h-[50vh] md:h-screen">
        <div className="absolute inset-0">
          <img
            src={img1}
            alt="Rider background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Centered Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-[#2D235C] text-2xl md:text-3xl font-bold mb-3">
                  Rider Login
                </h2>
                <p className="text-gray-900 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <button
                className="mx-auto md:mx-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                aria-label="Open rider login form"
                onClick={() => openModal("rider")}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 border-b border-gray-900" />
          </div>
        </div>
      </div>

      {/* Right Section (Driver) */}
      <div className="flex-1 relative h-[50vh] md:h-screen">
        <div className="absolute inset-0">
          <img
            src={img2}
            alt="Driver background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Centered Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-[#2D235C] text-2xl md:text-3xl font-bold mb-3">
                  Driver Login
                </h2>
                <p className="text-gray-900 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <button
                className="mx-auto md:mx-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                aria-label="Open driver login form"
                onClick={() => openModal("driver")}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 border-b border-gray-900" />
          </div>
        </div>
      </div>

      {/* Login Modal - Fully Responsive */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black bg-opacity-60">
          <div 
            className="bg-white rounded-xl shadow-xl w-full max-w-[90%] sm:max-w-sm md:max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative pt-6 px-4 sm:px-6">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-4 sm:px-6 pb-6 pt-2">
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-2">
                  WELCOME BACK TO Fix My Ride
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  {loginType === "rider" ? "Rider" : "Driver"} Account
                </p>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-3 text-sm rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 text-sm rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-500 text-xs sm:text-sm hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#9c93b4] text-white rounded-full hover:bg-[#8d85a5] transition-colors text-sm font-medium"
                  >
                    UPDATE PASSWORD
                  </button>
                  <div className="text-xs sm:text-sm text-gray-600 pt-2">
                    Don't have an account yet?{" "}
                    <a href="#" className="text-blue-500 font-medium hover:underline">
                      REGISTER NOW
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSelection;