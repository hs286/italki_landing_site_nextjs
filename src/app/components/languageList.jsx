import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TrustPilotWidget from './trustPilotWidget';
const countries = [
  { name: 'english', code: 'en', teachers: 5003 },
  { name: 'japanese', code: 'ja', teachers: 988 },
  { name: 'spanish', code: 'es', teachers: 2595 },
  { name: 'chinese', code: 'zh', teachers: 988 },
  { name: 'french', code: 'fr', teachers: 1064 },
  { name: 'italian', code: 'it', teachers: 783 },
  { name: 'german', code: 'de', teachers: 509 },
  { name: 'all', code: 'all', teachers: 2000 },
];
const LanguageList = () => {
  return (
    <div
      style={{ borderTop: '1px solid #F5F6F9' }}
      className="bg-white sm:px-8 pt-4 pb-6 md:pt-12 md:pb-8"
    >
      <div className="mt-8 mx-auto md:px-6 max-w-grid-12">
        <div
          style={{ border: '1px solid #E5E8ED' }}
          className="relative bg-white rounded-3 py-4 px-8 flex justify-end items-center max-w-grid-12"
        >
          <style>
            {`.asgardHP-lang-list::-webkit-scrollbar {
              display: none;
            }`}
          </style>
          <div className="absolute z-20 left-6 my-auto w-10 h-10 bg-gray6 rounded-full flex justify-center items-center cursor-pointer hover:shadow-hover">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#313140"
            >
              <path
                clipRule="evenodd"
                d="M14.28 16.28a.75.75 0 000-1.06l-2.97-2.97 2.97-2.97a.75.75 0 00-1.06-1.06l-3.5 3.5a.75.75 0 000 1.06l3.5 3.5a.75.75 0 001.06 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="z-20 absolute right-6 w-10 h-10 bg-gray6 rounded-full  cursor-pointer hover:shadow-hover flex items-center justify-end">
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
          <div className="asgardHP-lang-list sm:mx-1 overflow-auto">
            <div className="flex relative transition-all duration-500">
              {countries.map((country) => (
                <Link
                  key={country.code}
                  href={`/en/teachers/${country.code}`}
                  target="_blank"
                >
                  <div
                    data-cy={`hp-lang-${country.code}`}
                    style={{ width: '156px' }}
                    className="hp-language-item relative h-14 shrink-0 mr-4 pl-4 cursor-pointer rounded-3 flex flex-nowrap items-center hover:"
                  >
                    {/* You can replace the image source with the actual URL for each country */}
                    <Image
                      height={32}
                      width={32}
                      className=" inline-block mr-2 rounded-2"
                      style={{ background: '#FFCCC9', border: 'none' }}
                      src={`https://scdn.italki.com/ng/static/image/asgardhp/${country.name}.svg`}
                      alt={`${country.name} teacher`}
                    />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold uppercase">
                        {country.name}
                      </span>
                      <span
                        className=" text-gray3 text-[10px] text-tiny shrink-0"
                        style={{ lineHeight: '18px' }}
                      >
                        {country.teachers} Teachers
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 max-w-grid-12 flex justify-center">
          <div className="w-full">
            <TrustPilotWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageList;
