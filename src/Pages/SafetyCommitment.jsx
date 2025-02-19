import React from "react";

const SafetyCommitmentSection = () => {
  return (
    <div className="bg-[#1e1a4a] py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {/* Left column with title */}
        <div className="flex justify-end ">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-right">
            OUR COMMITMENT TO<br />
            YOUR SAFETY
          </h2>
        </div>

        {/* Right column with benefits */}
        <div className="space-y-12 mt-8 md:mt-0">
          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              EARN MONEY
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              DRIVE ANYTIME
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="benefit">
            <h3 className="text-lg uppercase tracking-wide text-white font-medium mb-2">
              NO MONTHLY FEES
            </h3>
            <p className="text-indigo-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyCommitmentSection;