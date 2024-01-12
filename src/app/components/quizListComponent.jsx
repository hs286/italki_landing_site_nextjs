import React from 'react';

const QuizListComponent = () => {
  return (
    <div
      className="relative overflow-hidden"
      // style={{ width: '744px', height: '392px' }}
    >
      <div className="z-0 absolute bg-gray6">
        <div className="space-y-6">
          <div className="flex space-x-6">
            <div
              className="flex flex-col justify-between bg-white rounded-3 p-4 cursor-pointer style_asgardShadow__PT896"
              // style={{ height: '114px', width: '360px' }}
            >
              <span
                className="asgardHP-podcast-text font-bold text-gray2 text-base shrink-0"
                style={{ lineHeight: '22px', height: '44px' }}
              >
                They repaired my watch, but ____ properly. ⏱
              </span>
              <div className="flex items-center">
                <span
                  className="ant-avatar inline-flex justify-center items-center ant-avatar-circle ant-avatar-image"
                  style={{
                    width: '24px',
                    height: '24px',
                    lineHeight: '22px',
                    fontSize: '18px',
                    border: '2px solid white',
                  }}
                >
                  <img
                    src="https://imagesavatar-static01.italki.com/11T174066290_Avatar.jpg"
                    srcSet="https://imagesavatar-static01.italki.com/11T174066290_Avatar.jpg"
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                    }}
                    alt="Avatar"
                  />
                </span>
                <span
                  className="text-sm font-normal text-gray3 ml-1"
                  style={{ lineHeight: '22px' }}
                >
                  254 quizzed
                </span>
              </div>
            </div>
            {/* Add more quiz components as needed */}
          </div>
          {/* Add more rows of quiz components as needed */}
        </div>
      </div>
    </div>
  );
};

export default QuizListComponent;
