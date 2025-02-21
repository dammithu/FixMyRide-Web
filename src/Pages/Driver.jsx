import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/home2.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DriverBenefits from "./DriverBenefits";
import HeroSection from "./HeroSection";
import TestimonialSlider from "./TestimonialSlider";
import DriverRequirements from "./DriverRequirements";
import FAQSection from "./FAQSection";

const DriverSignup = () => {
  const [phone, setPhone] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pending");
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with full image and dark angled bottom */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <img
              src={img1}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/30"></div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#1e1a4a]"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)" }}
          />
        </div>

        {/* Content Container - Made responsive */}
        <div className="relative z-10 min-h-screen container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between py-8 lg:py-0">
          {/* Left content - Made responsive */}
          <div className="text-white max-w-xl pt-4 lg:pt-12 mx-4 lg:ml-20 p-4 lg:p-10 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Drive with Fix My Ride
            </h1>
            <h2 className="text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
              Make money on your schedule
            </h2>
            <p className="text-base lg:text-lg text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>

          {/* Right Form - Made responsive */}
          <div className="bg-white rounded-2xl p-4 lg:p-8 w-full max-w-md shadow-xl mx-4 lg:mr-16">
            <form className="space-y-3 mx-2 lg:mx-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              {/* Phone Input */}
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

              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <div className="space-y-2 mt-4">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300 text-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    By proceeding, I agree to Fix My Ride's Terms of Use and
                    acknowledge that I have read the Privacy Policy.
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300 text-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    I also agree that Fix My Ride or its representatives may
                    contact me by email, phone, or SMS (including by automated
                    means) at the email address or number I provide, including
                    for marketing purposes.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition mt-4 text-sm"
              >
                REGISTER
              </button>

              <p className="text-center text-gray-600 mt-4 text-xs">
                Already have an account?{" "}
                <a href="#" className="text-blue-500 font-medium">
                  LOGIN
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <DriverBenefits />
      <HeroSection />
      <DriverRequirements />
      <TestimonialSlider />
      <FAQSection />
    </div>
  );
};

export default DriverSignup;
