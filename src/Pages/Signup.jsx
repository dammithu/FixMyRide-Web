import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/img/home1.jpg"
import img2 from "../assets/img/airport.jpg"

const SignupSelection = () => {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    if (type === 'rider') {
      navigate('/rider-signup');
    } else {
      navigate('/driver');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex">
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 text-gray-900 hover:text-gray-900 z-10"
        onClick={() => navigate('/')}
      >        
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Left Section (Rider) */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full max-w-lg px-6">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-[#2D235C] text-3xl font-bold mb-4">
                  Rider Signup
                </h2>
                <p className="text-gray-900 mb-2">
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor                
                </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group relative"
                aria-label="Signup"
                onClick={() => handleNavigation('rider')}
              >
                <svg
                  className="w-6 h-6 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 border-b border-gray-900" />
          </div>
        </div>
      </div>

      {/* Right Section (Driver) */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full max-w-lg px-6">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-[#2D235C] text-3xl font-bold mb-4">
                  Driver Signup
                </h2>
                <p className="text-gray-900 mb-2">
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor
               </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group relative"
                aria-label="Signup"
                onClick={() => handleNavigation('driver')}
              >
                <svg
                  className="w-6 h-6 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 border-b border-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSelection;