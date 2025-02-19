import React from 'react';

const BusinessPartnersSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-indigo-900 mb-16">Our Happy Business Partners</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-16">
        {/* Water Power logo */}
        <div className="w-24 flex flex-col items-center">
          <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          </svg>
          <span className="text-xs text-gray-600 mt-2">water power</span>
        </div>
        
        {/* Ecotech logo */}
        <div className="w-24 flex flex-col items-center">
          <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
          </svg>
          <span className="text-xs text-gray-600 mt-2">ecotech</span>
        </div>
        
        {/* Solar logo */}
        <div className="w-24 flex flex-col items-center">
          <span className="text-sm font-bold text-gray-700">SOLAR</span>
        </div>
        
        {/* Energy logo */}
        <div className="w-24 flex flex-col items-center">
          <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 3H11V13H13V3Z" />
            <path d="M13 15H11V17H13V15Z" />
          </svg>
          <span className="text-xs text-gray-600 mt-2">Energy</span>
        </div>
        
        {/* Turbine logo */}
        <div className="w-24 flex flex-col items-center">
          <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
          </svg>
          <span className="text-xs text-gray-600 mt-2">TURBINE</span>
        </div>
        
        {/* GreenPower logo */}
        <div className="w-24 flex flex-col items-center">
          <span className="text-sm font-bold text-gray-700">GreenPower</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Opening an account only takes a moment. Simply fill out the registration 
        form and we'll get you up and running in no time.
      </p>
      
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full">
        GET STARTED
      </button>
    </div>
  );
};

export default BusinessPartnersSection;