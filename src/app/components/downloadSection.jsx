import React from 'react';

const DownloadSection = () => {
  return (
    <div
      style={{
        background:
          'url("https://scdn.italki.com/ng/static/image/milkway/homepage/bg.svg") repeat rgb(255, 67, 56)',
      }}
    >
      <div className="container flex justify-between">
        <div className="w-1/2 py-14">
          <h2 className="text-white mb-10">
            italki is available on Android and iOS
          </h2>
          <div className="flex">
            <a
              target="_blank"
              data-cy="hp-dl-app"
              href="https://itunes.apple.com/us/app/italki/id1140000003?"
              rel="nofollow"
            >
              <img
                className="lazyloaded"
                data-src="https://scdn.italki.com/ng/static/image/footer/AppStoreDownload.svg"
                loading="lazy"
                alt="download italki on App Store"
                style={{ height: '40px', width: 'auto' }} // Add width property here
                src="https://scdn.italki.com/ng/static/image/footer/AppStoreDownload.svg"
              />
            </a>
            <a
              target="_blank"
              data-cy="hp-dl-google"
              href="https://play.google.com/store/apps/details?id=com.italki.app"
              rel="nofollow"
            >
              <img
                className="py-0 ml-4 lazyloaded"
                data-src="https://scdn.italki.com/ng/static/image/footer/GoogleDownload.svg"
                loading="lazy"
                alt="download italki on Google Play"
                style={{ height: '40px' }}
                src="https://scdn.italki.com/ng/static/image/footer/GoogleDownload.svg"
              />
            </a>
          </div>
        </div>
        <div className="flex items-end">
          <img
            className="inline-block mr-2 lazyloaded"
            data-src="https://scdn.italki.com/ng/static/image/home/Asgard/homepage_bottom.png"
            loading="lazy"
            alt="Download the italki app on iOS and Android"
            src="https://scdn.italki.com/ng/static/image/home/Asgard/homepage_bottom.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
