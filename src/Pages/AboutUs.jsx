import React, { useEffect } from "react";
import about1 from "../assets/img/about/about1.jpg";
import about2 from "../assets/img/about/about2.jpg";
import about3 from "../assets/img/about/about3.jpg";
import home1 from "../assets/img/home1.jpg";
import Gomobile from "../Pages/Gomobile";

const AboutPage = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-10");
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
    <div className="w-full overflow-hidden">
      {/* Hero Section with Business Man and Plane */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] w-full">
        <img
          src={home1}
          alt="Business professional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="absolute bottom-10 left-5 md:bottom-20 md:left-20 px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              About Fix My Ride
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section with Lines */}
      <section className="w-full px-5 md:px-10 lg:px-20 py-10 md:py-16 bg-white">
        <div className="flex mb-8 md:mb-10">
          <h2
            className="text-xl md:text-2xl font-bold mx-auto"
            style={{ color: "#5c5784" }}
          >
            OUR STORY
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-6xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Stats Counter Section */}
      <section className="w-full px-5 md:px-10 lg:px-20 py-12 md:py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">60+</h3>
            <p className="text-lg md:text-xl text-gray-600">CITIES</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-lg md:text-xl text-gray-600">DRIVERS</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">20,000+</h3>
            <p className="text-lg md:text-xl text-gray-600">RIDERS</p>
          </div>
        </div>
      </section>

      {/* Grid Layout Section - Converting to responsive layout */}
      <section className="max-w-7xl px-5 md:px-10 lg:px-20 py-10 md:py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* London Bridge Image */}
          <div className="h-[300px] md:h-[350px] lg:h-[450px]">
            <img
              src={about1}
              alt="London Bridge scene"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Philosophy Section */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="flex items-center mb-6">
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
              <h2
                className="text-xl md:text-2xl font-bold text-gray-800 px-2 md:px-4"
                style={{ color: "#5c5784" }}
              >
                OUR PHILOSOPHY
              </h2>
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Like all partnerships we love our customers. The difference? Our
              Drivers, who get the lowest fees and great service, are not our
              only customers - our Drivers are too.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Smart UI works together with Drivers and values them as
              hard-working, talented people. We give our Drivers the financial
              independence for. This includes business cards, free membership
              fees, the ability to set their own rates and working times, great
              promotions.
            </p>
          </div>

          {/* Better for Riders Section - Reordering for mobile */}
          <div className="order-4 lg:order-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="flex items-center mb-6">
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
              <h2
                className="text-xl md:text-2xl font-bold text-gray-800 px-2 md:px-4"
                style={{ color: "#5c5784" }}
              >
                BETTER FOR RIDERS
              </h2>
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Fix My Ride gives you low prices because we work locally with
              drivers to keep our costs low. And we use the most flexible system
              in London they're always just a phone call or click away. Best of
              all we allow you to choose your favourite driver - up to four
              drivers chosen by you. So add to your smart circle, save them in
              the App and choose them next time. It's that easy.
            </p>

            <button className="bg-blue-500 text-white px-6 md:px-10 py-2 md:py-3 rounded-full w-fit hover:bg-blue-600 transition-colors text-sm md:text-base">
              SIGN UP TO BOOK
            </button>
          </div>

          {/* Rider Image */}
          <div className="order-3 lg:order-4 h-[300px] md:h-[350px] lg:h-[450px]">
            <img
              src={about2}
              alt="Person in car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Driver Image */}
          <div className="h-[300px] md:h-[350px] lg:h-[450px]">
            <img
              src={about3}
              alt="Driver with phone"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Better for Drivers Section */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="flex items-center mb-6">
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
              <h2
                className="text-xl md:text-2xl font-bold text-gray-800 px-2 md:px-4"
                style={{ color: "#5c5784" }}
              >
                BETTER FOR DRIVERS
              </h2>
              <div className="hidden sm:block h-[1px] bg-gray-300 w-8 md:w-16"></div>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Private hire Drivers love Fix My Ride because they get control
              over the way they work and low commission on well customer rides.
              The Preferred Driver feature allows Drivers to build and manage
              their own network of customers simply and easily. Personal
              business cards, special offers and access to tried and tested kit
              all combine into a great toolkit for Drivers.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
              Fix My Ride is also marketing hard and bringing more and more
              rides to the platform. We are strong in South West London and
              growing. Get signed today!
            </p>
            <button className="bg-blue-500 text-white px-6 md:px-10 py-2 md:py-3 rounded-full w-fit hover:bg-blue-600 transition-colors text-sm md:text-base">
              SIGN UP TO DRIVE
            </button>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <div className="mx-auto px-4 sm:px-6 max-w-6xl py-5 md:py-7">
        <header className="text-center py-6 md:py-9 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900">
            Lorem Ipsum Partners
          </h1>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center py-8 md:py-12 mt-6 md:mt-10">
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
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <span className="text-xl md:text-2xl">{partner.icon}</span>
                <span className="text-xs md:text-sm">{partner.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Gomobile />
    </div>
  );
};

export default AboutPage;