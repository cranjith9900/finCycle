import React from 'react';
import TimelineComponent from './TimelineComponent';
import mac from '../img/mac.png'
const em = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-col-reverse">
        
        {/* Image first on small screens */}
        <img
          src={mac}
          alt="Financial dashboard"
          className="w-full mx-auto mb-8"
        />

        {/* Timeline component */}
        <TimelineComponent />
        
      </div>
    </div>
  );
};

export default em;