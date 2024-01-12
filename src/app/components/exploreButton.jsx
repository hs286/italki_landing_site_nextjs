import React from 'react';

const ExploreButton = () => {
  return (
    <div className="flex justify-center mb-18 bg-[#f5f6f9] ">
      <button
        style={{ width: '360px' }}
        type="button"
        className="ant-btn ant-btn-white bg-white"
      >
        <span className="mr-2 font-bold text-sm leading-5">
          Explore the community
        </span>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#515164"
        >
          <path
            clipRule="evenodd"
            d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ExploreButton;
