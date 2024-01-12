import React from 'react';
import LanguageMenu from './footerLanguageMenu';
import SocialLinks from './footerSocialLinks';

const MainFooter = () => {
  return (
    <>
      <footer style={{ backgroundolor: '#fff' }} className="sm:pt-8 sm:pb-6">
        <LanguageMenu />
        <SocialLinks />
      </footer>
    </>
  );
};

export default MainFooter;
