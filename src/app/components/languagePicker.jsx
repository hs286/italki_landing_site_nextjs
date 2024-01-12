import React from 'react';
import VideoList from './videoList';

const LanguagePicker = () => {
  const languages = [
    'English',
    'Japanese',
    'Spanish',
    'Chinese',
    'French',
    'Italian',
    'German',
    'Portuguese',
    'Korean',
    'Arabic',
  ];

  return (
    <div
      className="container bg-bg1"
      style={{ paddingLeft: '12px', paddingRight: '12px' }}
    >
      <div className="sm:px-4">
        <h2 className="text-xl mt-10 md:mt-16 mb-4 md:mb-10 md:text-2xl leading-8 md:leading-10 font-bold text-left md:text-center">
          Pick from 150+ languages
        </h2>
        <div className="flex justify-center w-full space-x-2 mb-6 flex-wrap">
          {/* Language options */}
          {/* Note: You can map through an array of languages to generate these dynamically */}
          {languages.map((language, index) => (
            <div
              key={index}
              style={{ borderRadius: '27px' }}
              className="cursor-pointer h-8 px-4 mb-4 flex justify-center items-center text-sm leading-5 font-bold bg-white text-secondary2 active:bg-violet-700"
            >
              <span>{language}</span>
            </div>
          ))}

          {/* ... (repeat for other languages) */}
        </div>
      </div>

      {/* Video list section */}
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          {/* Add more VideoList components as needed, they will wrap to new lines automatically */}
        </div>
      </div>
    </div>
  );
};

export default LanguagePicker;
