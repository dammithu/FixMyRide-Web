import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Calendar } from "lucide-react";
import visa from "../assets/img/visa.jpg";
import mastercard from "../assets/img/mastercard.jpg";
import paypal from "../assets/img/paypal.jpg";

const PaymentForm = () => {
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleExpiryChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    let formattedDate = input;

    if (input.length >= 2) {
      const month = parseInt(input.substring(0, 2));
      if (month > 12) {
        setExpiryError("Invalid month");
      } else if (month === 0) {
        setExpiryError("Month cannot be 00");
      } else {
        setExpiryError("");
      }

      // Format MM/YY
      formattedDate =
        input.slice(0, 2) + (input.length > 2 ? "/" + input.slice(2, 4) : "");
    }

    // Limit to MM/YY format
    if (formattedDate.length <= 5) {
      setExpiryDate(formattedDate);
    }
  };

  const validateExpiryDate = () => {
    if (expiryDate.length === 5) {
      const [month, year] = expiryDate.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        setExpiryError("Card has expired");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateExpiryDate()) {
      console.log("Form submitted");
      navigate("/success"); // Navigate to success page
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-left text-lg font-medium mb-8">
          YOUR PAYMENT DETAILS
        </h1>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="mb-8">
            <div className="mb-4">
              <p className="text-sm text-gray-700 pl-2">
                PLEASE FILL YOUR CREDIT / DEBIT CARD DETAILS BELOW
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Lock size={16} />
                <span className="text-sm">Secure Payment with</span>
              </div>
              <img src={visa} alt="Visa" className="h-4" />
              <img src={mastercard} alt="Mastercard" className="h-4" />
              <img src={paypal} alt="PayPal" className="h-4" />
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex gap-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Cardholder name"
                  className="w-full px-6 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-600 placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full px-6 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-600 placeholder-gray-400"
                  required
                  maxLength={16}
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1 relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Expire date (MM/YY)"
                    value={expiryDate}
                    onChange={handleExpiryChange}
                    className={`w-full px-6 py-3.5 border ${
                      expiryError ? "border-red-500" : "border-gray-200"
                    } rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-500 placeholder-gray-400 font-normal text-sm`}
                    required
                  />
                  <Calendar
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
                {expiryError && (
                  <p className="text-red-500 text-xs mt-1">{expiryError}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter CVC"
                  className="w-full px-6 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-600 placeholder-gray-400"
                  required
                  maxLength={4}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium mb-2">
                Select Your Default Payment Mode
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="text-blue-500"
                  />
                  <span className="text-sm">Card payment</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    className="text-blue-500"
                  />
                  <span className="text-sm">Cash payment</span>
                </label>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              By providing personal data, you acknowledge that you have read and
              understood our Privacy Notice
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
