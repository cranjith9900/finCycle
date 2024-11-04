import React from "react";

const PricingCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-green-700 text-white rounded-2xl p-6 shadow-lg hover:bg-green-800 transition duration-300">
      {/* Most Popular Badge */}
      <div className="flex justify-center">
        <span className="bg-white text-green-700 font-semibold rounded-full px-3 py-1 text-xs mb-4">
          MOST POPULAR
        </span>
      </div>

      {/* Price and Plan Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">₹5000</h2>
        <p className="text-sm font-medium text-gray-200">/month</p>
      </div>

      <h3 className="text-xl font-semibold text-center mt-2">Pro</h3>
      <p className="text-center text-gray-300 mt-2 mb-6">
        For most businesses that want to optimize web queries
      </p>

      {/* Feature List */}
      <ul className="space-y-2">
        {[
          "All limited links",
          "Own analytics platform",
          "Chat support",
          "Optimize hashtags",
          "Unlimited users",
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 text-green-300 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 011.414 0L14 8.414l-1.414-1.414L9 12.172 7.707 10.879 6.293 12.293l2 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Choose Plan Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
