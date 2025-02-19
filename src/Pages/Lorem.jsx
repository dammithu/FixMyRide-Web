import React, { useEffect } from "react";
import { Users, Newspaper } from "lucide-react";

const LandingPage = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
          entry.target.classList.remove("translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-6xl min-h-screen">
      {/* Header with fade-in animation */}
      <header className="text-center py-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-4xl font-bold text-indigo-900">
          Lorem Ipsum Partners
        </h1>
      </header>

      {/* Partner Logos Section with staggered fade-in */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center py-12 mt-10">
        {[
          { icon: "💧", text: "water power" },
          { icon: "🌱", text: "ecotech" },
          { icon: "☀️", text: "SOLAR" },
          { icon: "⚡", text: "Energy" },
          { icon: "🌪️", text: "TURBINE" },
          { icon: "🌿", text: "GreenPower" },
        ].map((partner, index) => (
          <div
            key={index}
            className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <span className="text-2xl">{partner.icon}</span>
              <span className="text-sm">{partner.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Info Sections with slide-in animations */}
      <div className="grid md:grid-cols-2 gap-12 py-16 mt-17">
        {/* About Us Section */}
        <div className="space-y-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <Users className="w-6 h-6 text-indigo-900" />

          <div className="flex items-center space-x-3 text-indigo-900">
            <h2 className="text-xl font-semibold">About Us</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Fix My Ride is a company that mediates between travelers and
            providers of passenger transport. Fix My Ride is created to give
            their drivers a fair chance on creating their own customer...
            network.
          </p>
          <button
            className="px-6 py-2 border border-indigo-900 text-indigo-900 rounded-full 
            hover:bg-indigo-900 hover:text-white transition-all duration-300 
            hover:scale-105 active:scale-95"
          >
            LEARN MORE
          </button>
        </div>

        {/* Latest News Section */}
        <div className="space-y-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <Newspaper className="w-6 h-6 text-indigo-900" />
          <div className="flex items-center space-x-3 text-indigo-900">
            <h2 className="text-xl font-semibold">Latest News</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Fix My Ride is a company that mediates between travelers and
            providers of passenger transport. Fix My Ride is created to give
            their drivers a fair chance on creating their own customer...
            network.
          </p>
          <button
            className="px-6 py-2 border border-indigo-900 text-indigo-900 rounded-full 
            hover:bg-indigo-900 hover:text-white transition-all duration-300
            hover:scale-105 active:scale-95"
          >
            VIEW BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
