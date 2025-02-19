import React from "react";
import img1 from "../assets/img/home2.jpg";
import "react-phone-input-2/lib/style.css";
import WhySmartzi from "./WhySmartzi";
import Lorem from "./Lorem";
import SignUpNav from "./SignUpNav";
import Gomobile from "./Gomobile";
import TripBookingForm from "../components/TripBookingForm";

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
          <div className="flex justify-between items-start pt-8">
            {/* Left content */}
            <div className="text-white max-w-xl ml-20 p-10">
              <h1 className="text-5xl font-bold mb-4">
                Drive with Fix My Ride
              </h1>
              <h2 className="text-3xl font-semibold mb-6">
                Make money on your schedule
              </h2>
              <p className="text-lg text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>

            {/* Right content - Trip Booking Form */}
            <div className="w-1/2 max-w-md">
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
