import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

const LTTripBooking = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
      {/* Header Section */}
      <div className="bg-indigo-900 p-4 rounded-t-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex flex-1 flex-col md:flex-row gap-4">
            {/* Pickup */}
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 min-h-[48px] flex-1">
              <span className="text-white mr-3">□</span>
              <div className="text-white">
                <div className="text-xs opacity-70">PICKUP</div>
                <div className="text-sm">London Euston, London, UK</div>
              </div>
            </div>

            {/* Via */}
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 min-h-[48px] flex-1">
              <span className="text-white mr-3">○</span>
              <div className="text-white">
                <div className="text-xs opacity-70">VIA</div>
                <div className="text-sm">
                  London Hilton On Park Lane, London, UK
                </div>
              </div>
            </div>

            {/* Drop-off */}
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 min-h-[48px] flex-1">
              <span className="text-white mr-3">○</span>
              <div className="text-white">
                <div className="text-xs opacity-70">DROP-OFF</div>
                <div className="text-sm">
                  London Heathrow Airport (LHR), Longford, UK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="bg-white rounded-b-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
          {/* Trip Details Title */}
          <div className="p-4">
            <div className="text-left">
              <div className="text-sm font-bold text-indigo-900">
                TRIP DETAILS
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <button className="p-4 flex items-center gap-2 hover:bg-gray-50">
            <Calendar className="w-5 h-5 text-indigo-900" />
            <div className="text-left">
              <div className="text-xs text-gray-500">TRIP DATE</div>
              <div className="text-sm text-indigo-900">Select Date</div>
            </div>
          </button>

          {/* Time Selection */}
          <button className="p-4 flex items-center gap-2 hover:bg-gray-50">
            <Clock className="w-5 h-5 text-indigo-900" />
            <div className="text-left">
              <div className="text-xs text-gray-500">TRIP TIME</div>
              <div className="text-sm text-indigo-900">Select Time</div>
            </div>
          </button>

          {/* Passengers */}
          <button className="p-4 flex items-center gap-2 hover:bg-gray-50">
            <Users className="w-5 h-5 text-indigo-900" />
            <div className="text-left">
              <div className="text-xs text-gray-500">PASSENGERS</div>
              <div className="text-sm text-indigo-900">3 Passengers</div>
            </div>
          </button>

          {/* Book Button */}
          <div className="p-4 flex items-center justify-center">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Book an instant trip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTTripBooking;
