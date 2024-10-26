import React from 'react';
import { FaPlay } from 'react-icons/fa'; // For the Watch Demo icon
import l1 from '../img/l1.png'
import l2 from '../img/l2.png'
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* Top Section */}
      <div className="w-full bg-[#F5F8FF] px-6 md:px-16 py-12 flex flex-col justify-center items-start space-y-6">
        {/* Badge */}
        <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm">
          <span className="text-sm font-medium">AI Powered Accounting tool</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#071B35] leading-tight">
          Manage Your <span className="text-green-600">Business Financials</span> seamlessly!
        </h1>

        {/* Description */}
        <p className="text-gray-500">
          Make your numbers work for you—automated Accounting, bookkeeping, and real-time insights
          with seamless financial clarity, all at your command.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg">
            Get Started
          </button>
          <button className="flex items-center space-x-2">
            <FaPlay className="text-teal-500" />
            <span className="text-teal-500 font-medium">Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#F5F8FF] flex justify-center items-center py-12 relative">
  {/* Main background image */}
  <img 
    src={l2} 
    className="z-10 w-[280px] md:w-[300px] lg:w-[350px]" // Adjust sizes for different screens
    alt="Background Image"
  />

  {/* Overlay image */}
  <img 
    src={l1} 
    className="ml-[-100px] w-[280px] md:w-[350px] lg:w-[400px]" // Adjust sizes for different screens
    alt="Overlay Image"
  />
</div>

    </div>
  );
};

export default HeroSection;
