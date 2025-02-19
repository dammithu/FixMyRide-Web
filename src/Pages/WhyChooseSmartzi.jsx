import React, { useState } from "react";

const WhyChooseSmartzi = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "FIXED FARES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    },
    {
      title: "FAIR FOR DRIVERS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    },
    {
      title: "CHEAP AIRPORT TRANSFER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-4 py-8">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2d2760] mb-12">
          Why You Should Choose
          <br />
          Fix My Ride
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {slides.map((slide, index) => (
            <div key={index} className="text-center px-6">
              <h3 className="text-[#2d2760] font-bold mb-4">{slide.title}</h3>
              <p className="text-[#2d2760]/70 text-sm leading-relaxed">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeSlide === index ? "bg-[#2d2760] w-4" : "bg-[#2d2760]/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSmartzi;
