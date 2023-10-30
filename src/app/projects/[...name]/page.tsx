/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
// next
import { useParams, useRouter } from 'next/navigation';
// components
import ImgSlider from '../components/ImgSlider/ImgSlider';
// config
import { goldbachImages, watcherImages } from '../config/projects.config';
// sound
import useSound from 'use-sound';
// ------------------------------------------------ //

const mwSubtitle =
  'A complex admin dashboard used for a cryptocurrency trading system displaying real-time data';
const gbSubtitle =
  'A custom designed platform featuring a comprehensive login/registration system and a responsive user dashboard';
const commonLiStyle =
  'relative mt-1 text-[var(--text-light)] flex items-center gap-1 max-410:text-sm';
const commonDotStyle =
  'w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 display: inline-block';
const commonDivStyle =
  'mt-2 text-[var(--text-light)] self-start max-410:text-sm';

const MwDescription = () => {
  return (
    <>
      <div className={commonDivStyle}>
        This app was constructed for a private client in need of an interface
        for a cryptocurrency trading system (developed using Golang).
      </div>
      <div className={commonDivStyle}>
        Embarking on this project was simultaneously challenging and enjoyable,
        as it required connecting my app to a mock backend service supplied by
        the client. The “real” Go code was never shared due to security
        concerns.
      </div>
      <div className={commonDivStyle}>
        Ensuring that the mock data structures mirrored the actual ones was
        imperative. To establish this, I utilized the “yup” schema validation
        library, implementing a stringent data validation process.
      </div>
      <div className={commonDivStyle}>
        The app was linked to the Golang server using Autobahn and WebSockets to
        access real-time data, which then had to be displayed in specific
        manners.
      </div>
      <div className={commonDivStyle}>
        One notable feature of the app is a custom candle/bar chart, constructed
        using Apache ECharts, which displays the real-time data transmitted from
        the Golang server. Adapting the ECharts to React presented a delightful
        challenge since the documentation is primarily for vanilla JS.
        Consequently, processing the data structures sent from the server and
        adapting them to align with EChart’s required structure was a
        significant task.
      </div>
      <div className={commonDivStyle}>
        Another intriguing feature is the “Add/Edit pair” modal functionality.
        This modal offers intricate functionality allowing the selection of
        “short” and “long” accounts, the addition or alteration of “sub-account”
        numbers, management of “sub-account trading volumes”, and a checkbox to
        indicate a “short” or “long” position. All this data had to be
        pre-populated and subsequently sent back to the server once the user
        finalized their selections.
      </div>
      <div className={commonDivStyle}>
        These highlights represent merely a fraction of the app’s capabilities.
        The journey of building it was immensely educational and fun, presenting
        numerous challenges that enabled me to significantly enhance my coding
        skills.
      </div>
    </>
  );
};

const GbDescription = () => {
  return (
    <>
      <div className={commonDivStyle}>
        This public website (hosted{' '}
        <a href='https://goldbachprime.com/' className='text-[var(--fillings)]'>
          here
        </a>
        ) was developed for a client and tailored to a custom design, ensuring
        full responsiveness across all screen sizes.
      </div>
      <div className={commonDivStyle}>
        The project granted me an immersive experience into the intricate
        workings of web authentication and authorization. It was not only
        incredibly intriguing but also presented numerous learning
        opportunities.
      </div>
      <div className={commonDivStyle}>
        I opted to utilize the Next Auth library for the authentication process.
        To increase the website’s security, I employed a local backend to serve
        as a conduit between the server and my frontend, thereby ensuring
        absolutely no user information was transmitted to the frontend. The
        authorization process was executed utilizing the JWT (Json Web Token)
        message format.
      </div>
      <div className={commonDivStyle}>
        The user registration procedure deviated from traditional methods,
        necessitating users to provide a valid invitation code to create an
        account. Post-account creation, an email was dispatched to the provided
        address. Users were required to activate their account by clicking a
        link in the email, subsequently being directed to the login page. I
        crafted complex forms for registration, invitation codes, and login,
        ensuring they validated and transmitted data to the server while
        processing various server responses accurately.
      </div>
      <div className={commonDivStyle}>
        Post-login, users are directed to a dashboard, showcasing a stylish
        display of account data and various navigation buttons.
      </div>
      <div className={commonDivStyle}>
        Constructing this website was not only immensely enjoyable but also
        significantly bolstered my understanding of authorization and
        authentication processes, while finely honing my responsive design
        skills.
      </div>
    </>
  );
};

