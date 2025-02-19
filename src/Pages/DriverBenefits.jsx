import React from 'react';

const DriverBenefits = () => {
  return (
    <div className="min-h-screen w-full bg-[#1e1a4a] py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {/* Left Column */}
          <div className="text-white md:w-1/2 text-right">
            <div className="inline-block w-full">
              <h2 className="text-5xl font-light mb-2 tracking-wide leading-tight">
                DRIVE
                <br />
                WHEN YOU WANT
              </h2>
              
              <h2 className="text-5xl font-light mb-2 tracking-wide leading-tight mt-8">
                MAKE AS MUCH MONEY
                <br />
                AS YOU NEED
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16 md:w-1/2">
            <div>
              <h3 className="text-white font-bold mb-4 tracking-wide text-base uppercase">
                EARN MONEY
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                <br />
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 tracking-wide text-base uppercase">
                DRIVE ANYTIME
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                <br />
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 tracking-wide text-base uppercase">
                NO MONTHLY FEES
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                <br />
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverBenefits;