import React from "react";

const FAQSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Question 1 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              What documents will you need from me?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Documents required include but are not limited to: Driving
              license, national ID card, vehicle registration documents,
              insurance, recent utility bills etc.
            </p>
          </div>

          {/* Question 2 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              How does the car inspection work?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The car inspection varies by market. We will either do the car
              check ourselves (by the city team) or use 3rd party services that
              do the car check for us.
            </p>
          </div>

          {/* Question 3 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              When can I start driving?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Once activated, use your new credentials to log in to the Fix My
              Ride app and start earning.
            </p>
          </div>

          {/* Question 4 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              I don't drive full-time. Can I use Fix My Ride for just a few
              hours a week?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Of course, some of our drivers are only active a few hours during
              weekends and make solid part-time income.
            </p>
          </div>

          {/* Question 5 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              How long does it take to sign up?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Submitting your application takes about 10 minutes. Depending on
              your city and if we are listening to your offer. In some cities,
              we will accept your application remotely once you provide us with
              all the necessary.
            </p>
          </div>

          {/* Question 6 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              How do I get paid?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Clients pay you by cash or via card. We pay out to your bank
              account every week.
            </p>
          </div>
        </div>

        {/* Sign up button */}
        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            SIGN UP TO DRIVE WITH Fix My Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
