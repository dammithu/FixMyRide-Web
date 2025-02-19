import React, { useState } from "react";
import img1 from "../assets/img/home2.jpg";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Dean Yamashita",
      experience: "6 years experience with Fix My Ride",
      quote:
        "A game changer. It allows our hotel to align to the needs of today's traveler.",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Sarah Johnson",
      experience: "4 years experience with Fix My Ride",
      quote: "The perfect platform for modern transportation needs.",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Michael Chen",
      experience: "5 years experience with Fix My Ride",
      quote: "Changed the way I think about ride-sharing services.",
      image: "/api/placeholder/400/400",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-indigo-950 mb-16">
        Driver's success stories
      </h2>

      {/* Testimonial Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src={img1}
            alt="Driver portrait"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Quote and Details */}
        <div className="space-y-6">
          <blockquote className="text-3xl font-semibold text-indigo-950 italic">
            "{testimonials[currentSlide].quote}"
          </blockquote>

          <div className="space-y-2">
            <p className="font-medium text-gray-900">
              {testimonials[currentSlide].name}
            </p>
            <p className="text-gray-600">
              {testimonials[currentSlide].experience}
            </p>
          </div>

          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Navigation Dots - Exactly 3 dots */}
      <div className="flex justify-center gap-3 mt-12">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
