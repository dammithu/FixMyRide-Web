import React from 'react';

const PurpleSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A1B3B]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="text-white">
            <h2 className="text-4xl font-light mb-2 tracking-wide">
              EXCEPTIONAL TRAVEL
              <br />
              FOR{' '}
              <span className="font-bold">
                BUSINESSES OF
                <br />
                ALL SIZES
              </span>
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed max-w-xl text-sm">
              Competitive fixed fares and flexible invoicing. Easy travel management, view and
              manage users, bookings and invoices in one place. Travel safety and support for your
              employees. Our online service and app are simple, secure and quick to use.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold mb-3 tracking-wide text-sm">FIXED FARES</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor. Posuimus id labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3 tracking-wide text-sm">FIXED FARES</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor. Posuimus id labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3 tracking-wide text-sm">FIXED FARES</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor. Posuimus id labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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