const MwFeatures = () => {
  return (
    <ul className='self-start'>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Backend connection via Autobahn for
          real-time data display
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Display of real-time moving average
          data
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Custom candle/bar chart built with
          Apache ECharts to display volume data
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Trading volume adjustment via a
          dropdown, affecting displayed candle/bar data
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div>
            <div className={commonDotStyle} /> Buttons and switches to
            initiate/terminate trades and manage sub-account trades
          </div>
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Complex "Add/Edit" modal,
          pre-populated with real-time data, to display, collect, and transmit
          user selection data
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Elegant real-time trading data
          presentation via custom tables
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Stylish display and custom
          formatting of decimal data
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Dedicated "sub-account" page,
          accessible via specific "sub-account" click, featuring dynamic
          sub-account data display
        </div>
      </li>
    </ul>
  );
};

const GbFeatures = () => {
  return (
    <ul className='self-start'>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Tailored design that adapts to any
          device
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Exclusive registration via
          invitation codes
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Advanced data checks during user
          verification
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Robust authorization using JWT
          technology
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Sophisticated and versatile
          dashboard accessible post-login
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Public website is hosted{' '}
          <a
            href='https://goldbachprime.com/'
            className='text-[var(--fillings)]'
          >
            here
          </a>
        </div>
      </li>
    </ul>
  );
};

const MwStack = () => {
  return (
    <ul className='self-start'>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Framework: Next.js
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Language: Typescript
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> CSS Framework: Tailwind
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Component Library: Minimals (by
          MUI)
        </div>
      </li>
    </ul>
  );
};

const GbStack = () => {
  return (
    <ul className='self-start'>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Framework: Next.js
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> Language: Typescript
        </div>
      </li>
      <li className={commonLiStyle}>
        <div>
          <div className={commonDotStyle} /> CSS Framework: Tailwind
        </div>
      </li>
    </ul>
  );
};

const Project = () => {
  const params = useParams();
  const router = useRouter();
  const projectName = params.name[0];
  const [clickSound] = useSound('/assets/click_1.mp3', { volume: 0.25 });

  return (
    <div className='bg-[var(--background-dark)] h-full flex flex-col items-center'>
      <div
        className='flex flex-col items-center max-w-[1200px] mb-6 relative p-10 max-1000:p-8 max-850:p-6
        max-650:p-5 max-500:p-3 max-410:p-2'
      >
        <button
          className='absolute left-0 top-1 cursor-pointer text-[var(--fillings)] max-410:text-sm'
          onClick={() => router.push('/#projects')}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          ◄ Back to Portfolio
        </button>
        <div className='mt-8 text-3xl font-bold text-[var(--text-dark)] max-650:mt-10 max-410:text-2xl'>
          <div className='flex'>
            {projectName === 'watcher' ? 'Market Watcher' : 'Goldbach Prime'}
            <span className='text-2xl ml-[1px]'>*</span>
          </div>
        </div>
        <div className='text-[var(--text-light)] mt-2 text-sm max-410:text-xs'>
          {projectName === 'watcher' ? mwSubtitle : gbSubtitle}
        </div>
        <div className='mt-6 w-full'>
          <ImgSlider
            media={projectName === 'watcher' ? watcherImages : goldbachImages}
          />
        </div>
        <div className='mt-6 text-xl font-semibold text-[var(--text-dark)] self-start max-410:text-base'>
          Description
        </div>
        {projectName === 'watcher' ? <MwDescription /> : <GbDescription />}
        <video
          className='rounded-3xl mt-6'
          controls
          loop
          autoPlay
          muted
          preload=''
          src={
            projectName === 'watcher'
              ? '/assets/mw/mw-compressed.mp4'
              : '/assets/gb/gb-compressed.mp4'
          }
        />
        <div className='mt-6 text-xl font-semibold text-[var(--text-dark)] self-start max-410:text-base'>
          Features
        </div>
        {projectName === 'watcher' ? <MwFeatures /> : <GbFeatures />}
        <div className='mt-6 text-xl font-semibold text-[var(--text-dark)] self-start max-410:text-base'>
          Stack
        </div>
        {projectName === 'watcher' ? <MwStack /> : <GbStack />}
        <div className={`${commonDivStyle} mt-8 text-sm max-410:text-xs`}>
          *Disclaimer: Due to confidentiality agreements and in respect of my
          client's privacy, I cannot share the code associated with this
          project.
        </div>
      </div>
    </div>
  );
};

export default Project;
