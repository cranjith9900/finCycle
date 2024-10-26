import React from 'react';

const steps = [
  'Connect your Accounts',
  'Automate Bookkeeping',
  'Analyze in Real Time',
  'Talk to Your Numbers',
];

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col items-center space-y-0 mt-[-50px]">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Step Bubble */}
          <div className="bg-white px-8 py-4 rounded-full shadow-md text-center mb-0">
            <p className="font-medium text-gray-800">{step}</p>
          </div>

          {/* Dashed Line */}
          {index < steps.length - 1 && (
            <div className="w-1 h-12 border-l-2 border-dashed border-green-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
