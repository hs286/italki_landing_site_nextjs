import React from 'react';
const teachers = [
  'English teachers',
  'Spanish teachers',
  'French teachers',
  'Japanese teachers',
  'German teachers',
  'Chinese teachers',
  'Korean teachers',
  'Italian teachers',
  'Russian teachers',
  'Portuguese teachers',
  'Arabic teachers',
  'Hindi teachers',
  'All teachers',
];
const languages = [
  'Learn English',
  'Learn Spanish',
  'Learn Japanese',
  'Learn French',
  'Learn German',
  'Learn Chinese',
  'Learn Korean',
  'Learn Italian',
  'Learn Russian',
  'Learn Portuguese',
  'Learn Arabic',
  'Learn Hindi',
];
const actions = [
  'Refer a Friend',
  'Buy a Gift Card',
  'italki Business',
  'Affiliate Program',
  'Partnership Program',
];
const italkiFeatures = [
  'italki Language Test',
  'italki Language Challenge',
  'italki Podcasts',
  'italki Quiz',
  'italki Community',
];

const LanguageMenu = () => {
  return (
    <div className="sm:px-4">
      <div
        className="md:flex md:m-auto md:px-4 md:py-10"
        style={{ maxWidth: '1128px' }}
      >
        {/* Language teachers */}
        <div className="md:w-1/5 sm:hidden md:flex md:flex-col">
          <div className="text-secondary1 font-bold text-base leading-6 mb-4">
            Language teachers
          </div>
          {teachers.map((teacher, index) => (
            <a
              key={index}
              className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="/en/teachers/english"
              style={{ lineHeight: '18px', textDecoration: 'none' }}
              rel=""
            >
              {teacher}
            </a>
          ))}
        </div>

        {/* Learn a language */}
        <div className="md:w-1/5 md:flex md:flex-col sm:mb-2">
          <div className="text-secondary1 font-bold text-base leading-6 mb-4">
            Learn a language
          </div>
          {/* ... (repeat similar structure for learning different languages) */}
          {languages.map((languages, index) => (
            <a
              key={index}
              className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="/en/teachers/english"
              style={{ lineHeight: '18px', textDecoration: 'none' }}
              rel=""
            >
              {languages}
            </a>
          ))}
        </div>

        {/* Lessons */}
        <div className="md:w-1/5 sm:w-full flex flex-col">
          <div className="text-secondary1 font-bold text-base leading-6 mb-4">
            Lessons
          </div>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            1-on-1 Lessons
          </a>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            Group Class
          </a>
          <div className="text-secondary1 font-bold text-base leading-6 mb-4 mt-4">
            Teaching
          </div>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            Become a teacher
          </a>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            Teaching Code of Conduct
          </a>
          {/* ... (repeat similar structure for other lesson types) */}
          <div className="text-secondary1 font-bold text-base leading-6 mb-4 mt-4">
            Learning resources
          </div>
          {italkiFeatures.map((italkiFeatures, index) => (
            <a
              key={index}
              className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="/en/teachers/english"
              style={{ lineHeight: '18px', textDecoration: 'none' }}
              rel=""
            >
              {italkiFeatures}
            </a>
          ))}
        </div>

        {/* Teaching */}
        <div className="md:w-1/5 sm:w-full flex flex-col">
          {/* ... (similar structure for Teaching, Learning resources, and Promotions sections) */}
          <div className="text-secondary1 font-bold text-base leading-6 mb-4">
            Promotions
          </div>
          {actions.map((actions, index) => (
            <a
              key={index}
              className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="/en/teachers/english"
              style={{ lineHeight: '18px', textDecoration: 'none' }}
              rel=""
            >
              {actions}
            </a>
          ))}
          <div className="text-secondary1 font-bold text-base leading-6 mt-4">
            More
          </div>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            FAQ
          </a>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            italki Blog
          </a>
          <a
            className="text-secondary2 font-sm text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
            href="/en/teachers"
            style={{ lineHeight: '18px', textDecoration: 'none' }}
            rel=""
          >
            Download App
          </a>
        </div>

        {/* More */}
        <div className="md:w-1/5">
          {/* ... (similar structure for More section) */}
          <div className="flex md:flex-col md:space-y-4 mb-6 sm:flex-row">
            <div className="sm:flex-1 h-10">
              <div
                className="flex justify-around p-2"
                data-cy="ft-currency"
                style={{ width: '100%' }}
              >
                <span className="ant-select-selection-item">
                  <span data-cy="ft-currency-usd">English</span>
                </span>
                <span
                  className="ant-select-arrow"
                  unselectable="on"
                  aria-hidden="true"
                  style={{ userSelect: 'none' }}
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#313140"
                    className="italki-dropdown-arrow-icon"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.97 9.97a.75.75 0 011.06 0L12 12.94l2.97-2.97a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 010-1.06z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="sm:flex-1 h-10">
              <div
                className="flex justify-around p-2"
                data-cy="ft-currency"
                style={{ width: '100%' }}
              >
                <span className="ant-select-selection-item">
                  <span data-cy="ft-currency-usd">USD $</span>
                </span>
                <span
                  className="ant-select-arrow"
                  unselectable="on"
                  aria-hidden="true"
                  style={{ userSelect: 'none' }}
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#313140"
                    className="italki-dropdown-arrow-icon"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.97 9.97a.75.75 0 011.06 0L12 12.94l2.97-2.97a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 010-1.06z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="tp-widget-wrapper visible">
              <a
                id="profile-link"
                target="_blank"
                href="https://www.trustpilot.com/review/www.italki.com?utm_medium=trustbox&amp;utm_source=Mini"
              >
                {/* Logo */}
                <div id="tp-widget-logo" className="tp-widget-logo">
                  <div className="">
                    <div
                      style={{
                        position: 'relative',
                        height: '0',
                        width: '100%',
                        padding: '0',
                        paddingBottom: '24.6031746031746%',
                      }}
                    >
                      <svg
                        role="img"
                        aria-labelledby="trustpilotLogo-aaa0t45rjyu"
                        viewBox="0 0 126 31"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          position: 'absolute',
                          height: '100',
                          width: '100%',
                          left: '0',
                          top: '0',
                        }}
                      >
                        {/* SVG Path for Trustpilot Logo */}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="tp-widget-stars" id="tp-widget-stars">
                  <div className="">
                    <div
                      className="tp-stars tp-stars--4 tp-stars--4--half"
                      style={{
                        position: 'relative',
                        height: '0',
                        width: '100%',
                        padding: '0',
                        paddingBottom: '18.326693227091635%',
                      }}
                    >
                      <svg
                        role="img"
                        aria-labelledby="starRating-q8n1xm2sr1"
                        viewBox="0 0 251 46"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: '20px',
                          width: '100px',
                          left: 0,
                          top: 0,
                        }}
                      >
                        <title id="starRating-q8n1xm2sr1" lang="en">
                          4.6 out of five star rating on Trustpilot
                        </title>
                        <svg
                          role="img"
                          aria-labelledby="trustpilotLogo-4gdpluu95z9"
                          viewBox="0 0 126 31"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                          }}
                        >
                          <title id="trustpilotLogo-4gdpluu95z9">
                            Trustpilot
                          </title>
                          <path
                            class="tp-logo__text"
                            d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z"
                            fill="#191919"
                          ></path>
                          <path
                            class="tp-logo__star"
                            fill="#00B67A"
                            d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
                          ></path>
                          <path
                            class="tp-logo__star-notch"
                            fill="#005128"
                            d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
                          ></path>
                        </svg>
                      </svg>
                      <svg
                        role="img"
                        aria-labelledby="starRating-q8n1xm2sr1"
                        viewBox="0 0 251 46"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: '20px',
                          width: '100px',
                          left: '0',
                          top: '0',
                        }}
                      >
                        <title id="starRating-q8n1xm2sr1" lang="en">
                          4.6 out of five star rating on Trustpilot
                        </title>
                        <g class="tp-star">
                          <path
                            class="tp-star__canvas"
                            fill="#00b67a"
                            d="M0 46.330002h46.375586V0H0z"
                          ></path>
                          <path
                            class="tp-star__shape"
                            d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g class="tp-star">
                          <path
                            class="tp-star__canvas"
                            fill="#00b67a"
                            d="M51.24816 46.330002h46.375587V0H51.248161z"
                          ></path>
                          <path
                            class="tp-star__canvas--half"
                            fill="#00b67a"
                            d="M51.24816 46.330002h23.187793V0H51.248161z"
                          ></path>
                          <path
                            class="tp-star__shape"
                            d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g class="tp-star">
                          <path
                            class="tp-star__canvas"
                            fill="#00b67a"
                            d="M102.532209 46.330002h46.375586V0h-46.375586z"
                          ></path>
                          <path
                            class="tp-star__canvas--half"
                            fill="#00b67a"
                            d="M102.532209 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            class="tp-star__shape"
                            d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g class="tp-star">
                          <path
                            class="tp-star__canvas"
                            fill="#00b67a"
                            d="M153.815458 46.330002h46.375586V0h-46.375586z"
                          ></path>
                          <path
                            class="tp-star__canvas--half"
                            fill="#00b67a"
                            d="M153.815458 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            class="tp-star__shape"
                            d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g class="tp-star">
                          <path
                            class="tp-star__canvas"
                            fill="#00b67a"
                            d="M205.064416 46.330002h46.375587V0h-46.375587z"
                          ></path>
                          <path
                            class="tp-star__canvas--half"
                            fill="#00b67a"
                            d="M205.064416 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            class="tp-star__shape"
                            d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                <div
                  id="reviews-summary"
                  className="tp-widget-businessinfo mt-7 text-sm"
                >
                  <div
                    aria-hidden="true"
                    className="tp-widget-businessinfo__trustscore"
                  >
                    <span>TrustScore</span>{' '}
                    <strong id="trust-score " className="text-sm">
                      4.6
                    </strong>
                  </div>
                  <div className="tp-widget-businessinfo__total text-sm">
                    <strong id="businessEntity-numberOfReviews-total">
                      12,739
                    </strong>
                    <span id="translations-reviews" className="text-sm">
                      reviews
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu;
