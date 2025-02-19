import React from "react";
import { MapPin, Car, CreditCard } from "lucide-react";

const RideServiceSteps = () => {
  const steps = [
    {
      number: 1,
      title: "REQUEST",
      icon: <MapPin className="w-12 h-12 text-green-500" />,
      description:
        "Key in your pick-up and drop-off locations to get your estimated fare. Choose a car that fits your style and budget, then set your",
    },
    {
      number: 2,
      title: "RIDE",
      icon: <Car className="w-12 h-12 text-blue-500" />,
      description:
        "Fix My Ride will find you the nearest available driver. Know your driver's location and estimated time of arrival in real-time.",
    },
    {
      number: 3,
      title: "PAY BY CARD OR CASH",
      icon: <CreditCard className="w-12 h-12 text-purple-500" />,
      description:
        "You can pay for the trip by card or cash and rate your driver",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-2xl  text-[#2d2760] mb-2">Book your ride with</h1>
        <h2 className="text-4xl font-bold text-[#2d2760]">3 easy steps</h2>
      </div>
      {/* Steps indicator */}
      <div className="flex justify-between items-center mb-16">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${step.number === 1 ? "bg-green-200" : "bg-gray-200"}`}
              >
                <span className="text-gray-700 font-semibold">
                  {step.number}
                </span>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Steps content */}
      <div className="grid grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-indigo-900 font-bold mb-8">{step.title}</h2>
            <div className="mb-6">{step.icon}</div>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Sign up button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold 
          hover:bg-blue-600 transition-colors"
        >
          SIGN UP TO RIDE WITH Fix My Ride
        </button>
      </div>
    </div>
  );
};

export default RideServiceSteps;
