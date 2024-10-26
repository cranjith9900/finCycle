import React from 'react';
import heroImage from '../img/lefticon.png'; // Replace with the correct image path

const HeroSection2 = () => {
  return (
    <div className="bg-[#F5F8FF] min-h-screen flex items-center">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between w-full px-16">
        <div className="max-w-lg ml-40">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            Fincycle : <br />
            Your <span className="text-green-600">Accounting</span> CoPilot
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Seamlessly transform your financial data into actionable insights. 
            From automating transactions to answering your business’s toughest questions.
          </p>
          <button className="mt-6 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
            Get Started
          </button>
        </div>
        <div className="mr-40">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[48rem] min-w-[420px] min-h-[420px] h-auto rounded-full"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center justify-center text-center px-6 py-12">
        <img
          src={heroImage}
          alt="Hero"
          className="w-64 min-w-[420px] min-h-[420px] h-auto mb-6 rounded-full" // Ensured min-height for mobile
        />
        <h1 className="text-3xl font-bold text-gray-800 leading-snug">
          Fincycle : <br />
          Your <span className="text-green-600">Accounting</span> CoPilot
        </h1>
        <p className="mt-4 text-gray-600 text-lg px-4">
          Seamlessly transform your financial data into actionable insights. 
          From automating transactions to answering your business’s toughest questions.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection2;
