import React from 'react';

const LearningOptions = () => {
  return (
    <div className="flex justify-center space-x-6 mb-6 px-12">
      <div
        style={{ width: '168px' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/leveltest.svg"
          loading="lazy"
          alt="Assessment"
          src="https://scdn.italki.com/ng/static/image/chineseday/leveltest.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Assessment
        </span>
      </div>

      <div
        style={{ width: '168px', border: '1px solid rgb(81, 81, 100)' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <div className="style_asgardhpContentTitle__GMQnw"></div>
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/podcasts.svg"
          loading="lazy"
          alt="Podcast"
          src="https://scdn.italki.com/ng/static/image/chineseday/podcasts.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Podcast
        </span>
      </div>

      <div
        style={{ width: '168px' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/articles.svg"
          loading="lazy"
          alt="Articles"
          src="https://scdn.italki.com/ng/static/image/chineseday/articles.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Articles
        </span>
      </div>

      <div
        style={{ width: '168px' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/topics.svg"
          loading="lazy"
          alt="Topics"
          src="https://scdn.italki.com/ng/static/image/chineseday/topics.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Topics
        </span>
      </div>

      <div
        style={{ width: '168px' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/exercise.svg"
          loading="lazy"
          alt="Prompt"
          src="https://scdn.italki.com/ng/static/image/chineseday/exercise.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Prompt
        </span>
      </div>

      <div
        style={{ width: '168px' }}
        className="bg-white rounded-1 h-12 flex items-center pl-4 cursor-pointer relative style_asgardShadow__PT896"
      >
        <img
          width="28"
          className="ls-is-cached lazyloaded"
          data-src="https://scdn.italki.com/ng/static/image/chineseday/questions.svg"
          loading="lazy"
          alt="Quiz"
          src="https://scdn.italki.com/ng/static/image/chineseday/questions.svg"
        />
        <span className="text-sm leading-5 font-bold ml-2 truncate pr-4">
          Quiz
        </span>
      </div>
    </div>
  );
};

export default LearningOptions;
