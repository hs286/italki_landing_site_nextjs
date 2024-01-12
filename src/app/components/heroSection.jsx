import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div
      className="bg-white sm:px-8 pt-4 pb-6 md:pt-12 md:pb-8 mt-20"
      style={{ borderTop: '1px solid #F5F6F9' }}
    >
      <div className="flex m-auto max-w-grid-12  md:px-6">
        <div className="flex flex-col flex-1">
          <h1
            className="font-bold text-5xl text-gray1"
            style={{ lineHeight: '60px' }}
          >
            Become fluent in any <br /> language
          </h1>
          <ul className="list-none space-y-1 font-medium text-sm text-gray2 mt-7">
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  width={12}
                  height={12}
                  className=""
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt="sample"
                />
              </div>
              <span>
                Take customizable 1-on-1 lessons trusted by millions of users
              </span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  width={12}
                  height={12}
                  className=""
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt="sample2"
                />
              </div>
              <span>
                Learn from certified teachers that fit your budget and schedule
              </span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  width={12}
                  height={12}
                  className=""
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt="sample3"
                />
              </div>
              <span>Connect with a global community of language learners</span>
            </li>
          </ul>
          <button
            type="button"
            className="ant-btn mt-5 w-50 sm:mt-7  ant-btn-secondary"
          >
            <span>Start now</span>
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <picture>
            <source
              srcSet="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp"
              type="image/webp"
            />
            <img
              height="360"
              width="560"
              className=""
              src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
