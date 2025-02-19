import React from "react";
import { Square, Circle } from "lucide-react";
import img1 from "../assets/img/home1.jpg";

const FareEstimate = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Luxury Car */}
      <div className="absolute inset-0">
        <img
          src={img1}
          alt="Luxury car with driver"
          className="w-full h-full object-cover"
        />
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-indigo-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-white text-5xl font-bold mb-6">
            Estimate Your Fare
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Fix My Ride is set up to be the cheapest every day option - no
            matter if you pre-book or order on demand. Check our pricing
            calculator but keep in mind we let our drivers set their own rates -
            so you should pay even less. Your price will be fixed and set before
            you ride - no surprises and no surge pricing.
          </p>
        </div>

        {/* Fare Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pickup Input */}
              <div className="bg-green-50 rounded-lg flex items-center px-4 py-3">
                <Square
                  size={20}
                  className="text-green-600 mr-3"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  placeholder="Enter Pickup Location / Airport"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Drop-off Input */}
              <div className="bg-green-50 rounded-lg flex items-center px-4 py-3">
                <Circle
                  size={20}
                  className="text-green-600 mr-3"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  placeholder="Enter Drop-off Location / Airport"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Estimate Button */}
          <div className="flex justify-center -mt-5">
            <button className="bg-[#0099ff] hover:bg-blue-500 text-white px-16 py-3 rounded-full text-sm font-semibold transition-colors">
              ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareEstimate;
