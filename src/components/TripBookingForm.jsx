import React, { useState } from "react";
import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.jpg";
import car4 from "../assets/img/car4.png";

const TripBookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [serviceType, setServiceType] = useState("standard");
  const [outboundPassengers, setOutboundPassengers] = useState(1);
  const [outboundLuggage, setOutboundLuggage] = useState("None");
  const [inboundPassengers, setInboundPassengers] = useState(1);
  const [inboundLuggage, setInboundLuggage] = useState("None");
  const [showVehicles, setShowVehicles] = useState(false);
  const [viaFields, setViaFields] = useState([]);

  // Vehicle data with imported images
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
        {/* Trip Type Selection */}
        <div className="flex text-center border-b">
          <button
            className={`flex-1 py-2 sm:py-3 text-xs sm:text-base font-semibold ${
              tripType === "one-way"
                ? "text-black bg-gray-100"
                : "text-gray-500"
            }`}
            onClick={() => setTripType("one-way")}
          >
            ONE WAY
          </button>
          <button
            className={`flex-1 py-2 sm:py-3 text-xs sm:text-base font-semibold ${
              tripType === "round-trip"
                ? "text-black bg-gray-100"
                : "text-gray-500"
            }`}
            onClick={() => setTripType("round-trip")}
          >
            ROUND TRIP
          </button>
        </div>

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
              <div className="flex-grow flex items-center">
                <div className="text-xs sm:text-sm text-indigo-900 font-semibold whitespace-nowrap mr-1 sm:mr-2">
                  PICKUP :
                </div>
                <input
                  className="w-full bg-transparent border-none focus:outline-none placeholder-gray-400 text-xs sm:text-sm rounded-full"
                  placeholder="Enter Pickup Location / Airport"
                />
              </div>
            </div>

            {/* Plus sign */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-black bg-white flex items-center justify-center">
                <span className="text-black font-bold text-[6px] sm:text-[8px] leading-none">
                  +
                </span>
              </div>
            </div>

            {/* Add Pickup/Drop-off Point Button */}
            {tripType === "one-way" && (
              <div className="ml-8 sm:ml-10 mb-3 sm:mb-5">
                <button className="text-xs sm:text-sm text-gray-500 px-1 py-0.5 text-left">
                  Add a pickup / drop-off point
                </button>
              </div>
            )}

            {/* Drop-off */}
            <div className="flex items-center bg-[#caf7c5] rounded-full p-2 sm:p-3">
              <div className="relative w-6 sm:w-8 flex justify-center mr-1 sm:mr-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-black bg-white z-10"></div>
              </div>
              <div className="flex-grow flex items-center">
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

          {/* Outbound and Inbound */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div>
              <h3 className="text-indigo-900 text-sm sm:text-base font-semibold mb-1 sm:mb-2">OUTBOUND</h3>
              <div className="flex space-x-2">
                <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg flex items-center">
                  <span className="text-xs sm:text-sm mr-1">👤</span>
                  <select
                    className="bg-transparent text-xs sm:text-sm"
                    value={outboundPassengers}
                    onChange={(e) =>
                      setOutboundPassengers(Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg flex items-center">
                  <span className="text-xs sm:text-sm mr-1">🧳</span>
                  <select
                    className="bg-transparent text-xs sm:text-sm"
                    value={outboundLuggage}
                    onChange={(e) => setOutboundLuggage(e.target.value)}
                  >
                    <option value="None">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={tripType === "one-way" ? "opacity-50" : ""}>
              <h3 className="text-indigo-900 text-sm sm:text-base font-semibold mb-1 sm:mb-2">INBOUND</h3>
              <div className="flex space-x-2">
                <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg flex items-center">
                  <span className="text-xs sm:text-sm mr-1">👤</span>
                  <select
                    className="bg-transparent text-xs sm:text-sm"
                    value={inboundPassengers}
                    onChange={(e) =>
                      setInboundPassengers(Number(e.target.value))
                    }
                    disabled={tripType === "one-way"}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg flex items-center">
                  <span className="text-xs sm:text-sm mr-1">🧳</span>
                  <select
                    className="bg-transparent text-xs sm:text-sm"
                    value={inboundLuggage}
                    onChange={(e) => setInboundLuggage(e.target.value)}
                    disabled={tripType === "one-way"}
                  >
                    <option value="None">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Service Type Selection */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full w-36 sm:w-48">
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

          {/* Estimate Button */}
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
                    className="w-24 h-16 sm:w-30 sm:h-20 object-cover rounded-lg mr-3 sm:mr-4"
                  />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{vehicle.type}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-4">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-1 text-xs sm:text-sm">👤</span>
                    <span className="text-xs sm:text-sm">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center mx-3 sm:mx-0">
                    <span className="text-blue-500 mr-1 text-xs sm:text-sm">🧳</span>
                    <span className="text-xs sm:text-sm">{vehicle.luggage}</span>
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

export default TripBookingForm;