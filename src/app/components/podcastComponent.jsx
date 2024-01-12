import React from 'react';

const podcast = [
  {
    img: 'https://scdn.italki.com/ng/static/image/asgardhp/intro_assesment.jpg',
    title: 'Podcast',
    description: 'Listen to locals talk about a language. Play a podcast!',
    button: 'Listen now',
  },
];
// const lan = [sd'ds]
const PodcastComponent = () => {
  return (
    <>
      {podcast?.map((data, index) => {
        return (
          <>
            <div
              style={{ height: '392px', width: '360px' }}
              className="rounded-3 bg-white overflow-hidden relative shrink-0"
            >
              <div className="relative">
                <img
                  className="z-0 absolute left-0 top-0 ls-is-cached lazyloaded"
                  data-src={data.img}
                  loading="lazy"
                  alt="Assessment"
                  src={data.img}
                />
              </div>
              <div
                style={{ height: '212px', borderTopRightRadius: '35px' }}
                className="bg-white z-10 absolute bottom-0 left-0 w-full p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col">
                  <span className="text-gray1 text-xl leading-8 font-bold">
                    {data.title}
                  </span>
                  <span
                    style={{ lineHeight: '22px' }}
                    className="text-gray2 text-sm font-medium mt-1"
                  >
                    {data.description}
                  </span>
                </div>
                <div className="flex items-center cursor-pointer w-auto">
                  <span
                    className="text-info font-extrabold text-sm leading-6 mr-1"
                    style={{ color: '' }}
                  >
                    {data.button}
                  </span>
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00B3BD"
                  >
                    <path
                      clipRule="evenodd"
                      d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PodcastComponent;
