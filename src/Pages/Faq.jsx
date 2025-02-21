import React, { useState } from "react";
import { Search } from "lucide-react";
import img1 from "../assets/img/home2.jpg";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Fix My Ride?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      question: "How long does it take to sign up?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "How can I pay?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Car Background */}
      <div className="relative h-64 w-full">
        {/* Background Image */}
        <img
          src={img1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-white mb-8">
            Fix My Ride FAQ
          </h1>
          <div className="relative w-[600px] max-w-full mx-4">
            <div className="flex">
              <input
                type="text"
                placeholder="How do we help you?"
                className="w-full px-6 py-3 rounded-l-full text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-6 rounded-r-full flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="col-span-1">
            <nav className="space-y-2">
              <div className="text-green-500">General</div>
              <div className="text-blue-500 cursor-pointer">
                Fix My Ride Account
              </div>
              <div className="text-blue-500 cursor-pointer">Pre-booking</div>
              <div className="text-blue-500 cursor-pointer">Cancellation</div>
              <div className="text-blue-500 cursor-pointer">Driver</div>
              <div className="text-gray-500 cursor-pointer">Lorem Ipsum</div>
              <div className="text-gray-500 cursor-pointer">Lorem Ipsum</div>
              <div className="text-gray-500 cursor-pointer">Lorem Ipsum</div>
            </nav>
          </div>

          {/* FAQ Questions */}
          <div className="col-span-3">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 py-4">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                  }
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 h-6 w-6 flex items-center justify-center rounded-full">
                    {activeQuestion === faq.id ? "−" : "+"}
                  </span>
                </button>
                {activeQuestion === faq.id && (
                  <div className="mt-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
