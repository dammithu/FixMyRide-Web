import React from "react";
import img1 from "../assets/img/home1.jpg";
import img2 from "../assets/img/home2.jpg";
import { MapPin, Car, DollarSign } from "lucide-react";
import BookingSteps from "./BookingSteps";
import FareEstimate from "./FareEstimate";
import WhyChooseSmartzi from "./WhyChooseSmartzi";
import Lorem from "./Lorem";
import SignUpNav from "./SignUpNav";
import Gomobile from "./Gomobile";

const LandingPage = () => {
  return (
    <div>
      <div className="h-[calc(100vh-20px)] overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="relative w-full md:w-1/2 h-full group overflow-hidden">
          <div className="absolute inset-0 bg-black/40">
            <img
              src={img1}
              alt="Airport transfer service"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-12 pb-48">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Fix My Ride Airport Transfers
            </h2>
            <p className="text-lg text-gray-200 max-w-md mb-8">
              Easy bookings. Worry-free airport transfers. Flat rates, and meet
              and greet with a smile included.
            </p>
            <button className="bg-[#008bde] hover:bg-[#0077c2] text-white font-medium py-3 px-8 rounded-full w-fit transition-colors duration-300 uppercase text-sm tracking-wider">
              Make a Booking
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative w-full md:w-1/2 h-full group overflow-hidden">
          <div className="absolute inset-0 bg-black/40">
            <img
              src={img2}
              alt="Drive with Fix My Ride"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-12 pb-48">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Drive with Fix My Ride
            </h2>
            <p className="text-lg text-gray-200 max-w-md mb-8">
              Fit driving around what matters most. Drive at any time and on any
              day of the week.
            </p>
            <button className="bg-[#008bde] hover:bg-[#0077c2] text-white font-medium py-3 px-8 rounded-full w-fit transition-colors duration-300 uppercase text-sm tracking-wider">
              Sign Up to Drive
            </button>
          </div>
        </div>
      </div>
      <BookingSteps />
      <FareEstimate />
      <WhyChooseSmartzi />
      <Lorem />
      <SignUpNav />
      <Gomobile />
    </div>
  );
};

export default LandingPage;
