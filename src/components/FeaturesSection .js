import React from 'react';
import pic1 from '../img/pic4.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';
import pic4 from '../img/pic4.png';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Effortless Data Collection, All in One Place.',
      description:
        'Automatically extracts the financial data from all your sources, giving you a complete view without the manual hassle.',
      image: pic1,
    },
    {
      title: 'Transactions That Classify Themselves',
      description:
        'No more spending hours categorizing. Our system intelligently sorts transactions to keep your records organized.',
      image: pic2,
    },
    {
      title: 'Smart Financial Insights',
      description:
        'Get insights tailored to your business, helping you make smarter financial decisions with real-time data.',
      image: pic3,
    },
    {
      title: 'Seamless Integration with Your Tools',
      description:
        'Our platform integrates with your existing tools, making the transition smooth and easy.',
      image: pic4,
    },
  ];

  return (
    <div className="flex justify-center bg-[#F5F8FF] py-12">
      <div className="w-[90%] md:w-[90%] lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
          >
            <img src={feature.image} alt={feature.title} className="h-auto w-full mb-4 object-cover" />
            <h3 className="text-lg font-semibold mb-2 text-[#071B35]">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
