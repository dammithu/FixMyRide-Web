import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import visa from "../assets/img/visa.jpg";
import mastercard from "../assets/img/mastercard.jpg";
import paypal from "../assets/img/paypal.jpg";

const RegistrationForm = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(true);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/bookingsummary");
  };

  const LoginForm = () => (
    <form className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Welcome Back To Fix My Ride
        </h2>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-center">
        <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
          Forgot Password?
        </a>
      </div>

      <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        LOGIN
      </button>

      <div className="text-center text-sm text-gray-600">
        Don't have an account yet?{" "}
        <button
          type="button"
          onClick={() => setIsRegisterActive(true)}
          className="text-blue-500 hover:text-blue-600"
        >
          Register now
        </button>
      </div>
    </form>
  );

  const RegisterForm = () => (
    <form className="space-y-8" onSubmit={handleContinue}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-6">
            <h2 className="text-xs font-medium uppercase tracking-wider text-gray-900 whitespace-nowrap mr-3">
              YOUR PERSONAL INFORMATION
            </h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="phone-input-container">
              <PhoneInput
                country={"gb"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: "phone",
                  required: true,
                  className:
                    "w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                }}
                containerClass="w-full"
                buttonClass="border border-gray-200 rounded-l-2xl hover:bg-gray-50"
                dropdownClass="bg-white border border-gray-200 rounded-lg shadow-lg"
                searchClass="p-2 border-b border-gray-200"
                enableSearch={true}
                disableSearchIcon={true}
                searchPlaceholder="Search countries..."
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center flex-grow">
                <h2 className="text-xs font-medium uppercase tracking-wider text-gray-900 whitespace-nowrap mr-3">
                  YOUR PAYMENT DETAILS
                </h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              <div className="flex items-center gap-2 ml-3">
                <img src={visa} alt="Visa" className="h-5" />
                <img src={mastercard} alt="Mastercard" className="h-5" />
                <img src={paypal} alt="PayPal" className="h-5" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Please fill your Credit / Debit card details below
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card holder name"
                className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Card number"
                className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Expire date (MM/YY)"
                  className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter CVC"
                className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-4">
              Select Your Default Payment Mode
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="text-gray-700">Card payment</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">Cash payment</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center">
        By providing personal data, you acknowledge that you have read and
        understood our Privacy Notice
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        CONTINUE
      </button>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setIsRegisterActive(false)}
          className="text-blue-500 hover:text-blue-600"
        >
          Login now
        </button>
      </div>
    </form>
  );

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .react-tel-input .form-control {
        width: 100% !important;
        height: 48px !important;
        border-radius: 1rem !important;
        border-color: rgb(229, 231, 235) !important;
        font-size: 1rem !important;
      }
      .react-tel-input .flag-dropdown {
        border-color: rgb(229, 231, 235) !important;
        border-radius: 1rem 0 0 1rem !important;
        background-color: white !important;
      }
      .react-tel-input .selected-flag {
        border-radius: 1rem 0 0 1rem !important;
        padding: 0 12px 0 16px !important;
      }
      .react-tel-input .selected-flag:hover,
      .react-tel-input .selected-flag:focus {
        background-color: rgb(249, 250, 251) !important;
      }
      .react-tel-input .country-list {
        border-radius: 0.5rem !important;
        margin-top: 8px !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
      }
      .react-tel-input .country-list .search {
        padding: 8px 10px !important;
      }
      .react-tel-input .country-list .search-box {
        padding: 8px !important;
        margin: 5px 10px !important;
        border-radius: 4px !important;
        border-color: rgb(229, 231, 235) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-sm font-medium text-gray-900 mb-4 tracking-wider uppercase">
          REGISTER OR LOGIN
        </h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-2">
            <button
              className={`py-4 text-center text-xs tracking-wider font-medium uppercase ${
                isRegisterActive
                  ? "bg-white text-indigo-900"
                  : "bg-gray-50 text-gray-600"
              }`}
              onClick={() => setIsRegisterActive(true)}
            >
              Register
            </button>
            <button
              className={`py-4 text-center text-xs tracking-wider font-medium uppercase ${
                !isRegisterActive
                  ? "bg-white text-indigo-900"
                  : "bg-gray-50 text-gray-600"
              }`}
              onClick={() => setIsRegisterActive(false)}
            >
              Login
            </button>
          </div>

          <div className="p-6">
            {isRegisterActive ? <RegisterForm /> : <LoginForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
