import React from 'react';
import LearningOptions from './learningOptions';
import ExploreButton from './exploreButton';

const LeyondClassroomLearning = () => {
  return (
    <>
      <div className="flex flex-col m-auto bg-[#f5f6f9]">
        <h2 class=" text-secondary1 mt-18 mb-10 text-center text-2xl leading-10 font-bold">
          Take learning beyond the classroom
        </h2>
        <LearningOptions />
      </div>
    </>
  );
};

export default LeyondClassroomLearning;
