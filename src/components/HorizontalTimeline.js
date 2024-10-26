import React from 'react';

const steps = [
  'Connect your Accounts',
  'Automate Bookkeeping',
  'Analyze in Real Time',
  'Talk to Your Numbers',
];

const HorizontalTimeline = () => {
  return (
    <div className="flex justify-center items-center bg-[#F5F8FF] py-8 mt-[-50px]">
      <div className="flex items-center justify-between w-full max-w-6xl">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Bubble */}
            <div className="bg-white px-8 py-4 rounded-full shadow-md ">
              <p className="font-medium text-gray-800">{step}</p>
            </div>

            {/* Dashed Line */}
            {index < steps.length - 1 && (
              <div className="h-0.5 w-16 border-t-2 border-dashed border-green-500 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
