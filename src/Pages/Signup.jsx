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
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-900 hover:text-gray-900 z-10"
        onClick={() => navigate('/')}
      >        
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
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
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex items-center justify-center py-12 md:pt-20">
          <div className="w-full max-w-lg px-4 md:px-6">
            <div className="flex items-start justify-between gap-4 md:gap-8">
              <div className="flex-1">
                <h2 className="text-[#2D235C] text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  Rider Signup
                </h2>
                <p className="text-gray-900 text-sm md:text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur <br className="hidden sm:block"/>
                  adipiscing elit, sed do eiusmod tempor                
                </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group relative"
                aria-label="Signup"
                onClick={() => handleNavigation('rider')}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 relative z-10"
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
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="relative h-full flex items-center justify-center py-12 md:pt-20">
          <div className="w-full max-w-lg px-4 md:px-6">
            <div className="flex items-start justify-between gap-4 md:gap-8">
              <div className="flex-1">
                <h2 className="text-[#2D235C] text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  Driver Signup
                </h2>
                <p className="text-gray-900 text-sm md:text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur <br className="hidden sm:block"/>
                  adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group relative"
                aria-label="Signup"
                onClick={() => handleNavigation('driver')}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 relative z-10"
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