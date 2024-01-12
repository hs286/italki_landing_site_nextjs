import React from 'react';
import PodcastComponent from './podcastComponent';
import QuizListComponent from './quizListComponent';
import ExploreButton from './exploreButton';

const MainPodcast = () => {
  return (
    <>
      <div className="flex justify-center px-12  space-x-6 style_contentAnimationPr__SxqeC bg-[#f5f6f9]">
        <PodcastComponent />
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
          <QuizListComponent />
          <QuizListComponent />

          <QuizListComponent />

          <QuizListComponent />
        </div>
      </div>
      <ExploreButton />
    </>
  );
};

export default MainPodcast;
