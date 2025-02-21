import React, { useState } from "react";
import BusinessTravel from "./BusinessTravel";
import BusinessClient from "./BusinessClient";
import BusinessPartner from "./BusinessPartner";
import BusinessSupport from "./BusinessSupport";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img1 from "../assets/img/home2.jpg";

const BusinessLanding = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden ">
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
        <div className="relative z-10 min-h-screen container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-8">
          {/* Left content */}
          <div className="text-white max-w-xl pt-8 md:pt-12 px-4 md:px-10 md:ml-0 lg:ml-20 w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Fix My Ride for Business
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">
              Reliable rides for your employees
            </h2>
            <p className="text-base lg:text-lg text-gray-200">
              Simplified management for you. Professional service and dedicated
              support for your business travel needs.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 w-full md:w-1/2 max-w-md shadow-xl mx-auto md:mr-4 lg:mr-16">
            <form className="space-y-3 mx-2 md:mx-5">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              {/* Phone Input with country code and flag */}
              <div className="phone-input-container">
                <PhoneInput
                  country={"gb"}
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{
                    width: "100%",
                    height: "38px",
                    fontSize: "0.875rem",
                    backgroundColor: "rgb(249 250 251)",
                    border: "none",
                    borderRadius: "0.5rem",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    backgroundColor: "rgb(249 250 251)",
                    border: "none",
                    borderRadius: "0.5rem 0 0 0.5rem",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                />
              </div>

              <input
                type="text"
                placeholder="City"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <div className="text-xs text-gray-500 mt-4">
                <p>
                  By proceeding I agree to Fix My Ride's Terms of Use and
                  acknowledge that I have read the Privacy Policy.
                </p>
                <p className="mt-2">
                  I also agree that Fix My Ride or its representatives may
                  contact me by email, phone, or SMS (including by automated
                  means) at the email address or number I provide.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-600 transition mt-4 text-sm"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>

      <BusinessTravel />
      <BusinessClient />
      <BusinessPartner />
      <BusinessSupport />
    </div>
  );
};

export default BusinessLanding;
