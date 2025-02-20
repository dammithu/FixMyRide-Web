import React from "react";
import { X } from "lucide-react";

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Fixed Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-purple-800 text-2xl font-semibold">
                  #LCY123F
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-500 font-medium">UPCOMING</span>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Location Details */}
              <div className="mb-8">
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Pickup Location</span>
                  <span className="text-right font-medium">
                    London Euston, London, UK
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Drop-off Airport</span>
                  <span className="text-right font-medium">
                    Gatwick North (LGW)
                  </span>
                </div>
              </div>

              {/* Outbound Details */}
              <div className="mb-8">
                <h3 className="text-gray-500 mb-4">Outbound Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travelling Date</span>
                    <span className="font-medium">2019 - Sep - 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travelling Time</span>
                    <span className="font-medium">10:10 am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Type</span>
                    <span className="font-medium">4 Seater</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Passenger</span>
                    <span className="font-medium">1 Adult</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flight Number</span>
                    <span className="font-medium">LCY146Q</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flight Time</span>
                    <span className="font-medium">11:55 am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Outbound Trip Fare</span>
                    <span className="font-medium">£ 37.59</span>
                  </div>
                </div>
              </div>

              {/* Inbound Details */}
              <div className="mb-8">
                <h3 className="text-gray-500 mb-4">Inbound Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Return Date</span>
                    <span className="font-medium">2019 - Sep - 26</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Return Time</span>
                    <span className="font-medium">10:10 am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Type</span>
                    <span className="font-medium">6 Seater</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Passenger</span>
                    <span className="font-medium">6 Adult</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flight Number</span>
                    <span className="font-medium">MY146Q</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flight Time</span>
                    <span className="font-medium">11:55 am</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inbound Trip Fare</span>
                    <span className="font-medium">£ 137.59</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="p-6 border-t border-gray-200">
            {/* Total Fare */}
            <div className="mb-8">
              <div className="flex justify-between py-3">
                <span className="font-semibold">TOTAL TRIP FARE</span>
                <span className="font-semibold">£ 179.59</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-3 px-6 border-2 border-purple-700 text-purple-700 rounded-full hover:bg-purple-50 transition-colors">
              <span className="text-sm mr-2">CHANGE YOUR MIND ?</span>
              EDIT OR RESCHEDULE YOUR TRIP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetailsModal;
