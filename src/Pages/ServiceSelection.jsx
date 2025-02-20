import React, { useState } from "react";
import BookingInterface from "../components/BookingInterface";
import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.jpg";
import car4 from "../assets/img/car4.png";

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState(1);
  const [specialNotes, setSpecialNotes] = useState("");

  const services = [
    {
      id: 0,
      name: "4 Seater",
      image: car1,
      maxPassengers: 4,
      maxSuitcases: 2,
      price: "£ 420.09",
    },
    {
      id: 1,
      name: "6 Seater",
      image: car2,
      maxPassengers: 6,
      maxSuitcases: 4,
      price: "£ 620.09",
    },
    {
      id: 2,
      name: "8 Seater",
      image: car3,
      maxPassengers: 8,
      maxSuitcases: 8,
      price: "£ 1,420.09",
    },
    {
      id: 3,
      name: "Luxury",
      image: car4,
      maxPassengers: 4,
      maxSuitcases: 2,
      price: "£ 2,220.09",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected service:", services[selectedService]);
    console.log("Special notes:", specialNotes);
  };

  const CapacityIndicator = ({ passengers, suitcases }) => (
    <div className="inline-flex flex-wrap items-center bg-green-50 rounded-lg py-1 px-2 md:px-3">
      <span className="text-blue-500">👤</span>
      <span className="text-gray-600 text-xs md:text-sm ml-1 md:ml-2 mr-2 md:mr-4">{passengers} Max</span>
      <span className="text-blue-500">💼</span>
      <span className="text-gray-600 text-xs md:text-sm ml-1 md:ml-2">{suitcases} Suitcases</span>
    </div>
  );

  return (
    <div className="max-w-[1920px] mx-auto">
      <BookingInterface />
      <br></br>
      <div className="max-w-4xl mx-auto p-3 md:p-6 bg-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-indigo-900 mb-2 md:mb-0">
            CHOOSE YOUR SERVICE
          </h1>
          <div className="text-left md:text-right">
            <p className="text-xs text-gray-500">TOTAL TRAVELLING DISTANCE</p>
            <p className="text-xl md:text-2xl font-bold">
              209.5<span className="text-sm">KM</span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-gray-50 p-3 md:p-5 rounded-lg mb-6 md:mb-8">
            <div className="mb-4 md:mb-5 text-base md:text-lg font-medium text-gray-800">
              OUTBOUND
            </div>

            {services.map((service) => (
              <div
                key={service.id}
                className={`mb-4 md:mb-5 rounded-lg overflow-hidden ${
                  selectedService === service.id
                    ? "border-2 border-green-500 bg-white"
                    : "bg-white"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center p-3 md:px-5 md:py-4">
                  <div className="flex w-full md:w-auto justify-between items-center mb-3 md:mb-0">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-3 md:mr-5 w-20 md:w-28">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      <div className="flex-grow">
                        <p className="font-medium text-gray-800 text-base md:text-lg">
                          {service.name}
                        </p>
                      </div>
                    </div>

                    <div className="md:hidden flex-shrink-0 ml-2">
                      <div
                        onClick={() => setSelectedService(service.id)}
                        className="flex items-center justify-center w-6 h-6 cursor-pointer"
                      >
                        {selectedService === service.id ? (
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex flex-wrap justify-between items-center md:flex-1">
                    <div className="mb-3 md:mb-0 md:mx-6 order-1 md:order-1">
                      <CapacityIndicator
                        passengers={service.maxPassengers}
                        suitcases={service.maxSuitcases}
                      />
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto md:justify-end order-3 md:order-2">
                      <div className="font-semibold text-base md:text-lg md:mr-5 order-1 md:order-1">
                        {service.price}
                      </div>

                      <div className="hidden md:block order-2">
                        <div
                          onClick={() => setSelectedService(service.id)}
                          className="flex items-center justify-center w-6 h-6 cursor-pointer"
                        >
                          {selectedService === service.id ? (
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path
                                  d="M5 13l4 4L19 7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gray-50 p-3 md:p-5 rounded-lg mb-6 md:mb-8">
              <div className="mb-2 md:mb-3 text-sm font-medium text-gray-700">
                SPECIAL NOTES (IF ANY)
              </div>
              <textarea
                className="w-full p-3 md:p-4 border border-gray-300 rounded-md focus:outline-none resize-none text-gray-700"
                placeholder="Type your Special Notes here"
                rows="3"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <a href="/registerorlogin" className="inline-block">
              <button
                type="button"
                className="px-6 md:px-8 py-2 md:py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 text-base md:text-lg"
              >
                BOOK NOW
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceSelection;