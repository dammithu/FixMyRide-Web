import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import visa from "../assets/img/visa.jpg";

const BookingForm = () => {
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/successtransfer");
  };

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <h1 className="text-lg font-medium mb-6">BOOKING SUMMARY</h1>

      <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg">
        {/* Trip Details Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 w-full">
              <span className="text-sm font-medium text-[#1A1B1F] uppercase">
                YOUR TRIP DETAILS
              </span>
              <div className="h-[2px] bg-gray-200 flex-grow ml-2"></div>
            </div>
            <button
              type="button"
              className="text-blue-500 text-sm hover:text-blue-600 whitespace-nowrap"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Pickup Location</span>
              <span className="text-sm font-bold">
                London Euston, London, UK
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Drop-off Airport</span>
              <span className="text-sm font-bold">Gatwick North (LGW)</span>
            </div>

            <div className="pt-2">
              <span className="text-sm font-medium">Outbound Details</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Travelling Date</span>
              <span className="text-sm font-bold">2019 - Jan - 26</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Travelling Time</span>
              <span className="text-sm font-bold">10:10 am</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Vehicle Type</span>
              <span className="text-sm font-bold">4 Seater</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Passenger</span>
              <span className="text-sm font-bold">1 Adult</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Flight Number</span>
              <span className="text-sm font-bold">LCY146Q</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Flight Time</span>
              <span className="text-sm font-bold">11:55 am</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Outbound Trip Fare</span>
              <span className="text-sm font-bold">£ 37.59</span>
            </div>

            <div className="border-t border-gray-200 p-1" />

            <div className="flex justify-between items-center mt-6 py-2">
              <span className="text-gray-800 text-base">Promo code</span>
              <div className="flex items-center">
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoChange}
                  placeholder="Enter code"
                  className="bg-white border border-gray-100 rounded-l-full px-5 py-2 text-sm text-gray-400 w-40 outline-none"
                />
                <button
                  type="button"
                  className="bg-[#8E82B0] text-white text-sm font-medium px-5 py-2 rounded-r-full"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 p-1" />

            <div className="flex justify-between items-center pt-4 font-medium">
              <span className="text-sm">TOTAL TRIP FARE</span>
              <span className="text-sm font-bold">£ 37.59</span>
            </div>
          </div>
        </div>

        {/* Personal & Payment Details Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 w-full">
              <span className="text-sm font-medium text-[#1A1B1F] uppercase">
                YOUR PERSONAL & PAYMENT DETAILS
              </span>
              <div className="h-[2px] bg-gray-200 flex-grow ml-2"></div>
            </div>
            <button
              type="button"
              className="text-blue-500 text-sm hover:text-blue-600 whitespace-nowrap"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium block mb-4">
                Personal Details
              </span>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">First Name</span>
                  <span className="text-sm font-bold">Kanis</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Last Name</span>
                  <span className="text-sm font-bold">Kar</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Email</span>
                  <span className="text-sm font-bold">
                    rckaniskar@gmail.com
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Mobile</span>
                  <span className="text-sm font-bold">+44 3304525525</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-sm font-medium block mb-4">
                Payment Details
              </span>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Card</span>
                  <img
                    src={visa}
                    alt="Visa Card"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Card Number</span>
                  <span className="text-sm font-bold">xxxx xxxx xxxx 2456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">
                    Default Payment Mode
                  </span>
                  <span className="text-sm font-bold">Cash Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            PROCEED TO PAY AND REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;