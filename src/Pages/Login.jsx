import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/img/rider login.jpg"
import img2 from "../assets/img/driver login.jpg"

const LoginSelection = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginType, setLoginType] = useState('');
  const navigate = useNavigate();

  const openModal = (type) => {
    setLoginType(type);
    setShowModal(true);
  };

  return (
    <div className="relative min-h-screen w-full flex">
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-10"
        onClick={() => navigate('/')}
      >        <svg
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
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* Centered Content - Moved Down */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full max-w-lg px-6">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-indigo-900 text-2xl font-bold mb-3">
                  Rider Login
                </h2>
                <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor                
                </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group relative"
                aria-label="Login"
                onClick={() => openModal('rider')}
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full transition-transform group-hover:scale-95"></div>
                <svg
                  className="w-6 h-6 text-white relative z-10"
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
            <div className="mt-4 border-b border-gray-300" />
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
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* Centered Content - Moved Down */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full max-w-lg px-6">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-indigo-900 text-2xl font-bold mb-3">
                  Driver Login
                </h2>
                <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor
               </p>
              </div>
              <button 
                className="mt-1 flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group relative"
                aria-label="Login"
                onClick={() => openModal('driver')}
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full transition-transform group-hover:scale-95"></div>
                <svg
                  className="w-6 h-6 text-white relative z-10"
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
            <div className="mt-4 border-b border-gray-300" />
          </div>
        </div>
      </div>

      {/* Login Modal - Updated with styled update password button */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-[400px] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
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

            <div className="text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-8">
                WELCOME BACK TO SMARTZI
              </h2>

              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="text-center">
                  <a href="#" className="text-blue-500 text-sm">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#9c93b4] text-white rounded-full hover:bg-[#8d85a5] transition-colors text-sm font-medium"
                >
                  UPDATE PASSWORD
                </button>
                <div className="text-sm text-gray-600">
                  Don't have an account yet?{' '}
                  <a href="#" className="text-blue-500 font-medium">
                    REGISTER NOW
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSelection;