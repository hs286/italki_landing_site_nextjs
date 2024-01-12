import React from 'react';
const LanguageIndicator = ({ color, count }) => {
  const indicators = Array.from({ length: count }, (_, index) => (
    <span
      key={index}
      className={`rounded-1 ${color}`}
      style={{ width: '2px', height: '10px', marginLeft: '2px' }}
    ></span>
  ));

  return (
    <div className="self-center" style={{ height: '10px' }}>
      <div className="flex flex-row items-center" style={{ height: '10px' }}>
        {indicators}
      </div>
    </div>
  );
};
const VideoList = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        {/* <img className="w-full" src="/path-to-your-image.jpg" alt="Profile image" /> */}
        <iframe
          class="w-full"
          src="https://www.youtube.com/embed/VUfk35YuN9M"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="cursor-pointer bg-white px-4 pt-4 pb-3 rounded-b-3 flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm leading-5 font-bold text-gray1 truncate">
                Fabio Zavatta
              </p>
              <p className="text-gray3 text-tiny leading-4 font-medium">
                Professional teacher
              </p>
            </div>
            <div>
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#313140"
              >
                <path
                  clipRule="evenodd"
                  d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mt-2 flex justify-between items-center h-5 overflow-hidden w-full space-x-2">
            <div className="flex space-x-4 shrink-0 flex-1 overflow-hidden">
              <div className="flex shrink-0">
                <span className="mr-1">Italian</span>
                <div className="self-center" style={{ height: '10px' }}>
                  <LanguageIndicator color="bg-info" count={4} />
                </div>
              </div>
              <div className="flex shrink-0">
                <span className="mr-1">English</span>
                <div className="self-center" style={{ height: '10px' }}>
                  <LanguageIndicator color="bg-success" count={6} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-tiny font-medium leading-4 text-gray3">
              Lessons start from
            </p>
            <p className="text-base font-bold text-gray1 leading-6">USD 7.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
