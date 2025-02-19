import React from "react";

const BusinessLanding = () => {
  const partners = [
    { name: "Water Power", logo: "💧" },
    { name: "Ecotech", logo: "🌱" },
    { name: "Solar", logo: "☀️" },
    { name: "Energy", logo: "⚡" },
    { name: "Turbine", logo: "🌪️" },
    { name: "GreenPower", logo: "🌿" },
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl text-center">
      {/* Header */}
      <header className="py-12">
        <h1 className="text-4xl font-bold text-indigo-900">
          Lorem Ipsum Partners
        </h1>
      </header>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-gray-400">
              <div className="text-3xl mb-2">{partner.logo}</div>
              <div className="text-sm">{partner.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-12 py-12">
        {/* About Us Section */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <div className="text-indigo-900 text-xl">👥</div>
            <h2 className="text-2xl font-semibold text-indigo-900">About Us</h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Fix My Ride is a company that mediates between travelers and
            providers of passenger transport. Fix My Ride is created to give
            their drivers a fair chance on creating their own customer network.
          </p>
          <button
            className="mt-4 px-6 py-2 border-2 border-indigo-900 text-indigo-900 rounded-full 
            hover:bg-indigo-900 hover:text-white transition-colors"
          >
            LEARN MORE
          </button>
        </div>

        {/* Latest News Section */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <div className="text-indigo-900 text-xl">📰</div>
            <h2 className="text-2xl font-semibold text-indigo-900">
              Latest News
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Fix My Ride is a company that mediates between travelers and
            providers of passenger transport. Fix My Ride is created to give
            their drivers a fair chance on creating their own customer network.
          </p>
          <button
            className="mt-4 px-6 py-2 border-2 border-indigo-900 text-indigo-900 rounded-full 
            hover:bg-indigo-900 hover:text-white transition-colors"
          >
            VIEW BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLanding;
