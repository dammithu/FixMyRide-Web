import React from "react";
import img1 from "../assets/img/home2.jpg";
import "react-phone-input-2/lib/style.css";
import WhySmartzi from "./WhySmartzi";
import Lorem from "./Lorem";
import SignUpNav from "./SignUpNav";
import Gomobile from "./Gomobile";
import TripBookingForm from "../components/TripBookingForm";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DriverSignup = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with full image and dark angled bottom */}
        <div className="absolute inset-0 z-0">
          {/* Full image background */}
          <div className="absolute inset-0">
            <img
              src={img1}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Purple overlay */}
            <div className="absolute inset-0 bg-indigo-900/30"></div>
          </div>

          {/* Dark angled bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#1e1a4a]"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start pt-8">
            {/* Left content with airport booking banner */}
            <div className="text-white w-full lg:max-w-xl lg:ml-20 p-4 lg:p-10 mb-8 lg:mb-0">
              {/* Airport Booking Banner */}
              <div className="mb-8">
                <div className="text-left">
                  {/* Banner text with proper spacing - line 1 */}
                  <div className="mb-1">
                    <span className="bg-green-500 text-white px-3 py-1 text-xl md:text-2xl lg:text-3xl font-bold inline-block">
                      Plan your airport
                    </span>
                  </div>

                  {/* Banner text with proper spacing - line 2 */}
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 text-xl md:text-2xl lg:text-3xl font-bold inline-block">
                      booking in advance
                    </span>
                  </div>

                  <p className="text-base lg:text-lg font-medium mb-1">
                    Professional, Reliable and Affordable
                  </p>
                  <p className="text-base lg:text-lg font-medium mb-4">
                    Lowest Fixed Fares, No Cancellation Fees
                  </p>

                  {/* Transparent App Store Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <button className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-md hover:bg-white/30 transition duration-300">
                      <FaApple className="text-white mr-2 text-xl" />
                      <div className="text-left">
                        <div className="text-xs opacity-80">
                          Download on the
                        </div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </button>
                    <button className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-md hover:bg-white/30 transition duration-300">
                      <FaGooglePlay className="text-white mr-2 text-xl" />
                      <div className="text-left">
                        <div className="text-xs opacity-80">GET IT ON</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Trip Booking Form */}
            <div className="w-full lg:w-1/2 lg:max-w-md">
              <TripBookingForm />
            </div>
          </div>
        </div>
      </div>
      <WhySmartzi />
      <Lorem />
      <SignUpNav />
      <Gomobile />
    </div>
  );
};

export default DriverSignup;
