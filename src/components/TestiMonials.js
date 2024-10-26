import React from 'react';
import icon from '../img/icon.png';

function Testimonial() {
  return (
    <div className="bg-gray-800 text-white p-10 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-4/5 text-center flex justify-center">
          <p className="text-lg font-bold mb-4 p-auto md:p-4">I Run a Business</p>
          <p className="text-lg font-bold mb-4 p-auto md:p-4">I'm an Accountant</p>
          <p className="text-lg font-bold mb-4 p-auto md:p-4">I Found a Startup</p>
        </div>
        <div className="p-6 rounded-lg">
          <p className="text-lg mb-4">
            Partnering with Fincycle has been the best decision for our business. Their innovative solutions combined with exceptional customer service have driven our productivity to new heights. We've seen significant growth and streamlined our operations.
          </p>
          <div className="flex justify-center items-center">
            <img src={icon} alt="Susan Ommenu" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-sm font-bold">Susan Ommenu</p>
              <p className="text-xs text-gray-400">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;