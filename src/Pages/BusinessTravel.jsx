import React from "react";

const PurpleSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#1e1a4a] py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {/* Left Column */}
          <div className="text-white md:w-1/2 text-right">
  <div className="inline-block w-full">
    <h2 className="text-5xl font-light mb-2 tracking-wide leading-tight">
      EXCEPTIONAL TRAVEL FOR{" "}
      <span className="font-bold text-white">
        BUSINESSES OF
        <br />
        <span className="text-white">ALL SIZES</span>
      </span>
    </h2>
  </div>
  
  <p className="text-gray-300 mt-4 leading-relaxed w-full text-base text-right">
    Competitive fixed fares and flexible
    <br />
    invoicing. Easy travel management: view and
    <br />
    manage users, bookings, and invoices in one
    <br />
    place. Travel safety and support for your
    <br />
    employees. Our online service and app are
    <br />
    simple, secure, and quick to use.
  </p>
</div>


          {/* Right Column */}
          <div className="space-y-16 md:w-1/2">
            <div>
              <h3 className="text-white font-bold mb-4 tracking-wide text-base uppercase">
                FIXED FARES
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
                FIXED FARES
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
                FIXED FARES
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

export default PurpleSection;
