import React from 'react';

const SafetyCommitmentSection = () => {
  return (
    <div className="bg-[#1A1B3B] py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row relative z-10">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            OUR COMMITMENT TO <br className="hidden md:block" />
            YOUR SAFETY
          </h2>
        </div>
        
        <div className="md:w-2/3 md:pl-12 space-y-12">
          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              EARN MONEY
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              DRIVE ANYTIME
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              NO MONTHLY FEES
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      
      {/* White angled bottom overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
        }}
      ></div>
    </div>
  );
};

export default SafetyCommitmentSection;