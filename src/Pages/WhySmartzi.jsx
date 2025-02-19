import React from "react";

const DriverBenefits = () => {
  return (
    <div className="min-h-screen bg-[#1e1a4a] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left side with main heading */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            WHY
            <br />
            Fix My Ride
          </h1>
        </div>

        {/* Right side with fixed fares sections */}
        <div className="w-full md:w-1/2 space-y-12">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold tracking-wide">
              FIXED FARES
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold tracking-wide">
              FIXED FARES
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold tracking-wide">
              FIXED FARES
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverBenefits;
