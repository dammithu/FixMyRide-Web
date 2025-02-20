import React, { useState } from "react";
import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.jpg";
import car4 from "../assets/img/car4.png";

const LTTripBookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [serviceType, setServiceType] = useState("standard");
  const [showVehicles, setShowVehicles] = useState(false);
  const [viaFields, setViaFields] = useState([]);

  const vehicles = [
    {
      id: 1,
      type: "4 Seater",
      image: car1,
      passengers: 4,
      luggage: 2,
      price: 420.99,
    },
    {
      id: 2,
      type: "6 Seater",
      image: car2,
      passengers: 6,
      luggage: 4,
      price: 620.99,
    },
    {
      id: 3,
      type: "8 Seater",
      image: car3,
      passengers: 8,
      luggage: 8,
      price: 1420.99,
    },
    {
      id: 4,
      type: "Luxury",
      image: car4,
      passengers: 4,
      luggage: 2,
      price: 2220.99,
    },
  ];

  const handleEstimateClick = () => {
    setShowVehicles(true);
  };

  return (
    <div className="flex justify-center items-center p-2 sm:p-4">
      <div className="w-full max-w-md rounded-xl overflow-hidden bg-white">
        {/* Form Fields */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          {/* Pickup and Drop-off */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-4 top-3 bottom-3 w-px bg-black"></div>

            {/* Pickup */}
            <div className="flex items-center bg-[#caf7c5] rounded-full p-2 sm:p-3 mb-4 sm:mb-5">
              <div className="relative w-6 sm:w-8 flex justify-center mr-1 sm:mr-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 border border-black bg-white z-10"></div>
              </div>
              <div className="flex-grow flex items-center flex-wrap sm:flex-nowrap">
                <div className="text-xs sm:text-sm text-indigo-900 font-semibold whitespace-nowrap mr-1 sm:mr-2">
                  PICKUP :
                </div>
                <input
                  className="w-full bg-transparent border-none focus:outline-none placeholder-gray-400 text-xs sm:text-sm rounded-full"
                  placeholder="Enter Pickup Location / Airport"
                />
              </div>
            </div>

            {/* VIA Fields Container */}
            <div id="viaFields">
              {viaFields.map((_, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#caf7c5] rounded-full p-2 sm:p-3 mb-4 sm:mb-5"
                >
                  <div className="relative w-6 sm:w-8 flex justify-center mr-1 sm:mr-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 border border-black bg-white z-10"></div>
                  </div>
                  <div className="flex-grow flex items-center flex-wrap sm:flex-nowrap">
                    <div className="text-xs sm:text-sm text-indigo-900 font-semibold whitespace-nowrap mr-1 sm:mr-2">
                      VIA :
                    </div>
                    <input
                      className="w-full bg-transparent border-none focus:outline-none placeholder-gray-400 text-xs sm:text-sm rounded-full"
                      placeholder="Enter Via Location"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Add Pickup/Drop-off Point Button */}
            <div className="ml-8 sm:ml-10 mb-3 sm:mb-5">
              <button
                className="text-xs sm:text-sm text-gray-500 px-1 py-0.5 text-left"
                onClick={() => setViaFields([...viaFields, ""])}
              >
                Add a pickup / drop-off point
              </button>
            </div>

            {/* Drop-off */}
            <div className="flex items-center bg-[#caf7c5] rounded-full p-2 sm:p-3">
              <div className="relative w-6 sm:w-8 flex justify-center mr-1 sm:mr-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-black bg-white z-10"></div>
              </div>
              <div className="flex-grow flex items-center flex-wrap sm:flex-nowrap">
                <div className="text-xs sm:text-sm text-indigo-900 font-semibold whitespace-nowrap mr-1 sm:mr-2">
                  DROP-OFF :
                </div>
                <input
                  className="w-full bg-transparent border-none focus:outline-none placeholder-gray-400 text-xs sm:text-sm rounded-full"
                  placeholder="Enter Drop-off Location / Airport"
                />
              </div>
            </div>
          </div>

          {/* Service Type Selection */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full w-40 sm:w-48">
              <div className="flex">
                <button
                  className={`flex-1 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full text-center transition-colors ${
                    serviceType === "standard"
                      ? "bg-green-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setServiceType("standard")}
                >
                  Standard
                </button>
                <button
                  className={`flex-1 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full text-center transition-colors ${
                    serviceType === "luxury"
                      ? "bg-indigo-800 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setServiceType("luxury")}
                >
                  Luxury
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              className="w-full bg-[#928eac] text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#008bde] transition-colors"
              onClick={handleEstimateClick}
            >
              ESTIMATE
            </button>
          </div>

          {/* Vehicle Selection Section */}
          <div
            className={`mt-6 sm:mt-8 border rounded-lg overflow-hidden transition-all duration-700 ease-in-out ${
              showVehicles
                ? "opacity-100 translate-y-0 max-h-[2000px]"
                : "opacity-0 -translate-y-8 max-h-0"
            }`}
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border-b last:border-b-0 opacity-0 animate-slideIn"
                style={{
                  animation: showVehicles
                    ? "slideIn 0.8s ease-out forwards"
                    : "none",
                  animationDelay: `${vehicle.id * 200}ms`,
                }}
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-20 h-14 sm:w-30 sm:h-20 object-cover rounded-lg mr-3 sm:mr-4"
                  />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{vehicle.type}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:space-x-4 w-full sm:w-auto">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-1 text-sm">👤</span>
                    <span className="text-sm">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-1 text-sm">🧳</span>
                    <span className="text-sm">{vehicle.luggage}</span>
                  </div>
                  <div className="font-semibold text-sm sm:text-base">
                    £ {vehicle.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`p-3 sm:p-4 transition-all duration-700 ${
                showVehicles
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: "1000ms",
              }}
            >
              <a href="/serviceselection">
                <button className="w-full bg-[#008bde] text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#0077c2] transition-colors">
                  MAKE A BOOKING
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTTripBookingForm;