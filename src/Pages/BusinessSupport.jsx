import React from 'react';

const SupportSection = () => {
  return (
    <div className="bg-[#1d1e4a] w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-2">We're here to help</h2>
        </div>
        
        <div className="md:max-w-md">
          <p className="text-white/90 text-base mb-6">
            Support is just a few taps away. You can also get your questions answered by using our help section.
          </p>
          
          <button className="inline-flex items-center justify-center px-6 py-2 border border-white rounded-full text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-150">
            GET HELP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;