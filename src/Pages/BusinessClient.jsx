import React from "react";
import home2 from "../assets/img/home2.jpg";
import home1 from "../assets/img/home1.jpg";

const BusinessLanding = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-screen">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src={home2}
            alt="Business woman in car"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-indigo-900/50"></div>
        </div>

        {/* White Angled Section */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/4 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 25%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full">
          {/* Top Content */}
          <div className="flex flex-col items-center justify-center pt-32 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Become Our Business Client
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Set up an account to manage employee access to business payment
              option in Smart21
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              GET STARTED
            </button>
          </div>

          {/* Bottom Content (in white section) */}
          <div className="absolute bottom-0 left-0 w-full pb-1">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-row items-center gap-12">
                <div className="w-1/2">
                  <img
                    src={home1}
                    alt="CEO portrait"
                    className="w-full rounded-lg shadow-lg object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                  <blockquote className="text-2xl font-semibold text-indigo-900 italic">
                    "A game changer. It allows our hotel to align to the needs
                    of today's traveler."
                  </blockquote>
                  <div className="text-gray-700">
                    <p className="font-semibold">Dean Yamashita,</p>
                    <p>CEO @ Park Grand Hotel,</p>
                    <p>London Kensington</p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 w-fit">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLanding;
