import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E1B3E] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-3 relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 relative">
                <img
                  src={logo}
                  alt="Smartzi Logo"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <span className="text-2xl font-semibold">Fix My Ride</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 flex relative">
            <div className="mr-2">
              <h3 className="text-xs font-semibold tracking-wider transform -rotate-90 origin-top-left translate-y-16 absolute">
                CONTACT
              </h3>
            </div>
            <div className="pl-10 space-y-1">
              <p>+44 3300525525</p>
              <p>info@Fix My Ride.com</p>
              <p>Fix My Ride Limited</p>
              <p>14 Elm Rd, Chessington</p>
              <p>KT91AW UK</p>
            </div>
            <div className="hidden md:block absolute right-0 -top-12 -bottom-8 w-px bg-gray-700"></div>
          </div>

          {/* Services Section */}
          <div className="md:col-span-3 flex relative">
            <div className="mr-4">
              <h3 className="text-xs font-semibold tracking-wider transform -rotate-90 origin-top-left translate-y-16 absolute">
                SERVICES
              </h3>
            </div>
            <div className="pl-10 space-y-1">
              <p>Airport Transfer</p>
              <p>Local Trips</p>
              <p>Contact Us</p>
              <p>
                <Link to="/faq" className="text-white hover:underline">
                  FAQ
                </Link>
              </p>
              <p>Support</p>
            </div>
            <div className="hidden md:block absolute right-0 -top-12 -bottom-8 w-px bg-gray-700"></div>
          </div>

          {/* Information Section */}
          <div className="md:col-span-3 flex relative">
            <div className="mr-4">
              <h3 className="text-xs font-semibold tracking-wider transform -rotate-90 origin-top-left translate-y-20 absolute">
                INFORMATION
              </h3>
            </div>
            <div className="pl-10 space-y-1">
              <p>About Fix My Ride</p>
              <p>Drive with Us</p>
              <p>Privacy Policy</p>
              <p>
                <Link
                  to="/termsandcondition"
                  className="text-white hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>
              <p>Press Enquiries</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2019 Fix My Ride Ltd. All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">
                <Instagram size={14} />
              </span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">
                <Twitter size={14} />
              </span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">
                <Facebook size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
