import React from 'react';
import BusinessTravel from './BusinessTravel';
import BusinessClient from './BusinessClient';
import BusinessPartner from './BusinessPartner';
import BusinessSupport from './BusinessSupport';
import img1 from "../assets/img/home1.jpg";

const BusinessLanding = () => {
  return (
    <>
    <div className="min-h-screen relative overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        {/* Image background */}
        <div className="absolute inset-0">
          <img
            src={img1}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-indigo-900/40"></div>
        </div>
        
        {/* Dark angled bottom overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#1A1B3B]"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 40%)'
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex items-center justify-between">
        {/* Left content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Smartzi for Business
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Reliable rides for your employees.
            <br />
            Simplified management for you.
          </p>
        </div>

        {/* Right content - Form */}
        <div className="w-96 bg-white rounded-lg p-6 shadow-xl">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-xs text-gray-600">
              <p>By proceeding I agree to Smartzi's Terms of Use and acknowledge that I have read the Privacy Policy.</p>
              <p className="mt-2">I also agree that Smartzi or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide.</p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              GET STARTED
            </button>
          </form>
        </div>
      </div>
      
    </div>
    <BusinessTravel/>
    <BusinessClient/>
    <BusinessPartner/>
    <BusinessSupport/>
    </>
  );
};

export default BusinessLanding;