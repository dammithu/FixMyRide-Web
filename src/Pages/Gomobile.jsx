import React from "react";
import mobile from "../assets/img/mobile.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
            GO MOBILE
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Fix My Ride is the smartest way to move around in your city.
          </p>
          <p className="text-gray-600">
            Get the Fix My Ride app for iPhone and Android.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </button>
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={mobile}
            alt="Mobile app interface"
            className="w-90 rounded-3xl shadow-xl object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
