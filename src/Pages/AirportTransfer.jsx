import React from 'react';
import { Car, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      
      

      {/* Hero Section */}
<section className="relative">
  {/* Angled background */}
  <div 
    className="absolute inset-0 bg-indigo-900 transform -skew-y-6 origin-top-right" 
    style={{ transform: 'skewY(-6deg)' }}
  ></div>
  
  {/* Content */}
  <div className="relative container mx-auto px-4 py-40 min-h-[800px] text-white">
    <h2 className="text-5xl font-bold mb-20">
      WHY
      <br />
      SMARTZI
    </h2>
    <div className="grid grid-cols-3 gap-12">
      {[1, 2, 3].map((item) => (
        <div key={item} className="space-y-8">
          <h3 className="text-xl font-bold">FIXED FARES</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Section */}
      {/* Why Section */}
<section className="relative">
  {/* Angled background */}
  <div 
    className="absolute inset-0 bg-indigo-900 transform -skew-y-6 origin-top-right" 
    style={{ transform: 'skewY(-6deg)' }}
  ></div>
  
  {/* Content */}
  <div className="relative container mx-auto px-4 py-20 text-white">
    <h2 className="text-5xl font-bold mb-12">
      WHY
      <br />
      SMARTZI
    </h2>
    <div className="grid grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="space-y-4">
          <h3 className="text-xl font-bold">FIXED FARES</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Partners Section */}
      <section className="py-20">
        <h2 className="text-center text-2xl font-bold mb-12">Lorem Ipsum Partners</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <img src="/api/placeholder/120/40" alt={`Partner ${item}`} className="opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="text-blue-600 flex items-center">
              LEARN MORE <ChevronRight className="ml-2" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Latest News</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="text-blue-600 flex items-center">
              VIEW MORE <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="bg-indigo-900 py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <button className="text-white flex items-center">
            Sign up to drive <ChevronRight className="ml-2" />
          </button>
          <button className="text-white flex items-center">
            Sign up to ride <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">GO MOBILE</h2>
            <p className="text-gray-600 mb-8">
              Smartzi is the smartest way to move around in your city
              <br />
              Get the Smartzi app for iPhone and Android
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center">
                <img src="/api/placeholder/24/24" alt="App Store" className="mr-2" />
                App Store
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center">
                <img src="/api/placeholder/24/24" alt="Play Store" className="mr-2" />
                Play Store
              </button>
            </div>
          </div>
          <div>
            <img src="/api/placeholder/300/600" alt="Mobile app" className="rounded-3xl" />
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default LandingPage;