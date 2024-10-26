import React from 'react';

const HowItWorksAndMore = () => {
  return (
    <div className="bg-[#F5F8FF]  flex flex-col justify-between items-center py-16 px-6">
      {/* "And Many More" Section */}
      <div className="w-full flex justify-end">
        <h1 className="text-3xl font-bold text-black mr-10">& Many more...</h1>
      </div>

      {/* "How It Works" Section */}
      <div className="w-full flex justify-center mt-9">
        <h2 className="text-2xl font-semibold text-green-600">How It Works:</h2>
      </div>
    </div>
  );
};

export default HowItWorksAndMore;
