import React, { useState } from "react";
import { MoreHorizontal, Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-5 fixed top-0 z-50 ">
      <div className="max-w-8xl mx-auto px-5">
        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center space-x-3 mx-5 cursor-pointer"
          >
            <img src={logo} alt="Fix My Ride Logo" className="w-12 h-12" />
            <span className="text-gray-700 font-semibold text-xl">
              Fix My Ride
            </span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="/airport"
              className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
            >
              AIRPORT TRANSFER
            </a>
            <a
              href="/localtrip"
              className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
            >
              LOCAL TRIP
            </a>
            <a
              href="/driver"
              className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
            >
              DRIVER
            </a>
            <a
              href="/business"
              className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
            >
              BUSINESS
            </a>

            {/* Three Dots Menu */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700 p-2"
                aria-label="More options"
              >
                <MoreHorizontal className="w-7 h-7" strokeWidth={1} />
              </button>

              {/* Desktop Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    href="/aboutus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-700 hover:bg-[#caf6c4]"
                  >
                    ABOUT US
                  </a>
                  <a
                    href="/contactus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-700 hover:bg-[#caf6c4]"
                  >
                    CONTACT US
                  </a>
                  <a
                    href="#blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-700 hover:bg-[#caf6c4]"
                  >
                    BLOG
                  </a>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <a href="/login">
              <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-full border border-gray-300 text-sm">
                LOGIN
              </button>
            </a>
            <a href="/signup">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm">
                SIGN UP
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/airport"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                AIRPORT TRANSFER
              </a>
              <a
                href="/localtrip"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                LOCAL TRIP
              </a>
              <a
                href="/driver"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                DRIVER
              </a>
              <a
                href="/business"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                BUSINESS
              </a>

              {/* Mobile More Menu Items */}
              <a
                href="/aboutus"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                ABOUT US
              </a>
              <a
                href="/contactus"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                CONTACT US
              </a>
              <a
                href="#blog"
                className="text-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#caf6c4]"
              >
                BLOG
              </a>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 pt-2">
                <a href="/login">
                  <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-full border border-gray-300 text-sm w-full">
                    LOGIN
                  </button>
                </a>
                <a href="/signup">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm w-full">
                    SIGN UP
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
