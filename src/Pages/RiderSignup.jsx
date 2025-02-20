import React from 'react';
import { useNavigate } from 'react-router-dom';
import SafetyCommitment from './SafetyCommitment';
import BookingSteps from "./BookingSteps";
import FAQSection from "./FAQSection";
import Gomobile from "./Gomobile";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import img1 from "../assets/img/home2.jpg"

const RiderSignup = () => {
  const [phone, setPhone] = React.useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with full image and dark angled bottom */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <img src={img1} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-indigo-900/30"></div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#1e1a4a]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)' }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-10 md:py-0">
          {/* Left content */}
          <div className="text-white max-w-xl pt-12 md:ml-20 p-4 md:p-10 order-2 md:order-1 mt-10 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our promise towards a safer everyday</h1>
            <p className="text-base md:text-lg text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-md shadow-xl md:mr-16 order-1 md:order-2 mt-16 md:mt-0 mx-4 md:mx-0">
            <form className="space-y-3 mx-2 md:mx-5" onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm" />
              <input type="text" placeholder="Last Name" className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm" />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm" />

              {/* Phone Input */}
              <div className="phone-input-container">
                <PhoneInput
                  country={'gb'}
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{
                    width: '100%',
                    height: '38px',
                    fontSize: '0.875rem',
                    backgroundColor: 'rgb(249 250 251)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    paddingLeft: '48px'
                  }}
                  buttonStyle={{
                    backgroundColor: 'rgb(249 250 251)',
                    border: 'none',
                    borderRadius: '0.5rem 0 0 0.5rem'
                  }}
                  containerStyle={{ width: '100%' }}
                />
              </div>

              <input type="password" placeholder="Password" className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm" />
              <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-sm" />

              {/* Terms and conditions text */}
              <div className="space-y-2 mt-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-blue-500" />
                  <span className="text-xs text-gray-500">
                    By proceeding, I agree to Brand's Terms of Use and acknowledge that I have read the Privacy Policy.
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-blue-500" />
                  <span className="text-xs text-gray-500">
                    I also agree that Brand or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition mt-4 text-sm"
              >
                CONTINUE
              </button>

              <p className="text-center text-gray-600 mt-4 text-xs">
                Already have an account?{' '}
                <a href="#" className="text-blue-500 font-medium">
                  LOGIN
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Additional sections */}
      <SafetyCommitment />
      <BookingSteps />
      <FAQSection />
      <Gomobile />
    </>
  );
};

export default RiderSignup;