import Image from 'next/image';
import React from 'react';
import OfferCard from './OfferCard';

const SeeWhatOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-bg1 py-5 mx-auto md:py-18 md:bg-white">
      <h2 className="w-full pb-6 text-lg leading-7 md:leading-10 md:text-2xl font-bold text-gray1 md:text-center md:pb-18 pl-4 md:ml-0">
        See what italki offers
      </h2>
      <OfferCard />
    </div>
  );
};

export default SeeWhatOffers;
