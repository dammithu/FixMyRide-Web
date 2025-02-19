import React from "react";

const DriverRequirements = () => {
  const requirements = [
    {
      icon: "18+",
      title: "Age",
      description:
        "You have to be over 18 years of age with a valid driver's license to drive with Fix My Ride.",
    },
    {
      icon: "📱",
      title: "Smartphone",
      description:
        "You will need an iOS or Android device to receive bookings on our app.",
    },
    {
      icon: "🚗",
      title: "Car",
      description:
        "Depending on the city you want to work in, your car must meet some requirements.",
    },
    {
      icon: "🔍",
      title: "Screening",
      description:
        "The screening process may include drug tests, police reports, credit checks etc.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-indigo-800 py-20">
      Angled Overlay
      <div className="absolute inset-0 bg-white " style={{}} />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-950 mb-16">
          Requirements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                {req.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-indigo-950 mb-2">
                  {req.title}
                </h3>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverRequirements;
