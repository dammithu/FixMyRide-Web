import React from "react";
import img1 from "../assets/img/airport.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
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
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 80%)",
        }}
      />

      {/* Bottom Dark Purple Angled Overlay */}

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Become Our Lorem Ipsum Driver
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          SIGN UP TO DRIVE WITH Fix My Ride
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
