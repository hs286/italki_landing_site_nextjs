import Image from 'next/image';
import React from 'react';

const Card = ({ imageSrc, title, description, linkText, linkUrl }) => {
  return (
    <div className="px-4 md:px-0 md:col-span-8">
      <div className="flex flex-col justify-center items-center space-y-2 text-center bg-white rounded-3 h-full py-6 px-4 md:bg-transparent md:py-0">
        <Image
          height={300}
          width={300}
          className="flex-none lazyloaded"
          data-src={imageSrc}
          loading="lazy"
          alt={title}
          src={imageSrc}
        />
        <div className="flex-none pt-6 text-lg text-gray2 font-bold sm:text-base">
          {title}
        </div>
        <div className="flex-1 h-full text-gray3 text-sm">{description}</div>
        <div className="flex-none">
          <a target="_blank" href={linkUrl}>
            <p className="ml-6 flex" data-cy={`hp-wof-${linkText}`}>
              <span
                className="text-sm font-extrabold leading-6"
                style={{ color: '#00B3BD' }}
              >
                {linkText}
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
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const OfferCard = () => {
  return (
    <div
      className="flex"
      style={{ marginLeft: '-24px', marginRight: '-24px', display: 'flex' }}
    >
      <Card
        imageSrc="https://scdn.italki.com/ng/static/image/asgardhp/offers_01.png"
        title="1-on-1 lessons"
        description="Find teachers from all over the world sharing their languages, dialects, and cultures."
        linkText="Find my teacher"
        linkUrl="/en/teachers/"
      />
      <Card
        imageSrc="https://scdn.italki.com/ng/static/image/asgardhp/offers_04.png"
        title="Group Class"
        description="Fun and engaging online group classes designed and led by expert teachers."
        linkText="View all classes"
        linkUrl="/en/group-class"
      />
      <Card
        imageSrc="https://scdn.italki.com/ng/static/image/asgardhp/offers_02.png"
        title="Practice for free"
        description="Meet and share experiences with millions of language learners from more than 190 countries."
        linkText="Explore the community"
        linkUrl="/en/community/for-you"
      />
    </div>
  );
};

export default OfferCard;
