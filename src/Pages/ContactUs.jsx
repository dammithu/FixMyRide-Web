import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Gomobile from "./Gomobile"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  // Updated phone input styles to maintain design while enabling functionality
  const phoneInputStyles = `
    .react-tel-input {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    .react-tel-input .form-control {
      width: 100%;
      height: 48px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 9999px;
      font-size: 15px;
      color: #333;
      padding-left: 85px;
    }
    
    .react-tel-input .flag-dropdown {
      background-color: transparent;
      border: none;
      padding: 0;
    }
    
    .react-tel-input .selected-flag {
      background-color: #f2f2f2;
      border-radius: 9999px 0 0 9999px;
      padding: 0 0 0 15px;
      width: 65px;
    }
    
    .react-tel-input .selected-flag .flag {
      transform: scale(1.2);
    }
    
    .react-tel-input .selected-flag:before {
      content: "";
      position: absolute;
      right: 0;
      top: 17px;
      bottom: 17px;
      width: 1px;
      background-color: #ddd;
    }
    
    .react-tel-input .selected-flag .arrow {
      left: 40px;
      border-top: 4px solid #666;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
    
    .react-tel-input .selected-flag .arrow.up {
      border-top: none;
      border-bottom: 4px solid #666;
    }
    
    .react-tel-input .country-list {
      border-radius: 12px;
      border: 1px solid #eaeaea;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-top: 10px;
      width: 300px;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .react-tel-input .country-list .country {
      padding: 10px 15px;
    }
    
    .react-tel-input .country-list .country:hover {
      background-color: #f5f5f5;
    }
    
    .react-tel-input .country-list .country.highlight {
      background-color: #f0f0f0;
    }
    
    .react-tel-input .form-control:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
    
    .react-tel-input .form-control::placeholder {
      color: #999;
    }
    
    .react-tel-input .country-list .search {
      padding: 10px 15px;
      background-color: #fff;
      border-bottom: 1px solid #eaeaea;
    }
    
    
  `;

  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <style>{phoneInputStyles}</style>
      
      <div className="max-w-3xl w-full p-6 mt-10">
        <h2 className="text-2xl font-medium text-indigo-800 mb-6">
          CONTACT US
        </h2>

        <div className="bg-white rounded-lg shadow-sm p-10 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="relative">
                <PhoneInput
                  country={'gb'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    placeholder: 'Phone Number'
                  }}
                  enableSearch={true}
                  searchPlaceholder="Search countries"
                  searchClass="search-box"
                  containerClass="react-tel-input"
                  inputClass="form-control"
                  buttonClass="flag-dropdown"
                  dropdownClass="country-list"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="title"
                placeholder="Title of your message"
                value={formData.title}
                onChange={handleChange}
                className="w-full h-12 px-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-3xl bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="px-36 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 font-medium text-lg">Smartzi Limited</p>
              <p className="text-gray-600 font-medium text-lg">14 Elm Road, Chessington</p>
              <p className="text-gray-600 font-medium text-lg">KT91AW</p>
              <p className="text-gray-600 font-medium text-lg mb-4">United Kingdom</p>
              
              <p className="text-gray-500 text-sm">Company Registration Number: 09261921</p>
            </div>
            
            <div>
              <div className="mb-6">
                <p className="text-gray-700 font-medium text-lg">Hot Line</p>
                <p className="text-gray-600 font-medium text-lg">+44 3300252525</p>
              </div>
              
              <div>
                <p className="text-gray-700 font-medium text-lg">Email</p>
                <p className="text-gray-600 font-medium text-lg">info@smartzi.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Gomobile/>
    </div>
  );
};

export default ContactForm;