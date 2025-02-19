import React from 'react';
import gomobile from "../assets/img/gomobile.png"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
            GO MOBILE
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Smartzi is the smartest way to move around in your city.
          </p>
          <p className="text-gray-600">
            Get the Smartzi app for iPhone and Android.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
        
        {/* Right Content - Phone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-[600px] bg-white rounded-[40px] shadow-xl border-8 border-gray-800">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl"></div>
            
            {/* App Screen Content */}
            <div className="h-full w-full p-4 rounded-[32px] overflow-hidden relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: {gomobile},
                  filter: 'brightness(0.7)'
                }}
              ></div>
              
              <div className="relative z-10 mt-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span>9:41</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21"/>
                    </svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,22H22V2H2V22Z M4,20V4H20V20H4Z"/>
                    </svg>
                  </div>
                </div>
                
                {/* App Interface */}
                <div className="space-y-4 mt-12">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-center text-xl font-semibold mt-4">
                    Plan your airport booking
                  </h2>
                  <p className="text-center text-sm opacity-80">
                    in advance
                  </p>
                  <div className="space-y-3 mt-8">
                    <div className="bg-white rounded-lg flex items-center p-3">
                      <svg className="w-5 h-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <input 
                        type="text"
                        placeholder="Enter Pickup Location / Airport"
                        className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    <div className="bg-white rounded-lg flex items-center p-3">
                      <svg className="w-5 h-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <input 
                        type="text"
                        placeholder="Enter Drop-off Location / Airport"
                        className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 font-medium">
                      REQUEST A TAXI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;