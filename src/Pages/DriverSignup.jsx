import React from 'react';
// import SafetyCommitment from './SafetyCommitment';
// import BookingSteps from "./BookingSteps";
import FAQSection from "./FAQSection";
// import Gomobile from "./Gomobile"

const AngledBackground = ({ children, imageSrc }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        {/* Image background */}
        <div className="absolute inset-0">
          <img
            src={imageSrc || "/api/placeholder/1200/800"}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-indigo-900/40"></div>
        </div>
        
        {/* Dark angled bottom overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-[#1A1B3B]"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)'
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Complete RiderSignup page with both sections
const DriverSignup = () => {
  return (
    <>
      {/* First section with angled background */}
      <AngledBackground imageSrc="/api/placeholder/1200/800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side content */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Our promise towards a safer everyday
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad.
              </p>
            </div>

            {/* Right side form - Updated to match the provided image */}
            <div className="md:w-5/12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 rounded-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 rounded-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-full bg-gray-100"
                    />
                  </div>
                  
                  {/* Phone number field with country code */}
                  <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-1 pl-3">
                    <div className="flex items-center space-x-1">
                      <img 
                        src="/api/placeholder/20/15" 
                        alt="UK flag" 
                        className="h-4 w-6 object-cover"
                      />
                      <span className="text-gray-700">+44</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="flex-1 p-2 bg-transparent outline-none"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 rounded-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full p-3 rounded-full bg-gray-100"
                    />
                  </div>
                  
                  {/* Terms and conditions checkbox */}
                  <div className="text-xs text-gray-600 mt-2">
                    <p>By proceeding, I agree to Brand's Terms of Use and acknowledge that I have read the Privacy Policy.</p>
                    <p className="mt-1">I also agree that Brand or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
                  >
                    CONTINUE
                  </button>
                </form>
                <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-500 font-bold">
                    LOGIN
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AngledBackground>

      {/* Second section - Safety Commitment */}
      <SafetyCommitment />
      <BookingSteps/>
      <FAQSection/>
      <Gomobile/>
    </>
  );
};

export default DriverSignup;