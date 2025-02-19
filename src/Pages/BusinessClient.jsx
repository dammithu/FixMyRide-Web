import React from 'react';
import img1 from "../assets/img/airport.jpg";
import img2 from "../assets/img/home2.jpg"

const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Driver in car" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Dark Purple Angled Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-1/3 bg-indigo-950"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 80%)'
          }}
        />

        {/* Bottom White Angled Overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-white"
          style={{
            clipPath: 'polygon(100% 20%, 0 100%, 100% 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Become Our Business Client
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
           Set up an account to manage employee access to business payment option in FixMyRide
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
           GET STARTED
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2">
              <img 
                src={img2}
                alt="CEO Portrait" 
                className="w-full max-w-md rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Right side - Quote */}
            <div className="w-full md:w-1/2">
              <blockquote className="text-3xl font-semibold text-indigo-950 mb-6 leading-tight">
                "A game changer. It allows our hotel to align to the needs of today's traveler."
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">Dean Yamashita</p>
                <p>CEO @ Park Grand Hotel,</p>
                <p>London Kensington</p>
              </div>
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;