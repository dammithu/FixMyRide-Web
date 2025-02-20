import { React, useState } from "react";
import BookingDetailsModal from "../components/BookingDetailsModal";

const MyAccount = () => {
  const bookings = [
    {
      ref: "#LCY123F",
      date: "2019 SEP 26",
      time: "10:30 am",
      type: "Airport Transfer",
      tripType: "Round Trip",
      pickup: "London Euston, London, UK",
      dropoff: "London Stadium, London, UK",
      status: "Upcoming",
    },
    {
      ref: "#LCY123F",
      date: "2019 SEP 26",
      time: "10:30 am",
      type: "Local Trip",
      pickup: "London Euston, London, UK",
      dropoff: "London Stadium, London, UK",
      status: "Upcoming",
    },
    {
      ref: "#LCY123F",
      date: "2019 SEP 04",
      time: "10:30 am",
      type: "Local Trip",
      pickup: "London Euston, London, UK",
      via: "London Hilton on Park Lane, London, UK",
      dropoff: "London Stadium, London, UK",
      status: "Completed",
    },
    {
      ref: "#LCY123F",
      date: "2019 SEP 03",
      time: "10:30 am",
      type: "Airport Transfer",
      tripType: "One Way",
      pickup: "London Euston, London, UK",
      dropoff: "London Stadium, London, UK",
      status: "Completed",
    },
    {
      ref: "#LCY123F",
      date: "2019 SEP 01",
      time: "10:30 am",
      type: "Airport Transfer",
      tripType: "Round Trip",
      pickup: "London Euston, London, UK",
      dropoff: "London Stadium, London, UK",
      status: "Cancelled",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <BookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        booking={selectedBooking}
      />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden w-full bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  MY ACCOUNT
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-purple-700 p-2"
                >
                  {isMobileMenuOpen ? (
                    <span className="text-xl">×</span>
                  ) : (
                    <span className="text-xl">☰</span>
                  )}
                </button>
              </div>
              
              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="mt-4 space-y-2 pb-2">
                  <div className="font-medium text-gray-700 mb-2">
                    My Bookings
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-600">All Bookings</div>
                    <div className="text-blue-500">Upcoming Bookings</div>
                    <div className="text-blue-500">Completed</div>
                    <div className="text-blue-500">Cancelled</div>
                  </div>
                  <div className="font-medium text-gray-700 mt-4 mb-2">
                    Account Settings
                  </div>
                  <div className="space-y-3">
                    <div className="text-blue-500">Edit Profile</div>
                    <div className="text-blue-500">Edit Payment Details</div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Sidebar - Hidden on Mobile */}
            <div className="hidden md:block w-full md:w-64 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                MY ACCOUNT
              </h2>
              <div className="space-y-2">
                <div className="font-medium text-gray-700 mb-2">
                  My Bookings
                </div>
                <div className="space-y-1">
                  <div className="text-gray-600">All Bookings</div>
                  <div className="text-blue-500">Upcoming Bookings</div>
                  <div className="text-blue-500">Completed</div>
                  <div className="text-blue-500">Cancelled</div>
                </div>
                <div className="font-medium text-gray-700 mt-4 mb-2">
                  Account Settings
                </div>
                <div className="space-y-1">
                  <div className="text-blue-500">Edit Profile</div>
                  <div className="text-blue-500">Edit Payment Details</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h1 className="text-xl font-semibold text-purple-700 mb-4 md:mb-6">
                  MY BOOKINGS
                </h1>

                {/* Table for desktop and tablet */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-600">
                        <th className="pb-4">REF #</th>
                        <th className="pb-4">DATE</th>
                        <th className="pb-4">TIME</th>
                        <th className="pb-4">TYPE</th>
                        <th className="pb-4">PICKUP & DROP-OFF</th>
                        <th className="pb-4">STATUS</th>
                        <th className="pb-4">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 1 ? "bg-gray-50" : ""
                          } border-b border-gray-100`}
                        >
                          <td className="py-6">{booking.ref}</td>
                          <td className="py-6">{booking.date}</td>
                          <td className="py-6">{booking.time}</td>
                          <td className="py-6">
                            <div>{booking.type}</div>
                            {booking.tripType && (
                              <div className="text-gray-500 text-sm mt-1">
                                {booking.tripType}
                              </div>
                            )}
                          </td>
                          <td className="py-6">
                            <div>Pick: {booking.pickup}</div>
                            {booking.via && (
                              <div className="my-1">Via: {booking.via}</div>
                            )}
                            <div className="mt-1">Drop: {booking.dropoff}</div>
                          </td>
                          <td className="py-6">
                            <span
                              className={`
                                ${booking.status === "Upcoming" ? "text-green-500" : ""}
                                ${booking.status === "Completed" ? "text-gray-500" : ""}
                                ${booking.status === "Cancelled" ? "text-red-500" : ""}
                              `}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-6">
                            <button
                              className="text-blue-500"
                              onClick={() => {
                                setSelectedBooking(booking);
                                setIsModalOpen(true);
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                  {bookings.map((booking, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="font-medium">{booking.ref}</span>
                          <div className="text-sm text-gray-600 mt-1">
                            {booking.date} • {booking.time}
                          </div>
                        </div>
                        <span
                          className={`
                            ${booking.status === "Upcoming" ? "text-green-500" : ""}
                            ${booking.status === "Completed" ? "text-gray-500" : ""}
                            ${booking.status === "Cancelled" ? "text-red-500" : ""}
                          `}
                        >
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="font-medium">{booking.type}</div>
                        {booking.tripType && (
                          <div className="text-sm text-gray-500">{booking.tripType}</div>
                        )}
                      </div>
                      
                      <div className="space-y-1 text-sm mb-4">
                        <div><span className="text-gray-600">Pick:</span> {booking.pickup}</div>
                        {booking.via && (
                          <div><span className="text-gray-600">Via:</span> {booking.via}</div>
                        )}
                        <div><span className="text-gray-600">Drop:</span> {booking.dropoff}</div>
                      </div>
                      
                      <button
                        className="w-full py-2 text-center text-blue-500 border border-blue-500 rounded-md"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setIsModalOpen(true);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>

                {/* Pagination - Responsive */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                  <span className="text-sm text-gray-600 order-2 sm:order-1">
                    Showing 10 of 135
                  </span>
                  <div className="flex gap-2 order-1 sm:order-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-green-500 text-green-500">
                      1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300">
                      2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300">
                      3
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300">
                      4
                    </button>
                    <button className="px-4 h-8 flex items-center justify-center rounded border border-gray-300">
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;