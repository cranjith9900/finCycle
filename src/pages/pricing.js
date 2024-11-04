import React from "react";

const PricingSection = () => {
  const plans = [
    {
      title: "Base",
      price: "₹2500",
      description: "For most businesses that want to optimize web queries",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonLabel: "Choose plan",
    },
    {
      title: "Pro",
      price: "₹5000",
      description: "For most businesses that want to optimize web queries",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonLabel: "Choose plan",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "For most businesses that want to optimize web queries",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonLabel: "Choose plan",
    },
  ];

  return (
    <div className="flex justify-center space-x-0 lg:space-x-2 mx-auto p-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative max-w-xs p-6 rounded-2xl shadow-lg border ${
            plan.mostPopular ? "bg-green-700 text-white" : "bg-white text-gray-800"
          } transform transition-transform duration-300 hover:scale-105 -mx-2`}
          style={{ margin: "0 -8px" }}
        >
          {plan.mostPopular && (
            <span className="absolute top-2 right-2 bg-white text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </span>
          )}
          <div className="text-3xl font-bold">{plan.price}<span className="text-lg font-normal">/month</span></div>
          <h3 className="text-xl font-semibold mt-2">{plan.title}</h3>
          <p className="mt-2 mb-4 text-sm">{plan.description}</p>
          <ul className="mb-4 space-y-2 text-sm">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="mr-2 text-green-500">✔️</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${
              plan.mostPopular
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {plan.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
