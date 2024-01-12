import React from 'react';

const StarRating = () => {
  return (
    <div className="tp-widget-stars">
      <div className="tp-stars tp-stars--5">
        <div
          style={{
            position: 'relative',
            height: 0,
            width: '100%',
            padding: 0,
            paddingBottom: '18.326693227091635%',
          }}
        >
          <svg
            role="img"
            aria-labelledby="starRating-b14poxmyeyf"
            viewBox="0 0 251 46"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
            }}
          >
            <title id="starRating-b14poxmyeyf" lang="en">
              5 out of five star rating on Trustpilot
            </title>
            {/* ... SVG Paths for the star rating */}
          </svg>
        </div>
      </div>
    </div>
  );
};

const VerificationLabel = () => {
  return (
    <div className="verification-label-wrapper">
      <div className="verification-label">
        <div className="label-icon">
          <div
            style={{
              position: 'relative',
              height: 0,
              width: '100%',
              padding: 0,
              paddingBottom: '100%',
            }}
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
              }}
            >
              {/* ... SVG Paths for the verification label */}
            </svg>
          </div>
        </div>
        <div className="tp-widget-review__source__information">
          <div className="tp-widget-review__source__arrow"></div>
          <div className="information-title">Verified review</div>
          <div className="information-text">
            <a
              href="https://support.trustpilot.com/hc/articles/223402468#verified-reviews-2"
              target="_blank"
            >
              Learn more
            </a>{' '}
            about review types
          </div>
        </div>
        <div className="label-text">Verified</div>
      </div>
    </div>
  );
};

const TrustpilotReview = () => {
  return (
    <div
      id="tp-widget-reviews"
      className="tp-widget-reviews"
      style={{
        userSelect: 'none',
        transitionTimingFunction: 'ease',
        transform: 'translateX(0px)',
        transitionDuration: '1s',
        width: '4400px',
      }}
    >
      <div className="tp-widget-review" style={{ width: '251px' }}>
        <div className="top-row">
          <StarRating />
        </div>
        <div className="tp-widget-review__source popover-activator">
          <VerificationLabel />
        </div>
        <a
          href="https://www.trustpilot.com/reviews/65a08e315d1a9f9b7e94ed2d?utm_medium=trustbox&utm_source=Slider"
          target="_blank"
          rel="nofollow"
        >
          <div className="header">I&apos;m impressed with my teacher</div>
        </a>
        <a
          href="https://www.trustpilot.com/reviews/65a08e315d1a9f9b7e94ed2d?utm_medium=trustbox&utm_source=Slider"
          target="_blank"
          rel="nofollow"
        >
          <div className="text">
            I&apos;m impressed with my teacher. She&apos;s prompt, prepared and
            keeps me on task even when...
          </div>
        </a>
        <div className="date-and-user-info-wrapper">
          <div className="name secondary-text">Hannah</div>
          <div className="date secondary-text">2 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default TrustpilotReview;
