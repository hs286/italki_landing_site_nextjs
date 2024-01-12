import React from 'react';
const array = [
  {
    id: 1,
    text: 'How does italki work?',
    type: 'accordian',
  },
  {
    id: 2,
    text: 'How many italki lessons a week can I take?',
    type: 'accordian',
  },
  {
    id: 3,
    text: 'Is italki worth it for learning a language?',
    type: 'accordian',
  },
  {
    id: 4,
    text: 'How do I become a teacher on italki?',
    type: 'accordian',
  },
  {
    id: 4,
    text: 'View All',
    type: 'viewButton',
  },
];
const FaqComponent = () => {
  return (
    <div className="py-5 mx-auto md:py-18 bg-[#f5f6f9]">
      <h2 className="text-2xl text-center leading-7 font-bold mb-10">
        Frequently asked questions
      </h2>
      {array.map((text) => (
        <div key={text.id} className="flex justify-center my-3">
          <div key={text.id} className="w-[50%] p-3 border rounded bg-white">
            <div
              // className={`ant-collapse-header flex justify-between w-full`}
              // className={'ant-collapse-header flex text.type==='accordian' ? justify-between:'justify-center' w-full'}
              className={`ant-collapse-header flex ${
                text.type === 'accordian' ? 'justify-between' : 'justify-center'
              } w-full`}
              role="tab"
              tabindex="0"
              aria-expanded="false"
            >
              {text.text}
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#313140"
                className="style_expand-icon__TGxvt ant-collapse-arrow"
              >
                <path
                  clip-rule="evenodd"
                  d="M7.97 9.97a.75.75 0 011.06 0L12 12.94l2.97-2.97a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 010-1.06z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
