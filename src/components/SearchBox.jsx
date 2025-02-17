import React, { useState } from "react";
import { User, Calendar } from "lucide-react";

const SearchBox = () => {
  const [tripType, setTripType] = useState("one-way");

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      {/* Trip Type Toggle */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            tripType === "one-way"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTripType("one-way")}
        >
          ONE WAY
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            tripType === "round-trip"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTripType("round-trip")}
        >
          ROUND TRIP
        </button>
      </div>

      {/* Location Input Section */}
      <div className="bg-green-50 rounded-lg p-4 mb-6">
        <div className="flex">
          {/* Location Markers */}
          <div className="flex flex-col items-center mr-4">
            {/* Pickup marker */}
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-0.5 h-8 bg-gray-300"></div>

            {/* Additional stop marker */}
            <div className="w-3 h-3 border-2 border-gray-300 rounded-full bg-white"></div>
            <div className="w-0.5 h-8 bg-gray-300"></div>

            {/* Drop-off marker */}
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
          </div>

          {/* Input Fields */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Pickup Input Row */}
            <div className="flex items-center mb-4">
              <label className="text-xs text-gray-500 w-16">PICKUP</label>
              <input
                type="text"
                placeholder="Enter Pickup Location / Airport"
                className="flex-1 bg-transparent border-b border-gray-300 focus:border-green-500 outline-none pb-1"
              />
            </div>

            {/* Add Pickup/Drop-off Point */}
            <div className="flex items-center mb-4">
              <select className="w-full text-sm text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1 focus:outline-none">
                <option>Add a pickup/drop-off point</option>
                <option>Add pickup point</option>
                <option>Add drop-off point</option>
              </select>
            </div>

            {/* Drop-off Input Row */}
            <div className="flex items-center">
              <label className="text-xs text-gray-500 w-16">DROP-OFF</label>
              <input
                type="text"
                placeholder="Enter Drop-off Location / Airport"
                className="flex-1 bg-transparent border-b border-gray-300 focus:border-green-500 outline-none pb-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">OUTBOUND</h3>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-gray-400" />
              <select className="bg-transparent text-gray-600 focus:outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-gray-400" />
              <span className="text-gray-600">None</span>
            </div>
          </div>
        </div>

        <div
          className={`space-y-4 ${
            tripType === "one-way" ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <h3 className="text-sm font-medium text-gray-700">INBOUND</h3>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-gray-400" />
              <select
                className="bg-transparent text-gray-600 focus:outline-none"
                disabled={tripType === "one-way"}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-gray-400" />
              <span className="text-gray-600">None</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Type Toggle */}
      <div className="flex justify-center space-x-2 mb-6">
        <button className="px-4 py-1 text-sm bg-green-500 text-white rounded-full">
          Standard
        </button>
        <button className="px-4 py-1 text-sm text-gray-600 rounded-full border border-gray-300">
          Luxury
        </button>
      </div>

      {/* Estimate Button */}
      <button className="w-full py-3 bg-gray-200 text-gray-600 rounded-lg font-medium">
        ESTIMATE
      </button>
    </div>
  );
};

export default SearchBox;
