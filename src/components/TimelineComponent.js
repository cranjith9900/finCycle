import React from 'react';
import VerticalTimeline from './VerticalTimeline';
import HorizontalTimeline from './HorizontalTimeline';

const TimelineComponent = () => {
  return (
    <div className="bg-[#F5F8FF] py-8">
    {/* Show Vertical Timeline on Small/Medium Screens */}
    <div className="block lg:hidden">
      <VerticalTimeline />
    </div>

    {/* Show Horizontal Timeline on Large Screens */}
    <div className="hidden lg:block">
      <HorizontalTimeline />
    </div>
  </div>
  );
};

export default TimelineComponent;
